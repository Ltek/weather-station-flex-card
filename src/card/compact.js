// Compact view: a panel shown as a single row of small tiles with all its
// data (e.g. Air quality: AQI 50 Good · PM2.5 9.0 · PM10 14 · Ozone 0.032 ·
// CO₂ 452). Tapping the row can open the full panel (compact_expand).
//   compactTiles(p, hass, station, el) -> [{ label, value, unit, color, entity }]
//   COMPACT_TYPES                        panels that have a compact view
//   NEEDS_PANEL                          panels whose data the hidden panel element loads
import { html, css, nothing } from "lit";
import { metricValue, entityValue } from "./resolve.js";
import { metricEntity, cardinal, uvLevel } from "./metrics.js";
import { AQI_LEVELS } from "./air.js";
import { pollenModel, LEVEL_LABEL } from "./pollen.js";
import { airQualityModel } from "../panels/air-quality.js";
import { lightningIds, strikeTime } from "../panels/lightning.js";
import { convert, convertDelta, TMAX, TMIN } from "./climate.js";
import { watchForecast } from "./forecast.js";
import { sunInfo, moonInfo, timeFmt } from "./astro.js";
import { healthRows } from "../panels/health.js";

// Forecasts for the tiles (shared subscriptions; the card redraws on state updates).
const fc = new Map();
function forecast(hass, entity, type) {
  const k = `${entity}|${type}`;
  if (!fc.has(k) && hass?.connection && entity) {
    fc.set(k, null);
    watchForecast(hass, entity, type, (f) => fc.set(k, f));
  }
  return fc.get(k) || null;
}
const condName = (h, c) => (c ? h.localize?.(`component.weather.entity_component._.state.${c}`) || String(c).replace(/-/g, " ") : "");
const tempOf = (h, w, v) => {
  const u = w?.attributes?.temperature_unit || (h.config?.unit_system?.temperature === "°C" ? "°C" : "°F");
  return v == null ? null : convert(v, u, h)?.value;
};
const astroTiles = (h, withMoon = true) => {
  const out = [], tf = timeFmt(h), s = sunInfo(h), m = withMoon ? moonInfo(h) : null;
  if (s) {
    out.push(tile("Sunrise", tf.format(s.sunrise), "", "#ffb300"), tile("Sunset", tf.format(s.sunset), "", "#ff7043"));
    const mins = Math.round(s.daylightMs / 60000);
    out.push(tile("Daylight", `${Math.floor(mins / 60)}h ${mins % 60}m`));
  }
  if (m) out.push(tile("Moon", m.name, `${Math.round(m.fraction * 100)}%`, "#cfd8dc"));
  return out;
};

const POLLEN_COLOR = { none: "var(--secondary-text-color)", low: "var(--success-color, #43a047)", medium: "var(--warning-color, #ffa600)", high: "var(--error-color, #db4437)", off: "rgba(127,127,127,0.55)" };
const VPD_COLORS = ["#7fd6ff", "#b8f04a", "#43a047", "#ffc93c", "#ff5a1f"], VPD_NAMES = ["Very humid", "Gentle", "Comfortable", "Brisk", "Thirsty air"];
const UV_COLOR = { Low: "#43a047", Moderate: "#fdd835", High: "#fb8c00", "Very high": "#e53935", Extreme: "#8e24aa" };

const num = (v, d = 0) => (v == null || !Number.isFinite(Number(v)) ? "—" : Number(v).toFixed(d));
const tile = (label, value, unit = "", color = "", entity = null) => ({ label, value, unit, color, entity });
const live = (h, s, key, label, d) => {
  const v = metricValue(s, h, key);
  return v ? tile(label, num(v.value, d), v.unit, "", v.entity) : null;
};

