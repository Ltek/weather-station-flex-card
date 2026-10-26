// Air dryness (vapour pressure deficit) and the Frost & heat watch: two small
// panels from the station's live readings.
//   vpd           VPD in kPa — the station's own sensor, else worked out from
//                 temperature and humidity — on a colour scale, with what it
//                 means for the garden this season and a plant that droops.
//   frost_watch   Rules on the live readings and tonight's forecast low:
//                 heat danger / heat caution / frost now / frost tonight / calm.
//                 Unofficial — not a weather service warning.
import { LitElement, html, css, svg, nothing } from "lit";
import { panelStyles, head, fmt, moreInfo } from "./shared.js";
import { metricValue, entityValue } from "../card/resolve.js";
import { metricEntity } from "../card/metrics.js";
import { watchForecast } from "../card/forecast.js";

const toC = (v) => (v?.unit === "°F" ? ((v.value - 32) * 5) / 9 : v?.value);
const toF = (v) => (v?.unit === "°C" ? (v.value * 9) / 5 + 32 : v?.value);
const toMph = (v) => {
  if (!v) return null;
  const u = String(v.unit || "").toLowerCase();
  return u === "km/h" ? v.value / 1.609344 : u === "m/s" ? v.value * 2.236936 : u === "kn" || u === "kt" ? v.value * 1.150779 : v.value;
};

/* -------------------------------------------------------------------- VPD */
// Commonly used growing bands, in kPa.
export const VPD_BANDS = [
  { max: 0.4, color: "#7fd6ff", name: "Very humid" },
  { max: 0.8, color: "#b8f04a", name: "Gentle" },
  { max: 1.2, color: "#43a047", name: "Comfortable" },
  { max: 1.6, color: "#ffc93c", name: "Brisk" },
  { max: Infinity, color: "#ff5a1f", name: "Thirsty air" },
];
const VPD_ADVICE = {
  spring: ["Watch seedlings for mould", "Good for seedlings", "Comfortable for most plants", "Water new plantings", "Water seedlings today"],
  summer: ["Mildew weather", "Easy on the garden", "Comfortable for most plants", "Water more", "Water deeply"],
  fall: ["Mildew weather", "Good for fall planting", "Comfortable for late crops", "Water fall plantings", "Water new trees and shrubs"],
  winter: ["Garden dormant", "Garden dormant", "Garden dormant", "Evergreens lose water", "Water evergreens if the ground isn't frozen"],
};

/** VPD (kPa) from air temperature (°C) and relative humidity (%), Tetens. */
export function vpdFrom(tC, rh) {
  if (!Number.isFinite(tC) || !Number.isFinite(rh)) return null;
  const es = 0.6108 * Math.exp((17.27 * tC) / (tC + 237.3));
  return Math.max(0, es * (1 - Math.min(100, Math.max(0, rh)) / 100));
}

/** Garden season for the date (mirrored south of the equator). */
export function gardenSeason(date = new Date(), lat = 40) {
  let m = date.getMonth() + 1;
  if (lat < 0) m = ((m + 5) % 12) + 1;
  const md = m * 100 + date.getDate();
  return md >= 315 && md < 601 ? "spring" : md >= 601 && md < 901 ? "summer" : md >= 901 && md < 1116 ? "fall" : "winter";
}

export const vpdBand = (kpa) => Math.max(0, VPD_BANDS.findIndex((b) => kpa < b.max));

function plantSvg(band, color) {
  const droop = band >= 3 ? (band - 2) * 7 : 0;
  return svg`<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M18 46h28l-4 14H22z" fill="#c2410c" /><rect x="16" y="42" width="32" height="6" rx="2" fill="#ea580c" />
    <path d="M32 42V20" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
    <path d=${`M32 30c-9 0-15-5-17-${12 - droop} 9 0 15 4 17 ${12 - droop}z`} fill=${color} />
    <path d=${`M32 24c9 0 15-5 17-${12 - droop}-9 0-15 4-17 ${12 - droop}z`} fill=${color} />
    <path d="M32 21c-4-4-4-11 0-15 4 4 4 11 0 15z" fill=${color} />
  </svg>`;
}

