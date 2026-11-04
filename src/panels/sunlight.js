// Sunlight Visualizer panel: NoUsername10's house card (custom:sunlight-visualizer-card,
// from the Sunlight Visualizer integration) in our grid, sized to the panel, 2.5D by
// default. Its buttons that change the integration's own settings (camera, house
// angle, options) are blocked unless the panel allows them (sv_controls: allow).
import { LitElement, html, css, nothing } from "lit";
import { panelStyles, head, pausedStyles, paused, onlyOtherStates, configEntities } from "./shared.js";
import { svEntities } from "../card/sunlight.js";

export const SV_TAG = "sunlight-visualizer-card";
export const SV_URL = "https://github.com/NoUsername10/Sunlight_Visualizer";
const RENDERERS = { two_point_five_d: 1, auto: 1, three_d: 1 };
let unpadSheet;

/** The Sunlight Visualizer card's config for a panel and size (exported for tests). */
export function svCardConfig(c = {}, w = 450, h = 450) {
  const out = {
    type: `custom:${SV_TAG}`,
    rendererMode: RENDERERS[c.renderer] ? c.renderer : "two_point_five_d",
    weatherVisuals: c.weather_visuals || "automatic",
    wallPercentSource: c.wall_percent_source || "auto",
    roofPercentSource: c.roof_percent_source || "roof_sun_alignment",
    energyHudEnabled: c.energy_hud !== false,
    autoRotateEnabledDefault: !!c.auto_rotate,
    ...(c.sv && typeof c.sv === "object" ? c.sv : {}),
  };
  // Our panel sets the size (the card's own size settings would fight the grid).
  return { ...out, cardWidth: Math.max(120, Math.round(w)), cardHeight: Math.max(120, Math.round(h)), autoScaleWidth: false };
}

/**
 * Home Assistant for the card, read-only: service calls that change Sunlight
 * Visualizer's own settings are dropped (its integration service, and number /
 * select / switch calls on its entities); everything else goes through.
 */
export function readOnlyHass(hass, svIds = new Set(), onBlock = () => {}) {
  if (!hass) return hass;
  const ro = Object.create(hass);
  ro.callService = (domain, service, data, ...rest) => {
    const ids = [].concat(data?.entity_id || rest[0]?.entity_id || []);
    const own = domain === "sunlight_visualizer" || (["number", "select", "switch", "input_number"].includes(domain) && ids.some((e) => svIds.has(e) || /house_|ceiling_tilt|update_interval|roof_direction|fixed_sun/.test(e)));
    if (own) { onBlock(domain, service, data); return Promise.resolve(); }
    return hass.callService(domain, service, data, ...rest);
  };
  return ro;
}

