// Panel type registry: element tag, label/icon, default size and the editor
// schema (Home Assistant ha-form) for the type's own options.
import { METRICS } from "./metrics.js";
import { pollenModel } from "./pollen.js";
import { WINDROSE_PRESETS } from "../panels/windrose.js";
import { factsFields } from "../panels/astro-facts.js";
import { lightningIds } from "../panels/lightning.js";

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
    schema: [
      { name: "main_temperature", label: "Main temperature", selector: { select: { mode: "dropdown", options: [{ value: "temperature", label: "Temperature" }, { value: "feels_like", label: "Feels like" }] } }, default: "temperature", helper: "Feels like shows the feels-like temperature in place of the temperature (falls back to the temperature when there's no feels-like value)." },
      { name: "auto_scale", selector: { boolean: {} }, default: false, helper: "Size the temperature, its sub-header, condition, icon, clock, date and metric chips from the panel's size. Each then has its own scale below, instead of the pixel sizes in the sections editor." },
      { name: "fit", label: "Fit to the panel", when: (d) => !!d.auto_scale, selector: { boolean: {} }, default: true, helper: "With a set height: everything scales so the hero fills its panel (no empty space below, nothing cut off) — a 0.5-row hero shrinks to fit; one next to a taller panel grows. Off: sizes follow the width only, and the hero sets its own height." },
      { name: "scale", label: "Overall scale", when: (d) => !!d.auto_scale, selector: { number: { min: 50, max: 200, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100, helper: "Everything bigger or smaller; the items below scale on top of this." },
      { name: "temp_scale", label: "Temperature", when: (d) => !!d.auto_scale, selector: { number: { min: 30, max: 300, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100 },
      { name: "condition_scale", label: "Condition text", when: (d) => !!d.auto_scale, selector: { number: { min: 30, max: 300, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100 },
      { name: "icon_scale", label: "Condition icon", when: (d) => !!d.auto_scale, selector: { number: { min: 30, max: 300, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100 },
      { name: "clock_scale", label: "Clock time", when: (d) => !!d.auto_scale, selector: { number: { min: 30, max: 300, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100 },
      { name: "date_scale", label: "Date", when: (d) => !!d.auto_scale, selector: { number: { min: 30, max: 300, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100 },
      { name: "secondary_scale", label: "Temperature sub-header", when: (d) => !!d.auto_scale, selector: { number: { min: 30, max: 300, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100, helper: "The line under the temperature, e.g. today's high / low." },
      { name: "chips_scale", label: "Metric chips", when: (d) => !!d.auto_scale, selector: { number: { min: 30, max: 300, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100 },
      ...factsFields(undefined, false, [["bottom", "Along the bottom"], ["top", "Along the top"]]),
    ],
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
    tag: "wsfc-panel-heading", label: "Button Menu", icon: "mdi:format-title", span: 12, rows: 0, inBar: false, bare: true,
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
      { name: "color", selector: { text: {} }, helper: "Not set: the metric's color." },
      { name: "digits", selector: { number: { min: 0, max: 3, mode: "box" } } },
      { name: "chart", selector: { select: { options: opt([["line", "Line"], ["bar", "Bars (hourly)"], ["none", "None"]]) } } },
      { name: "hours", selector: { number: { min: 1, max: 168, mode: "box" } }, helper: "Sparkline hours (default 24)." },
      { name: "show_minmax", selector: { boolean: {} }, default: true },
    ],
  },
  graph: {
    tag: "wsfc-panel-graph", label: "Graph", icon: "mdi:chart-line", span: 6, rows: 3,
    schema: [
      { name: "series", selector: { object: {} }, helper: "Advanced: list of series (metric or entity, label, color, axis left/right, style line/area/dashed/bar, cumulative, band). Colors and sensors can also be set under Series above." },
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
      { name: "show_readings", selector: { boolean: {} }, default: true },
    ],
  },
  uv_solar: {
    tag: "wsfc-panel-uv-solar", label: "UV & Solar", icon: "mdi:weather-sunny-alert", span: 6, rows: 3,
    schema: [
      { name: "range", selector: { select: { options: RANGES.map((r) => ({ value: r, label: r })) } } },
      { name: "show_readings", selector: { boolean: {} }, default: true },
    ],
  },
  stack: {
    tag: "wsfc-panel-stack", label: "Stack (side by side / stacked)", icon: "mdi:view-column-outline", span: 12, rows: 0, inBar: false,
    schema: [
      { name: "direction", selector: { select: { options: opt([["horizontal", "Horizontal — side by side"], ["vertical", "Vertical — one above another"]]) } }, default: "horizontal" },
      { name: "spacing", label: "Spare height", when: (d) => d.direction === "vertical", selector: { select: { options: opt([["fill", "Grow compact rows to fill it"], ["spread", "Spread the panels out evenly"], ["center", "Centre them"], ["top", "Keep them at the top"]]) } }, default: "fill", helper: "When the stack is taller than its panels (e.g. compact rows of tiles): where the spare height goes." },
      { name: "compact_max_scale", label: "Largest compact size", when: (d) => d.direction === "vertical" && (d.spacing ?? "fill") === "fill", selector: { number: { min: 100, max: 400, step: 10, mode: "slider", unit_of_measurement: "%" } }, default: 250, helper: "How large compact rows may grow (they also stop when the widest row runs out of room)." },
      { name: "min_width", selector: { number: { min: 80, max: 800, mode: "box", unit_of_measurement: "px" } }, helper: "Horizontal: children wrap to a new line only below this width (default 180)." },
    ],
  },
  wind: {
    tag: "wsfc-panel-wind", label: "Wind", icon: "mdi:weather-windy", span: 6, rows: 4, fit: true,
    // Settings grouped by what they change (the editor shows a heading per group).
    groups: [
      ["View", "mdi:eye-outline", [
        { name: "fit", selector: { boolean: {} }, default: true, helper: "Shrink the compass or rose so everything fits the panel's height (instead of the panel growing and stretching its row)." },
        { name: "view", selector: { select: { options: opt([["compass", "Compass"], ["rose", "Wind rose"]]) } } },
        { name: "show_view_buttons", selector: { boolean: {} }, default: true, helper: "Compass / Rose buttons in the header." },
      ]],
      ["Readings (speed, gust, direction)", "mdi:numeric", [
        { name: "readings_position", selector: { select: { options: opt([["auto", "Automatic — beside the dial; hidden with the Wind Rose Card"], ["side", "Beside the dial"], ["above", "Above"], ["below", "Below"], ["hidden", "Hidden"]]) } }, default: "auto" },
      ]],
      ["Chart", "mdi:chart-line", [
        { name: "show_chart", label: "Show the chart", selector: { boolean: {} }, default: true, helper: "24 h speed and gust chart." },
        { name: "chart_mode", label: "Show the chart", when: (d) => d.show_chart !== false, selector: { select: { options: opt([["inline", "In the panel"], ["popover", "As a pop-over — a chart button in the header opens it over the panel"]]) } }, default: "inline", helper: "Pop-over: the panel shows just the compass or rose; the chart opens on demand (tap outside, the button or Esc closes it)." },
        { name: "chart_popover_height", label: "Pop-over height", when: (d) => d.show_chart !== false && d.chart_mode === "popover", selector: { number: { min: 120, max: 500, step: 10, mode: "slider", unit_of_measurement: "px" } }, default: 220 },
        { name: "chart_position", when: (d) => d.show_chart !== false && d.chart_mode !== "popover", selector: { select: { options: opt([["below", "Below"], ["above", "Above"]]) } }, default: "below" },
        { name: "chart_legend", when: (d) => d.show_chart !== false, selector: { boolean: {} }, default: false, helper: "Speed / Gust legend on the chart." },
        { name: "windrose_chart", when: (d) => d.show_chart !== false, selector: { boolean: {} }, default: true, helper: "Also with the Wind Rose Card." },
      ]],
      ["Compass", "mdi:compass-outline", [
        { name: "dial_scale", selector: { number: { min: 50, max: 250, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100, helper: "Compass and built-in rose size." },
        { name: "compass_arrow_size", selector: { number: { min: 50, max: 400, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100, helper: "Direction pointer size." },
        { name: "compass_arrow_color", selector: { text: {} }, helper: "Not set: the wind color." },
      ]],
      ["Wind rose", "mdi:compass-rose", [
        { name: "rose_engine", selector: { select: { options: opt([["auto", "Automatic — Wind Rose Card when installed"], ["windrose", "Wind Rose Card (custom:windrose-card)"], ["builtin", "Built-in rose"]]) } }, default: "auto", helper: "aukedejong's Wind Rose Card (HACS) with your station's sensors filled in, or our built-in 24 h rose." },
        { name: "show_legend", selector: { boolean: {} }, default: true, helper: "Built-in rose: speed colour legend." },
        { name: "rose_bins", selector: { object: {} }, helper: "Built-in rose: speed thresholds in the sensor's unit, e.g. [1, 5, 10, 15, 25]." },
        { name: "windrose_preset", selector: { select: { options: Object.entries(WINDROSE_PRESETS).map(([value, p]) => ({ value, label: p.label })) } }, default: "standard", helper: "Wind Rose Card starting layout; the settings below change parts of it." },
        { name: "wr_period", selector: { select: { options: opt([["preset", "From the preset"], ["-1h", "1 hour"], ["-8h", "8 hours"], ["-1d", "24 hours"], ["-7d", "7 days"], ["-30d", "30 days"]]) } }, default: "preset", helper: "Period shown first." },
        { name: "wr_scale", selector: { number: { min: 30, max: 150, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100, helper: "Wind Rose Card size within the panel. Not used while the panel fits its height (Layout → Fit): then the rose is as large as the height allows." },
        { name: "wr_arrow", selector: { boolean: {} }, default: true, helper: "Current direction arrow." },
        { name: "wr_arrow_size", when: (d) => d.wr_arrow !== false, selector: { number: { min: 10, max: 240, step: 5, mode: "slider" } }, default: 50, helper: "Direction arrow (pointer) size." },
        { name: "wr_arrow_color", when: (d) => d.wr_arrow !== false, selector: { text: {} }, helper: "Not set: red. The Wind Rose Card uses it for the speed-bar arrows too." },
      ]],
      ["Wind Rose Card: speed bars", "mdi:chart-bar", [
        { name: "wr_bars", selector: { select: { options: opt([["preset", "From the preset"], ["right", "Right"], ["bottom", "Bottom"], ["hidden", "Hidden"]]) } }, default: "preset" },
        { name: "wr_beaufort", selector: { select: { options: opt([["preset", "From the preset"], ["on", "Beaufort"], ["off", "Speed unit"]]) } }, default: "preset" },
        { name: "wr_bar_full", label: "Full colour scale", selector: { select: { options: opt([["preset", "From the preset"], ["on", "Show every speed range"], ["off", "Only up to the highest measured"]]) } }, default: "preset", helper: "Every range gets its own colour (blue → green → yellow → red), like the Beaufort bars." },
        { name: "wr_range_step", label: "Range step", when: (d) => d.wr_beaufort !== "on", selector: { number: { min: 1, max: 20, step: 1, mode: "slider" } }, helper: "Speed bars in your unit: width of each colour band (e.g. 5 mph). Smaller = more colours." },
        { name: "wr_range_max", label: "Speed bar max", when: (d) => d.wr_beaufort !== "on", selector: { number: { min: 5, max: 150, step: 5, mode: "slider" } }, helper: "Last band starts here." },
        { name: "wr_gust_max", label: "Gust bar max", when: (d) => d.wr_beaufort !== "on", selector: { number: { min: 5, max: 150, step: 5, mode: "slider" } }, helper: "Default: the speed bar max." },
        { name: "wr_speed_arrows", selector: { select: { options: opt([["preset", "From the preset"], ["on", "Show"], ["off", "Hide"]]) } }, default: "preset", helper: "Arrow on each bar at the current speed." },
        { name: "wr_speed_arrow_size", when: (d) => d.wr_speed_arrows !== "off", selector: { number: { min: 10, max: 240, step: 5, mode: "slider" } }, default: 40 },
      ]],
      ["Wind Rose Card: corner info", "mdi:page-layout-header-footer", [
        { name: "wr_corners", selector: { select: { options: opt([["preset", "From the preset"], ["on", "Show"], ["off", "Hide"]]) } }, default: "preset" },
        ...[["corner_speed", "top_left"], ["corner_direction", "top_right"], ["corner_gust", "bottom_left"]].map(([name, d]) => (
          { name, when: (d) => d.wr_corners !== "off", selector: { select: { options: opt([["top_left", "Top left"], ["top_right", "Top right"], ["bottom_left", "Bottom left"], ["bottom_right", "Bottom right"], ["hidden", "Hidden"]]) } }, default: d })),
        { name: "corner_label_size", when: (d) => d.wr_corners !== "off", selector: { number: { min: 20, max: 120, step: 5, mode: "slider" } }, default: 50, helper: "Label size (the card's own scale)." },
        { name: "corner_value_size", when: (d) => d.wr_corners !== "off", selector: { number: { min: 20, max: 160, step: 5, mode: "slider" } }, default: 80, helper: "Value size (the card's own scale)." },
        { name: "corner_color", when: (d) => d.wr_corners !== "off", selector: { text: {} }, helper: "Text color." },
      ]],
      ["Wind Rose Card: statistics", "mdi:sigma", [
        { name: "wr_stats", selector: { select: { options: opt([["preset", "From the preset"], ["top", "Above the rose"], ["bottom", "Below the rose"], ["off", "Hide"]]) } }, default: "preset" },
        { name: "stats_items", when: (d) => d.wr_stats !== "off", selector: { select: { multiple: true, options: opt([["min", "Min"], ["avg", "Average"], ["max", "Max"], ["median", "Median"], ["p90", "P90 (gust-like)"], ["calm", "Calm %"]]) } }, default: ["min", "avg", "max", "p90", "calm"] },
        { name: "stats_align", when: (d) => d.wr_stats !== "off", selector: { select: { options: opt([["left", "Left"], ["center", "Center"], ["right", "Right"]]) } }, default: "left" },
        { name: "stats_size", when: (d) => d.wr_stats !== "off", selector: { number: { min: 8, max: 40, mode: "slider", unit_of_measurement: "px" } }, default: 13 },
        { name: "stats_weight", when: (d) => d.wr_stats !== "off", selector: { select: { options: opt([["400", "Regular"], ["500", "Medium"], ["700", "Bold"]]) } }, default: "400" },
        { name: "stats_color", when: (d) => d.wr_stats !== "off", selector: { text: {} }, helper: "Not set: secondary text." },
      ]],
      ["Wind Rose Card: buttons", "mdi:gesture-tap-button", [
        { name: "wr_buttons", selector: { select: { options: opt([["preset", "From the preset"], ["periods", "Period buttons (1 h … 7 days)"], ["playback", "Playback (±12 h, play 10 days)"], ["none", "None"]]) } }, default: "preset" },
        { name: "wr_buttons_position", when: (d) => d.wr_buttons !== "none", selector: { select: { options: opt([["preset", "From the preset"], ["top", "Top"], ["bottom", "Bottom"]]) } }, default: "preset" },
      ]],
      ["Wind Rose Card: advanced", "mdi:code-braces", [
        { name: "windrose", selector: { object: {} }, helper: "Any of the card's own options, merged last, e.g. rose_config, colors or speed_ranges." },
      ]],
      ["Sensors", "mdi:access-point", [
        { name: "entities.wind_speed", selector: ent("sensor") },
        { name: "entities.wind_gust_speed", selector: ent("sensor") },
        { name: "entities.wind_bearing", selector: ent("sensor") },
      ]],
    ],
  },
  radar: {
    tag: "wsfc-panel-radar", label: "Radar / map", icon: "mdi:radar", span: 6, rows: 4,
    schema: [
      { name: "radar", selector: { boolean: {} }, default: true, helper: "RainViewer radar loop. Turn off for a plain map with OpenWeatherMap layers." },
      { name: "start_paused", label: "Start paused", when: (d) => d.radar !== false, selector: { boolean: {} }, default: false, helper: "Show only the latest radar image until you press play; the other frames load then. Lighter for low-powered tablets." },
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
    schema: [
      { name: "text_scale", label: "Text size", selector: { number: { min: 50, max: 200, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100, helper: "Day and time labels, temperatures and chart figures. Separate from Scale all Panel Contents." },
      { name: "icon_scale", label: "Icon size", selector: { number: { min: 50, max: 250, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100, helper: "The condition icons in the forecast." },
      { name: "chart_scale", label: "Chart height", selector: { number: { min: 40, max: 200, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100, helper: "The temperature / precipitation chart under the icons." },
    ],
  },
  hourly: {
    tag: "wsfc-panel-hourly", label: "Hourly forecast", icon: "mdi:clock-outline", span: 8, rows: 3, flex: true, flexPanels: ["Hourly Forecast"],
    schema: [
      { name: "text_scale", label: "Text size", selector: { number: { min: 50, max: 200, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100, helper: "Day and time labels, temperatures and chart figures. Separate from Scale all Panel Contents." },
      { name: "icon_scale", label: "Icon size", selector: { number: { min: 50, max: 250, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100, helper: "The condition icons in the forecast." },
      { name: "chart_scale", label: "Chart height", selector: { number: { min: 40, max: 200, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100, helper: "The temperature / precipitation chart under the icons." },
    ],
  },
  daily: {
    tag: "wsfc-panel-daily", label: "Daily forecast", icon: "mdi:calendar-week", span: 8, rows: 3, flex: true, flexPanels: ["Daily Forecast"],
    schema: [
      { name: "text_scale", label: "Text size", selector: { number: { min: 50, max: 200, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100, helper: "Day and time labels, temperatures and chart figures. Separate from Scale all Panel Contents." },
      { name: "icon_scale", label: "Icon size", selector: { number: { min: 50, max: 250, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100, helper: "The condition icons in the forecast." },
      { name: "chart_scale", label: "Chart height", selector: { number: { min: 40, max: 200, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100, helper: "The temperature / precipitation chart under the icons." },
    ],
  },
  sky_tracker: {
    tag: "wsfc-panel-sky-tracker", label: "Sky Tracker", icon: "mdi:sun-clock-outline", span: 4, rows: 2, rowsCompact: 0, flex: true,
    flexPanels: ["Sun Position", "Sky Bar"],
    // Set by the panel's own options, so hidden in the Weather Flex editor below.
    flexHide: ["timeframe_mode", "timeframe_hours", "timeframe_anchor", "night_moon"],
    schema: [
      { name: "show_arc", selector: { boolean: {} }, default: true, helper: "Sun arc: the sun's path, its position now, sunrise and sunset; the moon at night." },
      { name: "show_sky", selector: { boolean: {} }, default: true, helper: "Sky gradient: daylight and cloud cover over time, with the forecast row (temperatures, icons, wind…)." },
      { name: "timeframe", selector: { select: { options: opt([["hours", "Number of hours"], ["day", "Today (midnight to midnight)"], ["sunrise_sunset", "Sunrise to sunset"]]) } }, default: "hours", helper: "One time window for the arc and the sky." },
      { name: "hours", label: "Hours", selector: { number: { min: 6, max: 72, mode: "box" } }, default: 24 },
      { name: "anchor", selector: { select: { options: opt([["now_center", "Now in the middle"], ["now_left", "Now at the left"]]) } }, default: "now_center" },
      { name: "moon", selector: { boolean: {} }, default: true, helper: "Show the moon on the arc at night." },
      { name: "moon_phase", selector: { boolean: {} }, default: true, helper: "Draw the moon in its current phase (off: a moon icon)." },
      { name: "show_steps", label: "Step buttons", selector: { boolean: {} }, default: false, helper: "◀ Now ▶ buttons in the header to look at later hours or days." },
      { name: "step_hours", label: "Step", when: (d) => !!d.show_steps, selector: { select: { options: opt([["6", "6 hours"], ["12", "12 hours"], ["24", "1 day"]]) } }, default: "12" },
      { name: "max_ahead", label: "How far ahead", when: (d) => !!d.show_steps, selector: { number: { min: 12, max: 168, step: 6, mode: "slider", unit_of_measurement: "h" } }, default: 48, helper: "Hourly forecasts usually reach 48 h; beyond that the bar shows daylight only." },
      { name: "return_after", label: "Back to now after", when: (d) => !!d.show_steps, selector: { number: { min: 0, max: 600, step: 10, mode: "slider", unit_of_measurement: "s" } }, default: 60, helper: "0 = stay." },
      ...factsFields(undefined, false, [["below", "Below the sky"], ["above", "Above the arc"], ["header", "In the header, beside the step buttons"]]),
    ],
  },
  astronomy: {
    tag: "wsfc-panel-astronomy", label: "Astronomy", icon: "mdi:telescope", span: 6, rows: 3, rowsCompact: 0,
    schema: [
      { name: "show_chart", label: "Altitude chart", selector: { boolean: {} }, default: true, helper: "Sun and moon altitude over the day." },
      { name: "show_table", label: "Sun & moon table", selector: { boolean: {} }, default: true, helper: "Rise and set times for the sun, the three twilights and the moon." },
      ...factsFields(undefined, true),
    ],
  },
  wind_map: {
    tag: "wsfc-panel-wind-map", label: "Wind map (Windy)", icon: "mdi:map-marker-radius-outline", span: 6, rows: 3,
    schema: [
      { name: "start_paused", label: "Start paused", selector: { boolean: {} }, default: false, helper: "Don't load the animated Windy map until you press play (Windy can't show a still image). Lighter for low-powered tablets." },
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
      { name: "preset", selector: { select: { options: opt([["temps", "Temperatures (temp, feels like, dew point)"], ["wind", "Wind (speed, gust, direction)"], ["pressure_humidity", "Pressure & humidity"], ["solar_uv", "Solar & UV"], ["rain", "Rain (rate, today)"], ["air_quality", "Air quality (AQI, PM2.5)"], ["temperature_range", "Daily temperature range (30 days)"]]) } }, default: "temps" },
      { name: "days_to_show", selector: { number: { min: 0.25, max: 365, step: 0.25, mode: "box" } } },
      { name: "period", selector: { select: { options: opt([["5minute", "5 minutes"], ["hour", "Hour"], ["day", "Day"], ["week", "Week"], ["month", "Month"]]) } } },
      { name: "chart_type", selector: { select: { options: opt([["line", "Line"], ["bar", "Bar"]]) } }, helper: "Built-in card only (the custom card sets this per series)." },
      { name: "stat_types", selector: { select: { multiple: true, options: opt([["mean", "Mean"], ["min", "Min"], ["max", "Max"], ["state", "State"], ["change", "Change"]]) } } },
      { name: "card", selector: { object: {} }, helper: "Extra options merged into the graph card's config, e.g. show_interval_picker: true, or a full entities: list." },
    ],
  },
  health: {
    tag: "wsfc-panel-health", label: "Station health", icon: "mdi:heart-pulse", span: 4, rows: 0,
    schema: [
      { name: "show_devices", selector: { boolean: {} }, helper: "Show device names even when there is only one." },
      { name: "include_ecowitt", label: "All Ecowitt devices", selector: { boolean: {} }, default: true, helper: "Also show devices from any Ecowitt integration that aren't in Weather Sources (e.g. Ecowitt Local's sensor devices next to the core integration)." },
      { name: "show_ids", label: "Hardware IDs", selector: { boolean: {} }, default: true },
      { name: "devices", label: "More devices", selector: { device: { multiple: true } }, helper: "Any other devices to show (battery, signal, online)." },
    ],
  },
  records: {
    tag: "wsfc-panel-records", label: "Weather records", icon: "mdi:trophy-outline", span: 4, rows: 0,
    schema: [
      { name: "show_station", label: "This station's records", selector: { boolean: {} }, default: true, helper: "From Home Assistant's long-term statistics (temperature, gust, rain today); grows as history builds up." },
      { name: "show_today", label: "Records for today's date", selector: { boolean: {} }, default: true },
      { name: "show_month", label: "Records for this month", selector: { boolean: {} }, default: true },
      { name: "show_all_time", label: "All-time area records", selector: { boolean: {} }, default: true },
      { name: "show_badge", label: "Record badge", selector: { boolean: {} }, default: true, helper: "A badge when today beats the area record for its date." },
      { name: "show_source", label: "Source line", selector: { boolean: {} }, default: true },
      { name: "area_source", label: "Area records from", selector: { select: { options: opt([["auto", "Automatic — CoAgMET sensor, else Open-Meteo"], ["coagmet", "CoAgMET sensor only (Colorado, measured)"], ["open_meteo", "Open-Meteo only (anywhere, modelled since 1940)"], ["off", "None — this station only"]]) } }, default: "auto" },
      { name: "records_entity", label: "Area records sensor", when: (d) => d.area_source !== "open_meteo" && d.area_source !== "off", selector: { entity: { domain: "sensor" } }, helper: "Found on its own: the sensor from the coagmet_records package (CoAgMET / Northern Water, Colorado)." },
    ],
  },
  vpd: {
    tag: "wsfc-panel-vpd", label: "Air dryness (VPD)", icon: "mdi:water-opacity", span: 4, rows: 0,
    schema: [
      { name: "entity", label: "VPD sensor", selector: ent("sensor"), helper: "Default: the station's own VPD sensor, else worked out from temperature and humidity." },
      { name: "show_plant", label: "Plant picture", selector: { boolean: {} }, default: true },
      { name: "show_advice", label: "Garden advice", selector: { boolean: {} }, default: true, helper: "What the reading means this season." },
      { name: "show_scale", label: "Colour scale", selector: { boolean: {} }, default: true },
      { name: "show_note", label: "Explanation", selector: { boolean: {} }, default: true },
      { name: "content_width", label: "Horizontal spacing", selector: { number: { min: 30, max: 200, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100 },
      { name: "content_height", label: "Vertical spacing", selector: { number: { min: 30, max: 200, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100 },
    ],
  },
  frost_watch: {
    tag: "wsfc-panel-frost-watch", label: "Frost & heat watch", icon: "mdi:snowflake-thermometer", span: 4, rows: 0,
    schema: [
      { name: "use_forecast", label: "Use tonight's forecast low", selector: { boolean: {} }, default: true, helper: "Also warn about frost later tonight (lowest hourly forecast in the next 18 hours)." },
      { name: "show_note", label: "Unofficial note", selector: { boolean: {} }, default: true },
      { name: "heat_danger", section: "Thresholds", label: "Heat danger at feels-like", selector: { number: { mode: "box", step: 1 } }, helper: "In your temperature unit. Default 103 °F / 39 °C." },
      { name: "heat_caution", section: "Thresholds", label: "Heat caution at feels-like", selector: { number: { mode: "box", step: 1 } }, helper: "Default 90 °F / 32 °C." },
      { name: "frost_temp", section: "Thresholds", label: "Frost possible at or below", selector: { number: { mode: "box", step: 0.5 } }, helper: "Air temperature, any time. Default 36 °F / 2 °C." },
      { name: "frost_night_temp", section: "Thresholds", label: "Calm, dry night: frost at or below", selector: { number: { mode: "box", step: 0.5 } }, helper: "With a dew point at or below freezing and light wind. Default 41 °F / 5 °C." },
      { name: "frost_low", section: "Thresholds", label: "Frost tonight when the low is at or below", selector: { number: { mode: "box", step: 0.5 } }, helper: "Default 34 °F / 1 °C." },
    ],
  },
  rain: {
    tag: "wsfc-panel-rain", label: "Rain totals", icon: "mdi:weather-rainy", span: 4, rows: 0,
    schema: [
      { name: "show_rows", label: "Rows", selector: { select: { multiple: true, options: opt([["rain_rate", "Raining now (rate)"], ["rain_hour", "Last hour"], ["rain_today", "Today"], ["rain_24h", "Last 24 hours"], ["rain_event", "This rain event"], ["rain_week", "This week"], ["rain_month", "This month"], ["rain_year", "This year"], ["last_rain", "Last rain"]]) } }, helper: "In this order. Week, month and year come from Home Assistant's history when the station has no sensor for them." },
      { name: "show_normal", label: "Against the normal", selector: { boolean: {} }, default: true, helper: "This month and year so far against the area's normal (CoAgMET or Open-Meteo)." },
      { name: "area_source", label: "Area data from", selector: { select: { options: opt([["auto", "Automatic — CoAgMET sensor, else Open-Meteo"], ["coagmet", "CoAgMET sensor only (Colorado, measured)"], ["open_meteo", "Open-Meteo only (anywhere, modelled)"], ["off", "None"]]) } }, default: "auto" },
      { name: "content_width", label: "Horizontal spacing", selector: { number: { min: 30, max: 200, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100 },
      { name: "content_height", label: "Vertical spacing", selector: { number: { min: 30, max: 200, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100 },
    ],
  },
  garden: {
    tag: "wsfc-panel-garden", label: "Frost & the garden", icon: "mdi:sprout", span: 4, rows: 0,
    schema: [
      { name: "show_outlook", label: "Frost outlook (next nights)", selector: { boolean: {} }, default: true },
      { name: "outlook_source", label: "Outlook from", when: (d) => d.show_outlook !== false, selector: { select: { options: opt([["forecast", "Weather forecast (the card's weather entity)"], ["open_meteo", "Open-Meteo"]]) } }, default: "forecast" },
      { name: "show_season", label: "Frost this season", selector: { boolean: {} }, default: true },
      { name: "show_gdd", label: "Growing degree days", selector: { boolean: {} }, default: true },
      { name: "show_soil", label: "Soil temperature and moisture", selector: { boolean: {} }, default: true, helper: "The station's soil sensors, else the Soil Temperature integration, else Open-Meteo." },
      { name: "show_water", label: "Water balance (last 7 days)", selector: { boolean: {} }, default: true },
      { name: "open_meteo", label: "Use Open-Meteo", selector: { boolean: {} }, default: true, helper: "Forecast lows, soil and evapotranspiration for your location (free, no key)." },
      { name: "area_source", label: "Area data from", selector: { select: { options: opt([["auto", "Automatic — CoAgMET sensor, else Open-Meteo"], ["coagmet", "CoAgMET sensor only (Colorado, measured)"], ["open_meteo", "Open-Meteo only (anywhere, modelled)"], ["off", "None"]]) } }, default: "auto" },
      { name: "soil_temperature_entity", label: "Soil temperature sensor", selector: ent("sensor") },
      { name: "soil_moisture_entity", label: "Soil moisture sensor", selector: ent("sensor") },
      { name: "content_width", label: "Horizontal spacing", selector: { number: { min: 30, max: 200, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100 },
      { name: "content_height", label: "Vertical spacing", selector: { number: { min: 30, max: 200, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100 },
    ],
  },
  lightning: {
    tag: "wsfc-panel-lightning", label: "Lightning", icon: "mdi:flash", span: 4, rows: 0,
    hideWhen: (p, hass, station) => {
      const i = lightningIds(p, station, hass);
      if (!hass?.states?.[i.distance] && !hass?.states?.[i.count]) return true;
      return !!p.hide_when_zero && Number(hass.states[i.count]?.state) === 0;
    },
    schema: [
      { name: "near_km", label: "Warn within (km)", selector: { number: { min: 1, max: 40, mode: "box" } }, default: 16, helper: "Default 16 km (10 miles)." },
      { name: "near_minutes", label: "…for (minutes after a strike)", selector: { number: { min: 5, max: 120, mode: "box" } }, default: 30 },
      { name: "hide_when_zero", label: "Hide the panel when there are no strikes", selector: { boolean: {} }, default: false, helper: "Hidden while the strike count is 0 (Ecowitt counts strikes per day)." },
      { name: "show_battery", label: "Sensor battery", selector: { boolean: {} }, default: true },
      { name: "show_note", label: "Note", selector: { boolean: {} }, default: true },
      { name: "distance_entity", label: "Distance sensor", selector: ent("sensor"), helper: "Found on its own (e.g. Ecowitt WH57)." },
      { name: "count_entity", label: "Strikes sensor", selector: ent("sensor") },
      { name: "time_entity", label: "Last strike time sensor", selector: ent("sensor") },
    ],
  },
  pollen: {
    tag: "wsfc-panel-pollen", label: "Pollen", icon: "mdi:flower-pollen", span: 4, rows: 0,
    // Out of season: no tile in the grid (its button still opens it).
    hideWhen: (p, hass) => {
      const m = pollenModel(p, hass);
      return (p.hide_when_off_season === true && m.outOfSeason) || (p.hide_when_none === true && m.allNone);
    },
    schema: [
      { name: "device", selector: { device: { integration: "pollenlevels" } }, helper: "Pollen Levels location (default: the first one)." },
      { name: "view", selector: { select: { options: opt([["plants", "Species (oak, juniper, ragweed …)"], ["types", "Types (tree, grass, weed)"]]) } }, default: "plants" },
      { name: "species", selector: { text: { multiple: true } }, helper: "Species to show, in order, by Google code or name (e.g. JUNIPER, OAK, GRAMINALES). Blank shows the busiest." },
      { name: "max_rows", selector: { number: { min: 0, max: 20, mode: "box" } }, default: 6, helper: "Rows when no species are listed (0 = all)." },
      { name: "content_width", label: "Horizontal spacing", selector: { number: { min: 30, max: 200, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100, helper: "Width of tiles, chips and the gaps between columns." },
      { name: "content_height", label: "Vertical spacing", selector: { number: { min: 30, max: 200, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100, helper: "Row height, padding and the gaps between rows." },
      { name: "hide_off_season", selector: { boolean: {} }, default: true, helper: "Hide species that are out of season." },
      { name: "hide_when_off_season", selector: { boolean: {} }, default: false, helper: "Hide the whole panel when no species is in season (its panel button still opens it)." },
      { name: "hide_when_none", selector: { boolean: {} }, default: false, helper: "Hide the whole panel when every species is at None today (its panel button still opens it)." },
      { name: "show_tomorrow", selector: { boolean: {} }, default: true },
      { name: "show_season", selector: { boolean: {} }, default: true, helper: "12-month strip: how many of the shown species are in season each month." },
      { name: "hide_none", selector: { boolean: {} }, default: true, helper: "Hide species with nothing in the air today (level None)." },
      { name: "show_nothing", selector: { boolean: {} }, default: true, helper: "Show \"In season, but nothing in the air today\" in the header line when every species is at None." },
      { name: "nothing_text", selector: { text: {} }, helper: "Replace that text, e.g. \"All clear\"." },
      { name: "show_source", selector: { boolean: {} }, default: true, helper: "Show the data source (Google) in the header line." },
      { name: "source", selector: { text: {} }, helper: "Replace the source text." },
      { name: "show_location", selector: { boolean: {} }, default: true, helper: "Show the town in the header line." },
      { name: "location", selector: { text: {} }, helper: "Replace the town (default: your Home Assistant location name)." },
      { name: "seasons", selector: { object: {} }, helper: "Season months per species, e.g. JUNIPER: [1, 2, 3, 4]. Default: Google's season text, else typical months." },
      { name: "entities", selector: { entity: { multiple: true, domain: "sensor" } }, helper: "Advanced: use these sensors instead of finding Pollen Levels automatically." },
    ],
  },
  air_quality: {
    tag: "wsfc-panel-air-quality", label: "Air quality", icon: "mdi:air-filter", span: 4, rows: 0,
    schema: [
      { name: "layout", selector: { select: { options: opt([["compact", "Compact — one row of tiles (tap to open the full panel)"], ["scale", "Scale — colour scale and rating per pollutant (like Pollen)"], ["rows", "Rows — bar, level and value per pollutant"], ["bars", "Vertical bars on the AQI scale"], ["tiles", "Tiles"]]) } }, default: "scale" },
      { name: "pollutants", selector: { select: { multiple: true, options: opt([["pm2_5", "PM2.5"], ["pm10", "PM10"], ["ozone", "Ozone"], ["co2", "CO₂"]]) } }, helper: "Default: all that are found." },
      { name: "extra", selector: { object: {} }, helper: "More readings, e.g. - entity: sensor.erie_benzene with optional label, icon and thresholds: [moderate, elevated, high, very high] in the sensor's unit. Benzene and CO₂ have built-in thresholds." },
      { name: "tile_fill", label: "Stretch tiles to fill the width", when: (d) => d.layout === "tiles", selector: { boolean: {} }, default: false, helper: "Off: each tile is as wide as what's in it." },
      { name: "content_width", label: "Horizontal spacing", selector: { number: { min: 30, max: 200, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100, helper: "Width of tiles, chips and the gaps between columns." },
      { name: "content_height", label: "Vertical spacing", selector: { number: { min: 30, max: 200, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100, helper: "Row height, padding and the gaps between rows." },
      { name: "show_aqi", selector: { boolean: {} }, default: true },
      { name: "show_scale", selector: { boolean: {} }, helper: "Rows, bars and tiles: AQI colour scale under the number (default: on for tiles only)." },
      { name: "bar_height", selector: { number: { min: 60, max: 400, mode: "box", unit_of_measurement: "px" } }, helper: "Vertical bars: height (default 140)." },
      { name: "show_source", selector: { boolean: {} }, default: true, helper: "Show the data source (e.g. AirNow, Boulder AIR)." },
      { name: "source", selector: { text: {} }, helper: "Replace the source text (default: the sensor's source attribute or integration)." },
      { name: "show_location", selector: { boolean: {} }, default: true, helper: "Show the reporting area / town (AirNow's reporting area)." },
      { name: "location", selector: { text: {} }, helper: "Replace the area or town text." },
      { name: "entities.aqi", selector: ent("sensor"), helper: "Default: the station's own sensor, else AirNow, else any outdoor AQI sensor." },
      { name: "entities.pm2_5", selector: ent("sensor") },
      { name: "entities.pm10", selector: ent("sensor") },
      { name: "entities.ozone", selector: ent("sensor") },
      { name: "entities.co2", selector: ent("sensor") },
    ],
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
  chips: {
    tag: "wsfc-panel-chips", label: "Current Weather Metrics", icon: "mdi:format-list-bulleted-square", span: 12, rows: 0, flex: true,
    flexPanels: ["Current Weather Metrics"],
    schema: [],
  },
  clock: {
    tag: "wsfc-panel-clock", label: "Clock", icon: "mdi:clock-outline", span: 4, rows: 1, inBar: false,
    schema: [
      { name: "show_time", selector: { boolean: {} }, default: true },
      { name: "show_seconds", selector: { boolean: {} }, default: false },
      { name: "time_format", selector: { select: { options: opt([["auto", "Home Assistant's setting"], ["12", "12-hour"], ["24", "24-hour"]]) } }, default: "auto" },
      { name: "show_date", selector: { boolean: {} }, default: true },
      { name: "date_format", selector: { select: { options: opt([["long", "Thursday, October 22"], ["medium", "Thu, Oct 22"], ["short", "10/22"], ["weekday", "Thursday"], ["full", "Thursday, October 22, 2026"]]) } }, default: "medium" },
      { name: "align", selector: { select: { options: opt([["center", "Center"], ["left", "Left"], ["right", "Right"]]) } }, default: "center" },
      { name: "auto_size", selector: { boolean: {} }, default: true, helper: "Size the time and date to fill the panel." },
      { name: "scale", selector: { number: { min: 50, max: 200, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100, helper: "Auto size: bigger or smaller." },
      { name: "date_scale", label: "Date size", when: (d) => d.auto_size !== false, selector: { number: { min: 10, max: 100, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 30, helper: "Date size as a share of the time's size." },
      { name: "time_size", when: (d) => d.auto_size === false, selector: { number: { min: 12, max: 200, mode: "slider", unit_of_measurement: "px" } }, default: 48 },
      { name: "date_size", when: (d) => d.auto_size === false, selector: { number: { min: 8, max: 80, mode: "slider", unit_of_measurement: "px" } }, default: 16 },
      { name: "time_weight", selector: { select: { options: opt([["300", "Light"], ["400", "Regular"], ["500", "Medium"], ["700", "Bold"]]) } }, default: "300" },
      { name: "color", selector: { text: {} }, helper: "Time color. Not set: the theme's text color." },
      { name: "date_color", selector: { text: {} }, helper: "Not set: secondary text." },
    ],
  },
  card: {
    tag: "wsfc-panel-card", label: "Home Assistant card", icon: "mdi:card-outline", span: 6, rows: 0,
    schema: [{ name: "card", selector: { object: {} }, helper: "Any card configuration, e.g. type: statistics-graph." }],
  },
};

// Grouped schemas: `schema` is all of a type's fields.
// Groups are written [title, icon, fields]; stored as [title, fields, icon].
for (const m of Object.values(PANEL_TYPES)) {
  if (!m.groups) continue;
  m.groups = m.groups.map((g) => (typeof g[1] === "string" ? [g[0], g[2], g[1]] : g));
  if (!m.schema) m.schema = m.groups.flatMap(([, f]) => f);
}

/** Fields every panel has (editor "Layout" group). */
// Title and its icon, with checkboxes to hide them (panels without a header skip these).
const TITLE_FIELDS = [
  { name: "show_title", label: "Show the title", selector: { boolean: {} }, default: true },
  { name: "title", when: (d) => d.show_title !== false, selector: { text: {} } },
  { name: "show_icon", label: "Show the title icon", when: (d) => d.show_title !== false, selector: { boolean: {} }, default: true },
  { name: "icon", when: (d) => d.show_title !== false && d.show_icon !== false, selector: { icon: {} } },
];
export const NO_TITLE = new Set(["hero", "stack", "clock"]);
// Types that show a title only when one is set.
export const TITLE_WHEN_SET = new Set(["chips", "sky_tracker", "card"]);

// Folding a panel down to its title header (per panel; the colours, title tap
// and hint text also have card-wide defaults under Appearance).
export const COLLAPSE_COLORS = [
  { name: "expanded_icon_color", label: "Title icon color", selector: { text: {} }, helper: "Not set: the theme's normal title icon colour." },
  { name: "expanded_text_color", label: "Title text color", selector: { text: {} }, helper: "Not set: the theme's text colour." },
  { name: "collapsed_icon_color", label: "Folded icon color", selector: { text: {} }, helper: "Not set: the same as the title icon colour." },
  { name: "collapsed_text_color", label: "Folded title color", selector: { text: {} }, helper: "Not set: the same as the title text colour." },
];
export const COLLAPSE_FIELDS = [
  { name: "collapsible", label: "Collapse button", selector: { boolean: {} }, default: false, helper: "Fold the panel down to its title header to save space (e.g. maps). A folded map is paused. With Remember Panel Button States, this browser remembers what you folded." },
  { name: "collapsed", label: "Start collapsed", when: (d) => !!(d.collapsible || d.compact), selector: { boolean: {} }, default: false },
  { name: "collapsed_open", label: "Opens", when: (d) => !!(d.collapsible || d.compact), selector: { select: { options: opt([["default", "Card default (Layout & Behavior)"], ["inplace", "In place — the panel grows, the others move"], ["overlay", "Over the other panels — nothing moves"], ["popup", "As a pop-up"]]) } }, default: "default" },
  { name: "collapsed_view", label: "View when collapsed", when: (d) => !!(d.collapsible || d.compact), selector: { select: { options: opt([["default", "Card default (Layout & Behavior)"], ["minimal", "Minimal — the title and a line of info"], ["compact", "Compact — one row of tiles with all the data"]]) } }, default: "default" },
  { name: "compact_expand", label: "Tap the tiles to open the full panel", when: (d) => !!(d.collapsible || d.compact) && d.collapsed_view !== "minimal", selector: { boolean: {} }, default: true, helper: "Compact view. Off: a tap on a tile opens that sensor (the fold button still opens the panel)." },
  { name: "compact_icon", label: "Show the icon in the tiles row", when: (d) => !!(d.collapsible || d.compact) && d.collapsed_view !== "minimal", selector: { boolean: {} }, default: true },
  { name: "compact_title", label: "Show the title in the tiles row", when: (d) => !!(d.collapsible || d.compact) && d.collapsed_view !== "minimal", selector: { boolean: {} }, default: true },
  { name: "collapse_title_tap", label: "Tap the title to fold / unfold", when: (d) => !!(d.collapsible || d.compact), selector: { select: { options: opt([["default", "Card default (Appearance)"], ["on", "On"], ["off", "Off"]]) } }, default: "default" },
  { name: "show_collapse_hint", label: "Hint under the title while folded", when: (d) => d.collapsed_view !== "compact" && !!d.collapsible, selector: { select: { options: opt([["default", "Card default (Appearance)"], ["on", "Show"], ["off", "Hide"]]) } }, default: "default" },
  { name: "collapse_hint", label: "Hint text", when: (d) => d.collapsed_view !== "compact" && !!d.collapsible && d.show_collapse_hint !== "off", selector: { text: {} }, helper: "Default \"Tap title to show\"." },
  { name: "collapsed_info", label: "Info in the header while folded", when: (d) => d.collapsed_view !== "compact" && !!d.collapsible, selector: { select: { options: opt([["default", "Card default (Appearance)"], ["summary", "The panel's summary (e.g. strikes today)"], ["entity", "An entity's value"], ["off", "None"]]) } }, default: "default" },
  { name: "collapsed_entity", label: "Entity to show", when: (d) => d.collapsed_view !== "compact" && !!d.collapsible && d.collapsed_info !== "off", selector: { entity: {} }, helper: "Its value in the folded header (used by \"An entity's value\", and instead of the summary when set)." },
  { name: "collapsed_label", label: "Label before the value", when: (d) => d.collapsed_view !== "compact" && !!d.collapsible && !!d.collapsed_entity && d.collapsed_info !== "off", selector: { text: {} } },
  ...COLLAPSE_COLORS.map((f) => ({ ...f, when: (d) => !!(d.collapsible || d.compact) })),
];

export const COMMON_SCHEMA = [
  { section: "Size and Scaling", name: "display", label: "Location", selector: { select: { options: opt([["grid", "In the grid"], ["tile_popup", "In the grid — tap it to open larger"], ["popup", "Pop-up only (from its panel button)"]]) } } },
  { section: "Size and Scaling", name: "span", selector: { number: { min: 1, max: 12, mode: "slider" } }, helper: "Width in twelfths of the card." },
  { section: "Size and Scaling", name: "rows", selector: { number: { min: 0, max: 10, step: 0.5, mode: "slider" } }, helper: "Height in row units, in half steps (0 = fit content, 0.5 = half height)." },
  { section: "Size and Scaling", name: "overflow", label: "When the content doesn't fit", selector: { select: { options: opt([["default", "Card default (Layout)"], ["grow", "Grow — the panel gets taller"], ["scroll", "Scroll — keep the set height, with a scroll bar"]]) } }, default: "default", helper: "Scroll needs a height of at least 1 row (it is raised to 1 when you pick Scroll)." },
  { section: "Size and Scaling", name: "compact", label: "Compact view", selector: { boolean: {} }, default: false, helper: "Show this panel as one row of small tiles with all its data; tapping it opens the full panel (see Collapse → Opens)." },
  { section: "Size and Scaling", name: "content_scale", label: "Scale all Panel Contents", selector: { number: { min: 40, max: 200, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100, helper: "Everything inside the panel bigger or smaller (text, icons, tiles), so it fits the space." },
  ...COLLAPSE_FIELDS.map((f) => ({ ...f, section: "Collapse" })),
  // Title, panel button and this panel's Appearance defaults.
  ...TITLE_FIELDS.map((f) => ({ ...f, section: "Default Overrides" })),
  { section: "Default Overrides", name: "in_bar", label: "Panel button", selector: { boolean: {} }, helper: "Adds a button for this panel to the button menu, to show or hide it (or open its pop-up). Off: no button, and the panel is always shown (unless hidden with the eye icon in the panel list)." },
  { name: "tile_background", section: "Default Overrides", label: "Panel background", selector: { select: { options: opt([["default", "Default"], ["translucent", "See-through (uses Panel opacity)"], ["solid", "Solid"], ["none", "None"]]) } }, default: "default" },
  { name: "tile_shadow", section: "Default Overrides", label: "Disable shadow", invert: true, selector: { boolean: {} }, default: true },
  { name: "tile_border", section: "Default Overrides", label: "Disable border", invert: true, selector: { boolean: {} }, default: true },
  { name: "tile_glow", section: "Default Overrides", label: "Disable glow", invert: true, selector: { boolean: {} }, default: true },
];

/** Layout fields for a panel inside a stack (it has no grid position). */
export const STACK_CHILD_SCHEMA = [
  { section: "Size and Scaling", name: "grow", label: "Share of the stack", selector: { number: { min: 0, max: 6, step: 0.5, mode: "slider" } }, helper: "How much of the stack's space this panel takes, compared with the others. Side-by-side stack: its share of the width (default 1; 2 = twice as wide as a 1). Stack one above the other: its share of the leftover height (0 = only as tall as its content; default 1 when it has a height or the stack fills its panel, else 0). Panels hidden by their buttons give their share to the others." },
  { section: "Size and Scaling", name: "min_width", label: "Narrowest width", selector: { number: { min: 80, max: 800, step: 10, mode: "slider", unit_of_measurement: "px" } }, helper: "Side-by-side stack: the narrowest this panel gets before the stack wraps it onto a new line (default 180 px)." },
  { section: "Size and Scaling", name: "rows", selector: { number: { min: 0, max: 10, step: 0.5, mode: "slider" } }, helper: "Vertical: minimum height in row units (half steps allowed)." },
  { section: "Size and Scaling", name: "compact", label: "Compact view", selector: { boolean: {} }, default: false, helper: "Show this panel as one row of small tiles with all its data; tapping it opens the full panel." },
  ...COLLAPSE_FIELDS.map((f) => ({ ...f, section: "Collapse" })),
  ...TITLE_FIELDS.map((f) => ({ ...f, section: "Default Overrides" })),
  { name: "tile_shadow", section: "Default Overrides", label: "Disable shadow", invert: true, selector: { boolean: {} }, default: true },
  { name: "tile_border", section: "Default Overrides", label: "Disable border", invert: true, selector: { boolean: {} }, default: true },
  { name: "tile_glow", section: "Default Overrides", label: "Disable glow", invert: true, selector: { boolean: {} }, default: true },
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
  { type: "pollen", show: false },
  { type: "air_quality", show: false },
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
  // Only configs that still use an old sky panel type predate the change.
  // (old types, or a hero still carrying Sky Bar settings), so a new hero
  // doesn't get a Sky Tracker added.
  const legacy = panels.some((p) => p && SKY_TYPES.has(p.type)) || (!!hero && ("sky_bar" in hero || !!hero.flex?.wfc?.sun_position));
  const heroWasSky = !!hero && legacy && hero.sky_bar !== false && hero.flex?.wfc?.sun_position?.show !== false && panels !== DEFAULT_PANELS;
  panels = migrateSky(panels, heroWasSky).map((p) => (p?.type === "stack" ? { ...p, panels: migrateSky(p.panels || [], false) } : p));
  panels = panels.filter((p) => p && PANEL_TYPES[p.type]);
  // Configs from the first build had no hero panel; the hero was implied (and
  // configured under top-level `hero:`). Keep showing it.
  if (Array.isArray(config.panels) && config.panels.length && !panels.some((p) => p.type === "hero") && config.hero !== false) {
    panels = [{ type: "hero", span: 12 }, ...panels];
  }
  panels = panels.map((p) => (p.type === "hero" && config.hero && typeof config.hero === "object" && !p.flex ? { ...p, flex: config.hero } : p));
  // Rain totals' row list was `rows` (the panel height's name) before v2026.10.29.76.
  const fix = (p) => (p?.type === "rain" && Array.isArray(p.rows) ? (({ rows, ...r }) => ({ ...r, show_rows: rows }))(p) : p);
  return panels.map((p) => (p?.type === "stack" ? { ...p, panels: (p.panels || []).map(fix) } : fix(p)));
}

