// Sun & Moon panel: Weather Flex's Sun Position arc + Sky Bar sections, plus a
// moon summary (phase, illumination, moonrise/moonset) from SunCalc.
import { html, css, svg } from "lit";
import { LitElement, nothing } from "lit";
import { moonInfo, sunInfo, timeFmt, dayFmt } from "../card/astro.js";
import { panelStyles, head } from "./shared.js";
import { WsfcFlexPanel } from "./flex.js";

class WsfcSunMoon extends WsfcFlexPanel {
  type = "sun_moon";
  defaultTitle = "Sun & Moon";
  defaultIcon = "mdi:weather-sunset";
  static styles = [
    ...WsfcFlexPanel.styles,
    css`
      .moon { display: flex; align-items: center; gap: 14px; margin-top: 10px; }
      .moon svg { width: 52px; height: 52px; flex: 0 0 auto; }
      .moon .facts { display: grid; grid-template-columns: auto auto; gap: 2px 14px; font-size: 13px; }
      .moon .facts span:nth-child(odd) { color: var(--wsfc-muted); }
      .moon .name { font-size: 16px; font-weight: 500; grid-column: 1 / -1; color: var(--primary-text-color) !important; }
    `,
  ];

  extra() {
    return this.config?.show_moon === false ? "" : this._moon();
  }

  _moon() {
    const m = moonInfo(this.hass);
    const t = (d) => (d ? timeFmt(this.hass).format(d) : "—");
    const df = dayFmt(this.hass);
    return html`<div class="moon">
      ${moonSvg(m.phase)}
      <div class="facts">
        <span class="name">${m.name}</span>
        <span>Illumination</span><span>${Math.round(m.fraction * 100)}%</span>
        <span>Moonrise</span><span>${m.alwaysUp ? "up all day" : m.alwaysDown ? "down all day" : t(m.rise)}</span>
        <span>Moonset</span><span>${t(m.set)}</span>
        ${m.nextFull ? html`<span>Next full</span><span>${df.format(m.nextFull)}</span>` : ""}
        ${m.nextNew ? html`<span>Next new</span><span>${df.format(m.nextNew)}</span>` : ""}
      </div>
    </div>`;
  }
}

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

/** Sun: Weather Flex's sun arc (with the sky as its baseline) + day facts. */
class WsfcSun extends WsfcFlexPanel {
  type = "sun";
  defaultTitle = "Sun";
  defaultIcon = "mdi:white-balance-sunny";
  static styles = [
    ...WsfcFlexPanel.styles,
    css`
      .facts { display: grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); gap: 6px 14px; margin-top: 8px; font-size: 13px; }
      .facts div span { display: block; font-size: 11px; color: var(--wsfc-muted); }
    `,
  ];
  extra() {
    const sun = sunInfo(this.hass);
    if (!sun || this.config?.show_facts === false) return nothing;
    const tf = timeFmt(this.hass);
    const hm = (ms) => `${Math.floor(ms / 3600e3)}h ${String(Math.round((ms % 3600e3) / 60e3)).padStart(2, "0")}m`;
    const rows = [
      ["Dawn", tf.format(sun.dawn)], ["Sunrise", tf.format(sun.sunrise)], ["Solar noon", tf.format(sun.noon)],
      ["Sunset", tf.format(sun.sunset)], ["Dusk", tf.format(sun.dusk)], ["Daylight", hm(sun.daylightMs)],
    ];
    return html`<div class="facts">${rows.map(([k, v]) => html`<div><span>${k}</span>${v}</div>`)}</div>`;
  }
}

/** Moon: phase disc, illumination, rise/set and the next phases. */
class WsfcMoon extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false } };
  static styles = [
    panelStyles,
    css`
      .wrap { display: flex; align-items: center; gap: 18px; flex: 1; flex-wrap: wrap; }
      .disc svg { width: var(--moon-size, 110px); height: var(--moon-size, 110px); display: block; }
      .facts { display: grid; grid-template-columns: auto auto; gap: 4px 16px; font-size: 13px; }
      .facts span:nth-child(odd) { color: var(--wsfc-muted); }
      .name { grid-column: 1 / -1; font-size: 18px; font-weight: 600; margin-bottom: 4px; color: var(--primary-text-color) !important; }
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

customElements.get("wsfc-panel-sun") || customElements.define("wsfc-panel-sun", WsfcSun);
customElements.get("wsfc-panel-moon") || customElements.define("wsfc-panel-moon", WsfcMoon);
customElements.get("wsfc-panel-sun-moon") || customElements.define("wsfc-panel-sun-moon", WsfcSunMoon);
