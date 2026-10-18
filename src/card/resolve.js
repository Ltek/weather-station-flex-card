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

/** Entity ids belonging to the device sources (enabled ones, in priority order). */
export function stationDeviceEntities(station, hass) {
  const out = [];
  const sources = station?.metric_sources?.sources || [];
  for (const s of sources) {
    if (s.disabled || typeof s.ref !== "string" || !s.ref.startsWith("device:")) continue;
    const id = s.ref.slice(7);
    for (const eid in hass?.entities || {}) if (hass.entities[eid]?.device_id === id) out.push(eid);
  }
  return out;
}

/**
 * First station entity whose id or name matches `re` (outdoor preferred) — for
 * values outside Weather Flex's metric catalog, e.g. today's rain total.
 */
export function findStationEntity(station, hass, re) {
  const cands = stationDeviceEntities(station, hass).filter((eid) => {
    const st = hass.states[eid];
    return st && re.test(`${eid} ${st.attributes?.friendly_name || ""}`);
  });
  return cands.find((e) => !/indoor|inside/i.test(e)) || cands[0] || null;
}

/** Live numeric value + unit of an entity (null when unavailable). */
export function entityValue(hass, eid) {
  const st = eid && hass?.states?.[eid];
  if (!st || ["unknown", "unavailable", ""].includes(st.state)) return null;
  const n = Number(st.state);
  return { value: isNaN(n) ? st.state : n, unit: st.attributes?.unit_of_measurement || "", entity: eid };
}

/** "online" | "partial" | "offline" | "unconfigured" for the core station metrics. */
export function stationStatus(station, hass) {
  const keys = ["temperature", "humidity", "wind_speed", "pressure"];
  const ids = keys.map((k) => metricSensor(station, hass, k)).filter(Boolean);
  if (!ids.length) return "unconfigured";
  const ok = ids.filter((e) => entityValue(hass, e) != null).length;
  return ok === ids.length ? "online" : ok ? "partial" : "offline";
}
