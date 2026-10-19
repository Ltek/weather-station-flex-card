// Panels that render Weather Flex sections: hero, flex (any Weather Flex
// config), forecast and sun_moon. A panel's `flex:` holds Weather Flex config
// (exactly what Weather Flex Card takes) deep-merged over the type's base.
import { LitElement, html, css, nothing } from "lit";
import { panelStyles, head } from "./shared.js";
import { CoreSlot, deepMerge } from "../card/core.js";

// Bases per panel type. The editor diffs against these, so changing a base
// changes what existing configs look like — treat them like defaults.
export const FLEX_BASES = {
  hero: {
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
  },
  forecast: {
    forecast: { mode: "chart", show_sun_times: true, use_color_thresholds: true },
    wfc: {
      order: ["hourly", "daily"],
      current: { show: false },
      details: { show: false },
      hourly: { show: true },
      daily: { show: true },
      sun_position: { show: false },
      sun_arc: { show: false },
    },
  },
  sun_moon: {
    wfc: {
      order: ["sun_arc", "sun_position"],
      current: { show: false },
      details: { show: false },
      hourly: { show: false },
      daily: { show: false },
      sun_arc: { show: true, night_moon: true, show_ss_icons: true, height: 100 },
      sun_position: { show: true, height: 28, timeframe_mode: "day", ss_markers_position: "overlay", times_position: "below" },
    },
  },
  hourly: {
    forecast: { mode: "chart", show_sun_times: true, use_color_thresholds: true },
    wfc: {
      order: ["hourly"],
      current: { show: false }, details: { show: false }, hourly: { show: true }, daily: { show: false },
      sun_position: { show: false }, sun_arc: { show: false },
    },
  },
  daily: {
    forecast: { mode: "chart", use_color_thresholds: true },
    wfc: {
      order: ["daily"],
      current: { show: false }, details: { show: false }, hourly: { show: false }, daily: { show: true },
      sun_position: { show: false }, sun_arc: { show: false },
    },
  },
  sky_bar: {
    wfc: {
      order: ["sun_position"],
      current: { show: false }, details: { show: false }, hourly: { show: false }, daily: { show: false }, sun_arc: { show: false },
      sun_position: {
        show: true, height: 34, timeframe_mode: "hours", timeframe_hours: 24,
        ss_markers_position: "overlay", times_position: "below",
        forecast_icons: "above", forecast_temps: "above", forecast_temp_with_icon: true, forecast_every: 2,
      },
    },
  },
  sun: {
    wfc: {
      order: ["sun_arc"],
      current: { show: false }, details: { show: false }, hourly: { show: false }, daily: { show: false }, sun_position: { show: false },
      sun_arc: { show: true, night_moon: true, show_ss_icons: true, height: 110, baseline_mode: "sky" },
    },
  },
  // Generic: Weather Flex Card's own defaults (current header + daily forecast).
  flex: {},
};

// Hero size presets by tile width (applied under the user's own settings).
const HERO_LARGE = {
  wfc: { current: { header_temp_size: 72, header_state_size: 24, header_icon_size: 96, clock_font_size: 56, clock_date_font_size: 18 } },
};
// Narrow: the clock moves under the conditions so the condition, icon and
// temperature keep the top-left corner.
const HERO_NARROW = {
  wfc: { current: { clock_placement: "below-right", clock_font_size: 26, clock_date_font_size: 12 } },
};

// Weather Flex sizes its ha-card to its sections (height:auto !important).
// In a hero tile the card should fill the tile so its animated background
// does too. Adopted sheets come after the card's own <style> in cascade order.
let fillSheet;
function fillTile(core) {
  const root = core?.shadowRoot;
  if (!root || root.__wsfcFill) return;
  if (!fillSheet) {
    fillSheet = new CSSStyleSheet();
    fillSheet.replaceSync("ha-card { min-height: 100% !important; box-sizing: border-box; }");
  }
  root.adoptedStyleSheets = [...root.adoptedStyleSheets, fillSheet];
  root.__wsfcFill = true;
}

/** Base config (with the station's entity/sources) for a flex-based panel. */
export function flexBase(type, station) {
  return { ...(FLEX_BASES[type] || {}), entity: station?.entity, metric_sources: station?.metric_sources };
}

const coreStyles = css`
  .core { margin: 0 -4px; flex: 1 0 auto; }
  .core > * { --ha-card-background: transparent; --card-padding: 4px; --ha-card-box-shadow: none; --ha-card-border-width: 0; }
  .err { color: var(--error-color, #db4437); font-size: 12px; }
`;

