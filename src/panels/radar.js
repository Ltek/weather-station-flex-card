// Radar panel: Leaflet map with an animated RainViewer radar loop and optional
// OpenWeatherMap overlay layers (wind, precipitation, clouds, temperature).
// Leaflet is loaded on first use (bundled, but its module code only runs when
// a radar panel is actually shown).
import { LitElement, html, css, unsafeCSS } from "lit";
import leafletCss from "inline-css:leaflet/dist/leaflet.css";
import { panelStyles, seg, head, pausedStyles, paused } from "./shared.js";

const RAINVIEWER_INDEX = "https://api.rainviewer.com/public/weather-maps.json";
// RainViewer's free tiles are served up to zoom 7; Leaflet upscales beyond.
const RAINVIEWER_MAX_NATIVE_ZOOM = 7;
const FRAME_MS = 600;
const LAST_FRAME_HOLD_MS = 1800;
const REFRESH_MS = 5 * 60e3;

let L = null;
const loadLeaflet = async () => (L ||= (await import("leaflet")).default);

// Base maps (no API key needed). `base_map_url` overrides with any XYZ service.
const ESRI = "https://server.arcgisonline.com/ArcGIS/rest/services";
const ESRI_ATTR = "Tiles &copy; Esri &mdash; Esri, HERE, Garmin, &copy; OpenStreetMap contributors";
export const BASE_MAPS = {
  gray: (dark) => [`${ESRI}/Canvas/World_${dark ? "Dark" : "Light"}_Gray_Base/MapServer/tile/{z}/{y}/{x}`, ESRI_ATTR, 16],
  streets: () => [`${ESRI}/World_Street_Map/MapServer/tile/{z}/{y}/{x}`, ESRI_ATTR, 19],
  topo: () => [`${ESRI}/World_Topo_Map/MapServer/tile/{z}/{y}/{x}`, ESRI_ATTR, 19],
  imagery: () => [`${ESRI}/World_Imagery/MapServer/tile/{z}/{y}/{x}`, "Tiles &copy; Esri &mdash; Esri, Maxar, Earthstar Geographics", 19],
  osm: () => ["https://tile.openstreetmap.org/{z}/{x}/{y}.png", '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', 19],
};

export const OWM_LAYERS = {
  wind_new: "Wind",
  precipitation_new: "Precip",
  clouds_new: "Clouds",
  temp_new: "Temp",
  pressure_new: "Pressure",
};

class WsfcRadar extends LitElement {
  static properties = {
    hass: { attribute: false },
    config: { attribute: false },
    station: { attribute: false },
    lite: { attribute: false }, // editing: placeholder instead of the live map
    _playing: { state: true },
    _frameLabel: { state: true },
    _overlay: { state: true },
    _error: { state: true },
  };
  static styles = [
    panelStyles,
    pausedStyles,
    unsafeCSS(leafletCss),
    css`
      .map { position: relative; flex: 1; min-height: 240px; border-radius: 12px; overflow: hidden; background: #1b1f24; }
      .map > div { position: absolute; inset: 0; }
      .bar { display: flex; align-items: center; gap: 8px; margin-top: 8px; flex-wrap: wrap; }
      .bar button.play { font: inherit; border: 0; background: var(--primary-color); color: var(--text-primary-color, #fff); border-radius: 999px; padding: 4px 12px; cursor: pointer; }
      .time { font-variant-numeric: tabular-nums; color: var(--wsfc-muted); font-size: 13px; min-width: 7ch; }
      .spacer { flex: 1; }
      .leaflet-container { font: inherit; background: transparent; }
      .leaflet-control-attribution { font-size: 9px; }
    `,
  ];

  constructor() {
    super();
    this._playing = true;
    this._frames = [];
    this._idx = 0;
  }

  get _radarOn() {
    return this.config?.radar !== false;
  }

  render() {
    const key = this.config?.owm_api_key;
    const overlays = this.config?.owm_layers || ["wind_new"];
    const overlay = this._overlay ?? this.config?.owm_default ?? "none";
    if (this.lite) return html`${head(this.config, this._radarOn ? "mdi:radar" : "mdi:map", this._radarOn ? "Radar" : "Map")}${paused(this._radarOn ? "mdi:radar" : "mdi:map", this._radarOn ? "Radar loop" : "Map")}`;
    return html`
      ${head(this.config, this._radarOn ? "mdi:radar" : "mdi:map", this._radarOn ? "Radar" : "Map",
        key ? seg([{ value: "none", label: this._radarOn ? "Radar" : "Map" }, ...overlays.map((l) => ({ value: l, label: `${this._radarOn ? "+ " : ""}${OWM_LAYERS[l] || l}` }))], overlay, (v) => this._setOverlay(v), "Map overlay") : "")}
      <div class="map"><div id="map"></div></div>
      ${this._radarOn ? html`<div class="bar">
        <button class="play" type="button" @click=${this._togglePlay} aria-label=${this._playing ? "Pause radar loop" : "Play radar loop"}>
          ${this._playing ? "❚❚ Pause" : "▶ Play"}
        </button>
        <span class="time" aria-live="off">${this._frameLabel || ""}</span>
        <span class="spacer"></span>
        ${this._error ? html`<span class="note">${this._error}</span>` : ""}
      </div>` : ""}
    `;
  }

  firstUpdated() {
    if (!this.lite) this._initMap();
  }

