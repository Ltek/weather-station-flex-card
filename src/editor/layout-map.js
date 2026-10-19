// Layout map for the editor: a scaled-down copy of the card's 12-column grid.
//   - drag a block to move it (drop before/after another block)
//   - drag its right edge / bottom edge / corner to change width / height
//   - keyboard: focus a block, ←/→ move it, Shift+←/→ width, Shift+↑/↓ height
// Fires "layout-changed" with { panels } once per finished gesture.
import { LitElement, html, css, nothing } from "lit";
import { panelMeta, spanOf, rowsOf } from "../card/panels.js";
import { METRICS } from "../card/metrics.js";

const MAP_ROW = 30; // px per row unit in the map
const MAP_GAP = 4;
const MAX_ROWS = 10;

const nameOf = (p) => {
  if (p.title) return p.title;
  if (p.type === "metric") return METRICS[p.metric]?.label || p.label || "Metric";
  if (p.type === "stack") return `Stack · ${(p.panels || []).length}`;
  if (p.type === "day") return ["Today", "Tomorrow"][Number(p.day_offset ?? 1)] || `Day +${p.day_offset}`;
  return (panelMeta(p)?.label || p.type).replace(/ \(.*\)$/, "");
};
const iconOf = (p) => p.icon || (p.type === "metric" && METRICS[p.metric]?.icon) || panelMeta(p)?.icon || "mdi:square-outline";

class WsfcLayoutMap extends LitElement {
  static properties = {
    panels: { attribute: false },
    _order: { state: true }, // grid panel indexes in display order while dragging
    _size: { state: true }, // { index, span, rows } while resizing
    _drag: { state: true },
  };

  // Grid panels = everything not shown as a pop-up.
  _gridIdx() {
    return (this.panels || []).map((p, i) => i).filter((i) => this.panels[i].display !== "popup");
  }

  render() {
    const panels = this.panels || [];
    const order = this._order || this._gridIdx();
    const popups = panels.map((p, i) => i).filter((i) => panels[i].display === "popup");
    return html`
      <div class="grid" style=${`--row:${MAP_ROW}px;--gap:${MAP_GAP}px`}>
        ${order.map((i) => this._block(panels[i], i))}
      </div>
      ${popups.length
        ? html`<div class="pops"><span>Pop-ups:</span>${popups.map((i) => html`<span class="pop"><ha-icon icon=${iconOf(panels[i])}></ha-icon>${nameOf(panels[i])}</span>`)}</div>`
        : nothing}
    `;
  }

  _block(p, i) {
    const sz = this._size?.index === i ? this._size : null;
    const span = sz ? sz.span : spanOf(p);
    const rows = sz ? sz.rows : rowsOf(p);
    const style = `grid-column: span ${span}; grid-row: span ${Math.max(1, rows)};`;
    const cls = ["blk", p.show === false ? "hidden" : "", this._drag?.index === i ? "dragging" : "", sz ? "sizing" : "", p.type].join(" ");
    return html`<div class=${cls} style=${style} data-i=${i} tabindex="0" role="button"
        aria-label=${`${nameOf(p)}, width ${span} of 12, height ${rows || "auto"}. Arrow keys move; Shift+arrows resize.`}
        @pointerdown=${(e) => this._startMove(e, i)} @keydown=${(e) => this._key(e, i)}>
      <ha-icon icon=${iconOf(p)}></ha-icon>
      <span class="nm">${nameOf(p)}</span>
      <span class="dim">${span}×${rows || "a"}</span>
      <span class="rz x" @pointerdown=${(e) => this._startSize(e, i, "x")}></span>
      <span class="rz y" @pointerdown=${(e) => this._startSize(e, i, "y")}></span>
      <span class="rz xy" @pointerdown=${(e) => this._startSize(e, i, "xy")}></span>
    </div>`;
  }

  /* ---------------------------------------------------------------- move */
  _startMove(e, i) {
    if (e.button !== 0 || e.target.classList.contains("rz")) return;
    e.preventDefault();
    const el = e.currentTarget;
    el.setPointerCapture(e.pointerId);
    this._order = this._gridIdx();
    this._drag = { index: i, x0: e.clientX, y0: e.clientY, moved: false };
    const move = (ev) => this._onMove(ev);
    const up = () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
      const changed = this._drag?.moved && this._order.join() !== this._gridIdx().join();
      const order = this._order;
      this._drag = null;
      this._order = null;
      if (changed) this._commitOrder(order);
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
  }

  _onMove(e) {
    const d = this._drag;
    if (!d) return;
    if (!d.moved && Math.hypot(e.clientX - d.x0, e.clientY - d.y0) < 4) return;
    d.moved = true;
    // Find the block under the pointer (ignoring the one being dragged).
    const blocks = [...this.renderRoot.querySelectorAll(".blk")].filter((b) => Number(b.dataset.i) !== d.index);
    let target = null;
    for (const b of blocks) {
      const r = b.getBoundingClientRect();
      if (e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom) {
        target = { i: Number(b.dataset.i), after: e.clientX > r.left + r.width / 2 };
        break;
      }
    }
    if (!target) {
      // Past the last block: move to the end.
      const last = blocks[blocks.length - 1]?.getBoundingClientRect();
      if (last && e.clientY > last.bottom) target = { i: Number(blocks[blocks.length - 1].dataset.i), after: true };
      else return;
    }
    const order = this._order.filter((x) => x !== d.index);
    let pos = order.indexOf(target.i) + (target.after ? 1 : 0);
    order.splice(pos, 0, d.index);
    if (order.join() !== this._order.join()) this._order = order;
  }

  _commitOrder(order) {
    // Pop-up panels keep their positions; grid panels fill the grid slots in the new order.
    const panels = this.panels;
    const queue = order.map((i) => panels[i]);
    const next = panels.map((p) => (p.display === "popup" ? p : queue.shift()));
    this._emit(next);
  }

