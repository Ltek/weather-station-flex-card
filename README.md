# Weather Station Flex Card

A weather-station dashboard in one Home Assistant card. Panels sit in a 12-column grid — an animated hero, a generated bulletin, metric tiles with min/max and sparklines, graphs, wind compass and rose, radar and maps, forecasts, sun & moon, any [Weather Flex Card](https://github.com/Ltek/weather-flex-card) sections, and any Home Assistant card. Panel buttons show and hide panels or open them as pop-ups. It works as a normal card or as a full-screen dashboard.

Built around an Ecowitt WS90 / GW2000B; works with any station whose sensors are in Home Assistant.

Current build: **v2026.10.19.3** · full history in [CHANGELOG.md](CHANGELOG.md)

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Ltek&repository=weather-station-flex-card&category=plugin)

---

## Install

HACS → ⋮ → **Custom repositories** → `https://github.com/Ltek/weather-station-flex-card`, category **Dashboard** → download **Weather Station Flex Card (Ltek)**. HACS adds the resource `/hacsfiles/weather-station-flex-card/weather-station-flex-card.js`.

Add the card from the dashboard card picker and use the visual editor, or start from YAML:

```yaml
type: custom:weather-station-flex-card
entity: weather.openweathermap        # forecast + condition (a weather.* entity)
metric_sources:                       # Weather Flex "Weather Sources": first source with a value wins
  sources:
    - ref: device:<your Ecowitt gateway device id>   # sensors are auto-mapped (outdoor preferred)
    - ref: weather.openweathermap
title: Weather station
```

With no `panels:` you get the default dashboard: hero, bulletin, a "Local measurements" heading with the panel buttons, wind, six metric tiles (temperature, rain today, humidity, UV, solar radiation, pressure), forecast and tomorrow; Temp & Humidity and Sun & Moon start hidden, and the radar opens as a pop-up.

**Desktop layout needs width.** The layout follows the card's own width: under 720 px it stacks panels (phone layout), under 1100 px it uses the tablet layout. In a **Sections** view a card is only as wide as its section — use a **Panel** view, or make the section span the full width. `layout_size: wide` forces the desktop layout.

For a full-screen dashboard put the card in a **Panel** view and set `layout: fullscreen`. Panels with a height share the screen height (`fit_height: false` turns that off); anything that still doesn't fit scrolls inside the card.

## The editor

- **Weather station** — pick your station device (e.g. the Ecowitt GW2000B) and the forecast weather entity, and see which sensor is used for each value.
- **General** — title, layout, layout size, full-screen fit, panel buttons, row height and gap.
- **Hero & Weather Sources** — Weather Flex Card's complete editor (card appearance, Weather Sources, section order, header, metrics/chips, hourly, daily, sun position, sky bar, clock, actions, advanced). Weather Sources apply to the whole card.
- **Panels** — reorder, show/hide, duplicate, delete and add panels. Each panel has **Layout** (title, icon, width, height, grid or pop-up, panel button, shown on load) and its own options. Forecast, Sun & Moon and Weather Flex sections panels also embed Weather Flex Card's editor for their sections.

Only what you change is saved, so the YAML stays short.

## Panels

