// Astronomy panel (after Weather Underground's): today's sun and moon paths
// over 24 hours with their current positions, a rise/set table for the sun,
// the three twilights and the moon, day length (and its change since
// yesterday), length of visible light, and the moon phase.
import { LitElement, html, svg, css, nothing } from "lit";
import * as SunCalc from "suncalc";
import { panelStyles, head } from "./shared.js";
import { renderFacts, factStyles } from "./astro-facts.js";

const DEG = 180 / Math.PI;

const hm = (ms) => (ms == null || !isFinite(ms) ? "—" : `${Math.floor(ms / 3600e3)}h ${String(Math.round((ms % 3600e3) / 60e3)).padStart(2, "0")}m`);
const valid = (d) => d instanceof Date && !isNaN(d);

class WsfcAstronomy extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false } };
  static styles = [
    panelStyles,
    factStyles,
    css`
      .wrap { display: flex; gap: 16px; flex-wrap: wrap; flex: 1; align-items: flex-start; }
      .chart { flex: 1 1 260px; min-width: 220px; }
      .chart svg { width: 100%; height: auto; display: block; overflow: visible; }
      .side { flex: 1 1 260px; min-width: 240px; display: flex; flex-direction: column; gap: 10px; }
      table { border-collapse: collapse; width: 100%; font-size: calc(13px * var(--wsfc-ts, 1)); }
      th { text-align: right; font-weight: 500; color: var(--wsfc-muted); font-size: calc(11px * var(--wsfc-ts, 1)); padding: 0 0 4px 8px; }
      th:first-child { text-align: left; padding-left: 0; }
      td { padding: 3px 0 3px 8px; text-align: right; font-variant-numeric: tabular-nums; white-space: nowrap; }
      td:first-child { text-align: left; padding-left: 0; color: var(--wsfc-muted); white-space: normal; }
      tr + tr td { border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.2)); }
      tr.main td { color: var(--primary-text-color); font-weight: 500; }
      .sum { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 8px 14px; font-size: calc(13px * var(--wsfc-ts, 1)); }
      .sum span { display: block; font-size: calc(11px * var(--wsfc-ts, 1)); color: var(--wsfc-muted); }
      .sum .d { font-size: calc(11px * var(--wsfc-ts, 1)); color: var(--wsfc-muted); margin-left: 4px; }
      .moon { display: flex; gap: 10px; align-items: center; }
      .moon svg { width: 40px; height: 40px; flex: 0 0 auto; }
      .axis { fill: var(--secondary-text-color); font-size: calc(9px * var(--wsfc-ts, 1)); }
      .lbl { font-size: calc(9px * var(--wsfc-ts, 1)); font-weight: 600; }
    `,
  ];

  render() {
    if (!this.hass) return nothing;
    const { latitude: lat, longitude: lon } = this.hass.config || {};
    if (lat == null) return html`${head(this.config, "mdi:telescope", "Astronomy")}<div class="note">Set your home location in Home Assistant.</div>`;
    const now = new Date();
    const noon = new Date(now); noon.setHours(12, 0, 0, 0);
    const t = SunCalc.getTimes(noon, lat, lon);
    const mt = SunCalc.getMoonTimes(now, lat, lon);
    const tf = new Intl.DateTimeFormat(this.hass.locale?.language, { hour: "numeric", minute: "2-digit" });
    const f = (d) => (valid(d) ? tf.format(d) : "—");
    const rows = [
      ["Sun", t.sunrise, t.sunset, true],
      ["Civil twilight", t.dawn, t.dusk],
      ["Nautical twilight", t.nauticalDawn, t.nauticalDusk],
      ["Astronomical twilight", t.nightEnd, t.night],
      ["Moon", mt.rise, mt.set, true],
    ];
    const c = this.config || {};
    return html`
      ${head(c, "mdi:telescope", "Astronomy")}
      ${c.fact_position === "above" ? renderFacts(this.hass, c, undefined, true) : nothing}
      <div class="wrap">
        ${c.show_chart === false ? nothing : html`<div class="chart">${this._chart(lat, lon, now)}</div>`}
        <div class="side">
          ${c.show_table === false ? nothing : html`<table>
            <tr><th></th><th>Rise</th><th>Set</th></tr>
            ${rows.map(([n, r, s, main]) => html`<tr class=${main ? "main" : ""}><td>${n}</td>
              <td>${n === "Moon" && mt.alwaysUp ? "up all day" : n === "Moon" && mt.alwaysDown ? "down all day" : f(r)}</td>
              <td>${n === "Moon" && (mt.alwaysUp || mt.alwaysDown) ? "" : f(s)}</td></tr>`)}
          </table>`}
          ${(c.fact_position || "below") === "below" ? renderFacts(this.hass, c, undefined, true) : nothing}
        </div>
      </div>
    `;
  }

  // Altitude of sun and moon from midnight to midnight; horizon at 0°.
  _chart(lat, lon, now) {
    const W = 300, H = 150, top = 12, bottom = 128, hz = (top + bottom) / 2;
    const day0 = new Date(now); day0.setHours(0, 0, 0, 0);
    const N = 96, step = 864e5 / N;
    const yOf = (alt) => hz - (alt / 90) * (hz - top);
    const path = (fn) => {
      let d = "";
      for (let i = 0; i <= N; i++) {
        const at = new Date(day0.getTime() + i * step);
        d += `${i ? "L" : "M"}${((i / N) * W).toFixed(1)} ${yOf(fn(at)).toFixed(1)}`;
      }
      return d;
    };
    const sunAlt = (d) => SunCalc.getPosition(d, lat, lon).altitude * DEG;
    const moonAlt = (d) => SunCalc.getMoonPosition(d, lat, lon).altitude * DEG;
    const xNow = ((now - day0) / 864e5) * W;
    const sNow = sunAlt(now), mNow = moonAlt(now);
    const hours = [0, 6, 12, 18, 24];
    const hf = new Intl.DateTimeFormat(this.hass.locale?.language, { hour: "numeric" });
    const sunC = "var(--wsfc-sun-color, #fdd835)", moonC = "var(--wsfc-moon-color, #b0bec5)";
    return svg`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Sun and moon altitude today">
      <defs>
        <clipPath id="up"><rect x="0" y="0" width=${W} height=${hz}></rect></clipPath>
        <linearGradient id="sk" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#42a5f5" stop-opacity=".25"></stop><stop offset="1" stop-color="#42a5f5" stop-opacity="0"></stop></linearGradient>
      </defs>
      <rect x="0" y=${top} width=${W} height=${hz - top} fill="url(#sk)"></rect>
      <line x1="0" x2=${W} y1=${hz} y2=${hz} stroke="var(--secondary-text-color)" stroke-opacity=".5"></line>
      ${hours.map((h) => svg`<line x1=${(h / 24) * W} x2=${(h / 24) * W} y1=${top} y2=${bottom} stroke="var(--secondary-text-color)" stroke-opacity=".12"></line>
        <text class="axis" x=${Math.min(W - 10, Math.max(8, (h / 24) * W))} y=${H - 6} text-anchor="middle">${hf.format(new Date(day0.getTime() + h * 3600e3))}</text>`)}
      <path d=${path(moonAlt)} fill="none" stroke=${moonC} stroke-width="1.6" stroke-dasharray="4 3" opacity=".9"></path>
      <path d=${path(sunAlt)} fill="none" stroke=${sunC} stroke-width="2.2" opacity=".35"></path>
      <path d=${path(sunAlt)} fill="none" stroke=${sunC} stroke-width="2.2" clip-path="url(#up)"></path>
      <line x1=${xNow} x2=${xNow} y1=${top} y2=${bottom} stroke="var(--primary-color)" stroke-width="1"></line>
      <circle cx=${xNow} cy=${yOf(mNow)} r="5" fill=${moonC} stroke="#000" stroke-opacity=".3"></circle>
      <circle cx=${xNow} cy=${yOf(sNow)} r="7" fill=${sunC} stroke="#000" stroke-opacity=".3"></circle>
      <text class="lbl" x="4" y=${top + 8} fill=${sunC}>Sun ${Math.round(sNow)}°</text>
      <text class="lbl" x="4" y=${top + 20} fill=${moonC}>Moon ${Math.round(mNow)}°</text>
    </svg>`;
  }
}

customElements.get("wsfc-panel-astronomy") || customElements.define("wsfc-panel-astronomy", WsfcAstronomy);
