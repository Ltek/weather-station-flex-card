// Metric resolution shared by every panel. Reuses Weather Flex's Weather
// Sources resolver (ordered priority list + Ecowitt device auto-mapping) so a
// panel picks exactly the entity the hero/forecast sections would use.
import { WeatherForecastCard } from "../../vendor/weather-forecast-card/src/weather-forecast-card";
import "../flex/sections.js";

const P = WeatherForecastCard.prototype;

// The resolver methods only read this.config / this.hass, so a plain object
// borrowing them is enough — no need to construct a LitElement.
const ctxFor = (station, hass) => ({
  config: station,
  hass,
  _wfcSources: P._wfcSources,
  _wfcSlotEntityForKey: P._wfcSlotEntityForKey,
  _wfcMetricEntityChain: P._wfcMetricEntityChain,
});

/** Ordered candidate entity ids for a metric key (e.g. "temperature"). */
export function metricChain(station, hass, key) {
  if (!station || !hass) return [];
  return P._wfcMetricEntityChain.call(ctxFor(station, hass), key);
}

/**
 * Best sensor entity for a metric — the first non-weather.* entity in the chain.
 * History and statistics need a real sensor; weather.* entities only carry the
 * value as an attribute.
 */
export function metricSensor(station, hass, key) {
  return metricChain(station, hass, key).find((e) => !e.startsWith("weather.")) || null;
}

/** Current raw value + unit for a metric, following the chain. */
export function metricValue(station, hass, key) {
  for (const eid of metricChain(station, hass, key)) {
    const st = hass.states[eid];
    if (!st) continue;
    if (eid.startsWith("weather.")) {
      const v = st.attributes?.[key];
      if (v != null && v !== "") return { value: Number(v), unit: weatherUnit(st, key), entity: eid };
    } else if (!["unknown", "unavailable", ""].includes(st.state)) {
      const n = Number(st.state);
      return { value: isNaN(n) ? st.state : n, unit: st.attributes?.unit_of_measurement || "", entity: eid };
    }
  }
  return null;
}

function weatherUnit(st, key) {
  const a = st.attributes || {};
  if (/temperature|dew_point/.test(key)) return a.temperature_unit || "";
  if (/wind/.test(key) && key !== "wind_bearing") return a.wind_speed_unit || "";
  if (key === "pressure") return a.pressure_unit || "";
  if (key === "humidity" || key === "cloud_coverage") return "%";
  return "";
}

/** Explicit entity from panel config wins; otherwise resolve via sources. */
export function pick(panelCfg, station, hass, key, cfgKey = key) {
  return panelCfg?.entities?.[cfgKey] || metricSensor(station, hass, key);
}
