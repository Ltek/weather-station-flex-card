// Wind map panel: Windy's embeddable map (animated wind particles, plus gusts,
// rain, temperature, clouds or pressure layers) centred on home. Usually shown
// as a tile that opens larger in a pop-up (display: tile_popup).
import { LitElement, html, css, nothing } from "lit";
import { panelStyles, head } from "./shared.js";

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
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false } };
  static styles = [
    panelStyles,
    css`
      .frame { position: relative; flex: 1; min-height: 220px; border-radius: 12px; overflow: hidden; background: #1b1f24; }
      iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
    `,
  ];
  render() {
    if (!this.hass) return nothing;
    const c = this.config || {};
    // Build the URL once per config so hass updates don't reload the map.
    const url = windyUrl(c, this.hass);
    if (url !== this._url) this._url = url;
    return html`${c.show_title === false ? nothing : head(c, "mdi:weather-windy", c.title || `${WINDY_OVERLAYS[c.overlay || "wind"] || "Wind"} map`)}
      <div class="frame"><iframe src=${this._url} title="Windy weather map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>`;
  }
}

customElements.get("wsfc-panel-wind-map") || customElements.define("wsfc-panel-wind-map", WsfcWindMap);
