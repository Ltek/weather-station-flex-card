// Layout probe for the editor's layout map: renders a hidden copy of the card
// at the screen guide's size (paused, like any edit preview) and reports where
// every panel really lands — including panels that grow past their set height
// and what lies below the screen edge when the dashboard first loads.
// Fires "probe-measured" with
//   { w, visibleH, gridH, row, gap, tiles: [{ i, x, y, w, h, collapsed, where }] }
// where "where" is "on", "partial" or "off" (below the screen at load).
import { LitElement, html, css } from "lit";

const HEADER = 56; // dashboard header
const MARGIN = 16; // the full-screen card's own margin (see ha-card.full)

class WsfcLayoutProbe extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, guide: { attribute: false } };
  static styles = css`
    :host { position: fixed; left: -20000px; top: 0; visibility: hidden; pointer-events: none; contain: layout; }
    .screen { position: relative; overflow: hidden; }
  `;

  render() {
    const g = this.guide;
    if (!g?.w || !g?.h) return html``;
    return html`<div class="screen" style=${`width:${Math.max(200, g.w - MARGIN)}px;height:${Math.max(200, g.h - HEADER)}px`}></div>`;
  }

  updated(changed) {
    // Rebuild only for a new config or screen size (not every state update).
    const key = `${this.guide?.w}x${this.guide?.h}`;
    const fresh = changed.has("config") && changed.get("config") !== this.config;
    if (!fresh && key === this._key && this._card) return;
    if (!this.hass) return;
    this._key = key;
    clearTimeout(this._t);
    this._t = setTimeout(() => this._build(), 400);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this._t);
    clearTimeout(this._m);
  }

  _build() {
    const host = this.renderRoot.querySelector(".screen");
    const g = this.guide;
    if (!host || !g || !this.hass || !this.config?.entity) return;
    if (!customElements.get("weather-station-flex-card")) return;
    if (!this._card) {
      this._card = document.createElement("weather-station-flex-card");
      this._card.editMode = true; // paused: no animation, live maps or blur
      host.append(this._card);
    }
    try {
      // As on first load: defaults for panel buttons and collapsed panels.
      this._card.setConfig({ ...this.config, remember: false });
    } catch (_e) {
      return;
    }
    this._card.screenHeight = Math.max(200, g.h - HEADER - MARGIN);
    this._card.hass = this.hass;
    clearTimeout(this._m);
    // Let the panels render and the card fit its rows, then measure.
    this._m = setTimeout(() => {
      // Fit the rows to this screen now (the card's own fit can run before
      // everything has rendered), then measure on the next frame.
      try { this._card._fit?.(); } catch (_e) { /* ignore */ }
      requestAnimationFrame(() => this._measure());
    }, 900);
  }

  _measure() {
    const root = this._card?.shadowRoot;
    const sc = root?.querySelector(".scroller"), grid = root?.querySelector(".grid");
    if (!sc || !grid) return;
    const gr = grid.getBoundingClientRect(), sr = sc.getBoundingClientRect();
    const hr = this.renderRoot.querySelector(".screen").getBoundingClientRect();
    // Visible at load: down to the scroller's edge (full screen) or the screen's (normal card).
    const visibleH = Math.min(sr.top + sc.clientHeight, hr.bottom) - gr.top;
    const cs = getComputedStyle(grid);
    const tiles = [...grid.querySelectorAll(":scope > section.tile[data-i]")].map((t) => {
      const r = t.getBoundingClientRect();
      const y = r.top - gr.top, h = r.height;
      return {
        i: Number(t.dataset.i),
        x: r.left - gr.left,
        y,
        w: r.width,
        h,
        collapsed: t.classList.contains("collapsed"),
        where: y >= visibleH - 1 ? "off" : y + h > visibleH + 1 ? "partial" : "on",
      };
    });
    this.dispatchEvent(new CustomEvent("probe-measured", {
      detail: {
        w: gr.width,
        visibleH,
        gridH: gr.height,
        row: parseFloat(grid.style.getPropertyValue("--wsfc-row") || cs.getPropertyValue("--wsfc-row")) || 110,
        gap: parseFloat(cs.rowGap) || 12,
        tiles,
      },
    }));
  }
}

customElements.get("wsfc-layout-probe") || customElements.define("wsfc-layout-probe", WsfcLayoutProbe);
