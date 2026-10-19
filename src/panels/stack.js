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

class WsfcStack extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false } };
  static styles = [
    tileStyles,
    css`
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
    const kids = (this.config?.panels || []).filter((p) => p && PANEL_TYPES[p.type]);
    if (!kids.length) return html`<div class="empty">Empty stack — add panels to it in the editor.</div>`;
    const vertical = this.config?.direction === "vertical";
    return kids.map((p, i) => {
      const meta = panelMeta(p);
      if (!meta) return nothing;
      // Horizontal: `grow` (or span) sets relative width; vertical: rows sets a minimum height.
      const grow = Number(p.grow ?? (vertical ? (p.rows ? 1 : 0) : 1));
      const rows = Number(p.rows ?? 0);
      const style = [`--grow:${grow}`, p.min_width ? `--basis:${p.min_width}px` : "",
        vertical && rows ? `min-height:calc(${rows} * var(--wsfc-row, 110px) + ${rows - 1} * var(--wsfc-gap, 12px))` : ""].join(";");
      const bare = meta.bare || p.type === "stack";
      return html`<section class="tile ${p.type} ${bare ? "bare" : ""}" style=${style}>${this._el(p, i)}</section>`;
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
    el.hass = this.hass;
    return el;
  }
}

customElements.get("wsfc-panel-stack") || customElements.define("wsfc-panel-stack", WsfcStack);
