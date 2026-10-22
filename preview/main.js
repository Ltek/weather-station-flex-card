// Local preview: renders the card against a mock Home Assistant with the
// GW2000B entity names from weather-flex-card/ECOWITT.md and synthetic history.
// Not shipped — build with `node build.mjs --preview`.
import { LitElement, html, css } from "lit";
import * as mdi from "@mdi/js";
import { MockHass } from "./mocks/hass.ts";
import "./mocks/ha-state-icon.ts";
import "./mocks/ha-attribute-icon.ts";
import "./ha-editor-stubs.js";
import "../src/card/weather-station-flex-card.js";

// ---- Minimal HA element stubs ---------------------------------------------
const mdiPath = (icon) => {
  const name = String(icon || "").replace(/^mdi:/, "");
  const key = "mdi" + name.split("-").map((p) => p[0]?.toUpperCase() + p.slice(1)).join("");
  return mdi[key];
};
class HaIcon extends LitElement {
  static properties = { icon: {} };
  static styles = css`:host{display:inline-flex;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px);vertical-align:middle}svg{width:100%;height:100%}`;
  render() {
    const d = mdiPath(this.icon);
    return d ? html`<svg viewBox="0 0 24 24"><path fill="currentColor" d=${d}></path></svg>` : html``;
  }
}
customElements.define("ha-icon", HaIcon);
class HaCard extends LitElement {
  static styles = css`:host{display:block;background:var(--ha-card-background,var(--card-background-color,#1c1c1c));border-radius:var(--ha-card-border-radius,12px);box-shadow:var(--ha-card-box-shadow,none);border:var(--ha-card-border-width,1px) solid var(--ha-card-border-color,var(--divider-color,#e0e0e0));color:var(--primary-text-color);position:relative;box-sizing:border-box}`;
  render() { return html`<slot></slot>`; }
}
customElements.define("ha-card", HaCard);
customElements.define("hui-warning", class extends HTMLElement { connectedCallback() { this.style.cssText = "display:block;padding:12px;color:#ff9800"; } });

// ---- Mock station ------------------------------------------------------------
// Placeholder location (Denver, CO) — the real card uses your HA home location.
const LAT = 39.7392, LON = -104.9903;
const DEVICE_ID = "a2001fe7ea3992c7d8e64711b1cfd2bc";
const P = "sensor.gw2000b_";

// Deterministic pseudo-random so reloads look the same.
let seed = 42;
const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

const hourOf = (t) => { const d = new Date(t); return d.getHours() + d.getMinutes() / 60; };
// Diurnal model in °F: low ~6am, high ~3pm, with a slow multi-day drift.
const tempAt = (t) => 56 + 11 * Math.sin(((hourOf(t) - 9) / 24) * 2 * Math.PI) + 4 * Math.sin(t / (86400e3 * 3.3)) + (rnd() - 0.5) * 0.8;
const humAt = (t) => Math.max(12, Math.min(98, 62 - 22 * Math.sin(((hourOf(t) - 9) / 24) * 2 * Math.PI) + (rnd() - 0.5) * 3));
const dewFrom = (tF, rh) => {
  const tC = ((tF - 32) * 5) / 9, a = 17.27, b = 237.7;
  const g = (a * tC) / (b + tC) + Math.log(rh / 100);
  return ((b * g) / (a - g)) * 9 / 5 + 32;
};
const windAt = (t) => Math.max(0, 6 + 5 * Math.sin(((hourOf(t) - 11) / 24) * 2 * Math.PI) + (rnd() - 0.4) * 5);
const dirAt = (t) => (150 + 40 * Math.sin(t / 5.1e6) + (rnd() - 0.5) * 50 + 360) % 360;

