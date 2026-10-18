// Panel type registry: element tag, label/icon, default size and the editor
// schema (Home Assistant ha-form) for the type's own options.
import { METRICS } from "./metrics.js";

const opt = (pairs) => pairs.map(([value, label]) => ({ value, label }));
const RANGES = ["6h", "12h", "24h", "48h", "7d", "30d", "90d", "365d"];
const OWM = opt([["wind_new", "Wind"], ["precipitation_new", "Precipitation"], ["clouds_new", "Clouds"], ["temp_new", "Temperature"], ["pressure_new", "Pressure"]]);
const BASES = opt([["gray", "Gray (follows theme)"], ["streets", "Streets"], ["topo", "Topographic"], ["imagery", "Satellite imagery"], ["osm", "OpenStreetMap"]]);
const METRIC_OPTS = Object.entries(METRICS).map(([value, m]) => ({ value, label: m.label }));
const ent = (domain) => ({ entity: domain ? { domain } : {} });

// span: columns out of 12; rows: row units (0 = size to content).
export const PANEL_TYPES = {
  hero: {
    tag: "wsfc-panel-hero", label: "Hero (current conditions)", icon: "mdi:weather-partly-cloudy", span: 12, rows: 3, rowsCompact: 0, flex: true, inBar: false,
    schema: [],
  },
  bulletin: {
    tag: "wsfc-panel-bulletin", label: "Bulletin", icon: "mdi:text-box-outline", span: 4, rows: 3, spanMedium: 12, rowsCompact: 0,
    schema: [
      { name: "entity", label: "Text sensor", selector: ent(), helper: "Optional text sensor (e.g. a forecast-text or NWS sensor) shown under the summary." },
      { name: "attribute", selector: { text: {} }, helper: "Attribute of that sensor holding the text (default: its state)." },
      { name: "alerts_entity", selector: ent("sensor"), helper: "Optional NWS Alerts sensor; active alerts are shown at the top." },
      { name: "show_sun", selector: { boolean: {} }, default: true },
      { name: "show_moon", selector: { boolean: {} }, default: true },
    ],
  },
  heading: {
    tag: "wsfc-panel-heading", label: "Heading", icon: "mdi:format-title", span: 12, rows: 0, inBar: false, bare: true,
    schema: [
      { name: "subtitle", selector: { text: {} } },
      { name: "show_status", selector: { boolean: {} }, helper: "Show whether the station's sensors are reporting." },
      { name: "show_bar", selector: { boolean: {} }, helper: "Show the panel buttons in this heading instead of above the panels." },
    ],
  },
  metric: {
    tag: "wsfc-panel-metric", label: "Metric tile", icon: "mdi:gauge", span: 2, rows: 2, inBar: false,
    schema: [
      { name: "metric", selector: { select: { mode: "dropdown", options: METRIC_OPTS } }, helper: "Resolved through Weather Sources; set an entity to use any sensor instead." },
      { name: "entity", label: "Sensor", selector: ent() },
      { name: "label", selector: { text: {} } },
      { name: "color", selector: { text: {} }, helper: "CSS color, e.g. #ef5350. Blank uses the metric's color." },
      { name: "digits", selector: { number: { min: 0, max: 3, mode: "box" } } },
      { name: "chart", selector: { select: { options: opt([["line", "Line"], ["bar", "Bars (hourly)"], ["none", "None"]]) } } },
      { name: "hours", selector: { number: { min: 1, max: 168, mode: "box" } }, helper: "Sparkline hours (default 24)." },
      { name: "show_minmax", selector: { boolean: {} }, default: true },
    ],
  },
  graph: {
    tag: "wsfc-panel-graph", label: "Graph", icon: "mdi:chart-line", span: 6, rows: 3,
    schema: [
      { name: "series", selector: { object: {} }, helper: "List of series: metric or entity, label, color, axis (left/right), style (line/area/dashed/bar), cumulative, band." },
      { name: "ranges", selector: { select: { multiple: true, options: RANGES.map((r) => ({ value: r, label: r })) } } },
      { name: "range", selector: { select: { options: RANGES.map((r) => ({ value: r, label: r })) } }, helper: "Range shown first." },
      { name: "show_readings", selector: { boolean: {} }, default: true },
      { name: "left_min", selector: { number: { mode: "box" } } },
      { name: "left_max", selector: { number: { mode: "box" } } },
      { name: "right_min", selector: { number: { mode: "box" } } },
      { name: "right_max", selector: { number: { mode: "box" } } },
    ],
  },
  temp_humidity: {
    tag: "wsfc-panel-temp-humidity", label: "Temp & Humidity", icon: "mdi:thermometer-water", span: 6, rows: 3,
    schema: [
      { name: "range", selector: { select: { options: RANGES.map((r) => ({ value: r, label: r })) } } },
      { name: "entities.temperature", selector: ent("sensor") },
      { name: "entities.dew_point", selector: ent("sensor") },
      { name: "entities.humidity", selector: ent("sensor") },
      { name: "show_readings", selector: { boolean: {} }, default: true },
    ],
  },
  wind: {
    tag: "wsfc-panel-wind", label: "Wind", icon: "mdi:weather-windy", span: 6, rows: 4,
    schema: [
      { name: "view", selector: { select: { options: opt([["compass", "Compass"], ["rose", "Wind rose (24h)"]]) } } },
      { name: "show_chart", selector: { boolean: {} }, default: true },
      { name: "entities.wind_speed", selector: ent("sensor") },
      { name: "entities.wind_gust_speed", selector: ent("sensor") },
      { name: "entities.wind_bearing", selector: ent("sensor") },
      { name: "rose_bins", selector: { object: {} }, helper: "Speed thresholds for the rose, in the sensor's unit, e.g. [1, 5, 10, 15, 25]." },
    ],
  },
  radar: {
    tag: "wsfc-panel-radar", label: "Radar / map", icon: "mdi:radar", span: 6, rows: 4,
    schema: [
      { name: "radar", selector: { boolean: {} }, default: true, helper: "RainViewer radar loop. Turn off for a plain map with OpenWeatherMap layers." },
      { name: "base_map", selector: { select: { options: BASES } } },
      { name: "zoom", selector: { number: { min: 2, max: 14, step: 0.5, mode: "box" } } },
      { name: "latitude", selector: { number: { mode: "box", step: "any" } }, helper: "Map center (default: your Home Assistant location)." },
      { name: "longitude", selector: { number: { mode: "box", step: "any" } } },
      { name: "radar_opacity", selector: { number: { min: 0.1, max: 1, step: 0.05, mode: "slider" } } },
      { name: "owm_api_key", selector: { text: {} }, helper: "Optional OpenWeatherMap key for map layers. Visible to anyone who can view the dashboard." },
      { name: "owm_layers", selector: { select: { multiple: true, options: OWM } } },
      { name: "owm_default", selector: { select: { options: [{ value: "none", label: "None" }, ...OWM] } } },
      { name: "owm_opacity", selector: { number: { min: 0.1, max: 1, step: 0.05, mode: "slider" } } },
      { name: "base_map_url", selector: { text: {} }, helper: "Custom XYZ tile URL (overrides base map)." },
      { name: "base_map_attribution", selector: { text: {} } },
    ],
  },
  forecast: {
    tag: "wsfc-panel-forecast", label: "Forecast", icon: "mdi:calendar-week", span: 8, rows: 4, flex: true,
    schema: [],
  },
  day: {
    tag: "wsfc-panel-day", label: "Day forecast", icon: "mdi:calendar-today", span: 4, rows: 4, spanMedium: 12, rowsCompact: 0,
    schema: [
      { name: "day_offset", selector: { number: { min: 0, max: 7, mode: "box" } }, helper: "0 = today, 1 = tomorrow (default), …" },
      { name: "entity", selector: ent("weather"), helper: "Weather entity (default: the card's)." },
      { name: "icon_size", selector: { number: { min: 32, max: 160, mode: "box" } } },
    ],
  },
  sun_moon: {
    tag: "wsfc-panel-sun-moon", label: "Sun & Moon", icon: "mdi:weather-sunset", span: 4, rows: 4, rowsCompact: 0, flex: true,
    schema: [{ name: "show_moon", selector: { boolean: {} }, default: true }],
  },
  flex: {
    tag: "wsfc-panel-flex", label: "Weather Flex sections", icon: "mdi:view-agenda-outline", span: 6, rows: 0, flex: true,
    schema: [],
  },
  card: {
    tag: "wsfc-panel-card", label: "Home Assistant card", icon: "mdi:card-outline", span: 6, rows: 0,
    schema: [{ name: "card", selector: { object: {} }, helper: "Any card configuration, e.g. type: statistics-graph." }],
  },
};
// Legacy alias.
PANEL_TYPES.map = PANEL_TYPES.radar;

