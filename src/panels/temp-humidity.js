// Temp & Humidity panel: current readings + ONE merged chart (temperature and
// dew point on the left axis, humidity as a filled area on the right axis).
// 24h uses raw history; 7d/30d use long-term statistics with a min–max band.
import { LitElement, html } from "lit";
import { Chart, baseOptions, withAlpha, INLINE_PLUGINS } from "./chart.js";
import { panelStyles, seg, reading } from "./shared.js";
import { pick, metricValue } from "../card/resolve.js";
import { fetchHistory, fetchStatistics, decimate } from "../card/history.js";

const RANGES = [
  { value: "24h", label: "24h", hours: 24 },
  { value: "7d", label: "7d", hours: 24 * 7 },
  { value: "30d", label: "30d", hours: 24 * 30 },
];

class WsfcTempHumidity extends LitElement {
  static properties = {
    hass: { attribute: false },
    config: { attribute: false },
    station: { attribute: false },
    _range: { state: true },
    _error: { state: true },
  };
  static styles = panelStyles;

  constructor() {
    super();
    this._range = undefined;
    this._chart = null;
    this._loadedKey = "";
  }

  _ids() {
    const c = this.config, s = this.station, h = this.hass;
    return {
      temperature: pick(c, s, h, "temperature"),
      dew_point: pick(c, s, h, "dew_point"),
      humidity: pick(c, s, h, "humidity"),
    };
  }

  render() {
    if (!this.hass) return html``;
    const range = this._range || this.config?.range || "24h";
    const s = this.station, h = this.hass;
    const t = metricValue(s, h, "temperature");
    const f = metricValue(s, h, "apparent_temperature");
    const d = metricValue(s, h, "dew_point");
    const u = metricValue(s, h, "humidity");
    return html`
      <div class="head">
        <ha-icon icon="mdi:thermometer-water"></ha-icon>
        <span class="title">${this.config?.title || "Temperature & Humidity"}</span>
        ${seg(RANGES, range, (v) => (this._range = v), "History range")}
      </div>
      <div class="readings">
        ${reading(this, { label: "Temperature", value: t?.value, unit: t?.unit, digits: 1, color: "var(--wsfc-temp)", entity: t?.entity })}
        ${f ? reading(this, { label: "Feels like", value: f.value, unit: f.unit, digits: 1, entity: f.entity }) : ""}
        ${reading(this, { label: "Dew point", value: d?.value, unit: d?.unit, digits: 1, color: "var(--wsfc-dew)", entity: d?.entity })}
        ${reading(this, { label: "Humidity", value: u?.value, unit: u?.unit || "%", color: "var(--wsfc-hum)", entity: u?.entity })}
      </div>
      <div class="body"><canvas aria-label="Temperature, dew point and humidity history"></canvas></div>
      ${this._error ? html`<div class="note">${this._error}</div>` : ""}
    `;
  }

  updated() {
    const range = this._range || this.config?.range || "24h";
    const ids = this._ids();
    const key = `${range}|${ids.temperature}|${ids.dew_point}|${ids.humidity}|${this.hass?.themes?.darkMode}`;
    // Re-query at most every 5 min (history.js caches), and on range/entity change.
    const stale = Date.now() - (this._loadedAt || 0) > 5 * 60e3;
    if (key !== this._loadedKey || stale) {
      this._loadedKey = key;
      this._loadedAt = Date.now();
      this._load(range, ids).catch((e) => {
        this._error = `History unavailable: ${e?.message || e}`;
      });
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._chart?.destroy();
    this._chart = null;
    this._loadedKey = "";
  }

  async _load(range, ids) {
    const r = RANGES.find((x) => x.value === range) || RANGES[0];
    const list = [ids.temperature, ids.dew_point, ids.humidity];
    let series;
    if (r.hours <= 48) {
      const hist = await fetchHistory(this.hass, list, r.hours);
      const line = (id) => decimate(hist[id] || []).map((p) => ({ x: p.t, y: p.v }));
      series = { temp: line(ids.temperature), dew: line(ids.dew_point), hum: line(ids.humidity) };
    } else {
      const period = r.hours > 24 * 10 ? "day" : "hour";
      const st = await fetchStatistics(this.hass, list, r.hours / 24, period);
      const m = (id, k = "mean") => (st[id] || []).map((p) => ({ x: p.t, y: p[k] }));
      series = {
        temp: m(ids.temperature),
        tmin: m(ids.temperature, "min"),
        tmax: m(ids.temperature, "max"),
        dew: m(ids.dew_point),
        hum: m(ids.humidity),
      };
    }
    this._error = undefined;
    this._draw(r.hours, series);
  }

  _draw(hours, s) {
    const canvas = this.renderRoot.querySelector("canvas");
    if (!canvas) return;
    const cs = getComputedStyle(this);
    const col = (n, fb) => cs.getPropertyValue(n).trim() || fb;
    const temp = col("--wsfc-temp", "#ff9800"), dew = col("--wsfc-dew", "#26c6da"), hum = col("--wsfc-hum", "#42a5f5");
    const opts = baseOptions(this, hours, this.hass?.locale?.language);
    const tUnit = metricValue(this.station, this.hass, "temperature")?.unit || "";
    opts.scales.y = {
      position: "left",
      grid: { color: opts._grid },
      ticks: { color: opts._text, callback: (v) => `${v}${tUnit}` },
    };
    opts.scales.h = {
      position: "right",
      min: 0,
      max: 100,
      grid: { drawOnChartArea: false },
      ticks: { color: opts._text, callback: (v) => `${v}%`, stepSize: 25 },
    };
    const datasets = [
      { label: "Temperature", data: s.temp, borderColor: temp, yAxisID: "y", order: 1 },
      { label: "Dew point", data: s.dew, borderColor: dew, borderDash: [5, 4], borderWidth: 1.5, yAxisID: "y", order: 2 },
      { label: "Humidity", data: s.hum, borderColor: withAlpha(hum, 0.7), backgroundColor: withAlpha(hum, 0.13), fill: "origin", borderWidth: 1, yAxisID: "h", order: 3 },
    ];
    if (s.tmin && s.tmax) {
      // Min–max band behind the mean temperature line.
      datasets.push(
        { label: "Temp max", data: s.tmax, borderWidth: 0, pointRadius: 0, yAxisID: "y", order: 4, fill: "+1", backgroundColor: withAlpha(temp, 0.15) },
        { label: "Temp min", data: s.tmin, borderWidth: 0, pointRadius: 0, yAxisID: "y", order: 5 }
      );
      opts.plugins.tooltip.filter = (item) => !item.dataset.label.startsWith("Temp m");
    }
    if (this._chart) this._chart.destroy();
    this._chart = new Chart(canvas, { type: "line", data: { datasets }, options: opts, plugins: INLINE_PLUGINS });
  }
}

customElements.get("wsfc-panel-temp-humidity") || customElements.define("wsfc-panel-temp-humidity", WsfcTempHumidity);
