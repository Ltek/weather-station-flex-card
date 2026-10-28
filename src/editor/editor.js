// Visual editor for Weather Station Flex Card.
//
//   Weather station    the weather entity and Weather Sources
//   Appearance         title, background, panel style, layout & behaviour
//   Panel buttons      the button menu
//   Layout             drag-and-drop layout map
//   Panels             ordered list (stack children indented): reorder,
//                      show/hide, duplicate, delete, add; each opens Layout and
//                      its type's options, and flex-based panels (hero,
//                      chips, forecasts, sky tracker) embed Weather Flex
//                      Card's editor for their sections.
//
// Weather Flex's editor emits a full resolved config; flexOverride() diffs it
// against the panel's base so only the user's changes are saved under `flex:`.
// Its entity/metric_sources edits are global and go to the card's top level.
import { LitElement, html, css, nothing } from "lit";
import { CARD_VERSION, CARD_NAME, CARD_TYPE } from "../card/constants.js";
import { PANEL_TYPES, COMMON_SCHEMA, COLLAPSE_COLORS, STACK_CHILD_SCHEMA, NO_TITLE, TITLE_WHEN_SET, panelMeta, spanOf, rowsOf, inBarOf, normalizePanels } from "../card/panels.js";
import { CORE_EDITOR_TAG, flexOverride, deepMerge } from "../card/core.js";
import { flexBase, trackerConfig } from "../panels/flex.js";
import { prune, clone } from "../card/config.js";
import { METRICS, metricEntity } from "../card/metrics.js";
import "./layout-map.js";
import "./layout-probe.js";
import { renderFields, fieldStyles } from "./fields.js";
import { openConfigDialog } from "./config-io.js";
import { setUnsaved, isLive, setLive } from "../card/unsaved.js";
import { detected } from "../card/detected.js";
import { ANIM_SPEEDS } from "../card/animation-speed.js";
import { canCollapseType } from "../card/weather-station-flex-card.js";
import { metricSensor, entityValue, integrationOf } from "../card/resolve.js";
import "./sources.js";
import "./series-editor.js";

const MAP_KEYS = ["temperature", "apparent_temperature", "dew_point", "humidity", "pressure", "wind_speed", "wind_gust_speed", "wind_bearing", "uv_index", "solar_radiation", "illuminance", "precipitation"];
const MAP_LABELS = { wind_bearing: "Wind direction", precipitation: "Rain rate" };

