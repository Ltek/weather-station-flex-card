// Station graphs: Home Assistant's built-in Statistics graph card, with the
// series picked from your station through Weather Sources. Presets follow the
// graphs on crookster.org's weather dashboard (temps, wind, pressure &
// humidity, solar & UV, rain). Anything under `card:` overrides the preset —
// it is passed straight to the Statistics graph card.
import { LitElement, html, css, nothing } from "lit";
import { panelStyles, head } from "./shared.js";
import { metricEntity, METRICS } from "../card/metrics.js";
import { deepMerge } from "../card/config.js";

export const STAT_PRESETS = {
  temps: {
    title: "Temperatures", icon: "mdi:thermometer-lines",
    metrics: ["temperature", "apparent_temperature", "dew_point"],
    card: { days_to_show: 2, period: "5minute", chart_type: "line", stat_types: ["mean"] },
  },
  wind: {
    title: "Wind", icon: "mdi:weather-windy",
    metrics: ["wind_speed", "wind_gust_speed"],
    card: { days_to_show: 2, period: "5minute", chart_type: "line", stat_types: ["mean", "max"] },
  },
  pressure_humidity: {
    title: "Pressure & humidity", icon: "mdi:gauge",
    metrics: ["pressure", "humidity"],
    card: { days_to_show: 2, period: "5minute", chart_type: "line", stat_types: ["mean"] },
  },
  solar_uv: {
    title: "Solar & UV", icon: "mdi:weather-sunny-alert",
    metrics: ["solar_radiation", "uv_index"],
    card: { days_to_show: 1, period: "5minute", chart_type: "line", stat_types: ["mean", "max"] },
  },
  rain: {
    title: "Rain", icon: "mdi:weather-pouring",
    metrics: ["rain_rate", "rain_today"],
    card: { days_to_show: 1, period: "hour", chart_type: "bar", stat_types: ["max"] },
  },
  temperature_range: {
    title: "Daily temperature range", icon: "mdi:thermometer-chevron-up",
    metrics: ["temperature"],
    card: { days_to_show: 30, period: "day", chart_type: "line", stat_types: ["min", "mean", "max"] },
  },
};

/** Statistics graph card config for a panel. */
export function statisticsCard(p, station, hass) {
  const preset = STAT_PRESETS[p.preset] || STAT_PRESETS.temps;
  const metrics = Array.isArray(p.metrics) && p.metrics.length ? p.metrics : preset.metrics;
  const entities = Array.isArray(p.entities) && p.entities.length
    ? p.entities
    : metrics
        .map((m) => {
          const e = metricEntity(m, station, hass, p.entity_overrides?.[m]);
          return e ? { entity: e, name: METRICS[m]?.label || m } : null;
        })
        .filter(Boolean);
  const card = { type: "statistics-graph", ...preset.card, entities };
  for (const k of ["days_to_show", "period", "chart_type", "stat_types", "hide_legend"]) if (p[k] != null) card[k] = p[k];
  return deepMerge(card, p.card || {});
}

class WsfcStatistics extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false }, _err: { state: true } };
  static styles = [
    panelStyles,
    css`
      .host { flex: 1; min-height: 0; }
      .host > * { --ha-card-background: transparent; --ha-card-box-shadow: none; --ha-card-border-width: 0; --card-padding: 0; height: 100%; }
    `,
  ];

  render() {
    if (!this.hass) return nothing;
    const c = this.config || {};
    const preset = STAT_PRESETS[c.preset] || STAT_PRESETS.temps;
    const cfg = statisticsCard(c, this.station, this.hass);
    if (!cfg.entities.length) return html`${head(c, preset.icon, preset.title)}<div class="note">No station sensors found for this graph.</div>`;
    this._ensure(cfg);
    if (this._el) this._el.hass = this.hass;
    return html`${c.show_title === false ? nothing : head(c, preset.icon, preset.title)}
      ${this._err ? html`<div class="note">${this._err}</div>` : html`<div class="host">${this._el || nothing}</div>`}`;
  }

  async _ensure(cfg) {
    const json = JSON.stringify(cfg);
    if (json === this._json) return;
    this._json = json;
    try {
      const helpers = await window.loadCardHelpers?.();
      if (!helpers) throw new Error("Home Assistant card helpers unavailable");
      this._el = helpers.createCardElement(cfg);
      this._el.hass = this.hass;
      this._err = undefined;
      this.requestUpdate();
    } catch (e) {
      this._err = `Statistics graph failed to load: ${e?.message || e}`;
    }
  }
}

customElements.get("wsfc-panel-statistics") || customElements.define("wsfc-panel-statistics", WsfcStatistics);