  /* -------------------------------------------------------------- resize */
  _startSize(e, i, axis) {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();
    const handle = e.currentTarget;
    handle.setPointerCapture(e.pointerId);
    const grid = this.renderRoot.querySelector(".grid");
    const colW = (grid.clientWidth - 11 * MAP_GAP) / 12 + MAP_GAP;
    const p = this.panels[i];
    const s0 = spanOf(p), r0 = rowsOf(p);
    this._size = { index: i, span: s0, rows: r0 };
    const x0 = e.clientX, y0 = e.clientY;
    const move = (ev) => {
      const span = axis === "y" ? s0 : Math.max(1, Math.min(12, s0 + Math.round((ev.clientX - x0) / colW)));
      // Rows: 0 means "fit content"; shown as one row in the map.
      const base = r0 || 1;
      let rows = axis === "x" ? r0 : Math.max(0, Math.min(MAX_ROWS, base + Math.round((ev.clientY - y0) / (MAP_ROW + MAP_GAP))));
      if (axis !== "x" && r0 === 0 && rows === 1 && Math.abs(ev.clientY - y0) < (MAP_ROW + MAP_GAP) / 2) rows = 0;
      if (span !== this._size.span || rows !== this._size.rows) this._size = { index: i, span, rows };
    };
    const up = () => {
      handle.removeEventListener("pointermove", move);
      handle.removeEventListener("pointerup", up);
      handle.removeEventListener("pointercancel", up);
      const { span, rows } = this._size;
      this._size = null;
      if (span !== s0 || rows !== r0) this._commitSize(i, span, rows);
    };
    handle.addEventListener("pointermove", move);
    handle.addEventListener("pointerup", up);
    handle.addEventListener("pointercancel", up);
  }

  _commitSize(i, span, rows) {
    const m = panelMeta(this.panels[i]) || {};
    const p = { ...this.panels[i], span, rows };
    // Store only values that differ from the type's defaults.
    if (span === m.span) delete p.span;
    if (rows === (m.rows ?? 0)) delete p.rows;
    const next = this.panels.slice();
    next[i] = p;
    this._emit(next);
  }

  /* ------------------------------------------------------------ keyboard */
  _key(e, i) {
    const grid = this._gridIdx();
    const at = grid.indexOf(i);
    if (e.shiftKey) {
      const p = this.panels[i];
      const d = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key];
      if (!d) return;
      e.preventDefault();
      this._commitSize(i, Math.max(1, Math.min(12, spanOf(p) + d[0])), Math.max(0, Math.min(MAX_ROWS, rowsOf(p) + d[1])));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      const to = at + (e.key === "ArrowLeft" ? -1 : 1);
      if (to < 0 || to >= grid.length) return;
      const order = grid.slice();
      [order[at], order[to]] = [order[to], order[at]];
      this._commitOrder(order);
      this.updateComplete.then(() => this.renderRoot.querySelector(`.blk[data-i="${grid[to]}"]`)?.focus());
    }
  }

  _emit(panels) {
    this.dispatchEvent(new CustomEvent("layout-changed", { detail: { panels } }));
  }

  static styles = css`
    :host { display: block; }
    .grid {
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      grid-auto-rows: var(--row);
      gap: var(--gap);
      padding: 6px;
      border-radius: 10px;
      background: rgba(127, 127, 127, 0.08);
      user-select: none;
      touch-action: none;
    }
    .blk {
      position: relative;
      min-width: 0;
      border-radius: 6px;
      border: 1px solid var(--divider-color, #444);
      background: var(--card-background-color, #222);
      color: var(--primary-text-color);
      display: flex;
      align-items: flex-start;
      gap: 4px;
      padding: 4px 6px;
      font-size: 11px;
      line-height: 1.2;
      cursor: grab;
      overflow: hidden;
      box-sizing: border-box;
      transition: box-shadow 0.12s;
    }
    .blk:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 1px; }
    .blk.dragging { opacity: 0.55; cursor: grabbing; border-style: dashed; border-color: var(--primary-color); }
    .blk.sizing { border-color: var(--primary-color); box-shadow: 0 0 0 1px var(--primary-color); }
    .blk.hidden { opacity: 0.45; border-style: dashed; }
    .blk.hero { background: linear-gradient(135deg, rgba(3, 169, 244, 0.25), rgba(3, 169, 244, 0.05)); }
    .blk.heading, .blk.stack { background: transparent; }
    .blk ha-icon { --mdc-icon-size: 14px; flex: 0 0 auto; color: var(--primary-color); }
    .nm { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .dim { color: var(--secondary-text-color); font-size: 10px; flex: 0 0 auto; }
    .rz { position: absolute; z-index: 2; }
    .rz.x { top: 0; right: 0; width: 8px; height: 100%; cursor: ew-resize; }
    .rz.y { left: 0; bottom: 0; height: 8px; width: 100%; cursor: ns-resize; }
    .rz.xy { right: 0; bottom: 0; width: 12px; height: 12px; cursor: nwse-resize; background: linear-gradient(135deg, transparent 50%, var(--primary-color) 50%); opacity: 0.7; border-bottom-right-radius: 6px; }
    .pops { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; margin-top: 6px; font-size: 11px; color: var(--secondary-text-color); }
    .pop { display: inline-flex; gap: 4px; align-items: center; padding: 2px 8px; border-radius: 999px; border: 1px solid var(--divider-color, #444); color: var(--primary-text-color); }
    .pop ha-icon { --mdc-icon-size: 13px; }
  `;
}

customElements.get("wsfc-layout-map") || customElements.define("wsfc-layout-map", WsfcLayoutMap);
