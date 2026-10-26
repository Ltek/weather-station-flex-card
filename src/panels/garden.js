// Frost & the garden:
//   - frost outlook: the coming nights' lows (weather forecast, or Open-Meteo)
//   - this season: first / last frost, frost nights, the typical first frost
//   - growing degree days since January 1 (86/50 method)
//   - soil: temperature and moisture — the station's soil sensors (Ecowitt
//     WH51 …), else the Soil Temperature integration (HA-Get-Soil-Temp), else
//     Open-Meteo — with what's ready to plant
//   - water: the last week's rain against what the garden lost (reference
//     evapotranspiration)
// Season and degree days come from the station's own history when it covers
// them, else the area data (CoAgMET, else Open-Meteo; see card/climate.js).
import { LitElement, html, css, nothing } from "lit";
import { panelStyles, head, fmt, moreInfo, statStyles, statRow } from "./shared.js";
import { entityValue } from "../card/resolve.js";
import { metricEntity } from "../card/metrics.js";
import { fetchStatistics } from "../card/history.js";
import { watchForecast } from "../card/forecast.js";
import { areaSummary, openMeteoNow, convert, convertDelta, TMIN, PRECIP, ET0 } from "../card/climate.js";

const toF = (v, u) => (u === "°C" ? (v * 9) / 5 + 32 : v);

/** Soil temperature (°F) → what can be sown. */
export function plantingHint(f) {
  if (f == null) return "";
  if (f < 40) return "Too cold to sow anything";
  if (f < 50) return "Peas, spinach and lettuce can go in";
  if (f < 60) return "Cool-season crops; wait on beans and squash";
  if (f < 70) return "Beans, corn and squash";
  return "Warm enough for tomatoes, peppers and melons";
}

/** Sensors from the Soil Temperature integration (HA-Get-Soil-Temp), if installed. */
function soilIntegration(hass) {
  const reg = hass?.entities || {};
  const ids = Object.keys(reg).filter((e) => reg[e]?.platform === "soil_temperature" && e.startsWith("sensor."));
  const cur = ids.filter((e) => /current/.test(e) && !/average/.test(e));
  return cur.find((e) => !/_(0|18|54)cm/.test(e)) || cur[0] || null;
}

