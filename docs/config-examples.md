## Examples

### A full dashboard

```yaml
type: custom:weather-station-flex-card
entity: weather.openweathermap
metric_sources:
  sources:
    - ref: device:<your gateway device id>
    - ref: weather.openweathermap
layout: fullscreen
background: animated
panel_opacity: 0.55
panels:
  - type: hero
    span: 8
    auto_scale: true
  - type: stack                 # Pollen over Air quality; when Pollen hides, Air quality fills the space
    direction: vertical
    span: 4
    rows: 1
    panels:
      - type: pollen
        hide_when_none: true
      - type: air_quality
  - type: sky_tracker
    span: 8
    show_steps: true
    show_facts: true
    facts: [sunrise, sunset, day_length, moon_phase]
    fact_position: header
  - type: wind
    span: 4
    rows: 2
    view: rose
  - type: daily
    span: 8
    rows: 0.5
  - type: temp_humidity
  - type: uv_solar
  - type: radar
    display: tile_popup
  - type: wind_map
    display: tile_popup
```

### Metric tiles side by side on every screen

```yaml
- type: stack
  direction: horizontal
  panels:
    - { type: metric, metric: rain_today }
    - { type: metric, metric: uv_index }
    - { type: uv_solar, grow: 2 }      # twice as wide
```

`metric:` is one of: temperature, apparent_temperature, dew_point, humidity, pressure, wind_speed, wind_gust_speed, uv_index, solar_radiation, illuminance, rain_rate, rain_today, rain_24h, rain_event, vpd, indoor_temperature, indoor_humidity, aqi, pm2_5, pm10, ozone, co2, battery, battery_voltage, capacitor, signal, signal_quality, rssi, online, hardware_id — or set `entity:` for any sensor.

### A custom graph

```yaml
- type: graph
  title: Pressure & wind
  series:
    - { metric: pressure }
    - { metric: wind_speed, axis: right, style: area }   # style: line | area | dashed | bar
  ranges: [24h, 7d, 30d]
```

### A map with OpenWeatherMap layers

```yaml
- type: radar
  radar: false                    # a plain map instead of the radar loop
  base_map: imagery
  zoom: 5
  owm_api_key: !secret owm_key
  owm_layers: [wind_new, clouds_new]
  owm_default: wind_new
  display: popup
  title: Wind map
```

### Hero settings from the Weather Flex sections

The embedded section editor saves its changes under `flex:` (the same settings as Weather Flex Card), e.g.:

```yaml
- type: hero
  flex:
    wfc:
      current:
        clock_font_size: 48
        secondary_info_attribute: uv_index
```

### Any Home Assistant card

```yaml
- type: card
  span: 6
  card:
    type: statistics-graph
    entities: [sensor.gw2000b_outdoor_temperature]
    period: month
```

### Air quality from your own sensors

```yaml
- type: air_quality
  layout: bars
  location: Erie
  entities:
    aqi: sensor.erie_aqi
    pm2_5: sensor.erie_pm2_5_24_hour
    ozone: sensor.erie_ozone_8_hour
  extra:
    - entity: sensor.erie_benzene
      label: Benzene
    - entity: sensor.erie_ethane
      label: Ethane
      thresholds: [2, 4, 8, 16]      # moderate, elevated, high, very high
```

### Weather records, rain and the garden

Area data comes from the CoAgMET package (Colorado, measured) when it's installed, else from Open-Meteo (anywhere, modelled). Both use Open-Meteo's daily names (`temperature_2m_max`, `temperature_2m_min`, `precipitation_sum`, `wind_gusts_10m_max`, `et0_fao_evapotranspiration`), so the panels read them the same way.

CoAgMET package: copy both files from `extras/coagmet/` (`coagmet_records.yaml` and `coagmet_records.py`) side by side into `/config/packages/`, then restart. It defaults to Longmont South (`lmt01`, Northern Water network, since 1994); change the station id in the YAML for another CoAgMET or Northern Water station.

```yaml
- type: records
  area_source: auto          # auto | coagmet | open_meteo | off
- type: rain
  show_rows: [rain_today, rain_24h, rain_event, rain_week, rain_month, rain_year, last_rain]
- type: garden
  outlook_source: forecast   # or open_meteo
- type: vpd
- type: frost_watch
  frost_low: 34              # frost tonight when the forecast low is at or below (your units)
- type: lightning            # hidden until a lightning sensor exists
```

### Full screen that fits exactly, maps folded at load

```yaml
layout: fullscreen
fit_strict: true             # every panel exactly its rows; tall content scrolls inside
layout_screen: 1280x800      # the editor's layout map shows this screen at load
panels:
  - type: radar
    collapsible: true
    collapsed: true          # starts folded to its title (and paused)
  - type: air_quality
    layout: tiles
    content_scale: 85        # everything inside smaller
    content_width: 70        # narrower tiles and gaps
    content_height: 60       # tighter rows
```

## Notes

- An OpenWeatherMap API key in the card's config can be read by anyone who can view the dashboard.
- Graph ranges of 7 days or more use long-term statistics, which Home Assistant keeps for sensors with a `state_class` (Ecowitt sensors have one).
- Panel button states are saved per browser (`remember: false` turns that off); `show: false` sets what's hidden when the dashboard loads.
- Configs from older builds keep working: the old `sky_bar`, `sun` and `sun_moon` panels become a Sky Tracker, and a top-level `hero:` block becomes the hero panel's `flex:`.