class WsfcVpd extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false } };
  static styles = [
    panelStyles,
    css`
      .main { display: flex; gap: calc(14px * var(--wsfc-sx, 1)); align-items: center; cursor: pointer; }
      .plant { width: 56px; height: 56px; flex: 0 0 auto; color: var(--primary-text-color); }
      .plant svg { width: 100%; height: 100%; }
      .val { font-size: 34px; font-weight: 600; line-height: 1; font-variant-numeric: tabular-nums; }
      .val small { font-size: 14px; font-weight: 400; color: var(--wsfc-muted); margin-left: 3px; }
      .band { font-size: 15px; font-weight: 500; margin-top: 4px; }
      .advice { font-size: 13px; color: var(--secondary-text-color); margin-top: 2px; }
      .scale { position: relative; display: flex; gap: 2px; height: 8px; margin: calc(12px * var(--wsfc-sy, 1)) 0 4px; }
      .scale span { flex: 1; border-radius: 2px; }
      .mark { position: absolute; top: -4px; width: 4px; height: 16px; margin-left: -2px; border-radius: 2px; background: var(--primary-text-color); box-shadow: 0 0 0 1px var(--card-background-color, #000); }
      .ticks { display: flex; justify-content: space-between; font-size: 10px; color: var(--wsfc-muted); }
      .note { font-size: 12px; color: var(--wsfc-muted); line-height: 1.45; margin-top: 8px; }
    `,
  ];

  /** { kpa, entity, computed } or null. */
  _value() {
    const s = this.station, h = this.hass, c = this.config || {};
    const own = entityValue(h, c.entity || metricEntity("vpd", s, h));
    if (own && Number.isFinite(own.value)) {
      const u = String(own.unit || "").toLowerCase();
      const kpa = u === "hpa" || u === "mbar" ? own.value / 10 : u === "pa" ? own.value / 1000 : u === "psi" ? own.value * 6.894757 : own.value;
      return { kpa, entity: own.entity, computed: false };
    }
    const t = metricValue(s, h, "temperature"), rh = metricValue(s, h, "humidity");
    const kpa = vpdFrom(toC(t), rh?.value);
    return kpa == null ? null : { kpa, entity: t?.entity, computed: true };
  }

  render() {
    if (!this.hass) return nothing;
    const c = this.config || {};
    const v = this._value();
    const title = head(c, "mdi:water-opacity", "Air dryness (VPD)");
    if (!v) return html`${title}<div class="note">Needs temperature and humidity from the station.</div>`;
    const b = vpdBand(v.kpa), band = VPD_BANDS[b];
    const season = gardenSeason(new Date(), Number(this.hass.config?.latitude) || 40);
    const max = 2.5, pos = Math.min(100, (v.kpa / max) * 100);
    return html`${title}
      <div class="main" @click=${() => moreInfo(this, v.entity)}>
        ${c.show_plant === false ? nothing : html`<div class="plant">${plantSvg(b, band.color)}</div>`}
        <div>
          <div class="val">${fmt(v.kpa, 2)}<small>kPa</small></div>
          <div class="band" style=${`color:${band.color}`}>${band.name}</div>
          ${c.show_advice === false ? nothing : html`<div class="advice">${VPD_ADVICE[season][b]}</div>`}
        </div>
      </div>
      ${c.show_scale === false ? nothing : html`<div class="scale" role="img" aria-label=${`${fmt(v.kpa, 2)} kPa, ${band.name}`}>
          ${VPD_BANDS.map((x, i) => html`<span style=${`background:${x.color};flex:${(Math.min(x.max, max) - (i ? VPD_BANDS[i - 1].max : 0)) / max}`}></span>`)}
          <i class="mark" style=${`left:${pos}%`}></i>
        </div>
        <div class="ticks"><span>0</span><span>0.4</span><span>0.8</span><span>1.2</span><span>1.6</span><span>2.5 kPa</span></div>`}
      ${c.show_note === false ? nothing : html`<div class="note">How much more water the air could hold. The higher it is, the faster plants lose water through their leaves${v.computed ? " (worked out from temperature and humidity)" : ""}.</div>`}`;
  }
}
customElements.get("wsfc-panel-vpd") || customElements.define("wsfc-panel-vpd", WsfcVpd);

/* ------------------------------------------------------------ frost watch */
// Defaults in °F / mph (set in Home Assistant's units in the config).
const WATCH = { heat_danger: 103, heat_caution: 90, frost_temp: 36, frost_night_temp: 41, frost_dew: 32, frost_wind: 10, frost_low: 34, freeze: 32 };
const ICON = { danger: "mdi:thermometer-alert", heat: "mdi:white-balance-sunny", frost: "mdi:snowflake-alert", tonight: "mdi:snowflake-thermometer", calm: "mdi:check-circle-outline", none: "mdi:help-circle-outline" };

/**
 * The watch for live readings (°F, mph): { state, title, detail }.
 * low = tonight's forecast low (°F) or null; night = sun down.
 */
export function watchState({ t, feels, dew, wind, low, night }, th = WATCH) {
  const f = (x) => fmt(x, 0);
  if (feels != null && feels >= th.heat_danger) return { state: "danger", title: "Heat danger", detail: `It feels like ${f(feels)}°F. Stay in the shade, drink water, check on others.` };
  if (feels != null && feels >= th.heat_caution) return { state: "heat", title: "Heat caution", detail: `It feels like ${f(feels)}°F. Take it easy in the sun.` };
  if (t != null && (t <= th.frost_temp || (night && t <= th.frost_night_temp && dew != null && dew <= th.frost_dew && (wind == null || wind < th.frost_wind))))
    return { state: "frost", title: t <= th.freeze ? "Freezing now" : "Frost possible", detail: "Protect tender plants and cover outdoor taps." };
  if (low != null && low <= th.frost_low)
    return { state: "tonight", title: low <= th.freeze ? "Freeze likely tonight" : "Frost possible tonight", detail: `Forecast low ${f(low)}°F. Cover or bring in tender plants before evening.` };
  if (t == null) return { state: "none", title: "Waiting for the station", detail: "" };
  return { state: "calm", title: "No frost or heat risk", detail: low != null ? `Tonight's low ${f(low)}°F.` : "" };
}

