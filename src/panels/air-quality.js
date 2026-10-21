// Air quality: the US AQI with its EPA category, a 0–300+ scale, and one row
// per pollutant (PM2.5, PM10, ozone, CO2) coloured by its own EPA category.
// Data: the station's own air sensors, else AirNow, else any outdoor sensor
// with the matching device class (see card/air.js).
import { LitElement, html, css, nothing } from "lit";
import { panelStyles, head, moreInfo, fmt } from "./shared.js";
import { aqEntity, airnowStation, AQI_LEVELS, aqiLevel, concentrationLevel, AQ_KINDS } from "../card/air.js";
import { entityValue } from "../card/resolve.js";
import { digitsFor } from "../card/metrics.js";

const POLLUTANTS = ["pm2_5", "pm10", "ozone", "co2"];

/** Everything the panel shows, from live states (exported for tests). */
export function airQualityModel(config, station, hass) {
  const c = config || {};
  const eid = (k) => c.entities?.[k] || aqEntity(station, hass, k);
  const aqiE = eid("aqi");
  const aqi = entityValue(hass, aqiE);
  const aqiNum = typeof aqi?.value === "number" ? aqi.value : null;
  const lvl = aqiLevel(aqiNum);
  const st = aqiE ? hass.states[aqiE] : null;
  const areaE = aqiE && airnowStation(hass, aqiE);
  const area = areaE ? entityValue(hass, areaE)?.value : null;
  const show = Array.isArray(c.pollutants) && c.pollutants.length ? c.pollutants : POLLUTANTS;
  const rows = show
    .map((k) => {
      const e = eid(k);
      const v = entityValue(hass, e);
      if (!e || !v) return null;
      const level = concentrationLevel(k, v.value, v.unit);
      return { k, e, label: AQ_KINDS[k]?.label || k, value: v.value, unit: v.unit, level, digits: digitsFor(k, v.unit) };
    })
    .filter(Boolean);
  return {
    aqiE, aqi: aqiNum, level: lvl,
    name: st?.attributes?.description || (lvl != null ? AQI_LEVELS[lvl].name : ""),
    area, time: st?.attributes?.time || null, rows,
    entities: [aqiE, areaE, ...rows.map((r) => r.e)].filter(Boolean),
  };
}

class WsfcAirQuality extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false } };
  static styles = [
    panelStyles,
    css`
      .top { display: flex; align-items: center; gap: 14px; cursor: pointer; }
      .aqi { font-size: 40px; font-weight: 600; line-height: 1; min-width: 2.2ch; }
      .cat { font-size: 15px; font-weight: 500; }
      .sub { font-size: 12px; color: var(--wsfc-muted); }
      .scale { position: relative; display: flex; height: 8px; border-radius: 4px; overflow: hidden; margin: 12px 0 4px; }
      .scale span { flex: 1; opacity: 0.85; }
      .mark { position: absolute; top: -3px; width: 4px; height: 14px; margin-left: -2px; border-radius: 2px; background: var(--primary-text-color); box-shadow: 0 0 0 1px var(--card-background-color, #000); }
      .ticks { position: relative; height: 12px; font-size: 10px; color: var(--wsfc-muted); }
      .ticks span { position: absolute; transform: translateX(-50%); }
      .ticks span:first-child { transform: none; }
      .ticks span:last-child { transform: translateX(-100%); }
      .rows { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 6px; margin-top: 10px; }
      .row { display: flex; align-items: center; gap: 8px; padding: 6px 8px; border-radius: 10px; background: rgba(127, 127, 127, 0.08); cursor: pointer; }
      .dot { width: 10px; height: 10px; border-radius: 50%; flex: 0 0 auto; background: var(--c, var(--wsfc-muted)); }
      .row .n { font-size: 11px; color: var(--wsfc-muted); }
      .row .v { font-size: 14px; font-weight: 500; white-space: nowrap; }
      .row .v small { font-size: 11px; font-weight: 400; color: var(--wsfc-muted); margin-left: 2px; }
    `,
  ];

  // Redraw only when one of the panel's own entities changes.
  shouldUpdate(changed) {
    if (changed.size !== 1 || !changed.has("hass")) return true;
    const old = changed.get("hass");
    if (!old || !this._ids) return true;
    return this._ids.some((e) => old.states[e] !== this.hass.states[e]);
  }

  render() {
    if (!this.hass) return nothing;
    const c = this.config || {};
    const m = airQualityModel(c, this.station, this.hass);
    this._ids = m.entities;
    if (!m.aqiE && !m.rows.length) {
      return html`${head(c, "mdi:air-filter", "Air quality")}
        <div class="note">No air-quality sensors found. Add Home Assistant's AirNow integration (free key from airnowapi.org), an outdoor PM2.5 sensor, or set the entities under this panel's options.</div>`;
    }
    const color = m.level != null ? AQI_LEVELS[m.level].color : "var(--wsfc-muted)";
    const pos = m.aqi != null ? Math.min(100, (Math.min(m.aqi, 300) / 300) * 100) : null;
    const upd = m.time ? new Date(m.time) : null;
    return html`
      ${head(c, "mdi:air-filter", "Air quality")}
      ${m.aqiE ? html`
        <div class="top" @click=${() => moreInfo(this, m.aqiE)}>
          <span class="aqi" style="color:${color}">${fmt(m.aqi)}</span>
          <div>
            <div class="cat">${m.name || "—"}</div>
            <div class="sub">US AQI${m.area ? ` · ${m.area}` : ""}${upd && !isNaN(upd) ? ` · ${upd.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}` : ""}</div>
          </div>
        </div>
        ${c.show_scale === false ? nothing : html`
          <div class="scale" role="img" aria-label="AQI ${fmt(m.aqi)} on a 0 to 300 scale">
            ${AQI_LEVELS.slice(0, 5).map((l, i) => html`<span style="background:${l.color};flex:${i < 4 ? 50 : 100}"></span>`)}
            ${pos != null ? html`<i class="mark" style="left:${pos}%"></i>` : nothing}
          </div>
          <div class="ticks">${[0, 50, 100, 150, 200, 300].map((t) => html`<span style="left:${(t / 300) * 100}%">${t === 300 ? "300+" : t}</span>`)}</div>`}
      ` : nothing}
      ${m.rows.length ? html`<div class="rows">${m.rows.map((r) => html`
        <div class="row" style=${r.level != null ? `--c:${AQI_LEVELS[r.level].color}` : ""} @click=${() => moreInfo(this, r.e)}
          title=${r.level != null ? AQI_LEVELS[r.level].name : r.e}>
          <span class="dot"></span>
          <div><div class="n">${r.label}</div><div class="v">${typeof r.value === "number" ? fmt(r.value, r.digits) : r.value}<small>${r.unit}</small></div></div>
        </div>`)}</div>` : nothing}
    `;
  }
}

customElements.get("wsfc-panel-air-quality") || customElements.define("wsfc-panel-air-quality", WsfcAirQuality);
