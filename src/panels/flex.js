// Panels that render Weather Flex sections: hero, chips, forecast, hourly,
// daily and sky_tracker. A panel's `flex:` holds Weather Flex config
// (exactly what Weather Flex Card takes) deep-merged over the type's base.
import { LitElement, html, css, nothing } from "lit";
import { panelStyles, head } from "./shared.js";
import { CoreSlot, deepMerge } from "../card/core.js";
import { renderFacts, factStyles } from "./astro-facts.js";

// Bases per panel type. The editor diffs against these, so changing a base
// changes what existing configs look like — treat them like defaults.
export const FLEX_BASES = {
  hero: {
    // Weather Flex shows the weather entity's name (e.g. "OpenWeatherMap")
    // under the condition. In a station dashboard the readings come from the
    // station, so that label misleads; a blank name hides it (Weather Flex's
    // documented way). Set a Name in the hero editor to show one.
    name: " ",
    show_condition_effects: true,
    show_moon_phase: true,
    // The animation switches to its night sky (moon, dark) after sunset only
    // when sun times are on.
    forecast: { show_sun_times: true },
    wfc: {
      order: ["current", "details"],
      current: {
        show: true,
        clock_show_time: true,
        clock_show_date: true,
        clock_placement: "right",
        // Auto (0): the clock and date size themselves from the hero panel.
        clock_font_size: 0,
        clock_date_font_size: 0,
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
      sun_position: { show: false },
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
  // Sky Tracker: the Sun Position arc with the full Sky Bar (gradient, time
  // labels, forecast row) as its baseline. trackerConfig() applies the
  // panel's own options (layers, timeframe, moon) on top.
  sky_tracker: {
    wfc: {
      order: ["sun_arc"],
      current: { show: false }, details: { show: false }, hourly: { show: false }, daily: { show: false },
      sun_arc: {
        show: true, height: 50, baseline_mode: "sky",
        night_moon: true, moon_icon: "phase", sun_icon: "mdi:white-balance-sunny",
        labels_position: 74, show_ss_icons: true, show_captions: false, show_base_ticks: true,
        time_font_size: 11, ss_icon_size: 20,
      },
      sun_position: {
        show: false, height: 40,
        timeframe_mode: "hours", timeframe_hours: 24, timeframe_anchor: "now_center",
        times_position: "above", ticks_position: "overlay", ticks_every: 4,
        weather_adjust: true, ss_markers_position: "overlay",
        forecast_every: "midticks", forecast_font_size: 11, forecast_icon_size: 18,
        forecast_metric_detail_icons: true,
        forecast_metric_order: ["temps", "icons", "precipitation_probability", "wind_speed", "humidity", "cloud_coverage", "uv_index", "wind_bearing"],
        forecast_metric_pos: { temps: "below", icons: "overlay", wind_speed: "below", humidity: "below", cloud_coverage: "below" },
      },
    },
  },
};
// Current Weather Metrics (type chips): the hero's metrics section on its own.
FLEX_BASES.chips = {
  wfc: {
    order: ["details"],
    current: { show: false },
    details: { ...FLEX_BASES.hero.wfc.details, items: FLEX_BASES.hero.wfc.details.items.map((x) => ({ ...x })) },
    hourly: { show: false }, daily: { show: false }, sun_position: { show: false }, sun_arc: { show: false },
  },
};

// Hero size presets by tile width (applied under the user's own settings).
const HERO_LARGE = {
  wfc: { current: { header_temp_size: 72, header_state_size: 24, header_icon_size: 96 } },
};
// Narrow: the clock moves under the conditions so the condition, icon and
// temperature keep the top-left corner.
const HERO_NARROW = {
  wfc: { current: { clock_placement: "below-right" } },
};

/**
 * Hero sizes (px) for a tile of width w and height h (0 = sized to content),
 * times `scale` (1 = 100 %). The temperature leads; everything else follows it.
 */
export function heroAutoSizes(w, h, scale = 1) {
  let temp = Math.max(30, Math.min(120, w * 0.07));
  if (h > 0) temp = Math.min(temp, Math.max(30, h * 0.36));
  temp *= scale;
  const r = (x) => Math.round(x);
  return {
    header_temp_size: r(temp),
    header_state_size: r(Math.max(12, temp * 0.33)),
    header_icon_size: r(temp * 1.3),
    clock: r(temp * 0.78),
    date: r(Math.max(10, temp * 0.25)),
    chip_scale: Math.round(Math.max(0.6, Math.min(2.5, (temp / 64) * 1.05)) * 100) / 100,
  };
}

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
  type = "";
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
    // Chips show a title only when one is set (or show_title is on).
    const showHead = this.config?.show_title ?? (this.titleOnlyWhenSet ? !!this.config?.title : true);
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
  static properties = { ...WsfcFlexPanel.properties, cardBg: { attribute: false }, lite: { attribute: false } };
  static styles = [
    panelStyles,
    coreStyles,
    factStyles,
    css`
      :host { position: relative; }
      /* Sun & moon facts across the bottom of the hero, over its background. */
      .hero-facts { position: absolute; left: 16px; right: 16px; bottom: 12px; z-index: 1; pointer-events: none; }
      .hero-facts .facts { margin: 0; }
      .hero-facts.top { bottom: auto; top: 12px; }
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
      // Auto sizes follow the tile; re-render only when they change.
      const h = this.parentElement?.classList.contains("auto") ? 0 : e.contentRect.height;
      const key = `${Math.round(w / 8)}:${Math.round(h / 8)}`;
      if (key !== this._dimKey) { this._dimKey = key; this._dims = { w, h }; this.requestUpdate(); }
    });
    this._ro.observe(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this._ro?.disconnect();
  }

  get _auto() {
    const { w = 0, h = 0 } = this._dims || {};
    return heroAutoSizes(w || 700, h, Math.max(0.3, Math.min(3, Number(this.config?.scale ?? 100) / 100)));
  }

  _coreConfig() {
    let cfg = flexBase("hero", this.station);
    if (this._size === "large") cfg = deepMerge(cfg, HERO_LARGE);
    if (this._size === "narrow") cfg = deepMerge(cfg, HERO_NARROW);
    cfg = deepMerge(cfg, this.config?.flex || {});
    // "Set scale to Auto": every size follows the tile (and the scale %), over
    // any size set in the sections editor.
    if (this.config?.auto_scale) {
      const a = this._auto;
      cfg = deepMerge(cfg, { wfc: {
        current: { header_temp_size: a.header_temp_size, header_state_size: a.header_state_size, header_icon_size: a.header_icon_size, clock_font_size: 0, clock_date_font_size: 0 },
        details: { chip_scale: a.chip_scale, chip_text_size: "", chip_icon_size: "", global_icon_size: Math.round(22 * a.chip_scale), global_text_size: Math.round(14 * a.chip_scale) },
      } });
    }
    // The card draws the animated background behind every panel: the hero
    // becomes transparent and stops animating on its own.
    if (this.cardBg) cfg = deepMerge(cfg, { show_condition_effects: false, wfc: { card: { bg_color: "transparent" } } });
    // While editing, the hero's own animation is paused too.
    else if (this.lite) cfg = deepMerge(cfg, { show_condition_effects: false });
    return cfg;
  }

  updated() {
    fillTile(this._slot.el);
  }

  render() {
    if (!this.hass || !this.station?.entity) return nothing;
    // Values for sizes left at Auto (0) in the sections editor, e.g. the clock and date.
    const a = this._auto;
    const facts = renderFacts(this.hass, this.config || {});
    const top = (this.config?.fact_position || "bottom") === "top";
    return html`<div class="core" style="--wfc-clock-auto:${a.clock}px;--wfc-clock-date-auto:${a.date}px">${this._slot.update(this._coreConfig(), this.hass)}</div>
      ${facts === nothing ? nothing : html`<div class="hero-facts ${top ? "top" : ""}">${facts}</div>`}
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
/**
 * Weather Flex config for a Sky Tracker panel: base + the panel's flex:
 * override, then the panel's own options, which always win:
 *   show_arc / show_sky  layers (both = arc over the sky)
 *   timeframe            hours | day | sunrise_sunset (one window for both)
 *   hours, anchor        for "hours": span and now_left | now_center
 *   moon, moon_phase     moon marker at night, drawn in its current phase
 */
export function trackerConfig(p, station, offsetHours = 0) {
  const cfg = deepMerge(flexBase("sky_tracker", station), p?.flex || {});
  const w = cfg.wfc;
  const sa = (w.sun_arc ||= {}), sp = (w.sun_position ||= {});
  const arc = p?.show_arc !== false, sky = p?.show_sky !== false;
  const tf = p?.timeframe || "hours";
  const hours = Number(p?.hours ?? 24), anchor = p?.anchor || "now_center";
  sa.timeframe_mode = tf;
  sp.timeframe_mode = tf === "sunrise_sunset" ? "match_arc" : tf;
  sa.timeframe_hours = sp.timeframe_hours = hours;
  sa.timeframe_anchor = sp.timeframe_anchor = anchor;
  sa.night_moon = p?.moon !== false;
  // Step buttons: the window moved into the future by this many hours.
  if (offsetHours) sa.timeframe_offset_hours = sp.timeframe_offset_hours = offsetHours;
  if (p?.moon_phase === false) { if (sa.moon_icon === "phase") sa.moon_icon = "mdi:weather-night"; }
  else sa.moon_icon = "phase";
  if (arc) {
    w.order = ["sun_arc"];
    sa.show = true;
    sa.baseline_mode = sky ? "sky" : "line";
    sp.show = false; // drawn by the arc as its baseline
  } else {
    w.order = ["sun_position"];
    sa.show = false;
    sp.show = sky;
  }
  return cfg;
}

class WsfcChipsPanel extends WsfcFlexPanel {
  type = "chips";
  defaultTitle = "Current Weather Metrics";
  defaultIcon = "mdi:format-list-bulleted-square";
  titleOnlyWhenSet = true;
}

class WsfcSkyTracker extends WsfcFlexPanel {
  type = "sky_tracker";
  defaultTitle = "Sky Tracker";
  defaultIcon = "mdi:sun-clock-outline";
  static styles = [...WsfcFlexPanel.styles, factStyles, css`
    .steps { display: inline-flex; align-items: center; gap: 4px; flex: 0 0 auto; }
    .headfacts { flex: 1; min-width: 0; margin-right: 8px; }
    .head:has(.headfacts) .steps { margin-left: auto; }
    .headfacts .facts { margin: 0; }
    .steps .when { font-size: 12px; color: var(--secondary-text-color); margin-right: 6px; white-space: nowrap; }
    .steps button { display: inline-grid; place-items: center; min-width: 28px; height: 28px; padding: 0 8px; border-radius: 999px; cursor: pointer; font: inherit; font-size: 12px;
      border: 1px solid var(--divider-color, rgba(127,127,127,.35)); background: transparent; color: var(--primary-text-color); }
    .steps button ha-icon { --mdc-icon-size: 18px; }
    .steps button:disabled { opacity: 0.35; cursor: default; }
    .steps button:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }
  `];
  static properties = { ...WsfcFlexPanel.properties, _offset: { state: true } };

  _coreConfig() {
    return trackerConfig(this.config, this.station, this._offset || 0);
  }

  // Step buttons: ◀ / Now / ▶ move the window by `step_hours`, up to
  // `max_ahead` hours, and return to now after `return_after` seconds.
  _step(dir) {
    const c = this.config || {};
    const step = Number(c.step_hours) || 12;
    const max = Number(c.max_ahead ?? 48);
    const next = dir === 0 ? 0 : Math.max(0, Math.min(max, (this._offset || 0) + dir * step));
    this._offset = next;
    clearTimeout(this._back);
    const after = Number(c.return_after ?? 60);
    if (next && after > 0) this._back = setTimeout(() => (this._offset = 0), after * 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this._back);
  }

  _steps() {
    const c = this.config || {};
    const off = this._offset || 0;
    const step = Number(c.step_hours) || 12;
    const max = Number(c.max_ahead ?? 48);
    let label = "";
    if (off) {
      const lang = this.hass?.locale?.language;
      const hours = Number(c.hours) || 24;
      const anchor = c.anchor || "now_center";
      const t0 = Date.now() + off * 3600e3 - (anchor === "now_center" && (c.timeframe || "hours") === "hours" ? (hours / 2) * 3600e3 : 0);
      const d = new Date(t0), today = new Date();
      const days = Math.round((new Date(d).setHours(0, 0, 0, 0) - new Date(today).setHours(0, 0, 0, 0)) / 864e5);
      const day = days === 0 ? "Today" : days === 1 ? "Tomorrow" : new Intl.DateTimeFormat(lang, { weekday: "long" }).format(d);
      label = (c.timeframe || "hours") === "hours" ? `${day} ${new Intl.DateTimeFormat(lang, { hour: "numeric" }).format(d)} onward` : day;
    }
    return html`<span class="steps">
      ${label ? html`<span class="when">${label}</span>` : nothing}
      <button type="button" ?disabled=${off <= 0} @click=${() => this._step(-1)} aria-label="Earlier" title="Earlier"><ha-icon icon="mdi:chevron-left"></ha-icon></button>
      <button type="button" class="now" ?disabled=${off === 0} @click=${() => this._step(0)} title="Back to now">Now</button>
      <button type="button" ?disabled=${off + step > max} @click=${() => this._step(1)} aria-label="Later" title="Later"><ha-icon icon="mdi:chevron-right"></ha-icon></button>
    </span>`;
  }

  render() {
    if (!this.hass || !this.station?.entity) return nothing;
    const c = this.config || {};
    if (c.show_arc === false && c.show_sky === false) return html`${head(c, this.defaultIcon, this.defaultTitle)}<div class="note">Turn on the sun arc or the sky gradient.</div>`;
    const showHead = c.show_title ?? !!c.title;
    const pos = c.fact_position || "below";
    const facts = renderFacts(this.hass, c);
    // "header": the facts share the header row with the title and step buttons.
    const right = pos === "header" && facts !== nothing
      ? html`<span class="headfacts">${facts}</span>${c.show_steps ? this._steps() : nothing}`
      : c.show_steps ? this._steps() : nothing;
    const withHead = showHead || c.show_steps || (pos === "header" && facts !== nothing);
    return html`${withHead ? head(showHead ? c : { ...c, show_title: false }, this.defaultIcon, this.defaultTitle, right) : nothing}
      ${pos === "above" ? facts : nothing}
      <div class="core">${this._slot.update(this._coreConfig(), this.hass)}</div>
      ${this._slot.error ? html`<div class="err">${this._slot.error}</div>` : nothing}
      ${pos === "below" ? facts : nothing}`;
  }

}

customElements.get("wsfc-panel-chips") || customElements.define("wsfc-panel-chips", WsfcChipsPanel);
customElements.get("wsfc-panel-hero") || customElements.define("wsfc-panel-hero", WsfcHeroPanel);
customElements.get("wsfc-panel-forecast") || customElements.define("wsfc-panel-forecast", WsfcForecastPanel);
customElements.get("wsfc-panel-hourly") || customElements.define("wsfc-panel-hourly", WsfcHourlyPanel);
customElements.get("wsfc-panel-daily") || customElements.define("wsfc-panel-daily", WsfcDailyPanel);
customElements.get("wsfc-panel-sky-tracker") || customElements.define("wsfc-panel-sky-tracker", WsfcSkyTracker);

export { WsfcFlexPanel };
