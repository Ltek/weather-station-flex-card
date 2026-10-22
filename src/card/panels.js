// Panel type registry: element tag, label/icon, default size and the editor
// schema (Home Assistant ha-form) for the type's own options.
import { METRICS } from "./metrics.js";
import { pollenModel } from "./pollen.js";
import { WINDROSE_PRESETS } from "../panels/windrose.js";
import { factsFields } from "../panels/astro-facts.js";

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
      { name: "auto_scale", selector: { boolean: {} }, default: false, helper: "Size the temperature, condition, icon, clock, date and metric chips from the panel's size, over the sizes set below. Sizes left at Auto below follow the panel either way." },
      { name: "scale", selector: { number: { min: 50, max: 200, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100, helper: "Auto scaling: make the auto sizes bigger or smaller." },
      ...factsFields(),
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
      { name: "min_width", selector: { number: { min: 80, max: 800, mode: "box", unit_of_measurement: "px" } }, helper: "Horizontal: children wrap to a new line only below this width (default 180)." },
    ],
  },
  wind: {
    tag: "wsfc-panel-wind", label: "Wind", icon: "mdi:weather-windy", span: 6, rows: 4, fit: true,
    // Settings grouped by what they change (the editor shows a heading per group).
    groups: [
      ["View", [
        { name: "fit", selector: { boolean: {} }, default: true, helper: "Shrink the compass or rose so everything fits the panel's height (instead of the panel growing and stretching its row)." },
        { name: "view", selector: { select: { options: opt([["compass", "Compass"], ["rose", "Wind rose"]]) } } },
        { name: "show_view_buttons", selector: { boolean: {} }, default: true, helper: "Compass / Rose buttons in the header." },
      ]],
      ["Readings (speed, gust, direction)", [
        { name: "readings_position", selector: { select: { options: opt([["auto", "Automatic — beside the dial; hidden with the Wind Rose Card"], ["side", "Beside the dial"], ["above", "Above"], ["below", "Below"], ["hidden", "Hidden"]]) } }, default: "auto" },
      ]],
      ["Chart", [
        { name: "show_chart", label: "Show the chart", selector: { boolean: {} }, default: true, helper: "24 h speed and gust chart." },
        { name: "chart_position", when: (d) => d.show_chart !== false, selector: { select: { options: opt([["below", "Below"], ["above", "Above"]]) } }, default: "below" },
        { name: "chart_legend", when: (d) => d.show_chart !== false, selector: { boolean: {} }, default: false, helper: "Speed / Gust legend on the chart." },
        { name: "windrose_chart", when: (d) => d.show_chart !== false, selector: { boolean: {} }, default: true, helper: "Also with the Wind Rose Card." },
      ]],
      ["Compass", [
        { name: "dial_scale", selector: { number: { min: 50, max: 250, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100, helper: "Compass and built-in rose size." },
        { name: "compass_arrow_size", selector: { number: { min: 50, max: 200, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100, helper: "Direction pointer size." },
        { name: "compass_arrow_color", selector: { text: {} }, helper: "Not set: the wind color." },
      ]],
      ["Wind rose", [
        { name: "rose_engine", selector: { select: { options: opt([["auto", "Automatic — Wind Rose Card when installed"], ["windrose", "Wind Rose Card (custom:windrose-card)"], ["builtin", "Built-in rose"]]) } }, default: "auto", helper: "aukedejong's Wind Rose Card (HACS) with your station's sensors filled in, or our built-in 24 h rose." },
        { name: "show_legend", selector: { boolean: {} }, default: true, helper: "Built-in rose: speed colour legend." },
        { name: "rose_bins", selector: { object: {} }, helper: "Built-in rose: speed thresholds in the sensor's unit, e.g. [1, 5, 10, 15, 25]." },
        { name: "windrose_preset", selector: { select: { options: Object.entries(WINDROSE_PRESETS).map(([value, p]) => ({ value, label: p.label })) } }, default: "standard", helper: "Wind Rose Card starting layout; the settings below change parts of it." },
        { name: "wr_period", selector: { select: { options: opt([["preset", "From the preset"], ["-1h", "1 hour"], ["-8h", "8 hours"], ["-1d", "24 hours"], ["-7d", "7 days"], ["-30d", "30 days"]]) } }, default: "preset", helper: "Period shown first." },
        { name: "wr_scale", selector: { number: { min: 30, max: 150, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100, helper: "Wind Rose Card size within the panel." },
        { name: "wr_arrow", selector: { boolean: {} }, default: true, helper: "Current direction arrow." },
        { name: "wr_arrow_size", when: (d) => d.wr_arrow !== false, selector: { number: { min: 10, max: 120, step: 5, mode: "slider" } }, default: 50, helper: "Direction arrow (pointer) size." },
        { name: "wr_arrow_color", when: (d) => d.wr_arrow !== false, selector: { text: {} }, helper: "Not set: red. The Wind Rose Card uses it for the speed-bar arrows too." },
      ]],
      ["Wind Rose Card: speed bars", [
        { name: "wr_bars", selector: { select: { options: opt([["preset", "From the preset"], ["right", "Right"], ["bottom", "Bottom"], ["hidden", "Hidden"]]) } }, default: "preset" },
        { name: "wr_beaufort", selector: { select: { options: opt([["preset", "From the preset"], ["on", "Beaufort"], ["off", "Speed unit"]]) } }, default: "preset" },
        { name: "wr_speed_arrows", selector: { select: { options: opt([["preset", "From the preset"], ["on", "Show"], ["off", "Hide"]]) } }, default: "preset", helper: "Arrow on each bar at the current speed." },
        { name: "wr_speed_arrow_size", when: (d) => d.wr_speed_arrows !== "off", selector: { number: { min: 10, max: 120, step: 5, mode: "slider" } }, default: 40 },
      ]],
      ["Wind Rose Card: corner info", [
        { name: "wr_corners", selector: { select: { options: opt([["preset", "From the preset"], ["on", "Show"], ["off", "Hide"]]) } }, default: "preset" },
        ...[["corner_speed", "top_left"], ["corner_direction", "top_right"], ["corner_gust", "bottom_left"]].map(([name, d]) => (
          { name, when: (d) => d.wr_corners !== "off", selector: { select: { options: opt([["top_left", "Top left"], ["top_right", "Top right"], ["bottom_left", "Bottom left"], ["bottom_right", "Bottom right"], ["hidden", "Hidden"]]) } }, default: d })),
        { name: "corner_label_size", when: (d) => d.wr_corners !== "off", selector: { number: { min: 20, max: 120, step: 5, mode: "slider" } }, default: 50, helper: "Label size (the card's own scale)." },
        { name: "corner_value_size", when: (d) => d.wr_corners !== "off", selector: { number: { min: 20, max: 160, step: 5, mode: "slider" } }, default: 80, helper: "Value size (the card's own scale)." },
        { name: "corner_color", when: (d) => d.wr_corners !== "off", selector: { text: {} }, helper: "Text color." },
      ]],
      ["Wind Rose Card: statistics", [
        { name: "wr_stats", selector: { select: { options: opt([["preset", "From the preset"], ["top", "Above the rose"], ["bottom", "Below the rose"], ["off", "Hide"]]) } }, default: "preset" },
        { name: "stats_items", when: (d) => d.wr_stats !== "off", selector: { select: { multiple: true, options: opt([["min", "Min"], ["avg", "Average"], ["max", "Max"], ["median", "Median"], ["p90", "P90 (gust-like)"], ["calm", "Calm %"]]) } }, default: ["min", "avg", "max", "p90", "calm"] },
        { name: "stats_align", when: (d) => d.wr_stats !== "off", selector: { select: { options: opt([["left", "Left"], ["center", "Center"], ["right", "Right"]]) } }, default: "left" },
        { name: "stats_size", when: (d) => d.wr_stats !== "off", selector: { number: { min: 8, max: 40, mode: "slider", unit_of_measurement: "px" } }, default: 13 },
        { name: "stats_weight", when: (d) => d.wr_stats !== "off", selector: { select: { options: opt([["400", "Regular"], ["500", "Medium"], ["700", "Bold"]]) } }, default: "400" },
        { name: "stats_color", when: (d) => d.wr_stats !== "off", selector: { text: {} }, helper: "Not set: secondary text." },
      ]],
      ["Wind Rose Card: buttons", [
        { name: "wr_buttons", selector: { select: { options: opt([["preset", "From the preset"], ["periods", "Period buttons (1 h … 7 days)"], ["playback", "Playback (±12 h, play 10 days)"], ["none", "None"]]) } }, default: "preset" },
        { name: "wr_buttons_position", when: (d) => d.wr_buttons !== "none", selector: { select: { options: opt([["preset", "From the preset"], ["top", "Top"], ["bottom", "Bottom"]]) } }, default: "preset" },
      ]],
      ["Wind Rose Card: advanced", [
        { name: "windrose", selector: { object: {} }, helper: "Any of the card's own options, merged last, e.g. rose_config, colors or speed_ranges." },
      ]],
      ["Sensors", [
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
    // Set by the panel's own options, so hidden in the Weather Flex editor below.
    flexHide: ["timeframe_mode", "timeframe_hours", "timeframe_anchor", "night_moon"],
    schema: [
      { name: "show_arc", selector: { boolean: {} }, default: true, helper: "Sun arc: the sun's path, its position now, sunrise and sunset; the moon at night." },
      { name: "show_sky", selector: { boolean: {} }, default: true, helper: "Sky gradient: daylight and cloud cover over time, with the forecast row (temperatures, icons, wind…)." },
      { name: "timeframe", selector: { select: { options: opt([["hours", "Number of hours"], ["day", "Today (midnight to midnight)"], ["sunrise_sunset", "Sunrise to sunset"]]) } }, default: "hours", helper: "One time window for the arc and the sky." },
      { name: "hours", selector: { number: { min: 6, max: 72, mode: "box" } }, default: 24 },
      { name: "anchor", selector: { select: { options: opt([["now_center", "Now in the middle"], ["now_left", "Now at the left"]]) } }, default: "now_center" },
      { name: "moon", selector: { boolean: {} }, default: true, helper: "Show the moon on the arc at night." },
      { name: "moon_phase", selector: { boolean: {} }, default: true, helper: "Draw the moon in its current phase (off: a moon icon)." },
      ...factsFields(),
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
    schema: [{ name: "show_devices", selector: { boolean: {} }, helper: "Show device names even when there is only one." }],
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
      { name: "layout", selector: { select: { options: opt([["scale", "Scale — colour scale and rating per pollutant (like Pollen)"], ["rows", "Rows — bar, level and value per pollutant"], ["bars", "Vertical bars on the AQI scale"], ["tiles", "Tiles"]]) } }, default: "scale" },
      { name: "pollutants", selector: { select: { multiple: true, options: opt([["pm2_5", "PM2.5"], ["pm10", "PM10"], ["ozone", "Ozone"], ["co2", "CO₂"]]) } }, helper: "Default: all that are found." },
      { name: "extra", selector: { object: {} }, helper: "More readings, e.g. - entity: sensor.erie_benzene with optional label, icon and thresholds: [moderate, elevated, high, very high] in the sensor's unit. Benzene and CO₂ have built-in thresholds." },
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
    tag: "wsfc-panel-chips", label: "Chips (current conditions)", icon: "mdi:format-list-bulleted-square", span: 12, rows: 0, flex: true,
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
      { name: "time_size", selector: { number: { min: 12, max: 200, mode: "box", unit_of_measurement: "px" } }, helper: "Auto size off: time size (default 48)." },
      { name: "date_size", selector: { number: { min: 8, max: 80, mode: "box", unit_of_measurement: "px" } }, helper: "Auto size off: date size (default 16)." },
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
for (const m of Object.values(PANEL_TYPES)) if (m.groups && !m.schema) m.schema = m.groups.flatMap(([, f]) => f);

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

export const COMMON_SCHEMA = [
  ...TITLE_FIELDS,
  { name: "span", selector: { number: { min: 1, max: 12, mode: "slider" } }, helper: "Width in twelfths of the card." },
  { name: "rows", selector: { number: { min: 0, max: 10, step: 0.5, mode: "slider" } }, helper: "Height in row units, in half steps (0 = fit content, 0.5 = half height)." },
  { name: "display", selector: { select: { options: opt([["grid", "In the grid"], ["tile_popup", "In the grid — tap it to open larger"], ["popup", "Pop-up only (from its panel button)"]]) } } },
  { name: "in_bar", selector: { boolean: {} }, helper: "Adds a button for this panel to the button menu, to show or hide it (or open its pop-up). Off: no button, and the panel is always shown (unless Shown is off)." },
  { name: "tile_background", selector: { select: { options: opt([["default", "Default"], ["translucent", "See-through (uses Panel opacity)"], ["solid", "Solid"], ["none", "None"]]) } }, default: "default", helper: "This panel's background. Default: see-through with the animated background, the theme's otherwise; the button menu has none." },
  { name: "show", selector: { boolean: {} }, default: true, helper: "Visible when the dashboard loads." },
];

/** Layout fields for a panel inside a stack (it has no grid position). */
export const STACK_CHILD_SCHEMA = [
  ...TITLE_FIELDS,
  { name: "grow", selector: { number: { min: 0, max: 12, step: 0.5, mode: "box" } }, helper: "Horizontal: relative width (default 1). Vertical: 1 = share leftover height." },
  { name: "min_width", selector: { number: { min: 80, max: 800, mode: "box", unit_of_measurement: "px" } }, helper: "Horizontal: narrowest this panel gets before wrapping." },
  { name: "rows", selector: { number: { min: 0, max: 10, step: 0.5, mode: "slider" } }, helper: "Vertical: minimum height in row units (half steps allowed)." },
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
  return panels.map((p) => (p.type === "hero" && config.hero && typeof config.hero === "object" && !p.flex ? { ...p, flex: config.hero } : p));
}

