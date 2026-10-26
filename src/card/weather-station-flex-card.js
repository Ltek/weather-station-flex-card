// Weather Station Flex Card (Ltek)
// A weather-station dashboard in one card: a 12-column grid of panels (hero,
// bulletin, metric tiles, graphs, wind, radar/maps, forecasts, sun & moon,
// any Weather Flex sections, any Home Assistant card). Panel buttons toggle
// panels or open them as pop-ups. Scales from a normal card to a full-screen
// dashboard.
import { LitElement, html, css, nothing } from "lit";
import { CARD_VERSION, CARD_TYPE, CARD_NAME } from "./constants.js";
import { chipStyles, tileStyles } from "../panels/shared.js";
import { panelMeta, rowsOf, inBarOf, normalizePanels, layoutOf, opensPopup } from "./panels.js";
import { watchForecast } from "./forecast.js";
import { isUnsaved, isLive } from "./unsaved.js";
import { setDetected } from "./detected.js";
import { extraMetricEntity } from "./air.js";
import { WeatherForecastCard } from "../../vendor/weather-forecast-card/src/weather-forecast-card";
import "../../vendor/weather-forecast-card/src/components/animation/wfc-animation-provider";
import { animSpeedVars } from "./animation-speed.js";
import "../panels/flex.js";
import "../panels/graph.js";
import "../panels/wind.js";
import "../panels/radar.js";
import "../panels/sun-moon.js";
import "../panels/metric.js";
import "../panels/info.js";
import "../panels/stack.js";
import "../panels/astronomy.js";
import "../panels/wind-map.js";
import "../panels/statistics.js";
import "../panels/health.js";
import "../panels/pollen.js";
import "../panels/air-quality.js";
import "../panels/clock.js";
import "../panels/records.js";
import "../editor/editor.js";

const NARROW_PX = 720;
const MEDIUM_PX = 1100;

// Weather Flex metrics (sub-header, chips) also look in air-quality sources.
WeatherForecastCard.__wsfcExtraEntity = extraMetricEntity;

/** Classes that turn off the Appearance shadow / border / glow for one panel. */
export const tileFx = (p) => [p.tile_shadow === false ? "no-shadow" : "", p.tile_border === false ? "no-border" : "", p.tile_glow === false ? "no-glow" : ""].filter(Boolean).join(" ");

/** CSS variables for the Appearance → Panels settings (only those that are set). */
export function panelStyleVars(c) {
  const out = [];
  if (c.panel_radius != null) out.push(`--wsfc-radius:${Number(c.panel_radius)}px`);
  const shadows = { soft: "0 2px 6px rgba(0,0,0,.25)", medium: "0 4px 14px rgba(0,0,0,.35)", strong: "0 8px 28px rgba(0,0,0,.5)" };
  // Shadow and glow are separate layers so a panel can turn either off.
  if (shadows[c.panel_shadow]) out.push(`--wsfc-tile-drop:${shadows[c.panel_shadow]}`);
  if (c.panel_glow) {
    const col = c.panel_glow_color || c.panel_border_color || "var(--primary-color)";
    out.push(`--wsfc-tile-glow:0 0 ${Number(c.panel_glow_size ?? 10)}px ${col}`);
  }
  if (c.panel_border_width != null || c.panel_border_color) {
    out.push(`--wsfc-tile-border:${Number(c.panel_border_width ?? 1)}px solid ${c.panel_border_color || "var(--divider-color, rgba(127,127,127,.3))"}`);
  }
  return out;
}

class WeatherStationFlexCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    // Set by Home Assistant: preview in the card editor, editMode while the dashboard is edited.
    preview: { type: Boolean },
    editMode: { type: Boolean },
    _config: { state: true },
    _hidden: { state: true }, // Set of panel keys toggled off
    _popup: { state: true }, // index of the open pop-up panel, or null
    _focus: { state: true }, // index of an expanded grid panel, or null
    _size: { state: true }, // "wide" | "medium" | "narrow"
    _collapsed: { state: true }, // Set of panel keys collapsed to their header
    // Editor layout probe: the card's height on the target screen (px).
    screenHeight: { attribute: false },
  };

  static getConfigElement() {
    return document.createElement("weather-station-flex-card-editor");
  }

  static getStubConfig(hass) {
    const weather = Object.keys(hass?.states || {}).find((e) => e.startsWith("weather."));
    const dev = Object.values(hass?.devices || {}).find((d) => /ecowitt/i.test(d.manufacturer || ""));
    const sources = [];
    if (dev) sources.push({ ref: `device:${dev.id}` });
    if (weather) sources.push({ ref: weather });
    return { entity: weather || "weather.home", metric_sources: { sources } };
  }

  setConfig(config) {
    if (!config?.entity || !String(config.entity).startsWith("weather.")) {
      throw new Error("entity is required: the weather entity that supplies the forecast and condition (e.g. weather.openweathermap)");
    }
    const panels = normalizePanels(config);
    this._config = { ...config, panels };
    this._popup = null;
    this._focus = null;
    this._hidden = this._loadHidden(panels);
    this._collapsed = this._loadCollapsed(panels);
  }

  // Strict fit: full screen with fit on and "Strict fit to screen dimensions".
  get _strict() {
    return this._full && this._config.fit_height !== false && !!this._config.fit_strict;
  }

  // Collapse to the title header: panels with a header, in the grid.
  _canCollapse(p) {
    const m = panelMeta(p);
    return !!p.collapsible && !m?.bare && p.type !== "hero" && !["metric", "stack", "clock", "chips"].includes(p.type) && p.display !== "tile_popup" && p.show_title !== false;
  }

  _isCollapsed(p, i) {
    return this._collapsed.has(this._key(p, i));
  }

  _toggleCollapse(p, i) {
    const s = new Set(this._collapsed);
    const k = this._key(p, i);
    s.has(k) ? s.delete(k) : s.add(k);
    this._collapsed = s;
    if (this._config.remember !== false) {
      try {
        localStorage.setItem(`${this._storageKey()}:collapsed`, JSON.stringify({ sig: this._sig(this._config.panels), collapsed: [...s] }));
      } catch (_e) { /* ignore */ }
    }
    this.requestUpdate();
    this._scheduleFit?.();
  }

  // Start collapsed (per panel), or as left last time when remembering is on.
  _loadCollapsed(panels) {
    const def = new Set(panels.map((p, i) => (p.collapsible && p.collapsed ? this._key(p, i) : null)).filter(Boolean));
    if (this._config.remember === false || this.preview) return def;
    try {
      const saved = JSON.parse(localStorage.getItem(`${this._storageKey()}:collapsed`) || "null");
      if (saved?.sig === this._sig(panels)) return new Set(saved.collapsed);
    } catch (_e) { /* ignore */ }
    return def;
  }

  // A panel's identity for remembering its toggle: explicit id, else type +
  // position. `i` is its path: an index, or "stack.child" for a panel in a stack.
  _key(p, i) {
    return p.id || `${i}:${p.type}`;
  }

  /** Every panel with its path: top-level panels, then each stack's children after it. */
  _entries(panels = this._config.panels) {
    const out = [];
    panels.forEach((p, i) => {
      out.push([p, i]);
      if (p.type === "stack") (p.panels || []).forEach((c, j) => c && out.push([c, `${i}.${j}`]));
    });
    return out;
  }

  /** Panel at a path (index or "i.j"). */
  _at(path) {
    const panels = this._config.panels;
    if (typeof path === "number") return panels[path];
    const [a, b] = String(path).split(".").map(Number);
    return b == null ? panels[a] : panels[a]?.panels?.[b];
  }

  _storageKey() {
    const c = this._config;
    return `wsfc:${c.storage_key || `${location.pathname}|${c.entity}|${c.title || ""}`}`;
  }

  _loadHidden(panels) {
    const def = new Set(this._entries(panels).map(([p, i]) => (p.show === false ? this._key(p, i) : null)).filter(Boolean));
    if (this._config?.remember === false) return def;
    try {
      const saved = JSON.parse(localStorage.getItem(this._storageKey()) || "null");
      if (saved && Array.isArray(saved.hidden) && saved.sig === this._sig(panels)) return new Set(saved.hidden);
    } catch (_e) {
      /* private mode etc. */
    }
    return def;
  }

  // Saved toggles only apply while the panel list is unchanged.
  _sig(panels) {
    return this._entries(panels).map(([p, i]) => this._key(p, i)).join(",");
  }

  _saveHidden() {
    if (this._config?.remember === false) return;
    try {
      localStorage.setItem(this._storageKey(), JSON.stringify({ sig: this._sig(this._config.panels), hidden: [...this._hidden] }));
    } catch (_e) {
      /* ignore */
    }
  }

  getCardSize() {
    return 12;
  }

  getGridOptions() {
    return { columns: "full", rows: "auto", min_columns: 6 };
  }

  connectedCallback() {
    this._onUnsaved ||= () => this.preview && this.requestUpdate();
    window.addEventListener("wsfc-unsaved", this._onUnsaved);
    this._onLive ||= () => this.requestUpdate();
    window.addEventListener("wsfc-live", this._onLive);
    super.connectedCallback();
    this._ro = new ResizeObserver(([e]) => {
      const w = e.contentRect.width;
      const c = this._config || {};
      const size = w < (c.narrow_width || NARROW_PX) ? "narrow" : w < (c.medium_width || MEDIUM_PX) ? "medium" : "wide";
      if (size !== this._size) this._size = size;
      this._width = w;
      this._scheduleFit();
    });
    this._ro.observe(this);
    this._onKey = (e) => {
      if (e.key !== "Escape") return;
      if (this._popup != null) this._popup = null;
      else if (this._focus != null) this._focus = null;
    };
    window.addEventListener("keydown", this._onKey);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("wsfc-unsaved", this._onUnsaved);
    window.removeEventListener("wsfc-live", this._onLive);
    this._unwatchHourly?.();
    this._unwatchHourly = null;
    this._hourlyFor = null;
    this._ro?.disconnect();
    window.removeEventListener("keydown", this._onKey);
  }

  /** Layout size: forced by `layout_size`, else from the card's width. */
  get _layoutSize() {
    const f = this._config?.layout_size;
    return ["wide", "medium", "narrow"].includes(f) ? f : this._size || "wide";
  }

  // Full screen = the card fills the view below the header. Explicit-height
  // panels share the height: the row unit is solved so the grid's content
  // height matches the space available (content still scrolls if it can't fit).
  get _full() {
    return this._config?.layout === "fullscreen" && this._layoutSize !== "narrow";
  }

  updated() {
    // Re-fit when the layout inputs change, and once more after panels have
    // loaded their content (charts, forecasts).
    const key = JSON.stringify([this._config?.panels, [...(this._hidden || [])], this._focus, this._layoutSize, this._config?.layout]);
    if (key === this._fitKey) return;
    this._fitKey = key;
    this._scheduleFit();
    clearTimeout(this._fitLate);
    this._fitLate = setTimeout(() => this._scheduleFit(), 1500);
  }

  _scheduleFit() {
    if (this._fitRaf) return;
    this._fitRaf = requestAnimationFrame(() => {
      this._fitRaf = null;
      this._fit();
    });
  }

  // Report what Auto resolved to (for the editor's readouts).
  _reportDetected() {
    const grid = this.renderRoot?.querySelector(".grid");
    const tile = grid?.querySelector("section.tile:not(.bare):not(.stack):not(.hero)") || grid?.querySelector("section.tile");
    if (!grid || !tile) return;
    const cs = getComputedStyle(grid);
    const px = (v) => (v ? `${Math.round(parseFloat(v))}px` : "");
    setDetected(this.preview ? "preview" : "dashboard", {
      radius: px(getComputedStyle(tile).borderTopLeftRadius),
      row: px(grid.style.getPropertyValue("--wsfc-row") || cs.getPropertyValue("--wsfc-row")),
      gap: px(cs.rowGap),
      theme: this.hass?.themes?.theme || "",
    });
  }

  _fit() {
    queueMicrotask(() => this._reportDetected());
    const grid = this.renderRoot?.querySelector(".grid");
    const scroller = this.renderRoot?.querySelector(".scroller");
    if (!grid || !scroller) return;
    const c = this._config;
    if (!this._full || c.fit_height === false || this._focus != null) {
      if (grid.style.getPropertyValue("--wsfc-row")) grid.style.removeProperty("--wsfc-row");
      return;
    }
    const min = c.min_row_height || 60;
    const max = c.max_row_height || 400;
    const avail = scroller.clientHeight;
    if (!avail) return;
    // Explicit-height panels grow linearly with the row unit: measure the
    // grid at two row heights to get the slope, then solve for a fit.
    const at = (x) => {
      grid.style.setProperty("--wsfc-row", `${x}px`);
      return grid.getBoundingClientRect().height;
    };
    const x0 = min, x1 = min + 40;
    const h0 = at(x0), h1 = at(x1);
    const slope = (h1 - h0) / (x1 - x0);
    let x = c.row_height || 110;
    if (slope > 0.5) x = Math.max(min, Math.min(max, x0 + (avail - h0) / slope));
    grid.style.setProperty("--wsfc-row", `${Math.floor(x)}px`);
  }

  // Shared "station" config handed to every panel: entity + Weather Sources.
  get _station() {
    return { entity: this._config.entity, metric_sources: this._config.metric_sources };
  }

  render() {
    if (!this._config || !this.hass) return nothing;
    const c = this._config;
    const full = this._full;
    const bg = this._animatedBg;
    const lite = this._lite;
    const style = [
      c.row_height ? `--wsfc-row:${c.row_height}px` : "",
      c.gap != null ? `--wsfc-gap:${c.gap}px` : "",
      bg ? `--wsfc-panel-opacity:${c.panel_opacity ?? 0.55}` : "",
      bg ? `--wsfc-panel-blur:${c.anim_low_power ? 0 : c.panel_blur ?? 6}px` : "",
      // Low-power animation: each cloud on its own layer, no turbulence edges.
      c.anim_low_power ? "--wsfc-cloud-will:transform;--wsfc-cloud-filter:none;--wsfc-cloud-filter-night:brightness(0.5)" : "",
      ...panelStyleVars(c),
      ...animSpeedVars(c),
    ].join(";");
    const barInHeading = c.panels.some((p) => p.type === "heading" && p.show_bar);
    return html`
      <ha-card class=${`wsfc ${full ? "full" : ""} ${this._strict ? "strict" : ""} ${this._layoutSize} ${bg ? "animated" : ""} ${lite ? "lite" : ""}`} style=${style + (this.screenHeight ? `;height:${this.screenHeight}px` : "")}>
        ${this.preview && isUnsaved() ? html`<div class="unsaved" role="status">✎ Unsaved changes — press Save in the editor to keep them</div>` : nothing}
        ${c.background === "image" ? this._renderImage() : bg && !lite ? this._renderBackground() : nothing}
        ${c.title ? this._renderTitle() : nothing}
        ${c.panel_bar === false || barInHeading ? nothing : html`<div class="topbar">${this._renderBar()}</div>`}
        <div class="scroller"><div class="grid">${this._renderPanels()}</div></div>
        ${this._popup != null ? this._renderPopup() : nothing}
      </ha-card>
    `;
  }

  // Editing (card editor preview or dashboard edit mode): Home Assistant
  // rebuilds the card on every change, so skip the animated background, blur
  // and live maps. Dashboard edit mode adds ?edit=1 to the URL.
  get _lite() {
    // Always paused while editing, unless the editor's Live preview is ticked.
    if (isLive()) return false;
    return !!(this.preview || this.editMode || /[?&]edit=1(&|$)/.test(globalThis.location?.search || ""));
  }

  // True for any card-wide background (animated weather or an image): panels
  // turn see-through and the hero stops drawing its own background.
  get _animatedBg() {
    const b = this._config?.background;
    return b === "animated" || (b === "image" && !!this._bgSource());
  }

  // Background image source: a typed URL wins, else the uploaded / media-browser
  // image (a media-source id or an /api/image/serve URL).
  _bgSource() {
    const c = this._config || {};
    if (c.background_image_url) return String(c.background_image_url);
    const m = c.background_image;
    return (typeof m === "object" ? m?.media_content_id : m) || "";
  }

  // Custom background image, with an optional dim layer.
  _renderImage() {
    const c = this._config;
    let src = this._bgSource();
    if (!src) return nothing;
    if (src.startsWith("media-source://")) {
      // Resolve once per id; resolved URLs are signed for 24 h.
      const hit = this._bgResolved;
      if (hit?.id === src && Date.now() - hit.at < 23 * 3600e3) src = hit.url;
      else {
        if (this._bgPending !== src) {
          this._bgPending = src;
          const id = src;
          this.hass.callWS({ type: "media_source/resolve_media", media_content_id: id })
            .then((r) => { this._bgResolved = { id, url: r.url, at: Date.now() }; this.requestUpdate(); })
            .catch(() => {})
            .finally(() => { if (this._bgPending === id) this._bgPending = null; });
        }
        return nothing;
      }
    }
    if (src.startsWith("/") && this.hass?.hassUrl) src = this.hass.hassUrl(src);
    const url = src.replace(/["\\()]/g, (ch) => encodeURIComponent(ch));
    const fit = c.background_image_fit || "cover";
    const dim = Number(c.background_dim ?? 0.25);
    return html`<div class="bg bgimg" style="background-image:url(&quot;${url}&quot;);background-size:${fit === "tile" ? "auto" : fit};background-repeat:${fit === "tile" ? "repeat" : "no-repeat"};--dim:${dim}"></div>`;
  }

  _renderBackground() {
    const c = this._config;
    const stateObj = this.hass.states[c.entity];
    if (!stateObj) return nothing;
    this._watchHourly();
    const fx = c.background_effects ?? true;
    return html`<wsfc-animation-provider class="bg"
      .hass=${this.hass}
      .weatherEntity=${stateObj}
      .config=${{ entity: c.entity, show_condition_effects: fx, show_moon_phase: c.background_moon_phase ?? true, forecast: { show_sun_times: true } }}
      .currentForecast=${this._hourlyNow}
    ></wsfc-animation-provider>`;
  }

  _watchHourly() {
    const eid = this._config.entity;
    if (this._hourlyFor === eid) return;
    this._unwatchHourly?.();
    this._hourlyFor = eid;
    this._unwatchHourly = watchForecast(this.hass, eid, "hourly", (f) => {
      this._hourlyNow = f?.[0];
      this.requestUpdate();
    });
  }

  _renderTitle() {
    const c = this._config;
    return html`<div class="title-row">
      <ha-icon icon=${c.icon || "mdi:weather-windy"}></ha-icon>
      <span class="title">${c.title}</span>
      ${c.subtitle ? html`<span class="subtitle">${c.subtitle}</span>` : nothing}
    </div>`;
  }

  _renderBar() {
    const panels = this._config.panels;
    // Panels inside stacks get buttons too (same default per type).
    const items = this._entries(panels).filter(([p]) => inBarOf(p));
    if (!items.length) return nothing;
    return items.map(([p, i]) => {
      const meta = panelMeta(p);
      // A panel hiding itself (e.g. pollen out of season) opens as a pop-up from its button.
      const popup = p.display === "popup" || this._isEmpty(p);
      const active = popup ? this._popup === i : !this._hidden.has(this._key(p, i));
      // tile_popup panels toggle like grid panels; their tile opens the pop-up.
      return html`<button
        type="button"
        class="chip ${active ? "on" : ""} ${popup ? "popup" : ""}"
        aria-pressed=${popup ? nothing : String(active)}
        aria-haspopup=${popup ? "dialog" : nothing}
        @click=${() => this._toggle(p, i)}
      >
        <ha-icon icon=${p.icon || meta.icon}></ha-icon><span>${p.title || this._autoTitle(p)}</span>${popup ? html`<ha-icon class="open" icon="mdi:open-in-new"></ha-icon>` : nothing}
      </button>`;
    });
  }

  _autoTitle(p) {
    if (p.type === "metric") return p.label || p.metric || "Metric";
    if (p.type === "day") return Number(p.day_offset ?? 1) === 0 ? "Today" : Number(p.day_offset ?? 1) === 1 ? "Tomorrow" : `Day +${p.day_offset}`;
    if (p.type === "radar" && p.radar === false) return "Map";
    if (p.type === "wind_map") return "Wind map";
    if (p.type === "statistics") return p.title || ({ temps: "Temps", wind: "Wind graph", pressure_humidity: "Pressure", solar_uv: "Solar & UV", rain: "Rain", temperature_range: "Temp range" }[p.preset] || "Graph");
    return panelMeta(p).label.replace(/ \(.*\)$/, "");
  }

  _toggle(p, i) {
    if (p.display === "popup" || this._isEmpty(p)) {
      this._popup = this._popup === i ? null : i;
      return;
    }
    this._focus = null;
    const h = new Set(this._hidden);
    const k = this._key(p, i);
    h.has(k) ? h.delete(k) : h.add(k);
    this._hidden = h;
    this._saveHidden();
  }

  // A panel with a button follows its toggle; one without a button can't be
  // toggled, so a remembered "off" from before the button was removed is ignored.
  _isHidden(p, i) {
    if (!inBarOf(p) || this._config.panel_bar === false) return p.show === false;
    return this._hidden.has(this._key(p, i));
  }

  // Panels that hide themselves when they have nothing to show (e.g. pollen
  // out of season). A stack is empty when every child is hidden or empty.
  _isEmpty(p, path) {
    if (p.type === "stack" && path != null && typeof path === "number") {
      const kids = (p.panels || []).filter(Boolean);
      return kids.length > 0 && kids.every((c, j) => this._isHidden(c, `${path}.${j}`) || this._isEmpty(c));
    }
    const fn = panelMeta(p)?.hideWhen;
    try {
      return !!(fn && fn(p, this.hass, this._station));
    } catch (_e) {
      return false;
    }
  }

  _renderPanels() {
    const panels = this._config.panels;
    let idx = panels.map((p, i) => i).filter((i) => panels[i].display !== "popup" && !this._isHidden(panels[i], i) && !this._isEmpty(panels[i], i));
    if (this._focus != null) idx = [this._focus];
    if (!idx.length) return html`<div class="empty">All panels are hidden — use the panel buttons to show one.</div>`;
    const size = this._layoutSize;
    return idx.map((i) => {
      const p = panels[i];
      const meta = panelMeta(p);
      const lay = layoutOf(p, size);
      const span = this._focus != null ? 12 : lay.span;
      const rows = this._focus != null ? Math.max(rowsOf(p), 5) : lay.rows;
      // Tracks are content-sized; a panel spanning N rows gets the height of N row units.
      // Grid tracks are half a row unit, so heights can be 0.5, 1, 1.5 …; a
      // half row is (row − gap) / 2, so two half panels plus their gap fill one row.
      // Panels that fit their content to the panel (Wind) get a fixed height, so
      // a tall rose shrinks instead of stretching the row and its neighbours.
      const fit = !!meta.fit && rows > 0 && p.fit !== false && this._focus == null;
      // Strict fit: every panel is exactly its rows tall; taller content scrolls inside it.
      const strict = this._strict && rows > 0 && this._focus == null;
      const collapsible = this._canCollapse(p) && this._focus == null;
      const collapsed = collapsible && this._isCollapsed(p, i);
      const h = `calc(${rows} * var(--wsfc-row) + ${rows - 1} * var(--wsfc-gap))`;
      const style = collapsed
        ? `grid-column: span ${span};grid-row: span 1;`
        : `grid-column: span ${span};grid-row: span ${rows ? Math.max(1, Math.round(rows * 2)) : 2};${rows ? `min-height:${h};` : ""}${strict ? `height:${h};` : ""}`;
      const bare = meta.bare || p.type === "hero";
      const tapToOpen = p.display === "tile_popup";
      const expandable = !bare && !tapToOpen && !["metric", "stack", "clock", "chips"].includes(p.type) && size !== "narrow";
      const bg = p.tile_background && p.tile_background !== "default" ? `bg-${p.tile_background}` : "";
      return html`<section class="tile ${p.type} ${meta.bare ? "bare" : ""} ${bg} ${tileFx(p)} ${rows ? "" : "auto"} ${fit || (strict && !collapsed) ? "fit" : ""} ${strict && !fit && !collapsed ? "strict" : ""} ${collapsed ? "collapsed" : ""} ${tapToOpen ? "tap" : ""} ${collapsible ? "can-collapse" : ""}" style=${style} data-i=${i}>
        ${collapsible
          ? html`<button class="collapse" type="button" @click=${() => this._toggleCollapse(p, i)} aria-expanded=${String(!collapsed)}
              aria-label=${`${collapsed ? "Expand" : "Collapse"} ${p.title || this._autoTitle(p)}`} title=${collapsed ? "Show" : "Collapse to its title"}>
              <ha-icon icon=${collapsed ? "mdi:chevron-down" : "mdi:chevron-up"}></ha-icon></button>`
          : nothing}
        ${tapToOpen
          ? html`<button class="tap-open" type="button" aria-haspopup="dialog" aria-label=${`Open ${p.title || this._autoTitle(p)}`}
              @click=${() => (this._popup = i)}><span><ha-icon icon="mdi:arrow-expand"></ha-icon></span></button>`
          : nothing}
        ${expandable
          ? html`<button class="expand" type="button" @click=${() => (this._focus = this._focus == null ? i : null)}
              aria-label=${this._focus == null ? `Expand ${p.title || this._autoTitle(p)}` : "Back to all panels"}>
              <ha-icon icon=${this._focus == null ? "mdi:arrow-expand" : "mdi:arrow-collapse"}></ha-icon>
            </button>`
          : nothing}
        ${this._panelEl(p, i)}
      </section>`;
    });
  }

  _renderPopup() {
    const i = this._popup;
    const p = this._at(i);
    if (!p) return nothing;
    const close = () => (this._popup = null);
    return html`<div class="scrim" @click=${(e) => e.target === e.currentTarget && close()}>
      <div class="dialog tile ${p.type}" role="dialog" aria-modal="true" aria-label=${p.title || this._autoTitle(p)}>
        <button class="expand close" type="button" @click=${close} aria-label="Close"><ha-icon icon="mdi:close"></ha-icon></button>
        ${this._panelEl(p, i, true)}
      </div>
    </div>`;
  }

  // Panel elements are cached by position + config, so toggling or a hass
  // update never rebuilds charts/maps, while an edited panel is rebuilt.
  _panelEl(p, i, popup = false) {
    this._els ||= new Map();
    // Most panels get a fresh element when their settings change. Wind keeps
    // its element, so a hosted Wind Rose Card stays drawn while it reloads.
    const key = `${popup ? "pop" : "grid"}:${i}:${p.type === "wind" ? "wind" : JSON.stringify(p)}`;
    let el = this._els.get(key);
    if (!el) {
      el = document.createElement(panelMeta(p).tag);
      this._els.set(key, el);
      // Drop stale elements from earlier configs of this slot.
      for (const k of this._els.keys()) if (k !== key && k.startsWith(`${popup ? "pop" : "grid"}:${i}:`)) this._els.delete(k);
    }
    el.config = p;
    el.station = this._station;
    el.cardBg = this._animatedBg;
    // A collapsed panel is paused too (a folded map stops loading and animating).
    el.lite = this._lite || (!popup && this._canCollapse(p) && this._focus == null && this._isCollapsed(p, i));
    // Content size (zoom) and, for panels that use them, horizontal / vertical spacing.
    const z = Number(p.content_scale) || 100;
    el.style.zoom = z !== 100 ? String(Math.max(0.4, Math.min(2, z / 100))) : "";
    const sx = Number(p.content_width) || 100, sy = Number(p.content_height) || 100;
    el.style.setProperty("--wsfc-sx", String(sx / 100));
    el.style.setProperty("--wsfc-sy", String(sy / 100));
    el.fit = !popup && !!panelMeta(p)?.fit && rowsOf(p) > 0 && p.fit !== false && this._focus == null;
    el.hass = this.hass;
    if (p.type === "heading") el.bar = p.show_bar && this._config.panel_bar !== false ? this._renderBar() : null;
    // A stack skips children that are toggled off or hiding themselves; the others fill the space.
    if (p.type === "stack" && !popup) {
      el.hiddenKids = (p.panels || []).map((c, j) => !!c && (this._isHidden(c, `${i}.${j}`) || this._isEmpty(c))).join(",");
    }
    return el;
  }

  static styles = [chipStyles, tileStyles, css`
    :host {
      display: block;
      --wsfc-gap: 12px;
      --wsfc-row: 110px;
      --wsfc-radius: var(--ha-card-border-radius, 16px);
      --wsfc-tile-bg: var(--wsfc-panel-background, rgba(127, 127, 127, 0.08));
    }
    ha-card.wsfc {
      display: flex;
      flex-direction: column;
      gap: var(--wsfc-gap);
      padding: var(--wsfc-gap);
      box-sizing: border-box;
      position: relative;
    }
    ha-card.full {
      /* Fill the view below the dashboard header; the grid scrolls inside. */
      height: calc(100vh - var(--header-height, 56px) - 16px);
      height: calc(100dvh - var(--header-height, 56px) - 16px);
      min-height: 480px;
    }
    /* The grid keeps its natural height (a definite-height grid would let
       Chrome shrink multi-row tiles below their content); the scroller fills
       the card and scrolls. */
    .scroller { min-height: 0; }
    .full .scroller { flex: 1; overflow: auto; }

    /* Animated card background: panels float over it, semi-transparent. */
    ha-card.animated { overflow: hidden; isolation: isolate; }
    ha-card.animated > :not(.bg) { position: relative; z-index: 1; }
    ha-card.animated { --wsfc-tile-bg: rgba(var(--rgb-card-background-color, 28, 28, 28), var(--wsfc-panel-opacity, 0.55)); }
    ha-card.animated .tile:not(.bare):not(.hero):not(.stack) { backdrop-filter: blur(var(--wsfc-panel-blur, 6px)); -webkit-backdrop-filter: blur(var(--wsfc-panel-blur, 6px)); }
    /* Editing: a still gradient instead of the animation, and no blur. */
    ha-card.animated.lite { background: linear-gradient(180deg, #24425f 0%, #172a3c 55%, #10202e 100%); }
    ha-card.animated.lite .tile:not(.bare):not(.hero):not(.stack) { backdrop-filter: none; -webkit-backdrop-filter: none; }
    /* Per-panel background: see-through (panel opacity), solid, or none. */
    .tile.bg-translucent { background: var(--wsfc-tile-bg); padding: 12px 14px; }
    ha-card.animated:not(.lite) .tile.bg-translucent { backdrop-filter: blur(var(--wsfc-panel-blur, 6px)); -webkit-backdrop-filter: blur(var(--wsfc-panel-blur, 6px)); }
    .tile.bg-solid { background: var(--ha-card-background, var(--card-background-color, #1c1c1c)); padding: 12px 14px; }
    .tile.bg-none { background: transparent; }
    ha-card .tile.bg-solid, ha-card .tile.bg-none { backdrop-filter: none; -webkit-backdrop-filter: none; }
    ha-card.animated .dialog { --wsfc-tile-bg: var(--ha-card-background, var(--card-background-color, #1c1c1c)); }
    .bg { z-index: 0; border-radius: inherit; }
    /* Editor preview only (like AlertTicker's test-mode banner). */
    .unsaved { order: -1; align-self: center; position: relative; z-index: 2; margin: calc(-1 * var(--wsfc-gap)) 0 0; padding: 3px 12px;
      background: rgba(255, 165, 0, 0.92); color: #000; font-size: 12px; font-weight: 700; letter-spacing: 0.03em;
      border-radius: 0 0 10px 10px; pointer-events: none; }
    .bgimg { position: absolute; inset: 0; background-position: center; pointer-events: none; }
    .bgimg::after { content: ""; position: absolute; inset: 0; background: rgba(0, 0, 0, var(--dim, 0.25)); border-radius: inherit; }

    /* "Tap to open larger": the tile is a live preview; one tap opens the pop-up. */
    /* Fit-to-panel tiles: their content doesn't size the rows (contain: size);
       the tile fills its rows (at least its own height) and the panel shrinks
       its content to fit. */
    .tile.fit { overflow: hidden; contain: size; }
    .tile.fit > :not(.expand):not(.tap-open):not(.collapse) { flex: 1 1 0; min-height: 0; }
    /* Strict fit: content taller than the panel scrolls inside it. */
    .tile.strict > :not(.expand):not(.tap-open):not(.collapse) { overflow: auto; scrollbar-width: thin; }
    /* Collapsed to the title header. */
    .tile.collapsed { min-height: 0 !important; height: auto !important; max-height: 56px; overflow: hidden; contain: none; }
    .tile.collapsed > :not(.expand):not(.tap-open):not(.collapse) { max-height: 32px; overflow: hidden; }
    .collapse {
      position: absolute; top: 8px; right: 34px; z-index: 3;
      border: 0; background: transparent; color: var(--secondary-text-color);
      cursor: pointer; padding: 4px; border-radius: 50%; line-height: 0;
    }
    .tile:not(:has(.expand)) .collapse { right: 8px; }
    .collapse ha-icon { --mdc-icon-size: 18px; }
    .collapse:hover { color: var(--primary-text-color); }
    .collapse:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }
    .tile.can-collapse .collapse ~ * { --wsfc-head-pad: 56px; }
    .tile.can-collapse:not(:has(.expand)) .collapse ~ * { --wsfc-head-pad: 28px; }
    .tile.tap { cursor: pointer; }
    /* The live preview never takes the pointer (a map would swallow taps), and
       its own stacking (Leaflet panes) stays under the open button. */
    .tile.tap > :not(.tap-open) { pointer-events: none; position: relative; z-index: 0; }
    .tap-open {
      position: absolute; inset: 0; z-index: 4;
      border: 0; padding: 0; margin: 0; background: transparent; cursor: pointer;
      border-radius: inherit; display: flex; align-items: flex-start; justify-content: flex-end;
    }
    /* Same corner icon as the expand button on other panels. */
    .tap-open span {
      display: inline-flex; margin: 8px; padding: 4px; border-radius: 50%; line-height: 0;
      color: var(--secondary-text-color);
    }
    .tap-open:hover span { color: var(--primary-text-color); }
    .tap-open ha-icon { --mdc-icon-size: 18px; }
    .tile .tap-open ~ * { --wsfc-head-pad: 28px; }
    .tap-open:focus-visible { outline: 2px solid var(--primary-color); outline-offset: -2px; }

    .title-row { display: flex; align-items: center; gap: 10px; }
    .title-row ha-icon { --mdc-icon-size: 30px; color: var(--primary-color); }
    .title-row .title { font-size: 26px; font-weight: 700; }
    .title-row .subtitle { font-size: 13px; color: var(--secondary-text-color); }

    .topbar { display: flex; gap: 8px; flex-wrap: wrap; flex: 0 0 auto; }
    .narrow .topbar { flex-wrap: nowrap; overflow-x: auto; scrollbar-width: none; }

    .grid {
      display: grid;
      gap: var(--wsfc-gap);
      grid-template-columns: repeat(12, minmax(0, 1fr));
      grid-auto-rows: auto;
      align-content: start;
    }
    .expand {
      position: absolute; top: 8px; right: 8px; z-index: 3;
      border: 0; background: transparent; color: var(--secondary-text-color);
      cursor: pointer; padding: 4px; border-radius: 50%; line-height: 0;
    }
    .expand ha-icon { --mdc-icon-size: 18px; }
    .tile .expand ~ * { --wsfc-head-pad: 28px; }
    .empty { color: var(--secondary-text-color); padding: 24px; text-align: center; grid-column: 1 / -1; }

    .scrim {
      position: fixed; inset: 0; z-index: 10;
      background: rgba(0, 0, 0, 0.55);
      display: flex; align-items: center; justify-content: center;
      padding: 16px; box-sizing: border-box;
    }
    .dialog {
      width: min(1100px, 100%);
      height: min(760px, 100%);
      background: var(--ha-card-background, var(--card-background-color, #1c1c1c));
      box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
    }
  `];
}

if (!customElements.get(CARD_TYPE)) customElements.define(CARD_TYPE, WeatherStationFlexCard);

window.customCards = window.customCards || [];
if (!window.customCards.some((c) => c.type === CARD_TYPE)) {
  window.customCards.push({
    type: CARD_TYPE,
    name: `${CARD_NAME} (Ltek)`,
    description: "Weather station dashboard: animated hero, metric tiles, graphs, wind, radar and maps, forecasts, sun & moon — in a resizable panel grid.",
    preview: false,
  });
}
console.info(`%c${CARD_NAME.toUpperCase()}%c ${CARD_VERSION}`, "color: orange; font-weight: bold; background: black", "color: white; font-weight: bold; background: dimgray");
