// Metric tile: one station value, today's min/max and a 24h sparkline
// (line, or bars for cumulative values like daily rain).
import { LitElement, html, svg, css, nothing } from "lit";
import { panelStyles, fmt, moreInfo } from "./shared.js";
import { METRICS, metricEntity, digitsFor, uvLevel, pressureThreshold } from "../card/metrics.js";
import { entityValue } from "../card/resolve.js";
import { fetchHistory, fetchToday, decimate, bucketIncrease, bucketMean } from "../card/history.js";

const REFRESH_MS = 5 * 60e3;

class WsfcMetric extends LitElement {
  static properties = {
    hass: { attribute: false },
    config: { attribute: false },
    station: { attribute: false },
    _series: { state: true },
    _today: { state: true },
  };
  static styles = [
    panelStyles,
    css`
      :host { cursor: pointer; }
      .top { display: flex; align-items: flex-start; gap: 6px; }
      .top ha-icon { --mdc-icon-size: 20px; color: var(--m-color); }
      .name { flex: 1; font-size: 13px; font-weight: 500; line-height: 20px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .mm { font-size: 11px; line-height: 1.3; text-align: right; white-space: nowrap; }
      .mm .lo { color: var(--wsfc-cold, #42a5f5); }
      .mm .hi { color: var(--wsfc-hot, #ef5350); }
      .val { font-size: 30px; font-weight: 600; line-height: 1.1; margin-top: 6px; white-space: nowrap; }
      .val small { font-size: 15px; font-weight: 400; margin-left: 3px; color: var(--wsfc-muted); }
      .cap { font-size: 12px; color: var(--wsfc-muted); min-height: 15px; margin-top: 2px; }
      .spark { flex: 1; min-height: 36px; margin-top: 6px; }
      .spark svg { width: 100%; height: 100%; display: block; overflow: visible; }
    `,
  ];

  get _metric() {
    return this.config?.metric || "temperature";
  }
  get _entity() {
    return metricEntity(this._metric, this.station, this.hass, this.config?.entity);
  }

  render() {
    if (!this.hass) return nothing;
    const m = METRICS[this._metric] || {};
    const eid = this._entity;
    const v = entityValue(this.hass, eid);
    const unit = this.config?.unit ?? v?.unit ?? "";
    const digits = digitsFor(this._metric, unit, this.config?.digits);
    const color = this.config?.color || m.color || "var(--primary-color)";
    const name = this.config?.title || this.config?.label || m.label || this.hass.states[eid]?.attributes?.friendly_name || "Value";
    if (!eid) return html`<div class="note">No sensor found for ${m.label || this._metric}. Set <code>entity</code> on this tile.</div>`;
    return html`
      <div class="top" style=${`--m-color:${color}`} @click=${() => moreInfo(this, eid)}>
        ${this.config?.show_icon === false ? nothing : html`<ha-icon icon=${this.config?.icon || m.icon || "mdi:gauge"}></ha-icon>`}
        ${this.config?.show_title === false ? html`<span class="name"></span>` : html`<span class="name">${name}</span>`}
        ${this.config?.show_minmax === false || !this._today
          ? nothing
          : html`<span class="mm"><span class="lo">Min ${fmt(this._today.min, digits)}</span><br /><span class="hi">Max ${fmt(this._today.max, digits)}</span></span>`}
      </div>
      <div @click=${() => moreInfo(this, eid)}>
        <div class="val">${typeof v?.value === "number" ? fmt(v.value, digits) : v?.value ?? "—"}<small>${unit}</small></div>
        <div class="cap">${this._caption(v, unit)}</div>
      </div>
      ${this.config?.chart === "none" ? nothing : html`<div class="spark" @click=${() => moreInfo(this, eid)}>${this._spark(color)}</div>`}
    `;
  }

  _caption(v, unit) {
    if (this.config?.caption) return this.config.caption;
    const m = METRICS[this._metric] || {};
    if (m.scale === "uv" && typeof v?.value === "number") return uvLevel(v.value);
    if (m.trend && this._trend) return this._trend;
    return "";
  }

