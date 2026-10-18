// Forecast panel: Weather Flex's Hourly + Daily sections. Any Weather Flex
// config can be pasted under `flex:` to override the defaults below.
import { LitElement, html, css } from "lit";
import { panelStyles } from "./shared.js";
import { CoreSlot, deepMerge } from "../card/core.js";

class WsfcForecast extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false } };
  static styles = [
    panelStyles,
    css`
      .core { margin: 0 -4px; }
      .core > * { --ha-card-background: transparent; --card-padding: 4px; --ha-card-box-shadow: none; --ha-card-border-width: 0; }
    `,
  ];

  constructor() {
    super();
    this._slot = new CoreSlot();
  }

  _coreConfig() {
    const base = {
      entity: this.station?.entity,
      metric_sources: this.station?.metric_sources,
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
    };
    return deepMerge(base, this.config?.flex || {});
  }

  render() {
    if (!this.hass) return html``;
    return html`
      <div class="head"><ha-icon icon="mdi:calendar-week"></ha-icon><span class="title">${this.config?.title || "Forecast"}</span></div>
      <div class="core">${this._slot.update(this._coreConfig(), this.hass)}</div>
    `;
  }
}

customElements.get("wsfc-panel-forecast") || customElements.define("wsfc-panel-forecast", WsfcForecast);
