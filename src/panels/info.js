// Small text/summary panels: bulletin (generated "current conditions" text +
// sun/moon + optional alerts), day forecast tile (tomorrow by default),
// heading (section title with station status and optional panel buttons) and
// card (any Home Assistant card).
import { LitElement, html, css, nothing } from "lit";
import { panelStyles, head, fmt, moreInfo, chipStyles } from "./shared.js";
import { metricValue, entityValue, stationStatus } from "../card/resolve.js";
import { metricEntity, cardinal } from "../card/metrics.js";
import { moonInfo, sunInfo, timeFmt, dayFmt } from "../card/astro.js";
import { watchForecast, forecastForDay } from "../card/forecast.js";
import { moonSvg } from "./sun-moon.js";

// The condition icons are rendered light-DOM by the vendored icon provider;
// these fills come from the base card's stylesheet.
const iconFills = css`
  .wsfc-weather-condition-icon-slot { width: var(--icon-size, 72px); height: var(--icon-size, 72px); display: block; }
  .wsfc-weather-condition-icon-slot svg, .wsfc-weather-condition-icon-slot img { width: 100%; height: 100%; }
  .wsfc-weather-condition-icon-slot .rain { fill: var(--weather-icon-rain-color, #30b3ff); }
  .wsfc-weather-condition-icon-slot .sun { fill: var(--weather-icon-sun-color, #fdd93c); }
  .wsfc-weather-condition-icon-slot .moon { fill: var(--weather-icon-moon-color, #fcf497); }
  .wsfc-weather-condition-icon-slot .cloud-back { fill: var(--weather-icon-cloud-back-color, #d4d4d4); }
  .wsfc-weather-condition-icon-slot .cloud-front { fill: var(--weather-icon-cloud-front-color, #f9f9f9); }
  .wsfc-weather-condition-icon-slot .snow { fill: var(--weather-icon-snow-color, #f9f9f9); stroke: var(--weather-icon-snow-stroke-color, #d4d4d4); stroke-width: 1px; paint-order: stroke; }
`;

const conditionLabel = (hass, cond) =>
  hass?.localize?.(`component.weather.entity_component._.state.${cond}`) || String(cond || "").replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase());