class WsfcFlexPanel extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false }, _size: { state: true } };
  static styles = [panelStyles, coreStyles];
  type = "flex";
  defaultTitle = "Weather";
  defaultIcon = "mdi:weather-partly-cloudy";

  constructor() {
    super();
    this._slot = new CoreSlot();
  }

  _coreConfig() {
    return deepMerge(flexBase(this.type, this.station), this.config?.flex || {});
  }

  render() {
    if (!this.hass || !this.station?.entity) return nothing;
    const core = this._slot.update(this._coreConfig(), this.hass);
    // Generic flex panels show a title only when one is set.
    const showHead = this.type === "flex" ? !!this.config?.title : this.config?.show_title !== false;
    return html`
      ${showHead ? head(this.config, this.defaultIcon, this.defaultTitle) : nothing}
      <div class="core">${core}</div>
      ${this._slot.error ? html`<div class="err">${this._slot.error}</div>` : nothing}
      ${this.extra()}
    `;
  }

  extra() {
    return nothing;
  }
}

class WsfcHeroPanel extends WsfcFlexPanel {
  type = "hero";
  static properties = { ...WsfcFlexPanel.properties, cardBg: { attribute: false } };
  static styles = [
    panelStyles,
    coreStyles,
    css`
      .core { margin: 0; display: flex; }
      .core > * { flex: 1; height: 100%; --ha-card-border-radius: var(--wsfc-radius, 16px); --card-padding: 16px; }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    this._ro = new ResizeObserver(([e]) => {
      const w = e.contentRect.width;
      const size = w >= 900 ? "large" : w < 560 ? "narrow" : "normal";
      if (size !== this._size) this._size = size;
    });
    this._ro.observe(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this._ro?.disconnect();
  }

  _coreConfig() {
    let cfg = flexBase("hero", this.station);
    if (this._size === "large") cfg = deepMerge(cfg, HERO_LARGE);
    if (this._size === "narrow") cfg = deepMerge(cfg, HERO_NARROW);
    cfg = deepMerge(cfg, this.config?.flex || {});
    // Options on the panel itself win over its Weather Flex config.
    if (this.config?.sky_bar === false) cfg = deepMerge(cfg, { wfc: { sun_position: { show: false } } });
    // The card draws the animated background behind every panel: the hero
    // becomes transparent and stops animating on its own.
    if (this.cardBg) cfg = deepMerge(cfg, { show_condition_effects: false, wfc: { card: { bg_color: "transparent" } } });
    return cfg;
  }

  updated() {
    fillTile(this._slot.el);
  }

  render() {
    if (!this.hass || !this.station?.entity) return nothing;
    return html`<div class="core">${this._slot.update(this._coreConfig(), this.hass)}</div>
      ${this._slot.error ? html`<div class="err">${this._slot.error}</div>` : nothing}`;
  }
}

class WsfcForecastPanel extends WsfcFlexPanel {
  type = "forecast";
  defaultTitle = "Forecast";
  defaultIcon = "mdi:calendar-week";
}
class WsfcHourlyPanel extends WsfcFlexPanel {
  type = "hourly";
  defaultTitle = "Hourly forecast";
  defaultIcon = "mdi:clock-outline";
}
class WsfcDailyPanel extends WsfcFlexPanel {
  type = "daily";
  defaultTitle = "Daily forecast";
  defaultIcon = "mdi:calendar-week";
}
class WsfcSkyBarPanel extends WsfcFlexPanel {
  type = "sky_bar";
  defaultTitle = "Sky";
  defaultIcon = "mdi:theme-light-dark";
  render() {
    // A title only when one is set — the bar reads fine on its own.
    if (!this.hass || !this.station?.entity) return nothing;
    return html`${this.config?.title ? head(this.config, this.defaultIcon, "") : nothing}
      <div class="core">${this._slot.update(this._coreConfig(), this.hass)}</div>
      ${this._slot.error ? html`<div class="err">${this._slot.error}</div>` : nothing}`;
  }
}

customElements.get("wsfc-panel-flex") || customElements.define("wsfc-panel-flex", WsfcFlexPanel);
customElements.get("wsfc-panel-hero") || customElements.define("wsfc-panel-hero", WsfcHeroPanel);
customElements.get("wsfc-panel-forecast") || customElements.define("wsfc-panel-forecast", WsfcForecastPanel);
customElements.get("wsfc-panel-hourly") || customElements.define("wsfc-panel-hourly", WsfcHourlyPanel);
customElements.get("wsfc-panel-daily") || customElements.define("wsfc-panel-daily", WsfcDailyPanel);
customElements.get("wsfc-panel-sky-bar") || customElements.define("wsfc-panel-sky-bar", WsfcSkyBarPanel);

export { WsfcFlexPanel };
