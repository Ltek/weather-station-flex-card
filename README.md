# Weather Station Flex Card

The most flexible and comprehensive Weather card. Combine multiple sources and weather-stations and configure it any way you want... for large screens, small screens and everything in between. 

Use your station's live readings, forecasts, radar, wind, sky, air quality, pollen and the garden, in a flexible panel grid over any background, including multiple custom animated weather backgrounds.

The card auto detects multiple weather sources and supporting cards. Most card panel functions are built-in but it can also use some 3rd party cards.

See screenshots below for ideas. 

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Ltek&repository=weather-station-flex-card&category=plugin)

full history in [CHANGELOG.md](CHANGELOG.md)
---

## At a glance

| | |
|---|---|
| Panel types | **31** |
| Card-wide settings | **72** (data sources, background, appearance, alerts, screen fit, panel views) |
| Settings every panel has | **37** (size, position, view, title, style overrides) |
| Settings for particular panels | **334**, plus the hero's, forecasts' and Sky Tracker's own style sections |
| YAML needed | none (everything is in the visual editor) |

---

## Core features

- **Your station first.** Readings come from your weather station, with a forecast service filling the gaps. Sensors are found automatically, and the editor shows every source and what it supplies.
- **Current condition from your station.** Your own rain, solar, humidity, wind and lightning sensors can decide whether it's sunny, cloudy, raining, foggy, windy or stormy.
- **A free-placement grid.** 12 columns, quarter-row heights. Drag panels anywhere on the Layout Map, resize them, and stack them. There are separate tablet and phone layouts.
- **Full-screen wall display.** Fills the screen exactly and scales panels to fit, with a screen guide for designing for your display.
- **Panel views.** Show any panel full size, collapsible to its title, or as a compact row of tiles that opens when tapped, in place, over the others or as a pop-up. Tiles from several panels can be merged into one set.
- **Animated weather background.** Rain, snow, hail, fog, wind, storms with lightning, drifting clouds, the sun by day and stars with the moon by night. You can use your own image instead.
- **Alerts bar.** Shows heat, frost, nearby lightning and official weather alerts, and only while there's something to report.
- **Readable anywhere.** Card-wide text and icon sizes and title colours, text contrast for busy backgrounds, and per-panel overrides.
- **Light on tablets.** A panel only redraws when its own sensors change. Maps and animations pause while you edit, and there's a low-power animation mode.

---

## Panel types

| Group | Panels |
|---|---|
| Current conditions | Hero · Current Weather Metrics · Bulletin · Metric tile · Clock |
| Forecasts | Hourly · Daily · Forecast (both) · Day forecast |
| Sky, sun & moon | Sky Tracker · Astronomy · Moon |
| Wind & maps | Wind (compass or wind rose) · Windy Map (wind, rain, radar, temperature…) · RainViewer + OpenWeatherMap (radar & weather) |
| Graphs | Graph · Temp & Humidity · UV & Solar · Station graph |
| Air & garden | Air quality · Pollen · Air dryness (VPD) · Frost & the garden · Frost & heat watch |
| Records & rain | Weather records · Rain totals · Lightning |
| Station & layout | Station health · Button Menu · Stack · Home Assistant card |

---

## Data sources it works with