/* ---------------------------------------------------------------- bulletin */
class WsfcBulletin extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false } };
  static styles = [
    panelStyles,
    css`
      .summary { font-size: 16px; line-height: 1.45; margin-bottom: 10px; }
      .text { font-size: 13px; line-height: 1.45; color: var(--secondary-text-color); margin-bottom: 10px; white-space: pre-line; }
      .astro { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; border-top: 1px solid var(--divider-color); padding-top: 10px; }
      .astro h4 { margin: 0 0 4px; font-size: 13px; font-weight: 600; display: flex; gap: 6px; align-items: center; }
      .astro h4 ha-icon { --mdc-icon-size: 18px; color: var(--wsfc-muted); }
      .astro h4 svg { width: 18px; height: 18px; }
      .astro p { margin: 0; font-size: 12px; color: var(--secondary-text-color); line-height: 1.5; }
      .alert { border-left: 3px solid var(--warning-color, #ffa600); padding: 6px 10px; margin-bottom: 10px; border-radius: 4px; background: rgba(255, 166, 0, 0.1); font-size: 13px; cursor: pointer; }
      .alert.severe { border-color: var(--error-color, #db4437); background: rgba(219, 68, 55, 0.12); }
      .alert b { display: block; }
    `,
  ];

  render() {
    if (!this.hass) return nothing;
    const w = this.hass.states[this.station?.entity];
    const cond = w?.state;
    return html`
      ${head(this.config, "mdi:text-box-outline", this.config?.title || `Current: ${cond ? conditionLabel(this.hass, cond) : "—"}`)}
      ${this._alerts()}
      <div class="summary">${this._summary()}</div>
      ${this.config?.entity ? this._text(this.config.entity) : nothing}
      ${this.config?.show_sun === false && this.config?.show_moon === false ? nothing : this._astro()}
    `;
  }

  _summary() {
    const s = this.station, h = this.hass;
    const parts = [];
    const t = metricValue(s, h, "temperature");
    if (t) parts.push(`${fmt(t.value, 1)}${t.unit}`);
    const f = metricValue(s, h, "apparent_temperature");
    if (f && t && Math.abs(f.value - t.value) >= 2) parts.push(`feels like ${fmt(f.value, 0)}${f.unit}`);
    const ws = metricValue(s, h, "wind_speed"), wd = metricValue(s, h, "wind_bearing"), wg = metricValue(s, h, "wind_gust_speed");
    if (ws) {
      if (ws.value < 1) parts.push("calm");
      else parts.push(`wind ${wd ? `from the ${cardinal(wd.value)} ` : ""}${fmt(ws.value, 0)} ${ws.unit}${wg && wg.value > ws.value * 1.3 ? `, gusting ${fmt(wg.value, 0)}` : ""}`);
    }
    const rr = metricValue(s, h, "precipitation");
    const rt = entityValue(h, metricEntity("rain_today", s, h));
    if (rr && rr.value > 0) parts.push(`raining ${fmt(rr.value, 2)} ${rr.unit}`);
    else if (rt && rt.value > 0) parts.push(`${fmt(rt.value, 2)} ${rt.unit} of rain today`);
    else if (rr || rt) parts.push("dry");
    const hu = metricValue(s, h, "humidity");
    if (hu) parts.push(`humidity ${fmt(hu.value, 0)}%`);
    if (!parts.length) return "Waiting for station data.";
    const txt = parts.join(", ");
    return txt[0].toUpperCase() + txt.slice(1) + ".";
  }

  _text(eid) {
    const st = this.hass.states[eid];
    if (!st) return nothing;
    const a = st.attributes || {};
    // Long text sensors often keep the text in an attribute; state is capped at 255 chars.
    const text = this.config.attribute ? a[this.config.attribute] : a.forecast_text || a.detailed_forecast || st.state;
    return html`<div class="text" @click=${() => moreInfo(this, eid)}>${text}</div>`;
  }

  // NWS Alerts integration: state = count, attributes.Alerts = [{Event, Headline, Severity}].
  _alerts() {
    const eid = this.config?.alerts_entity;
    const st = eid && this.hass.states[eid];
    if (!st) return nothing;
    const list = st.attributes?.Alerts || st.attributes?.alerts || [];
    if (!Array.isArray(list) || !list.length) return nothing;
    return list.slice(0, 3).map((a) => {
      const sev = String(a.Severity || a.severity || "").toLowerCase();
      return html`<div class="alert ${/severe|extreme/.test(sev) ? "severe" : ""}" @click=${() => moreInfo(this, eid)}>
        <b>${a.Event || a.event || a.title || "Weather alert"}</b>${a.Headline || a.headline || ""}
      </div>`;
    });
  }

  _astro() {
    const tf = timeFmt(this.hass), df = dayFmt(this.hass);
    const sun = sunInfo(this.hass), moon = moonInfo(this.hass);
    const hm = (ms) => `${Math.floor(ms / 3600e3)}h ${String(Math.round((ms % 3600e3) / 60e3)).padStart(2, "0")}m`;
    return html`<div class="astro">
      ${this.config?.show_sun === false || !sun
        ? nothing
        : html`<div><h4><ha-icon icon="mdi:weather-sunset-up"></ha-icon>Sun</h4>
            <p>Rise ${tf.format(sun.sunrise)} · set ${tf.format(sun.sunset)}<br />Solar noon ${tf.format(sun.noon)} · ${hm(sun.daylightMs)} daylight</p></div>`}
      ${this.config?.show_moon === false
        ? nothing
        : html`<div><h4>${moonSvg(moon.phase)}${moon.name}</h4>
            <p>${Math.round(moon.fraction * 100)}% illuminated<br />
            ${moon.nextFull ? html`Full ${df.format(moon.nextFull)}` : ""}${moon.nextNew ? html` · New ${df.format(moon.nextNew)}` : ""}</p></div>`}
    </div>`;
  }
}