const BUILD = {
  air_quality(p, h, s) {
    const m = airQualityModel(p, s, h);
    const out = [];
    if (m.aqiE && p.show_aqi !== false) out.push(tile("AQI", num(m.aqi), m.name || "", m.level != null ? AQI_LEVELS[m.level].color : "", m.aqiE));
    for (const r of m.rows) out.push(tile(r.label, num(r.value, r.digits), r.unit, r.level != null ? AQI_LEVELS[r.level].color : "", r.e));
    return out;
  },
  pollen(p, h) {
    const m = pollenModel(p, h);
    return m.rows.map((r) => tile(r.name, LEVEL_LABEL[r.level], r.value != null ? `${r.value}` : "", POLLEN_COLOR[r.level], r.entity));
  },
  rain(p, h, s) {
    const d = h.config?.unit_system?.temperature === "°C" ? 1 : 2;
    const rows = Array.isArray(p.rows) && p.rows.length ? p.rows : ["rain_rate", "rain_today", "rain_24h", "rain_event", "rain_week", "rain_month", "rain_year"];
    const names = { rain_rate: "Now", rain_hour: "1 h", rain_today: "Today", rain_24h: "24 h", rain_event: "Event", rain_week: "Week", rain_month: "Month", rain_year: "Year" };
    return rows.filter((k) => names[k]).map((k) => {
      const v = entityValue(h, (p.entities || {})[k] || metricEntity(k, s, h));
      if (!v || !Number.isFinite(v.value) || (k === "rain_rate" && !(v.value > 0))) return null;
      return tile(names[k], num(v.value, d), v.unit, "#1e88e5", v.entity);
    }).filter(Boolean);
  },
  lightning(p, h, s) {
    const ids = lightningIds(p, s, h);
    const c = entityValue(h, ids.count), dist = entityValue(h, ids.distance), b = entityValue(h, ids.battery);
    const out = [];
    if (c) out.push(tile("Strikes today", num(c.value), "", "#ffc93c", c.entity));
    if (dist && Number.isFinite(dist.value)) {
      const km = /mi/i.test(dist.unit) ? dist.value * 1.609344 : dist.value, us = h.config?.unit_system?.length !== "km";
      out.push(tile("Latest", us ? num(km / 1.609344) : num(km), us ? "mi" : "km", "#ffc93c", dist.entity));
    }
    const t = strikeTime(h, ids);
    if (t) out.push(tile("At", new Intl.DateTimeFormat(h.locale?.language, { hour: "numeric", minute: "2-digit" }).format(new Date(t)), "", "", ids.time || ids.distance));
    if (b && p.show_battery !== false) out.push(tile("Battery", num(b.value, b.unit === "V" ? 2 : 0), b.unit, "", b.entity));
    return out;
  },
  vpd(p, h, s, el) {
    const v = el?._value?.();
    if (!v) return [];
    const b = Math.max(0, [0.4, 0.8, 1.2, 1.6, Infinity].findIndex((m) => v.kpa < m));
    return [tile("VPD", num(v.kpa, 2), "kPa", VPD_COLORS[b], v.entity), tile("Air", VPD_NAMES[b], "", VPD_COLORS[b], v.entity)];
  },
  frost_watch(p, h, s, el) {
    const box = el?.shadowRoot?.querySelector(".box");
    const t = box?.querySelector(".t")?.textContent?.trim();
    const state = [...(box?.classList || [])].find((c) => c !== "box") || "";
    const col = { danger: "#e53935", heat: "#ff7a1f", frost: "#4aa3ff", tonight: "#4aa3ff", calm: "var(--success-color, #43a047)" }[state] || "";
    return [t ? tile("Watch", t, "", col) : null, live(h, s, "temperature", "Now", 0), live(h, s, "apparent_temperature", "Feels", 0)].filter(Boolean);
  },
  wind(p, h, s) {
    const d = metricValue(s, h, "wind_bearing");
    return [live(h, s, "wind_speed", "Wind", 1), live(h, s, "wind_gust_speed", "Gust", 1), d ? tile("From", cardinal(d.value), `${num(d.value)}°`, "", d.entity) : null].filter(Boolean);
  },
  temp_humidity(p, h, s) {
    return [live(h, s, "temperature", "Temp", 1), live(h, s, "apparent_temperature", "Feels", 1), live(h, s, "humidity", "Humidity", 0), live(h, s, "dew_point", "Dew point", 1)].filter(Boolean);
  },
  uv_solar(p, h, s) {
    const u = metricValue(s, h, "uv_index");
    const out = [];
    if (u) out.push(tile("UV", num(u.value, 1), uvLevel(u.value), UV_COLOR[uvLevel(u.value)] || "", u.entity));
    const r = live(h, s, "solar_radiation", "Solar", 0), i = live(h, s, "illuminance", "Light", 0);
    return [...out, r, i].filter(Boolean);
  },
  records(p, h, s, el) {
    const a = el?._area;
    if (!a?.records) return [];
    const U = a.daily_units || {};
    const t = (r, k) => { const x = r && convert(r.value, U[k], h); return x ? num(x.value, 0) + x.unit : "—"; };
    const td = a.records_today || {};
    return [
      tile("Today high", t(td[TMAX], TMAX), td[TMAX]?.date?.slice(0, 4) || "", "var(--wsfc-temp-color, #ff9800)"),
      tile("Today low", t(td[TMIN], TMIN), td[TMIN]?.date?.slice(0, 4) || "", "var(--wsfc-hum-color, #42a5f5)"),
      tile("All-time high", t(a.records[TMAX], TMAX), a.records[TMAX]?.date?.slice(0, 4) || "", "var(--wsfc-temp-color, #ff9800)"),
      tile("All-time low", t(a.records[TMIN], TMIN), a.records[TMIN]?.date?.slice(0, 4) || "", "var(--wsfc-hum-color, #42a5f5)"),
    ];
  },
  garden(p, h, s, el) {
    const out = [];
    const metric = h.config?.unit_system?.temperature === "°C";
    const tU = metric ? "°C" : "°F";
    const w = h.states[s?.entity];
    const lows = (el?._daily || []).filter((f) => f.templow != null).slice(0, 3);
    lows.forEach((f, i) => {
      const v = convert(f.templow, w?.attributes?.temperature_unit || tU, h)?.value;
      const frost = v != null && v <= (metric ? 2 : 36);
      out.push(tile(i === 0 ? "Tonight" : new Intl.DateTimeFormat(h.locale?.language, { weekday: "short" }).format(new Date(f.datetime)), `${num(v)}°`, frost ? "frost" : "low", frost ? "#4aa3ff" : ""));
    });
    const soil = el?._om?.soil?.soil_temperature_6cm;
    if (soil) out.push(tile("Soil", `${num(convert(soil.value, soil.unit, h)?.value, 0)}${tU}`, "", "#8d6e63"));
    const g = el?._area?.growing_degree_days;
    if (g) out.push(tile("GDD", num(convertDelta(g.value, el._area.daily_units?.[TMAX], h)?.value), "", ""));
    return out;
  },
};