function series(id, start, end, stepMs) {
  const out = [];
  for (let t = start; t <= end; t += stepMs) {
    let v;
    if (id.endsWith("outdoor_temperature")) v = tempAt(t);
    else if (id.endsWith("_humidity")) v = humAt(t);
    else if (id.endsWith("dewpoint")) v = dewFrom(tempAt(t), humAt(t));
    else if (id.endsWith("wind_speed")) v = windAt(t);
    else if (id.endsWith("wind_gust")) v = windAt(t) * (1.3 + rnd() * 0.5);
    else if (id.endsWith("wind_direction")) v = dirAt(t);
    else if (id.endsWith("daily_rain")) { const h = hourOf(t); v = h > 13 && h < 17 ? (h - 13) * 0.04 : h >= 17 ? 0.16 : 0; }
    else if (id.endsWith("relative_pressure")) v = 30.02 - 0.04 * Math.sin(t / 3.6e7);
    else if (id.endsWith("uv_index")) v = Math.max(0, 6 * Math.sin(((hourOf(t) - 7) / 12) * Math.PI));
    else if (id.endsWith("solar_radiation")) v = Math.max(0, 650 * Math.sin(((hourOf(t) - 7) / 12) * Math.PI));
    else v = 0;
    out.push({ t, v: Math.round(v * 100) / 100 });
  }
  return out;
}

const now = Date.now();
const cur = {
  temp: tempAt(now), hum: humAt(now), wind: windAt(now), dir: dirAt(now),
};

function sensor(id, state, unit, dc, name, extra = {}) {
  return {
    entity_id: id,
    state: String(state),
    attributes: { friendly_name: name, unit_of_measurement: unit, device_class: dc, state_class: "measurement", ...extra },
    last_changed: new Date().toISOString(),
    last_updated: new Date().toISOString(),
    context: { id: "ctx", user_id: null, parent_id: null },
  };
}

function stationStates() {
  const t = Math.round(cur.temp * 10) / 10, h = Math.round(cur.hum);
  const dew = Math.round(dewFrom(cur.temp, cur.hum) * 10) / 10;
  const w = Math.round(cur.wind * 100) / 100;
  return [
    sensor(P + "hourly_rain", 0.01, "in", "precipitation", "GW2000B Hourly Rain"),
    sensor(P + "outdoor_temperature", t, "°F", "temperature", "GW2000B Outdoor Temperature"),
    sensor(P + "feels_like_temperature", t, "°F", "temperature", "GW2000B Feels Like Temperature"),
    sensor(P + "dewpoint", dew, "°F", "temperature", "GW2000B Dewpoint"),
    sensor(P + "humidity", h, "%", "humidity", "GW2000B Humidity"),
    sensor(P + "indoor_temperature", 72.4, "°F", "temperature", "GW2000B Indoor Temperature"),
    sensor(P + "indoor_humidity", 38, "%", "humidity", "GW2000B Indoor Humidity"),
    sensor(P + "relative_pressure", 30.02, "inHg", "atmospheric_pressure", "GW2000B Relative Pressure"),
    sensor(P + "absolute_pressure", 24.68, "inHg", "atmospheric_pressure", "GW2000B Absolute Pressure"),
    sensor(P + "wind_speed", w, "mph", "wind_speed", "GW2000B Wind Speed"),
    sensor(P + "wind_gust", Math.round(w * 1.5 * 100) / 100, "mph", "wind_speed", "GW2000B Wind Gust"),
    sensor(P + "max_daily_wind_gust", 14.3, "mph", "wind_speed", "GW2000B Max Daily Wind Gust"),
    sensor(P + "wind_direction", Math.round(cur.dir), "°", undefined, "GW2000B Wind Direction"),
    sensor(P + "wind_direction_10m_avg", Math.round(cur.dir - 8), "°", undefined, "GW2000B Wind Direction 10m Avg"),
    sensor(P + "solar_radiation", 412.5, "W/m²", "irradiance", "GW2000B Solar Radiation"),
    sensor(P + "solar_lux", 52300, "lx", "illuminance", "GW2000B Solar Lux"),
    sensor(P + "uv_index", 4, "UV index", undefined, "GW2000B UV Index"),
    sensor(P + "rain_rate", 0, "in/h", "precipitation_intensity", "GW2000B Rain Rate"),
    sensor(P + "daily_rain", 0.02, "in", "precipitation", "GW2000B Daily Rain"),
  ];
}