/** Fields every panel has (editor "Layout" group). */
export const COMMON_SCHEMA = [
  { name: "title", selector: { text: {} } },
  { name: "icon", selector: { icon: {} } },
  { name: "span", selector: { number: { min: 1, max: 12, mode: "slider" } }, helper: "Width in twelfths of the card." },
  { name: "rows", selector: { number: { min: 0, max: 10, mode: "slider" } }, helper: "Height in row units (0 = fit content)." },
  { name: "display", selector: { select: { options: opt([["grid", "In the grid"], ["popup", "Pop-up from its panel button"]]) } } },
  { name: "in_bar", selector: { boolean: {} }, helper: "Show a panel button for it." },
  { name: "show", selector: { boolean: {} }, default: true, helper: "Visible when the dashboard loads." },
];

export const panelMeta = (p) => PANEL_TYPES[p?.type] || null;
export const spanOf = (p) => Math.max(1, Math.min(12, Number(p.span ?? panelMeta(p)?.span ?? 6)));
/**
 * Responsive width (twelfths) and height (row units) for a container size.
 * Explicit span_medium / span_narrow / rows_compact win; otherwise small tiles
 * keep sharing a row and wide panels go full width.
 */
export function layoutOf(p, size) {
  const m = panelMeta(p) || {};
  const s = spanOf(p);
  let span = s;
  if (size === "medium") span = Number(p.span_medium ?? m.spanMedium ?? (s <= 2 ? 3 : s <= 3 ? 4 : s <= 6 ? 6 : 12));
  if (size === "narrow") span = Number(p.span_narrow ?? (s <= 3 ? 6 : 12));
  let rows = rowsOf(p);
  if (size !== "wide") rows = Number(p.rows_compact ?? m.rowsCompact ?? rows);
  return { span: Math.max(1, Math.min(12, span)), rows };
}

