// Air quality: the US AQI with its EPA category, and one entry per pollutant
// coloured by its own category.
//   layout: scale (default) — like the pollen panel: a header line, then the
//           AQI and one row per pollutant on a segmented EPA colour scale
//           with a marker and the pollutant's rating
//           tiles — compact tiles under the AQI
//           rows — one row per pollutant: icon, name, bar, category chip, value
//           bars — vertical bars side by side on a common AQI scale
// Bars use the EPA AQI for PM2.5, PM10 and ozone; other readings (benzene, CO2,
// or any sensor under `extra:` with its own thresholds) use the same 0–500
// scale built from health standards (see OTHER_STANDARDS in card/air.js).
// Data: the station's own air sensors, else AirNow, else any outdoor sensor
// with the matching device class.
import { LitElement, html, css, nothing } from "lit";
import { panelStyles, head, moreInfo, fmt } from "./shared.js";
import { aqEntity, airnowStation, AQI_LEVELS, aqiLevel, pollutantIndex, AQ_KINDS, OTHER_STANDARDS } from "../card/air.js";
import { entityValue, integrationOf } from "../card/resolve.js";
import { digitsFor } from "../card/metrics.js";

const POLLUTANTS = ["pm2_5", "pm10", "ozone", "co2"];
const ICONS = { pm2_5: "mdi:blur", pm10: "mdi:blur-linear", ozone: "mdi:molecule", co2: "mdi:molecule-co2" };
// Bars and rows are drawn on 0–200 (Good … Unhealthy); higher values fill the bar.
const SCALE_MAX = 200;
const short = (lvl) => (lvl == null ? "" : AQI_LEVELS[lvl].short || AQI_LEVELS[lvl].name);
// Readings without an EPA AQI get plain band names.
const OTHER_NAMES = ["Low", "Moderate", "Elevated", "High", "Very high", "Very high"];
const EDGES = [0, 50, 100, 150, 200, 300, 500];

/** Marker position (0–100 %) on a scale of `n` equal segments, one per category. */
export function scalePos(index, n) {
  if (index == null) return null;
  const v = Math.max(0, Math.min(index, EDGES[n]));
  let i = EDGES.findIndex((e, k) => k > 0 && v <= e) - 1;
  if (i < 0) i = n - 1;
  const frac = (v - EDGES[i]) / (EDGES[i + 1] - EDGES[i]);
  return ((i + frac) / n) * 100;
}

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
  const rows = [];
  for (const k of show) {
    const e = eid(k);
    const v = entityValue(hass, e);
    if (!e || !v || typeof v.value !== "number") continue;
    const index = pollutantIndex(k, v.value, v.unit);
    const epa = k !== "co2";
    rows.push({ k, e, label: AQ_KINDS[k]?.label || k, icon: ICONS[k], value: v.value, unit: v.unit, index, level: aqiLevel(index), epa, digits: k === "ozone" && !/ppm/i.test(v.unit) ? 1 : digitsFor(k, v.unit) });
  }
  // Extra readings, e.g. { entity: sensor.erie_benzene, label: Benzene, thresholds: [1, 3, 9, 30] }.
  for (const x of Array.isArray(c.extra) ? c.extra : []) {
    const ent = typeof x === "string" ? x : x?.entity;
    const v = entityValue(hass, ent);
    if (!v || typeof v.value !== "number") continue;
    const s = hass.states[ent];
    const name = x.label || s?.attributes?.friendly_name || ent;
    const std = Object.entries(OTHER_STANDARDS).find(([, o]) => o.re.test(`${ent} ${name}`));
    const thresholds = Array.isArray(x.thresholds) && x.thresholds.length ? x.thresholds.map(Number) : null;
    const index = thresholds ? pollutantIndex(null, v.value, v.unit, thresholds) : std ? pollutantIndex(std[0], v.value, v.unit) : null;
    rows.push({ k: ent, e: ent, label: name, icon: x.icon || s?.attributes?.icon || "mdi:flask-outline", value: v.value, unit: v.unit, index, level: aqiLevel(index), epa: false, digits: x.digits ?? (Math.abs(v.value) < 1 ? 3 : Math.abs(v.value) < 10 ? 2 : 0) });
  }
  const main = st?.attributes?.main_pollutant || st?.attributes?.dominant_pollutant
    || rows.filter((r) => r.epa && r.index != null).sort((a, b) => b.index - a.index)[0]?.label || "";
  const source = c.source || st?.attributes?.source || (aqiE ? integrationOf(hass, aqiE) : "");
  return {
    aqiE, aqi: aqiNum, level: lvl,
    name: st?.attributes?.description || st?.attributes?.category || (lvl != null ? AQI_LEVELS[lvl].name : ""),
    area, source, main, time: st?.attributes?.time || null, rows,
    entities: [aqiE, areaE, ...rows.map((r) => r.e)].filter(Boolean),
  };
}

