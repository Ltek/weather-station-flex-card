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
 * How much of the clear sky's light the station sees (0–1), from solar
 * radiation or, failing that, illuminance. Null when the sun is too low to tell
 * (below 8°), or the station has neither reading.
 */
export function skyClearness(hass, station, now = new Date()) {
  const el = sunElevation(hass, now);
  if (el == null || el < 8) return null;
  const clear = clearSkyRadiation(el);
  const sr = num(metricValue(station, hass, "solar_radiation"));
  if (sr) return Math.min(1.3, sr.value / clear);
  const lx = num(metricValue(station, hass, "illuminance"));
  // Roughly 120 lux per W/m² of sunlight.
  if (lx) return Math.min(1.3, lx.value / (clear * 120));
  return null;
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
  const clear = skyClearness(hass, station, now);
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

/** hass with the weather entity's state replaced (same object while nothing changed). */
export function deriveHass(hass, entity, condition, cache) {
  const st = hass?.states?.[entity];
  if (!st || !condition || st.state === condition) return hass;
  if (cache && cache.hass === hass && cache.cond === condition) return cache.out;
  const out = { ...hass, states: { ...hass.states, [entity]: { ...st, state: condition, attributes: { ...st.attributes, wsfc_entity_condition: st.state, wsfc_condition_source: "station" } } } };
  if (cache) Object.assign(cache, { hass, cond: condition, out });
  return out;
}