| Type | What it shows |
|---|---|
| `hero` | Weather Flex header, chips, Sky Bar and clock over the animated weather background. Larger text on wide tiles, compact on narrow ones. |
| `bulletin` | Generated summary of current conditions, sun and moon times; optional text sensor and NWS Alerts sensor. |
| `heading` | Section title with station status (online / partial / offline) and, with `show_bar`, the panel buttons. |
| `metric` | One value: today's min/max, a 24h sparkline (line or hourly bars), UV level, pressure trend. `metric:` temperature, apparent_temperature, dew_point, humidity, pressure, wind_speed, wind_gust_speed, uv_index, solar_radiation, illuminance, rain_rate, rain_today, rain_24h, rain_event, vpd, indoor_temperature, indoor_humidity — or any `entity`. |
| `graph` | Any series on two axes; 6h–48h from history, 7d–365d from long-term statistics with min–max bands. |
| `temp_humidity` | Graph preset: temperature, dew point and humidity. |
| `uv_solar` | Graph preset: UV index (left axis, shaded) and solar radiation (right axis). |
| `stack` | Child panels side by side (`direction: horizontal`, wraps only below `min_width`) or one above another (`vertical`). Children take `grow` (relative width), `min_width` and `rows`. |
| `wind` | Compass or 24h wind rose, plus a speed/gust chart. |
| `radar` | RainViewer radar loop on a choice of base maps (gray, streets, topo, satellite imagery, OSM or a custom URL), optional OpenWeatherMap layers. `radar: false` gives a plain map — add several with different zooms and layers. |
| `forecast` | Weather Flex hourly + daily sections. |
| `day` | One day's forecast (`day_offset`: 0 today, 1 tomorrow, …). |
| `sun_moon` | Weather Flex sun arc and Sky Bar, moon phase, rise/set, next full and new moon. |
| `flex` | Any Weather Flex Card configuration under `flex:` — every Weather Flex feature. |
| `card` | Any Home Assistant card under `card:` (e.g. `statistics-graph`). |

Every panel takes `title`, `icon`, `span` (width in twelfths), `rows` (height in row units, 0 = fit content), `display` (`grid` or `popup`), `in_bar` (panel button), `show` (shown on load) and optional `span_medium`, `span_narrow`, `rows_compact` for tablet and phone widths. On tablets small tiles stay side by side and wide panels go full width; on phones tiles pair up and everything else is full width.

```yaml
panels:
  - type: hero
    span: 8
    flex:                     # any Weather Flex config; merged over the hero defaults
      wfc: { current: { clock_font_size: 48 } }
  - type: bulletin
    alerts_entity: sensor.nws_alerts
  - type: heading
    title: Local measurements
    show_status: true
    show_bar: true
  - type: stack               # always side by side when there is room
    direction: horizontal
    panels:
      - { type: metric, metric: rain_today }
      - { type: metric, metric: uv_index }
      - { type: uv_solar, grow: 2 }
  - type: graph
    title: Pressure & wind
    series:
      - { metric: pressure }
      - { metric: wind_speed, axis: right, style: area }
    ranges: [24h, 7d, 30d]
  - type: radar
    radar: false
    base_map: imagery
    zoom: 5
    owm_api_key: !secret owm_key
    owm_layers: [wind_new, clouds_new]
    owm_default: wind_new
    display: popup
    title: Wind map
  - type: card
    span: 6
    card:
      type: statistics-graph
      entities: [sensor.gw2000b_outdoor_temperature]
      period: month
```

> An OpenWeatherMap API key is part of the card configuration, so anyone who can view the dashboard can read it.

The 7d+ graph ranges need long-term statistics, which Home Assistant keeps for sensors with a `state_class` (Ecowitt sensors have one). Toggled panels are remembered per browser (`remember: false` turns that off).

Configs from v2026.10.18.1 keep working: the implied hero becomes a hero panel, and a top-level `hero:` block becomes its `flex:`.

## Works alongside Weather Flex Card

Both cards can be on the same dashboard. This card registers its own element names (`wsfc-*`).

## Building from source

```bash
npm ci
npm run port      # re-extract the Weather Flex sections from weather-flex-card.js
npm run build     # -> dist/weather-station-flex-card.js
npm run preview   # local preview with a mock Home Assistant on :8765 (?editor=1 shows the editor)
```

## Credits

- Base card and animations: [troinine/ha-weather-forecast-card](https://github.com/troinine/ha-weather-forecast-card) v1.1.0 (MIT), vendored in `vendor/`.
- Layout inspired by [Station Météo](https://github.com/RenaudSub/Station-Meteo) (no code or assets used).
- Radar: [RainViewer](https://www.rainviewer.com). Base maps: Esri, HERE, Garmin, Maxar, © OpenStreetMap contributors. Optional layers: [OpenWeatherMap](https://openweathermap.org).
- Charts: [Chart.js](https://www.chartjs.org). Maps: [Leaflet](https://leafletjs.com).

## License

MIT — see [LICENSE](LICENSE).
