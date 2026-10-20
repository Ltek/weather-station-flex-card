// Series editor for graph panels: one row per line/area/bar in the graph with
// its color and its sensor. The sensor drop-down shows "Default" when the
// station's own sensor (via Weather Sources) is used.
//   graph with `series:`        -> series[i].color / series[i].entity
//   graph presets (temp_humidity, uv_solar), graph without series
//                               -> colors.<metric> / entities.<metric>
//   statistics                  -> colors.<metric> / entity_overrides.<metric>
// Fires `panel-changed` with the new panel config.
import { LitElement, html, css, nothing } from "lit";
import { METRICS, metricEntity } from "../card/metrics.js";
import { PRESET_SERIES } from "../panels/graph.js";
import { STAT_PRESETS, SGCC_PRESETS, statisticsEngine } from "../panels/statistics.js";
import { stationDeviceEntities } from "../card/resolve.js";
import { prune, clone } from "../card/config.js";
import "./entity-select.js";

const PALETTE = ["#ff9800", "#42a5f5", "#26a69a", "#ab47bc", "#ef5350", "#8d6e63", "#fdd835", "#78909c"];
const toHex = (c) => (/^#[0-9a-f]{6}$/i.test(c || "") ? c : /^#[0-9a-f]{3}$/i.test(c || "") ? "#" + c.slice(1).split("").map((x) => x + x).join("") : "#888888");

/** The rows the editor shows for a panel. */
export function seriesRows(p) {
  if (p.type === "statistics") {
    const preset = p.preset || "temps";
    const sg = SGCC_PRESETS[preset] || {};
    const metrics = (Array.isArray(p.metrics) && p.metrics.length ? p.metrics : sg.metrics || STAT_PRESETS[preset]?.metrics) || [];
    return metrics.map((m, i) => ({ metric: m, color: p.colors?.[m], defColor: sg.series?.[m]?.color || METRICS[m]?.color || PALETTE[i % PALETTE.length], entity: p.entity_overrides?.[m] || "", key: "map" }));
  }
  if (Array.isArray(p.series) && p.series.length) {
    return p.series.map((s, i) => ({ metric: s.metric, idx: i, color: s.color, defColor: METRICS[s.metric]?.color || PALETTE[i % PALETTE.length], entity: s.entity || "", label: s.label, key: "list" }));
  }
  return (PRESET_SERIES[p.type] || PRESET_SERIES.graph).map((s, i) => ({ metric: s.metric, color: p.colors?.[s.metric], defColor: s.color || METRICS[s.metric]?.color || PALETTE[i % PALETTE.length], entity: p.entities?.[s.metric] || "", key: "map" }));
}

class WsfcSeriesEditor extends LitElement {
  static properties = { hass: { attribute: false }, panel: { attribute: false }, station: { attribute: false } };

  _set(row, field, value) {
    const p = clone(this.panel);
    if (row.key === "list") {
      p.series[row.idx] = prune({ ...p.series[row.idx], [field]: value || undefined });
    } else {
      const bag = field === "color" ? "colors" : p.type === "statistics" ? "entity_overrides" : "entities";
      p[bag] = prune({ ...(p[bag] || {}), [row.metric]: value || undefined });
      if (!Object.keys(p[bag]).length) delete p[bag];
    }
    this.dispatchEvent(new CustomEvent("panel-changed", { detail: { panel: p } }));
  }

  // Candidates: station sensors with the same unit as the default sensor.
  _candidates(def) {
    const unit = def && this.hass.states[def]?.attributes?.unit_of_measurement;
    return stationDeviceEntities(this.station, this.hass).filter((e) => e.startsWith("sensor.") && (!unit || this.hass.states[e]?.attributes?.unit_of_measurement === unit));
  }

  render() {
    if (!this.hass || !this.panel) return nothing;
    const rows = seriesRows(this.panel);
    const sgcc = this.panel.type !== "statistics" || statisticsEngine(this.panel) === "sgcc";
    return html`<div class="tbl">
      <span class="h">Series</span><span class="h">Color</span><span class="h">Sensor</span>
      ${rows.map((r) => {
        const def = metricEntity(r.metric, this.station, this.hass);
        const col = r.color || r.defColor;
        return html`<span class="k">${r.label || METRICS[r.metric]?.label || r.metric || "Series"}</span>
          <span class="c">
            ${sgcc
              ? html`<input type="color" .value=${toHex(col)} title="Line color" aria-label="Line color" @change=${(e) => this._set(r, "color", e.target.value)} />
                ${r.color ? html`<button type="button" title="Default color" @click=${() => this._set(r, "color", "")}>↺</button>` : nothing}`
              : html`<span class="na" title="Home Assistant's Statistics graph picks its own colors">auto</span>`}
          </span>
          <wsfc-entity-select .hass=${this.hass} .value=${r.entity} .defaultEntity=${def} .candidates=${this._candidates(def)} label=${`${r.metric} sensor`}
            @value-changed=${(e) => this._set(r, "entity", e.detail.value)}></wsfc-entity-select>`;
      })}
    </div>`;
  }

  static styles = css`
    .tbl { display: grid; grid-template-columns: minmax(80px, auto) auto minmax(0, 1fr); gap: 6px 10px; align-items: center; font-size: 12px; }
    .h { font-size: 10px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--ltek-c-muted, #888); }
    .k { color: var(--ltek-c-label, #ccc); }
    .c { display: flex; align-items: center; gap: 2px; }
    input[type="color"] { width: 30px; height: 24px; padding: 0; border: 1px solid var(--ltek-c-border, #444); border-radius: 6px; background: transparent; cursor: pointer; }
    button { border: 0; background: transparent; color: var(--secondary-text-color); cursor: pointer; font-size: 14px; padding: 0 2px; }
    .na { font-size: 11px; color: var(--ltek-c-muted, #888); }
  `;
}

customElements.get("wsfc-series-editor") || customElements.define("wsfc-series-editor", WsfcSeriesEditor);
