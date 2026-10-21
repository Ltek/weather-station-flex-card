// Visual editor for Weather Station Flex Card.
//
//   General            entity, title, layout, panel buttons, grid sizing
//   Hero & Weather Sources   Weather Flex Card's full editor, bound to the hero
//   Panels             ordered list: reorder, show/hide, duplicate, delete, add;
//                      each opens Layout + its type's options, and flex-based
//                      panels (hero, forecast, sun & moon, Weather Flex sections)
//                      embed Weather Flex Card's editor for their sections.
//
// Weather Flex's editor emits a full resolved config; flexOverride() diffs it
// against the panel's base so only the user's changes are saved under `flex:`.
// Its entity/metric_sources edits are global and go to the card's top level.
import { LitElement, html, css, nothing } from "lit";
import { CARD_VERSION, CARD_NAME } from "../card/constants.js";
import { PANEL_TYPES, COMMON_SCHEMA, STACK_CHILD_SCHEMA, panelMeta, spanOf, rowsOf, inBarOf, normalizePanels } from "../card/panels.js";
import { CORE_EDITOR_TAG, FLEX_SECTIONS_BUILD, flexOverride, deepMerge } from "../card/core.js";
import { flexBase, trackerConfig } from "../panels/flex.js";
import { prune, clone } from "../card/config.js";
import { METRICS, metricEntity } from "../card/metrics.js";
import "./layout-map.js";
import { metricSensor, entityValue, integrationOf } from "../card/resolve.js";
import "./sources.js";
import "./series-editor.js";

const MAP_KEYS = ["temperature", "apparent_temperature", "dew_point", "humidity", "pressure", "wind_speed", "wind_gust_speed", "wind_bearing", "uv_index", "solar_radiation", "illuminance", "precipitation"];
const MAP_LABELS = { wind_bearing: "Wind direction", precipitation: "Rain rate" };

const GENERAL_SCHEMA = [
  { name: "title", selector: { text: {} }, helper: "Optional title row above the panels." },
  { name: "subtitle", selector: { text: {} } },
  { name: "icon", selector: { icon: {} } },
  { name: "layout", selector: { select: { options: [{ value: "auto", label: "Size to content" }, { value: "fullscreen", label: "Full screen (fills the view below the header)" }] } } },
  { name: "fit_height", selector: { boolean: {} }, default: true, helper: "Full screen: panels with a height share the screen height (row height is calculated)." },
  { name: "layout_size", selector: { select: { options: [{ value: "auto", label: "Automatic (from the card's width)" }, { value: "wide", label: "Wide — desktop layout" }, { value: "medium", label: "Medium — tablet layout" }, { value: "narrow", label: "Narrow — phone layout (stacked)" }] } }, helper: "In a Sections view the card is only as wide as its section; widen the section or use a Panel view for the desktop layout." },
  { name: "background", selector: { select: { options: [{ value: "none", label: "None (theme)" }, { value: "animated", label: "Animated weather — the hero's animation behind the whole card" }] } }, helper: "With the animated background, panels become semi-transparent and the hero stops drawing its own." },
  { name: "panel_opacity", selector: { number: { min: 0, max: 1, step: 0.05, mode: "slider" } }, helper: "Animated background: panel opacity (0 = fully transparent, 1 = solid). Default 0.55." },
  { name: "panel_blur", selector: { number: { min: 0, max: 30, step: 1, mode: "slider", unit_of_measurement: "px" } }, helper: "Animated background: blur behind panels. Default 6." },
  { name: "lite_editing", selector: { boolean: {} }, default: true, helper: "While the dashboard or this card is being edited: no animated background or blur, and the radar and Windy maps show a placeholder. Keeps the editor responsive." },
  { name: "panel_bar", selector: { boolean: {} }, default: true, helper: "Panel buttons that show/hide panels or open pop-ups." },
  { name: "remember", selector: { boolean: {} }, default: true, helper: "Remember which panels were toggled, per browser." },
  { name: "row_height", selector: { number: { min: 40, max: 300, mode: "box", unit_of_measurement: "px" } }, helper: "Height of one row unit (default 110)." },
  { name: "gap", selector: { number: { min: 0, max: 32, mode: "box", unit_of_measurement: "px" } }, helper: "Space between panels (default 12)." },
];
const GENERAL_DEFAULTS = { layout: "auto", panel_bar: true, remember: true, fit_height: true, layout_size: "auto", background: "none", panel_opacity: 0.55, panel_blur: 6, lite_editing: true };

