// Stack panel: lays out child panels horizontally (side by side) or
// vertically, like Home Assistant's horizontal/vertical stack. Horizontal
// stacks wrap onto new lines only when children would get narrower than
// `min_width`, so they stay side by side on any screen that fits them.
//
//   - type: stack
//     direction: horizontal        # horizontal | vertical
//     span: 12
//     panels:
//       - { type: metric, metric: uv_index }
//       - { type: metric, metric: solar_radiation, grow: 2 }   # twice as wide
import { LitElement, html, css, nothing } from "lit";
import { PANEL_TYPES, panelMeta } from "../card/panels.js";
import { tileStyles } from "./shared.js";
import { compactRow, compactStyles, compactTiles, NEEDS_PANEL } from "../card/compact.js";

class WsfcStack extends LitElement {
  static properties = {
    hass: { attribute: false }, config: { attribute: false }, station: { attribute: false }, lite: { attribute: false },
    // "0,1,0": which children are hidden (set by the card from toggles and auto-hide).
    hiddenKids: { attribute: false },
    // The card, for folding stacked panels (its state, views and colours), this stack's path,
    // and "0,1,0": which children are folded (so the stack redraws when one folds).
    card: { attribute: false },
    path: { attribute: false },
    foldKids: { attribute: false },
  };
  static styles = [
    tileStyles,
    compactStyles,
    css`
      .tile { position: relative; }
      .tile.folded { flex-grow: 0 !important; min-height: 0 !important; }
      .tile.ctile-row { padding-top: 8px; padding-bottom: 8px; justify-content: center; }
      .tile .chide { display: none; }
      .fold { position: absolute; top: 4px; right: 4px; z-index: 5; border: 0; background: transparent; cursor: pointer; padding: 6px; border-radius: 50%; line-height: 0;
        color: var(--wsfc-head-icon, var(--secondary-text-color)); }
      .fold ha-icon { --mdc-icon-size: 24px; }
      .fold:hover { background: rgba(127, 127, 127, 0.18); }
      .fold:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }
      .tile.can-fold > :not(.fold) { --wsfc-head-pad: 40px; }
      .tile.ctile-row.can-fold .compact { padding-right: 36px; }
      :host { display: flex; gap: var(--wsfc-gap, 12px); min-height: 0; height: 100%; }
      :host([direction="horizontal"]) { flex-direction: row; flex-wrap: wrap; align-items: stretch; }
      :host([direction="vertical"]) { flex-direction: column; }
      .tile { min-width: 0; }
      :host([direction="horizontal"]) .tile { flex: var(--grow, 1) 1 var(--basis, var(--wsfc-stack-min, 180px)); }
      :host([direction="vertical"]) .tile { flex: var(--grow, 0) 1 auto; }
      .empty { color: var(--secondary-text-color); font-size: 13px; padding: 12px; }
    `,
  ];

  constructor() {
    super();
    this._els = new Map();
  }

  updated() {
    this.setAttribute("direction", this.config?.direction === "vertical" ? "vertical" : "horizontal");
    const min = this.config?.min_width;
    this.style.setProperty("--wsfc-stack-min", min ? `${min}px` : "");
  }

  render() {
    const all = this.config?.panels || [];
    if (!all.some((p) => p && PANEL_TYPES[p.type])) return html`<div class="empty">Empty stack — add panels to it in the editor.</div>`;
    const vertical = this.config?.direction === "vertical";
    const hidden = String(this.hiddenKids || "").split(",");
    // A vertical stack with its own height shares it among its children, so
    // when one is hidden the others fill its space.
    const fill = vertical && Number(this.config?.rows) > 0;
    return all.map((p, i) => {
      if (!p || !PANEL_TYPES[p.type] || hidden[i] === "true") return nothing;
      const meta = panelMeta(p);
      if (!meta) return nothing;
      // Horizontal: `grow` (or span) sets relative width; vertical: rows sets a minimum height.
      const grow = Number(p.grow ?? (vertical ? (p.rows || fill ? 1 : 0) : 1));
      const rows = Number(p.rows ?? 0);
      const style = [`--grow:${grow}`, p.min_width ? `--basis:${p.min_width}px` : "",
        vertical && rows ? `min-height:calc(${rows} * var(--wsfc-row, 110px) + ${rows - 1} * var(--wsfc-gap, 12px))` : ""].join(";");
      const bare = meta.bare || p.type === "stack";
      const fx = [p.tile_shadow === false ? "no-shadow" : "", p.tile_border === false ? "no-border" : "", p.tile_glow === false ? "no-glow" : ""].join(" ");
      // Folding (the card's Collapse settings for this stacked panel).
      const card = this.card, path = `${this.path}.${i}`;
      const can = !!card && card._canCollapse(p) && card._focus == null;
      const folded = can && card._isCollapsed(p, path);
      const el = this._el(p, i);
      if (card) card._foldDecorate(el, p, path, folded);
      const toggle = () => card._toggleCollapse(p, path);
      const btn = can
        ? html`<button class="fold" type="button" @click=${(e) => { e.stopPropagation(); toggle(); }} aria-expanded=${String(!folded)}
            aria-label=${`${folded ? "Expand" : "Collapse"} ${p.title || meta.label}`} title=${folded ? "Show" : "Collapse to its title"}>
            <ha-icon icon=${folded ? "mdi:chevron-down" : "mdi:chevron-up"}></ha-icon></button>`
        : nothing;
      const colors = can ? card._foldColors(p, folded) : "";
      if (folded && card._viewOf(p) === "compact") {
        const tiles = compactTiles(p, card.hass, card._station, NEEDS_PANEL.has(p.type) ? el : null);
        const ownBtn = p.compact_expand === false;
        return html`<section data-j=${i} class="tile ${p.type} folded ctile-row ${ownBtn ? "can-fold" : ""} ${fx}" style=${`${style};${colors}`}>
          ${ownBtn ? btn : nothing}${compactRow(tiles, {
            icon: p.show_icon === false ? null : p.icon || meta.icon,
            title: p.compact_title ? p.title || meta.label : "",
            onTap: p.compact_expand !== false ? toggle : null,
            onTile: (eid) => this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId: eid }, bubbles: true, composed: true })),
          })}
          ${NEEDS_PANEL.has(p.type) ? html`<div class="chide" aria-hidden="true">${el}</div>` : nothing}
        </section>`;
      }
      const titleTap = can && card._collapseOpt(p, "collapse_title_tap", true);
      return html`<section data-j=${i} class="tile ${p.type} ${bare ? "bare" : ""} ${fx} ${folded ? "folded" : ""} ${can ? "can-fold" : ""}" style=${`${style};${colors}`}
        @click=${titleTap ? (e) => card._titleTap(e, p, path) : nothing}>${btn}${el}</section>`;
    });
  }

  _el(p, i) {
    const key = `${i}:${JSON.stringify(p)}`;
    let el = this._els.get(key);
    if (!el) {
      el = document.createElement(panelMeta(p).tag);
      for (const k of this._els.keys()) if (k.startsWith(`${i}:`)) this._els.delete(k);
      this._els.set(key, el);
    }
    el.config = p;
    el.station = this.station;
    if (!this.card) el.lite = this.lite;
    el.hass = this.hass;
    return el;
  }
}

customElements.get("wsfc-panel-stack") || customElements.define("wsfc-panel-stack", WsfcStack);
