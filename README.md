# Weather Station Flex Card

A weather-station dashboard in one Home Assistant card. Panels sit in a 12-column grid — an animated hero, a generated bulletin, metric tiles with min/max and sparklines, graphs, wind compass and rose, radar and maps, forecasts, sun & moon, any [Weather Flex Card](https://github.com/Ltek/weather-flex-card) sections, and any Home Assistant card. Panel buttons show and hide panels or open them as pop-ups. It works as a normal card or as a full-screen dashboard.

Built around an Ecowitt WS90 / GW2000B; works with any station whose sensors are in Home Assistant — including all three Ecowitt integrations (Home Assistant's Ecowitt, Ecowitt Local, Ecowitt Official), alone or combined. See [docs/ECOWITT_INTEGRATIONS.md](docs/ECOWITT_INTEGRATIONS.md).

Current build: **v2026.10.23.39** · full history in [CHANGELOG.md](CHANGELOG.md)

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

- **Weather station** — the Weather Sources list: add your station device (e.g. the Ecowitt GW2000B) and a weather entity for the forecast, set their priority and per-value overrides, and see which sensor is used for each value. Applies to every panel.
- **Appearance** — title, background (animated or an image), panel opacity, blur, corner radius, shadow, border and glow, layout, layout size, full-screen fit, row height and gap. Auto values show what they resolve to.
- **Panel buttons** — above the panels, in the Button Menu panel, or hidden; one checkbox per panel, All / None.
- **Layout** — a map of the grid: drag panels to move them and drag their edges to resize (arrow keys work too). A screen guide draws the map to a chosen screen size with a line or frame where the screen ends.
- **Panels** — the panel list (a stack's panels indented under it): edit, show/hide, duplicate, delete and add panels. Each panel has **Layout** (title and icon on/off, width, height, grid or pop-up, panel button, background, shadow / border / glow, shown on load) and its own options. The Hero, Chips, forecast and Sky Tracker panels also embed Weather Flex Card's editor for their sections.

Only what you change is saved, so the YAML stays short.

## Panels

| Type | What it shows |
|---|---|
| `hero` | Weather Flex header, chips and clock over the animated weather background. Larger text on wide tiles, compact on narrow ones. `auto_scale: true` sizes everything from the panel (with `scale`, 50–200 %). |
| `bulletin` | Generated summary of current conditions, sun and moon times; optional text sensor and NWS Alerts sensor. |
| `heading` | **Button Menu**: a title with station status (online / partial / offline) and, with `show_bar`, the panel buttons. |
| `metric` | One value: today's min/max, a 24h sparkline (line or hourly bars), UV level, pressure trend. `metric:` temperature, apparent_temperature, dew_point, humidity, pressure, wind_speed, wind_gust_speed, uv_index, solar_radiation, illuminance, rain_rate, rain_today, rain_24h, rain_event, vpd, indoor_temperature, indoor_humidity — or any `entity`. |
| `graph` | Any series on two axes; 6h–48h from history, 7d–365d from long-term statistics with min–max bands. |
| `temp_humidity` | Graph preset: temperature, dew point and humidity. |
| `uv_solar` | Graph preset: UV index (left axis, shaded) and solar radiation (right axis). |
| `chips` | **Current Weather Metrics**: the hero's metric chips on their own, with Weather Flex's Current Weather Metrics options. |
| `clock` | Time and date that size themselves to the panel; seconds, 12/24-hour, date formats, alignment, colours. |
| `stack` | Child panels side by side (`direction: horizontal`, wraps only below `min_width`) or one above another (`vertical`). Children take `grow` (relative width), `min_width` and `rows`. Hidden children (toggled off or hiding themselves) leave the stack and the others fill their space; children get their own panel buttons. |
| `wind` | Compass or wind rose, plus a speed/gust chart. The rose view uses the [Wind Rose Card](https://github.com/aukedejong/lovelace-windrose-card) when it is installed (`windrose_preset`: standard, periods, beaufort, corners, stats, playback, minimal; extra options under `windrose:`), else a built-in 24 h rose. |
| `radar` | RainViewer radar loop on a choice of base maps (gray, streets, topo, satellite imagery, OSM or a custom URL), optional OpenWeatherMap layers. `radar: false` gives a plain map — add several with different zooms and layers. |
| `hourly` | Weather Flex hourly forecast. |
| `daily` | Weather Flex daily forecast. |
| `forecast` | Hourly + daily together. |
| `day` | One day's forecast (`day_offset`: 0 today, 1 tomorrow, …). |
| `astronomy` | Sun and moon altitude over today, rise/set for the sun, civil/nautical/astronomical twilight and the moon, day length (and change since yesterday), visible light, moon phase. |
| `wind_map` | Windy's animated wind map (or gusts, rain, temperature, clouds, pressure, radar, satellite) centred on home. `overlay`, `zoom`, `model`, `level`, `wind_unit`, `marker`. |
| `statistics` | Station graphs drawn by [Statistics Graph Chart Card](https://github.com/cataseven/Statistics-Graph-Chart-Card) when installed (mixed bars/lines/areas, second axis), else Home Assistant's Statistics graph card; sensors filled in from your station. `preset`: `temps`, `wind`, `pressure_humidity`, `solar_uv`, `rain`, `temperature_range`; `engine`, `days_to_show`; anything else under `card:`. |
| `health` | Station health: battery, capacitor, signal, RSSI and online state per station device, plus the age of the last reading. |
| `pollen` | Pollen per species from the [Pollen Levels](https://github.com/eXPerience83/pollenlevels) integration (Google Pollen API, needs a Google Cloud key): main allergen, level chips, tomorrow's trend and a 12-month season strip. Out-of-season species and (when nothing is in season) the whole panel are hidden by default. |
| `air_quality` | US AQI and EPA category with PM2.5, PM10, ozone and CO₂, from the station's own air sensors or Home Assistant's [AirNow](https://www.home-assistant.io/integrations/airnow/) integration (free key). Layouts: scale (default, in the Pollen panel's style), rows, vertical bars or tiles, all on the EPA AQI colours; `extra:` adds other readings (benzene, VOCs…) with health-standard thresholds. |
| `moon` | Moon phase, illumination, moonrise/moonset, next full and new moon. |
| `sky_tracker` | **Sky Tracker**: the sun arc over the sky gradient (daylight, cloud cover) with the forecast row under it, and the moon — in its current phase — on the arc at night. `show_arc`, `show_sky`, `timeframe` (`hours` / `day` / `sunrise_sunset`), `hours`, `anchor` (`now_center` / `now_left`), `moon`, `moon_phase`, `show_facts`; fine-tune under Arc & sky details. Two trackers with one layer each show them separately. |
| `card` | Any Home Assistant card under `card:` (e.g. `statistics-graph`). |

Every panel takes `title`, `icon`, `show_title` / `show_icon` (false hides them), `span` (width in twelfths), `rows` (height in row units in half steps, 0.5 = half height, 0 = fit content), `display` (`grid`, `tile_popup` = in the grid and tap to open larger, or `popup` = button only), `in_bar` (a button in the Button Menu to show/hide it; without one the panel always follows `show`), `tile_background` (`default`, `translucent` = uses Panel opacity, `solid`, `none`), `tile_shadow` / `tile_border` / `tile_glow` (false turns the Appearance one off for that panel), `show` (shown on load) and optional `span_medium`, `span_narrow`, `rows_compact` for tablet and phone widths. On tablets small tiles stay side by side and wide panels go full width; on phones tiles pair up and everything else is full width.

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

### Animated background

```yaml
background: animated     # the hero's weather animation behind the whole card
panel_opacity: 0.45      # 0 = transparent panels … 1 = solid
panel_blur: 8            # px of blur behind panels
```

Or a picture behind the card: `background: image` with `background_image_url: /local/images/sky.jpg` (or upload one in the editor), `background_image_fit: cover | contain | tile`, `background_dim: 0.25`. Panel style: `panel_radius`, `panel_shadow: soft | medium | strong`, `panel_border_width`, `panel_border_color`, `panel_glow: true`, `panel_glow_color`, `panel_glow_size`.

While you edit the dashboard (or the card in the card editor), the animation, blur and the Radar and Windy maps pause so the editor stays responsive; `lite_editing: false` keeps them running.

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
