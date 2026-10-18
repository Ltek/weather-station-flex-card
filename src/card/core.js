// Hosts a Weather Flex "core" (troinine base + ported Weather Flex sections)
// inside this card. Used for the hero, the Forecast panel and Sun & Moon.
// The core is a normal Lovelace card element: it takes setConfig() + hass.
import { WeatherForecastCard } from "../../vendor/weather-forecast-card/src/weather-forecast-card";
import "../../vendor/weather-forecast-card/src/editor/weather-forecast-card-editor";
import "../flex/sections.js";

export const CORE_TAG = "wsfc-flex-core";
if (!customElements.get(CORE_TAG)) customElements.define(CORE_TAG, WeatherForecastCard);

const isObj = (v) => v && typeof v === "object" && !Array.isArray(v);

/** Deep merge for config objects (arrays and scalars from `over` replace). */
export function deepMerge(base, over) {
  if (!isObj(over)) return over === undefined ? base : over;
  const out = { ...(isObj(base) ? base : {}) };
  for (const k of Object.keys(over)) out[k] = isObj(over[k]) && isObj(out[k]) ? deepMerge(out[k], over[k]) : over[k];
  return out;
}

/**
 * Keeps one core element per slot and only calls setConfig when the config
 * actually changes (setConfig re-subscribes forecasts, so avoid churn).
 */
export class CoreSlot {
  constructor() {
    this.el = null;
    this._json = "";
  }
  update(config, hass) {
    const json = JSON.stringify(config);
    if (!this.el) this.el = document.createElement(CORE_TAG);
    if (json !== this._json) {
      this._json = json;
      try {
        this.el.setConfig(config);
      } catch (e) {
        console.error("weather-station-flex-card: invalid section config", e, config);
      }
    }
    if (hass && this.el.hass !== hass) this.el.hass = hass;
    return this.el;
  }
}
