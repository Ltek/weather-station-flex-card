// Background preview in the editor (Appearance → Background, magnifying glass):
// the card's animated background for any condition, by day or night, with the
// card's effects, speeds and low-power setting.
import { LitElement, html, css } from "lit";
import { animSpeedVars, LOW_POWER_VARS } from "../card/animation-speed.js";

export const CONDITIONS = [
  ["sunny", "Sunny"], ["clear-night", "Clear night"], ["partlycloudy", "Partly cloudy"], ["cloudy", "Cloudy"],
  ["fog", "Fog"], ["rainy", "Rainy"], ["pouring", "Pouring"], ["lightning", "Lightning"], ["lightning-rainy", "Lightning and rain"],
  ["hail", "Hail"], ["snowy", "Snowy"], ["snowy-rainy", "Sleet (snow and rain)"], ["windy", "Windy"], ["windy-variant", "Windy with clouds"],
  ["exceptional", "Exceptional"],
];

class WsfcBgPreview extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, condition: {}, time: {} };
  static styles = css`
    :host { display: block; }
    .box { position: relative; height: 200px; border-radius: var(--ltek-radius, 12px); overflow: hidden;
      background: var(--ha-card-background, var(--card-background-color, #1c1c1c)); border: 1px solid var(--divider-color, rgba(127,127,127,.25)); }
    .tag { position: absolute; left: 10px; bottom: 8px; z-index: 2; font-size: var(--ltek-fs-small, 12px); font-weight: 600; padding: 3px 9px; border-radius: 999px;
      background: rgba(0, 0, 0, 0.45); color: #fff; }
  `;

  render() {
    const c = this.config || {}, h = this.hass;
    const ent = h?.states?.[c.entity];
    const cond = this.condition || ent?.state || "partlycloudy";
    const night = this.time === "night" || (this.time !== "day" && cond === "clear-night");
    const a = ent?.attributes || {};
    const vars = [c.anim_low_power ? LOW_POWER_VARS : "", ...animSpeedVars(c)].filter(Boolean).join(";");
    const label = (CONDITIONS.find(([v]) => v === cond) || [, cond])[1];
    return html`<div class="box" style=${vars}>
      <wsfc-animation-provider .hass=${h} .wsfcNight=${night}
        .weatherEntity=${{ ...(ent || { entity_id: c.entity, attributes: {} }), state: cond }}
        .config=${{ entity: c.entity, show_condition_effects: c.background_effects ?? true, show_moon_phase: c.background_moon_phase ?? true }}
        .currentForecast=${{ wind_speed: a.wind_speed, wind_bearing: a.wind_bearing }}></wsfc-animation-provider>
      <span class="tag">${label} · ${night ? "Night" : "Day"}</span>
    </div>`;
  }
}

customElements.get("wsfc-bg-preview") || customElements.define("wsfc-bg-preview", WsfcBgPreview);
