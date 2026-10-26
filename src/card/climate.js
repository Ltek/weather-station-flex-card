// Climate data for the records, rain and garden panels, in one shape whatever
// the source. Names follow Open-Meteo's daily variables (temperature_2m_max,
// temperature_2m_min, precipitation_sum, wind_gusts_10m_max,
// et0_fao_evapotranspiration) with a daily_units map, which is also what the
// coagmet_records package writes, so a CoAgMET sensor and Open-Meteo read alike.
//   areaSummary(hass, c)   -> Promise<summary | null>  CoAgMET sensor, else Open-Meteo (modelled)
//   openMeteoNow(hass, c)  -> Promise<now | null>      forecast lows, soil, evapotranspiration
//   convert(value, unit, hass, kind)                   to Home Assistant's units
export const TMAX = "temperature_2m_max";
export const TMIN = "temperature_2m_min";
export const PRECIP = "precipitation_sum";
export const GUST = "wind_gusts_10m_max";
export const ET0 = "et0_fao_evapotranspiration";

const ARCHIVE = "https://archive-api.open-meteo.com/v1/archive";
const FORECAST = "https://api.open-meteo.com/v1/forecast";
const NOW_TTL = 30 * 60e3;

/** True when Home Assistant uses US units (°F, mph, in). */
export const usUnits = (hass) => hass?.config?.unit_system?.temperature !== "°C";

/** The area-records sensor from the coagmet_records package (or a configured one). */
export function areaSensor(hass, c = {}) {
  if (c.records_entity) return hass?.states?.[c.records_entity] ? c.records_entity : null;
  return Object.keys(hass?.states || {}).find((id) => id.startsWith("sensor.") && hass.states[id].attributes?.coagmet_station) || null;
}

/** Home coordinates: the panel's own, else Home Assistant's. */
export function homeOf(hass, c = {}) {
  const lat = Number(c.latitude ?? hass?.config?.latitude), lon = Number(c.longitude ?? hass?.config?.longitude);
  return Number.isFinite(lat) && Number.isFinite(lon) ? { lat, lon } : null;
}

// --- units -----------------------------------------------------------------------
const TEMP = { "°F": "f", "°C": "c" }, LEN = { inch: "in", in: "in", mm: "mm" }, SPEED = { "mp/h": "mph", mph: "mph", "km/h": "kmh", "m/s": "ms", kn: "kn" };

/** A value in a daily_units unit, in Home Assistant's units: { value, unit }. */
export function convert(value, unit, hass) {
  if (value == null || !Number.isFinite(Number(value))) return null;
  let v = Number(value);
  const us = usUnits(hass);
  if (TEMP[unit]) {
    if (TEMP[unit] === "f" && !us) v = ((v - 32) * 5) / 9;
    if (TEMP[unit] === "c" && us) v = (v * 9) / 5 + 32;
    return { value: v, unit: us ? "°F" : "°C" };
  }
  if (LEN[unit]) {
    if (LEN[unit] === "in" && !us) v *= 25.4;
    if (LEN[unit] === "mm" && us) v /= 25.4;
    return { value: v, unit: us ? "in" : "mm" };
  }
  if (SPEED[unit]) {
    const mph = { mph: 1, kmh: 1 / 1.609344, ms: 2.236936, kn: 1.150779 }[SPEED[unit]] * v;
    return us ? { value: mph, unit: "mph" } : { value: mph * 1.609344, unit: "km/h" };
  }
  return { value: v, unit: unit || "" };
}

/** Like convert, for a temperature difference (degree days): no offset. */
export function convertDelta(value, unit, hass) {
  if (value == null) return null;
  const us = usUnits(hass);
  if (unit === "°F" && !us) return { value: (value * 5) / 9, unit: "°C" };
  if (unit === "°C" && us) return { value: (value * 9) / 5, unit: "°F" };
  return { value, unit };
}

// --- storage ---------------------------------------------------------------------
const mem = new Map();
function load(key) {
  if (mem.has(key)) return mem.get(key);
  try {
    const v = JSON.parse(localStorage.getItem(key) || "null");
    if (v) mem.set(key, v);
    return v;
  } catch (_e) {
    return null;
  }
}
function save(key, v) {
  mem.set(key, v);
  try { localStorage.setItem(key, JSON.stringify(v)); } catch (_e) { /* full or blocked: memory only */ }
}
const inflight = new Map();
function once(key, fn) {
  if (!inflight.has(key)) inflight.set(key, fn().finally(() => inflight.delete(key)));
  return inflight.get(key);
}

const isoDay = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const parse = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };

// --- the summary (same rules as coagmet_records.py) ------------------------------
/**
 * Records, frost, degree days, rain and evapotranspiration from daily rows
 * [{ d: "YYYY-MM-DD", high, low, rain, gust, et0 }] in `units` (daily_units).
 */
// Rounded like Python's round() (the exact binary value), so both match.
const rnd = (x, n) => Number(Number(x).toFixed(n));

