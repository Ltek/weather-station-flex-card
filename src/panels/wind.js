// Wind panel: live compass (direction, speed, gust) or a wind rose built from
// the last 24h of the station's own direction + speed history, plus one merged
// speed/gust chart underneath.
import { LitElement, html, svg, css } from "lit";
import { Chart, baseOptions, withAlpha, INLINE_PLUGINS, LEGEND_PLUGINS } from "./chart.js";
import { panelStyles, seg, reading, fmt, head } from "./shared.js";
import { cardinal } from "../card/metrics.js";
import { pick, metricValue } from "../card/resolve.js";
import { fetchHistory, decimate } from "../card/history.js";
import { roseEngine, windroseCard, WINDROSE_TAG } from "./windrose.js";


// Speed bins for the rose, in the sensor's own unit. Defaults suit mph; for
// km/h or m/s the config can override `rose_bins`.
const DEFAULT_BINS = { mph: [1, 5, 10, 15, 25], "km/h": [2, 8, 16, 24, 40], "m/s": [0.5, 2, 4.5, 7, 11], kn: [1, 4, 9, 13, 22] };
const BIN_COLORS = ["#90caf9", "#4fc3f7", "#26a69a", "#ffca28", "#ff7043", "#d32f2f"];

class WsfcWind extends LitElement {
  static properties = {
    hass: { attribute: false },
    config: { attribute: false },
    station: { attribute: false },
    _view: { state: true },
    _rose: { state: true },
    _error: { state: true },
  };
  static styles = [
    panelStyles,
    css`
      .top { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
      .top.center { justify-content: center; }
      /* Above the dial the chart is a strip, so the dial keeps its room. */
      .body.above { flex: 0 0 auto; height: 120px; min-height: 0; margin: 0 0 8px; }
      .top.center .dial { width: min(220px, 70%); }
      .dial { flex: 0 0 auto; width: min(180px, 42%); aspect-ratio: 1; }
      .dial svg { width: 100%; height: 100%; overflow: visible; }
      .side { flex: 1; min-width: 140px; display: flex; flex-direction: column; gap: 10px; }
      .legend { display: flex; flex-wrap: wrap; gap: 4px 10px; font-size: 11px; color: var(--wsfc-muted); }
      .legend i { display: inline-block; width: 10px; height: 10px; border-radius: 2px; margin-right: 4px; vertical-align: -1px; }
      .body { min-height: 100px; margin-top: 8px; }
      .ring { fill: none; stroke: var(--divider-color, rgba(127,127,127,.35)); }
      .tick { stroke: var(--secondary-text-color); opacity: .5; }
      .lbl { fill: var(--secondary-text-color); font-size: 11px; text-anchor: middle; dominant-baseline: central; }
      .lbl.n { fill: var(--primary-text-color); font-weight: 600; }
      .spd { fill: var(--primary-text-color); font-size: 26px; font-weight: 500; text-anchor: middle; }
      .unit { fill: var(--secondary-text-color); font-size: 11px; text-anchor: middle; }
      .ptr { fill: var(--wsfc-wind); transition: transform .8s ease; }
      .wr { min-height: 200px; }
      .wr > * { --ha-card-background: transparent; --ha-card-box-shadow: none; --ha-card-border-width: 0; display: block; }
    `,
  ];

  _ids() {
    const c = this.config, s = this.station, h = this.hass;
    return { speed: pick(c, s, h, "wind_speed"), gust: pick(c, s, h, "wind_gust_speed"), dir: pick(c, s, h, "wind_bearing") };
  }

