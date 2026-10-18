// Recorder access for the history panels. Short ranges read raw state history;
// long ranges read long-term statistics (hourly/daily mean/min/max), which Home
// Assistant keeps indefinitely for sensors with a state_class.

const CACHE_TTL_MS = 5 * 60 * 1000;
const cache = new Map();

async function cached(key, loader) {
  const hit = cache.get(key);
  if (hit && Date.now() - hit.at < CACHE_TTL_MS) return hit.data;
  const data = await loader();
  cache.set(key, { at: Date.now(), data });
  return data;
}

const toNum = (s) => {
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
};

/**
 * Raw history for the last `hours`. Returns { entity_id: [{ t, v }] } with t in
 * ms and v a number or null (unavailable breaks the line instead of reading 0).
 */
export function fetchHistory(hass, entityIds, hours) {
  const ids = [...new Set(entityIds.filter(Boolean))].sort();
  if (!ids.length || !hass?.callWS) return Promise.resolve({});
  const end = new Date();
  const start = new Date(end.getTime() - hours * 3600e3);
  return cached(`h|${hours}|${ids.join(",")}`, async () => {
    const res = await hass.callWS({
      type: "history/history_during_period",
      start_time: start.toISOString(),
      end_time: end.toISOString(),
      entity_ids: ids,
      minimal_response: true,
      no_attributes: true,
      significant_changes_only: false,
    });
    const out = {};
    for (const id of ids) {
      out[id] = (res?.[id] || []).map((p) => ({
        t: Math.round((p.lu ?? p.lc ?? 0) * 1000),
        v: toNum(p.s),
      }));
    }
    return out;
  });
}

/**
 * Long-term statistics. period: "hour" | "day". Returns
 * { statistic_id: [{ t, mean, min, max }] }.
 */
export function fetchStatistics(hass, statisticIds, days, period) {
  const ids = [...new Set(statisticIds.filter(Boolean))].sort();
  if (!ids.length || !hass?.callWS) return Promise.resolve({});
  const end = new Date();
  const start = new Date(end.getTime() - days * 86400e3);
  return cached(`s|${days}|${period}|${ids.join(",")}`, async () => {
    const res = await hass.callWS({
      type: "recorder/statistics_during_period",
      start_time: start.toISOString(),
      end_time: end.toISOString(),
      statistic_ids: ids,
      period,
      types: ["mean", "min", "max"],
    });
    const out = {};
    for (const id of ids) {
      out[id] = (res?.[id] || []).map((p) => ({
        t: typeof p.start === "number" ? p.start : Date.parse(p.start),
        mean: p.mean ?? null,
        min: p.min ?? null,
        max: p.max ?? null,
      }));
    }
    return out;
  });
}

/** Thin a dense series to at most `max` points by bucket-averaging. */
export function decimate(points, max = 300) {
  if (points.length <= max) return points;
  const size = Math.ceil(points.length / max);
  const out = [];
  for (let i = 0; i < points.length; i += size) {
    const bucket = points.slice(i, i + size);
    const vals = bucket.map((p) => p.v).filter((v) => v != null);
    out.push({ t: bucket[Math.floor(bucket.length / 2)].t, v: vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : null });
  }
  return out;
}