class WsfcSunlight extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false }, lite: { attribute: false }, _err: { state: true }, _size: { state: true } };
  static styles = [
    panelStyles,
    pausedStyles,
    css`
      :host { display: flex; flex-direction: column; min-height: 0; }
      .box { flex: 1 1 auto; min-height: 160px; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden; }
      .box > * { --ha-card-background: transparent; --ha-card-box-shadow: none; --ha-card-border-width: 0; display: block; }
      .note { color: var(--wsfc-muted); font-size: calc(13px * var(--wsfc-ts, 1)); text-align: center; padding: 12px; }
      .note a { color: var(--primary-color); }
    `,
  ];

  shouldUpdate(changed) {
    // The house card watches the states itself (it gets every hass below).
    if (changed.size === 1 && changed.has("hass") && this._card) { this._card.hass = this._hassFor(); return false; }
    return !onlyOtherStates(changed, this.hass, [...configEntities(this.config)]);
  }

  _hassFor() {
    if (this.config?.sv_controls === "allow") return this.hass;
    if (this._roFor !== this.hass) {
      const sv = svEntities(this.hass);
      this._roFor = this.hass;
      this._ro = readOnlyHass(this.hass, new Set(sv?.all || []), (d, s) => {
        if (this._warned) return;
        this._warned = true;
        console.info(`weather-station-flex-card: Sunlight Visualizer ${d}.${s} blocked (panel is read-only; set Controls to Allow changes to permit it)`);
      });
    }
    return this._ro;
  }

  connectedCallback() {
    super.connectedCallback();
    this._ro2 ||= new ResizeObserver(() => {
      clearTimeout(this._rt);
      this._rt = setTimeout(() => this._measure(), 120);
    });
    this._ro2.observe(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._ro2?.disconnect();
    clearTimeout(this._rt);
  }

  // The house card gets the panel's space below the title row.
  _measure() {
    const box = this.renderRoot?.querySelector(".box");
    if (!box) return;
    const w = box.clientWidth, h = box.clientHeight;
    if (!w || !h) return;
    if (this._size && Math.abs(this._size.w - w) < 2 && Math.abs(this._size.h - h) < 2) return;
    this._size = { w, h };
  }

  async _ensure(cfg) {
    const json = JSON.stringify(cfg);
    if (json === this._json) { if (this._card) this._card.hass = this._hassFor(); return; }
    this._json = json;
    try {
      if (!customElements.get(SV_TAG)) {
        await Promise.race([customElements.whenDefined(SV_TAG), new Promise((r) => setTimeout(r, 4000))]);
        if (!customElements.get(SV_TAG)) { this._err = "missing"; return; }
      }
      if (this._json !== json) return;
      if (this._card?.setConfig) this._card.setConfig(cfg);
      else {
        const helpers = await window.loadCardHelpers?.();
        const el = helpers ? helpers.createCardElement(cfg) : Object.assign(document.createElement(SV_TAG), {});
        if (!helpers) el.setConfig?.(cfg);
        this._card = el;
      }
      this._card.hass = this._hassFor();
      this._err = undefined;
      this.requestUpdate();
      requestAnimationFrame(() => this._unpad());
    } catch (e) {
      this._err = String(e?.message || e);
    }
  }

  // Home Assistant pads a card's content by 16 px; our panel has its own padding.
  _unpad() {
    const sr = this._card?.shadowRoot;
    if (!sr || sr.__wsfcUnpad) return;
    unpadSheet ||= (() => { const s = new CSSStyleSheet(); s.replaceSync(".card-content { padding: 0 !important; } ha-card { padding: 0 !important; }"); return s; })();
    sr.adoptedStyleSheets = [...sr.adoptedStyleSheets, unpadSheet];
    sr.__wsfcUnpad = true;
  }

  updated() {
    requestAnimationFrame(() => this._measure());
    this._unpad();
  }

  render() {
    if (!this.hass) return nothing;
    const c = this.config || {};
    const title = head(c, "mdi:home-lightbulb-outline", "Sunlight");
    // Paused (collapsed or editing): drop the house card so it stops rendering.
    if (this.lite) { this._card = null; this._json = null; return html`${title}${paused("mdi:home-lightbulb-outline", "Sunlight Visualizer")}`; }
    if (this._err === "missing") {
      return html`${title}<div class="box"><div class="note">This panel shows the <b>Sunlight Visualizer</b> house card.<br>
        Install it from HACS (<a href=${SV_URL} target="_blank" rel="noopener">Sunlight Visualizer</a>), add the integration and set your house's direction there.</div></div>`;
    }
    const s = this._size || { w: 450, h: 450 };
    this._ensure(svCardConfig(c, s.w, s.h));
    return html`${title}<div class="box">${this._card || html`<div class="note">${this._err || "Loading…"}</div>`}</div>`;
  }
}

customElements.get("wsfc-panel-sunlight") || customElements.define("wsfc-panel-sunlight", WsfcSunlight);

// For the tests.
import * as SV from "../card/sunlight.js";
globalThis.__wsfcSunlight = { ...SV, svCardConfig, readOnlyHass };