export function summarize(rows, today, units) {
  const metric = units[TMAX] === "°C";
  const frostAt = metric ? 0 : 32, base = metric ? 10 : 50, cap = metric ? 30 : 86, wetAt = metric ? 0.25 : 0.01;
  const key = isoDay(today), md = key.slice(5), y = today.getFullYear(), m = today.getMonth() + 1;
  const done = rows.filter((x) => x.d < key);
  const best = (list, k, better) => list.reduce((b, x) => (x[k] != null && (!b || better(x[k], b.value)) ? { value: rnd(x[k], 2), date: x.d } : b), null);
  const four = (list, gust = true) => ({
    [TMAX]: best(list, "high", (a, b) => a > b),
    [TMIN]: best(list, "low", (a, b) => a < b),
    ...(gust ? { [GUST]: best(list, "gust", (a, b) => a > b) } : {}),
    [PRECIP]: best(list.filter((x) => (x.rain || 0) > 0), "rain", (a, b) => a > b),
  });
  const total = (list, k = "rain") => rnd(list.reduce((a, x) => a + (x[k] || 0), 0), 2);
  const same = done.filter((x) => x.d.slice(5) === md);
  const fs = `${m >= 7 ? y : y - 1}-07-01`;
  const frosts = done.filter((x) => x.d >= fs && x.low != null && x.low <= frostAt);
  const first = rows[0]?.d || key;
  const firsts = [];
  for (let yy = Number(first.slice(0, 4)); yy <= y; yy++) {
    const s0 = `${yy}-07-01`, e0 = `${yy + 1}-06-30`;
    if (e0 >= key || s0 < first) continue;
    const f = done.find((x) => x.d >= s0 && x.d <= e0 && x.low != null && x.low <= frostAt);
    if (f) firsts.push(Math.round((parse(f.d) - parse(s0)) / 864e5));
  }
  firsts.sort((a, b) => a - b);
  let typical = null;
  if (firsts.length) { const t = parse(fs); t.setDate(t.getDate() + firsts[firsts.length >> 1]); typical = isoDay(t).slice(5); }
  const ys = `${y}-01-01`;
  const gdd = done.filter((x) => x.d >= ys && x.high != null && x.low != null)
    .reduce((a, x) => a + Math.max(0, (Math.min(x.high, cap) + Math.min(Math.max(x.low, base), cap)) / 2 - base), 0);
  const years = [];
  for (let yy = Number(first.slice(0, 4)); yy < y; yy++) if (`${yy}-01-01` >= first) years.push(yy);
  const normal = (sel) => (years.length ? rnd(years.reduce((a, yy) => a + total(done.filter((x) => sel(x.d, yy))), 0) / years.length, 2) : null);
  const mm = String(m).padStart(2, "0");
  const last = [...done].reverse().find((x) => (x.rain || 0) >= wetAt);
  const wk = done.slice(-7);
  return {
    records: four(done),
    records_today: { date: md, years: same.length, ...four(same, false) },
    records_month: { month: m, ...four(done.filter((x) => x.d.slice(5, 7) === mm)) },
    frost: {
      season_start: fs,
      first: frosts[0] ? { date: frosts[0].d, value: rnd(frosts[0].low, 1) } : null,
      last: frosts.length ? { date: frosts.at(-1).d, value: rnd(frosts.at(-1).low, 1) } : null,
      nights: frosts.length,
      typical_first: typical,
      threshold: frostAt,
    },
    growing_degree_days: { since: ys, value: Math.round(gdd), base, cap },
    precipitation: {
      month_sum: total(done.filter((x) => x.d.startsWith(`${y}-${mm}`))),
      month_normal: normal((d, yy) => d.startsWith(`${yy}-${mm}`)),
      year_sum: total(done.filter((x) => x.d >= ys)),
      year_normal_to_date: normal((d, yy) => d.startsWith(`${yy}-`) && d.slice(5) < md),
      last_7_days: total(wk),
      last: last ? { date: last.d, value: rnd(last.rain, 2) } : null,
      years: years.length,
    },
    evapotranspiration: { last_7_days: wk.some((x) => x.et0 != null) ? total(wk, "et0") : null, days: wk.map((x) => ({ date: x.d, value: x.et0 })) },
  };
}

// --- Open-Meteo ------------------------------------------------------------------
function omUnits(us) {
  return us
    ? { q: "&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch", u: { [TMAX]: "°F", [TMIN]: "°F", [PRECIP]: "inch", [GUST]: "mp/h", [ET0]: "inch" } }
    : { q: "&wind_speed_unit=kmh", u: { [TMAX]: "°C", [TMIN]: "°C", [PRECIP]: "mm", [GUST]: "km/h", [ET0]: "mm" } };
}

