// Air quality: entity lookup and US EPA AQI categories.
//
// Readings come from the station first (an Ecowitt PM2.5 / CO2 sensor on a
// station device), then from Home Assistant's AirNow integration (EPA
// monitors), then from any outdoor sensor with the matching device class.
import { stationDeviceEntities } from "./resolve.js";

// kind -> how to recognise it: device class, AirNow translation key, name pattern.
export const AQ_KINDS = {
  aqi: { dc: "aqi", airnow: "aqi", re: /\baqi\b|air[\s_-]?quality[\s_-]?index/i, label: "AQI" },
  pm2_5: { dc: "pm25", airnow: "pm25", re: /pm[\s_.-]?2[\s_.-]?5/i, label: "PM2.5" },
  pm10: { dc: "pm10", airnow: "pm10", re: /pm[\s_.-]?10/i, label: "PM10" },
  ozone: { dc: "ozone", airnow: "o3", re: /\bo3\b|ozone/i, label: "Ozone" },
  co2: { dc: "carbon_dioxide", airnow: null, re: /\bco2\b|carbon[\s_-]?dioxide/i, label: "CO₂" },
};

const INDOOR = /indoor|inside/i;
const usable = (hass, eid) => {
  const st = hass.states[eid];
  return st && !["unavailable", "unknown"].includes(st.state);
};

const matches = (hass, eid, k) => {
  const st = hass.states[eid];
  if (!st || !eid.startsWith("sensor.")) return false;
  const dc = st.attributes?.device_class;
  if (dc) return dc === k.dc;
  return k.re.test(`${eid} ${st.attributes?.friendly_name || ""}`);
};

/** Best entity for an air-quality reading (null when none). */
export function aqEntity(station, hass, kind) {
  const k = AQ_KINDS[kind];
  if (!k || !hass?.states) return null;
  // 1. A sensor on the station's own devices (outdoor first).
  const own = stationDeviceEntities(station, hass).filter((e) => matches(hass, e, k));
  const ownOut = own.filter((e) => !INDOOR.test(`${e} ${hass.states[e]?.attributes?.friendly_name || ""}`));
  if (ownOut.length) return ownOut.find((e) => usable(hass, e)) || ownOut[0];
  // 2. AirNow.
  const reg = hass.entities || {};
  if (k.airnow) {
    const an = Object.keys(reg).filter((e) => reg[e]?.platform === "airnow" && reg[e]?.translation_key === k.airnow && hass.states[e]);
    if (an.length) return an.find((e) => usable(hass, e)) || an[0];
  }
  // 3. Any outdoor sensor with that device class (e.g. Open-Meteo, WAQI, PurpleAir).
  const any = Object.keys(hass.states).filter((e) => {
    if (!e.startsWith("sensor.") || hass.states[e].attributes?.device_class !== k.dc) return false;
    return !INDOOR.test(`${e} ${hass.states[e].attributes?.friendly_name || ""}`);
  });
  return any.find((e) => usable(hass, e)) || null;
}

/** AirNow's reporting area sensor for the AQI entity's device (null if none). */
export function airnowStation(hass, aqiEid) {
  const reg = hass?.entities || {};
  const dev = reg[aqiEid]?.device_id;
  if (!dev) return null;
  return Object.keys(reg).find((e) => reg[e]?.device_id === dev && reg[e]?.translation_key === "station") || null;
}

// US EPA categories (AQI upper bounds).
export const AQI_LEVELS = [
  { max: 50, name: "Good", color: "#00e400" },
  { max: 100, name: "Moderate", color: "#ffff00" },
  { max: 150, name: "Unhealthy for sensitive groups", short: "Sensitive groups", color: "#ff7e00" },
  { max: 200, name: "Unhealthy", color: "#ff0000" },
  { max: 300, name: "Very unhealthy", color: "#8f3f97" },
  { max: Infinity, name: "Hazardous", color: "#7e0023" },
];

export const aqiLevel = (aqi) => (aqi == null || isNaN(aqi) ? null : AQI_LEVELS.findIndex((l) => aqi <= l.max));

// Concentration breakpoints (upper bound of each category) — EPA, PM2.5 as of 2024.
const BREAKS = {
  pm2_5: [9.0, 35.4, 55.4, 125.4, 225.4], // µg/m³, 24 h
  pm10: [54, 154, 254, 354, 424], // µg/m³, 24 h
  ozone: [0.054, 0.07, 0.085, 0.105, 0.2], // ppm, 8 h
};

/** Category index (0 = Good … 5 = Hazardous) for a pollutant concentration. */
export function concentrationLevel(kind, value, unit) {
  const b = BREAKS[kind];
  if (!b || value == null || isNaN(value)) return null;
  let v = Number(value);
  if (kind === "ozone" && /ppb/i.test(unit || "")) v /= 1000;
  if (kind === "ozone" && /µg|ug/i.test(unit || "")) v /= 1960; // µg/m³ -> ppm at 25 °C
  const i = b.findIndex((x) => v <= x);
  return i < 0 ? 5 : i;
}
