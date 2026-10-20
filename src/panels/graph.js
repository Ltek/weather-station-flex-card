// Graph panel: any number of series (station metrics or any entity) on up to
// two y-axes, with 24h history and 7d/30d long-term statistics. The Temp &
// Humidity panel is this graph with a preset series list.
import { LitElement, html, nothing } from "lit";
import { Chart, baseOptions, withAlpha, INLINE_PLUGINS } from "./chart.js";
import { panelStyles, seg, reading, head } from "./shared.js";
import { METRICS, metricEntity, digitsFor } from "../card/metrics.js";
import { entityValue } from "../card/resolve.js";
import { fetchHistory, fetchStatistics, decimate, bucketIncrease, bucketMean } from "../card/history.js";

const RANGE_HOURS = { "6h": 6, "12h": 12, "24h": 24, "48h": 48, "7d": 168, "30d": 720, "90d": 2160, "365d": 8760 };
const PALETTE = ["#ff9800", "#42a5f5", "#26a69a", "#ab47bc", "#ef5350", "#8d6e63", "#fdd835", "#78909c"];

export class WsfcGraph extends LitElement {
  static properties = {
    hass: { attribute: false },
    config: { attribute: false },
    station: { attribute: false },
    _range: { state: true },
    _error: { state: true },
  };
  static styles = panelStyles;

  // Overridden by presets.
  get defaultSeries() {
    return [{ metric: "temperature" }];
  }
  get defaultTitle() {
    return "Graph";
  }
  get defaultIcon() {
    return "mdi:chart-line";
  }

  _series() {
    const list = Array.isArray(this.config?.series) && this.config.series.length ? this.config.series : this.defaultSeries;
    return list.map((s, i) => {
      const m = METRICS[s.metric] || {};
      const entity = metricEntity(s.metric, this.station, this.hass, s.entity || this.config?.entities?.[s.metric]);
      const st = entity && this.hass.states[entity];
      return {
        ...s,
        entity,
        label: s.label || m.label || st?.attributes?.friendly_name || entity || "—",
        // Panel colors (set in the Series list) win over the preset's own colors.
        color: this.config?.colors?.[s.metric] || s.color || m.color || PALETTE[i % PALETTE.length],
        axis: s.axis === "right" ? "right" : "left",
        style: s.style || (m.chart === "bar" ? "bar" : "line"),
        cumulative: s.cumulative ?? m.cumulative ?? false,
        unit: st?.attributes?.unit_of_measurement || "",
      };
    });
  }

  _ranges() {
    const r = this.config?.ranges;
    return (Array.isArray(r) && r.length ? r : ["24h", "7d", "30d"]).filter((x) => RANGE_HOURS[x]);
  }

  render() {
    if (!this.hass) return nothing;
    const ranges = this._ranges();
    const range = this._range || this.config?.range || ranges[0];
    const series = this._series();
    const rangeSel = ranges.length > 1 ? seg(ranges.map((v) => ({ value: v, label: v })), range, (v) => (this._range = v), "History range") : nothing;
    return html`
      ${head(this.config, this.defaultIcon, this.defaultTitle, rangeSel)}
      ${this.config?.show_readings === false
        ? nothing
        : html`<div class="readings">
            ${series.map((s) => {
              const v = entityValue(this.hass, s.entity);
              return reading(this, { label: s.label, value: v?.value, unit: v?.unit, digits: digitsFor(s.metric, v?.unit || "", s.digits), color: s.color, entity: s.entity });
            })}
          </div>`}
      <div class="body"><canvas aria-label=${`${this.config?.title || this.defaultTitle} history`}></canvas></div>
      ${this._error ? html`<div class="note">${this._error}</div>` : nothing}
    `;
  }