class WsfcFrostWatch extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false }, _hourly: { state: true }, _daily: { state: true } };
  static styles = [
    panelStyles,
    css`
      .box { display: flex; gap: 12px; align-items: center; padding: calc(10px * var(--wsfc-sy, 1)) calc(12px * var(--wsfc-sx, 1)); border-radius: 12px; background: rgba(127, 127, 127, 0.1); }
      .box ha-icon { --mdc-icon-size: 36px; flex: 0 0 auto; }
      .t { font-size: 17px; font-weight: 600; }
      .d { font-size: 13px; color: var(--secondary-text-color); margin-top: 2px; }
      .danger { background: #b71c32; color: #fff; }
      .danger .d { color: rgba(255, 255, 255, 0.85); }
      .heat { background: color-mix(in srgb, #ffb347 35%, transparent); }
      .heat ha-icon { color: #ff7a1f; }
      .frost, .tonight { background: color-mix(in srgb, #7fc3ff 28%, transparent); }
      .frost ha-icon, .tonight ha-icon { color: #4aa3ff; }
      .calm ha-icon { color: var(--success-color, #43a047); }
      .note { font-size: 11px; color: var(--wsfc-muted); line-height: 1.4; margin-top: 8px; }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    this._sub();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this._unsub?.forEach((u) => u());
    this._unsub = null;
  }
  updated(changed) {
    if (changed.has("hass") && !this._unsub) this._sub();
  }
  _sub() {
    const id = this.station?.entity;
    if (!this.hass || !id || this._unsub) return;
    this._unsub = [watchForecast(this.hass, id, "hourly", (f) => (this._hourly = f)), watchForecast(this.hass, id, "daily", (f) => (this._daily = f))];
  }

  // Tonight's low (°F): the lowest hourly forecast in the next 18 h, else the daily low.
  _low(unit) {
    const conv = (x) => (x == null ? null : toF({ value: Number(x), unit }));
    const now = Date.now();
    const hrs = (this._hourly || []).filter((f) => { const t = Date.parse(f.datetime); return t > now && t < now + 18 * 3600e3; }).map((f) => Number(f.temperature)).filter(Number.isFinite);
    if (hrs.length) return conv(Math.min(...hrs));
    const d = (this._daily || []).map((f) => f.templow).filter((x) => x != null);
    return d.length ? conv(Math.min(...d.slice(0, 2).map(Number))) : null;
  }

  render() {
    if (!this.hass) return nothing;
    const c = this.config || {}, s = this.station, h = this.hass;
    const metric = h.config?.unit_system?.temperature === "°C";
    // Thresholds from the config are in Home Assistant's units.
    const th = { ...WATCH };
    for (const k of Object.keys(WATCH)) {
      if (c[k] == null) continue;
      th[k] = k === "frost_wind" ? (metric ? c[k] / 1.609344 : c[k]) : metric ? (c[k] * 9) / 5 + 32 : c[k];
    }
    const t = metricValue(s, h, "temperature"), feels = metricValue(s, h, "apparent_temperature"), dew = metricValue(s, h, "dew_point"), wind = metricValue(s, h, "wind_speed");
    const sun = h.states["sun.sun"]?.state;
    const hr = new Date().getHours();
    const night = sun ? sun === "below_horizon" : hr >= 16 || hr < 9;
    const w = this.hass.states[s?.entity];
    const unit = w?.attributes?.temperature_unit || (metric ? "°C" : "°F");
    const st = watchState({ t: toF(t), feels: toF(feels), dew: toF(dew), wind: toMph(wind), low: c.use_forecast === false ? null : this._low(unit), night }, th);
    // Show °C when Home Assistant does.
    const text = (x) => (metric ? x.replace(/(-?\d+)°F/g, (_m, n) => `${Math.round(((Number(n) - 32) * 5) / 9)}°C`) : x);
    return html`${head(c, "mdi:snowflake-thermometer", "Frost & heat watch")}
      <div class="box ${st.state}" role="status">
        <ha-icon icon=${ICON[st.state]}></ha-icon>
        <div><div class="t">${st.title}</div>${st.detail ? html`<div class="d">${text(st.detail)}</div>` : nothing}</div>
      </div>
      ${c.show_note === false ? nothing : html`<div class="note">Rules on this station's readings and the forecast, not an official warning — for those, see your weather service.</div>`}`;
  }
}
customElements.get("wsfc-panel-frost-watch") || customElements.define("wsfc-panel-frost-watch", WsfcFrostWatch);

// For the docs generator and tests (like globalThis.__wsfcSchemas).
globalThis.__wsfcHelpers = { ...(globalThis.__wsfcHelpers || {}), vpdFrom, vpdBand, watchState, gardenSeason };
