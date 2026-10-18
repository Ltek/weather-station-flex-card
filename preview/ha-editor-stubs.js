// Rough stand-ins for Home Assistant's editor elements, so the visual editor
// can be laid out in the preview. Not faithful — real HA renders these.
import { LitElement, html, css } from "lit";

class HaForm extends LitElement {
  static properties = { hass: {}, data: {}, schema: {}, computeLabel: {}, computeHelper: {} };
  static styles = css`
    :host { display: flex; flex-direction: column; gap: 8px; }
    label { display: flex; flex-direction: column; gap: 3px; font-size: 12px; color: var(--secondary-text-color); }
    label.row { flex-direction: row; align-items: center; gap: 8px; color: var(--primary-text-color); }
    input, select, textarea { font: inherit; font-size: 13px; padding: 6px 8px; border-radius: 4px; border: 1px solid #555; background: #2a2a2a; color: var(--primary-text-color); }
    textarea { min-height: 60px; font-family: monospace; }
    .h { font-size: 11px; color: #888; }
    fieldset { border: 1px solid #444; border-radius: 6px; padding: 6px 10px; }
  `;
  _set(name, v) {
    this.dispatchEvent(new CustomEvent("value-changed", { detail: { value: { ...this.data, [name]: v } } }));
  }
  _field(f) {
    const label = this.computeLabel ? this.computeLabel(f) : f.name;
    const helper = this.computeHelper ? this.computeHelper(f) : "";
    const v = this.data?.[f.name];
    const sel = f.selector || {};
    if (f.type === "expandable" || f.type === "grid") {
      return html`<fieldset><legend>${label || ""}</legend>${(f.schema || []).map((x) => this._field(x))}</fieldset>`;
    }
    if (f.type === "optional_actions") return html``;
    let input;
    if (sel.boolean) {
      return html`<label class="row"><input type="checkbox" .checked=${!!v} @change=${(e) => this._set(f.name, e.target.checked)} />${label}</label>${helper ? html`<span class="h">${helper}</span>` : ""}`;
    } else if (sel.select && !sel.select.multiple) {
      input = html`<select @change=${(e) => this._set(f.name, e.target.value)}>
        <option value="" ?selected=${v == null}>—</option>
        ${sel.select.options.map((o) => { const val = o.value ?? o; return html`<option value=${val} ?selected=${val === v}>${o.label ?? o}</option>`; })}</select>`;
    } else if (sel.number) {
      input = html`<input type="number" .value=${v ?? ""} @change=${(e) => this._set(f.name, e.target.value === "" ? undefined : Number(e.target.value))} />`;
    } else if (sel.object || (sel.select && sel.select.multiple)) {
      input = html`<textarea @change=${(e) => { try { this._set(f.name, JSON.parse(e.target.value || "null") ?? undefined); } catch (_e) { /* ignore */ } }}>${v == null ? "" : JSON.stringify(v)}</textarea>`;
    } else {
      input = html`<input .value=${v ?? ""} @change=${(e) => this._set(f.name, e.target.value || undefined)} />`;
    }
    return html`<label>${label}${input}${helper ? html`<span class="h">${helper}</span>` : ""}</label>`;
  }
  render() {
    return html`${(this.schema || []).map((f) => this._field(f))}`;
  }
}
customElements.define("ha-form", HaForm);

class HaExpansionPanel extends LitElement {
  static properties = { header: {}, expanded: { type: Boolean } };
  static styles = css`details { border: 1px solid #444; border-radius: 8px; padding: 6px 10px; margin: 6px 0; } summary { cursor: pointer; font-weight: 500; }`;
  render() {
    return html`<details ?open=${this.expanded}><summary><slot name="header">${this.header}</slot></summary><slot></slot></details>`;
  }
}
customElements.define("ha-expansion-panel", HaExpansionPanel);

customElements.define("ha-button", class extends LitElement { render() { return html`<button><slot name="start"></slot><slot></slot></button>`; } });
customElements.define("ha-svg-icon", class extends LitElement { static properties = { path: {} }; render() { return html`<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d=${this.path}></path></svg>`; } });
customElements.define("ha-icon-button", class extends LitElement { static properties = { path: {}, label: {} }; render() { return html`<button title=${this.label}><svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d=${this.path}></path></svg></button>`; } });
for (const tag of ["ha-entity-picker", "ha-device-picker", "ha-selector", "ha-textfield", "ha-switch", "ha-select", "ha-list-item", "ha-icon-picker"]) {
  if (!customElements.get(tag)) customElements.define(tag, class extends HTMLElement { connectedCallback() { this.style.cssText = "display:block;font-size:11px;color:#888"; this.textContent = `[${tag}]`; } });
}