// Appearance section, in groups. GENERAL_SCHEMA is all of them (for reading and writing).
const APPEARANCE_GROUPS = [
  ["Card", [
    { name: "title", selector: { text: {} }, helper: "Optional title row above the panels." },
    { name: "subtitle", selector: { text: {} } },
    { name: "icon", selector: { icon: {} } },
  ]],
  ["Background", [
    { name: "background", selector: { select: { options: [{ value: "none", label: "None (theme)" }, { value: "animated", label: "Animated weather — the hero's animation behind the whole card" }, { value: "image", label: "Image — upload one or use a URL" }] } }, helper: "With an animated or image background, panels become see-through and the hero stops drawing its own." },
    { name: "background_effects", label: "Animation effects", when: (d) => d.background === "animated", selector: { select: { multiple: true, options: [["rain", "Rain"], ["snow", "Snow"], ["lightning", "Lightning"], ["sky", "Sky"], ["moon", "Moon"], ["sun", "Sun"], ["cloud", "Clouds"]].map(([value, label]) => ({ value, label })) } }, default: ["rain", "snow", "lightning", "sky", "moon", "sun", "cloud"], helper: "Which effects the weather animation draws. At night it shows the dark sky and the moon instead of the sun." },
    { name: "background_moon_phase", label: "Show moon phase", when: (d) => d.background === "animated", selector: { boolean: {} }, default: true, helper: "Shade the night-time moon to the current lunar phase (off: a full moon)." },
    { name: "anim_low_power", label: "Low-power animation", when: (d) => d.background !== "image", selector: { boolean: {} }, default: false, helper: "For tablets and other low-powered screens: no panel blur while the background animates, each cloud drawn once on its own, and simpler cloud edges. Smoother drift; clouds look a little softer." },
    ...ANIM_SPEEDS.map(([name, , label], k) => ({ name, label, when: (d) => d.background !== "image", selector: { number: { min: 10, max: 150, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 100,
      helper: k === 0 ? "Animation speeds (100% = normal, 50% = half as fast), for the card background and the hero's own animation." : undefined })),
    { name: "background_image", when: (d) => d.background === "image", selector: { media: { accept: ["image/*"], image_upload: true } }, helper: "Image background: upload a PNG, JPG, WEBP… or pick one from your media." },
    { name: "background_image_url", when: (d) => d.background === "image", selector: { text: { type: "url" } }, helper: "Image background: or an image URL (wins over the upload), e.g. /local/images/sky.jpg." },
    { name: "background_image_fit", when: (d) => d.background === "image", selector: { select: { options: [{ value: "cover", label: "Fill (crop to fit)" }, { value: "contain", label: "Fit (whole image)" }, { value: "tile", label: "Tile" }] } }, default: "cover" },
    { name: "background_dim", when: (d) => d.background === "image", selector: { number: { min: 0, max: 0.9, step: 0.05, mode: "slider" } }, default: 0.25, helper: "Image background: darken it so text stays readable (0 = off)." },
  ]],
  ["Collapsible panels", [
    { name: "collapse_title_tap", label: "Tap the title to fold / unfold", selector: { boolean: {} }, default: true, helper: "For panels with Collapse button on (each panel can override this)." },
    { name: "show_collapse_hint", label: "Hint under the title while folded", selector: { boolean: {} }, default: true },
    { name: "collapse_hint", label: "Hint text", when: (d) => d.show_collapse_hint !== false, selector: { text: {} }, helper: "Default \"Tap title to show\"." },
    { name: "collapsed_info", label: "Info in the header while folded", selector: { select: { options: [{ value: "summary", label: "The panel's summary (e.g. strikes today, rain today)" }, { value: "off", label: "None" }] } }, default: "summary" },
    ...COLLAPSE_COLORS,
  ]],
  ["Panels", [
    { name: "panel_opacity", selector: { number: { min: 0, max: 1, step: 0.05, mode: "slider" } }, helper: "With a card background: panel opacity (0 = fully transparent, 1 = solid). Default 0.55." },
    { name: "panel_blur", selector: { number: { min: 0, max: 30, step: 1, mode: "slider", unit_of_measurement: "px" } }, when: (d) => !d.anim_low_power, helper: "With a card background: blur behind panels. Default 6 (off with Low-power animation)." },
    { name: "panel_radius", selector: { number: { min: 0, max: 40, step: 1, mode: "slider", unit_of_measurement: "px" } }, helper: "Auto: your theme's card corner radius (shown above). Move the slider to set your own; × goes back to Auto." },
    { name: "panel_shadow", selector: { select: { options: [{ value: "none", label: "None" }, { value: "soft", label: "Soft" }, { value: "medium", label: "Medium" }, { value: "strong", label: "Strong" }] } }, default: "none" },
    { name: "panel_border_width", selector: { number: { min: 0, max: 6, step: 0.5, mode: "slider", unit_of_measurement: "px" } }, helper: "Border (default none)." },
    { name: "panel_border_color", selector: { text: {} }, helper: "Not set: the theme's divider color." },
    { name: "panel_glow", selector: { boolean: {} }, default: false, helper: "A soft glow around each panel." },
    { name: "panel_glow_color", when: (d) => !!d.panel_glow, selector: { text: {} }, helper: "Not set: the border color, else the theme's primary color." },
    { name: "panel_glow_size", when: (d) => !!d.panel_glow, selector: { number: { min: 2, max: 40, step: 1, mode: "slider", unit_of_measurement: "px" } }, default: 10 },
  ]],
  ["Layout & behaviour", [
    { name: "layout", selector: { select: { options: [{ value: "auto", label: "Size to content" }, { value: "fullscreen", label: "Full screen (fills the view below the header)" }] } } },
    { name: "fit_height", when: (d) => d.layout === "fullscreen", selector: { boolean: {} }, default: true, helper: "Full screen: panels with a height share the screen height (row height is calculated)." },
    { name: "auto_fit", label: "Auto-fit to the screen", selector: { boolean: {} }, default: false, helper: "The layout and sizes you set are the design, for the Screen guide's size (Layout → Screen guide). Every screen shows that design scaled to fit: rows share the screen height, the layout stays as designed until the screen is phone-narrow, and each panel's contents scale with the screen — smaller where they'd still overflow. Full screen recommended." },
    { name: "auto_fit_min", label: "Smallest content scale", when: (d) => !!d.auto_fit, selector: { number: { min: 30, max: 100, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 60, helper: "Below this a panel scrolls instead, so text stays readable." },
    { name: "auto_fit_max", label: "Largest content scale", when: (d) => !!d.auto_fit, selector: { number: { min: 100, max: 250, step: 5, mode: "slider", unit_of_measurement: "%" } }, default: 150, helper: "On screens bigger than the design." },
    { name: "fit_strict", label: "Strict fit to screen dimensions", when: (d) => d.layout === "fullscreen" && d.fit_height !== false && !d.auto_fit, selector: { boolean: {} }, default: false, helper: "Every panel is exactly the height you set, so the page fits the screen as the layout map shows; content taller than its panel scrolls inside the panel. Off: panels grow to fit their content (the page may scroll)." },
    { name: "panel_overflow", label: "When a panel's content doesn't fit", when: (d) => !(d.layout === "fullscreen" && d.fit_height !== false && (d.fit_strict || d.auto_fit)), selector: { select: { options: [{ value: "grow", label: "Grow — the panel gets taller (and its row with it)" }, { value: "scroll", label: "Scroll — the panel keeps its height, with a scroll bar inside" }] } }, default: "grow", helper: "For panels with a set height (Height above 0); each panel can override this. Scroll locks every panel to its size in any layout; Strict fit does the same in full screen." },
    { name: "layout_size", selector: { select: { options: [{ value: "auto", label: "Automatic (from the card's width)" }, { value: "wide", label: "Wide — desktop layout" }, { value: "medium", label: "Medium — tablet layout" }, { value: "narrow", label: "Narrow — phone layout (stacked)" }] } }, helper: "In a Sections view the card is only as wide as its section; widen the section or use a Panel view for the desktop layout." },
    { name: "row_height", selector: { number: { min: 40, max: 300, mode: "box", unit_of_measurement: "px" } }, helper: "Height of one row unit (default 110)." },
    { name: "gap", selector: { number: { min: 0, max: 32, mode: "box", unit_of_measurement: "px" } }, helper: "Space between panels (default 12)." },
  ]],
];
// In the Panel buttons section.
const REMEMBER = [{ name: "remember", selector: { boolean: {} }, default: true, helper: "Keep which panels were shown or hidden with the panel buttons after a refresh, in each browser. Off: every load starts from the panels' Shown setting (the eye icon)." }];
const GENERAL_SCHEMA = APPEARANCE_GROUPS.flatMap(([, f]) => f);
const GENERAL_DEFAULTS = { layout: "auto", panel_bar: true, remember: true, fit_height: true, layout_size: "auto", background: "none", panel_opacity: 0.55, panel_blur: 6 };

const LABELS = {
  entity: "Weather entity", title: "Title", subtitle: "Subtitle", icon: "Icon", layout: "Layout", panel_bar: "Panel buttons",
  remember: "Remember Panel Button States", station_device: "Weather station device", layout_size: "Layout size", fit_height: "Fit panels to the screen height", fit_strict: "Strict fit to screen dimensions", row_height: "Row height", gap: "Gap", span: "Width", rows: "Height", display: "Display",
  in_bar: "Panel button", tile_background: "Panel background", show: "Shown", metric: "Metric", label: "Label", color: "Color", digits: "Decimals", chart: "Sparkline",
  hours: "Sparkline hours", show_minmax: "Show today's min/max", series: "Series", ranges: "Range buttons", range: "Default range",
  show_readings: "Show current readings", left_min: "Left axis min", left_max: "Left axis max", right_min: "Right axis min",
  right_max: "Right axis max", "entities.temperature": "Temperature sensor", "entities.dew_point": "Dew point sensor",
  "entities.humidity": "Humidity sensor", "entities.wind_speed": "Wind speed sensor", "entities.wind_gust_speed": "Gust sensor",
  "entities.wind_bearing": "Wind direction sensor", view: "Default view", show_chart: "Show speed/gust chart", rose_bins: "Rose speed bins",
  radar: "Radar loop", base_map: "Base map", zoom: "Zoom", latitude: "Latitude", longitude: "Longitude", radar_opacity: "Radar opacity",
  owm_api_key: "OpenWeatherMap API key", owm_layers: "OpenWeatherMap layers", owm_default: "Layer shown first", owm_opacity: "Layer opacity",
  base_map_url: "Custom tile URL", base_map_attribution: "Custom tile attribution", day_offset: "Day", icon_size: "Icon size",
  show_moon: "Show moon", show_sun: "Show sun", attribute: "Text attribute", alerts_entity: "Alerts sensor", card: "Card configuration",
  show_status: "Show station status", show_devices: "Show device names", overlay: "Layer", model: "Forecast model", level: "Altitude", wind_unit: "Wind unit", marker: "Location pin", preset: "Graph", engine: "Graph card", days_to_show: "Days", period: "Resolution", chart_type: "Chart type", stat_types: "Values", show_chart: "Altitude chart", show_arc: "Sun arc", show_sky: "Sky gradient & forecast row", timeframe: "Time window", hours: "Hours", anchor: "Now is", moon: "Moon at night", moon_phase: "Draw the moon phase", background: "Card background", panel_opacity: "Panel opacity", panel_blur: "Panel blur", sky_bar: "Sky Bar in the hero", show_facts: "Show sun times", moon_size: "Moon size", direction: "Direction", min_width: "Minimum width", grow: "Grow", show_bar: "Panel buttons here", background_image: "Background image", background_image_url: "Background image URL", background_image_fit: "Image fit", background_dim: "Darken image",
  panel_radius: "Corner radius", panel_shadow: "Shadow", panel_border_width: "Border width", panel_border_color: "Border color", panel_glow: "Glow", panel_glow_color: "Glow color", panel_glow_size: "Glow size",
  rose_engine: "Wind rose", fit: "Fit to the panel", show_view_buttons: "View buttons", readings_position: "Readings", chart_position: "Chart position", show_legend: "Rose legend", wr_bars: "Speed bars", wr_corners: "Corner info", wr_stats: "Min / avg / max", wr_buttons: "Buttons", wr_buttons_position: "Button position", wr_period: "Default period", wr_beaufort: "Bar scale", wr_arrow: "Direction arrow", windrose_chart: "Chart with the Wind Rose Card", compass_arrow_size: "Pointer size", compass_arrow_color: "Pointer color", wr_arrow_size: "Arrow size", wr_arrow_color: "Arrow color", wr_speed_arrows: "Speed arrows", wr_speed_arrow_size: "Speed arrow size", stats_items: "Show", stats_align: "Alignment", chart_legend: "Chart legend", dial_scale: "Size", wr_scale: "Size", corner_speed: "Speed", corner_direction: "Direction", corner_gust: "Gust", corner_label_size: "Label size", corner_value_size: "Value size", corner_color: "Text color", stats_size: "Text size", stats_weight: "Text weight", stats_color: "Text color", wr_stats: "Position", windrose_preset: "Wind Rose Card preset", windrose: "Wind Rose Card options", auto_scale: "Set scale to Auto", show_time: "Show the time", show_seconds: "Seconds", time_format: "Time format", show_date: "Show the date", date_format: "Date format", align: "Alignment", auto_size: "Auto size", time_size: "Time size", date_size: "Date size", time_weight: "Time weight", date_color: "Date color", scale: "Auto scaling", device: "Pollen location", hide_off_season: "Hide out-of-season species", hide_when_off_season: "Hide the panel out of season", hide_when_none: "Hide the panel when all are None", species: "Species", max_rows: "Rows", show_tomorrow: "Tomorrow's trend", show_season: "Season strip", location: "Town / area text",
  seasons: "Season months", entities: "Sensors", pollutants: "Pollutants", show_scale: "AQI scale", show_aqi: "Show the AQI", extra: "More readings", bar_height: "Bar height", source: "Source text", show_source: "Show the source", show_location: "Show the town / area", hide_none: "Hide species at None", show_nothing: "Show the \"nothing in the air\" text", nothing_text: "\"Nothing in the air\" text", "entities.aqi": "AQI sensor",
  "entities.pm2_5": "PM2.5 sensor", "entities.pm10": "PM10 sensor", "entities.ozone": "Ozone sensor", "entities.co2": "CO₂ sensor",
};

const getPath = (o, path) => path.split(".").reduce((a, k) => (a == null ? a : a[k]), o);
function setPath(o, path, v) {
  const keys = path.split(".");
  let cur = o;
  keys.slice(0, -1).forEach((k) => (cur = cur[k] = cur[k] && typeof cur[k] === "object" ? { ...cur[k] } : {}));
  const last = keys[keys.length - 1];
  if (v === undefined || v === "" || v === null || (Array.isArray(v) && !v.length)) delete cur[last];
  else cur[last] = v;
}

/** Form data for a schema: stored value, else the field's (or computed) default. */
function formData(obj, schema, defaults = {}) {
  const d = {};
  for (const f of schema) {
    const v = getPath(obj, f.name);
    d[f.name] = v !== undefined ? v : defaults[f.name] !== undefined ? defaults[f.name] : f.default;
  }
  return d;
}

/** Write form values back; values equal to their default are not stored. */
function applyForm(obj, schema, data, defaults = {}) {
  const out = clone(obj);
  for (const f of schema) {
    let v = data[f.name];
    const def = defaults[f.name] !== undefined ? defaults[f.name] : f.default;
    if (def !== undefined && JSON.stringify(v) === JSON.stringify(def)) v = undefined;
    setPath(out, f.name, v);
  }
  return prune(out);
}

// Layout fields a panel loses when it goes into a stack (the stack has the place and size).
const GRID_ONLY = ["span", "rows", "display", "span_medium", "span_narrow", "rows_compact"];

/**
 * Put panels[i] and panels[i + 1] in a vertical stack at i's place. If the next
 * panel is already a vertical stack, panel i joins it at the top. The stack
 * gets the wider span and the two heights added up.
 */
export function stackWithNext(panels, i) {
  const a = panels[i], b = panels[i + 1];
  const child = (p) => {
    const c = { ...p };
    for (const k of GRID_ONLY) delete c[k];
    return c;
  };
  const list = panels.slice();
  if (b.type === "stack" && b.direction === "vertical") {
    const rows = rowsOf(a) + rowsOf(b);
    list.splice(i, 2, prune({ ...b, span: Math.max(spanOf(a), spanOf(b)), rows: rows || undefined, panels: [child(a), ...(b.panels || [])] }));
    return list;
  }
  const rows = rowsOf(a) + rowsOf(b);
  // Two half-height panels make one row (their gap is inside the stack now).
  list.splice(i, 2, prune({ type: "stack", direction: "vertical", span: Math.max(spanOf(a), spanOf(b)), rows: rows || undefined, panels: [child(a), child(b)] }));
  return list;
}

/** Move top-level panel `from` into the stack at index s (at the end). */
export function moveIntoStack(panels, s, from) {
  const c = { ...panels[from] };
  for (const k of GRID_ONLY) delete c[k];
  const list = panels.slice();
  list[s] = { ...list[s], panels: [...(list[s].panels || []), c] };
  list.splice(from, 1);
  return list;
}

/** Move child j out of the stack at top-level index s, placing it after the stack. */
export function unstack(panels, s, j) {
  const st = panels[s];
  const kids = (st.panels || []).slice();
  const [c] = kids.splice(j, 1);
  const list = panels.slice();
  const out = prune({ ...c, span: spanOf(st), rows: undefined });
  if (kids.length) list.splice(s, 1, { ...st, panels: kids }, out);
  else list.splice(s, 1, out);
  return list;
}

function panelDefaults(p) {
  const m = panelMeta(p);
  return { span: m.span, rows: m.rows, display: "grid", in_bar: inBarOf({ ...p, in_bar: undefined }), show_title: TITLE_WHEN_SET.has(p.type) ? !!p.title : true };
}

function panelName(p) {
  const m = panelMeta(p);
  if (p.title) return p.title;
  if (p.type === "metric") return METRICS[p.metric]?.label || p.label || "Metric tile";
  if (p.type === "day") return ["Today", "Tomorrow"][Number(p.day_offset ?? 1)] || `Day +${p.day_offset}`;
  return m.label;
}

class WeatherStationFlexCardEditor extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _open: { state: true }, // open top-level section id
    _openPanel: { state: true }, // index of the expanded panel row
    _addType: { state: true },
  };

  constructor() {
    super();
    this._open = null;
    this._openPanel = null;
    this._addType = "metric";
    this._flexEds = new Map();
  }

  setConfig(config) {
    this._config = config;
    // The config the editor opened with: anything else is unsaved (shown as a
    // banner on the editor preview until the dialog is saved or closed).
    if (this._savedJson == null) this._savedJson = JSON.stringify(config);
    setUnsaved(JSON.stringify(config) !== this._savedJson);
  }

  // Home Assistant passes the editor a new `hass` on every state change —
  // several times a second with a live weather station. Re-rendering then
  // rebuilds every open Home Assistant form (entity pickers filter all
  // entities) and the embedded Weather Flex editors, which made the editor
  // slow and could reset a control while it was in use. Only re-render for
  // hass when something the forms depend on changed (entity/device registry,
  // theme, language) or, for live values, at most every 15 s.
  shouldUpdate(changed) {
    if (changed.size === 1 && changed.has("hass")) {
      const old = changed.get("hass"), h = this.hass;
      const same = old && h && old.entities === h.entities && old.devices === h.devices && old.areas === h.areas &&
        old.themes === h.themes && old.locale === h.locale && old.language === h.language;
      if (same && Date.now() - (this._renderedAt || 0) < 15000) {
        if (!this._hassTimer) this._hassTimer = setTimeout(() => { this._hassTimer = null; this.requestUpdate(); }, 15000);
        return false;
      }
    }
    return true;
  }

  updated() {
    this._renderedAt = Date.now();
  }

  connectedCallback() {
    super.connectedCallback();
    // Redraw when the cards report what Auto resolved to.
    this._onDetected ||= () => this._open === "general" && this.requestUpdate();
    window.addEventListener("wsfc-detected", this._onDetected);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("wsfc-detected", this._onDetected);
    clearTimeout(this._hassTimer);
    this._hassTimer = null;
    // Dialog closed (saved or cancelled): the next editor starts clean and paused.
    this._savedJson = null;
    setUnsaved(false);
    setLive(false);
  }

  get _panels() {
    return normalizePanels(this._config);
  }

  get _station() {
    return { entity: this._config.entity, metric_sources: this._config.metric_sources };
  }

  _emit(config) {
    this._config = config;
    setUnsaved(JSON.stringify(config) !== this._savedJson);
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config }, bubbles: true, composed: true }));
  }

  // Panels are materialized on the first panel edit; the legacy top-level
  // `hero:` moves into the hero panel's `flex:` at that point.
  _setPanels(panels, extra) {
    const next = { ...this._withoutLegacyHero(), panels };
    for (const [k, v] of Object.entries(extra || {})) {
      if (v === undefined) delete next[k];
      else next[k] = v;
    }
    this._emit(next);
  }

  // `hero: false` (no implied hero) must survive; a legacy `hero: {...}` has
  // been moved into the hero panel by normalizePanels and is dropped.
  _withoutLegacyHero() {
    const { hero, ...rest } = this._config;
    return hero === false ? { ...rest, hero } : rest;
  }

  render() {
    if (!this.hass || !this._config) return nothing;
    return html`
      <div class="ed">
        <div class="hdr"><span class="name">${CARD_NAME}</span><span class="ver">v${CARD_VERSION}</span>
          <span class="io">
            <button class="btn sm ghost" title="Copy the whole card's settings as YAML" @click=${() => openConfigDialog({ mode: "export", config: this._config, cardType: `custom:${CARD_TYPE}` })}><ha-icon icon="mdi:export"></ha-icon>Export</button>
            <button class="btn sm ghost" title="Replace the settings with pasted YAML or JSON" @click=${() => openConfigDialog({ mode: "import", cardType: `custom:${CARD_TYPE}`, onImport: (cfg) => { this._flexEds.clear(); this._openPanel = null; this._emit(cfg); this.requestUpdate(); } })}><ha-icon icon="mdi:import"></ha-icon>Import</button>
          </span></div>
        <label class="live" title="While editing, the animated background, blur and the radar and Windy maps are paused to keep the editor fast. Tick to see them running (not saved).">
          <input type="checkbox" .checked=${isLive()} @change=${(e) => { setLive(e.target.checked); this.requestUpdate(); }} />
          <ha-icon icon="mdi:play-circle-outline"></ha-icon><span>Live preview</span>
          <span class="live-hint">${isLive() ? "animations and maps running" : "animations and maps paused while editing"}</span>
        </label>
        ${this._section("station", "mdi:weather-cloudy-clock", "Weather station", () => this._stationEditor())}
        ${this._section("general", "mdi:palette-outline", "Appearance", () => this._general())}
        ${this._section("buttons", "mdi:gesture-tap-button", "Panel buttons", () => this._buttonsEditor())}
        ${this._section("layout", "mdi:view-dashboard-edit-outline", "Layout", () => this._layoutEditor())}
        ${this._section("panels", "mdi:view-list-outline", `Panels (${this._panels.length})`, () => this._panelList())}
      </div>
    `;
  }

  _section(id, icon, title, body) {
    const open = this._open === id;
    return html`<details class="panel" ?open=${open} @toggle=${(e) => {
      if (e.target.open) this._open = id;
      else if (this._open === id) this._open = null;
    }}>
      <summary><ha-icon icon=${icon}></ha-icon><span>${title}</span></summary>
      ${open ? html`<div class="body">${body()}</div>` : nothing}
    </details>`;
  }

  // Design-system fields (checkboxes, drop-downs, sliders, color control);
  // ha-form only for selectors we don't draw (entity, device, icon, object …).
  _form(data, schema, onChange) {
    return renderFields({
      data, schema, onChange,
      label: (f) => f.label || LABELS[f.name] || f.name,
      helper: (f) => f.helper,
      haForm: (d, sch, cb) => this._haForm(d, sch, cb),
      auto: (f) => this._autoText(f),
    });
  }

  // What an Auto setting resolves to, from the preview card and the dashboard
  // card (they can differ: the dashboard can have its own theme).
  _autoText(f) {
    const key = { panel_radius: "radius", row_height: "row", gap: "gap" }[f.name];
    if (!key) return null;
    const { preview, dashboard } = detected();
    const here = preview?.[key], live = dashboard?.[key];
    const src = key === "radius" ? " (from the theme's card corner radius)" : key === "row" && this._config.layout === "fullscreen" && this._config.fit_height !== false ? " (calculated to fit the screen)" : "";
    if (here && live && here !== live) return `${here} in this preview, ${live} on the dashboard${src}`;
    if (here || live) return `${here || live}${src}`;
    return null;
  }

  _haForm(data, schema, onChange) {
    return html`<ha-form
      .hass=${this.hass}
      .data=${data}
      .schema=${schema}
      .computeLabel=${(f) => f.label || LABELS[f.name] || f.name}
      .computeHelper=${(f) => f.helper}
      @value-changed=${(e) => {
        e.stopPropagation();
        onChange(e.detail.value);
      }}
    ></ha-form>`;
  }


  _general() {
    const bg = this._config.background || "none";
    return APPEARANCE_GROUPS.map(([title, fields]) => {
      const f = fields;
      return html`<div class="agrp"><div class="agrp-t">${title}</div>${this._form(formData(this._config, f, GENERAL_DEFAULTS), f, (v) => {
        const { panels: _p, ...rest } = this._config;
        const next = applyForm(rest, f, v, GENERAL_DEFAULTS);
        if (this._config.panels) next.panels = this._config.panels;
        this._emit(next);
      })}</div>`;
    });
  }

  _stationDevice() {
    const src = (this._config.metric_sources?.sources || []).find((s) => !s.disabled && String(s.ref).startsWith("device:"));
    return src ? src.ref.slice(7) : undefined;
  }

  _stationEditor() {
    const station = this._station;
    const rows = [...MAP_KEYS, "rain_today", "battery", "battery_voltage", "capacitor", "signal", "signal_quality", "rssi", "online", "hardware_id", "aqi", "pm2_5", "pm10", "ozone"].map((k) => {
      const e = METRICS[k]?.find || METRICS[k]?.aq
        ? metricEntity(k, station, this.hass)
        : metricSensor(station, this.hass, k) || (this.hass.states[station.entity]?.attributes?.[k] != null ? station.entity : null);
      const v = e && !e.startsWith("weather.") ? entityValue(this.hass, e) : null;
      const wv = e?.startsWith("weather.") ? this.hass.states[e]?.attributes?.[k] : null;
      return { k, e, v: v ? `${v.value} ${v.unit}` : wv != null ? String(wv) : "", label: MAP_LABELS[k] || METRICS[k]?.label || k.replace(/_/g, " "), integ: e ? integrationOf(this.hass, e) : "" };
    });
    const found = rows.filter((r) => r.e).length;
    return html`
      <p class="hint">Sources are used top to bottom: for each value the first source that has it wins, and they apply to every panel. Add your station's <b>device</b> (sensors are mapped automatically, outdoor first) and a <b>weather entity</b> for the forecast and condition. Open a source to see or change what it supplies.</p>
      <wsfc-sources-editor .hass=${this.hass} .config=${{ entity: this._config.entity, metric_sources: this._config.metric_sources }}
        @sources-changed=${(e) => {
          const next = { ...this._config };
          if (e.detail.entity) next.entity = e.detail.entity;
          if (e.detail.metric_sources) next.metric_sources = e.detail.metric_sources;
          else delete next.metric_sources;
          this._emit(next);
        }}></wsfc-sources-editor>
      <details class="sub">
        <summary><ha-icon icon="mdi:format-list-checks"></ha-icon><span>Values used</span><span class="cnt">${found} of ${rows.length} found</span></summary>
        <div class="map">
          <span class="h">Value</span><span class="h">Entity</span><span class="h">Integration</span><span class="h">Now</span>
          ${rows.map((r) => html`<span class="k">${r.label}</span><span class="e ${r.e ? "" : "none"}" title=${r.e || ""}>${r.e || "not found"}</span><span class="i">${r.integ}</span><span class="v">${r.v}</span>`)}
        </div>
      </details>
      <details class="sub">
        <summary><ha-icon icon="mdi:information-outline"></ha-icon><span>Which Ecowitt integration?</span></summary>
        <p class="hint">Any of them works — Home Assistant's <b>Ecowitt</b>, <b>Ecowitt Local</b> or the <b>Ecowitt Official Integration</b> — and you can add more than one: e.g. the core integration for readings plus Ecowitt Local for battery, signal and RSSI (Station health panel). Home Assistant's own integration has no signal or RSSI sensors. With Ecowitt Local, add either its sensor or its gateway device; the other is found automatically.</p>
      </details>
    `;
  }



  // One embedded Weather Flex editor per panel slot (key = path, e.g. "3" or "5.1").
  _flexEditor(key, p, update) {
    const k = `${key}:${p.type}`;
    let ed = this._flexEds.get(k);
    if (!ed) {
      ed = document.createElement(CORE_EDITOR_TAG);
      ed.wsfcMode = "sections";
      ed.addEventListener("config-changed", (e) => {
        e.stopPropagation();
        ed._wsfcOnChange?.(e.detail.config);
      });
      this._flexEds.set(k, ed);
    }
    // The Weather Flex editor sees the panel's effective config; only the
    // difference from the panel without `flex:` is stored.
    const effective = (q) => (q.type === "sky_tracker" ? trackerConfig(q, this._station) : deepMerge(flexBase(q.type, this._station), q.flex || {}));
    ed.wsfcPanels = panelMeta(p)?.flexPanels || null;
    // A hero inside a card with an animated or image background doesn't draw
    // its own animation: hide those settings (they're under Appearance).
    const cardBg = this._config.background === "animated" || (this._config.background === "image" && !!(this._config.background_image || this._config.background_image_url));
    const hide = [...(panelMeta(p)?.flexHide || []), ...(p.type === "hero" && cardBg ? ["show_condition_effects"] : []),
      // Set scale to Auto sizes these from the panel, so their own sliders would do nothing.
      ...(p.type === "hero" && p.auto_scale ? ["header_temp_size", "header_state_size", "header_icon_size", "header_secondary_size", "clock_font_size", "clock_date_font_size", "chip_text_size", "chip_icon_size", "global_icon_size", "global_text_size"] : [])];
    if (JSON.stringify(hide) !== JSON.stringify(ed.wsfcHide || [])) { ed.wsfcHide = hide; ed.requestUpdate?.(); }
    ed._wsfcOnChange = (emitted) => {
      const np = clone(p);
      const override = flexOverride(emitted, effective({ ...p, flex: undefined }));
      if (Object.keys(override).length) np.flex = override;
      else delete np.flex;
      update(np);
    };
    const cfg = effective(p);
    const json = JSON.stringify(cfg);
    if (ed._wsfcJson !== json) {
      ed._wsfcJson = json;
      ed.setConfig(cfg);
    }
    ed.hass = this.hass;
    return html`<div class="flexed">${ed}</div>`;
  }

  // Screen guide for the layout map (layout_screen: "1920x1080" | "window", layout_guide: off | line | frame).
  _guideSpec() {
    const c = this._config;
    const scr = c.layout_screen;
    if (!scr || (c.layout_guide || "line") === "off") return null;
    const [w, h] = scr === "window" ? [window.innerWidth, window.innerHeight] : String(scr).split(/[x×]/).map(Number);
    if (!w || !h) return null;
    const gap = c.gap ?? 12;
    const full = c.layout === "fullscreen";
    const bar = c.panel_bar !== false && !this._panels.some((p) => p.type === "heading" && p.show_bar);
    // Dashboard header + the card's own margin, padding, button row and title.
    const chrome = 56 + (full ? 16 : 8) + 2 * gap + (bar ? 40 + gap : 0) + (c.title ? 44 + gap : 0);
    return { w, h, chrome, gap, row: c.row_height || 110, fit: full && c.fit_height !== false, strict: full && c.fit_height !== false && !!c.fit_strict, mode: c.layout_guide || "line" };
  }

  _screenGuide() {
    const c = this._config;
    const presets = [["", "Off"], ["window", `This browser window (${window.innerWidth}×${window.innerHeight})`], ["1920x1080", "1920×1080 (16:9 desktop)"], ["2560x1440", "2560×1440 (16:9)"], ["3440x1440", "3440×1440 (21:9)"],
      ["1366x768", "1366×768 (laptop)"], ["1280x800", "1280×800 (16:10 tablet)"], ["1180x820", "1180×820 (iPad landscape)"], ["820x1180", "820×1180 (iPad portrait)"], ["1080x1920", "1080×1920 (portrait panel)"]];
    const cur = c.layout_screen || "";
    const custom = cur && !presets.some(([v]) => v === cur);
    const set = (patch) => {
      const next = { ...this._config, ...patch };
      for (const k of Object.keys(patch)) if (patch[k] == null || patch[k] === "") delete next[k];
      this._emit(next);
    };
    return html`<div class="guidebar">
      <div class="frow"><label for="lg-s">Screen guide</label>
        <select id="lg-s" class="sel" @change=${(e) => set({ layout_screen: e.target.value === "custom" ? "1600x900" : e.target.value || undefined })}>
          ${presets.map(([v, l]) => html`<option value=${v} ?selected=${v === cur}>${l}</option>`)}
          <option value="custom" ?selected=${custom}>Custom size…</option>
        </select></div>
      ${custom ? html`<div class="frow"><label for="lg-c">Width × height</label>
        <input id="lg-c" class="ftext" .value=${cur} placeholder="1600x900" @change=${(e) => set({ layout_screen: /^\d{3,5}\s*[x×]\s*\d{3,5}$/.test(e.target.value.trim()) ? e.target.value.trim().replace(/\s+/g, "").replace("×", "x") : cur })} /></div>` : nothing}
      ${cur ? html`<div class="frow"><label for="lg-m">Show as</label>
        <select id="lg-m" class="sel" @change=${(e) => set({ layout_guide: e.target.value === "line" ? undefined : e.target.value })}>
          ${[["line", "Dotted line at the screen edge"], ["frame", "Frame — shade what's off screen"]].map(([v, l]) => html`<option value=${v} ?selected=${(c.layout_guide || "line") === v}>${l}</option>`)}
        </select></div>
        <div class="fhelp">The map is drawn to that screen's scale (window size inside the browser, below the dashboard header).${c.layout === "fullscreen" && c.fit_height !== false ? " Full screen with fit: rows share the screen height, as on the dashboard." : " Panels below the line need scrolling."}</div>` : nothing}
    </div>`;
  }

  _layoutEditor() {
    return html`
      <p class="hint"><b>Drag</b> a panel to move it; drag its <b>right or bottom edge</b> (or the corner) to resize. Keyboard: arrows move, Shift+arrows resize. This is the desktop layout — tablets and phones adapt automatically. Dashed = hidden on load.</p>
      ${this._screenGuide()}
      ${this._guideSpec() ? html`<wsfc-layout-probe .hass=${this.hass} .config=${this._config} .guide=${this._guideSpec()}
        @probe-measured=${(e) => { this._measured = e.detail; this.requestUpdate(); }}></wsfc-layout-probe>` : nothing}
      <wsfc-layout-map .panels=${this._panels} .guide=${this._guideSpec()} .measured=${this._guideSpec() ? this._measured : null} @layout-changed=${(e) => {
        this._flexEds.clear();
        this._openPanel = null;
        this._setPanels(e.detail.panels);
      }}></wsfc-layout-map>
    `;
  }

  _panelList() {
    return html`
      <p class="hint">Edit, show/hide, duplicate, delete and add panels. Arrange them under <b>Layout</b>. To keep panels together (side by side, or one above the other filling in for hidden ones), add a <b>Stack</b> panel, then use <b>Move into stack</b> under it.</p>
      ${this._list(this._panels, (list, extra) => this._setPanels(list, extra), "")}
    `;
  }

  // Panel buttons: where the bar sits, and which panels get a button.
  _buttonsEditor() {
    const c = this._config;
    const panels = this._panels;
    const headingIdx = panels.findIndex((p) => p.type === "heading");
    const inHeading = headingIdx >= 0 && !!panels[headingIdx].show_bar;
    const place = c.panel_bar === false ? "hidden" : inHeading ? "heading" : "top";
    const setPlace = (v) => {
      const list = panels.map((p, i) => (i === headingIdx ? prune({ ...p, show_bar: v === "heading" ? true : undefined }) : p));
      if (v === "heading" && headingIdx < 0) list.splice(1, 0, { type: "heading", title: "Local measurements", show_status: true, show_bar: true });
      this._setPanels(list, { panel_bar: v === "hidden" ? false : undefined });
    };
    // Every panel, including the ones inside stacks ("i" or "i.j").
    const setBtn = (paths, on) => {
      const set = (p) => prune({ ...p, in_bar: on === inBarOf({ ...p, in_bar: undefined }) ? undefined : on });
      const list = panels.map((p, i) => {
        let q = paths.includes(`${i}`) ? set(p) : p;
        if (q.type === "stack" && Array.isArray(q.panels)) {
          const kids = q.panels.map((c, j) => (c && paths.includes(`${i}.${j}`) ? set(c) : c));
          if (kids.some((c, j) => c !== q.panels[j])) q = { ...q, panels: kids };
        }
        return q;
      });
      this._setPanels(list);
    };
    const entries = [];
    panels.forEach((p, i) => {
      entries.push([p, `${i}`, false]);
      if (p.type === "stack") (p.panels || []).forEach((c, j) => c && entries.push([c, `${i}.${j}`, true]));
    });
    const all = entries.map(([, k]) => k);
    return html`
      <div class="row-inline">
        <label for="bp">Buttons</label>
        <select id="bp" class="sel" @change=${(e) => setPlace(e.target.value)}>
          <option value="top" ?selected=${place === "top"}>Above the panels</option>
          <option value="heading" ?selected=${place === "heading"}>In the Button Menu panel</option>
          <option value="hidden" ?selected=${place === "hidden"}>Hidden</option>
        </select>
      </div>
      <p class="hint">A button toggles its panel (pop-up panels open instead). Panels without a button stay as they are.</p>
      ${this._form(formData(c, REMEMBER, GENERAL_DEFAULTS), REMEMBER, (v) => {
        const { panels: _p, ...rest } = this._config;
        const next = applyForm(rest, REMEMBER, v, GENERAL_DEFAULTS);
        if (this._config.panels) next.panels = this._config.panels;
        this._emit(next);
      })}
      <div class="btnbar">
        <button class="btn sm" @click=${() => setBtn(all, true)}>All</button>
        <button class="btn sm ghost" @click=${() => setBtn(all, false)}>None</button>
      </div>
      <div class="checks">
        ${entries.map(([p, k, nested]) => html`<label class="chk ${nested ? "nested" : ""}">
          <input type="checkbox" .checked=${inBarOf(p)} @change=${(e) => setBtn([k], e.target.checked)} />
          <ha-icon icon=${p.icon || (p.type === "metric" && METRICS[p.metric]?.icon) || panelMeta(p).icon}></ha-icon>
          <span>${panelName(p)}</span>${p.display === "popup" ? html`<span class="tag">pop-up</span>` : p.show === false ? html`<span class="tag">hidden on load</span>` : nothing}
        </label>`)}
      </div>
    `;
  }

  /** A reorderable panel list (top level, or a stack's children). */
  _list(panels, setList, prefix) {
    const nested = !!prefix;
    // Hero first, then the rest alphabetically.
    const types = Object.entries(PANEL_TYPES)
      .filter(([k]) => !(nested && k === "hero"))
      .sort(([a, x], [b, y]) => (a === "hero" ? -1 : b === "hero" ? 1 : x.label.localeCompare(y.label)));
    const addKey = prefix || "top";
    const addType = (this._addTypes ||= {})[addKey] || (nested ? "metric" : this._addType);
    return html`
      <div class="rows">${panels.map((p, i) => this._panelRow(p, i, panels, setList, prefix ? `${prefix}.${i}` : `${i}`, nested))}</div>
      <div class="add">
        <select class="sel" @change=${(e) => { this._addTypes[addKey] = e.target.value; this.requestUpdate(); }} aria-label="Panel type to add">
          ${types.map(([k, m]) => html`<option value=${k} ?selected=${k === addType}>${m.label}</option>`)}
        </select>
        <button class="btn" @click=${() => {
          const p = { type: addType };
          if (p.type === "metric") p.metric = "temperature";
          if (p.type === "stack") p.panels = [{ type: "metric", metric: "temperature" }, { type: "metric", metric: "humidity" }];
          setList([...panels, p]);
          this._openPanel = prefix ? `${prefix}.${panels.length}` : `${panels.length}`;
        }}><ha-icon icon="mdi:plus"></ha-icon>${nested ? "Add new to stack" : "Add panel"}</button>
      </div>
    `;
  }

  _panelRow(p, i, panels, setList, key, nested) {
    const m = panelMeta(p);
    // A stack's children are listed under it (not inside its settings), so a
    // stack row is open only for its own settings.
    const open = this._openPanel === key || (p.type !== "stack" && String(this._openPanel || "").startsWith(`${key}.`));
    const hidden = p.show === false;
    const reset = () => this._flexEds.clear();
    const move = (d) => {
      const list = panels.slice();
      const j = i + d;
      if (j < 0 || j >= list.length) return;
      [list[i], list[j]] = [list[j], list[i]];
      reset();
      this._openPanel = null;
      setList(list);
    };
    const update = (np, extra) => {
      const list = panels.slice();
      list[i] = np;
      setList(list, extra);
    };
    const size = nested
      ? `${p.grow != null ? `grow ${p.grow}` : ""}${p.rows ? ` · ${p.rows} rows` : ""}`
      : `${spanOf(p)}/12${rowsOf(p) ? ` × ${rowsOf(p)}` : ""}${p.display === "popup" ? " · pop-up" : ""}`;
    const sub = p.type === "stack" ? `${p.direction === "vertical" ? "Vertical" : "Horizontal"} stack · ${(p.panels || []).length} panels` : m.label;
    return html`<div class="row ${open ? "open" : ""} ${hidden ? "dim" : ""}">
      <div class="line">
        <ha-icon class="lead" icon=${p.icon || (p.type === "metric" && METRICS[p.metric]?.icon) || (p.type === "stack" && p.direction === "vertical" ? "mdi:view-agenda-outline" : m.icon)}></ha-icon>
        <div class="txt"><div class="n">${panelName(p)}</div><div class="s">${sub}${size ? ` · ${size}` : ""}</div></div>
        ${nested
          ? html`<button class="ib" title="Move up" ?disabled=${i === 0} @click=${() => move(-1)}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
              <button class="ib" title="Move down" ?disabled=${i === panels.length - 1} @click=${() => move(1)}><ha-icon icon="mdi:arrow-down"></ha-icon></button>`
          : nothing}
        ${nested
          ? nothing
          : html`<button class="ib" title=${hidden ? "Show when the dashboard loads" : "Hide when the dashboard loads"} @click=${() => update(prune({ ...p, show: hidden ? undefined : false }))}>
              <ha-icon icon=${hidden ? "mdi:eye-off" : "mdi:eye"}></ha-icon></button>`}
        ${nested && /^\d+\.\d+$/.test(key)
          ? html`<button class="ib" title="Move out of the stack (back into the grid, after the stack)" @click=${() => {
              reset();
              this._openPanel = null;
              this._setPanels(unstack(this._panels, Number(key.split(".")[0]), i));
            }}><ha-icon icon="mdi:view-split-horizontal"></ha-icon></button>`
          : nothing}
        <button class="ib" title="Edit" @click=${() => (this._openPanel = this._openPanel === key ? null : key)}><ha-icon icon=${open ? "mdi:chevron-up" : "mdi:pencil"}></ha-icon></button>
        <button class="ib" title="Duplicate" @click=${() => {
          const list = panels.slice();
          list.splice(i + 1, 0, clone(p));
          reset();
          setList(list);
        }}><ha-icon icon="mdi:content-copy"></ha-icon></button>
        <button class="ib del" title="Delete" @click=${() => {
          const list = panels.slice();
          list.splice(i, 1);
          reset();
          this._openPanel = null;
          setList(list);
        }}><ha-icon icon="mdi:delete-outline"></ha-icon></button>
      </div>
      ${open ? this._panelBody(p, key, update, nested) : nothing}
      ${p.type === "stack" ? this._stackKids(p, i, key, update, nested) : nothing}
    </div>`;
  }

  // A stack's panels, indented under it, plus adding new or existing panels.
  _stackKids(p, i, key, update, nested) {
    const top = !nested;
    const others = top ? this._panels.map((q, k) => [q, k]).filter(([q, k]) => k !== i && q.type !== "hero" && q.type !== "stack") : [];
    const pick = (this._moveIn ||= {})[key] ?? (others[0]?.[1] ?? "");
    return html`<div class="kids">
      ${this._list(p.panels || [], (list, extra) => update({ ...p, panels: list }, extra), key)}
      ${others.length
        ? html`<div class="add">
            <select class="sel" aria-label="Panel to move into this stack" @change=${(e) => { this._moveIn[key] = Number(e.target.value); this.requestUpdate(); }}>
              ${others.map(([q, k]) => html`<option value=${k} ?selected=${k === pick}>${panelName(q)}</option>`)}
            </select>
            <button class="btn" @click=${() => {
              this._flexEds.clear();
              this._openPanel = null;
              this._setPanels(moveIntoStack(this._panels, i, Number(pick)));
            }}><ha-icon icon="mdi:view-split-horizontal"></ha-icon>Move into stack</button>
          </div>`
        : nothing}
    </div>`;
  }

  // A panel's fields under a heading, split into their `section` headings
  // and collapsible `sub` panels (e.g. "Default Overrides", "Sun & moon facts").
  // Flat expandable settings section (design system: borderless when closed,
  // a thin divider between them; open = accent border and accent title).
  _flat(p, name, body, defOpen = false) {
    const id = `${p.type}|${name}`;
    this._flatOpen ||= new Map();
    const open = this._flatOpen.has(id) ? this._flatOpen.get(id) : defOpen;
    return html`<details class="flat" ?open=${open} @toggle=${(e) => { if (e.target !== e.currentTarget) return; this._flatOpen.set(id, e.target.open); }}>
      <summary>${name}</summary>
      <div class="flat-body">${body}</div>
    </details>`;
  }

  _sections(p, fields, defs, update, title, flat = true, openName = null) {
    const parts = [];
    for (const f of fields) {
      const k = f.sub ? `sub:${f.sub}` : f.section ? `sec:${f.section}` : `sec:${title}`;
      let last = parts[parts.length - 1];
      if (!last || last.k !== k) parts.push((last = { k, f: [] }));
      last.f.push(f);
    }
    const form = (f) => this._form(formData(p, f, defs), f, (v) => update({ ...applyForm(p, f, v, defs), type: p.type }));
    return parts.map(({ k, f }) => {
      const name = k.slice(4);
      if (k.startsWith("sub:")) {
        const id = `${p.type}:${name}`;
        const open = (this._subOpen ||= new Set()).has(id);
        return html`<details class="sub psub" ?open=${open} @toggle=${(e) => { e.target.open ? this._subOpen.add(id) : this._subOpen.delete(id); this.requestUpdate(); }}>
          <summary><ha-icon icon=${f[0]?.subIcon || "mdi:weather-sunset"}></ha-icon><span>${name}</span></summary>
          ${open ? html`<div class="psub-body">${form(f)}</div>` : nothing}
        </details>`;
      }
      return flat ? this._flat(p, name, form(f), name === openName) : html`<div class="grp">${name}</div>${form(f)}`;
    });
  }

  _panelBody(p, key, updatePanel, nested) {
    const m0 = panelMeta(p);
    // Scroll needs room: picking it raises a panel below one row to 1.
    const update = (np, extra) => {
      if (np?.overflow === "scroll" && !nested && !(Number(np.rows ?? m0?.rows ?? 0) >= 1)) np = { ...np, rows: 1 };
      return updatePanel(np, extra);
    };
    // Spacing sliders (some panels) live with the other sizes.
    const SPACING = ["content_width", "content_height"];
    const spacing = (m0.schema || []).filter((f) => SPACING.includes(f.name)).map((f) => ({ ...f, section: "Size and Scaling" }));
    const m = spacing.length ? { ...m0, schema: m0.schema.filter((f) => !SPACING.includes(f.name)) } : m0;
    const defs = nested ? { show_title: TITLE_WHEN_SET.has(p.type) ? !!p.title : true } : panelDefaults(p);
    let common = nested ? STACK_CHILD_SCHEMA : COMMON_SCHEMA;
    if (p.type === "hero") common = common.filter((f) => !["icon", "display", "in_bar"].includes(f.name));
    // Panels without a title header can't fold down to it.
    if (!canCollapseType(p.type)) common = common.filter((f) => f.section !== "Collapse");
    // Panels without a header have no title options.
    if (NO_TITLE.has(p.type)) common = common.filter((f) => !["show_title", "title", "show_icon", "icon"].includes(f.name) || (p.type !== "clock" && f.name === "title"));
    const isGraph = ["graph", "temp_humidity", "uv_solar", "statistics"].includes(p.type);
    // Reset keeps the panel's type, place and size; everything else returns to defaults.
    const KEEP = ["type", "span", "rows", "display", "in_bar", "tile_background", "tile_shadow", "tile_border", "tile_glow", "show", "id", "span_medium", "span_narrow", "rows_compact", "grow", "min_width",
      ...(p.type === "metric" ? ["metric"] : []), ...(p.type === "statistics" ? ["preset"] : []), ...(p.type === "stack" ? ["panels", "direction"] : [])];
    const customized = Object.keys(p).some((k) => !KEEP.includes(k));
    const reset = () => update(Object.fromEntries(Object.entries(p).filter(([k]) => KEEP.includes(k))));
    return html`<div class="pbody">
      <div class="resetbar">
        <button class="btn sm ghost" ?disabled=${!customized} title="Keeps the panel's type, position and size" @click=${() => { this._flexEds.clear(); reset(); }}>
          <ha-icon icon="mdi:restore"></ha-icon>Reset to default</button>
      </div>
      ${isGraph
        ? html`<div class="grp first">Series</div>
            <wsfc-series-editor .hass=${this.hass} .panel=${p} .station=${this._station} @panel-changed=${(e) => update(e.detail.panel)}></wsfc-series-editor>`
        : nothing}
      ${this._sections(p, spacing.length ? (() => { const at = common.findIndex((f) => f.name === "content_scale"); const c = common.slice(); c.splice(at < 0 ? c.length : at + 1, 0, ...spacing); return c; })() : common, defs, update, "Size and Scaling")}
      ${m.groups
        // Grouped panels (e.g. Wind): one options section, each group a boxed sub-panel inside.
        ? this._flat(p, `${m.label} options`, m.groups.map(([title, f, icon], i) => this._sections(p, i === 0 ? f : f.map((x) => ({ ...x, sub: title, subIcon: icon })), {}, update, title, false)), true)
        : m.schema.length
          ? this._sections(p, m.schema, {}, update, `${m.label} options`, true, `${m.label} options`)
          : nothing}
      ${m.flex
        ? html`${p.type === "sky_tracker" ? html`<div class="grp">Arc & sky details</div>` : nothing}
            ${p.type === "sky_tracker" ? html`<p class="hint">Fine-tune the arc (Sun Position) and the sky (Sky Bar): heights, colors, labels, ticks and the forecast row. Layers, time window and moon are set above and override the same options here.</p>` : nothing}
            ${this._flexEditor(key, p, update)}`
        : nothing}
    </div>`;
  }

  static styles = [fieldStyles, css`
    :host {
      display: block;
      /* --ltek-* editor chrome tokens: copied verbatim from CARD_DESIGN_SYSTEM.md §1. */
      --ltek-fs-panel-title: 16px;
      --ltek-fs-header: 15px;
      --ltek-fs-group: 14px;
      --ltek-fs-label: 13px;
      --ltek-fs-body: 12px;
      --ltek-fs-small: 11px;
      --ltek-fs-tiny: 10px;
      --ltek-fw-normal: 400;
      --ltek-fw-medium: 500;
      --ltek-fw-semibold: 600;
      --ltek-fw-bold: 700;
      --ltek-c-text: var(--primary-text-color, #e1e1e1);
      --ltek-c-label: #ccc;
      --ltek-c-muted: #888;
      --ltek-c-accent: var(--primary-color, #2196F3);
      --ltek-c-accent-fade: rgba(var(--rgb-primary-color,33,150,243),0.12);
      --ltek-c-accent-fade-soft: rgba(var(--rgb-primary-color,33,150,243),0.08);
      --ltek-c-error-fade: rgba(244,67,54,0.15);
      --ltek-c-error: var(--error-color, #f44336);
      --ltek-c-success: var(--success-color, #4caf50);
      --ltek-c-warning: var(--warning-color, #ffb300);
      --ltek-c-info: var(--info-color, #2196F3);
      --ltek-c-accent-lib: #7fd18a;
      --ltek-c-on-accent: #fff;
      --ltek-c-icon: #aaa;
      --ltek-c-icon-hover: #fff;
      --ltek-c-surface: rgba(255,255,255,0.015);
      --ltek-c-surface-raised: rgba(255,255,255,0.02);
      --ltek-c-panel-border: #3a3a3a;
      --ltek-c-border: #444;
      --ltek-c-border-soft: #333;
      --ltek-r-panel: 12px;
      --ltek-r-card: 10px;
      --ltek-r-md: 8px;
      --ltek-r-ctrl: 6px;
      --ltek-sp-1: 4px;  --ltek-sp-2: 6px;  --ltek-sp-3: 8px;
      --ltek-sp-4: 10px; --ltek-sp-5: 12px; --ltek-sp-6: 16px;
      --ltek-ctrl-pad: 6px 10px;
      --ltek-icon-sm: 16px;
      --ltek-icon-lg: 20px;
      --ltek-slider-val-w: 44px;
    }
    .ed { display: flex; flex-direction: column; gap: var(--ltek-sp-3); color: var(--ltek-c-text); font-size: var(--ltek-fs-body); }
    .hdr { display: flex; align-items: baseline; gap: var(--ltek-sp-3); flex-wrap: wrap; padding: 0 var(--ltek-sp-1); }
    .hdr .name { font-size: var(--ltek-fs-header); font-weight: var(--ltek-fw-bold); }
    .hdr .ver { font-size: var(--ltek-fs-small); color: var(--ltek-c-muted); }
    details.panel { border: 1px solid var(--ltek-c-panel-border); border-radius: var(--ltek-r-panel); background: var(--ltek-c-surface); }
    details.panel[open] { border-color: var(--ltek-c-accent); }
    summary { display: flex; align-items: center; gap: var(--ltek-sp-3); padding: var(--ltek-sp-5) var(--ltek-sp-6); cursor: pointer; font-size: var(--ltek-fs-panel-title); font-weight: var(--ltek-fw-semibold); list-style: none; }
    summary::-webkit-details-marker { display: none; }
    summary ha-icon { --mdc-icon-size: var(--ltek-icon-lg); color: var(--ltek-c-accent); }
    .body { padding: 0 var(--ltek-sp-5) var(--ltek-sp-5); display: flex; flex-direction: column; gap: var(--ltek-sp-3); }
    .agrp + .agrp { margin-top: var(--ltek-sp-4, 16px); }
    .agrp-t { font-size: var(--ltek-fs-small, 12px); font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ltek-c-accent); margin: 0 0 var(--ltek-sp-2, 8px); padding-bottom: 4px; border-bottom: 1px solid var(--divider-color, rgba(127,127,127,.25)); }
    .hint { margin: 0; color: var(--ltek-c-muted); font-size: var(--ltek-fs-small); line-height: 1.4; }
    .rows { display: flex; flex-direction: column; gap: var(--ltek-sp-2); }
    .row { border: 1px solid var(--ltek-c-border-soft); border-radius: var(--ltek-r-card); background: var(--ltek-c-surface-raised); }
    .row.open { border-color: var(--ltek-c-accent); }
    .row.dim .txt, .row.dim .lead { opacity: 0.5; }
    .line { display: flex; align-items: center; gap: var(--ltek-sp-1); padding: var(--ltek-sp-2) var(--ltek-sp-3); }
    .lead { --mdc-icon-size: var(--ltek-icon-lg); color: var(--ltek-c-text); margin-right: var(--ltek-sp-2); }
    .txt { flex: 1; min-width: 0; }
    .txt .n { font-size: var(--ltek-fs-label); font-weight: var(--ltek-fw-medium); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .txt .s { font-size: var(--ltek-fs-small); color: var(--ltek-c-muted); }
    .ib { border: 0; background: transparent; color: var(--ltek-c-icon); cursor: pointer; padding: var(--ltek-sp-1); border-radius: var(--ltek-r-ctrl); line-height: 0; }
    .ib:hover:not([disabled]) { color: var(--ltek-c-icon-hover); background: var(--ltek-c-accent-fade-soft); }
    .ib.del:hover { color: var(--ltek-c-error); background: var(--ltek-c-error-fade); }
    .ib[disabled] { opacity: 0.3; cursor: default; }
    .ib ha-icon { --mdc-icon-size: var(--ltek-icon-sm); }
    .pbody { padding: 0 var(--ltek-sp-4) var(--ltek-sp-4); display: flex; flex-direction: column; gap: var(--ltek-sp-3); }
    .resetbar { display: flex; justify-content: flex-end; }
    .btn[disabled] { opacity: 0.4; cursor: default; }
    .grp.first { margin-top: 0; border-top: 0; padding-top: 0; }
    /* Group subtitle (design system §2): theme accent, mixed case, group size, semibold, thin divider. */
    .grp { font-size: var(--ltek-fs-group); font-weight: var(--ltek-fw-semibold); color: var(--accent-color, var(--ltek-c-accent)); margin-top: var(--ltek-sp-3); border-top: 1px solid var(--ltek-c-border-soft); padding-top: var(--ltek-sp-3); }
    .resetbar + .grp { margin-top: 0; border-top: 0; padding-top: 0; }
    .add { display: flex; gap: var(--ltek-sp-3); align-items: center; }
    .sel { flex: 1; font: inherit; font-size: var(--ltek-fs-label); padding: var(--ltek-ctrl-pad); border-radius: var(--ltek-r-ctrl); border: 1px solid var(--ltek-c-border); background: var(--card-background-color, #1c1c1c); color: var(--ltek-c-text); }
    .btn { display: inline-flex; align-items: center; gap: var(--ltek-sp-2); font: inherit; font-size: var(--ltek-fs-label); padding: var(--ltek-ctrl-pad); border-radius: var(--ltek-r-ctrl); border: 0; background: var(--ltek-c-accent); color: var(--ltek-c-on-accent); cursor: pointer; }
    .btn ha-icon { --mdc-icon-size: var(--ltek-icon-sm); }
    details.sub { border: 1px solid var(--ltek-c-border-soft); border-radius: var(--ltek-r-card); }
    details.sub > summary { font-size: var(--ltek-fs-group); padding: var(--ltek-sp-3) var(--ltek-sp-4); gap: var(--ltek-sp-3); }
    details.sub > summary ha-icon { --mdc-icon-size: var(--ltek-icon-sm); }
    details.sub > summary .cnt { margin-left: auto; font-size: var(--ltek-fs-small); font-weight: var(--ltek-fw-normal); color: var(--ltek-c-muted); }
    details.sub > :not(summary) { margin: 0 var(--ltek-sp-4) var(--ltek-sp-4); }
    /* A panel's own sub-panels (e.g. Sun & moon facts), styled like the
       Weather Flex sub-panels next to them: no indent, hairline card, bold
       title, accent icon, chevron on the right. */
    .hdr .io { margin-left: auto; display: inline-flex; gap: 6px; }
    .live { display: flex; align-items: center; gap: var(--ltek-sp-2, 8px); margin: 0 0 var(--ltek-sp-3, 12px); padding: 6px 10px; border-radius: var(--ltek-r-card, 12px);
      border: 1px solid var(--ltek-c-border-soft); cursor: pointer; font-size: var(--ltek-fs-label, 14px); }
    .live input { accent-color: var(--ltek-c-accent); width: 16px; height: 16px; margin: 0; }
    .live ha-icon { --mdc-icon-size: 18px; color: var(--ltek-c-accent); }
    .live .live-hint { margin-left: auto; color: var(--ltek-c-muted); font-size: var(--ltek-fs-small, 12px); }
    .guidebar { margin: 0 0 var(--ltek-sp-3); }
    /* Flat expandable settings sections (one per settings group of a panel). */
    details.flat { border: 1px solid transparent; border-top-color: var(--ltek-c-border-soft); border-radius: 0; }
    details.flat + details.flat { margin-top: 0; }
    details.flat[open] { border-color: var(--accent-color, var(--ltek-c-accent)); border-radius: var(--ltek-r-ctrl); margin: 6px 0; }
    details.flat[open] + details.flat { border-top-color: transparent; }
    details.flat > summary { list-style: none; cursor: pointer; user-select: none; display: flex; align-items: center; gap: 8px; padding: var(--ltek-sp-3) var(--ltek-sp-3);
      font-size: var(--ltek-fs-label); font-weight: var(--ltek-fw-semibold); text-transform: uppercase; letter-spacing: 0.04em; color: var(--ltek-c-accent); }
    details.flat > summary::-webkit-details-marker { display: none; }
    details.flat > summary::after { content: ""; margin-left: auto; width: 8px; height: 8px; border-right: 2px solid var(--ltek-c-accent); border-bottom: 2px solid var(--ltek-c-accent); transform: rotate(45deg); transition: transform 0.2s ease; }
    details.flat[open] > summary::after { transform: rotate(-135deg); }
    details.flat > summary:focus-visible { outline: 2px solid var(--ltek-c-accent); outline-offset: -2px; }
    details.flat > .flat-body { padding: 0 var(--ltek-sp-4) var(--ltek-sp-4); }
    details.flat > .flat-body > .grp:first-child { margin-top: 0; border-top: 0; padding-top: 0; }
    details.psub { margin: var(--ltek-sp-3) 0 8px; border: 1px solid #3a3a3a; border-radius: 12px; background: rgba(255,255,255,0.015); }
    details.psub > summary { list-style: none; cursor: pointer; user-select: none; padding: 10px 14px; display: flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 700; color: var(--primary-text-color, #e1e1e1); }
    details.psub > summary::-webkit-details-marker { display: none; }
    details.psub > summary ha-icon { --mdc-icon-size: 20px; color: var(--primary-color, #2196F3); flex-shrink: 0; }
    details.psub > summary::after { content: ""; margin-left: auto; width: 10px; height: 10px; border-right: 2px solid #999; border-bottom: 2px solid #999; transform: rotate(45deg); transition: transform 0.2s ease; }
    details.psub[open] > summary::after { transform: rotate(-135deg); }
    details.psub > .psub-body { margin: 0 14px 12px; }
    .map .h { font-size: var(--ltek-fs-tiny); text-transform: uppercase; letter-spacing: 0.04em; color: var(--ltek-c-muted); }
    .map .i { color: var(--ltek-c-accent); white-space: nowrap; }
    .map { display: grid; grid-template-columns: auto minmax(0, 1fr) auto auto; gap: 2px var(--ltek-sp-4); font-size: var(--ltek-fs-small); align-items: baseline; }
    .map .k { color: var(--ltek-c-label); }
    .map .e { font-family: monospace; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .map .e.none { color: var(--ltek-c-muted); font-family: inherit; font-style: italic; }
    .map .v { color: var(--ltek-c-muted); white-space: nowrap; }
    .row-inline { display: flex; align-items: center; gap: var(--ltek-sp-4); font-size: var(--ltek-fs-label); }
    .btnbar { display: flex; gap: var(--ltek-sp-3); }
    .btn.sm { padding: 3px 12px; font-size: var(--ltek-fs-body); }
    .btn.ghost { background: transparent; border: 1px solid var(--ltek-c-border); color: var(--ltek-c-text); }
    .checks { display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: 2px var(--ltek-sp-4); }
    .chk { display: flex; align-items: center; gap: var(--ltek-sp-2); font-size: var(--ltek-fs-label); padding: 3px 0; cursor: pointer; min-width: 0; }
    .chk span:not(.tag) { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .chk ha-icon { --mdc-icon-size: var(--ltek-icon-sm); color: var(--ltek-c-icon); flex: 0 0 auto; }
    .chk.nested { padding-left: var(--ltek-sp-6, 24px); }
    .chk .tag { font-size: var(--ltek-fs-tiny); color: var(--ltek-c-muted); white-space: nowrap; }
    /* A stack's panels, indented under its row. */
    .kids { margin: 0 var(--ltek-sp-2) var(--ltek-sp-2) var(--ltek-sp-6, 24px); padding-left: var(--ltek-sp-3); border-left: 2px solid var(--ltek-c-accent); display: flex; flex-direction: column; gap: var(--ltek-sp-2); }
    .nest { border-left: 2px solid var(--ltek-c-border); padding-left: var(--ltek-sp-3); display: flex; flex-direction: column; gap: var(--ltek-sp-3); }
    .flexed { }
  `];
}

customElements.get("weather-station-flex-card-editor") || customElements.define("weather-station-flex-card-editor", WeatherStationFlexCardEditor);

// For tests.
globalThis.__wsfcEditorHelpers = { stackWithNext, unstack, moveIntoStack };
// For scripts/gen-config-doc.mjs (docs/CONFIGURATION.md is generated from these).
globalThis.__wsfcSchemas = { APPEARANCE_GROUPS, GENERAL_DEFAULTS, REMEMBER, LABELS, PANEL_TYPES, COMMON_SCHEMA, STACK_CHILD_SCHEMA };
