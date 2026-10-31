// The embedded Weather Flex editor (vendored editor + the sections' editor
// part), loaded with the card editor only (dist/wsfc-editor.js).
import { html } from "lit";
import "../flex/sections-editor.js";
import { WeatherForecastCardEditor } from "../../vendor/weather-forecast-card/src/editor/weather-forecast-card-editor";

// Embedded Weather Flex editors come in two modes (set `wsfcMode` on the element):
//   "sections" — everything except Weather Sources (those are card-wide and
//                are edited once, in the card editor's Weather station section)
//   "sources"  — only the Weather Sources panel, opened
// Only this card's editor class (wsfc-flex-core-editor) is patched; Weather
// Flex Card's own editor is a different class and is untouched.
{
  const P = WeatherForecastCardEditor.prototype;
  const sourcesPanel = P._wfcWeatherSourcesPanel;
  const render = P.render;
  const updated = P.updated;
  P._wfcWeatherSourcesPanel = function () {
    return this.wsfcMode === "sections" ? "" : sourcesPanel.call(this);
  };
  P.render = function () {
    if (this.wsfcMode !== "sources") return render.call(this);
    if (!this.hass || !this._config) return "";
    return html`${this._wfcEditorStyle()}${sourcesPanel.call(this)}`;
  };
  // Embedded in a Weather Station panel: the Weather Flex panels look and behave
  // like the card editor's own flat sections (accent label, accent border when
  // open), and opening one closes the card editor's sections for the panel.
  const FLAT = new CSSStyleSheet();
  FLAT.replaceSync(`
    details.wsfc-panel { border: 1px solid transparent; border-top-color: var(--ltek-c-border-soft, rgba(127,127,127,.25)); border-radius: 0; background: none; margin: 0; }
    details.wsfc-panel[open] { border-color: var(--accent-color, var(--ltek-c-accent, #03a9f4)); border-radius: var(--ltek-r-ctrl, 8px); margin: 6px 0; }
    details.wsfc-panel[open] + details.wsfc-panel { border-top-color: transparent; }
    details.wsfc-panel > summary.wsfc-panel-summary { padding: var(--ltek-sp-3, 10px); gap: 8px; }
    details.wsfc-panel > summary .wsfc-panel-icon { display: none; }
    details.wsfc-panel > summary .wsfc-panel-title { font-size: var(--ltek-fs-label, 13px); font-weight: var(--ltek-fw-semibold, 600); text-transform: uppercase; letter-spacing: 0.04em; color: var(--ltek-c-accent, var(--accent-color, #03a9f4)); }
    details.wsfc-panel > summary::after { width: 8px; height: 8px; border-right-color: var(--ltek-c-accent, var(--accent-color, #03a9f4)); border-bottom-color: var(--ltek-c-accent, var(--accent-color, #03a9f4)); }
    .wsfc-ed-header { display: none; }
  `);
  P.updated = function (changed) {
    updated?.call(this, changed);
    if (this.wsfcMode === "sections" && this.renderRoot) {
      if (!this.renderRoot.adoptedStyleSheets.includes(FLAT)) this.renderRoot.adoptedStyleSheets = [...this.renderRoot.adoptedStyleSheets, FLAT];
      this.renderRoot.querySelectorAll("details.wsfc-panel").forEach((d) => {
        if (d.__wsfcFlat) return;
        d.__wsfcFlat = true;
        d.addEventListener("toggle", () => {
          if (d.open) this.dispatchEvent(new CustomEvent("wsfc-flat-open", { detail: { type: this.wsfcType }, bubbles: true, composed: true }));
        });
      });
    }
    // wsfcPanels: only show the Weather Flex editor panels relevant to this
    // panel type (matched by their titles).
    const keep = this.wsfcPanels;
    if (keep && this.wsfcMode !== "sources") {
      this.renderRoot?.querySelectorAll("details.wfc-panel, details.wsfc-panel").forEach((d) => {
        const t = d.querySelector(":scope > summary .wfc-panel-title, :scope > summary .wsfc-panel-title")?.textContent?.trim();
        d.hidden = !!t && !keep.includes(t);
      });
    }
    if (this.wsfcMode === "sources" && !this.__wsfcOpened) {
      const d = this.renderRoot?.querySelector("details.wfc-panel, details.wsfc-panel");
      if (d) {
        d.open = true;
        this.__wsfcOpened = true;
      }
    }
  };
}

