// Metric catalog for metric tiles, graph series and the bulletin. `key` is a
// Weather Flex metric key (resolved through Weather Sources); `find` is a
// pattern for station values outside that catalog (rain totals).
import { metricSensor, findStationEntity } from "./resolve.js";

export const METRICS = {
  temperature: { label: "Temperature", icon: "mdi:thermometer", color: "#ef5350", digits: 1, key: "temperature" },
  apparent_temperature: { label: "Feels like", icon: "mdi:thermometer-lines", color: "#ff7043", digits: 1, key: "apparent_temperature" },
  dew_point: { label: "Dew point", icon: "mdi:water-thermometer-outline", color: "#26c6da", digits: 1, key: "dew_point" },
  humidity: { label: "Humidity", icon: "mdi:water-percent", color: "#26a69a", digits: 0, key: "humidity" },
  pressure: { label: "Pressure", icon: "mdi:gauge", color: "#42a5f5", digits: null, key: "pressure", trend: true },
  wind_speed: { label: "Wind", icon: "mdi:weather-windy", color: "#42a5f5", digits: 1, key: "wind_speed" },
  wind_gust_speed: { label: "Gust", icon: "mdi:weather-windy-variant", color: "#ff9800", digits: 1, key: "wind_gust_speed" },
  uv_index: { label: "UV index", icon: "mdi:weather-sunny-alert", color: "#ffa726", digits: 1, key: "uv_index", scale: "uv" },
  solar_radiation: { label: "Solar radiation", icon: "mdi:solar-power-variant", color: "#ffb300", digits: 0, key: "solar_radiation" },
  illuminance: { label: "Illuminance", icon: "mdi:brightness-5", color: "#fdd835", digits: 0, key: "illuminance" },
  rain_rate: { label: "Rain rate", icon: "mdi:weather-pouring", color: "#1e88e5", digits: 2, key: "precipitation" },
  rain_today: {
    label: "Rain today", icon: "mdi:weather-rainy", color: "#1e88e5", digits: 2, chart: "bar", cumulative: true,
    find: /(daily|today|day)[\s_-]?(rain|precip)|(rain|precipitation)[\s_-]?(daily|today)/i,
  },
  rain_24h: { label: "Rain 24h", icon: "mdi:weather-rainy", color: "#1e88e5", digits: 2, find: /24h[\s_-]?rain|rain[\s_-]?24h/i },
  rain_event: { label: "Rain event", icon: "mdi:weather-rainy", color: "#1e88e5", digits: 2, find: /event[\s_-]?rain|rain[\s_-]?event/i },
  vpd: { label: "Vapour pressure deficit", icon: "mdi:water-opacity", color: "#8d6e63", digits: 2, find: /vapou?r[\s_-]?pressure[\s_-]?deficit|\bvpd\b/i },
  indoor_temperature: { label: "Indoor temperature", icon: "mdi:home-thermometer", color: "#ab47bc", digits: 1, find: /indoor[\s_-]?temp/i },
  indoor_humidity: { label: "Indoor humidity", icon: "mdi:home-percent", color: "#7e57c2", digits: 0, find: /indoor[\s_-]?humid/i },
};

/** Entity for a metric: explicit entity, then Weather Sources, then pattern. */
export function metricEntity(metric, station, hass, explicit) {
  if (explicit) return explicit;
  const m = METRICS[metric];
  if (!m) return null;
  if (m.key) return metricSensor(station, hass, m.key);
  if (m.find) return findStationEntity(station, hass, m.find);
  return null;
}

/** Sensible decimals for a value given its unit (pressure varies by unit). */
export function digitsFor(metric, unit, override) {
  if (override != null && override !== "") return Number(override);
  const d = METRICS[metric]?.digits;
  if (d != null) return d;
  if (/inHg/i.test(unit)) return 2;
  if (/psi|kPa/i.test(unit)) return 1;
  return 0;
}

export function uvLevel(v) {
  if (v == null) return "";
  return v < 3 ? "Low" : v < 6 ? "Moderate" : v < 8 ? "High" : v < 11 ? "Very high" : "Extreme";
}

/** Pressure change over 3h that counts as rising/falling, in the sensor's unit. */
export function pressureThreshold(unit) {
  if (/inHg/i.test(unit)) return 0.03;
  if (/psi/i.test(unit)) return 0.015;
  if (/kPa/i.test(unit)) return 0.1;
  return 1;
}

export const CARDINALS = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
export const cardinal = (deg) => (deg == null || isNaN(deg) ? "—" : CARDINALS[Math.round((((deg % 360) + 360) % 360) / 22.5) % 16]);
