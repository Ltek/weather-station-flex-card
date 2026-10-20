// Entity drop-down that shows "Default" when the automatically chosen sensor is
// used. Options: Default (with the sensor it resolves to), a short list of
// likely candidates, and "Other entity…" which opens Home Assistant's picker.
// Fires `value-changed` with { value: entity_id | "" } ("" = default).
import { LitElement, html, css, nothing } from "lit";

const OTHER = "__other__";

class WsfcEntitySelect extends LitElement {
  static properties = {
    hass: { attribute: false },
    value: {},
    defaultEntity: { attribute: false },
    defaultLabel: { attribute: false },
    candidates: { attribute: false },
    domain: {},
    label: {},
    _other: { state: true },
  };
  static styles = css`
    :host { display: block; min-width: 0; }
    .row { display: flex; gap: 6px; align-items: center; min-width: 0; }
    select { flex: 1; min-width: 0; font: inherit; font-size: 12px; padding: 5px 8px; border-radius: 6px; border: 1px solid var(--ltek-c-border, #444); background: var(--card-background-color, #1c1c1c); color: var(--primary-text-color); }
    select.def { color: var(--secondary-text-color); }
    button { border: 0; background: transparent; color: var(--secondary-text-color); cursor: pointer; padding: 2px 4px; font: inherit; font-size: 11px; white-space: nowrap; }
    button:hover { color: var(--primary-color); }
    .picker { margin-top: 4px; }
  `;

  _name(eid) {
    const st = this.hass?.states?.[eid];
    const n = st?.attributes?.friendly_name || eid;
    const v = st && !["unknown", "unavailable"].includes(st.state) && !eid.startsWith("weather.") ? ` · ${st.state}${st.attributes?.unit_of_measurement ? ` ${st.attributes.unit_of_measurement}` : ""}` : "";
    return `${n}${v}`;
  }

  _emit(value) {
    this._other = false;
    this.dispatchEvent(new CustomEvent("value-changed", { detail: { value }, bubbles: false }));
  }

  render() {
    const v = this.value || "";
    const cands = [...new Set([...(this.candidates || []), ...(v ? [v] : [])])].filter((e) => e !== this.defaultEntity || v === e);
    const defText = this.defaultLabel || (this.defaultEntity ? `Default — ${this._name(this.defaultEntity)}` : "Default — none found");
    return html`
      <div class="row">
        <select class=${v ? "" : "def"} aria-label=${this.label || "Entity"} @change=${(e) => {
          const x = e.target.value;
          if (x === OTHER) { this._other = true; e.target.value = v; return; }
          this._emit(x);
        }}>
          <option value="" ?selected=${!v}>${defText}</option>
          ${cands.map((e) => html`<option value=${e} ?selected=${e === v}>${this._name(e)}</option>`)}
          <option value=${OTHER}>Other entity…</option>
        </select>
        ${v ? html`<button type="button" title="Use the default sensor" @click=${() => this._emit("")}>Default</button>` : nothing}
      </div>
      ${this._other
        ? html`<div class="picker"><ha-form .hass=${this.hass} .data=${{ e: v }} .schema=${[{ name: "e", selector: { entity: this.domain ? { domain: this.domain } : {} } }]}
            .computeLabel=${() => "Choose an entity"} @value-changed=${(e) => { e.stopPropagation(); const x = e.detail.value?.e; if (x) this._emit(x); }}></ha-form></div>`
        : nothing}
    `;
  }
}

customElements.get("wsfc-entity-select") || customElements.define("wsfc-entity-select", WsfcEntitySelect);
