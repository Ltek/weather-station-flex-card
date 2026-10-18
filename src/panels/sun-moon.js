// Sun & Moon panel: Weather Flex's Sun Position arc + Sky Bar sections, plus a
// moon summary (phase, illumination, moonrise/moonset) from SunCalc.
import { LitElement, html, css, svg } from "lit";
import * as SunCalc from "suncalc";
import { panelStyles } from "./shared.js";
import { CoreSlot, deepMerge } from "../card/core.js";

const PHASES = [
  [0.03, "New moon"], [0.22, "Waxing crescent"], [0.28, "First quarter"], [0.47, "Waxing gibbous"],
  [0.53, "Full moon"], [0.72, "Waning gibbous"], [0.78, "Last quarter"], [0.97, "Waning crescent"], [1.01, "New moon"],
];
const phaseName = (p) => PHASES.find(([lim]) => p < lim)[1];

class WsfcSunMoon extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false } };
  static styles = [
    panelStyles,
    css`
      .core { margin: 0 -4px; }
      .core > * { --ha-card-background: transparent; --card-padding: 4px; --ha-card-box-shadow: none; --ha-card-border-width: 0; }
      .moon { display: flex; align-items: center; gap: 14px; margin-top: 10px; }
      .moon svg { width: 52px; height: 52px; flex: 0 0 auto; }
      .moon .facts { display: grid; grid-template-columns: auto auto; gap: 2px 14px; font-size: 13px; }
      .moon .facts span:nth-child(odd) { color: var(--wsfc-muted); }
      .moon .name { font-size: 16px; font-weight: 500; grid-column: 1 / -1; color: var(--primary-text-color) !important; }
    `,
  ];

  constructor() {
    super();
    this._slot = new CoreSlot();
  }

  _coreConfig() {
    const base = {
      entity: this.station?.entity,
      metric_sources: this.station?.metric_sources,
      wfc: {
        order: ["sun_arc", "sun_position"],
        current: { show: false },
        details: { show: false },
        hourly: { show: false },
        daily: { show: false },
        sun_arc: { show: true, night_moon: true, show_ss_icons: true, height: 100 },
        sun_position: { show: true, height: 28, timeframe_mode: "day", ss_markers_position: "overlay", times_position: "below" },
      },
    };
    return deepMerge(base, this.config?.flex || {});
  }

  render() {
    if (!this.hass) return html``;
    const core = this._slot.update(this._coreConfig(), this.hass);
    return html`
      <div class="head"><ha-icon icon="mdi:weather-sunset"></ha-icon><span class="title">${this.config?.title || "Sun & Moon"}</span></div>
      <div class="core">${core}</div>
      ${this.config?.show_moon === false ? "" : this._moon()}
    `;
  }

  _moon() {
    const now = new Date();
    const { latitude: lat, longitude: lon } = this.hass.config || {};
    const ill = SunCalc.getMoonIllumination(now);
    const times = lat != null ? SunCalc.getMoonTimes(now, lat, lon) : {};
    const tf = new Intl.DateTimeFormat(this.hass.locale?.language, { hour: "numeric", minute: "2-digit" });
    const t = (d) => (d ? tf.format(d) : "—");
    // Next full moon: step forward in 6h increments until phase crosses 0.5.
    let next = null;
    for (let h = 6; h < 24 * 31; h += 6) {
      const d = new Date(now.getTime() + h * 3600e3);
      const p = SunCalc.getMoonIllumination(d).phase;
      if (Math.abs(p - 0.5) < 0.012) { next = d; break; }
    }
    const df = new Intl.DateTimeFormat(this.hass.locale?.language, { weekday: "short", month: "short", day: "numeric" });
    return html`<div class="moon">
      ${moonSvg(ill.phase)}
      <div class="facts">
        <span class="name">${phaseName(ill.phase)}</span>
        <span>Illumination</span><span>${Math.round(ill.fraction * 100)}%</span>
        <span>Moonrise</span><span>${times.alwaysUp ? "up all day" : times.alwaysDown ? "down all day" : t(times.rise)}</span>
        <span>Moonset</span><span>${t(times.set)}</span>
        ${next ? html`<span>Next full</span><span>${df.format(next)}</span>` : ""}
      </div>
    </div>`;
  }
}

/** Moon disc with the terminator drawn for phase 0..1 (0 new, 0.5 full). */
function moonSvg(phase) {
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

customElements.get("wsfc-panel-sun-moon") || customElements.define("wsfc-panel-sun-moon", WsfcSunMoon);
