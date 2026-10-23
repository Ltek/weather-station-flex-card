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

// Concentration breakpoints (upper bound of each category, matching AQI
// 50/100/150/200/300/500) — US EPA, PM2.5 as of 2024.
const BREAKS = {
  pm2_5: [9.0, 35.4, 55.4, 125.4, 225.4, 325.4], // µg/m³, 24 h
  pm10: [54, 154, 254, 354, 424, 604], // µg/m³, 24 h
  ozone: [0.054, 0.07, 0.085, 0.105, 0.2, 0.604], // ppm, 8 h (above 0.2 the EPA uses 1 h values)
};
const AQI_EDGES = [0, 50, 100, 150, 200, 300, 500];

// Readings without an EPA AQI: thresholds (in the given unit) for the
// Moderate / Elevated / High / Very high bands, from other health standards.
//   Benzene: ATSDR minimal risk levels — chronic 3 ppb, acute 9 ppb.
//   CO2: ~1000 ppm comfort guidance (ASHRAE), 5000 ppm workplace limit (OSHA).
export const OTHER_STANDARDS = {
  benzene: { re: /benzene/i, unit: "ppb", t: [1, 3, 9, 30], source: "ATSDR minimal risk levels (chronic 3 ppb, acute 9 ppb)" },
  co2: { re: /\bco2\b|carbon[\s_-]?dioxide/i, unit: "ppm", t: [1000, 2000, 5000, 10000], source: "ASHRAE comfort guidance 1000 ppm; OSHA limit 5000 ppm" },
};

const toPpm = (v, unit) => (/ppb/i.test(unit || "") ? v / 1000 : /µg|ug/i.test(unit || "") ? v / 1960 : v);

/** Interpolate a value on breakpoints [b1..bn] to 0–500 (AQI-like index). */
function onScale(v, b) {
  let lo = 0;
  for (let i = 0; i < b.length; i++) {
    if (v <= b[i]) return Math.round(AQI_EDGES[i] + ((v - lo) / (b[i] - lo)) * (AQI_EDGES[i + 1] - AQI_EDGES[i]));
    lo = b[i];
  }
  return 500;
}

/**
 * AQI-like index (0–500) for a reading: the EPA AQI for PM2.5, PM10 and ozone,
 * or a scale built from `thresholds` (Moderate, Elevated, High, Very high) for
 * anything else. null when there is no scale for it.
 */
export function pollutantIndex(kind, value, unit, thresholds) {
  if (value == null || isNaN(value)) return null;
  const v = Number(value);
  if (thresholds?.length) return onScale(v, [...thresholds]);
  if (BREAKS[kind]) return onScale(kind === "ozone" ? toPpm(v, unit) : v, BREAKS[kind]);
  const o = OTHER_STANDARDS[kind];
  if (o) return onScale(v, o.t);
  return null;
}

/** Category index (0 = Good … 5 = Hazardous) for a pollutant concentration. */
export function concentrationLevel(kind, value, unit, thresholds) {
  return aqiLevel(pollutantIndex(kind, value, unit, thresholds));
}

// Weather Flex metric keys that an air-quality source can supply.
const AQ_FOR_METRIC = { ozone: "ozone", pm2_5: "pm2_5", pm25: "pm2_5", pm10: "pm10", aqi: "aqi", co2: "co2", carbon_dioxide: "co2" };

/**
 * Extra entity for a Weather Flex metric that Weather Sources may not cover
 * (the hero's sub-header and chips): air-quality readings from the station,
 * AirNow or any outdoor sensor of that type. null for other metrics.
 */
export function extraMetricEntity(key, hass, config) {
  const kind = AQ_FOR_METRIC[key];
  if (!kind || !hass) return null;
  return aqEntity({ entity: config?.entity, metric_sources: config?.metric_sources }, hass, kind);
}