const params = new URLSearchParams(location.search);
// ?sgcc=1: load a local copy of cataseven's Statistics Graph Chart Card
// (preview/build/sgcc/, not committed) to test the station graphs against it.
if (params.get("sgcc")) {
  const sc = document.createElement("script");
  sc.type = "module";
  sc.src = "/preview/build/sgcc/statistics-graph-chart-card.js";
  document.head.append(sc);
}
// ?windrose=1: same for aukedejong's Wind Rose Card (preview/build/windrose/).
if (params.get("windrose")) {
  const sc = document.createElement("script");
  sc.type = "module";
  sc.src = "/preview/build/windrose/windrose-card.js";
  document.head.append(sc);
}
let condition = params.get("condition") || "partlycloudy";
let dark = params.get("theme") !== "light";
const mock = new MockHass({ unitOfMeasurement: "°F", darkMode: dark, currentCondition: condition });

function buildHass() {
  mock.setCurrentConditions(condition);
  mock.setDarkMode(dark);
  const base = mock.getHass();
  base.themes = { darkMode: dark };
  const states = { ...base.states };
  const demo = states["weather.demo"];
  states["weather.openweathermap"] = {
    ...demo,
    entity_id: "weather.openweathermap",
    state: condition,
    attributes: { ...demo.attributes, friendly_name: "OpenWeatherMap", wind_speed_unit: "mph", pressure: 30.02, pressure_unit: "inHg", cloud_coverage: 40, uv_index: 4 },
  };
  const entities = {};
  for (const s of stationStates()) {
    states[s.entity_id] = s;
    entities[s.entity_id] = { entity_id: s.entity_id, device_id: DEVICE_ID, platform: "ecowitt" };
  }
  entities["weather.openweathermap"] = { entity_id: "weather.openweathermap", platform: "openweathermap" };
  // Pollen Levels (Google) and AirNow, for the pollen and air-quality panels.
  const add = (id, state, attributes, extra) => {
    states[id] = { entity_id: id, state: String(state), attributes, last_changed: "", last_updated: "", context: {} };
    entities[id] = { entity_id: id, ...extra };
  };
  const plant = (code, name, v, inSeason, tomorrow, type, season) =>
    add(`sensor.home_plants_${code.toLowerCase()}`, v, { friendly_name: `Plants (Home) ${name}`, code, type, inSeason, tomorrow_value: tomorrow, trend: tomorrow > v ? "up" : tomorrow < v ? "down" : "flat", season, unit_of_measurement: "UPI" }, { platform: "pollenlevels", device_id: "pl_plants" });
  plant("JUNIPER", "Juniper", 3, true, 4, "TREE", "Late winter, spring");
  plant("ELM", "Elm", 2, true, 2, "TREE", "Late winter, spring");
  plant("COTTONWOOD", "Cottonwood", 1, true, 0, "TREE", "Spring");
  plant("OAK", "Oak", 0, true, 1, "TREE", "Spring");
  plant("GRAMINALES", "Grasses", 0, false, 0, "GRASS", "Late spring, summer");
  plant("RAGWEED", "Ragweed", 0, false, 0, "WEED", "Late summer, fall");
  const an = (id, v, attrs, tk) => add(id, v, attrs, { platform: "airnow", device_id: "airnow", translation_key: tk });
  an("sensor.airnow_aqi", 56, { friendly_name: "AirNow AQI", device_class: "aqi", description: "Moderate", level: 2, time: new Date().toISOString() }, "aqi");
  an("sensor.airnow_pm2_5", 12.1, { friendly_name: "AirNow PM2.5", device_class: "pm25", unit_of_measurement: "µg/m³" }, "pm25");
  an("sensor.airnow_pm10", 21, { friendly_name: "AirNow PM10", device_class: "pm10", unit_of_measurement: "µg/m³" }, "pm10");
  an("sensor.airnow_ozone", 0.041, { friendly_name: "AirNow Ozone", unit_of_measurement: "ppm" }, "o3");
  const erie = (id, v, unit, dc, extra = {}) => add(id, v, { friendly_name: id, unit_of_measurement: unit, device_class: dc, ...extra }, { platform: "rest" });
  erie("sensor.erie_aqi", 37, "", "aqi", { description: "Good", main_pollutant: "PM2.5", source: "Boulder AIR · Erie Community Center" });
  erie("sensor.erie_pm2_5_24_hour", 6.7, "µg/m³", "pm25");
  erie("sensor.erie_pm10", 20.4, "µg/m³", "pm10");
  erie("sensor.erie_ozone_8_hour", 61.6, "ppb");
  erie("sensor.erie_co2", 431, "ppm", "carbon_dioxide");
  erie("sensor.erie_benzene", 1.8, "ppb");
  erie("sensor.erie_ethane", 3.53, "ppb");
  an("sensor.airnow_reporting_area", "Denver", { friendly_name: "AirNow Reporting area" }, "station");
  return {
    ...base,
    states,
    entities,
    devices: {
      [DEVICE_ID]: { id: DEVICE_ID, name: "GW2000B", manufacturer: "Ecowitt", model: "GW2000B" },
      pl_plants: { id: "pl_plants", name: "Plants (Home)", config_entries: ["pl"] },
      airnow: { id: "airnow", name: "AirNow", config_entries: ["an"] },
    },
    config: { ...base.config, latitude: LAT, longitude: LON, time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone, location_name: "Home" },
    callWS: async (msg) => {
      if (msg.type === "history/history_during_period") {
        const s = Date.parse(msg.start_time), e = Date.parse(msg.end_time);
        const out = {};
        for (const id of msg.entity_ids) out[id] = series(id, s, e, 5 * 60e3).map((p) => ({ s: String(p.v), lu: p.t / 1000 }));
        return out;
      }
      if (msg.type === "recorder/statistics_during_period") {
        const s = Date.parse(msg.start_time), e = Date.parse(msg.end_time);
        const step = msg.period === "day" ? 86400e3 : 3600e3;
        const out = {};
        for (const id of msg.statistic_ids) {
          out[id] = [];
          for (let t = s; t < e; t += step) {
            const pts = series(id, t, t + step - 1, step / 12).map((p) => p.v);
            out[id].push({ start: t, end: t + step, mean: pts.reduce((a, b) => a + b, 0) / pts.length, min: Math.min(...pts), max: Math.max(...pts) });
          }
        }
        return out;
      }
      throw new Error(`mock callWS: unsupported ${msg.type}`);
    },
  };
}

