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
    flexPanels: ["Card Appearance", "Section order & visibility", "Current Weather Header", "Current Weather Metrics", "Clock & Date", "User Actions", "Advanced"],
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
  uv_solar: {
    tag: "wsfc-panel-uv-solar", label: "UV & Solar", icon: "mdi:weather-sunny-alert", span: 6, rows: 3,
    schema: [
      { name: "range", selector: { select: { options: RANGES.map((r) => ({ value: r, label: r })) } } },
      { name: "entities.uv_index", label: "UV index sensor", selector: ent("sensor") },
      { name: "entities.solar_radiation", label: "Solar radiation sensor", selector: ent("sensor") },
      { name: "show_readings", selector: { boolean: {} }, default: true },
    ],
  },
  stack: {
    tag: "wsfc-panel-stack", label: "Stack (side by side / stacked)", icon: "mdi:view-column-outline", span: 12, rows: 0, inBar: false,
    schema: [
      { name: "direction", selector: { select: { options: opt([["horizontal", "Horizontal — side by side"], ["vertical", "Vertical — one above another"]]) } }, default: "horizontal" },
      { name: "min_width", selector: { number: { min: 80, max: 800, mode: "box", unit_of_measurement: "px" } }, helper: "Horizontal: children wrap to a new line only below this width (default 180)." },
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
    tag: "wsfc-panel-forecast", label: "Forecast (hourly + daily)", icon: "mdi:calendar-week", span: 8, rows: 4, flex: true, flexPanels: ["Section order & visibility", "Hourly Forecast", "Daily Forecast"],
    schema: [],
  },
  hourly: {
    tag: "wsfc-panel-hourly", label: "Hourly forecast", icon: "mdi:clock-outline", span: 8, rows: 3, flex: true, flexPanels: ["Hourly Forecast"],
    schema: [],
  },
  daily: {
    tag: "wsfc-panel-daily", label: "Daily forecast", icon: "mdi:calendar-week", span: 8, rows: 3, flex: true, flexPanels: ["Daily Forecast"],
    schema: [],
  },
  sky_tracker: {
    tag: "wsfc-panel-sky-tracker", label: "Sky Tracker", icon: "mdi:sun-clock-outline", span: 4, rows: 2, rowsCompact: 0, flex: true,
    flexPanels: ["Sun Position", "Sky Bar"],
    schema: [
      { name: "show_arc", selector: { boolean: {} }, default: true, helper: "Sun arc: the sun's path, its position now, sunrise and sunset; the moon at night." },
      { name: "show_sky", selector: { boolean: {} }, default: true, helper: "Sky gradient: daylight and cloud cover over time, with the forecast row (temperatures, icons, wind…)." },
      { name: "timeframe", selector: { select: { options: opt([["hours", "Number of hours"], ["day", "Today (midnight to midnight)"], ["sunrise_sunset", "Sunrise to sunset"]]) } }, default: "hours", helper: "One time window for the arc and the sky." },
      { name: "hours", selector: { number: { min: 6, max: 72, mode: "box" } }, default: 24 },
      { name: "anchor", selector: { select: { options: opt([["now_center", "Now in the middle"], ["now_left", "Now at the left"]]) } }, default: "now_center" },
      { name: "moon", selector: { boolean: {} }, default: true, helper: "Show the moon on the arc at night." },
      { name: "moon_phase", selector: { boolean: {} }, default: true, helper: "Draw the moon in its current phase (off: a moon icon)." },
      { name: "show_facts", selector: { boolean: {} }, default: false, helper: "Dawn, sunrise, solar noon, sunset, dusk and daylight under the tracker." },
    ],
  },
  astronomy: {
    tag: "wsfc-panel-astronomy", label: "Astronomy", icon: "mdi:telescope", span: 6, rows: 3, rowsCompact: 0,
    schema: [{ name: "show_chart", selector: { boolean: {} }, default: true, helper: "Sun and moon altitude over the day." }],
  },
  wind_map: {
    tag: "wsfc-panel-wind-map", label: "Wind map (Windy)", icon: "mdi:map-marker-radius-outline", span: 6, rows: 3,
    schema: [
      { name: "overlay", selector: { select: { options: opt([["wind", "Wind"], ["gust", "Gusts"], ["rain", "Rain & thunder"], ["temp", "Temperature"], ["clouds", "Clouds"], ["pressure", "Pressure"], ["radar", "Radar"], ["satellite", "Satellite"]]) } }, default: "wind" },
      { name: "zoom", selector: { number: { min: 3, max: 11, mode: "slider" } }, default: 6 },
      { name: "model", selector: { select: { options: opt([["ecmwf", "ECMWF"], ["gfs", "GFS"], ["icon", "ICON"], ["namConus", "NAM (US)"]]) } }, default: "ecmwf" },
      { name: "level", selector: { select: { options: opt([["surface", "Surface"], ["850h", "1500 m"], ["700h", "3000 m"], ["500h", "5500 m"], ["300h", "9000 m"]]) } }, default: "surface" },
      { name: "wind_unit", selector: { select: { options: opt([["mph", "mph"], ["km/h", "km/h"], ["kt", "knots"], ["m/s", "m/s"], ["bft", "Beaufort"]]) } }, helper: "Default follows Home Assistant's unit system." },
      { name: "marker", selector: { boolean: {} }, default: true, helper: "Pin at your location." },
      { name: "latitude", selector: { number: { mode: "box", step: "any" } }, helper: "Map center (default: home)." },
      { name: "longitude", selector: { number: { mode: "box", step: "any" } } },
    ],
  },
  statistics: {
    tag: "wsfc-panel-statistics", label: "Station graph", icon: "mdi:chart-bell-curve-cumulative", span: 6, rows: 3,
    schema: [
      { name: "engine", selector: { select: { options: opt([["auto", "Automatic"], ["sgcc", "Statistics Graph Chart Card (custom)"], ["builtin", "Home Assistant Statistics graph"]]) } }, default: "auto", helper: "Automatic uses cataseven's Statistics Graph Chart Card when it is installed (mixed bars/lines/areas, second axis), otherwise Home Assistant's built-in card." },
      { name: "preset", selector: { select: { options: opt([["temps", "Temperatures (temp, feels like, dew point)"], ["wind", "Wind (speed, gust, direction)"], ["pressure_humidity", "Pressure & humidity"], ["solar_uv", "Solar & UV"], ["rain", "Rain (rate, today)"], ["temperature_range", "Daily temperature range (30 days)"]]) } }, default: "temps" },
      { name: "days_to_show", selector: { number: { min: 0.25, max: 365, step: 0.25, mode: "box" } } },
      { name: "period", selector: { select: { options: opt([["5minute", "5 minutes"], ["hour", "Hour"], ["day", "Day"], ["week", "Week"], ["month", "Month"]]) } } },
      { name: "chart_type", selector: { select: { options: opt([["line", "Line"], ["bar", "Bar"]]) } }, helper: "Built-in card only (the custom card sets this per series)." },
      { name: "stat_types", selector: { select: { multiple: true, options: opt([["mean", "Mean"], ["min", "Min"], ["max", "Max"], ["state", "State"], ["change", "Change"]]) } } },
      { name: "card", selector: { object: {} }, helper: "Extra options merged into the graph card's config, e.g. show_interval_picker: true, or a full entities: list." },
    ],
  },
  health: {
    tag: "wsfc-panel-health", label: "Station health", icon: "mdi:heart-pulse", span: 4, rows: 0,
    schema: [{ name: "show_devices", selector: { boolean: {} }, helper: "Show device names even when there is only one." }],
  },
  moon: {
    tag: "wsfc-panel-moon", label: "Moon", icon: "mdi:moon-waning-crescent", span: 4, rows: 2, rowsCompact: 0,
    schema: [{ name: "moon_size", selector: { number: { min: 40, max: 240, mode: "box", unit_of_measurement: "px" } } }],
  },
  day: {
    tag: "wsfc-panel-day", label: "Day forecast", icon: "mdi:calendar-today", span: 4, rows: 4, spanMedium: 12, rowsCompact: 0,
    schema: [
      { name: "day_offset", selector: { number: { min: 0, max: 7, mode: "box" } }, helper: "0 = today, 1 = tomorrow (default), …" },
      { name: "entity", selector: ent("weather"), helper: "Weather entity (default: the card's)." },
      { name: "icon_size", selector: { number: { min: 32, max: 160, mode: "box" } } },
    ],
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
  { name: "display", selector: { select: { options: opt([["grid", "In the grid"], ["tile_popup", "In the grid — tap it to open larger"], ["popup", "Pop-up only (from its panel button)"]]) } } },
  { name: "in_bar", selector: { boolean: {} }, helper: "Show a panel button for it." },
  { name: "show", selector: { boolean: {} }, default: true, helper: "Visible when the dashboard loads." },
];

/** Layout fields for a panel inside a stack (it has no grid position). */
export const STACK_CHILD_SCHEMA = [
  { name: "title", selector: { text: {} } },
  { name: "icon", selector: { icon: {} } },
  { name: "grow", selector: { number: { min: 0, max: 12, step: 0.5, mode: "box" } }, helper: "Horizontal: relative width (default 1). Vertical: 1 = share leftover height." },
  { name: "min_width", selector: { number: { min: 80, max: 800, mode: "box", unit_of_measurement: "px" } }, helper: "Horizontal: narrowest this panel gets before wrapping." },
  { name: "rows", selector: { number: { min: 0, max: 10, mode: "slider" } }, helper: "Vertical: minimum height in row units." },
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
/** Panels that open in a pop-up from their button / tile. */
export const opensPopup = (p) => p.display === "popup" || p.display === "tile_popup";

/** Default dashboard, modeled on Station Météo's overview. */
export const DEFAULT_PANELS = [
  { type: "hero", span: 8 },
  { type: "bulletin" },
  { type: "sky_tracker", span: 12, rows: 0 },
  { type: "heading", title: "Local measurements", show_status: true, show_bar: true },
  { type: "wind" },
  { type: "metric", metric: "temperature" },
  { type: "metric", metric: "rain_today" },
  { type: "metric", metric: "humidity" },
  { type: "metric", metric: "uv_index" },
  { type: "metric", metric: "solar_radiation" },
  { type: "metric", metric: "pressure" },
  { type: "hourly" },
  { type: "day" },
  { type: "daily", show: false },
  { type: "temp_humidity", show: false },
  { type: "uv_solar", show: false },
  { type: "moon", show: false },
  { type: "astronomy", show: false },
  { type: "health", show: false },
  { type: "radar", display: "popup" },
  { type: "wind_map", display: "popup" },
];

/** Normalize a config: panels list (legacy hero/no-panels handled), ids. */
// Panel types replaced by sky_tracker (v2026.10.20.7). Old configs are
// migrated on load; the editor saves the migrated form.
const SKY_TYPES = new Set(["sky_bar", "sun", "sun_moon"]);

/** Old sky panels -> one Sky Tracker; returns the new list. */
export function migrateSky(panels, heroWasSky) {
  let out = [];
  const sky = panels.filter((p) => p && SKY_TYPES.has(p.type));
  // A Sky Bar panel and a Sun panel side by side become one tracker with both
  // layers (the arc drew the Sky Bar as its baseline anyway).
  const bar = sky.find((p) => p.type === "sky_bar");
  const sun = sky.find((p) => p.type === "sun" || p.type === "sun_moon");
  let merged = false;
  for (const p of panels) {
    if (!p || !SKY_TYPES.has(p.type)) { out.push(p); continue; }
    const { type, sky_bar: _x, show_moon, ...rest } = p;
    const t = { ...rest, type: "sky_tracker" };
    if (type === "sky_bar") t.show_arc = false;
    if (type === "sun") t.show_facts = p.show_facts !== false;
    if (bar && sun && (p === bar || p === sun)) {
      if (merged) continue;
      merged = true;
      const other = p === bar ? sun : bar;
      const { type: _t2, sky_bar: _y, show_moon: _sm, ...orest } = other;
      Object.assign(t, orest, rest);
      t.flex = deepMergeShallowWfc(other === bar ? other.flex : p.flex, other === bar ? p.flex : other.flex);
      delete t.show_arc;
      if (sun.type === "sun") t.show_facts = sun.show_facts !== false;
      if (!t.flex) delete t.flex;
    }
    out.push(t);
    if (type === "sun_moon" && show_moon !== false) out.push({ type: "moon" });
  }
  // The hero no longer draws a Sky Bar: carry it into a tracker after the hero.
  if (heroWasSky && !out.some((p) => p?.type === "sky_tracker")) {
    const i = out.findIndex((p) => p?.type === "hero");
    const hero = out[i];
    const sp = hero?.flex?.wfc?.sun_position;
    const t = { type: "sky_tracker", span: 12, rows: 0, ...(sp ? { flex: { wfc: { sun_position: sp } } } : {}) };
    out.splice(i + 1, 0, t);
  }
  return out.map((p) => (p?.type === "hero" ? stripHeroSky(p) : p));
}

function stripHeroSky(p) {
  const { sky_bar: _s, ...rest } = p;
  const sp = rest.flex?.wfc?.sun_position;
  if (!sp) return rest;
  const { sun_position: _sp, ...wfc } = rest.flex.wfc;
  const flex = { ...rest.flex, wfc };
  if (!Object.keys(wfc).length) delete flex.wfc;
  if (Object.keys(flex).length) rest.flex = flex;
  else delete rest.flex;
  return rest;
}

/** Sky Bar settings from the bar panel + arc settings from the sun panel. */
function deepMergeShallowWfc(barFlex, sunFlex) {
  if (!barFlex && !sunFlex) return undefined;
  const w = { ...(sunFlex?.wfc || {}) };
  if (barFlex?.wfc?.sun_position) w.sun_position = { ...(w.sun_position || {}), ...barFlex.wfc.sun_position };
  return { ...(sunFlex || {}), ...(barFlex || {}), wfc: w };
}

export function normalizePanels(config) {
  let panels = Array.isArray(config.panels) && config.panels.length ? config.panels : DEFAULT_PANELS;
  // A hero that showed its own Sky Bar (default before v2026.10.20.7).
  const hero = panels.find((p) => p?.type === "hero");
  const heroWasSky = !!hero && hero.sky_bar !== false && hero.flex?.wfc?.sun_position?.show !== false && panels !== DEFAULT_PANELS;
  panels = migrateSky(panels, heroWasSky).map((p) => (p?.type === "stack" ? { ...p, panels: migrateSky(p.panels || [], false) } : p));
  panels = panels.filter((p) => p && PANEL_TYPES[p.type]);
  // Configs from the first build had no hero panel; the hero was implied (and
  // configured under top-level `hero:`). Keep showing it.
  if (Array.isArray(config.panels) && config.panels.length && !panels.some((p) => p.type === "hero") && config.hero !== false) {
    panels = [{ type: "hero", span: 12 }, ...panels];
  }
  return panels.map((p) => (p.type === "hero" && config.hero && typeof config.hero === "object" && !p.flex ? { ...p, flex: config.hero } : p));
}

