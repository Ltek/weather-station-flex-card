// Moon panel: phase disc, illumination, rise/set and the next phases.
import { LitElement, html, css, svg, nothing } from "lit";
import { moonInfo, timeFmt, dayFmt } from "../card/astro.js";
import { panelStyles, head } from "./shared.js";

/** Moon disc with the terminator drawn for phase 0..1 (0 new, 0.5 full). */
export function moonSvg(phase) {
  const r = 24, c = 26;
  const waxing = phase < 0.5;
  const f = Math.cos(phase * 2 * Math.PI); // 1 new → -1 full
  const rx = Math.abs(f) * r;
  // Lit region: half disc on the lit side + an ellipse that adds or removes.
  const litSide = waxing ? 1 : 0; // sweep for right half when waxing
  const d = `M${c} ${c - r} A${r} ${r} 0 0 ${litSide} ${c} ${c + r} A${rx} ${r} 0 0 ${f > 0 ? 1 - litSide : litSide} ${c} ${c - r} Z`;
  return svg`<svg viewBox="0 0 52 52" role="img" aria-label="Moon phase">
    <circle cx=${c} cy=${c} r=${r} fill="#2b2f36" stroke="rgba(255,255,255,.15)"></circle>
    <path d=${d} fill="#e9e6d6"></path>
  </svg>`;
}

/** Moon: phase disc, illumination, rise/set and the next phases. */
class WsfcMoon extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false } };
  static styles = [
    panelStyles,
    css`
      .wrap { display: flex; align-items: center; gap: 18px; flex: 1; flex-wrap: wrap; }
      .disc svg { width: var(--moon-size, 110px); height: var(--moon-size, 110px); display: block; }
      .facts { display: grid; grid-template-columns: auto auto; gap: 4px 16px; font-size: calc(13px * var(--wsfc-ts, 1)); }
      .facts span:nth-child(odd) { color: var(--wsfc-muted); }
      .name { grid-column: 1 / -1; font-size: calc(18px * var(--wsfc-ts, 1)); font-weight: 600; margin-bottom: 4px; color: var(--primary-text-color) !important; }
    `,
  ];
  render() {
    if (!this.hass) return nothing;
    const m = moonInfo(this.hass);
    const t = (d) => (d ? timeFmt(this.hass).format(d) : "—");
    const df = dayFmt(this.hass);
    return html`${head(this.config, "mdi:moon-waning-crescent", "Moon")}
      <div class="wrap" style=${this.config?.moon_size ? `--moon-size:${this.config.moon_size}px` : ""}>
        <div class="disc">${moonSvg(m.phase)}</div>
        <div class="facts">
          <span class="name">${m.name}</span>
          <span>Illumination</span><span>${Math.round(m.fraction * 100)}%</span>
          <span>Moonrise</span><span>${m.alwaysUp ? "up all day" : m.alwaysDown ? "down all day" : t(m.rise)}</span>
          <span>Moonset</span><span>${t(m.set)}</span>
          ${m.nextFull ? html`<span>Next full</span><span>${df.format(m.nextFull)}</span>` : nothing}
          ${m.nextNew ? html`<span>Next new</span><span>${df.format(m.nextNew)}</span>` : nothing}
        </div>
      </div>`;
  }
}

customElements.get("wsfc-panel-moon") || customElements.define("wsfc-panel-moon", WsfcMoon);
