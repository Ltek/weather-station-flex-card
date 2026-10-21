// Pollen: a heading (source · town · status: main allergen, or what's due next), one row
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
      .hdr { font-size: 14px; color: var(--secondary-text-color); margin: 0 0 4px; }
      /* One grid for all rows so the bars and chips line up. */
      .rows { display: grid; grid-template-columns: 22px minmax(56px, max-content) minmax(40px, 1fr) max-content 2ch 16px; align-items: center; column-gap: 12px; font-size: 14px; }
      .row { display: grid; grid-template-columns: subgrid; grid-column: 1 / -1; align-items: center; cursor: pointer; padding: 8px 0; border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.25)); }
      .row:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }
      .row ha-icon { --mdc-icon-size: 18px; color: var(--wsfc-muted); }
      .nm { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .bar { height: 6px; border-radius: 3px; background: rgba(127, 127, 127, 0.18); overflow: hidden; }
      .bar i { display: block; height: 100%; border-radius: 3px; background: var(--c); }
      .chip { font-size: 12px; padding: 2px 10px; border-radius: 999px; white-space: nowrap; text-align: center;
        background: color-mix(in srgb, var(--c) 22%, transparent); border: 1px solid color-mix(in srgb, var(--c) 60%, transparent); }
      .off .chip { background: rgba(127, 127, 127, 0.18); border-color: transparent; color: var(--secondary-text-color); }
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
      .slabel { font-size: 13px; color: var(--secondary-text-color); margin-top: 12px; }
      .strip { display: grid; grid-template-columns: repeat(12, 1fr); gap: 4px; margin-top: 4px; }
      .m { display: flex; flex-direction: column; align-items: center; gap: 4px; font-size: 11px; color: var(--secondary-text-color); }
      .m i { width: 100%; height: 10px; border-radius: 3px; background: rgba(127, 127, 127, 0.18); box-sizing: border-box; }
      .m.c1 i { background: #43a047; }
      .m.c2 i { background: #f2a81d; }
      .m.c3 i { background: #d93f37; }
      .m.now i { outline: 2px solid var(--primary-text-color); outline-offset: 0; }
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
    if (!m.total) {
      return html`${head(c, "mdi:flower-pollen", "Pollen")}
        <div class="note">No pollen sensors found. Install the Pollen Levels integration from HACS (Google Pollen API — US and worldwide), or list sensors under this panel's options.</div>`;
    }
    const parts = [m.source, m.town, m.status].filter(Boolean);
    return html`
      ${head(c, "mdi:flower-pollen", "Pollen")}
      <div class="hdr">${parts.join(" · ")}</div>
      ${m.rows.length ? nothing : html`<div class="note">No species in season right now.</div>`}
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
      ${c.show_season === false ? nothing : html`<div class="slabel">Season</div><div class="strip" role="img" aria-label="Pollen season by month">
        ${m.strip.map((n, i) => html`<span class="m ${n ? `c${Math.min(n, 3)}` : ""} ${i + 1 === m.month ? "now" : ""}"
          title="${MONTHS[i]}: ${n} species in season"><i></i>${MONTHS[i][0]}</span>`)}
      </div>`}
    `;
  }
}

customElements.get("wsfc-panel-pollen") || customElements.define("wsfc-panel-pollen", WsfcPollen);
