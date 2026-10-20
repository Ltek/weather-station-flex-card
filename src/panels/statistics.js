// Station graphs: the series are picked from your station through Weather
// Sources and drawn by a graph card. Presets follow the graphs on
// crookster.org's weather dashboard (temps, wind, pressure & humidity, solar &
// UV, rain).
//
// engine: auto (default) — cataseven's Statistics Graph Chart Card
//         (custom:statistics-graph-chart-card) when it is installed, otherwise
//         Home Assistant's built-in Statistics graph card. The custom card
//         supports per-series chart types and secondary / independent axes,
//         so presets mix bars, lines and areas and different units.
// Anything under `card:` is merged into the generated card config.
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

// Statistics Graph Chart Card presets: per-series style (`s`) and card options.
// Series keys are metric names; colors follow the card's metric palette.
export const SGCC_PRESETS = {
  temps: {
    card: { hours_to_show: 36, points_per_hour: 4 },
    series: {
      temperature: { color: "#ff7043", fill_opacity: 0.25, show_extrema: "always" },
      apparent_temperature: { color: "#ffb74d", show_fill: false, line_style: "dashed", line_width: 1.5 },
      dew_point: { color: "#26c6da", show_fill: false, line_width: 1.5 },
    },
  },
  wind: {
    card: { hours_to_show: 36, points_per_hour: 4, show_y2_axis: true, lower_bound_secondary: 0, upper_bound_secondary: 360 },
    metrics: ["wind_speed", "wind_gust_speed", "wind_bearing"],
    series: {
      wind_speed: { color: "#42a5f5", aggregate_func: "avg", show_fill: false, show_extrema: "always", show_extrema_min: false },
      wind_gust_speed: { color: "#ff9800", aggregate_func: "max", fill_opacity: 0.2, line_width: 1, show_extrema: "always", show_extrema_min: false },
      wind_bearing: { color: "#9e9e9e", y_axis: "secondary", show_fill: false, line_width: 1, smooth: false, graph_type: "step", unit: "°" },
    },
  },
  pressure_humidity: {
    card: { hours_to_show: 36, points_per_hour: 4, show_y2_axis: true },
    series: {
      pressure: { color: "#42a5f5", show_fill: false, decimals: 2 },
      humidity: { color: "#26a69a", y_axis: "secondary", fill_opacity: 0.2 },
    },
  },
  solar_uv: {
    card: { hours_to_show: 24, points_per_hour: 4, show_y2_axis: true, lower_bound: 0, lower_bound_secondary: 0 },
    series: {
      solar_radiation: { color: "#ffd54f", fill_opacity: 0.3, show_extrema: "always", show_extrema_min: false },
      uv_index: { color: "#ff7043", y_axis: "secondary", aggregate_func: "max", show_fill: false, line_width: 2 },
    },
  },
  rain: {
    card: { hours_to_show: 24, points_per_hour: 2, show_y2_axis: true, lower_bound: 0, lower_bound_secondary: 0 },
    series: {
      rain_rate: { color: "#7e57c2", graph_type: "bar", aggregate_func: "max", decimals: 2 },
      rain_today: { color: "#1e88e5", y_axis: "secondary", aggregate_func: "max", fill_opacity: 0.2, decimals: 2, smooth: false },
    },
  },
  temperature_range: {
    card: { hours_to_show: 720, group_by: "date" },
    series: { temperature: { color: "#ff7043", show_range_band: true, show_fill: false, show_extrema: "always" } },
  },
};

/** Which graph card a panel uses: "sgcc" or "builtin". */
export function statisticsEngine(p) {
  const e = p?.engine || "auto";
  if (e === "builtin") return "builtin";
  if (e === "sgcc") return "sgcc";
  return customElements.get("statistics-graph-chart-card") ? "sgcc" : "builtin";
}

/** Card config for a panel (either engine). */
export function statisticsCard(p, station, hass) {
  return statisticsEngine(p) === "sgcc" ? sgccCard(p, station, hass) : builtinCard(p, station, hass);
}

function sgccCard(p, station, hass) {
  const preset = SGCC_PRESETS[p.preset] || SGCC_PRESETS.temps;
  const base = STAT_PRESETS[p.preset] || STAT_PRESETS.temps;
  const metrics = Array.isArray(p.metrics) && p.metrics.length ? p.metrics : preset.metrics || base.metrics;
  const entities = Array.isArray(p.entities) && p.entities.length
    ? p.entities
    : metrics
        .map((m) => {
          const e = metricEntity(m, station, hass, p.entity_overrides?.[m]);
          if (!e) return null;
          const c = p.colors?.[m];
          return { entity: e, name: METRICS[m]?.label || m, ...(preset.series?.[m] || {}), ...(c ? { color: c } : {}) };
        })
        .filter(Boolean);
  // No secondary axis bounds/labels when nothing uses it (e.g. no direction sensor).
  const card = {
    type: "custom:statistics-graph-chart-card",
    // The panel draws the title and the tile; the card goes flat inside it.
    card_header: "",
    card_shadow: false,
    card_border: false,
    card_background_color: "transparent",
    card_padding: 0,
    height: "auto",
    show_legend: true,
    ...preset.card,
    entities,
  };
  if (!entities.some((e) => e.y_axis === "secondary")) {
    delete card.show_y2_axis;
    delete card.lower_bound_secondary;
    delete card.upper_bound_secondary;
  }
  if (p.days_to_show != null) card.hours_to_show = Number(p.days_to_show) * 24;
  if (p.hours_to_show != null) card.hours_to_show = Number(p.hours_to_show);
  return deepMerge(card, p.card || {});
}

/** Built-in Statistics graph card config for a panel. */
function builtinCard(p, station, hass) {
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

  connectedCallback() {
    super.connectedCallback();
    // Dashboard resources load in any order: switch to the custom card when it arrives.
    if (!customElements.get("statistics-graph-chart-card")) {
      customElements.whenDefined("statistics-graph-chart-card").then(() => this.requestUpdate());
    }
  }

  render() {
    if (!this.hass) return nothing;
    const c = this.config || {};
    const preset = STAT_PRESETS[c.preset] || STAT_PRESETS.temps;
    const cfg = statisticsCard(c, this.station, this.hass);
    if (!cfg.entities?.length) return html`${head(c, preset.icon, preset.title)}<div class="note">No station sensors found for this graph.</div>`;
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
