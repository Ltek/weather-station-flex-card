// Weather Station Flex Card (Ltek)
// A full-screen capable weather station dashboard: an animated hero built from
// Weather Flex sections, a panel bar to switch panels on/off, and panels for
// Temp & Humidity, Wind, Radar, Forecast and Sun & Moon.
import { LitElement, html, css, nothing } from "lit";
import { CARD_VERSION, CARD_TYPE, CARD_NAME, PANELS, PANEL_IDS } from "./constants.js";
import { CoreSlot, deepMerge } from "./core.js";
import "../panels/temp-humidity.js";
import "../panels/wind.js";
import "../panels/radar.js";
import "../panels/forecast.js";
import "../panels/sun-moon.js";

const PANEL_TAG = {
  temp_humidity: "wsfc-panel-temp-humidity",
  wind: "wsfc-panel-wind",
  radar: "wsfc-panel-radar",
  forecast: "wsfc-panel-forecast",
  sun_moon: "wsfc-panel-sun-moon",
};
const NARROW_PX = 720;

// Hero defaults: Weather Flex sections tuned for a large header. Anything under
// `hero:` in the card config (including a pasted Weather Flex `wfc:` block)
// is deep-merged over this.
const HERO_DEFAULTS = {
  show_condition_effects: true,
  show_moon_phase: true,
  wfc: {
    order: ["current", "details", "sun_position"],
    current: {
      show: true,
      clock_show_time: true,
      clock_show_date: true,
      clock_placement: "right",
      clock_font_size: 40,
      clock_date_font_size: 14,
      clock_contrast: "auto",
      clock_date_contrast: "auto",
    },
    details: {
      show: true,
      chips: true,
      chip_hide_when_off: true,
      chip_show_name: true,
      items: [
        { key: "apparent_temperature", show: true },
        { key: "humidity", show: true },
        { key: "dew_point", show: true },
        { key: "wind_speed", show: true },
        { key: "pressure", show: true },
        { key: "uv_index", show: true },
      ],
    },
    sun_position: {
      show: true,
      height: 30,
      timeframe_mode: "hours",
      timeframe_hours: 24,
      ss_markers_position: "overlay",
      times_position: "below",
      forecast_icons: "above",
      forecast_temps: "above",
      forecast_temp_with_icon: true,
      forecast_every: 3,
    },
    hourly: { show: false },
    daily: { show: false },
    sun_arc: { show: false },
  },
};

// Hero header sizes scale up in full-screen layout.
const HERO_FULLSCREEN = {
  wfc: { current: { header_temp_size: 72, header_state_size: 24, header_icon_size: 96, clock_font_size: 56, clock_date_font_size: 18 } },
};

// On narrow screens the clock moves above the conditions so it can't collide
// with the headline temperature.
const HERO_NARROW = {
  wfc: { current: { clock_placement: "above-right", clock_font_size: 28, clock_date_font_size: 12, header_temp_size: 0, header_state_size: 0, header_icon_size: 0 } },
};

const DEFAULT_PANELS = PANEL_IDS.map((type) => ({ type }));

class WeatherStationFlexCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _on: { state: true }, // Set of visible panel indexes (wide layout)
    _tab: { state: true }, // active panel index (narrow layout)
    _focus: { state: true }, // index of an expanded panel, or null
    _narrow: { state: true },
  };

  static getStubConfig(hass) {
    const weather = Object.keys(hass?.states || {}).find((e) => e.startsWith("weather."));
    const dev = Object.values(hass?.devices || {}).find((d) => /ecowitt/i.test(d.manufacturer || ""));
    const sources = [];
    if (dev) sources.push({ ref: `device:${dev.id}` });
    if (weather) sources.push({ ref: weather });
    return { entity: weather || "weather.home", metric_sources: { sources }, layout: "auto" };
  }

  setConfig(config) {
    if (!config?.entity || !String(config.entity).startsWith("weather.")) {
      throw new Error("entity is required: the weather entity that supplies the forecast and condition (e.g. weather.openweathermap)");
    }
    const panels = (Array.isArray(config.panels) && config.panels.length ? config.panels : DEFAULT_PANELS).filter((p) => p && PANELS[p.type]);
    this._config = { ...config, panels };
    this._on = new Set(panels.map((p, i) => (p.show === false ? -1 : i)).filter((i) => i >= 0));
    if (this._tab == null || this._tab >= panels.length) this._tab = Math.max(0, panels.findIndex((p) => p.show !== false));
    this._focus = null;
    this._heroSlot ||= new CoreSlot();
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
      const narrow = e.contentRect.width < (this._config?.narrow_width || NARROW_PX);
      if (narrow !== this._narrow) this._narrow = narrow;
    });
    this._ro.observe(this);
    this._onKey = (e) => e.key === "Escape" && this._focus != null && (this._focus = null);
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

  _heroConfig() {
    const full = this._config.layout === "fullscreen";
    let cfg = deepMerge(HERO_DEFAULTS, full && !this._narrow ? HERO_FULLSCREEN : {});
    if (this._narrow) cfg = deepMerge(cfg, HERO_NARROW);
    cfg = deepMerge(cfg, this._config.hero || {});
    return { ...cfg, entity: this._config.entity, metric_sources: this._config.metric_sources };
  }

  render() {
    if (!this._config || !this.hass) return nothing;
    const c = this._config;
    const full = c.layout === "fullscreen";
    const hero = c.hero === false ? null : this._heroSlot.update(this._heroConfig(), this.hass);
    const style = [
      c.panel_min_width ? `--wsfc-panel-min:${c.panel_min_width}px` : "",
    ].join(";");
    return html`
      <ha-card class=${`wsfc ${full ? "full" : ""} ${this._narrow ? "narrow" : "wide"}`} style=${style}>
        ${hero ? html`<div class="hero">${hero}</div>` : nothing}
        ${c.panel_bar === false ? nothing : this._renderBar()}
        <div class="panels">${this._renderPanels()}</div>
      </ha-card>
    `;
  }

  _renderBar() {
    const panels = this._config.panels;
    return html`<div class="bar" role=${this._narrow ? "tablist" : "toolbar"} aria-label="Panels">
      ${panels.map((p, i) => {
        const meta = PANELS[p.type];
        const active = this._narrow ? this._tab === i : this._on.has(i);
        return html`<button
          type="button"
          class="chip ${active ? "on" : ""}"
          role=${this._narrow ? "tab" : nothing}
          aria-selected=${this._narrow ? String(active) : nothing}
          aria-pressed=${this._narrow ? nothing : String(active)}
          @click=${() => this._toggle(i)}
        >
          <ha-icon icon=${p.icon || meta.icon}></ha-icon><span>${p.title || meta.label}</span>
        </button>`;
      })}
    </div>`;
  }

  _toggle(i) {
    this._focus = null;
    if (this._narrow) {
      this._tab = i;
      return;
    }
    const on = new Set(this._on);
    on.has(i) ? on.delete(i) : on.add(i);
    this._on = on;
  }

  _renderPanels() {
    const panels = this._config.panels;
    let idx;
    if (this._focus != null) idx = [this._focus];
    else if (this._narrow) idx = [this._tab];
    else idx = panels.map((_, i) => i).filter((i) => this._on.has(i));
    if (!idx.length) return html`<div class="empty">All panels are hidden — tap a panel above to show it.</div>`;
    return idx.map((i) => {
      const p = panels[i];
      const span = this._focus == null && !this._narrow && p.span ? `grid-column: span ${p.span}` : "";
      return html`<section class="tile ${p.type}" style=${span} data-type=${p.type}>
        ${this._narrow
          ? nothing
          : html`<button class="expand" type="button" @click=${() => (this._focus = this._focus == null ? i : null)}
              aria-label=${this._focus == null ? `Expand ${PANELS[p.type].label}` : "Back to all panels"}>
              <ha-icon icon=${this._focus == null ? "mdi:arrow-expand" : "mdi:arrow-collapse"}></ha-icon>
            </button>`}
        ${this._panelEl(p, i)}
      </section>`;
    });
  }

  // Keep panel elements alive across toggles so charts/maps are not rebuilt.
  _panelEl(p, i) {
    this._panelEls ||= new Map();
    const key = `${i}:${p.type}`;
    let el = this._panelEls.get(key);
    if (!el) {
      el = document.createElement(PANEL_TAG[p.type]);
      this._panelEls.set(key, el);
    }
    el.config = p;
    el.station = this._station;
    el.hass = this.hass;
    return el;
  }

  static styles = css`
    :host {
      display: block;
      --wsfc-gap: 12px;
      --wsfc-radius: var(--ha-card-border-radius, 16px);
      --wsfc-tile-bg: var(--wsfc-panel-background, rgba(127, 127, 127, 0.08));
    }
    ha-card.wsfc {
      display: flex;
      flex-direction: column;
      gap: var(--wsfc-gap);
      padding: var(--wsfc-gap);
      overflow: hidden;
      box-sizing: border-box;
    }
    ha-card.full {
      /* Fill the view below the dashboard header. */
      height: calc(100vh - var(--header-height, 56px) - 16px);
      height: calc(100dvh - var(--header-height, 56px) - 16px);
      min-height: 560px;
    }
    .hero {
      position: relative;
      border-radius: var(--wsfc-radius);
      overflow: hidden;
      flex: 0 0 auto;
    }
    /* Weather Flex sizes its card to its sections (height:auto), so the hero
       grows with its content and the panels take the remaining height. */
    .hero > * { display: block; height: 100%; --ha-card-border-radius: var(--wsfc-radius); --ha-card-box-shadow: none; }

    .bar { display: flex; gap: 8px; flex-wrap: wrap; flex: 0 0 auto; }
    .narrow .bar { flex-wrap: nowrap; overflow-x: auto; scrollbar-width: none; }
    .chip {
      display: inline-flex; align-items: center; gap: 6px;
      font: inherit; font-size: 13px; white-space: nowrap;
      padding: 6px 12px; border-radius: 999px; cursor: pointer;
      color: var(--secondary-text-color);
      background: transparent;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.35));
      transition: background-color 0.15s, color 0.15s, border-color 0.15s;
    }
    .chip ha-icon { --mdc-icon-size: 18px; }
    .chip.on { color: var(--text-primary-color, #fff); background: var(--primary-color); border-color: var(--primary-color); }
    .chip:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }

    .panels {
      display: grid;
      gap: var(--wsfc-gap);
      grid-template-columns: repeat(auto-fit, minmax(var(--wsfc-panel-min, 340px), 1fr));
      grid-auto-rows: minmax(320px, auto);
      min-height: 0;
    }
    .full .panels { flex: 1; overflow: auto; align-content: start; }
    .narrow .panels { grid-template-columns: 1fr; }
    .tile {
      position: relative;
      background: var(--wsfc-tile-bg);
      border-radius: var(--wsfc-radius);
      padding: 12px 14px;
      min-width: 0;
      display: flex;
      flex-direction: column;
    }
    .tile > :not(.expand) { flex: 1; min-height: 0; }
    .expand {
      position: absolute; top: 8px; right: 8px; z-index: 2;
      border: 0; background: transparent; color: var(--secondary-text-color);
      cursor: pointer; padding: 4px; border-radius: 50%; line-height: 0;
    }
    .expand ha-icon { --mdc-icon-size: 18px; }
    .tile .expand ~ * { --wsfc-head-pad: 28px; }
    .empty { color: var(--secondary-text-color); padding: 24px; text-align: center; grid-column: 1 / -1; }
  `;
}

if (!customElements.get(CARD_TYPE)) customElements.define(CARD_TYPE, WeatherStationFlexCard);

window.customCards = window.customCards || [];
if (!window.customCards.some((c) => c.type === CARD_TYPE)) {
  window.customCards.push({
    type: CARD_TYPE,
    name: `${CARD_NAME} (Ltek)`,
    description: "Full-screen weather station dashboard: animated hero, Temp & Humidity, Wind, Radar, Forecast and Sun & Moon panels.",
    preview: false,
  });
}
console.info(`%c${CARD_NAME.toUpperCase()}%c ${CARD_VERSION}`, "color: orange; font-weight: bold; background: black", "color: white; font-weight: bold; background: dimgray");