export const rowsOf = (p) => Math.max(0, Number(p.rows ?? panelMeta(p)?.rows ?? 0));
export const inBarOf = (p) => p.in_bar ?? (p.display === "popup" ? true : panelMeta(p)?.inBar ?? true);

/** Default dashboard, modeled on Station Météo's overview. */
export const DEFAULT_PANELS = [
  { type: "hero", span: 8 },
  { type: "bulletin" },
  { type: "heading", title: "Local measurements", show_status: true, show_bar: true },
  { type: "wind" },
  { type: "metric", metric: "temperature" },
  { type: "metric", metric: "rain_today" },
  { type: "metric", metric: "humidity" },
  { type: "metric", metric: "uv_index" },
  { type: "metric", metric: "solar_radiation" },
  { type: "metric", metric: "pressure" },
  { type: "forecast" },
  { type: "day" },
  { type: "temp_humidity", show: false },
  { type: "sun_moon", show: false },
  { type: "radar", display: "popup" },
];

/** Normalize a config: panels list (legacy hero/no-panels handled), ids. */
export function normalizePanels(config) {
  let panels = Array.isArray(config.panels) && config.panels.length ? config.panels : DEFAULT_PANELS;
  panels = panels.filter((p) => p && PANEL_TYPES[p.type]);
  // Configs from the first build had no hero panel; the hero was implied (and
  // configured under top-level `hero:`). Keep showing it.
  if (Array.isArray(config.panels) && config.panels.length && !panels.some((p) => p.type === "hero") && config.hero !== false) {
    panels = [{ type: "hero", span: 12 }, ...panels];
  }
  return panels.map((p) => (p.type === "hero" && config.hero && typeof config.hero === "object" && !p.flex ? { ...p, flex: config.hero } : p));
}

