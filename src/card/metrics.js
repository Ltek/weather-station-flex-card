// Metric catalog for metric tiles, graph series and the bulletin. `key` is a
// Weather Flex metric key (resolved through Weather Sources); `find` is a
// pattern for station values outside that catalog (rain totals).
import { metricSensor, findStationEntity, findHealthEntity } from "./resolve.js";
import { aqEntity } from "./air.js";

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
    // core "Daily Rain Piezo", Ecowitt Local "Daily Rain", Ecowitt Official "Daily piezo rainfall"
    find: /(daily|today|day)[\s_-]?(piezo[\s_-]?)?(rain|precip)|(rain|precipitation)[\s_-]?(daily|today)/i,
  },
  rain_24h: { label: "Rain 24h", icon: "mdi:weather-rainy", color: "#1e88e5", digits: 2, find: /24[\s_-]?h(ours?)?[\s_-]?(piezo[\s_-]?)?rain|rain(fall)?[\s_-]?24[\s_-]?h/i },
  rain_event: { label: "Rain event", icon: "mdi:weather-rainy", color: "#1e88e5", digits: 2, find: /event[\s_-]?(piezo[\s_-]?)?rain|rain[\s_-]?event/i },
  // Diagnostics: searched across every Ecowitt device (see findHealthEntity).
  battery: { label: "Station battery", icon: "mdi:battery", color: "#66bb6a", digits: null, find: /batt/i, health: true, unit: /%/, avoid: /volt/i },
  battery_voltage: { label: "Battery voltage", icon: "mdi:battery-charging", color: "#66bb6a", digits: 2, find: /batt.*volt|volt.*batt/i, health: true },
  capacitor: { label: "Capacitor voltage", icon: "mdi:flash", color: "#ffca28", digits: 1, find: /capacitor|cap[\s_-]?volt/i, health: true },
  signal: { label: "Station signal", icon: "mdi:signal", color: "#42a5f5", digits: 0, find: /signal[\s_-]?strength|\bsignal\b(?![\s_-]?quality)/i, health: true },
  signal_quality: { label: "Signal quality", icon: "mdi:signal-variant", color: "#42a5f5", digits: 0, find: /signal[\s_-]?quality/i, health: true },
  rssi: { label: "Station RSSI", icon: "mdi:wifi-strength-2", color: "#42a5f5", digits: 0, find: /rssi/i, health: true },
  online: { label: "Station online", icon: "mdi:lan-connect", color: "#43a047", digits: null, find: /\bonline\b/i, health: true, avoid: /gateway|_gw\b/i },
  hardware_id: { label: "Hardware ID", icon: "mdi:identifier", color: "#9e9e9e", digits: null, find: /hardware[\s_-]?id|\bhw[\s_-]?id\b/i, health: true },
  vpd: { label: "Vapour pressure deficit", icon: "mdi:water-opacity", color: "#8d6e63", digits: 2, find: /vapou?r[\s_-]?pressure[\s_-]?deficit|\bvpd\b/i },
  indoor_temperature: { label: "Indoor temperature", icon: "mdi:home-thermometer", color: "#ab47bc", digits: 1, find: /indoor[\s_-]?temp/i },
  aqi: { label: "AQI", icon: "mdi:air-filter", color: "#66bb6a", digits: 0, aq: "aqi" },
  pm2_5: { label: "PM2.5", icon: "mdi:blur", color: "#ffb74d", digits: 1, aq: "pm2_5" },
  pm10: { label: "PM10", icon: "mdi:blur-linear", color: "#a1887f", digits: 0, aq: "pm10" },
  ozone: { label: "Ozone", icon: "mdi:molecule", color: "#4fc3f7", digits: 3, aq: "ozone" },
  co2: { label: "CO₂", icon: "mdi:molecule-co2", color: "#4fc3f7", digits: 0, aq: "co2" },
  indoor_humidity: { label: "Indoor humidity", icon: "mdi:home-percent", color: "#7e57c2", digits: 0, find: /indoor[\s_-]?humid/i },
};

/** Entity for a metric: explicit entity, then Weather Sources, then pattern. */
export function metricEntity(metric, station, hass, explicit) {
  if (explicit) return explicit;
  const m = METRICS[metric];
  if (!m) return null;
  if (m.key) return metricSensor(station, hass, m.key);
  if (m.aq) return aqEntity(station, hass, m.aq);
  if (m.health) return findHealthEntity(station, hass, m.find, { unit: m.unit, avoid: m.avoid });
  if (m.find) return findStationEntity(station, hass, m.find);
  return null;
}

/** Sensible decimals for a value given its unit (pressure varies by unit). */
export function digitsFor(metric, unit, override) {
  if (override != null && override !== "") return Number(override);
  const d = METRICS[metric]?.digits;
  if (d != null) return d;
  if (/inHg/i.test(unit)) return 2;
  if (unit === "V") return 2;
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