/* ------------------------------------------------------------ day forecast */
class WsfcDay extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false }, _daily: { state: true } };
  static styles = [
    panelStyles,
    iconFills,
    css`
      .main { display: flex; align-items: center; gap: 14px; margin: 4px 0 10px; }
      .temps { font-size: 30px; font-weight: 600; }
      .temps .lo { color: var(--wsfc-cold, #42a5f5); }
      .temps .hi { color: var(--wsfc-hot, #ef5350); }
      .cond { font-size: 14px; color: var(--secondary-text-color); }
      .rows { display: grid; grid-template-columns: 1fr auto; gap: 6px 12px; font-size: 13px; border-top: 1px solid var(--divider-color); padding-top: 8px; }
      .rows span:nth-child(odd) { color: var(--secondary-text-color); }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    this._sub();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this._unsub?.();
    this._unsub = null;
    this._subKey = null;
  }
  updated() {
    this._sub();
  }
  _sub() {
    const eid = this.config?.entity || this.station?.entity;
    if (!this.hass || !eid || this._subKey === eid) return;
    this._unsub?.();
    this._subKey = eid;
    this._unsub = watchForecast(this.hass, eid, "daily", (d) => (this._daily = d));
  }

  render() {
    if (!this.hass) return nothing;
    const off = Number(this.config?.day_offset ?? 1);
    const f = forecastForDay(this._daily, off);
    const eid = this.config?.entity || this.station?.entity;
    const w = this.hass.states[eid]?.attributes || {};
    const date = new Date();
    date.setDate(date.getDate() + off);
    const dayName = new Intl.DateTimeFormat(this.hass.locale?.language, { weekday: "long" }).format(date);
    const title = this.config?.title || (off === 0 ? "Today" : off === 1 ? `Tomorrow · ${dayName}` : dayName);
    if (!f) return html`${head(this.config, "mdi:calendar-today", title)}<div class="note">Forecast not available yet.</div>`;
    const tu = w.temperature_unit || "", pu = w.precipitation_unit || "", su = w.wind_speed_unit || "";
    const rows = [];
    if (f.precipitation != null) rows.push(["Precipitation", `${fmt(f.precipitation, pu === "in" ? 2 : 1)} ${pu}`]);
    if (f.precipitation_probability != null) rows.push(["Chance of rain", `${fmt(f.precipitation_probability)}%`]);
    if (f.wind_speed != null) rows.push(["Wind", `${f.wind_bearing != null ? `${cardinal(Number(f.wind_bearing))} ` : ""}${fmt(f.wind_speed)} ${su}`]);
    if (f.wind_gust_speed != null) rows.push(["Gusts", `${fmt(f.wind_gust_speed)} ${su}`]);
    if (f.humidity != null) rows.push(["Humidity", `${fmt(f.humidity)}%`]);
    if (f.uv_index != null) rows.push(["UV index", fmt(f.uv_index, 1)]);
    return html`
      ${head(this.config, "mdi:calendar-today", title)}
      <div class="main" @click=${() => moreInfo(this, eid)}>
        <wsfc-weather-condition-icon-provider .config=${{}} .state=${f.condition} style="--icon-size:${this.config?.icon_size || 72}px"></wsfc-weather-condition-icon-provider>
        <div>
          <div class="temps">${f.templow != null ? html`<span class="lo">${fmt(f.templow)}°</span> / ` : nothing}<span class="hi">${fmt(f.temperature)}°</span></div>
          <div class="cond">${conditionLabel(this.hass, f.condition)}${tu ? ` · ${tu}` : ""}</div>
        </div>
      </div>
      <div class="rows">${rows.map(([k, v]) => html`<span>${k}</span><span>${v}</span>`)}</div>
    `;
  }
}

/* ----------------------------------------------------------------- heading */
class WsfcHeading extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false }, bar: { attribute: false } };
  static styles = [chipStyles, css`
    :host { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; min-height: 40px; color: var(--primary-text-color); }
    .lead { --mdc-icon-size: 24px; color: var(--primary-color); }
    .t { font-size: var(--wsfc-heading-size, 20px); font-weight: 600; }
    .sub { font-size: 12px; color: var(--secondary-text-color); }
    .status { font-size: 12px; color: var(--secondary-text-color); display: inline-flex; align-items: center; gap: 5px; }
    .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--c); }
    .grow { flex: 1; }
    .bar { display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end; }
  `];
  render() {
    const c = this.config || {};
    const status = c.show_status ? stationStatus(this.station, this.hass) : null;
    const S = { online: ["Station online", "#43a047"], partial: ["Some readings unavailable", "#ffa600"], offline: ["Station offline", "#db4437"], unconfigured: ["No station sensors", "#9e9e9e"] };
    return html`
      ${c.icon === "" || c.show_icon === false || c.show_title === false ? nothing : html`<ha-icon class="lead" icon=${c.icon || "mdi:chart-box-outline"}></ha-icon>`}
      ${c.show_title === false ? nothing : html`<div><div class="t">${c.title || "Local measurements"}</div>${c.subtitle ? html`<div class="sub">${c.subtitle}</div>` : nothing}</div>`}
      ${status ? html`<span class="status" style="--c:${S[status][1]}"><span class="dot"></span>${S[status][0]}</span>` : nothing}
      <span class="grow"></span>
      ${this.bar ? html`<div class="bar">${this.bar}</div>` : nothing}
    `;
  }
}

/* -------------------------------------------------------------- HA card */
class WsfcCardHost extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false }, _err: { state: true } };
  static styles = [panelStyles, css`.host { flex: 1; min-height: 0; } .host > * { --ha-card-background: transparent; --ha-card-box-shadow: none; --ha-card-border-width: 0; }`];
  render() {
    const cfg = this.config?.card;
    if (!cfg?.type) return html`${head(this.config, "mdi:card-outline", "Card")}<div class="note">Set <code>card:</code> to any Home Assistant card configuration.</div>`;
    this._ensure(cfg);
    if (this._el && this.hass) this._el.hass = this.hass;
    return html`${(this.config?.show_title ?? !!this.config?.title) ? head(this.config, "mdi:card-outline", "") : nothing}
      ${this._err ? html`<div class="note">${this._err}</div>` : html`<div class="host">${this._el || nothing}</div>`}`;
  }
  async _ensure(cfg) {
    const json = JSON.stringify(cfg);
    if (json === this._json) return;
    this._json = json;
    try {
      const helpers = await window.loadCardHelpers?.();
      if (!helpers) throw new Error("Card helpers unavailable");
      if (this._json !== json) return;
      this._el = helpers.createCardElement(cfg);
      this._el.hass = this.hass;
      this._err = undefined;
      this.requestUpdate();
    } catch (e) {
      this._err = `Card failed to load: ${e?.message || e}`;
    }
  }
}

customElements.get("wsfc-panel-bulletin") || customElements.define("wsfc-panel-bulletin", WsfcBulletin);
customElements.get("wsfc-panel-day") || customElements.define("wsfc-panel-day", WsfcDay);
customElements.get("wsfc-panel-heading") || customElements.define("wsfc-panel-heading", WsfcHeading);
customElements.get("wsfc-panel-card") || customElements.define("wsfc-panel-card", WsfcCardHost);