class WsfcGarden extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false }, _area: { state: true }, _om: { state: true }, _own: { state: true }, _daily: { state: true } };
  static styles = [
    panelStyles,
    statStyles,
    css`
      .nights { display: grid; grid-template-columns: repeat(auto-fit, minmax(calc(44px * var(--wsfc-sx, 1)), 1fr)); gap: calc(4px * var(--wsfc-sx, 1)); margin-bottom: 4px; }
      .n { display: flex; flex-direction: column; align-items: center; gap: 2px; padding: calc(4px * var(--wsfc-sy, 1)) 2px; border-radius: 8px; background: rgba(127, 127, 127, 0.08); font-size: 11px; color: var(--secondary-text-color); }
      .n b { font-size: 14px; color: var(--primary-text-color); font-variant-numeric: tabular-nums; }
      .n.frost { background: color-mix(in srgb, #4aa3ff 26%, transparent); }
      .n.freeze { background: color-mix(in srgb, #4aa3ff 45%, transparent); }
      .n.frost b, .n.freeze b { color: #9fd0ff; }
      .n ha-icon { --mdc-icon-size: 14px; color: #7fc3ff; }
      .hint { font-size: 12px; color: var(--secondary-text-color); margin-top: 2px; }
      .bal { font-size: 13px; margin-top: 4px; }
      .bal.dry b { color: var(--warning-color, #ffa600); }
      .bal.wet b { color: var(--success-color, #43a047); }
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
  }
  updated(changed) {
    if (changed.has("hass") && !this._unsub) this._sub();
    if ((changed.has("hass") || changed.has("config")) && (!this._at || Date.now() - this._at > 10 * 60e3)) this._load();
  }
  _sub() {
    const id = this.station?.entity;
    if (this.hass && id && !this._unsub) this._unsub = watchForecast(this.hass, id, "daily", (f) => (this._daily = f));
  }

  async _load() {
    if (!this.hass || this._busy) return;
    this._busy = true;
    try {
      const c = this.config || {};
      const [area, om] = await Promise.all([areaSummary(this.hass, c), c.open_meteo === false ? null : openMeteoNow(this.hass, c)]);
      this._area = area;
      this._om = om;
      // The station's own daily lows / highs / rain, for the season and degree days.
      const t = metricEntity("temperature", this.station, this.hass), r = metricEntity("rain_today", this.station, this.hass);
      const st = await fetchStatistics(this.hass, [t, r].filter(Boolean), 400, "day");
      this._own = { temp: st[t] || [], rain: st[r] || [] };
      this._at = Date.now();
    } catch (_e) {
      /* optional */
    } finally {
      this._busy = false;
    }
  }

  render() {
    if (!this.hass) return nothing;
    const c = this.config || {}, h = this.hass;
    const metric = h.config?.unit_system?.temperature === "°C";
    const tU = metric ? "°C" : "°F", rU = metric ? "mm" : "in", rD = metric ? 1 : 2;
    const lang = h.locale?.language;
    const md = new Intl.DateTimeFormat(lang, { month: "short", day: "numeric" });
    const wd = new Intl.DateTimeFormat(lang, { weekday: "short" });
    const area = this._area, om = this._om;
    const tempOf = (v, u) => convert(v, u, h)?.value;
    const freeze = metric ? 0 : 32, frostAt = metric ? 2 : 36; // the frost watch's "frost possible"
    const parts = [];

    // --- Frost outlook: the next nights' lows.
    if (c.show_outlook !== false) {
      let nights = [];
      const w = h.states[this.station?.entity];
      const wU = w?.attributes?.temperature_unit || tU;
      if (c.outlook_source !== "open_meteo") {
        nights = (this._daily || []).filter((f) => f.templow != null).slice(0, 7).map((f) => ({ d: new Date(f.datetime), low: tempOf(f.templow, wU) }));
      }
      if (!nights.length && om) {
        nights = om.days.filter((d) => d.date >= om.today && d[TMIN] != null).slice(0, 7).map((d) => ({ d: new Date(`${d.date}T12:00:00`), low: tempOf(d[TMIN], om.daily_units[TMIN]) }));
      }
      if (nights.length) {
        const cold = nights.filter((n) => n.low <= frostAt);
        parts.push(html`<div class="sec"><h4>Frost outlook <small>${cold.length ? `${cold.length} cold night${cold.length > 1 ? "s" : ""}` : "no frost in sight"}</small></h4>
          <div class="nights">${nights.map((n, i) => html`<div class="n ${n.low <= freeze ? "freeze" : n.low <= frostAt ? "frost" : ""}" title=${`${md.format(n.d)}: low ${fmt(n.low, 0)}${tU}`}>
            <span>${i === 0 ? "Tonight" : wd.format(n.d)}</span><b>${fmt(n.low, 0)}°</b>${n.low <= frostAt ? html`<ha-icon icon="mdi:snowflake"></ha-icon>` : nothing}</div>`)}</div></div>`);
      }
    }

    // --- This season (from July 1) and degree days (from January 1).
    const now = new Date();
    const own = this._own?.temp || [];
    const seasonStart = new Date(now.getMonth() >= 6 ? now.getFullYear() : now.getFullYear() - 1, 6, 1).getTime();
    const yearStart = new Date(now.getFullYear(), 0, 1).getTime();
    const ownCovers = (t) => own.length && own[0].t <= t + 864e5;
    const tUnit = this.hass.states[metricEntity("temperature", this.station, h)]?.attributes?.unit_of_measurement || tU;
    if (c.show_season !== false) {
      let first = null, last = null, nights = 0, src = null, typical = null;
      if (ownCovers(seasonStart)) {
        const f = own.filter((p) => p.t >= seasonStart && p.min != null && tempOf(p.min, tUnit) <= freeze);
        nights = f.length;
        if (f.length) { first = { d: new Date(f[0].t), v: tempOf(f[0].min, tUnit) }; last = { d: new Date(f.at(-1).t), v: tempOf(f.at(-1).min, tUnit) }; }
        src = "this station";
      } else if (area?.frost) {
        const F = area.frost, u = area.daily_units?.[TMIN];
        nights = F.nights;
        if (F.first) first = { d: new Date(`${F.first.date}T12:00:00`), v: tempOf(F.first.value, u) };
        if (F.last) last = { d: new Date(`${F.last.date}T12:00:00`), v: tempOf(F.last.value, u) };
        src = area.kind === "modelled" ? "Open-Meteo (modelled)" : area.station_name;
      }
      if (area?.frost?.typical_first) typical = new Date(`2000-${area.frost.typical_first}T12:00:00`);
      if (src) {
        const spring = now.getMonth() < 6;
        parts.push(html`<div class="sec"><h4>Frost this season <small>since July 1 · ${src}</small></h4>
          ${statRow(spring ? "First frost last fall" : "First frost", first ? md.format(first.d) : "Not yet", first ? `low ${fmt(first.v, 0)}${tU}` : typical ? `usually around ${md.format(typical)}` : `no night at or below ${freeze}${tU}`, "cold")}
          ${spring && last ? statRow("Latest frost so far", md.format(last.d), `low ${fmt(last.v, 0)}${tU}`, "cold") : nothing}
          ${statRow("Frost nights", String(nights), `at or below ${freeze}${tU}`)}
          ${first && typical ? statRow("Typical first frost", md.format(typical), area?.kind === "modelled" ? "Open-Meteo" : area?.station_name) : nothing}
        </div>`);
      }
    }
    if (c.show_gdd !== false) {
      let gdd = null, src = null;
      if (ownCovers(yearStart)) {
        const [base, cap] = metric ? [10, 30] : [50, 86];
        gdd = own.filter((p) => p.t >= yearStart && p.min != null && p.max != null).reduce((a, p) => {
          const hi = tempOf(p.max, tUnit), lo = tempOf(p.min, tUnit);
          return a + Math.max(0, (Math.min(hi, cap) + Math.min(Math.max(lo, base), cap)) / 2 - base);
        }, 0);
        src = "this station";
      } else if (area?.growing_degree_days) {
        gdd = convertDelta(area.growing_degree_days.value, area.daily_units?.temperature_2m_max, h)?.value;
        src = area.kind === "modelled" ? "Open-Meteo (modelled)" : area.station_name;
      }
      if (gdd != null) parts.push(html`<div class="sec"><h4>Growing degree days <small>since January 1 · ${src}</small></h4>
        ${statRow(`Base ${metric ? "10 °C" : "50 °F"}`, fmt(gdd, 0), "Crops and insects develop in step with them")}</div>`);
    }

    // --- Soil.
    if (c.show_soil !== false) {
      const st = this.station;
      const sens = entityValue(h, c.soil_temperature_entity || metricEntity("soil_temperature", st, h)) || entityValue(h, soilIntegration(h));
      const moist = entityValue(h, c.soil_moisture_entity || metricEntity("soil_moisture", st, h));
      const omT = om?.soil?.soil_temperature_6cm, omT18 = om?.soil?.soil_temperature_18cm, omM = om?.soil?.soil_moisture_3_to_9cm;
      const temp = sens && Number.isFinite(sens.value) ? { value: tempOf(sens.value, sens.unit), src: "sensor", e: sens.entity } : omT ? { value: tempOf(omT.value, omT.unit), src: "Open-Meteo, 6 cm" } : null;
      const rows = [];
      if (temp) rows.push(statRow("Soil temperature", `${fmt(temp.value, 1)}${tU}`, temp.src === "sensor" ? "" : temp.src, "", temp.e ? () => moreInfo(this, temp.e) : null));
      if (!sens && omT18) rows.push(statRow("Deeper (18 cm)", `${fmt(tempOf(omT18.value, omT18.unit), 1)}${tU}`, "Open-Meteo"));
      if (moist && Number.isFinite(moist.value)) rows.push(statRow("Soil moisture", `${fmt(moist.value, 0)}${moist.unit || "%"}`, "", "", () => moreInfo(this, moist.entity)));
      else if (omM) rows.push(statRow("Soil moisture", `${fmt(omM.value * 100, 0)}%`, "Open-Meteo, 3–9 cm (water by volume)"));
      if (rows.length) parts.push(html`<div class="sec"><h4>Soil</h4>${rows}${temp ? html`<div class="hint">${plantingHint(toF(temp.value, tU))}</div>` : nothing}</div>`);
    }

    // --- Water: last week's rain against evapotranspiration.
    if (c.show_water !== false) {
      let et = null, etSrc = null;
      if (area?.evapotranspiration?.last_7_days != null && area.kind !== "modelled") { et = convert(area.evapotranspiration.last_7_days, area.daily_units?.[ET0], h)?.value; etSrc = area.station_name; }
      else if (om) {
        const past = om.days.filter((d) => d.date < om.today).slice(-7);
        if (past.some((d) => d[ET0] != null)) { et = past.reduce((a, d) => a + (convert(d[ET0], om.daily_units[ET0], h)?.value || 0), 0); etSrc = "Open-Meteo"; }
      }
      // Rain over the same week: the station's history, else the area's.
      let rain = null;
      const rd = this._own?.rain || [];
      const midnight = new Date(); midnight.setHours(0, 0, 0, 0);
      const wk = midnight.getTime() - 7 * 864e5;
      if (rd.length && rd[0].t <= wk + 864e5) {
        const rUnit = h.states[metricEntity("rain_today", this.station, h)]?.attributes?.unit_of_measurement || rU;
        rain = rd.filter((p) => p.t >= wk && p.t < midnight.getTime()).reduce((a, p) => a + (convert(p.max || 0, rUnit === "in" ? "inch" : rUnit, h)?.value || 0), 0);
      } else if (area?.precipitation?.last_7_days != null) rain = convert(area.precipitation.last_7_days, area.daily_units?.[PRECIP], h)?.value;
      if (et != null) {
        const bal = rain != null ? rain - et : null;
        parts.push(html`<div class="sec"><h4>Water, last 7 days</h4>
          ${statRow("Lost by the garden", `${fmt(et, rD)} ${rU}`, `reference evapotranspiration · ${etSrc}`)}
          ${rain != null ? statRow("Rain", `${fmt(rain, rD)} ${rU}`) : nothing}
          ${bal != null ? html`<div class="bal ${bal < 0 ? "dry" : "wet"}">${bal < 0 ? html`Short by <b>${fmt(-bal, rD)} ${rU}</b> — water the garden` : html`<b>${fmt(bal, rD)} ${rU}</b> more rain than the garden used`}</div>` : nothing}
        </div>`);
      }
    }

    return html`${head(c, "mdi:sprout", "Frost & the garden")}${parts.length ? parts : html`<div class="note">${this._at ? "No garden data for this location yet." : "Loading…"}</div>`}`;
  }
}
customElements.get("wsfc-panel-garden") || customElements.define("wsfc-panel-garden", WsfcGarden);

globalThis.__wsfcHelpers = { ...(globalThis.__wsfcHelpers || {}), plantingHint };