// Forecasts, sky and station panels.
Object.assign(BUILD, {
  daily(p, h, s) {
    const w = h.states[s?.entity];
    return (forecast(h, s?.entity, "daily") || []).slice(0, Number(p.compact_days) || 5).map((f, i) => tile(
      i === 0 ? "Today" : new Intl.DateTimeFormat(h.locale?.language, { weekday: "short" }).format(new Date(f.datetime)),
      `${num(tempOf(h, w, f.temperature))}°`, f.templow != null ? `${num(tempOf(h, w, f.templow))}°` : "", "", null));
  },
  hourly(p, h, s) {
    const w = h.states[s?.entity], now = Date.now();
    return (forecast(h, s?.entity, "hourly") || []).filter((f) => Date.parse(f.datetime) > now - 3600e3).slice(0, Number(p.compact_hours) || 8)
      .map((f) => tile(new Intl.DateTimeFormat(h.locale?.language, { hour: "numeric" }).format(new Date(f.datetime)), `${num(tempOf(h, w, f.temperature))}°`,
        f.precipitation_probability ? `${f.precipitation_probability}%` : "", f.precipitation_probability >= 50 ? "#1e88e5" : ""));
  },
  forecast(p, h, s) {
    return BUILD.daily(p, h, s);
  },
  day(p, h, s) {
    const w = h.states[s?.entity];
    const off = Number(p.day_offset ?? 1);
    const f = (forecast(h, s?.entity, "daily") || [])[off];
    if (!f) return [];
    return [tile(off === 0 ? "Today" : off === 1 ? "Tomorrow" : new Intl.DateTimeFormat(h.locale?.language, { weekday: "long" }).format(new Date(f.datetime)), condName(h, f.condition)),
      tile("High", `${num(tempOf(h, w, f.temperature))}°`, "", "var(--wsfc-temp-color, #ff9800)"),
      tile("Low", `${num(tempOf(h, w, f.templow))}°`, "", "var(--wsfc-hum-color, #42a5f5)"),
      f.precipitation_probability != null ? tile("Rain", `${f.precipitation_probability}%`, "", "#1e88e5") : null].filter(Boolean);
  },
  bulletin(p, h, s) {
    const w = h.states[s?.entity];
    return [w ? tile("Now", condName(h, w.state)) : null, live(h, s, "temperature", "Temp", 0), live(h, s, "humidity", "Humidity", 0), live(h, s, "wind_speed", "Wind", 0)].filter(Boolean);
  },
  sky_tracker(p, h) {
    return astroTiles(h, true);
  },
  astronomy(p, h) {
    return astroTiles(h, true);
  },
  moon(p, h) {
    const m = moonInfo(h), tf = timeFmt(h);
    return [tile("Moon", m.name, `${Math.round(m.fraction * 100)}%`, "#cfd8dc"), m.rise ? tile("Rise", tf.format(m.rise)) : null, m.set ? tile("Set", tf.format(m.set)) : null].filter(Boolean);
  },
  health(p, h, s) {
    const COL = { ok: "var(--success-color, #43a047)", warn: "var(--warning-color, #ffa600)", bad: "var(--error-color, #db4437)" };
    return healthRows(s, h, p).flatMap((g) => g.rows.filter((r) => r.kind !== "id").map((r) =>
      tile(r.name, r.st?.state ?? "—", r.st?.attributes?.unit_of_measurement || "", COL[r.level] || "", r.eid))).slice(0, 8);
  },
});

