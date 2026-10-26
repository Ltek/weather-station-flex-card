// Rain totals: last hour, today, last 24 h, this rain event, week, month and
// year from the station's own sensors (week / month / year worked out from
// Home Assistant's daily statistics when there's no sensor), the last day it
// rained, and this month and year against the area's normal (CoAgMET or
// Open-Meteo, see card/climate.js).
import { LitElement, html, css, nothing } from "lit";
import { panelStyles, head, fmt, moreInfo, statStyles, statRow } from "./shared.js";
import { entityValue } from "../card/resolve.js";
import { metricEntity } from "../card/metrics.js";
import { fetchStatistics } from "../card/history.js";
import { areaSummary, convert, PRECIP } from "../card/climate.js";

export const RAIN_ROWS = [
  ["rain_rate", "Raining now"],
  ["rain_hour", "Last hour"],
  ["rain_today", "Today"],
  ["rain_24h", "Last 24 hours"],
  ["rain_event", "This rain event"],
  ["rain_week", "This week"],
  ["rain_month", "This month"],
  ["rain_year", "This year"],
  ["last_rain", "Last rain"],
];
const DEFAULT_ROWS = ["rain_rate", "rain_today", "rain_24h", "rain_event", "rain_week", "rain_month", "rain_year", "last_rain"];

