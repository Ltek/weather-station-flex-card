// Pollen: a heading (source · town · main allergen), a status line, one row
// per species (icon, name, 0–100 bar, level chip, today's value, tomorrow's
// trend) and a 12-month season strip. Modelled on sygad's pollen card.
import { LitElement, html, css, nothing } from "lit";
import { panelStyles, head, moreInfo } from "./shared.js";
import { pollenModel, LEVEL_LABEL, MONTHS } from "../card/pollen.js";

const TREND_ICON = { up: "mdi:arrow-top-right", down: "mdi:arrow-bottom-right", flat: "mdi:arrow-right" };
const TREND_LABEL = { up: "rising tomorrow", down: "falling tomorrow", flat: "same tomorrow" };

class WsfcPollen extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false } };
  static styles = [
    panelStyles,
    css`
      .hdr { font-size: 12px; color: var(--wsfc-muted); margin: -4px 0 2px; }
      .hdr b { color: var(--primary-text-color); font-weight: 500; }
      .status { font-size: 14px; margin-bottom: 8px; }
      /* One grid for all rows so the bars and chips line up. */
      .rows { display: grid; grid-template-columns: 20px minmax(56px, max-content) minmax(40px, 1fr) max-content 2ch 16px; align-items: center; gap: 6px 8px; font-size: 13px; }
      .row { display: grid; grid-template-columns: subgrid; grid-column: 1 / -1; align-items: center; cursor: pointer; border-radius: 6px; }
      .row:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }
      .row ha-icon { --mdc-icon-size: 18px; color: var(--wsfc-muted); }
      .nm { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .bar { height: 6px; border-radius: 3px; background: rgba(127, 127, 127, 0.18); overflow: hidden; }
      .bar i { display: block; height: 100%; border-radius: 3px; background: var(--c); }
      .chip { font-size: 11px; padding: 1px 8px; border-radius: 999px; white-space: nowrap; color: var(--c); border: 1px solid var(--c); text-align: center; }
      .val { text-align: right; font-weight: 500; }
      .tr { --mdc-icon-size: 16px; }
      .tr.up { color: var(--error-color, #db4437); }
      .tr.down { color: var(--success-color, #43a047); }
      .none { --c: var(--wsfc-muted); }
      .low { --c: var(--success-color, #43a047); }
      .medium { --c: var(--warning-color, #ffa600); }
      .high { --c: var(--error-color, #db4437); }
      .off { --c: rgba(127, 127, 127, 0.55); }
      .off .nm, .off .val { color: var(--wsfc-muted); }
      .strip { display: grid; grid-template-columns: repeat(12, 1fr); gap: 3px; margin-top: 12px; }
      .m { height: 18px; border-radius: 4px; font-size: 10px; display: grid; place-items: center; color: var(--wsfc-muted); background: rgba(127, 127, 127, 0.12); box-sizing: border-box; }
      .m.c1 { background: rgba(67, 160, 71, 0.55); color: #fff; }
      .m.c2 { background: rgba(255, 166, 0, 0.6); color: #fff; }
      .m.c3 { background: rgba(219, 68, 55, 0.65); color: #fff; }
      .m.now { outline: 2px solid var(--primary-text-color); outline-offset: 1px; }
    `,
  ];

  // Redraw only when one of the species sensors changes (like triggers_update).
  shouldUpdate(changed) {
    if (changed.size !== 1 || !changed.has("hass")) return true;
    const old = changed.get("hass");
    if (!old || !this._ids || old.entities !== this.hass.entities) return true;
    return this._ids.some((e) => old.states[e] !== this.hass.states[e]);
  }

  render() {
    if (!this.hass) return nothing;
    const c = this.config || {};
    const m = pollenModel(c, this.hass);
    this._ids = m.entities;
    if (!m.rows.length) {
      return html`${head(c, "mdi:flower-pollen", "Pollen")}
        <div class="note">No pollen sensors found. Install the Pollen Levels integration from HACS (Google Pollen API — US and worldwide), or list sensors under this panel's options.</div>`;
    }
    const parts = [m.source, m.town, m.top?.name].filter(Boolean);
    return html`
      ${head(c, "mdi:flower-pollen", "Pollen")}
      <div class="hdr">${parts.map((p, i) => html`${i ? " · " : ""}${i === 2 ? html`<b>${p}</b>` : p}`)}</div>
      <div class="status">${m.status}</div>
      <div class="rows">${m.rows.map((r) => html`
        <div class="row ${r.level}" @click=${() => moreInfo(this, r.entity)} role="button" tabindex="0"
          @keydown=${(e) => (e.key === "Enter" || e.key === " ") && moreInfo(this, r.entity)}
          aria-label="${r.name}: ${LEVEL_LABEL[r.level]}${r.value != null ? `, ${r.value} of 5` : ""}${r.trend ? `, ${TREND_LABEL[r.trend]}` : ""}">
          <ha-icon icon=${r.icon}></ha-icon>
          <span class="nm">${r.name}</span>
          <span class="bar"><i style="width:${r.pct}%"></i></span>
          <span class="chip">${LEVEL_LABEL[r.level]}</span>
          <span class="val">${r.value ?? "—"}</span>
          ${c.show_tomorrow !== false && r.trend ? html`<ha-icon class="tr ${r.trend}" icon=${TREND_ICON[r.trend]} title=${`Tomorrow: ${r.tomorrow ?? "—"}`}></ha-icon>` : html`<span></span>`}
        </div>`)}
      </div>
      ${c.show_season === false ? nothing : html`<div class="strip" role="img" aria-label="Pollen season by month">
        ${m.strip.map((n, i) => html`<span class="m ${n ? `c${Math.min(n, 3)}` : ""} ${i + 1 === m.month ? "now" : ""}"
          title="${MONTHS[i]}: ${n} species in season">${MONTHS[i][0]}</span>`)}
      </div>`}
    `;
  }
}

customElements.get("wsfc-panel-pollen") || customElements.define("wsfc-panel-pollen", WsfcPollen);
