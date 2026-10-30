// Weather condition worked out from the station's own readings (condition_source:
// station), for the background, the hero and anything else that shows the
// weather entity's state. The entity's forecast still fills in what the
// station can't see (night-time cloud, tomorrow's weather).
//
//   stationCondition(hass, station, config) -> "sunny" | ... | null (not enough readings)
//   deriveHass(hass, entity, condition)     -> hass with the weather entity's state replaced
import * as SunCalc from "suncalc";
import { metricValue } from "./resolve.js";
import { lightningIds, strikeTime } from "../panels/lightning.js";
import { fetchHistory, clearHistoryCache } from "./history.js";
import { metricSensor } from "./resolve.js";

const toMph = (v) => (!v ? null : /km\/h/i.test(v.unit) ? v.value / 1.609344 : /m\/s/i.test(v.unit) ? v.value * 2.236936 : /kn/i.test(v.unit) ? v.value * 1.150779 : v.value);
const toF = (v) => (!v ? null : v.unit === "°C" ? (v.value * 9) / 5 + 32 : v.value);
const toInH = (v) => (!v ? null : /mm/i.test(v.unit) ? v.value / 25.4 : v.value);
const num = (v) => (v && Number.isFinite(v.value) ? v : null);

/** Clear-sky solar radiation (W/m²) for the sun's elevation, Haurwitz model. */
export function clearSkyRadiation(elevationDeg) {
  const cosZ = Math.sin((elevationDeg * Math.PI) / 180);
  if (cosZ <= 0.02) return 0;
  return 1098 * cosZ * Math.exp(-0.059 / cosZ);
}

/** Sun elevation in degrees: Home Assistant's sun.sun if present, else SunCalc. */
export function sunElevation(hass, now = new Date()) {
  const sun = hass?.states?.["sun.sun"]?.attributes?.elevation;
  if (sun != null && Number.isFinite(Number(sun))) return Number(sun);
  const { latitude: lat, longitude: lon } = hass?.config || {};
  if (lat == null) return null;
  return (SunCalc.getPosition(now, lat, lon).altitude * 180) / Math.PI;
}

/**
 * Calibration of the station's light sensor against the clear-sky model: the
 * 97th percentile of reading ÷ model over the last 10 days of history (sun above
 * 15°), so a sensor that reads low, or a high-altitude site that reads high, is
 * judged against its own clear days. Learned once a day per sensor; 1 until then.
 * `station_solar_scale` (percent) overrides it.
 */
const learned = new Map(); // entity -> { scale, at, pending }
const LEARN_TTL = 6 * 3600e3;

/** Forget what was learned (tests). */
export const resetSolarScale = () => { learned.clear(); clearHistoryCache(); };

export function solarScale(hass, station, c = {}) {
  const manual = Number(c.station_solar_scale);
  if (manual > 0) return manual / 100;
  const id = lightSensor(station, hass);
  return (id && learned.get(id)?.scale) || 1;
}

function lightSensor(station, hass) {
  return metricSensor(station, hass, "solar_radiation") || metricSensor(station, hass, "illuminance");
}

/** Learn the calibration in the background; `onDone` is called when a new value is ready. */
export function ensureSolarScale(hass, station, c = {}, onDone) {
  if (Number(c.station_solar_scale) > 0) return;
  const id = lightSensor(station, hass);
  if (!id || !hass?.callWS) return;
  const cur = learned.get(id);
  if (cur && (cur.pending || Date.now() - cur.at < LEARN_TTL)) return;
  const { latitude: lat, longitude: lon } = hass.config || {};
  if (lat == null) return;
  const lux = !metricSensor(station, hass, "solar_radiation");
  learned.set(id, { ...(cur || { scale: 1, at: 0 }), pending: true });
  fetchHistory(hass, [id], 240).then((h) => {
    const ratios = [];
    for (const p of h[id] || []) {
      if (p.v == null || p.v <= 0) continue;
      const el = (SunCalc.getPosition(new Date(p.t), lat, lon).altitude * 180) / Math.PI;
      if (el < 15) continue;
      const model = clearSkyRadiation(el) * (lux ? 120 : 1);
      if (model > 50) ratios.push(p.v / model);
    }
    let scale = 1;
    if (ratios.length >= 20) {
      ratios.sort((a, b) => a - b);
      scale = Math.max(0.2, Math.min(1.6, ratios[Math.floor(ratios.length * 0.97)]));
    }
    learned.set(id, { scale, at: Date.now(), samples: ratios.length, pending: false });
    onDone?.(scale);
  }).catch(() => learned.set(id, { scale: cur?.scale || 1, at: Date.now(), pending: false }));
}

/**
 * How much of the clear sky's light the station sees (0–1.3), from solar
 * radiation or, failing that, illuminance, against the calibrated clear-sky
 * value. Null when the sun is too low to tell (below 8°), or the station has
 * neither reading.
 */
export function skyClearness(hass, station, now = new Date(), c = {}) {
  return lightDetails(hass, station, now, c)?.ratio ?? null;
}

