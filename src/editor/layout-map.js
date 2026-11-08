// Layout map for the editor: a scaled-down copy of the card's 12-column grid
// with free placement (quarter-row steps).
//   - drag a block to any cell: the panels in its way move down; nothing else moves
//     (a cell grid and a drop outline show where it lands)
//   - drag its right edge / bottom edge / corner to change width / height
//   - keyboard: focus a block, arrows move it one cell, Shift+arrows resize it
// Fires "layout-changed" with { panels } once per finished gesture: every grid
// panel gets its x / y, in reading order.
import { LitElement, html, css, nothing } from "lit";
import { panelMeta, spanOf, rowsOf } from "../card/panels.js";
import { METRICS } from "../card/metrics.js";
import { arrange, pushDown, readingOrder, toTracks, toRows, Q } from "../card/layout.js";

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
    _preview: { state: true }, // Map i → { x, y, w, h } while dragging or resizing
    gravity: { attribute: false }, // close gaps upward (the card's layout_gaps)
    _size: { state: true }, // { index, span, rows } while resizing
    _drag: { state: true },
    // Screen guide: { w, h } of the browser window, chrome (px above/around the
    // grid), row / gap (px), fit (rows share the height), mode "line" | "frame".
    guide: { attribute: false },
    // Where the panels really land on that screen (from the layout probe).
    measured: { attribute: false },
    _mapW: { state: true },
    _tracks: { state: true },
  };

  connectedCallback() {
    super.connectedCallback();
    this._ro = new ResizeObserver(() => {
      const g = this.renderRoot.querySelector(".grid");
      if (!g) return;
      const w = g.clientWidth - 12; // minus padding
      if (Math.abs(w - (this._mapW || 0)) > 1) this._mapW = w;
    });
    this.updateComplete.then(() => { const g = this.renderRoot.querySelector(".grid"); if (g) this._ro.observe(g); });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._ro?.disconnect();
  }

  // Map scale. With a screen guide the map is drawn to the screen's scale
  // (map px per real px = map width / screen width); otherwise fixed sizes.
  _scale() {
    const g = this.guide;
    if (!g?.w || !g?.h || !this._mapW) return { row: MAP_ROW, gap: MAP_GAP, line: null };
    const k = this._mapW / g.w;
    const avail = Math.max(100, g.h - (g.chrome || 0));
    let rowPx = g.row || 110;
    // Full screen + fit: rows share the screen height, like the card does.
    let fits = false;
    if (g.fit && this._tracks) {
      const rows = this._tracks / Q;
      const want = (avail + (g.gap ?? 12)) / rows - (g.gap ?? 12);
      rowPx = Math.max(60, Math.min(400, want));
      fits = want >= 60; // below the minimum the rows stop shrinking and the grid runs off screen
    }
    const gap = Math.max(2, (g.gap ?? 12) * k);
    return { row: Math.max(8, rowPx * k), gap, line: avail * k, rowPx: Math.round(rowPx), fits };
  }

  updated(changed) {
    if (changed.has("panels") && this._focusNext != null) {
      const n = this._focusNext;
      this._focusNext = null;
      this.renderRoot.querySelector(`.blk[data-i="${n}"]`)?.focus();
    }
    // Count the quarter-row tracks of the panels shown on load (for the
    // fit-to-screen scale), from a hidden copy of the grid without the hidden panels.
    const g = this.renderRoot.querySelector(".grid.measure");
    if (!g || !this.guide?.fit) return;
    const { row, gap } = this._scale();
    const tracks = Math.max(Q, Math.round((g.clientHeight - 12 + gap) / ((row - 3 * gap) / Q + gap)));
    if (tracks !== this._tracks) this._tracks = tracks;
  }

  // Grid panels = everything not shown as a pop-up.
  // Panels hidden on load aren't on the map (they're listed under it).
  _inMap(p) {
    return p.display !== "popup" && p.show !== false && !this._inHero(p);
  }

  // Placed inside the hero (needs a hero on the grid).
  _inHero(p) {
    return p.place === "hero" && ["sky_tracker", "daily", "hourly", "forecast"].includes(p.type) && (this.panels || []).some((q) => q.type === "hero" && q.display !== "popup");
  }

  _gridIdx() {
    return (this.panels || []).map((p, i) => i).filter((i) => this._inMap(this.panels[i]));
  }

  // Items for placement: every grid panel with its size and position (tracks).
  _items(panels = this.panels || []) {
    return this._gridIdx().map((i) => {
      const p = panels[i];
      return { key: i, w: spanOf(p), h: toTracks(rowsOf(p)), x: p.x ?? null, y: p.y == null ? null : Number(p.y) * Q };
    });
  }

  _positions() {
    return this._preview || arrange(this._items(), { gravity: this.gravity !== false });
  }

  render() {
    const panels = this.panels || [];
    this._pos = this._positions();
    const order = readingOrder(this._pos);
    const popups = panels.map((p, i) => i).filter((i) => panels[i].display === "popup");
    const hidden = panels.map((p, i) => i).filter((i) => panels[i].display !== "popup" && panels[i].show === false);
    const sc = this._scale();
    this._mr = sc.row; this._mg = sc.gap;
    const mode = this.guide?.mode || "line";
    return html`
      <div class="wrap">
        <div class="grid ${this._drag?.moved || this._size ? "editing" : ""}" style=${`--row:${sc.row}px;--gap:${sc.gap}px`}>
          ${order.map((i) => this._block(panels[i], i))}
        </div>
        ${this.guide?.fit ? html`<div class="grid measure" aria-hidden="true" style=${`--row:${sc.row}px;--gap:${sc.gap}px`}>
          ${this._measureBlocks(panels)}</div>` : nothing}
        ${this.measured?.w && this._mapW
          // Measured on that screen: the screen edge where it really is.
          ? (this.measured.gridH > this.measured.visibleH + 1
            ? html`<div class="guide frame" style=${`top:${6 + this.measured.visibleH * (this._mapW / this.measured.w)}px`} aria-hidden="true"><span>${this.guide.w}×${this.guide.h} screen edge</span></div>`
            : html`<div class="guide fitbox" aria-hidden="true"><span>Fits ${this.guide.w}×${this.guide.h}</span></div>`)
          : sc.line == null
          ? nothing
          : sc.fits
            // Full screen + fit: everything fits; the frame is the screen.
            ? html`<div class="guide fitbox" aria-hidden="true"><span>Fits ${this.guide.w}×${this.guide.h} · rows ${sc.rowPx}px</span></div>`
            : html`<div class="guide ${mode}" style=${`top:${6 + sc.line}px`} aria-hidden="true">
                <span>${this.guide.w}×${this.guide.h} screen edge${this.guide.fit ? ` · rows at the ${sc.rowPx}px minimum` : ""}</span></div>`}
      </div>
      ${this._screen()}
      ${hidden.length
        ? html`<div class="pops"><span>Hidden on load (not on the map):</span>${hidden.map((i) => html`<span class="pop"><ha-icon icon=${iconOf(panels[i])}></ha-icon>${nameOf(panels[i])}</span>`)}</div>`
        : nothing}
      ${(this.panels || []).some((p) => this._inHero(p))
        ? html`<div class="pops"><span>Inside the hero:</span>${(this.panels || []).map((p, i) => [p, i]).filter(([p]) => this._inHero(p)).map(([p]) => html`<span class="pop"><ha-icon icon=${iconOf(p)}></ha-icon>${nameOf(p)}</span>`)}</div>`
        : nothing}
      ${popups.length
        ? html`<div class="pops"><span>Pop-ups:</span>${popups.map((i) => html`<span class="pop"><ha-icon icon=${iconOf(panels[i])}></ha-icon>${nameOf(panels[i])}</span>`)}</div>`
        : nothing}
    `;
  }

  // On the real screen at load (from the layout probe): one line of summary and
  // which panels end up partly or fully off screen. The map itself marks them
  // (screen edge line, shaded area below it, dashed extensions for panels that
  // grow, dotted outlines for those off screen).
  _screen() {
    const m = this.measured, g = this.guide;
    if (!m || !g || !this._mapW || !m.w) return nothing;
    const off = m.tiles.filter((t) => t.where === "off"), part = m.tiles.filter((t) => t.where === "partial");
    const names = (list) => list.map((t) => nameOf(this.panels[t.i] || {})).join(", ");
    return html`<div class="shot-head">On the ${g.w}×${g.h} screen at load${m.gridH <= m.visibleH + 1 ? html` — <span class="okc">everything fits</span>` : ""}</div>
      ${off.length || part.length
        ? html`<div class="shot-note">${part.length ? html`<b>Partly off screen:</b> ${names(part)}. ` : ""}${off.length ? html`<b>Off screen:</b> ${names(off)}.` : ""}
            ${g.fit && !g.strict ? " Content makes some panels taller than their rows (dashed in the map); try Exact heights, Fill the panel, or more rows for them." : ""}</div>`
        : nothing}`;
  }

  // Quarter-row tracks at their placed cell.
  _place(r) {
    return `grid-column: ${r.x + 1} / span ${r.w}; grid-row: ${r.y + 1} / span ${r.h};`;
  }

  // The panels shown on load (for the fit-to-screen scale), placed as the card places them.
  _measureBlocks(panels) {
    const shown = this._items().filter((it) => panels[it.key].show !== false);
    const pos = arrange(shown, { gravity: this.gravity !== false });
    return [...pos.values()].map((r) => html`<div style=${this._place(r)}></div>`);
  }

  _block(p, i) {
    const sz = this._size?.index === i ? this._size : null;
    const r = this._pos.get(i);
    const span = r.w;
    const rows = sz ? sz.rows : rowsOf(p);
    let style = this._place(r);
    const m = !sz && this.measured?.tiles?.find((t) => t.i === i);
    // Rows this panel really takes on that screen (content can make it taller).
    const real = m && !m.collapsed ? Math.round(((m.h + this.measured.gap) / (this.measured.row + this.measured.gap)) * Q) / Q : null;
    const grows = real != null && rows > 0 && real > rows + 0.25;
    // How much taller it really is, drawn as a dashed extension below the block.
    if (grows) style += `--extra:${Math.round((real - rows) * ((this._mr || MAP_ROW) + (this._mg || MAP_GAP)))}px;`;
    const cls = ["blk", p.show === false ? "hidden" : "", this._drag?.index === i ? "dragging" : "", sz ? "sizing" : "", p.type, m ? `at-${m.where}` : "", grows ? "grows" : "", m?.collapsed ? "folded" : ""].join(" ");
    return html`<div class=${cls} style=${style} data-i=${i} tabindex="0" role="button"
        aria-label=${`${nameOf(p)}, column ${r.x + 1}, row ${toRows(r.y) + 1}, width ${span} of 12, height ${rows || "auto"}. Arrow keys move; Shift+arrows resize.`}
        @pointerdown=${(e) => this._startMove(e, i)} @keydown=${(e) => this._key(e, i)}>
      <ha-icon icon=${iconOf(p)}></ha-icon>
      <span class="nm">${nameOf(p)}</span>
      <span class="dim">${span}×${rows || "a"}${grows ? html` <b class="need" title="Its content makes it taller on that screen">→ ${real}</b>` : nothing}${m?.collapsed ? " · collapsed" : ""}</span>
      <span class="rz x" @pointerdown=${(e) => this._startSize(e, i, "x")}></span>
      <span class="rz y" @pointerdown=${(e) => this._startSize(e, i, "y")}></span>
      <span class="rz xy" @pointerdown=${(e) => this._startSize(e, i, "xy")}></span>
    </div>`;
  }

  /* ---------------------------------------------------------------- move */
  // The grid cell (column, track) under a point, from the map's own geometry.
  _cell(e) {
    const g = this.renderRoot.querySelector(".grid");
    const r = g.getBoundingClientRect();
    const gap = this._mg || MAP_GAP, colW = (g.clientWidth - 12 - 11 * gap) / 12, trackH = ((this._mr || MAP_ROW) - 3 * gap) / Q;
    return { x: Math.floor((e.clientX - r.left - 6) / (colW + gap)), y: Math.floor((e.clientY - r.top - 6) / (trackH + gap)) };
  }

  _startMove(e, i) {
    if (e.button !== 0 || e.target.classList.contains("rz")) return;
    e.preventDefault();
    const el = e.currentTarget;
    el.setPointerCapture(e.pointerId);
    const at = this._pos.get(i), c = this._cell(e);
    this._drag = { index: i, x0: e.clientX, y0: e.clientY, moved: false, dx: c.x - at.x, dy: c.y - at.y, at: { x: at.x, y: at.y } };
    const move = (ev) => this._onMove(ev);
    const up = () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
      const d = this._drag, pv = this._preview;
      this._drag = null;
      this._preview = null;
      if (d?.moved && pv && (d.to.x !== d.at.x || d.to.y !== d.at.y)) this._commit(pv);
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
    // Where the grabbed point is now, minus where it was grabbed in the panel.
    const c = this._cell(e);
    const me = arrange(this._items(), { gravity: this.gravity !== false }).get(d.index);
    const to = { x: Math.max(0, Math.min(12 - me.w, c.x - d.dx)), y: Math.max(0, c.y - d.dy) };
    if (d.to && d.to.x === to.x && d.to.y === to.y) return;
    d.to = to;
    this._preview = pushDown(this._items(), d.index, to, { gravity: this.gravity !== false });
  }

  // Store every grid panel's place, in reading order (pop-ups keep their slots).
  _commit(pos, sizes = {}) {
    const panels = this.panels;
    const order = readingOrder(pos);
    const queue = order.map((i) => {
      const r = pos.get(i);
      const p = { ...panels[i], x: r.x, y: toRows(r.y) };
      if (sizes[i]) Object.assign(p, sizes[i]);
      return this._tidy(p);
    });
    const next = panels.map((p) => (this._inMap(p) ? queue.shift() : p));
    // Where each panel ends up in the stored list (it's re-sorted into reading order).
    const slots = panels.map((p, k) => k).filter((k) => this._inMap(panels[k]));
    this._moved = new Map(order.map((i, n) => [i, slots[n]]));
    this._emit(next);
  }

  // Store only sizes that differ from the type's defaults.
  _tidy(p) {
    const m = panelMeta(p) || {};
    if (p.span === m.span) delete p.span;
    if (p.rows != null && p.rows === (m.rows ?? 0)) delete p.rows;
    return p;
  }

  _commitOrder(order) {
    // Pop-up panels keep their positions; grid panels fill the grid slots in the new order.
    const panels = this.panels;
    const queue = order.map((i) => panels[i]);
    const next = panels.map((p) => (this._inMap(p) ? queue.shift() : p));
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
    const gap = this._mg || MAP_GAP;
    const colW = (grid.clientWidth - 12 - 11 * gap) / 12 + gap;
    const trackH = ((this._mr || MAP_ROW) - 3 * gap) / Q + gap;
    const p = this.panels[i];
    const at = this._pos.get(i);
    const s0 = spanOf(p), r0 = rowsOf(p);
    this._size = { index: i, span: s0, rows: r0 };
    const x0 = e.clientX, y0 = e.clientY;
    const move = (ev) => {
      const span = axis === "y" ? s0 : Math.max(1, Math.min(12 - at.x, s0 + Math.round((ev.clientX - x0) / colW)));
      // Rows: 0 means "fit content"; shown as one row in the map. Quarter-row steps.
      const base = r0 || 1;
      let rows = axis === "x" ? r0 : Math.max(0.25, Math.min(MAX_ROWS, toRows(toTracks(base) + Math.round((ev.clientY - y0) / trackH))));
      if (axis !== "x" && r0 === 0 && rows === 1 && Math.abs(ev.clientY - y0) < trackH / 2) rows = 0;
      if (span === this._size.span && rows === this._size.rows) return;
      this._size = { index: i, span, rows };
      this._preview = pushDown(this._items(), i, { x: at.x, y: at.y, w: span, h: toTracks(rows) }, { gravity: this.gravity !== false });
    };
    const up = () => {
      handle.removeEventListener("pointermove", move);
      handle.removeEventListener("pointerup", up);
      handle.removeEventListener("pointercancel", up);
      const { span, rows } = this._size;
      const pv = this._preview;
      this._size = null;
      this._preview = null;
      if ((span !== s0 || rows !== r0) && pv) this._commit(pv, { [i]: { span, rows } });
    };
    handle.addEventListener("pointermove", move);
    handle.addEventListener("pointerup", up);
    handle.addEventListener("pointercancel", up);
  }

  _commitSize(i, span, rows) {
    const at = this._pos.get(i);
    const pos = pushDown(this._items(), i, { x: at.x, y: at.y, w: span, h: toTracks(rows) }, { gravity: this.gravity !== false });
    this._commit(pos, { [i]: { span, rows } });
  }

  /* ------------------------------------------------------------ keyboard */
  _key(e, i) {
    const d = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key];
    if (!d) return;
    e.preventDefault();
    const p = this.panels[i];
    if (e.shiftKey) {
      // Resize: a column wider / narrower, a quarter row taller / shorter.
      const rows = Math.max(0, Math.min(MAX_ROWS, toRows(toTracks(rowsOf(p) || 1) + d[1])));
      this._commitSize(i, Math.max(1, Math.min(12 - this._pos.get(i).x, spanOf(p) + d[0])), rowsOf(p) === 0 && d[1] < 0 ? 0.75 : rows);
    } else {
      const at = this._pos.get(i);
      const to = { x: Math.max(0, Math.min(12 - at.w, at.x + d[0])), y: Math.max(0, at.y + d[1]) };
      // Moving up into a gap that gravity would close again: jump over the panel above.
      let pos = pushDown(this._items(), i, to, { gravity: this.gravity !== false });
      if (d[1] < 0 && pos.get(i).y >= at.y) {
        const above = [...this._pos.values()].filter((r) => r.key !== i && r.y + r.h <= at.y && r.x < at.x + at.w && at.x < r.x + r.w).sort((a, b) => b.y + b.h - (a.y + a.h))[0];
        if (above) pos = pushDown(this._items(), i, { x: at.x, y: above.y }, { gravity: this.gravity !== false });
      }
      this._commit(pos);
    }
    // Keep the keyboard on the same panel once the editor sends the new layout back.
    this._focusNext = this._moved?.get(i) ?? i;
  }

  _emit(panels) {
    this.dispatchEvent(new CustomEvent("layout-changed", { detail: { panels } }));
  }

  static styles = css`
    :host { display: block; }
    .wrap { position: relative; }
    /* Screen guide: where the screen ends. Line = dashed edge; Frame = also
       shades everything below it. */
    .guide { position: absolute; left: 0; right: 0; height: 0; border-top: 2px dashed var(--warning-color, #ffa600); pointer-events: none; z-index: 3; }
    .guide span { position: absolute; right: 6px; top: 2px; font-size: 10px; font-weight: 600; color: var(--warning-color, #ffa600); background: var(--card-background-color, #1c1c1c); padding: 0 4px; border-radius: 4px; }
    .grid.measure { position: absolute; left: 0; right: 0; top: 0; visibility: hidden; pointer-events: none; background: none; }
    .guide.fitbox { top: 0; bottom: 0; height: auto; border: 2px dashed var(--success-color, #43a047); border-radius: 10px; }
    .guide.fitbox span { top: auto; bottom: 4px; color: var(--success-color, #43a047); }
    .guide.frame { bottom: 0; height: auto; background: repeating-linear-gradient(135deg, rgba(255, 166, 0, 0.12) 0 6px, transparent 6px 12px); border-radius: 0 0 10px 10px; }
    .grid {
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      grid-auto-rows: calc((var(--row) - 3 * var(--gap)) / 4);
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
    .blk.dragging { cursor: grabbing; border: 2px dashed var(--primary-color); background: color-mix(in srgb, var(--primary-color) 18%, var(--card-background-color, #222)); z-index: 4; }
    /* While dragging or resizing: the cell grid (columns and quarter rows). */
    .grid.editing { background-image:
        linear-gradient(to right, color-mix(in srgb, var(--primary-color) 22%, transparent) 1px, transparent 1px),
        linear-gradient(to bottom, color-mix(in srgb, var(--primary-color) 14%, transparent) 1px, transparent 1px);
      background-size: calc((100% - 12px + var(--gap)) / 12) 100%, 100% calc((var(--row) - 3 * var(--gap)) / 4 + var(--gap));
      background-position: 6px 0, 0 6px; }
    .blk { transition: box-shadow 0.12s, transform 0.12s; }
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
    .need { color: var(--warning-color, #ffa600); font-weight: 700; }
    .blk.grows { border-color: var(--warning-color, #ffa600); overflow: visible; }
    .blk.grows::after { content: ""; position: absolute; left: -1px; right: -1px; top: 100%; height: var(--extra, 0); z-index: 1; pointer-events: none;
      border: 1px dashed var(--warning-color, #ffa600); border-top: 0; border-radius: 0 0 6px 6px;
      background: repeating-linear-gradient(135deg, rgba(255, 166, 0, 0.18) 0 4px, transparent 4px 8px); }
    .blk.at-partial { border-color: var(--warning-color, #ffa600); }
    .blk.at-off { border-style: dotted; }
    .blk.folded { opacity: 0.8; }
    .shot-head { margin: 10px 0 4px; font-size: 12px; font-weight: 600; color: var(--secondary-text-color); }
    .shot-head .okc { color: var(--success-color, #43a047); }
    .shot { position: relative; border-radius: 10px; background: rgba(127, 127, 127, 0.08); overflow: hidden; }
    .st { position: absolute; box-sizing: border-box; border-radius: 4px; border: 1px solid var(--divider-color, #444); background: var(--card-background-color, #222);
      display: flex; gap: 3px; align-items: flex-start; padding: 2px 4px; font-size: 10px; line-height: 1.2; overflow: hidden; color: var(--primary-text-color); }
    .st ha-icon { --mdc-icon-size: 12px; color: var(--primary-color); flex: 0 0 auto; }
    .st span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .st.partial { border-color: var(--warning-color, #ffa600); }
    .st.off { opacity: 0.55; border-style: dashed; }
    .st.folded { background: transparent; }
    .below { position: absolute; left: 0; right: 0; bottom: 0; border-top: 2px dashed var(--warning-color, #ffa600); pointer-events: none;
      background: repeating-linear-gradient(135deg, rgba(255, 166, 0, 0.16) 0 6px, transparent 6px 12px); }
    .below span { position: absolute; right: 6px; top: 2px; font-size: 10px; font-weight: 600; color: var(--warning-color, #ffa600); background: var(--card-background-color, #1c1c1c); padding: 0 4px; border-radius: 4px; }
    .shot-note { margin-top: 4px; font-size: 11px; color: var(--secondary-text-color); line-height: 1.4; }
    .pops { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; margin-top: 6px; font-size: 11px; color: var(--secondary-text-color); }
    .pop { display: inline-flex; gap: 4px; align-items: center; padding: 2px 8px; border-radius: 999px; border: 1px solid var(--divider-color, #444); color: var(--primary-text-color); }
    .pop ha-icon { --mdc-icon-size: 13px; }
  `;
}

customElements.get("wsfc-layout-map") || customElements.define("wsfc-layout-map", WsfcLayoutMap);
