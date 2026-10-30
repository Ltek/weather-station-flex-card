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
  P.updated = function (changed) {
    updated?.call(this, changed);
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

