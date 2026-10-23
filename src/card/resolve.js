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

/**
 * Station devices: each enabled device source, then its sibling devices (same
 * integration entry — e.g. Ecowitt Local's gateway next to its WS90 device).
 */
const SD_CACHE = new WeakMap();
export function stationDevices(station, hass) {
  const devsObj = hass?.devices || {};
  const key = JSON.stringify(station?.metric_sources?.sources || []);
  let c = SD_CACHE.get(devsObj);
  if (c && c.hass !== hass) { c.hass = hass; if (Object.keys(devsObj).length !== c.size0) c = null; }
  if (!c) { c = new Map(); c.size0 = Object.keys(devsObj).length; c.hass = hass; SD_CACHE.set(devsObj, c); }
  if (!c.has(key)) c.set(key, stationDevicesRaw(station, hass));
  return c.get(key);
}
function stationDevicesRaw(station, hass) {
  const out = [];
  const devs = hass?.devices || {};
  for (const s of station?.metric_sources?.sources || []) {
    if (s.disabled || typeof s.ref !== "string" || !s.ref.startsWith("device:")) continue;
    const id = s.ref.slice(7);
    if (!out.includes(id)) out.push(id);
    const entries = devs[id]?.config_entries || [];
    for (const [did, d] of Object.entries(devs)) {
      if (!out.includes(did) && (d.config_entries || []).some((e) => entries.includes(e))) out.push(did);
    }
  }
  return out;
}

// device -> entity ids, built once per entity-registry object (Home Assistant
// replaces hass.entities only when the registry changes, not on state changes).
const DEV_INDEX = new WeakMap();
export function deviceEntities(hass, deviceId) {
  const reg = hass?.entities;
  if (!reg) return [];
  let idx = DEV_INDEX.get(reg);
  // Re-check the registry size once per hass object, in case it was mutated in place.
  if (idx && idx.hass !== hass) { idx.hass = hass; if (Object.keys(reg).length !== idx.size0) idx = null; }
  if (!idx) {
    idx = new Map();
    for (const eid in reg) {
      const d = reg[eid]?.device_id;
      if (!d) continue;
      if (!idx.has(d)) idx.set(d, []);
      idx.get(d).push(eid);
    }
    idx.size0 = Object.keys(reg).length;
    idx.hass = hass;
    DEV_INDEX.set(reg, idx);
  }
  return idx.get(deviceId) || [];
}

/** Entity ids on the station devices, in device priority order. */
export function stationDeviceEntities(station, hass) {
  return stationDevices(station, hass).flatMap((id) => deviceEntities(hass, id));
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

// Integrations whose devices count as the station's for diagnostics.
const ECOWITT = new Set(["ecowitt", "ecowitt_local", "ha_ecowitt_iot"]);

/**
 * Devices for diagnostics (battery, signal, online …): the station's devices
 * (Weather Sources and their siblings), extra devices, then — unless turned
 * off — every other device from an Ecowitt integration (e.g. Ecowitt Local's
 * per-sensor devices next to the core integration).
 */
export function healthDevices(station, hass, c = {}) {
  const out = [...stationDevices(station, hass)];
  for (const d of Array.isArray(c.devices) ? c.devices : []) if (d && !out.includes(d)) out.push(d);
  if (c.include_ecowitt !== false) {
    const reg = hass?.entities || {};
    for (const eid in reg) {
      const r = reg[eid];
      if (r?.device_id && ECOWITT.has(r.platform) && !out.includes(r.device_id)) out.push(r.device_id);
    }
  }
  return out;
}

/**
 * Best diagnostic entity matching `re` across healthDevices: a reading (sensor)
 * beats an on/off one, a Weather Sources device breaks ties, outdoor beats
 * indoor; `unit` (e.g. /%/) is preferred when given; `avoid` excludes names.
 */
export function findHealthEntity(station, hass, re, { unit, avoid } = {}) {
  const own = new Set(stationDevices(station, hass));
  let best = null, bestScore = -1;
  for (const did of healthDevices(station, hass)) {
    for (const eid of deviceEntities(hass, did)) {
      const st = hass.states[eid];
      if (!st) continue;
      const h = `${eid} ${st.attributes?.friendly_name || ""}`;
      if (!re.test(h) || (avoid && avoid.test(h))) continue;
      let score = 0;
      if (!eid.startsWith("binary_sensor.")) score += 4;
      if (unit && unit.test(st.attributes?.unit_of_measurement || "")) score += 2;
      if (own.has(did)) score += 1;
      if (/indoor|inside/i.test(h)) score -= 3;
      if (["unavailable", "unknown"].includes(st.state)) score -= 1;
      if (score > bestScore) { best = eid; bestScore = score; }
    }
  }
  return best;
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

/** Entity a single source supplies for a metric, before overrides (null if none). */
export function sourceDefault(station, hass, ref, key) {
  if (!ref || !hass) return null;
  return P._wfcSlotEntityForKey.call(ctxFor(station, hass), ref, key) || null;
}

const INTEGRATION_NAMES = {
  ecowitt: "Ecowitt",
  ecowitt_local: "Ecowitt Local",
  ha_ecowitt_iot: "Ecowitt Official",
  openweathermap: "OpenWeatherMap",
  pirateweather: "Pirate Weather",
  nws: "National Weather Service",
  met: "Met.no",
  accuweather: "AccuWeather",
  wunderground: "Weather Underground",
  weatherunderground: "Weather Underground",
  wundergroundpws: "Weather Underground PWS",
  tomorrowio: "Tomorrow.io",
  template: "Template",
  airnow: "AirNow",
  pollenlevels: "Pollen Levels (Google)",
  kleenex_pollenradar: "Kleenex Pollen Radar",
  silam_pollen: "SILAM Pollen",
};

/** Human name of the integration that created an entity ("" when unknown). */
export function integrationOf(hass, eid) {
  const p = eid && hass?.entities?.[eid]?.platform;
  if (!p) return "";
  return INTEGRATION_NAMES[p] || p.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