class WsfcRain extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false }, _days: { state: true }, _area: { state: true } };
  static styles = [
    panelStyles,
    statStyles,
    css`
      .cmp { margin-top: calc(10px * var(--wsfc-sy, 1)); display: grid; gap: calc(8px * var(--wsfc-sy, 1)); }
      .cmp .l { display: flex; justify-content: space-between; font-size: 12px; color: var(--secondary-text-color); gap: 8px; }
      .cmp .l b { color: var(--primary-text-color); font-weight: 600; }
      .bar { position: relative; height: 8px; border-radius: 4px; background: rgba(127, 127, 127, 0.18); margin-top: 4px; overflow: hidden; }
      .bar i { position: absolute; left: 0; top: 0; bottom: 0; border-radius: 4px; background: #1e88e5; }
      .bar u { position: absolute; top: -2px; bottom: -2px; width: 2px; background: var(--primary-text-color); opacity: 0.7; }
    `,
  ];

  updated(changed) {
    if ((changed.has("hass") || changed.has("config")) && (!this._at || Date.now() - this._at > 10 * 60e3)) this._load();
  }

  // Daily rain from Home Assistant's statistics (the day's highest "rain today").
  async _load() {
    if (!this.hass || this._busy) return;
    this._busy = true;
    try {
      const id = metricEntity("rain_today", this.station, this.hass);
      if (id) {
        const st = await fetchStatistics(this.hass, [id], 400, "day");
        this._days = (st[id] || []).map((p) => ({ t: p.t, v: p.max ?? 0 }));
      }
      if (this.config?.show_normal !== false) this._area = await areaSummary(this.hass, this.config || {});
      this._at = Date.now();
    } catch (_e) {
      /* optional */
    } finally {
      this._busy = false;
    }
  }

  // Total since `start` (ms) from daily statistics, plus today's live value.
  _sum(start, todayVal) {
    const days = this._days;
    if (!days?.length || days[0].t > start + 864e5) return null; // history doesn't reach back that far
    const midnight = new Date(); midnight.setHours(0, 0, 0, 0);
    const past = days.filter((d) => d.t >= start && d.t < midnight.getTime()).reduce((a, d) => a + (d.v || 0), 0);
    return past + (todayVal || 0);
  }

  render() {
    if (!this.hass) return nothing;
    const c = this.config || {}, s = this.station, h = this.hass;
    const metricHA = h.config?.unit_system?.temperature === "°C";
    const digits = metricHA ? 1 : 2;
    const ent = (k) => entityValue(h, (c.entities || {})[k] || metricEntity(k, s, h));
    const today = ent("rain_today");
    const unit = today?.unit || (metricHA ? "mm" : "in");
    const lang = h.locale?.language;
    const dayFmt = new Intl.DateTimeFormat(lang, { weekday: "short", day: "numeric", month: "short" });
    const show = Array.isArray(c.rows) && c.rows.length ? c.rows : DEFAULT_ROWS;
    const now = new Date();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
    const yearStart = new Date(now.getFullYear(), 0, 1).getTime();
    const week = new Date(now); week.setHours(0, 0, 0, 0); week.setDate(week.getDate() - week.getDay()); // since Sunday, like Ecowitt

    const rows = [];
    for (const k of show) {
      const label = RAIN_ROWS.find(([x]) => x === k)?.[1] || k;
      if (k === "last_rain") {
        const wet = metricHA ? 0.2 : 0.01;
        let last = null;
        if (today?.value >= wet) last = { when: "Today", v: today.value };
        else {
          const d = [...(this._days || [])].reverse().find((x) => x.v >= wet && x.t < new Date().setHours(0, 0, 0, 0));
          if (d) last = { when: dayFmt.format(new Date(d.t)), v: d.v };
          else if (this._area?.precipitation?.last) {
            const a = this._area.precipitation.last, x = convert(a.value, this._area.daily_units?.[PRECIP], h);
            last = { when: dayFmt.format(new Date(`${a.date}T12:00:00`)), v: x?.value, area: true };
          }
        }
        if (last) rows.push(statRow(label, last.when, `${fmt(last.v, digits)} ${unit}${last.area ? ` at ${this._area.station_name}` : ""}`));
        continue;
      }
      const v = ent(k);
      if (k === "rain_rate") {
        if (v && v.value > 0) rows.push(statRow(label, `${fmt(v.value, digits)} ${v.unit}`, null, "", () => moreInfo(this, v.entity)));
        continue;
      }
      if (v && Number.isFinite(v.value)) { rows.push(statRow(label, `${fmt(v.value, digits)} ${v.unit}`, null, "", () => moreInfo(this, v.entity))); continue; }
      // No sensor: work it out from the daily statistics.
      const from = k === "rain_week" ? week.getTime() : k === "rain_month" ? monthStart : k === "rain_year" ? yearStart : null;
      if (from != null) {
        const x = this._sum(from, today?.value);
        if (x != null) rows.push(statRow(label, `${fmt(x, digits)} ${unit}`, "from Home Assistant's history"));
      }
    }

    // This month and year so far against the area's normal.
    let cmp = nothing;
    const P = this._area?.precipitation, U = this._area?.daily_units?.[PRECIP];
    if (c.show_normal !== false && P && P.years >= 5) {
      const cv = (x) => convert(x, U, h)?.value;
      const own = (k, from) => { const v = ent(k); return v && Number.isFinite(v.value) ? v.value : this._sum(from, today?.value); };
      const line = (label, mine, area, normal) => {
        const val = mine ?? area;
        if (val == null || !normal) return nothing;
        const max = Math.max(val, normal) * 1.15 || 1;
        return html`<div>
          <div class="l"><span>${label}: <b>${fmt(val, digits)} ${unit}</b>${mine == null ? ` (${this._area.station_name})` : ""}</span><span>normal ${fmt(normal, digits)} · ${Math.round((val / normal) * 100)}%</span></div>
          <div class="bar"><i style=${`width:${(val / max) * 100}%`}></i><u style=${`left:${(normal / max) * 100}%`}></u></div>
        </div>`;
      };
      const mon = new Intl.DateTimeFormat(lang, { month: "long" }).format(now);
      cmp = html`<div class="cmp">
        ${line(mon, own("rain_month", monthStart), cv(P.month_sum), cv(P.month_normal))}
        ${line("Year to date", own("rain_year", yearStart), cv(P.year_sum), cv(P.year_normal_to_date))}
      </div>
      <div class="src">Normal: ${this._area.kind === "modelled" ? "Open-Meteo (modelled)" : this._area.station_name}, ${P.years} years · ${this._area.source}</div>`;
    }

    return html`${head(c, "mdi:weather-rainy", "Rain totals")}
      ${rows.length ? rows : html`<div class="note">No rain sensors found on the station.</div>`}
      ${cmp}`;
  }
}
customElements.get("wsfc-panel-rain") || customElements.define("wsfc-panel-rain", WsfcRain);