| Source | Needed? | Supplies |
|---|---|---|
| A **weather entity** (OpenWeatherMap, NWS, Met.no, Pirate Weather, AccuWeather …) | Yes | Forecasts and the current condition |
| **Ecowitt**, **Ecowitt Local** or **Ecowitt Official** (alone or together), or any station's sensors ([which Ecowitt integration?](docs/ECOWITT_INTEGRATIONS.md)) | Recommended | Your station's readings, lightning, soil and diagnostics |
| [AirNow](https://www.home-assistant.io/integrations/airnow/) or your own air sensors | Optional | Air quality, AQI, PM2.5, PM10, ozone, CO₂ |
| [Pollen Levels](https://github.com/eXPerience83/pollenlevels) (Google), or any pollen sensors you choose | Optional | Pollen |
| [NWS Alerts](https://github.com/finity69x2/nws_alerts) or another alerts sensor | Optional | Weather alerts in the Alerts bar |
| [Wind Rose Card](https://github.com/aukedejong/lovelace-windrose-card) | Optional | The full-featured wind rose |
| [Statistics Graph Chart Card](https://github.com/cataseven/Statistics-Graph-Chart-Card) | Optional | Richer station graphs |
| CoAgMET records package ([`extras/coagmet`](extras/coagmet)), Colorado | Optional | Measured area records, rain normals, frost dates |
| RainViewer, Windy, Open-Meteo, map tiles | Built in, no account | Radar, weather maps, climate history |
| OpenWeatherMap map layers | Optional, free API key | Cloud, rain, wind and temperature map layers |

---

## Installation

**HACS (recommended):** click the badge above, or add `Ltek/weather-station-flex-card` as a custom repository (category **Dashboard**). Install **Weather Station Flex Card (Ltek)**, then hard-refresh your browser.

Then add **Weather Station Flex Card** from the card picker, choose your weather entity and station under **Data Sources**, and arrange the panels. For a wall display, use a **Panel** view and **Full screen** layout.

It works alongside Weather Flex Card on the same dashboard. Every option is listed in the [configuration reference](docs/CONFIGURATION.md), and [docs/config-examples.md](docs/config-examples.md) has example setups.

---

## Screenshots & Examples

There are ,millions of possabilities all very easy to confiuge in the visual editor. Soever presets built-in so add your panels

<!-- SCREENSHOTS:START -->
<table>
  <tr>
    <td align="center" valign="top" width="50%">
      <a href="screenshots/00-live-wall-display.jpg"><img src="screenshots/00-live-wall-display.jpg" width="100%" alt="Live wall display"></a><br>
      <sub>Live wall display</sub>
    </td>
    <td align="center" valign="top" width="50%">
      <a href="screenshots/01-full-screen-wall-tablet.png"><img src="screenshots/01-full-screen-wall-tablet.png" width="100%" alt="Full screen wall tablet"></a><br>
      <sub>Full screen wall tablet</sub>
    </td>
  </tr>
  <tr>
    <td align="center" valign="top" width="50%">
      <a href="screenshots/02-full-screen-storm-with-lightning.png"><img src="screenshots/02-full-screen-storm-with-lightning.png" width="100%" alt="Full screen storm with lightning"></a><br>
      <sub>Full screen storm with lightning</sub>
    </td>
    <td align="center" valign="top" width="50%">
      <a href="screenshots/03-classic-dashboard.png"><img src="screenshots/03-classic-dashboard.png" width="100%" alt="Classic dashboard"></a><br>
      <sub>Classic dashboard</sub>
    </td>
  </tr>
  <tr>
    <td align="center" valign="top" width="50%">
      <a href="screenshots/04-compact-and-merged-tiles.png"><img src="screenshots/04-compact-and-merged-tiles.png" width="100%" alt="Compact and merged tiles"></a><br>
      <sub>Compact and merged tiles</sub>
    </td>
    <td align="center" valign="top" width="50%">
      <a href="screenshots/05-charts-rain-and-records.png"><img src="screenshots/05-charts-rain-and-records.png" width="100%" alt="Charts rain and records"></a><br>
      <sub>Charts rain and records</sub>
    </td>
  </tr>
  <tr>
    <td align="center" valign="top" width="50%">
      <a href="screenshots/06-sky-sun-and-moon-light-theme.png"><img src="screenshots/06-sky-sun-and-moon-light-theme.png" width="100%" alt="Sky sun and moon light theme"></a><br>
      <sub>Sky sun and moon light theme</sub>
    </td>
    <td align="center" valign="top" width="50%">
      <a href="screenshots/07-garden-air-quality-and-pollen.png"><img src="screenshots/07-garden-air-quality-and-pollen.png" width="100%" alt="Garden air quality and pollen"></a><br>
      <sub>Garden air quality and pollen</sub>
    </td>
  </tr>
  <tr>
    <td align="center" valign="top" width="50%">
      <a href="screenshots/08-wind-rose-compass-and-maps.png"><img src="screenshots/08-wind-rose-compass-and-maps.png" width="100%" alt="Wind rose compass and maps"></a><br>
      <sub>Wind rose compass and maps</sub>
    </td>
    <td align="center" valign="top" width="50%">
      <a href="screenshots/09-phone-layout.png"><img src="screenshots/09-phone-layout.png" width="100%" alt="Phone layout"></a><br>
      <sub>Phone layout</sub>
    </td>
  </tr>
  <tr>
    <td align="center" valign="top" width="50%">
      <a href="screenshots/10-editor-data-sources.png"><img src="screenshots/10-editor-data-sources.png" width="100%" alt="Editor data sources"></a><br>
      <sub>Editor data sources</sub>
    </td>
    <td align="center" valign="top" width="50%">
      <a href="screenshots/11-editor-layout-map.png"><img src="screenshots/11-editor-layout-map.png" width="100%" alt="Editor layout map"></a><br>
      <sub>Editor layout map</sub>
    </td>
  </tr>
</table>
<!-- SCREENSHOTS:END -->