const chipLabel = (r) => (r.level == null ? "No standard" : r.epa ? short(r.level) : OTHER_NAMES[r.level]);
const chipTitle = (r) => (r.index == null ? "" : r.epa ? `AQI ${r.index} — ${AQI_LEVELS[r.level].name}` : `Index ${r.index} on the AQI scale`);
const fill = (r) => (r.index == null ? 0 : Math.min(100, (r.index / SCALE_MAX) * 100));
const valueText = (r) => html`${fmt(r.value, r.digits)}<small>${r.unit}</small>`;

class WsfcAirQuality extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false } };
  static styles = [
    panelStyles,
    css`
      :host { --g: #00e400; }
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
      small { font-size: 11px; font-weight: 400; color: var(--wsfc-muted); margin-left: 2px; }

      /* tiles */
      .tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 6px; margin-top: 10px; }
      .tile { display: flex; align-items: center; gap: 8px; padding: 6px 8px; border-radius: 10px; background: rgba(127, 127, 127, 0.08); cursor: pointer; }
      .dot { width: 10px; height: 10px; border-radius: 50%; flex: 0 0 auto; background: var(--c, var(--wsfc-muted)); }
      .tile .n { font-size: 11px; color: var(--wsfc-muted); }
      .tile .v { font-size: 14px; font-weight: 500; white-space: nowrap; }

      /* rows */
      .hdr { font-size: 13px; color: var(--wsfc-muted); margin: 2px 0 6px; }
      .hdr b { color: var(--primary-text-color); font-weight: 500; }
      .rows { display: grid; grid-template-columns: 22px max-content minmax(40px, 1fr) max-content max-content; align-items: center; column-gap: 12px; margin-top: 6px; }
      .row { display: grid; grid-template-columns: subgrid; grid-column: 1 / -1; align-items: center; padding: 8px 0; border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.25)); cursor: pointer; font-size: 14px; }
      .row:last-child { border-bottom: 0; }
      .row ha-icon { --mdc-icon-size: 20px; color: var(--wsfc-muted); }
      .track { height: 6px; border-radius: 3px; background: rgba(127, 127, 127, 0.22); overflow: hidden; }
      .track i { display: block; height: 100%; border-radius: 3px; background: var(--c, transparent); min-width: 0; }
      .chip { font-size: 12px; padding: 2px 10px; border-radius: 999px; white-space: nowrap; text-align: center;
        background: color-mix(in srgb, var(--c, #888) 22%, transparent); border: 1px solid color-mix(in srgb, var(--c, #888) 60%, transparent); }
      .chip.none { --c: rgba(127, 127, 127, 0.6); color: var(--wsfc-muted); }
      .val { text-align: right; font-weight: 500; white-space: nowrap; font-variant-numeric: tabular-nums; }

      /* scale (pollen style) */
      .shead { display: grid; grid-template-columns: 1fr auto auto; align-items: baseline; column-gap: 10px; cursor: pointer; }
      .shead .t { font-size: 16px; font-weight: 500; }
      .shead .p { font-size: 13px; color: var(--secondary-text-color); }
      .shead .n { font-size: 26px; font-weight: 600; line-height: 1.1; font-variant-numeric: tabular-nums; }
      .seg { position: relative; display: flex; gap: 2px; height: 10px; margin: 6px 0 4px; }
      .seg span { flex: 1; border-radius: 2px; opacity: 0.9; }
      .seg span:first-child { border-radius: 5px 2px 2px 5px; }
      .seg span:last-child { border-radius: 2px 5px 5px 2px; }
      .seg .knob { position: absolute; top: 50%; width: 18px; height: 18px; margin: -9px 0 0 -9px; border-radius: 50%;
        background: var(--c, #888); box-shadow: 0 0 0 3px var(--card-background-color, #1c1c1c), 0 1px 4px rgba(0, 0, 0, 0.5); }
      .seg.big { height: 14px; margin-top: 8px; }
      .seg.big .knob { width: 24px; height: 24px; margin: -12px 0 0 -12px; }
      .srows { display: grid; grid-template-columns: 22px max-content minmax(60px, 1fr) max-content; align-items: center; column-gap: 12px; margin-top: 8px; }
      .srow { display: grid; grid-template-columns: subgrid; grid-column: 1 / -1; align-items: center; padding: 8px 0; border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.25)); cursor: pointer; }
      .srow ha-icon { --mdc-icon-size: 20px; color: var(--wsfc-muted); }
      .srow .nm { font-size: 14px; line-height: 1.2; }
      .srow .nv { font-size: 12px; color: var(--secondary-text-color); white-space: nowrap; font-variant-numeric: tabular-nums; }
      .srow .seg { margin: 0; height: 8px; }
      .srow .seg .knob { width: 14px; height: 14px; margin: -7px 0 0 -7px; }
      .srow .rt { font-size: 12px; font-weight: 500; color: var(--c, var(--wsfc-muted)); min-width: 7ch; text-align: right; white-space: nowrap; }
      .srow .plain { grid-column: 3 / -1; text-align: right; font-size: 14px; }

      /* vertical bars */
      .bars { display: grid; grid-template-columns: 30px repeat(var(--n), minmax(36px, 1fr)); column-gap: 8px; margin-top: 10px; }
      .axis { position: relative; height: var(--h); font-size: 10px; color: var(--wsfc-muted); }
      .axis span { position: absolute; right: 0; transform: translateY(50%); }
      .col { display: flex; flex-direction: column; align-items: center; min-width: 0; cursor: pointer; }
      .col .bv { font-size: 13px; font-weight: 500; white-space: nowrap; margin-bottom: 4px; font-variant-numeric: tabular-nums; }
      .col .bt { position: relative; width: min(100%, 44px); height: var(--h); border-radius: 6px 6px 2px 2px; background: rgba(127, 127, 127, 0.14); overflow: hidden; }
      .col .bt i { position: absolute; left: 0; right: 0; bottom: 0; border-radius: 6px 6px 2px 2px; background: var(--c, transparent); }
      .col .bn { font-size: 12px; margin-top: 6px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100%; }
      .col .bc { font-size: 10px; color: var(--wsfc-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100%; }
      .plot { position: relative; grid-column: 2 / -1; grid-row: 1; height: var(--h); margin-top: 21px; pointer-events: none; }
      .plot hr { position: absolute; left: 0; right: 0; margin: 0; border: 0; border-top: 1px dashed rgba(127, 127, 127, 0.35); }
      .cols { display: contents; }
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
    const layout = c.layout || "scale";
    if (layout === "scale") return html`${head(c, "mdi:air-filter", "Air quality")}${this._scaleLayout(m, c)}`;
    return html`
      ${head(c, "mdi:air-filter", "Air quality")}
      ${m.aqiE && c.show_aqi !== false ? this._aqi(m, c, layout) : nothing}
      ${layout === "rows" ? this._rows(m) : layout === "bars" ? this._bars(m, c) : this._tiles(m)}
    `;
  }

  _aqi(m, c, layout) {
    const color = m.level != null ? AQI_LEVELS[m.level].color : "var(--wsfc-muted)";
    const upd = m.time ? new Date(m.time) : null;
    const when = upd && !isNaN(upd) ? upd.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }) : "";
    const sub = ["US AQI", m.area, m.source && m.source !== m.area ? m.source : "", m.main ? `main pollutant ${m.main}` : "", when].filter(Boolean).join(" · ");
    const pos = m.aqi != null ? Math.min(100, (Math.min(m.aqi, 300) / 300) * 100) : null;
    // The rows and bars layouts already show each pollutant's level; the scale is optional there.
    const scale = c.show_scale ?? layout === "tiles";
    return html`
      <div class="top" @click=${() => moreInfo(this, m.aqiE)}>
        <span class="aqi" style="color:${color}">${fmt(m.aqi)}</span>
        <div><div class="cat">${m.name || "—"}</div><div class="sub">${sub}</div></div>
      </div>
      ${scale ? html`
        <div class="scale" role="img" aria-label="AQI ${fmt(m.aqi)} on a 0 to 300 scale">
          ${AQI_LEVELS.slice(0, 5).map((l, i) => html`<span style="background:${l.color};flex:${i < 4 ? 50 : 100}"></span>`)}
          ${pos != null ? html`<i class="mark" style="left:${pos}%"></i>` : nothing}
        </div>
        <div class="ticks">${[0, 50, 100, 150, 200, 300].map((t) => html`<span style="left:${(t / 300) * 100}%">${t === 300 ? "300+" : t}</span>`)}</div>` : nothing}`;
  }

  // Segmented colour scale with a marker: EPA readings get 6 categories, others 5.
  _seg(index, epa, big = false) {
    const n = epa ? 6 : 5;
    const pos = scalePos(index, n);
    const lvl = aqiLevel(index);
    return html`<div class="seg ${big ? "big" : ""}" role="img" aria-hidden="true">
      ${AQI_LEVELS.slice(0, n).map((l) => html`<span style="background:${l.color}"></span>`)}
      ${pos != null ? html`<i class="knob" style="left:${pos}%;--c:${AQI_LEVELS[lvl].color}"></i>` : nothing}
    </div>`;
  }

  _scaleLayout(m, c) {
    const upd = m.time ? new Date(m.time) : null;
    const when = upd && !isNaN(upd) ? upd.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }) : "";
    const hdr = [m.source, m.area, m.name, when].filter(Boolean).join(" · ");
    return html`
      ${hdr ? html`<div class="hdr">${hdr}</div>` : nothing}
      ${m.aqiE && c.show_aqi !== false ? html`
        <div class="shead" @click=${() => moreInfo(this, m.aqiE)} role="button" tabindex="0"
          @keydown=${(e) => (e.key === "Enter" || e.key === " ") && moreInfo(this, m.aqiE)}
          aria-label="Air Quality Index ${fmt(m.aqi)}, ${m.name}${m.main ? `, main pollutant ${m.main}` : ""}">
          <span class="t">Air Quality Index</span>
          <span class="p">${m.main ? `(${m.main})` : ""}</span>
          <span class="n">${fmt(m.aqi)}</span>
        </div>
        ${this._seg(m.aqi, true, true)}` : nothing}
      ${m.rows.length ? html`<div class="srows">${m.rows.map((r) => html`
        <div class="srow" style=${this._color(r)} role="button" tabindex="0" @click=${() => moreInfo(this, r.e)}
          @keydown=${(e) => (e.key === "Enter" || e.key === " ") && moreInfo(this, r.e)}
          title=${chipTitle(r)} aria-label="${r.label}: ${fmt(r.value, r.digits)} ${r.unit}${r.level != null ? `, ${chipLabel(r)}` : ""}">
          <ha-icon icon=${r.icon}></ha-icon>
          ${r.level == null
            ? html`<span class="nm">${r.label}</span><span class="plain">${valueText(r)}</span>`
            : html`<div><div class="nm">${r.label}</div><div class="nv">${fmt(r.value, r.digits)} ${r.unit}</div></div>
              ${this._seg(r.index, r.epa)}
              <span class="rt">${chipLabel(r)}</span>`}
        </div>`)}</div>` : nothing}
    `;
  }

  _color(r) {
    return r.level != null ? `--c:${AQI_LEVELS[r.level].color}` : "";
  }

  _tiles(m) {
    if (!m.rows.length) return nothing;
    return html`<div class="tiles">${m.rows.map((r) => html`
      <div class="tile" style=${this._color(r)} @click=${() => moreInfo(this, r.e)} title=${chipTitle(r) || r.e}>
        <span class="dot"></span>
        <div><div class="n">${r.label}</div><div class="v">${valueText(r)}</div></div>
      </div>`)}</div>`;
  }

  _rows(m) {
    if (!m.rows.length) return nothing;
    return html`<div class="rows">${m.rows.map((r) => html`
      <div class="row" style=${this._color(r)} role="button" tabindex="0" @click=${() => moreInfo(this, r.e)}
        @keydown=${(e) => (e.key === "Enter" || e.key === " ") && moreInfo(this, r.e)}
        aria-label="${r.label}: ${fmt(r.value, r.digits)} ${r.unit}, ${chipLabel(r)}">
        <ha-icon icon=${r.icon}></ha-icon>
        <span>${r.label}</span>
        <span class="track"><i style="width:${fill(r)}%"></i></span>
        <span class="chip ${r.level == null ? "none" : ""}" title=${chipTitle(r)}>${chipLabel(r)}</span>
        <span class="val">${valueText(r)}</span>
      </div>`)}</div>`;
  }

  _bars(m, c) {
    if (!m.rows.length) return nothing;
    const h = Number(c.bar_height) || 140;
    const lines = [50, 100, 150];
    return html`<div class="bars" style="--n:${m.rows.length};--h:${h}px">
      <div class="axis" style="margin-top:21px">${[0, ...lines, 200].map((t) => html`<span style="bottom:${(t / SCALE_MAX) * 100}%">${t}</span>`)}</div>
      <div class="plot">${lines.map((t) => html`<hr style="bottom:${(t / SCALE_MAX) * 100}%" />`)}</div>
      ${m.rows.map((r, i) => html`
        <div class="col" style="grid-row:1;grid-column:${i + 2};${this._color(r)}" role="button" tabindex="0"
          @click=${() => moreInfo(this, r.e)} @keydown=${(e) => (e.key === "Enter" || e.key === " ") && moreInfo(this, r.e)}
          title=${chipTitle(r)} aria-label="${r.label}: ${fmt(r.value, r.digits)} ${r.unit}, ${chipLabel(r)}">
          <span class="bv">${valueText(r)}</span>
          <span class="bt"><i style="height:${fill(r)}%"></i></span>
          <span class="bn">${r.label}</span>
          <span class="bc">${chipLabel(r)}</span>
        </div>`)}
    </div>`;
  }
}

customElements.get("wsfc-panel-air-quality") || customElements.define("wsfc-panel-air-quality", WsfcAirQuality);
