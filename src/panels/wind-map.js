// Wind map panel: Windy's embeddable map (animated wind particles, plus gusts,
// rain, temperature, clouds or pressure layers) centred on home. Usually shown
// as a tile that opens larger in a pop-up (display: tile_popup).
import { LitElement, html, css, nothing } from "lit";
import { panelStyles, head, pausedStyles, paused } from "./shared.js";

export const WINDY_OVERLAYS = {
  wind: "Wind", gust: "Gusts", rain: "Rain & thunder", temp: "Temperature", clouds: "Clouds",
  pressure: "Pressure", radar: "Radar", satellite: "Satellite", waves: "Waves", snowAccu: "Snow depth",
};

/** Windy embed URL for a panel config + Home Assistant location. */
export function windyUrl(c, hass) {
  const lat = Number(c.latitude ?? hass?.config?.latitude ?? 39.5);
  const lon = Number(c.longitude ?? hass?.config?.longitude ?? -98.35);
  const us = hass?.config?.unit_system?.temperature === "°F";
  const q = new URLSearchParams({
    type: "map",
    location: "coordinates",
    metricRain: c.rain_unit || (us ? "in" : "mm"),
    metricTemp: c.temp_unit || (us ? "°F" : "°C"),
    metricWind: c.wind_unit || (us ? "mph" : "km/h"),
    zoom: String(c.zoom ?? 6),
    overlay: c.overlay || "wind",
    product: c.model || "ecmwf",
    level: c.level || "surface",
    lat: lat.toFixed(3),
    lon: lon.toFixed(3),
    detailLat: lat.toFixed(3),
    detailLon: lon.toFixed(3),
    marker: c.marker === false ? "" : "true",
    message: "true",
  });
  if (c.forecast_detail) q.set("detail", "true");
  return `https://embed.windy.com/embed.html?${q}`;
}

class WsfcWindMap extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false }, lite: { attribute: false }, _on: { state: true } };
  static styles = [
    panelStyles,
    pausedStyles,
    css`
      .frame { position: relative; flex: 1; min-height: 220px; border-radius: 12px; overflow: hidden; background: #1b1f24; }
      iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
      .start { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; width: 100%;
        border: 0; cursor: pointer; color: var(--wsfc-muted); font: inherit; font-size: 13px;
        background: repeating-linear-gradient(135deg, rgba(127, 127, 127, 0.08) 0 12px, rgba(127, 127, 127, 0.14) 12px 24px); }
      .start .pb { display: grid; place-items: center; width: 56px; height: 56px; border-radius: 50%; background: var(--primary-color); color: var(--text-primary-color, #fff); }
      .start .pb ha-icon { --mdc-icon-size: 32px; }
      .start:focus-visible { outline: 2px solid var(--primary-color); outline-offset: -2px; }
      button.stop { display: inline-grid; place-items: center; width: 28px; height: 28px; padding: 0; border: 0; border-radius: 50%; cursor: pointer;
        background: rgba(127, 127, 127, 0.15); color: var(--primary-text-color); }
      button.stop ha-icon { --mdc-icon-size: 18px; }
      button.stop:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }
    `,
  ];
  render() {
    if (!this.hass) return nothing;
    const c = this.config || {};
    // Build the URL once per config so hass updates don't reload the map.
    const url = windyUrl(c, this.hass);
    if (url !== this._url) this._url = url;
    // Start paused: nothing loads until play; the stop button unloads it again.
    if (this._on === undefined) this._on = !c.start_paused;
    const name = `${WINDY_OVERLAYS[c.overlay || "wind"] || "Wind"} map`;
    const stop = c.start_paused && this._on
      ? html`<button class="stop" type="button" @click=${() => (this._on = false)} aria-label="Stop the Windy map" title="Stop"><ha-icon icon="mdi:stop"></ha-icon></button>`
      : nothing;
    const title = head(c, "mdi:weather-windy", c.title || name, stop);
    if (this.lite) return html`${title}${paused("mdi:map-marker-radius-outline", "Windy map")}`;
    if (!this._on) {
      return html`${title}
        <div class="frame"><button class="start" type="button" @click=${() => (this._on = true)} aria-label=${`Load the animated ${name}`}>
          <span class="pb"><ha-icon icon="mdi:play"></ha-icon></span><span>${name} — press play to load</span>
        </button></div>`;
    }
    return html`${title}
      <div class="frame"><iframe src=${this._url} title="Windy weather map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>`;
  }
}

customElements.get("wsfc-panel-wind-map") || customElements.define("wsfc-panel-wind-map", WsfcWindMap);