const LABELS = {
  entity: "Weather entity", title: "Title", subtitle: "Subtitle", icon: "Icon", layout: "Layout", panel_bar: "Panel buttons",
  remember: "Remember toggles", station_device: "Weather station device", layout_size: "Layout size", fit_height: "Fit panels to the screen height", row_height: "Row height", gap: "Gap", span: "Width", rows: "Height", display: "Display",
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
  show_status: "Show station status", show_devices: "Show device names", overlay: "Layer", model: "Forecast model", level: "Altitude", wind_unit: "Wind unit", marker: "Location pin", preset: "Graph", engine: "Graph card", days_to_show: "Days", period: "Resolution", chart_type: "Chart type", stat_types: "Values", show_chart: "Altitude chart", show_arc: "Sun arc", show_sky: "Sky gradient & forecast row", timeframe: "Time window", hours: "Hours", anchor: "Now is", moon: "Moon at night", moon_phase: "Draw the moon phase", background: "Card background", panel_opacity: "Panel opacity", panel_blur: "Panel blur", sky_bar: "Sky Bar in the hero", show_facts: "Show sun times", moon_size: "Moon size", direction: "Direction", min_width: "Minimum width", grow: "Grow", show_bar: "Panel buttons here", lite_editing: "Pause animations and maps while editing",
  device: "Pollen location", hide_off_season: "Hide out-of-season species", hide_when_off_season: "Hide the panel out of season", species: "Species", max_rows: "Rows", show_tomorrow: "Tomorrow's trend", show_season: "Season strip", location: "Town / area text",
  seasons: "Season months", entities: "Sensors", pollutants: "Pollutants", show_scale: "AQI scale", show_aqi: "Show the AQI", extra: "More readings", bar_height: "Bar height", source: "Source text", show_source: "Show the source", show_location: "Show the town / area", hide_none: "Hide species at None", "entities.aqi": "AQI sensor",
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

function panelDefaults(p) {
  const m = panelMeta(p);
  return { span: m.span, rows: m.rows, display: "grid", in_bar: inBarOf({ ...p, in_bar: undefined }), show: true };
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

  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this._hassTimer);
    this._hassTimer = null;
  }

  get _panels() {
    return normalizePanels(this._config);
  }

  get _station() {
    return { entity: this._config.entity, metric_sources: this._config.metric_sources };
  }

  _emit(config) {
    this._config = config;
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
        <div class="hdr"><span class="name">${CARD_NAME}</span><span class="ver">v${CARD_VERSION} · Weather Flex sections ${FLEX_SECTIONS_BUILD}</span></div>
        ${this._section("station", "mdi:weather-cloudy-clock", "Weather station", () => this._stationEditor())}
        ${this._section("general", "mdi:cog-outline", "General", () => this._general())}
        ${this._section("buttons", "mdi:gesture-tap-button", "Panel buttons", () => this._buttonsEditor())}
        ${this._section("layout", "mdi:view-dashboard-edit-outline", "Layout", () => this._layoutEditor())}
        ${this._section("hero", "mdi:weather-partly-cloudy", "Hero", () => this._heroEditor())}
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

  _form(data, schema, onChange) {
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
    return this._form(formData(this._config, GENERAL_SCHEMA, GENERAL_DEFAULTS), GENERAL_SCHEMA, (v) => {
      const { panels: _p, ...rest } = this._config;
      const next = applyForm(rest, GENERAL_SCHEMA, v, GENERAL_DEFAULTS);
      if (this._config.panels) next.panels = this._config.panels;
      this._emit(next);
    });
  }

  _stationDevice() {
    const src = (this._config.metric_sources?.sources || []).find((s) => !s.disabled && String(s.ref).startsWith("device:"));
    return src ? src.ref.slice(7) : undefined;
  }

  _stationEditor() {
    const station = this._station;
    const rows = [...MAP_KEYS, "rain_today", "battery", "signal", "rssi", "aqi", "pm2_5", "pm10", "ozone"].map((k) => {
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

  _heroEditor() {
    const panels = this._panels;
    const i = panels.findIndex((p) => p.type === "hero");
    if (i < 0) {
      return html`<p class="hint">There is no hero panel. Add one here, or set the station under <b>Weather station</b>.</p>
        <button class="btn" @click=${() => this._setPanels([{ type: "hero" }, ...panels])}><ha-icon icon="mdi:plus"></ha-icon>Add hero panel</button>`;
    }
    const update = (np, extra) => {
      const list = panels.slice();
      list[i] = np;
      this._setPanels(list, extra);
    };
    return html`<p class="hint">Weather Flex Card's editor for the hero's sections. Weather Sources are under <b>Weather station</b>.</p>
      ${this._flexEditor(`${i}`, panels[i], update)}`;
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

  _layoutEditor() {
    return html`
      <p class="hint"><b>Drag</b> a panel to move it; drag its <b>right or bottom edge</b> (or the corner) to resize. Keyboard: arrows move, Shift+arrows resize. This is the desktop layout — tablets and phones adapt automatically. Dashed = hidden on load.</p>
      <wsfc-layout-map .panels=${this._panels} @layout-changed=${(e) => {
        this._flexEds.clear();
        this._openPanel = null;
        this._setPanels(e.detail.panels);
      }}></wsfc-layout-map>
    `;
  }

  _panelList() {
    return html`
      <p class="hint">Edit, show/hide, duplicate, delete and add panels. Arrange them under <b>Layout</b>. To keep panels side by side on every screen, put them in a <b>Stack</b>.</p>
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
    const setBtn = (idx, on) => {
      const list = panels.map((p, i) => {
        if (!idx.includes(i)) return p;
        const def = inBarOf({ ...p, in_bar: undefined });
        return prune({ ...p, in_bar: on === def ? undefined : on });
      });
      this._setPanels(list);
    };
    const all = panels.map((_, i) => i);
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
      <div class="btnbar">
        <button class="btn sm" @click=${() => setBtn(all, true)}>All</button>
        <button class="btn sm ghost" @click=${() => setBtn(all, false)}>None</button>
      </div>
      <div class="checks">
        ${panels.map((p, i) => html`<label class="chk">
          <input type="checkbox" .checked=${inBarOf(p)} @change=${(e) => setBtn([i], e.target.checked)} />
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
      .filter(([k]) => k !== "map" && !(nested && k === "hero"))
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
        }}><ha-icon icon="mdi:plus"></ha-icon>${nested ? "Add to stack" : "Add panel"}</button>
      </div>
    `;
  }

  _panelRow(p, i, panels, setList, key, nested) {
    const m = panelMeta(p);
    const open = this._openPanel === key || String(this._openPanel || "").startsWith(`${key}.`);
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
    </div>`;
  }

  _panelBody(p, key, update, nested) {
    const m = panelMeta(p);
    const defs = nested ? {} : panelDefaults(p);
    let common = nested ? STACK_CHILD_SCHEMA : COMMON_SCHEMA;
    if (p.type === "hero") common = common.filter((f) => !["icon", "display", "in_bar"].includes(f.name));
    const isGraph = ["graph", "temp_humidity", "uv_solar", "statistics"].includes(p.type);
    // Reset keeps the panel's type, place and size; everything else returns to defaults.
    const KEEP = ["type", "span", "rows", "display", "in_bar", "tile_background", "show", "id", "span_medium", "span_narrow", "rows_compact", "grow", "min_width",
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
      <div class="grp">Layout</div>
      ${this._form(formData(p, common, defs), common, (v) => update({ type: p.type, ...applyForm(p, common, v, defs) }))}
      ${m.schema.length
        ? html`<div class="grp">${m.label} options</div>
            ${this._form(formData(p, m.schema), m.schema, (v) => update({ type: p.type, ...applyForm(p, m.schema, v) }))}`
        : nothing}
      ${p.type === "stack"
        ? html`<div class="grp">Panels in this stack</div>
            <div class="nest">${this._list(p.panels || [], (list, extra) => update({ ...p, panels: list }, extra), key)}</div>`
        : nothing}
      ${m.flex
        ? html`<div class="grp">${p.type === "sky_tracker" ? "Arc & sky details" : "Weather Flex sections"}</div>
            ${p.type === "sky_tracker" ? html`<p class="hint">Fine-tune the arc (Sun Position) and the sky (Sky Bar): heights, colors, labels, ticks and the forecast row. Layers, time window and moon are set above and override the same options here.</p>` : nothing}
            ${p.type === "hero" && !nested ? html`<p class="hint">Also under Hero above.</p>` : this._flexEditor(key, p, update)}`
        : nothing}
    </div>`;
  }

  static styles = css`
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
    .grp { font-size: var(--ltek-fs-group); font-weight: var(--ltek-fw-semibold); margin-top: var(--ltek-sp-3); border-top: 1px solid var(--ltek-c-border-soft); padding-top: var(--ltek-sp-3); }
    .add { display: flex; gap: var(--ltek-sp-3); align-items: center; }
    .sel { flex: 1; font: inherit; font-size: var(--ltek-fs-label); padding: var(--ltek-ctrl-pad); border-radius: var(--ltek-r-ctrl); border: 1px solid var(--ltek-c-border); background: var(--card-background-color, #1c1c1c); color: var(--ltek-c-text); }
    .btn { display: inline-flex; align-items: center; gap: var(--ltek-sp-2); font: inherit; font-size: var(--ltek-fs-label); padding: var(--ltek-ctrl-pad); border-radius: var(--ltek-r-ctrl); border: 0; background: var(--ltek-c-accent); color: var(--ltek-c-on-accent); cursor: pointer; }
    .btn ha-icon { --mdc-icon-size: var(--ltek-icon-sm); }
    details.sub { border: 1px solid var(--ltek-c-border-soft); border-radius: var(--ltek-r-card); }
    details.sub > summary { font-size: var(--ltek-fs-group); padding: var(--ltek-sp-3) var(--ltek-sp-4); gap: var(--ltek-sp-3); }
    details.sub > summary ha-icon { --mdc-icon-size: var(--ltek-icon-sm); }
    details.sub > summary .cnt { margin-left: auto; font-size: var(--ltek-fs-small); font-weight: var(--ltek-fw-normal); color: var(--ltek-c-muted); }
    details.sub > :not(summary) { margin: 0 var(--ltek-sp-4) var(--ltek-sp-4); }
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
    .chk .tag { font-size: var(--ltek-fs-tiny); color: var(--ltek-c-muted); white-space: nowrap; }
    .nest { border-left: 2px solid var(--ltek-c-border); padding-left: var(--ltek-sp-3); display: flex; flex-direction: column; gap: var(--ltek-sp-3); }
    .flexed { border-left: 2px solid var(--ltek-c-accent-fade); padding-left: var(--ltek-sp-3); }
  `;
}

customElements.get("weather-station-flex-card-editor") || customElements.define("weather-station-flex-card-editor", WeatherStationFlexCardEditor);