export const COMPACT_TYPES = new Set(Object.keys(BUILD));
// Their data comes from the panel element (kept mounted, hidden).
export const NEEDS_PANEL = new Set(["vpd", "frost_watch", "records", "garden"]);

export function compactTiles(p, hass, station, el) {
  try {
    return (BUILD[p.type]?.(p, hass, station, el) || []).filter(Boolean);
  } catch (_e) {
    return [];
  }
}

export const compactStyles = css`
  .compact { display: flex; align-items: center; gap: calc(6px * var(--wsfc-sx, 1)); min-width: 0; overflow-x: auto; scrollbar-width: none; }
  .compact::-webkit-scrollbar { display: none; }
  .compact.tap { cursor: pointer; }
  .compact > ha-icon { --mdc-icon-size: 20px; color: var(--wsfc-head-icon, var(--secondary-text-color)); flex: 0 0 auto; margin-right: 2px; }
  .compact > .ct { font-size: 13px; font-weight: 500; white-space: nowrap; flex: 0 0 auto; margin-right: 4px; }
  .ctile { display: flex; align-items: center; gap: 6px; flex: 0 0 auto; padding: calc(4px * var(--wsfc-sy, 1)) calc(10px * var(--wsfc-sx, 1)) calc(4px * var(--wsfc-sy, 1)) calc(8px * var(--wsfc-sx, 1));
    border-radius: 10px; background: rgba(127, 127, 127, 0.1); line-height: 1.15; }
  .ctile .dot { width: 9px; height: 9px; border-radius: 50%; flex: 0 0 auto; background: var(--c); }
  .ctile .n { display: block; font-size: 10px; color: var(--secondary-text-color); white-space: nowrap; }
  .ctile .v { display: block; font-size: 14px; font-weight: 600; white-space: nowrap; font-variant-numeric: tabular-nums; }
  .ctile .v small { font-size: 11px; font-weight: 400; color: var(--secondary-text-color); margin-left: 3px; }
  .compact .empty { font-size: 12px; color: var(--secondary-text-color); }
`;

/** The compact row. onTap: open the full panel; else a tile opens its entity. */
export function compactRow(tiles, { icon, title, onTap, onTile }) {
  return html`<div class="compact ${onTap ? "tap" : ""}" role=${onTap ? "button" : nothing} tabindex=${onTap ? "0" : nothing}
      aria-label=${onTap ? `${title}: show the full panel` : title}
      @click=${onTap || nothing} @keydown=${onTap ? (e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), onTap()) : nothing}>
    ${icon ? html`<ha-icon icon=${icon} title=${title}></ha-icon>` : nothing}
    ${title ? html`<span class="ct">${title}</span>` : nothing}
    ${tiles.length
      ? tiles.map((t) => html`<div class="ctile" style=${t.color ? `--c:${t.color}` : ""} title=${[t.label, t.value, t.unit].filter(Boolean).join(" ")}
          @click=${!onTap && t.entity ? (e) => { e.stopPropagation(); onTile(t.entity); } : nothing}>
          ${t.color ? html`<span class="dot"></span>` : nothing}
          <span><span class="n">${t.label}</span><span class="v">${t.value}${t.unit ? html`<small>${t.unit}</small>` : nothing}</span></span>
        </div>`)
      : html`<span class="empty">Loading…</span>`}
  </div>`;
}
