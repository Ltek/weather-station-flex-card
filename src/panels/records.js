// Weather records: this station's own records from Home Assistant's long-term
// statistics, plus area records from a nearby CoAgMET / Northern Water station
// (sensor from the coagmet_records package) until the station's own history is
// long enough. A badge marks a day that beats the area record for its date.
import { LitElement, html, css, nothing } from "lit";
import { panelStyles, head, fmt, moreInfo } from "./shared.js";
import { metricEntity } from "../card/metrics.js";
import { fetchStatistics, fetchToday } from "../card/history.js";

const DIRS = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];

/** The area-records sensor: the configured one, else any with CoAgMET attributes. */
export function recordsEntity(hass, c = {}) {
  if (c.records_entity) return hass?.states?.[c.records_entity] ? c.records_entity : null;
  return Object.keys(hass?.states || {}).find((id) => id.startsWith("sensor.") && hass.states[id].attributes?.coagmet_station) || null;
}

/** Distance (mi or km) and compass direction from home to a point. */
export function fromHome(hass, lat, lon, metric) {
  const la = Number(hass?.config?.latitude), lo = Number(hass?.config?.longitude);
  if (![la, lo, lat, lon].every(Number.isFinite)) return null;
  const dy = (lat - la) * 111.32, dx = (lon - lo) * 111.32 * Math.cos((la * Math.PI) / 180);
  const km = Math.hypot(dx, dy);
  const dir = DIRS[Math.round(((Math.atan2(dx, dy) * 180) / Math.PI + 360) % 360 / 22.5) % 16];
  return { dist: metric ? km : km * 0.621371, unit: metric ? "km" : "mi", dir };
}

// The sensor reports US units; show them in Home Assistant's.
function units(hass) {
  const metric = hass?.config?.unit_system?.temperature === "°C";
  return {
    metric,
    temp: (f) => (metric ? ((f - 32) * 5) / 9 : f),
    tUnit: metric ? "°C" : "°F",
    speed: (mph) => (metric ? mph * 1.609344 : mph),
    sUnit: metric ? "km/h" : "mph",
    rain: (inch) => (metric ? inch * 25.4 : inch),
    rUnit: metric ? "mm" : "in",
    rDigits: metric ? 0 : 2,
  };
}

const parseDay = (s) => (s ? new Date(`${s}T12:00:00`) : null);