/** Area summary from Open-Meteo's historical archive (ERA5, since 1940): modelled, refreshed daily. */
export function openMeteoArea(hass, c = {}) {
  const home = homeOf(hass, c);
  if (!home) return Promise.resolve(null);
  const us = usUnits(hass), today = new Date();
  const since = c.open_meteo_since || "1940-01-01";
  const key = `wsfc-om-area:${home.lat.toFixed(2)},${home.lon.toFixed(2)}:${us ? "us" : "si"}:${since}`;
  const hit = load(key);
  if (hit && hit.day === isoDay(today)) return Promise.resolve(hit.summary);
  return once(key, async () => {
    try {
      const { q, u } = omUnits(us);
      const end = new Date(today); end.setDate(end.getDate() - 1);
      const url = `${ARCHIVE}?latitude=${home.lat}&longitude=${home.lon}&start_date=${since}&end_date=${isoDay(end)}&daily=${[TMAX, TMIN, PRECIP, GUST, ET0].join(",")}&timezone=auto${q}`;
      const r = await fetch(url);
      if (!r.ok) throw new Error(`Open-Meteo ${r.status}`);
      const j = await r.json();
      const d = j.daily || {};
      const rows = (d.time || []).map((t, i) => ({ d: t, high: d[TMAX]?.[i], low: d[TMIN]?.[i], rain: d[PRECIP]?.[i], gust: d[GUST]?.[i], et0: d[ET0]?.[i] }))
        .filter((x) => x.high != null || x.low != null);
      if (!rows.length) return hit?.summary || null;
      const summary = {
        station_name: "Open-Meteo",
        source: "Open-Meteo historical weather (ERA5)",
        kind: "modelled",
        latitude: j.latitude,
        longitude: j.longitude,
        elevation: j.elevation,
        since: rows[0].d,
        through: rows.at(-1).d,
        daily_units: u,
        ...summarize(rows, today, u),
      };
      save(key, { day: isoDay(today), summary });
      return summary;
    } catch (e) {
      console.warn("weather-station-flex-card: Open-Meteo archive", e);
      return hit?.summary || null;
    }
  });
}

/** The CoAgMET sensor's summary, as stored (already in this shape). */
export function sensorArea(hass, c = {}) {
  const id = areaSensor(hass, c);
  const a = id ? hass.states[id].attributes : null;
  if (!a || a.error || !a.records) return null;
  return { ...a, entity: id, through: /^\d{4}-\d\d-\d\d$/.test(hass.states[id].state) ? hass.states[id].state : null };
}

/**
 * Area data by preference: area_source auto (CoAgMET sensor, else Open-Meteo),
 * coagmet, open_meteo or off.
 */
export async function areaSummary(hass, c = {}) {
  const src = c.area_source || "auto";
  if (src === "off") return null;
  if (src !== "open_meteo") {
    const s = sensorArea(hass, c);
    if (s || src === "coagmet") return s;
  }
  return openMeteoArea(hass, c);
}

/**
 * Open-Meteo now: daily lows / highs / rain / evapotranspiration for the past
 * week and the next one, and the current hour's soil temperature and moisture.
 */
export function openMeteoNow(hass, c = {}) {
  const home = homeOf(hass, c);
  if (!home) return Promise.resolve(null);
  const us = usUnits(hass);
  const key = `wsfc-om-now:${home.lat.toFixed(2)},${home.lon.toFixed(2)}:${us ? "us" : "si"}`;
  const hit = load(key);
  if (hit && Date.now() - hit.at < NOW_TTL) return Promise.resolve(hit.data);
  return once(key, async () => {
    try {
      const { q, u } = omUnits(us);
      const hourly = ["soil_temperature_6cm", "soil_temperature_18cm", "soil_moisture_3_to_9cm", "soil_moisture_9_to_27cm"];
      const url = `${FORECAST}?latitude=${home.lat}&longitude=${home.lon}&daily=${[TMAX, TMIN, PRECIP, ET0].join(",")}&hourly=${hourly.join(",")}&past_days=7&forecast_days=7&timezone=auto${q}`;
      const r = await fetch(url);
      if (!r.ok) throw new Error(`Open-Meteo ${r.status}`);
      const j = await r.json();
      const d = j.daily || {}, h = j.hourly || {};
      const days = (d.time || []).map((t, i) => ({ date: t, [TMAX]: d[TMAX]?.[i], [TMIN]: d[TMIN]?.[i], [PRECIP]: d[PRECIP]?.[i], [ET0]: d[ET0]?.[i] }));
      // The current hour (local time of the location).
      const nowKey = isoDay(new Date()) + "T" + String(new Date().getHours()).padStart(2, "0");
      let k = (h.time || []).findIndex((t) => t.startsWith(nowKey));
      if (k < 0) k = Math.max(0, (h.time || []).length - 1);
      const hu = j.hourly_units || {};
      const data = {
        source: "Open-Meteo",
        daily_units: { ...u, ...(j.daily_units || {}) },
        days,
        today: isoDay(new Date()),
        soil: Object.fromEntries(hourly.map((n) => [n, h[n]?.[k] == null ? null : { value: h[n][k], unit: hu[n] || "" }])),
      };
      save(key, { at: Date.now(), data });
      return data;
    } catch (e) {
      console.warn("weather-station-flex-card: Open-Meteo forecast", e);
      return hit?.data || null;
    }
  });
}