  async _initMap() {
    await loadLeaflet();
    const el = this.renderRoot.getElementById("map");
    if (!el || this._map || this.lite) return;
    const lat = this.config?.latitude ?? this.hass?.config?.latitude ?? 39.5;
    const lon = this.config?.longitude ?? this.hass?.config?.longitude ?? -98.35;
    this._map = L.map(el, { zoomControl: true, attributionControl: true, zoomSnap: 0.5 }).setView([lat, lon], this.config?.zoom ?? 7);
    this._base = null;
    this._applyBase();
    L.circleMarker([lat, lon], { radius: 6, weight: 2, color: "#fff", fillColor: "#ff5252", fillOpacity: 1 }).addTo(this._map);
    this._ro = new ResizeObserver(() => this._map?.invalidateSize());
    this._ro.observe(el);
    if (this._radarOn) {
      this._loadFrames();
      this._refresh = setInterval(() => this._loadFrames(), REFRESH_MS);
    }
    if (this.config?.owm_api_key && (this.config?.owm_default ?? "none") !== "none") this._setOverlay(this.config.owm_default);
  }

  updated(changed) {
    if (changed.has("lite") && changed.get("lite") !== undefined) {
      if (this.lite) this._teardown();
      else if (!this._map) this._initMap();
    }
    if (changed.has("hass")) {
      const dark = !!this.hass?.themes?.darkMode;
      if (dark !== this._dark) this._applyBase();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._teardown();
  }

  _teardown() {
    clearTimeout(this._timer);
    clearInterval(this._refresh);
    this._ro?.disconnect();
    this._map?.remove();
    this._map = null;
    // Layers belonged to the removed map; a new map builds its own.
    this._frames = [];
    this._base = null;
    this._owm = null;
  }

  connectedCallback() {
    super.connectedCallback();
    // Re-attached after a dashboard view switch: rebuild the map.
    if (this.hasUpdated && !this._map && !this.lite) this._initMap();
  }

  _applyBase() {
    if (!this._map) return;
    this._dark = !!this.hass?.themes?.darkMode;
    if (this._base) this._map.removeLayer(this._base);
    const c = this.config || {};
    const [url, attribution, maxNativeZoom] = c.base_map_url
      ? [c.base_map_url, c.base_map_attribution || "", 19]
      : (BASE_MAPS[c.base_map] || BASE_MAPS.gray)(this._dark);
    this._base = L.tileLayer(url, { maxNativeZoom, maxZoom: 19, attribution }).addTo(this._map);
    this._base.bringToBack();
  }

  async _loadFrames() {
    try {
      const res = await fetch(RAINVIEWER_INDEX);
      if (!res.ok) throw new Error(`RainViewer ${res.status}`);
      const idx = await res.json();
      const frames = [...(idx.radar?.past || []), ...(idx.radar?.nowcast || [])];
      if (!frames.length || !this._map) return;
      // Replace layers: keep existing ones whose path is unchanged.
      const old = new Map(this._frames.map((f) => [f.path, f]));
      this._frames = frames.map((f) => {
        const kept = old.get(f.path);
        if (kept) { old.delete(f.path); return kept; }
        const layer = L.tileLayer(`${idx.host}${f.path}/256/{z}/{x}/{y}/2/1_1.png`, {
          opacity: 0,
          maxNativeZoom: RAINVIEWER_MAX_NATIVE_ZOOM,
          maxZoom: 19,
          zIndex: 10,
          attribution: '<a href="https://www.rainviewer.com/api.html">RainViewer</a>',
        }).addTo(this._map);
        return { ...f, layer, nowcast: (idx.radar?.nowcast || []).includes(f) };
      });
      old.forEach((f) => this._map.removeLayer(f.layer));
      this._error = undefined;
      this._idx = this._frames.length - 1;
      this._show(this._idx);
      if (this._playing) this._schedule();
    } catch (e) {
      this._error = `Radar unavailable (${e?.message || e})`;
    }
  }

  _show(i) {
    const op = this.config?.radar_opacity ?? 0.75;
    this._frames.forEach((f, k) => f.layer.setOpacity(k === i ? op : 0));
    const f = this._frames[i];
    if (f) {
      const t = new Date(f.time * 1000);
      const label = new Intl.DateTimeFormat(this.hass?.locale?.language, { hour: "numeric", minute: "2-digit" }).format(t);
      this._frameLabel = f.nowcast ? `${label} (forecast)` : label;
    }
  }

  _schedule() {
    clearTimeout(this._timer);
    if (!this._frames.length) return;
    const last = this._idx === this._frames.length - 1;
    this._timer = setTimeout(() => {
      this._idx = (this._idx + 1) % this._frames.length;
      this._show(this._idx);
      if (this._playing) this._schedule();
    }, last ? LAST_FRAME_HOLD_MS : FRAME_MS);
  }

  _togglePlay = () => {
    this._playing = !this._playing;
    if (this._playing) this._schedule();
    else clearTimeout(this._timer);
  };

  _setOverlay(layer) {
    this._overlay = layer;
    if (this._owm) { this._map?.removeLayer(this._owm); this._owm = null; }
    const key = this.config?.owm_api_key;
    if (!key || layer === "none" || !this._map) return;
    this._owm = L.tileLayer(`https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${encodeURIComponent(key)}`, {
      opacity: this.config?.owm_opacity ?? 0.8,
      zIndex: 20,
      maxZoom: 19,
      attribution: '<a href="https://openweathermap.org">OpenWeatherMap</a>',
    }).addTo(this._map);
  }
}

customElements.get("wsfc-panel-radar") || customElements.define("wsfc-panel-radar", WsfcRadar);