/** The working: { reading, unit, model, scale, clear, ratio, elevation } or null. */
export function lightDetails(hass, station, now = new Date(), c = {}) {
  const el = sunElevation(hass, now);
  if (el == null || el < 8) return el == null ? null : { elevation: el, low: true };
  const scale = solarScale(hass, station, c);
  const sr = num(metricValue(station, hass, "solar_radiation"));
  const lx = sr ? null : num(metricValue(station, hass, "illuminance"));
  const v = sr || lx;
  if (!v) return { elevation: el, none: true };
  const model = clearSkyRadiation(el) * (sr ? 1 : 120);
  const clear = model * scale;
  return { reading: v.value, unit: sr ? "W/m²" : "lx", entity: v.entity, model, scale, clear, ratio: Math.min(1.3, v.value / clear), elevation: el };
}

export function stationCondition(hass, station, c = {}, now = new Date()) {
  if (!hass || !station?.entity) return null;
  const w = hass.states[station.entity];
  const rate = toInH(num(metricValue(station, hass, "precipitation")));
  const tF = toF(num(metricValue(station, hass, "temperature")));
  const mph = toMph(num(metricValue(station, hass, "wind_speed")));
  const hum = num(metricValue(station, hass, "humidity"))?.value;
  const el = sunElevation(hass, now);
  const night = el != null ? el < -3 : /night/.test(w?.state || "");
  const clear = skyClearness(hass, station, now, c);
  const windy = mph != null && mph >= (Number(c.station_windy_mph) || 25);

  // Lightning in the last 15 minutes (the station's lightning sensor).
  const ids = lightningIds({}, station, hass);
  const struck = ids.count || ids.distance ? (() => { const t = strikeTime(hass, ids); return t && now - new Date(t) < 15 * 60e3; })() : false;

  // Precipitation first: the station measures it directly.
  if (rate != null && rate > 0) {
    if (struck) return "lightning-rainy";
    if (tF != null && tF <= 32) return "snowy";
    if (tF != null && tF <= 36) return "snowy-rainy";
    return rate >= (Number(c.station_pouring_inh) || 0.3) ? "pouring" : "rainy";
  }
  if (struck) return "lightning";

  // Fog: saturated air, little light and little wind. At night only with the entity's word.
  const dim = clear != null ? clear < 0.35 : night;
  if (hum != null && hum >= 97 && dim && (mph == null || mph < 6) && (clear != null || w?.state === "fog")) return "fog";

  if (night) {
    // The station can't see night-time cloud: use the entity's view of the sky.
    const es = w?.state;
    if (windy) return es === "cloudy" || es === "partlycloudy" || es === "windy-variant" ? "windy-variant" : "windy";
    if (!es || /sunny|clear/.test(es)) return "clear-night";
    if (["cloudy", "partlycloudy", "fog", "windy", "windy-variant", "exceptional"].includes(es)) return es === "partlycloudy" ? "partlycloudy" : es === "windy" ? "clear-night" : "cloudy";
    return es; // rain or snow the station hasn't caught (yet), hail, lightning
  }

  // Daytime sky from the station's light.
  if (clear == null) return null; // low sun: no verdict, keep the entity's
  if (windy) return clear >= 0.7 ? "windy" : "windy-variant";
  if (clear >= 0.7) return "sunny";
  if (clear >= 0.35) return "partlycloudy";
  return "cloudy";
}

/** One line for the editor: what the station sees and what it decided. */
export function conditionSummary(hass, station, c = {}, now = new Date()) {
  const w = hass?.states?.[station?.entity];
  const d = lightDetails(hass, station, now, c);
  const result = stationCondition(hass, station, c, now);
  const name = (x) => (x ? String(x).replace(/-/g, " ").replace(/^./, (m) => m.toUpperCase()) : "—");
  const parts = [];
  if (d?.low) parts.push(`Sun at ${d.elevation.toFixed(0)}°: too low to judge the light, using the entity`);
  else if (d?.none) parts.push("No solar radiation or illuminance sensor found");
  else if (d) parts.push(`${Math.round(d.reading)} ${d.unit} of a clear-sky ${Math.round(d.clear)} (model ${Math.round(d.model)} × calibration ${d.scale.toFixed(2)}, sun at ${d.elevation.toFixed(0)}°) = ${Math.round(d.ratio * 100)} %`);
  const rate = num(metricValue(station, hass, "precipitation")), hum = num(metricValue(station, hass, "humidity")), wind = num(metricValue(station, hass, "wind_speed"));
  parts.push(`rain ${rate ? `${rate.value} ${rate.unit}` : "—"} · humidity ${hum ? `${hum.value} %` : "—"} · wind ${wind ? `${wind.value} ${wind.unit}` : "—"}`);
  return `${parts.join(" · ")} → ${result ? name(result) : "no verdict"}. Entity: ${name(w?.attributes?.wsfc_entity_condition || w?.state)}.`;
}

/** hass with the weather entity's state replaced (same object while nothing changed). */
export function deriveHass(hass, entity, condition, cache) {
  const st = hass?.states?.[entity];
  if (!st || !condition || st.state === condition) return hass;
  if (cache && cache.hass === hass && cache.cond === condition) return cache.out;
  const out = { ...hass, states: { ...hass.states, [entity]: { ...st, state: condition, attributes: { ...st.attributes, wsfc_entity_condition: st.state, wsfc_condition_source: "station" } } } };
  if (cache) Object.assign(cache, { hass, cond: condition, out });
  return out;
}