class WsfcRecords extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false }, _own: { state: true }, _today: { state: true } };
  static styles = [
    panelStyles,
    css`
      .sec { margin-top: 10px; }
      .sec:first-of-type { margin-top: 0; }
      .sec h4 { margin: 0 0 4px; font-size: 12px; font-weight: 600; color: var(--wsfc-muted); text-transform: uppercase; letter-spacing: 0.04em; display: flex; gap: 6px; align-items: baseline; }
      .sec h4 small { text-transform: none; letter-spacing: 0; font-weight: 400; }
      .row { display: grid; grid-template-columns: 1fr auto; gap: 2px 10px; align-items: baseline; padding: 4px 0; border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.2)); }
      .row:last-child { border-bottom: 0; }
      .row span { font-size: 13px; }
      .row b { font-size: 16px; font-weight: 600; font-variant-numeric: tabular-nums; text-align: right; }
      .row small { grid-column: 2; text-align: right; font-size: 11px; color: var(--wsfc-muted); margin-top: -2px; }
      .row.hot b { color: var(--wsfc-temp); }
      .row.cold b { color: var(--wsfc-hum); }
      .badge { display: inline-flex; gap: 6px; align-items: center; margin: 0 0 8px; padding: 4px 10px; border-radius: 999px; font-size: 12px; font-weight: 600;
        background: color-mix(in srgb, var(--wsfc-temp) 22%, transparent); }
      .badge.cold { background: color-mix(in srgb, var(--wsfc-hum) 22%, transparent); }
      .badge ha-icon { --mdc-icon-size: 16px; }
      .src { margin-top: 8px; font-size: 11px; color: var(--wsfc-muted); line-height: 1.4; cursor: pointer; }
      .note { font-size: 13px; color: var(--wsfc-muted); line-height: 1.45; }
      .note code { font-size: 12px; }
    `,
  ];

  updated(changed) {
    if (changed.has("hass") || changed.has("config")) this._load();
  }

  _ids() {
    const s = this.station, h = this.hass, c = this.config || {};
    return {
      temp: c.temperature_entity || metricEntity("temperature", s, h),
      gust: c.gust_entity || metricEntity("wind_gust_speed", s, h),
      rain: c.rain_entity || metricEntity("rain_today", s, h),
    };
  }

  // Own records (daily statistics) and today so far (raw history); the
  // fetches are cached for five minutes.
  async _load() {
    if (!this.hass || this._loading || (this._loadedAt && Date.now() - this._loadedAt < 5 * 60e3)) return;
    this._loading = true;
    try {
      const ids = this._ids();
      if (this.config?.show_station !== false) {
        const st = await fetchStatistics(this.hass, Object.values(ids), 3650, "day");
        const pts = (id) => (id && st[id]) || [];
        const pick = (id, f, better) => pts(id).reduce((b, p) => (p[f] != null && (!b || better(p[f], b.value)) ? { value: p[f], t: p.t } : b), null);
        const first = Math.min(...Object.values(ids).map((id) => pts(id)[0]?.t ?? Infinity));
        this._own = {
          since: Number.isFinite(first) ? first : null,
          days: Math.max(0, ...Object.values(ids).map((id) => pts(id).length)),
          warmest: pick(ids.temp, "max", (a, b) => a > b),
          coldest: pick(ids.temp, "min", (a, b) => a < b),
          gust: pick(ids.gust, "max", (a, b) => a > b),
          wettest: pick(ids.rain, "max", (a, b) => a > b && a > 0),
        };
      }
      if (ids.temp) {
        const h = (await fetchToday(this.hass, [ids.temp]))[ids.temp] || [];
        const v = h.map((p) => p.v).filter((x) => x != null);
        this._today = v.length ? { high: Math.max(...v), low: Math.min(...v) } : null;
      }
      this._loadedAt = Date.now();
    } catch (_e) {
      /* records are optional; keep what we have */
    } finally {
      this._loading = false;
    }
  }

  render() {
    if (!this.hass) return nothing;
    const c = this.config || {};
    const u = units(this.hass);
    const lang = this.hass.locale?.language;
    const dayFmt = new Intl.DateTimeFormat(lang, { day: "numeric", month: "short", year: "numeric" });
    const mdFmt = new Intl.DateTimeFormat(lang, { day: "numeric", month: "long" });
    const monFmt = new Intl.DateTimeFormat(lang, { month: "long" });
    const rid = recordsEntity(this.hass, c);
    const a = rid ? this.hass.states[rid].attributes : null;
    const area = a && !a.error ? a : null;
    const own = this._own;
    const hasOwn = own && own.days > 0 && (own.warmest || own.coldest);

    const t = (v) => (v == null ? "—" : `${fmt(u.temp(v), 1)} ${u.tUnit}`);
    const sp = (v) => (v == null ? "—" : `${fmt(u.speed(v), 0)} ${u.sUnit}`);
    const rn = (v) => (v == null ? "—" : `${fmt(u.rain(v), u.rDigits)} ${u.rUnit}`);
    const year = (r) => (r?.date ? r.date.slice(0, 4) : "");
    const date = (r) => (r?.date ? dayFmt.format(parseDay(r.date)) : "");
    const row = (label, value, small, cls = "") => html`<div class="row ${cls}"><span>${label}</span><b>${value}</b>${small ? html`<small>${small}</small>` : nothing}</div>`;
    const four = (r, when) => html`
      ${row("Warmest", t(r.warmest?.value), when(r.warmest), "hot")}
      ${row("Coldest", t(r.coldest?.value), when(r.coldest), "cold")}
      ${row("Strongest gust", sp(r.gust?.value), when(r.gust))}
      ${row("Wettest day", r.wettest ? rn(r.wettest.value) : "None yet", when(r.wettest))}`;

    // Badge: today so far beats the area record for this date.
    let badge = nothing;
    const td = area?.today, now = this._today;
    if (c.show_badge !== false && td && now && td.years >= 5) {
      const name = mdFmt.format(new Date());
      const since = (area.since || "").slice(0, 4);
      if (td.high && u.temp(now.high) > u.temp(td.high.value)) badge = html`<div class="badge"><ha-icon icon="mdi:thermometer-high"></ha-icon>Warmest ${name} at ${area.station_name} since ${since}</div>`;
      else if (td.low && u.temp(now.low) < u.temp(td.low.value)) badge = html`<div class="badge cold"><ha-icon icon="mdi:snowflake-thermometer"></ha-icon>Coldest ${name} at ${area.station_name} since ${since}</div>`;
    }

    // This station's records, already in its own units.
    const ownRows = c.show_station !== false && hasOwn
      ? html`<div class="sec"><h4>This station <small>since ${dayFmt.format(new Date(own.since))}</small></h4>
          ${row("Warmest", own.warmest ? `${fmt(own.warmest.value, 1)} ${this._unit("temp", u.tUnit)}` : "—", own.warmest && dayFmt.format(new Date(own.warmest.t)), "hot")}
          ${row("Coldest", own.coldest ? `${fmt(own.coldest.value, 1)} ${this._unit("temp", u.tUnit)}` : "—", own.coldest && dayFmt.format(new Date(own.coldest.t)), "cold")}
          ${own.gust ? row("Strongest gust", `${fmt(own.gust.value, 0)} ${this._unit("gust", u.sUnit)}`, dayFmt.format(new Date(own.gust.t))) : nothing}
          ${own.wettest ? row("Wettest day", `${fmt(own.wettest.value, u.rDigits)} ${this._unit("rain", u.rUnit)}`, dayFmt.format(new Date(own.wettest.t))) : nothing}
        </div>`
      : nothing;

    let areaSecs = nothing;
    if (area) {
      const loc = fromHome(this.hass, Number(area.latitude), Number(area.longitude), u.metric);
      areaSecs = html`
        ${c.show_today !== false && td ? html`<div class="sec"><h4>${mdFmt.format(new Date())} <small>${td.years} years</small></h4>
          ${row("Record high", t(td.high?.value), year(td.high), "hot")}
          ${row("Record low", t(td.low?.value), year(td.low), "cold")}
          ${td.wettest ? row("Wettest", rn(td.wettest.value), year(td.wettest)) : nothing}
        </div>` : nothing}
        ${c.show_month !== false && area.month ? html`<div class="sec"><h4>${monFmt.format(new Date(2000, (area.month.month || 1) - 1, 15))}</h4>${four(area.month, date)}</div>` : nothing}
        ${c.show_all_time !== false ? html`<div class="sec"><h4>All-time <small>since ${(area.since || "").slice(0, 4)}</small></h4>${four(area, date)}</div>` : nothing}
        ${c.show_source !== false ? html`<div class="src" @click=${() => moreInfo(this, rid)}>Area records: ${area.station_name}${loc ? `, ${fmt(loc.dist, 1)} ${loc.unit} ${loc.dir}` : ""} · ${area.source || "CoAgMET"}${/^\d{4}-\d\d-\d\d$/.test(this.hass.states[rid].state) ? ` · through ${dayFmt.format(parseDay(this.hass.states[rid].state))}` : ""}</div>` : nothing}`;
    }

    let note = nothing;
    if (!area && !hasOwn) {
      note = html`<div class="note">${a?.error
        ? html`Area records unavailable: ${a.error}`
        : html`No records yet. Your station's own records appear as Home Assistant collects daily statistics; for area records now, install the <code>coagmet_records</code> package (see the configuration guide).`}</div>`;
    }

    return html`${head(c, "mdi:trophy-outline", "Weather records")}${badge}${ownRows}${areaSecs}${note}`;
  }

  // Unit of the station's own entity, for its own records.
  _unit(kind, fallback) {
    const id = this._ids()[kind];
    return this.hass?.states?.[id]?.attributes?.unit_of_measurement || fallback;
  }
}

customElements.get("wsfc-panel-records") || customElements.define("wsfc-panel-records", WsfcRecords);