  render() {
    if (!this.hass) return html``;
    const c = this.config || {};
    const view = this._view || c.view || "compass";
    const s = this.station, h = this.hass;
    const sp = metricValue(s, h, "wind_speed");
    const gu = metricValue(s, h, "wind_gust_speed");
    const di = metricValue(s, h, "wind_bearing");
    const unit = sp?.unit || gu?.unit || "";
    const wr = view === "rose" && roseEngine(c) === "windrose";
    const roseLabel = { value: "rose", label: wr || roseEngine(c) === "windrose" ? "Rose" : "Rose 24h" };
    const buttons = c.show_view_buttons === false ? "" : seg([{ value: "compass", label: "Compass" }, roseLabel], view, (v) => (this._view = v), "Wind view");
    // Readings: beside the dial, above, below or hidden. Auto: beside ours, hidden
    // with the Wind Rose Card (its corners show them).
    let rp = c.readings_position || "auto";
    if (rp === "auto") rp = wr ? "hidden" : "side";
    const readings = html`<div class="readings">
      ${reading(this, { label: "Speed", value: sp?.value, unit, digits: 1, color: "var(--wsfc-wind)", entity: sp?.entity })}
      ${reading(this, { label: "Gust", value: gu?.value, unit: gu?.unit || unit, digits: 1, color: "var(--wsfc-gust)", entity: gu?.entity })}
      ${reading(this, { label: `From ${cardinal(di?.value)}`, value: di?.value, unit: "°", entity: di?.entity })}
    </div>`;
    const legend = view === "rose" && !wr && c.show_legend !== false ? this._roseLegend(unit) : "";
    const chartTop = c.chart_position === "above";
    const chart = c.show_chart === false || (wr && c.windrose_chart === false) ? "" : html`<div class="body ${chartTop ? "above" : ""}"><canvas aria-label="Wind speed and gust history"></canvas></div>`;
    let main;
    if (wr) {
      const ids = this._ids();
      if (ids.dir && ids.speed) {
        this._ensureRose(windroseCard(c, ids, unit));
        if (this._wrEl) this._wrEl.hass = this.hass;
        const sc = Math.max(30, Math.min(150, Number(c.wr_scale ?? 100)));
        main = this._wrErr ? html`<div class="note">${this._wrErr}</div>` : html`<div class="wr" style=${sc !== 100 ? `width:${sc}%;margin:0 auto` : ""}>${this._wrEl || ""}</div>`;
      }
    }
    if (!main) {
      const ds = Math.max(50, Math.min(250, Number(c.dial_scale ?? 100))) / 100;
      const dial = html`<div class="dial" style=${ds !== 1 ? `width:min(${Math.round(180 * ds)}px, ${Math.round(42 * ds)}%);` : ""}>${view === "rose" ? this._roseSvg(unit) : this._compassSvg(sp?.value, unit, di?.value)}</div>`;
      main = rp === "side"
        ? html`<div class="top">${dial}<div class="side">${readings}${legend}</div></div>`
        : html`<div class="top center">${dial}</div>${legend ? html`<div class="side">${legend}</div>` : ""}`;
    }
    return html`
      ${head(c, "mdi:weather-windy", "Wind", buttons)}
      ${chartTop ? chart : ""}
      ${rp === "above" ? readings : ""}
      ${main}
      ${rp === "below" || (rp === "side" && wr) ? readings : ""}
      ${chartTop ? "" : chart}
      ${this._error ? html`<div class="note">${this._error}</div>` : ""}
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    // Dashboard resources load in any order: switch to the Wind Rose Card when it arrives.
    if (!customElements.get(WINDROSE_TAG)) customElements.whenDefined(WINDROSE_TAG).then(() => this.requestUpdate());
  }

  async _ensureRose(cfg) {
    const json = JSON.stringify(cfg);
    if (json === this._wrJson) return;
    this._wrJson = json;
    try {
      const helpers = await window.loadCardHelpers?.();
      if (!helpers) throw new Error("Home Assistant card helpers unavailable");
      if (this._wrJson !== json) return;
      this._wrEl = helpers.createCardElement(cfg);
      this._wrEl.hass = this.hass;
      this._wrErr = undefined;
      this.requestUpdate();
    } catch (e) {
      this._wrErr = `Wind Rose Card failed to load: ${e?.message || e}`;
      this.requestUpdate();
    }
  }

  // Compass: pointer sits on the ring at the bearing the wind comes FROM and
  // points toward the centre (meteorological convention).
  _compassSvg(speed, unit, bearing) {
    const ticks = [];
    for (let i = 0; i < 72; i++) {
      const a = (i * 5 * Math.PI) / 180, long = i % 18 === 0, mid = i % 6 === 0;
      const r1 = long ? 78 : mid ? 82 : 85;
      ticks.push(svg`<line class="tick" x1=${100 + Math.sin(a) * r1} y1=${100 - Math.cos(a) * r1} x2=${100 + Math.sin(a) * 88} y2=${100 - Math.cos(a) * 88} stroke-width=${long ? 2 : 1}></line>`);
    }
    const lbl = [["N", 0], ["E", 90], ["S", 180], ["W", 270]].map(
      ([t, d]) => svg`<text class="lbl ${t === "N" ? "n" : ""}" x=${100 + Math.sin((d * Math.PI) / 180) * 66} y=${100 - Math.cos((d * Math.PI) / 180) * 66}>${t}</text>`
    );
    const b = Number.isFinite(bearing) ? bearing : null;
    return svg`<svg viewBox="0 0 200 200" role="img" aria-label=${`Wind from ${cardinal(b)} at ${fmt(speed, 1)} ${unit}`}>
      <circle class="ring" cx="100" cy="100" r="88" stroke-width="2"></circle>
      ${ticks}${lbl}
      ${b == null ? "" : svg`<g class="ptr" style=${`transform: rotate(${b}deg); transform-origin: 100px 100px;${this.config?.compass_arrow_color ? `fill:${this.config.compass_arrow_color};` : ""}`}>
        <g style=${`transform: scale(${Math.max(0.5, Math.min(2, Number(this.config?.compass_arrow_size ?? 100) / 100))}); transform-origin: 100px 10px`}>
          <path d="M100 36 L112 10 L100 16 L88 10 Z"></path>
        </g>
      </g>`}
      <text class="spd" x="100" y="104">${fmt(speed, 1)}</text>
      <text class="unit" x="100" y="124">${unit}</text>
    </svg>`;
  }

  _bins(unit) {
    return this.config?.rose_bins || DEFAULT_BINS[unit] || DEFAULT_BINS.mph;
  }

  _roseLegend(unit) {
    // Bin 0 (< first threshold) is "calm" and is reported as a percentage, not drawn.
    const b = this._bins(unit);
    const labels = b.map((v, i) => (i < b.length - 1 ? `${v}–${b[i + 1]}` : `${v}+`));
    return html`<div class="legend">${labels.map((l, i) => html`<span><i style="background:${BIN_COLORS[i + 1]}"></i>${l}</span>`)}<span>${unit}</span></div>`;
  }

  _roseSvg(unit) {
    const rose = this._rose;
    if (!rose) return svg`<svg viewBox="0 0 200 200"><circle class="ring" cx="100" cy="100" r="88"></circle><text class="unit" x="100" y="100">loading…</text></svg>`;
    const max = Math.max(...rose.sectors.map((s) => s.reduce((a, b) => a + b, 0)), 0.0001);
    const R = 84, wedges = [];
    rose.sectors.forEach((bins, i) => {
      let inner = 0;
      bins.forEach((frac, bi) => {
        if (!frac) return;
        const outer = inner + frac;
        wedges.push(svg`<path d=${wedge(100, 100, (inner / max) * R, (outer / max) * R, i * 22.5 - 10, i * 22.5 + 10)} fill=${BIN_COLORS[bi]} opacity="0.9"></path>`);
        inner = outer;
      });
    });
    const rings = [0.25, 0.5, 0.75, 1].map((f) => svg`<circle class="ring" cx="100" cy="100" r=${R * f} stroke-dasharray="2 3"></circle>`);
    const lbl = [["N", 0], ["E", 90], ["S", 180], ["W", 270]].map(
      ([t, d]) => svg`<text class="lbl ${t === "N" ? "n" : ""}" x=${100 + Math.sin((d * Math.PI) / 180) * 95} y=${100 - Math.cos((d * Math.PI) / 180) * 95}>${t}</text>`
    );
    return svg`<svg viewBox="0 0 200 200" role="img" aria-label="Wind rose, last 24 hours">${rings}${wedges}${lbl}
      <text class="unit" x="100" y="196">calm ${Math.round(rose.calm * 100)}% · peak ${Math.round(max * 100)}%</text></svg>`;
  }

  updated() {
    const ids = this._ids();
    const key = `${ids.speed}|${ids.gust}|${ids.dir}|${this.hass?.themes?.darkMode}`;
    if (key !== this._loadedKey || Date.now() - (this._loadedAt || 0) > 5 * 60e3) {
      this._loadedKey = key;
      this._loadedAt = Date.now();
      this._load(ids).catch((e) => (this._error = `History unavailable: ${e?.message || e}`));
    }
    if (this._pendingDraw && this.renderRoot.querySelector("canvas")) this._drawChart(this._pendingDraw);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._chart?.destroy();
    this._chart = null;
    this._loadedKey = "";
  }

  async _load(ids) {
    const hist = await fetchHistory(this.hass, [ids.speed, ids.gust, ids.dir], 24);
    const unit = metricValue(this.station, this.hass, "wind_speed")?.unit || "mph";
    this._rose = buildRose(hist[ids.dir] || [], hist[ids.speed] || [], this._bins(unit));
    this._error = undefined;
    this._pendingDraw = {
      speed: decimate(hist[ids.speed] || []).map((p) => ({ x: p.t, y: p.v })),
      gust: decimate(hist[ids.gust] || []).map((p) => ({ x: p.t, y: p.v })),
      unit,
    };
    this._drawChart(this._pendingDraw);
  }

  _drawChart(d) {
    const canvas = this.renderRoot.querySelector("canvas");
    if (!canvas) return;
    this._pendingDraw = null;
    const cs = getComputedStyle(this);
    const wind = cs.getPropertyValue("--wsfc-wind").trim() || "#42a5f5";
    const gust = cs.getPropertyValue("--wsfc-gust").trim() || "#ff9800";
    const opts = baseOptions(this, 24, this.hass?.locale?.language);
    if (this.config?.chart_legend) opts.plugins.legend = { display: true, position: "top", align: "end", labels: { color: opts._text, boxWidth: 10, boxHeight: 10, font: { size: 11 } } };
    opts.scales.y = { min: 0, grid: { color: opts._grid }, ticks: { color: opts._text, callback: (v) => `${v} ${d.unit}`, maxTicksLimit: 4 } };
    const datasets = [
      { label: "Gust", data: d.gust, borderColor: gust, borderWidth: 1.25, order: 2 },
      { label: "Speed", data: d.speed, borderColor: wind, backgroundColor: withAlpha(wind, 0.18), fill: "origin", order: 1 },
    ];
    this._chart?.destroy();
    this._chart = new Chart(canvas, { type: "line", data: { datasets }, options: opts, plugins: this.config?.chart_legend ? LEGEND_PLUGINS : INLINE_PLUGINS });
  }
}

/** Annular wedge path, angles in compass degrees (0 = N, clockwise). */
function wedge(cx, cy, r0, r1, a0, a1) {
  const p = (r, a) => [cx + Math.sin((a * Math.PI) / 180) * r, cy - Math.cos((a * Math.PI) / 180) * r];
  const [x0, y0] = p(r1, a0), [x1, y1] = p(r1, a1), [x2, y2] = p(r0, a1), [x3, y3] = p(r0, a0);
  return `M${x0} ${y0} A${r1} ${r1} 0 0 1 ${x1} ${y1} L${x2} ${y2} A${r0} ${r0} 0 0 0 ${x3} ${y3} Z`;
}

/**
 * Time-weighted wind rose. Each direction sample is paired with the speed in
 * effect at that time; weight = time until the next direction sample.
 * Returns { sectors: [16][bins+1] fractions, calm }.
 */
export function buildRose(dirPts, speedPts, bins) {
  const dir = dirPts.filter((p) => p.v != null);
  const spd = speedPts.filter((p) => p.v != null);
  const sectors = Array.from({ length: 16 }, () => new Array(bins.length + 1).fill(0));
  let total = 0, calm = 0, j = 0;
  for (let i = 0; i < dir.length; i++) {
    const t = dir[i].t;
    const w = Math.min((dir[i + 1]?.t ?? Date.now()) - t, 30 * 60e3); // cap gaps at 30 min
    if (w <= 0) continue;
    while (j + 1 < spd.length && spd[j + 1].t <= t) j++;
    const s = spd[j]?.t <= t ? spd[j].v : spd[0]?.v ?? 0;
    total += w;
    if (s < bins[0]) { calm += w; continue; }
    let bi = bins.findIndex((b) => s < b);
    if (bi === -1) bi = bins.length;
    const sec = Math.round((((dir[i].v % 360) + 360) % 360) / 22.5) % 16;
    sectors[sec][bi] += w;
  }
  if (!total) return { sectors, calm: 0 };
  return { sectors: sectors.map((b) => b.map((x) => x / total)), calm: calm / total };
}

customElements.get("wsfc-panel-wind") || customElements.define("wsfc-panel-wind", WsfcWind);
