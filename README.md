# Weather Station Flex Card

A full-screen capable Home Assistant Dashboard card for a home weather station (built around an Ecowitt WS90 / GW2000B, works with any station whose sensors are in Home Assistant). An animated hero shows current conditions; a panel bar switches panels on and off: **Temp & Humidity**, **Wind**, **Radar**, **Forecast** and **Sun & Moon**.

Current build: **v2026.10.18.1** · full history in [CHANGELOG.md](CHANGELOG.md)

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Ltek&repository=weather-station-flex-card&category=plugin)

> **Early build.** Configuration is YAML-only for now (no visual editor yet), and option names may still change.

---

## What it shows

- **Hero** — condition, headline temperature, metric chips, the Sky Bar and a clock over the animated weather background (sun, clouds, rain, snow, lightning, stars, moon). These are the sections from [Weather Flex Card](https://github.com/Ltek/weather-flex-card); a Weather Flex `wfc:` block can be pasted under `hero:`.
- **Temp & Humidity** — current temperature, feels like, dew point and humidity, and **one** chart combining them: temperature and dew point on the left axis, humidity as a shaded area on the right. 24h from history; 7d and 30d from long-term statistics with a min–max band.
- **Wind** — compass (speed, gust, direction) or a 24-hour **wind rose** from your station's own data, plus a combined speed/gust chart.
- **Radar** — animated [RainViewer](https://www.rainviewer.com/api.html) radar loop over your home location, with optional [OpenWeatherMap](https://openweathermap.org/api/weathermaps) wind / precipitation / cloud layers.
- **Forecast** — Weather Flex's hourly and daily sections.
- **Sun & Moon** — Weather Flex's sun arc and Sky Bar, plus moon phase, illumination, moonrise/moonset and the next full moon.

On wide screens the enabled panels sit in a grid and each can be expanded; on narrow screens the panel bar acts as tabs.

## Install

HACS → ⋮ → **Custom repositories** → `https://github.com/Ltek/weather-station-flex-card`, category **Dashboard** → download **Weather Station Flex Card (Ltek)**. HACS adds the resource `/hacsfiles/weather-station-flex-card/weather-station-flex-card.js`.

## Configure

```yaml
type: custom:weather-station-flex-card
entity: weather.openweathermap        # forecast + condition (required, a weather.* entity)
metric_sources:                       # Weather Flex "Weather Sources": first source with a value wins
  sources:
    - ref: device:<your Ecowitt gateway device id>   # sensors are auto-mapped (outdoor preferred)
    - ref: weather.openweathermap
layout: fullscreen                    # fullscreen | auto
panels:
  - type: temp_humidity
  - type: wind
  - type: radar
    # owm_api_key: !secret owm_key    # optional; enables the OpenWeatherMap layers
    # owm_layers: [wind_new, precipitation_new, clouds_new]
  - type: forecast
  - type: sun_moon
```

For the full-screen layout, put the card in a **Panel** view (or a Sections view at full width).

| Option | Description |
|---|---|
| `entity` | Weather entity for forecast and condition. Required. |
| `metric_sources` | Same as Weather Flex Card: an ordered list of sources (`device:<id>`, a `weather.*` entity or any sensor), each with optional per-metric `overrides`. |
| `layout` | `fullscreen` fills the view below the header; `auto` sizes to content. |
| `hero` | Weather Flex config deep-merged over the hero defaults, or `false` to hide the hero. |
| `panel_bar` | `false` hides the panel buttons. |
| `panel_min_width` | Minimum panel width in px for the grid (default 340). |
| `panels[]` | `type` plus panel options. `show: false` starts a panel hidden; `title`, `icon` and `span` (grid columns) apply to every panel. |

Panel options:

- `temp_humidity` — `range` (`24h`/`7d`/`30d`), `entities: { temperature, dew_point, humidity }` to override the resolved sensors.
- `wind` — `view` (`compass`/`rose`), `rose_bins` (speed thresholds, in the sensor's unit), `entities: { wind_speed, wind_gust_speed, wind_bearing }`.
- `radar` — `zoom`, `latitude`/`longitude` (default: home), `radar_opacity`, `owm_api_key`, `owm_layers`, `owm_default`, `owm_opacity`, `base_map_url`, `base_map_attribution`.
- `forecast`, `sun_moon` — `flex:` takes any Weather Flex config to override the panel's sections. `sun_moon` also takes `show_moon: false`.

> The OpenWeatherMap API key is part of the card configuration, so anyone who can view the dashboard can read it.

The 7d/30d charts need long-term statistics, which Home Assistant keeps for sensors with a `state_class` (Ecowitt sensors have one).

## Works alongside Weather Flex Card

Both cards can be on the same dashboard. This card registers its own element names (`wsfc-*`), so neither card affects the other.

## Building from source

```bash
npm ci
npm run port      # re-extract the Weather Flex sections from weather-flex-card.js
npm run build     # -> dist/weather-station-flex-card.js
npm run preview   # local preview with a mock Home Assistant on :8765
```

## Credits

- Base card and animations: [troinine/ha-weather-forecast-card](https://github.com/troinine/ha-weather-forecast-card) v1.1.0 (MIT), vendored in `vendor/`.
- Radar: [RainViewer](https://www.rainviewer.com). Base map: Esri, HERE, Garmin, © OpenStreetMap contributors. Optional layers: [OpenWeatherMap](https://openweathermap.org).
- Charts: [Chart.js](https://www.chartjs.org). Map: [Leaflet](https://leafletjs.com).

## License

MIT — see [LICENSE](LICENSE).