  _spark(color) {
    const pts = this._series;
    if (!pts?.length) return nothing;
    const W = 200, H = 40;
    const vals = pts.map((p) => p.v).filter((x) => x != null);
    if (!vals.length) return nothing;
    const t0 = Date.now() - (this.config?.hours || 24) * 3600e3, t1 = Date.now();
    const x = (t) => ((t - t0) / (t1 - t0)) * W;
    const bars = (this.config?.chart || METRICS[this._metric]?.chart) === "bar";
    let lo = Math.min(...vals), hi = Math.max(...vals);
    if (bars) lo = 0;
    if (hi - lo < 1e-9) { hi += 1; lo = bars ? 0 : lo - 1; }
    const y = (v) => H - ((v - lo) / (hi - lo)) * H;
    if (bars) {
      const w = Math.max(2, (W / (this.config?.hours || 24)) * 0.7);
      return svg`<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true">
        ${pts.map((p) => (p.v > 0 ? svg`<rect x=${x(p.t) - w / 2} y=${y(p.v)} width=${w} height=${H - y(p.v)} rx="1" fill=${color}></rect>` : nothing))}
        <line x1="0" x2=${W} y1=${H} y2=${H} stroke=${color} stroke-opacity=".35"></line></svg>`;
    }
    let d = "", open = false;
    for (const p of pts) {
      if (p.v == null) { open = false; continue; }
      d += `${open ? "L" : "M"}${x(p.t).toFixed(1)} ${y(p.v).toFixed(1)}`;
      open = true;
    }
    const first = pts.find((p) => p.v != null), last = [...pts].reverse().find((p) => p.v != null);
    const area = `${d}L${x(last.t).toFixed(1)} ${H}L${x(first.t).toFixed(1)} ${H}Z`;
    const gid = `g${Math.random().toString(36).slice(2, 8)}`;
    return svg`<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true">
      <defs><linearGradient id=${gid} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color=${color} stop-opacity=".35"></stop><stop offset="1" stop-color=${color} stop-opacity="0"></stop></linearGradient></defs>
      <path d=${area} fill=${`url(#${gid})`}></path>
      <path d=${d} fill="none" stroke=${color} stroke-width="1.6" vector-effect="non-scaling-stroke" stroke-linejoin="round"></path></svg>`;
  }

  updated() {
    const eid = this._entity;
    if (!eid) return;
    const key = `${eid}|${this.config?.hours || 24}|${this.config?.chart}`;
    if (key === this._key && Date.now() - (this._at || 0) < REFRESH_MS) return;
    this._key = key;
    this._at = Date.now();
    this._load(eid).catch(() => {});
  }

  async _load(eid) {
    const hours = this.config?.hours || 24;
    const [hist, today] = await Promise.all([fetchHistory(this.hass, [eid], hours), fetchToday(this.hass, [eid])]);
    const pts = hist[eid] || [];
    const bars = (this.config?.chart || METRICS[this._metric]?.chart) === "bar";
    const cumulative = this.config?.cumulative ?? METRICS[this._metric]?.cumulative ?? false;
    this._series = bars ? (cumulative ? bucketIncrease(pts, 3600e3) : bucketMean(pts, 3600e3)) : decimate(pts, 160);
    const tv = (today[eid] || []).map((p) => p.v).filter((v) => v != null);
    this._today = tv.length ? { min: Math.min(...tv), max: Math.max(...tv) } : null;
    if (METRICS[this._metric]?.trend) {
      const cut = Date.now() - 3 * 3600e3;
      const before = [...pts].reverse().find((p) => p.t <= cut && p.v != null);
      const now = [...pts].reverse().find((p) => p.v != null);
      if (before && now) {
        const d = now.v - before.v, th = pressureThreshold(entityValue(this.hass, eid)?.unit || "");
        this._trend = d > th ? "Rising" : d < -th ? "Falling" : "Steady";
      }
    }
  }
}

customElements.get("wsfc-panel-metric") || customElements.define("wsfc-panel-metric", WsfcMetric);