// ---- Page wiring ---------------------------------------------------------------
const card = document.querySelector("weather-station-flex-card");
const LEGACY_PANELS = [
  { type: "temp_humidity" },
  { type: "wind" },
  { type: "radar" },
  { type: "forecast" },
  { type: "sun_moon" },
];
const config = () => ({
  type: "custom:weather-station-flex-card",
  entity: "weather.openweathermap",
  title: params.get("title") ?? "Weather station",
  subtitle: "Home · live local observations",
  metric_sources: { sources: [{ ref: `device:${DEVICE_ID}` }, { ref: "weather.openweathermap" }] },
  layout: params.get("layout") || "auto",
  remember: false,
  ...(params.get("hero") ? { panels: [{ type: "hero", span: Number(params.get("span") || 12), rows: Number(params.get("rows") || 0), auto_scale: params.get("hero") === "auto", scale: Number(params.get("scale") || 100), flex: { wfc: { current: { clock_show_date: true } } } }, { type: "metric", metric: "temperature" }] } : {}),
  ...(params.get("panels") === "wind" ? { panels: ["standard", "periods", "beaufort", "corners", "stats", "playback"].map((windrose_preset) => ({ type: "wind", view: "rose", windrose_preset, title: `Wind · ${windrose_preset}`, span: 6, show_chart: false })) } : {}),
  ...(params.get("style") ? { panel_radius: 10, panel_shadow: "medium", panel_border_width: 1, panel_border_color: "#4fc3f7", panel_glow: true, panel_glow_size: 8 } : {}),
  ...(params.get("img") ? { background: "image", background_image_url: params.get("img") } : {}),
  ...(params.get("bg") ? { background: "animated", panel_opacity: Number(params.get("op") || 0.55) } : {}),
  ...(params.get("panels") === "stats" ? { panels: [
    { type: "statistics", preset: "temps", span: 6, rows: 3, colors: { temperature: "#00ff00", dew_point: "#ff00ff" } },
    { type: "statistics", preset: "rain", span: 6, rows: 3 },
  ] } : {}),
  ...(params.get("panels") === "user" ? { panels: [
    { type: "hero", span: 8 }, { type: "bulletin" },
    { type: "sky_tracker", span: 4, rows: 2 },
    { type: "heading", title: "Local measurements", show_status: true, show_bar: true },
    { type: "hourly" }, { type: "day" },
    { type: "metric", metric: "temperature" }, { type: "metric", metric: "rain_today" }, { type: "metric", metric: "humidity" },
    { type: "metric", metric: "uv_index" }, { type: "metric", metric: "solar_radiation" }, { type: "metric", metric: "pressure" },
    { type: "temp_humidity" }, { type: "wind", span: 4, rows: 3 }, { type: "moon" }, { type: "daily" },
    { type: "radar", display: "tile_popup", span: 4, rows: 3 },
    { type: "astronomy" }, { type: "wind_map", display: "tile_popup" },
    { type: "statistics", preset: "temps" }, { type: "statistics", preset: "wind" },
    { type: "statistics", preset: "pressure_humidity" }, { type: "statistics", preset: "solar_uv" }, { type: "statistics", preset: "rain" },
  ] } : {}),
  ...(params.get("panels") === "air" ? { panels: [
    { type: "pollen", span: 6 }, { type: "air_quality", span: 6 },
    ...["scale", "bars"].map((layout) => ({ type: "air_quality", span: 6, layout, title: `Erie air (${layout})`,
      entities: { aqi: "sensor.erie_aqi", pm2_5: "sensor.erie_pm2_5_24_hour", pm10: "sensor.erie_pm10", ozone: "sensor.erie_ozone_8_hour", co2: "sensor.erie_co2" },
      extra: [{ entity: "sensor.erie_benzene", label: "Benzene" }, { entity: "sensor.erie_ethane", label: "Ethane" }] })),
    { type: "statistics", preset: "air_quality", span: 6, rows: 3 }, { type: "metric", metric: "aqi" }, { type: "metric", metric: "pm2_5" },
  ] } : {}),
  ...(params.get("panels") === "legacy" ? { panels: LEGACY_PANELS } : {}),
});

