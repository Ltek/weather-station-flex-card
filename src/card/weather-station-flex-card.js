// Weather Station Flex Card (Ltek)
// A weather-station dashboard in one card: a 12-column grid of panels (hero,
// bulletin, metric tiles, graphs, wind, radar/maps, forecasts, sun & moon,
// any Weather Flex sections, any Home Assistant card). Panel buttons toggle
// panels or open them as pop-ups. Scales from a normal card to a full-screen
// dashboard.
import { LitElement, html, css, nothing } from "lit";
import { CARD_VERSION, CARD_TYPE, CARD_NAME } from "./constants.js";
import { chipStyles } from "../panels/shared.js";
import { panelMeta, rowsOf, inBarOf, normalizePanels, layoutOf } from "./panels.js";
import "../panels/flex.js";
import "../panels/graph.js";
import "../panels/wind.js";
import "../panels/radar.js";
import "../panels/sun-moon.js";
import "../panels/metric.js";
import "../panels/info.js";
import "../editor/editor.js";

const NARROW_PX = 720;
const MEDIUM_PX = 1100;

class WeatherStationFlexCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _hidden: { state: true }, // Set of panel keys toggled off
    _popup: { state: true }, // index of the open pop-up panel, or null
    _focus: { state: true }, // index of an expanded grid panel, or null
    _size: { state: true }, // "wide" | "medium" | "narrow"
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
  }

  // A panel's identity for remembering its toggle: explicit id, else type + position.
  _key(p, i) {
    return p.id || `${i}:${p.type}`;
  }

  _storageKey() {
    const c = this._config;
    return `wsfc:${c.storage_key || `${location.pathname}|${c.entity}|${c.title || ""}`}`;
  }

  _loadHidden(panels) {
    const def = new Set(panels.map((p, i) => (p.show === false ? this._key(p, i) : null)).filter(Boolean));
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
    return panels.map((p, i) => this._key(p, i)).join(",");
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
    super.connectedCallback();
    this._ro = new ResizeObserver(([e]) => {
      const w = e.contentRect.width;
      const c = this._config || {};
      const size = w < (c.narrow_width || NARROW_PX) ? "narrow" : w < (c.medium_width || MEDIUM_PX) ? "medium" : "wide";
      if (size !== this._size) this._size = size;
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
    this._ro?.disconnect();
    window.removeEventListener("keydown", this._onKey);
  }

  // Shared "station" config handed to every panel: entity + Weather Sources.
  get _station() {
    return { entity: this._config.entity, metric_sources: this._config.metric_sources };
  }

  render() {
    if (!this._config || !this.hass) return nothing;
    const c = this._config;
    const full = c.layout === "fullscreen";
    const style = [
      c.row_height ? `--wsfc-row:${c.row_height}px` : "",
      c.gap != null ? `--wsfc-gap:${c.gap}px` : "",
    ].join(";");
    const barInHeading = c.panels.some((p) => p.type === "heading" && p.show_bar);
    return html`
      <ha-card class=${`wsfc ${full ? "full" : ""} ${this._size || "wide"}`} style=${style}>
        ${c.title ? this._renderTitle() : nothing}
        ${c.panel_bar === false || barInHeading ? nothing : html`<div class="topbar">${this._renderBar()}</div>`}
        <div class="grid">${this._renderPanels()}</div>
        ${this._popup != null ? this._renderPopup() : nothing}
      </ha-card>
    `;
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
    const items = panels.map((p, i) => [p, i]).filter(([p]) => inBarOf(p));
    if (!items.length) return nothing;
    return items.map(([p, i]) => {
      const meta = panelMeta(p);
      const popup = p.display === "popup";
      const active = popup ? this._popup === i : !this._hidden.has(this._key(p, i));
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
    return panelMeta(p).label.replace(/ \(.*\)$/, "");
  }

  _toggle(p, i) {
    if (p.display === "popup") {
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

  _renderPanels() {
    const panels = this._config.panels;
    let idx = panels.map((p, i) => i).filter((i) => panels[i].display !== "popup" && !this._hidden.has(this._key(panels[i], i)));
    if (this._focus != null) idx = [this._focus];
    if (!idx.length) return html`<div class="empty">All panels are hidden — use the panel buttons to show one.</div>`;
    const size = this._size || "wide";
    return idx.map((i) => {
      const p = panels[i];
      const meta = panelMeta(p);
      const lay = layoutOf(p, size);
      const span = this._focus != null ? 12 : lay.span;
      const rows = this._focus != null ? Math.max(rowsOf(p), 5) : lay.rows;
      // Tracks are content-sized; a panel spanning N rows gets the height of N row units.
      const style = `grid-column: span ${span};${rows ? `grid-row: span ${rows};min-height:calc(${rows} * var(--wsfc-row) + ${rows - 1} * var(--wsfc-gap));` : ""}`;
      const bare = meta.bare || p.type === "hero";
      const expandable = !bare && p.type !== "metric" && size !== "narrow";
      return html`<section class="tile ${p.type} ${meta.bare ? "bare" : ""} ${rows ? "" : "auto"}" style=${style}>
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
    const p = this._config.panels[i];
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
    const key = `${popup ? "pop" : "grid"}:${i}:${JSON.stringify(p)}`;
    let el = this._els.get(key);
    if (!el) {
      el = document.createElement(panelMeta(p).tag);
      this._els.set(key, el);
      // Drop stale elements from earlier configs of this slot.
      for (const k of this._els.keys()) if (k !== key && k.startsWith(`${popup ? "pop" : "grid"}:${i}:`)) this._els.delete(k);
    }
    el.config = p;
    el.station = this._station;
    el.hass = this.hass;
    if (p.type === "heading") el.bar = p.show_bar && this._config.panel_bar !== false ? this._renderBar() : null;
    return el;
  }

  static styles = [chipStyles, css`
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
    .full .grid { flex: 1; overflow: auto; min-height: 0; padding-bottom: 2px; }

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
    .tile {
      position: relative;
      background: var(--wsfc-tile-bg);
      border-radius: var(--wsfc-radius);
      padding: 12px 14px;
      min-width: 0;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      overflow: hidden;
    }
    .tile.auto { grid-row: auto; }
    /* The hero's Weather Flex card draws its own background and sizes to its sections. */
    .tile.hero { background: transparent; padding: 0; }
    .tile.bare { background: transparent; padding: 4px 2px; overflow: visible; }
    .tile > :not(.expand) { flex: 1; min-height: 0; }
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