  updated() {
    const range = this._range || this.config?.range || this._ranges()[0];
    const series = this._series();
    const key = JSON.stringify([range, series.map((s) => [s.entity, s.style, s.axis, s.color, s.cumulative]), this.hass?.themes?.darkMode]);
    if (key !== this._loadedKey || Date.now() - (this._loadedAt || 0) > 5 * 60e3) {
      this._loadedKey = key;
      this._loadedAt = Date.now();
      this._load(range, series).catch((e) => (this._error = `History unavailable: ${e?.message || e}`));
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._chart?.destroy();
    this._chart = null;
    this._loadedKey = "";
  }

  async _load(range, series) {
    const hours = RANGE_HOURS[range] || 24;
    const ids = series.map((s) => s.entity).filter(Boolean);
    const data = new Map();
    if (hours <= 48) {
      const hist = await fetchHistory(this.hass, ids, hours);
      for (const s of series) {
        const pts = hist[s.entity] || [];
        const b = hours <= 12 ? 15 * 60e3 : 3600e3;
        const p = s.style === "bar" ? (s.cumulative ? bucketIncrease(pts, b) : bucketMean(pts, b)) : decimate(pts);
        data.set(s, { line: p.map((q) => ({ x: q.t, y: q.v })) });
      }
    } else {
      const period = hours > 24 * 10 ? "day" : "hour";
      const st = await fetchStatistics(this.hass, ids, hours / 24, period);
      for (const s of series) {
        const pts = st[s.entity] || [];
        const k = s.style === "bar" && s.cumulative ? "change" : "mean";
        data.set(s, {
          line: pts.map((p) => ({ x: p.t, y: p[k] })),
          min: pts.map((p) => ({ x: p.t, y: p.min })),
          max: pts.map((p) => ({ x: p.t, y: p.max })),
        });
      }
    }
    this._error = ids.length ? undefined : "No sensors found for this graph.";
    this._draw(hours, series, data);
  }

  _draw(hours, series, data) {
    const canvas = this.renderRoot.querySelector("canvas");
    if (!canvas) return;
    const opts = baseOptions(this, hours, this.hass?.locale?.language);
    const left = series.find((s) => s.axis === "left"), right = series.find((s) => s.axis === "right");
    const axis = (s, pos) => {
      const pct = s?.unit === "%";
      const a = {
        position: pos,
        grid: pos === "left" ? { color: opts._grid } : { drawOnChartArea: false },
        ticks: { color: opts._text, maxTicksLimit: 6, callback: (v) => `${+v.toFixed(2)}${s?.unit && s.unit.length <= 3 ? s.unit : ""}` },
      };
      if (pct) Object.assign(a, { min: 0, max: 100 });
      // Non-negative quantities (UV, irradiance, lux, rain, wind) start at zero.
      const nonNeg = series.filter((x) => x.axis === pos).every((x) => /uv_index|solar_radiation|illuminance|rain|wind|humidity/.test(x.metric || ""));
      if (nonNeg && series.some((x) => x.axis === pos)) a.min = a.min ?? 0;
      if (series.some((x) => x.axis === (pos === "left" ? "left" : "right") && x.style === "bar")) a.beginAtZero = true;
      const c = this.config || {};
      const mn = c[`${pos}_min`], mx = c[`${pos}_max`];
      if (mn != null && mn !== "") a.min = Number(mn);
      if (mx != null && mx !== "") a.max = Number(mx);
      return a;
    };
    if (left || !right) opts.scales.y = axis(left, "left");
    if (right) opts.scales.y2 = axis(right, "right");
    const datasets = [];
    series.forEach((s, i) => {
      const d = data.get(s);
      if (!d) return;
      const yAxisID = s.axis === "right" ? "y2" : "y";
      const ds = { label: s.label, data: d.line, borderColor: s.color, yAxisID, order: i + 1 };
      if (s.style === "bar") Object.assign(ds, { type: "bar", backgroundColor: withAlpha(s.color, 0.6), borderWidth: 0, borderRadius: 2, order: 50 + i, barPercentage: 0.9, categoryPercentage: 1 });
      else if (s.style === "area") Object.assign(ds, { backgroundColor: withAlpha(s.color, 0.13), fill: "origin", borderColor: withAlpha(s.color, 0.75), borderWidth: 1 });
      else if (s.style === "dashed") Object.assign(ds, { borderDash: [5, 4], borderWidth: 1.5 });
      datasets.push(ds);
      // Min–max band behind a line on statistics ranges (first line by default).
      const band = s.band ?? (i === 0 && s.style === "line");
      if (band && d.min && d.max && s.style !== "bar") {
        datasets.push(
          { label: `${s.label} max`, _band: true, data: d.max, borderWidth: 0, pointRadius: 0, yAxisID, order: 90, fill: "+1", backgroundColor: withAlpha(s.color, 0.15) },
          { label: `${s.label} min`, _band: true, data: d.min, borderWidth: 0, pointRadius: 0, yAxisID, order: 91 }
        );
      }
    });
    opts.plugins.tooltip.filter = (item) => !item.dataset._band;
    if (this._chart) this._chart.destroy();
    this._chart = new Chart(canvas, { type: "line", data: { datasets }, options: opts, plugins: INLINE_PLUGINS });
  }
}

export const PRESET_SERIES = {
  temp_humidity: [
    { metric: "temperature" },
    { metric: "dew_point", style: "dashed" },
    { metric: "humidity", axis: "right", style: "area", color: "#42a5f5" },
  ],
  uv_solar: [
    { metric: "uv_index", style: "area", color: "#ffa726" },
    { metric: "solar_radiation", axis: "right", color: "#ffd54f" },
  ],
  graph: [{ metric: "temperature" }],
};

class WsfcTempHumidity extends WsfcGraph {
  get defaultSeries() {
    return PRESET_SERIES.temp_humidity;
  }
  get defaultTitle() {
    return "Temperature & Humidity";
  }
  get defaultIcon() {
    return "mdi:thermometer-water";
  }
}

class WsfcUvSolar extends WsfcGraph {
  get defaultSeries() {
    return PRESET_SERIES.uv_solar;
  }
  get defaultTitle() {
    return "UV & Solar radiation";
  }
  get defaultIcon() {
    return "mdi:weather-sunny-alert";
  }
}

customElements.get("wsfc-panel-graph") || customElements.define("wsfc-panel-graph", WsfcGraph);
customElements.get("wsfc-panel-temp-humidity") || customElements.define("wsfc-panel-temp-humidity", WsfcTempHumidity);
customElements.get("wsfc-panel-uv-solar") || customElements.define("wsfc-panel-uv-solar", WsfcUvSolar);