document.documentElement.classList.toggle("light", !dark);
card.setConfig(config());
card.hass = buildHass();

// Live-ish updates so the hero and readings move.
setInterval(() => {
  const t = Date.now();
  cur.temp = tempAt(t); cur.hum = humAt(t); cur.wind = windAt(t); cur.dir = dirAt(t);
  card.hass = buildHass();
}, 5000);

// Controls (reload with query params so every combination is linkable).
for (const sel of document.querySelectorAll("[data-param]")) {
  const k = sel.dataset.param;
  if (params.has(k)) sel.value = params.get(k);
  sel.addEventListener("change", () => {
    params.set(k, sel.value);
    location.search = params.toString();
  });
}
// ?editor=1: render the visual editor next to the card; edits apply live.
if (params.get("editor")) {
  const ed = document.createElement("weather-station-flex-card-editor");
  ed.hass = card.hass;
  ed.setConfig(config());
  ed.addEventListener("config-changed", (e) => {
    const cfg = e.detail.config;
    card.setConfig(cfg);
    ed.setConfig(cfg);
    document.getElementById("yaml").textContent = JSON.stringify(cfg, null, 2);
  });
  document.getElementById("side").append(ed);
  document.body.classList.add("with-editor");
  window.__editor = ed;
}
window.__card = card;

// Stand-in for Home Assistant's card helpers: shows the generated config.
window.loadCardHelpers = async () => ({
  createCardElement(cfg) {
    // Real custom cards loaded in the preview (?sgcc=1) are created for real.
    const tag = String(cfg.type || "").replace(/^custom:/, "");
    if (cfg.type?.startsWith("custom:") && customElements.get(tag)) {
      const el = document.createElement(tag);
      el.setConfig(cfg);
      return el;
    }
    const el = document.createElement("pre");
    el.className = "stub-card";
    el.style.cssText = "margin:0;font-size:10px;color:#8a8;white-space:pre-wrap;overflow:auto;max-height:240px";
    el.textContent = `${cfg.type}\n` + JSON.stringify({ ...cfg, type: undefined }, null, 1);
    return el;
  },
});

const frame = document.getElementById("frame");
frame.style.width = { phone: "390px", tablet: "1024px", full: "100%" }[params.get("width") || "full"];
