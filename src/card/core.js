// Hosts a Weather Flex "core" (troinine base + ported Weather Flex sections)
// inside this card. Used by the hero, flex, forecast and sun_moon panels.
// The core is a normal Lovelace card element: it takes setConfig() + hass.
import { html } from "lit";
import { WeatherForecastCard } from "../../vendor/weather-forecast-card/src/weather-forecast-card";
import { WeatherForecastCardEditor } from "../../vendor/weather-forecast-card/src/editor/weather-forecast-card-editor";
import "../flex/sections.js";
import { deepMerge, deepDiff } from "./config.js";

export { deepMerge };
export const CORE_TAG = "wsfc-flex-core";
export const CORE_EDITOR_TAG = "wsfc-flex-core-editor";
if (!customElements.get(CORE_TAG)) customElements.define(CORE_TAG, WeatherForecastCard);

// Embedded Weather Flex editors come in two modes (set `wsfcMode` on the element):
//   "sections" — everything except Weather Sources (those are card-wide and
//                are edited once, in the card editor's Weather station section)
//   "sources"  — only the Weather Sources panel, opened
// Only this card's editor class (wsfc-flex-core-editor) is patched; Weather
// Flex Card's own editor is a different class and is untouched.
{
  const P = WeatherForecastCardEditor.prototype;
  const sourcesPanel = P._wfcWeatherSourcesPanel;
  const render = P.render;
  const updated = P.updated;
  P._wfcWeatherSourcesPanel = function () {
    return this.wsfcMode === "sections" ? "" : sourcesPanel.call(this);
  };
  P.render = function () {
    if (this.wsfcMode !== "sources") return render.call(this);
    if (!this.hass || !this._config) return "";
    return html`${this._wfcEditorStyle()}${sourcesPanel.call(this)}`;
  };
  P.updated = function (changed) {
    updated?.call(this, changed);
    // wsfcPanels: only show the Weather Flex editor panels relevant to this
    // panel type (matched by their titles).
    const keep = this.wsfcPanels;
    if (keep && this.wsfcMode !== "sources") {
      this.renderRoot?.querySelectorAll("details.wfc-panel, details.wsfc-panel").forEach((d) => {
        const t = d.querySelector(":scope > summary .wfc-panel-title, :scope > summary .wsfc-panel-title")?.textContent?.trim();
        d.hidden = !!t && !keep.includes(t);
      });
    }
    if (this.wsfcMode === "sources" && !this.__wsfcOpened) {
      const d = this.renderRoot?.querySelector("details.wfc-panel, details.wsfc-panel");
      if (d) {
        d.open = true;
        this.__wsfcOpened = true;
      }
    }
  };
}

/** Weather Flex sections build these sections were ported from. */
export const FLEX_SECTIONS_BUILD = WeatherForecastCard.__wfcBuild;

/** Weather Flex's own resolution of `config.wfc` (fills every default). */
export const resolveWfc = (config) => WeatherForecastCard.__wfcResolve(config);

/**
 * The fully resolved config the Weather Flex editor would emit for `base` with
 * no user edits — used to diff editor output down to just the user's changes.
 */
export function flexBaseline(base) {
  return { ...base, wfc: resolveWfc(base) };
}

/** Editor output -> the minimal override to store under a panel's `flex:`. */
export function flexOverride(emitted, base) {
  // Most Weather Flex editor actions emit a resolved `wfc`, but some (Weather
  // Sources) pass it through unresolved — resolve so both compare alike.
  const { entity: _e, metric_sources: _m, type: _t, ...rest } = { ...emitted, wfc: resolveWfc(emitted) };
  const { entity: _be, metric_sources: _bm, ...b } = flexBaseline(base);
  return deepDiff(rest, b) || {};
}

/**
 * Keeps one core element per slot and only calls setConfig when the config
 * actually changes (setConfig re-subscribes forecasts, so avoid churn).
 */
export class CoreSlot {
  constructor() {
    this.el = null;
    this._json = "";
    this.error = null;
  }
  update(config, hass) {
    const json = JSON.stringify(config);
    if (!this.el) this.el = document.createElement(CORE_TAG);
    if (json !== this._json) {
      this._json = json;
      try {
        this.el.setConfig(config);
        this.error = null;
      } catch (e) {
        this.error = e?.message || String(e);
        console.error("weather-station-flex-card: invalid Weather Flex config", e, config);
      }
    }
    if (hass && this.el.hass !== hass) this.el.hass = hass;
    return this.el;
  }
}
