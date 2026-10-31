# Weather Station Flex Card

A complete weather-station dashboard in one Home Assistant Dashboard card. Your own station's live readings, forecasts, radar, wind, sky and sun, astronomy, air quality and pollen sit in a flexible panel grid over an animated weather background, as a normal card or a full-screen wall display.

* **Your station first** — readings come from your weather station (Ecowitt and others), with a forecast service filling the gaps
* **Twenty-plus panel types** in a drag-and-drop grid, with pop-ups, stacks and panel buttons
* **Everything in a visual editor** — YAML optional, never required

https://github.com/Ltek/weather-station-flex-card

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Ltek&repository=weather-station-flex-card&category=plugin)

Current build: **v2026.10.31.93** · full history in [CHANGELOG.md](CHANGELOG.md)

---

## Key features at a glance

- **Station-first readings** — every panel reads the same ordered list of **Weather Sources**: your station device first (its sensors are found automatically, outdoor before indoor), then a weather entity for the forecast and anything the station doesn't measure. One place to see and override which sensor feeds each value.
- **Current condition from your station** — optionally, your own rain rate, solar radiation, humidity, wind, temperature and lightning sensor decide whether it's sunny, partly cloudy, cloudy, raining, snowing, foggy, windy or stormy, instead of a forecast service's guess. The hero, the bulletin and the animated background all follow.
- **All three Ecowitt integrations** — Home Assistant's Ecowitt, Ecowitt Local and the Ecowitt Official integration, alone or combined (e.g. the core integration for readings plus Ecowitt Local for battery and signal). Diagnostics are gathered from every Ecowitt device. See [docs/ECOWITT_INTEGRATIONS.md](docs/ECOWITT_INTEGRATIONS.md).
- **A real panel grid** — a 12-column grid with half-row heights, drag-and-drop layout map, stacks that share space (and fill in when a panel hides itself), and automatic tablet and phone layouts.
- **Panel buttons** — show and hide panels from a button bar or a Button Menu panel, or open panels as pop-ups. Each browser remembers its own choices.
- **Full-screen wall display** — fills the screen and shares the height between panels, with a screen guide in the editor to design for a specific display.
- **Animated weather background** — rain, snow, lightning, drifting clouds, the sun by day and a starry sky with the moon in its current phase by night, with adjustable speeds. Or use your own background image.
- **Works with the best community cards** — uses the Statistics Graph Chart Card and the Wind Rose Card automatically when they're installed, filled in with your station's sensors, and falls back to built-in versions when they aren't.
- **Fast** — only redraws a panel when one of its own sensors changes (not for every state change in the house), loads the editor, the radar's map library and YAML import/export only when they're used, and pauses animations and maps while you edit.

---

## Panels

### Current conditions
- **Hero** — the current condition with its animated icon, temperature with today's high and low, metric chips (feels like, humidity, dew point, wind, pressure, UV…), and a clock. Sizes itself to the panel with **Auto scale**, and can show sun & moon facts along its top or bottom.
- **Current Weather Metrics** — the hero's metric chips on their own, in chips or rows, any order, with sizes and colors.
- **Bulletin** — a written summary of conditions, sun and moon times, plus an optional forecast-text or NWS Alerts sensor.
- **Metric tiles** — one reading each, with today's min and max, a 24-hour sparkline or hourly bars, UV level and pressure trend. Any station value, air quality, diagnostics or any sensor.
- **Clock** — a time and date that size themselves to fill the panel.

### Forecasts
- **Hourly**, **Daily**, and **Forecast** (both together) — charts or lists with condition icons, temperatures, precipitation and wind.
- **Day forecast** — a single day (today, tomorrow, …) at a glance.

### Sky, sun & moon
- **Sky Tracker** — the sun's arc across a sky gradient that shows daylight and cloud cover, with a forecast row underneath (temperatures, icons, wind, humidity, clouds, UV — each placed above, on or below the bar, in your order). At night the moon rides the arc in its current phase. **Step buttons** move it to later hours or the next days.
- **Astronomy** — the sun's and moon's paths through the day, rise and set times for the sun, the three twilights and the moon, day length and its change since yesterday, and visible light.
- **Moon** — phase, illumination, moonrise and moonset, next full and new moon.
- **Sun & moon facts** — dawn, sunrise, solar noon, sunset, dusk, day length, visible light, moonrise, moonset, moon phase with its image, illumination and the next full and new moon. Pick any of them for the Hero, Sky Tracker or Astronomy panel, place them above, below or in the header, and style labels and values.

### Wind
- **Wind** — a live compass or a wind rose, speed, gust and direction, and a 24-hour speed and gust chart. With the [Wind Rose Card](https://github.com/aukedejong/lovelace-windrose-card) installed the rose view uses it, with presets (period buttons, Beaufort, corner info, statistics, playback) and every part adjustable: coloured speed bars, corner readings, min / average / max line, arrows and buttons. It shrinks to fit its panel instead of stretching the row.
- **Wind map** — Windy's animated wind map (or gusts, rain, temperature, clouds, pressure, radar, satellite) centred on your home, at the surface or higher altitudes.

### Radar & maps
- **Radar** — an animated RainViewer radar loop with play / pause and the time in the header, over gray, street, topographic or satellite maps, with optional OpenWeatherMap layers.

### Graphs & history
- **Station graphs** — temperatures, wind, pressure & humidity, solar & UV, rain, air quality and a 30-day temperature range, drawn by the [Statistics Graph Chart Card](https://github.com/cataseven/Statistics-Graph-Chart-Card) when installed (mixed bars, lines and areas, second axis) or Home Assistant's own statistics graph.
- **Graph**, **Temp & Humidity**, **UV & Solar** — line, area and bar charts on two axes from 6 hours to a year, with min–max bands for long ranges, and your own series and colors.

### Air quality & pollen
- **Air quality** — the US AQI with its EPA category on a colour scale, and PM2.5, PM10, ozone and CO₂ rated by EPA standards; benzene and other readings rated by health guidelines. Scale, rows, vertical bars or tiles. Reads your station's own air sensors or Home Assistant's AirNow integration.
- **Pollen** — every species with its level, today's value and tomorrow's trend, the main allergen today, and a 12-month season strip, from the Pollen Levels integration (Google). Out-of-season species can hide, and so can the whole panel when there's nothing in the air.

### Records, rain & the garden
- **Weather records** — your station's warmest, coldest, strongest gust and wettest day, building up from Home Assistant's own history, plus decades of area records — records for today's date, this month and all-time — with a badge when today beats the record for its date. Area records come from a nearby CoAgMET / Northern Water station in Colorado (measured, via a small package) or, anywhere in the world, from Open-Meteo's history since 1940 (modelled, no setup).
- **Rain totals** — last hour, today, last 24 hours, this rain event, week, month and year (worked out from Home Assistant's history when the station has no sensor for them), the last day it rained, and this month and year against the area's normal.
- **Frost & the garden** — the coming nights' lows with frost marked, this season's first frost against the usual date, frost nights, growing degree days, soil temperature and moisture with what's ready to plant, and last week's rain against what the garden lost to the air.
- **Air dryness (VPD)** — how thirsty the air is, on a colour scale, with what it means for the garden this season and a plant that droops as the air dries.
- **Frost & heat watch** — heat danger, heat caution, frost now or frost tonight, from the station's readings and tonight's forecast low.
- **Lightning** — the latest strike's distance and time, strikes today and a "head indoors" warning when lightning is close (Ecowitt WH57); hidden when there's no sensor.

### Station & more
- **Station health** — battery (percent and voltage), capacitor, signal strength and quality, RSSI, online state and hardware ID for every station device, and how long ago the last reading came in.
- **Button Menu** — a heading with the station's online status and the panel buttons.
- **Stack** — keep panels side by side or one above the other; hidden panels leave the stack and the others fill their space.
- **Home Assistant card** — any other card, inside the grid.

---

## Appearance

- **Backgrounds** — the theme, the animated weather background, or your own image (upload or URL) with fit and darkening.
- **Panel style** — opacity and blur over a background, corner radius, shadow, border and glow, with per-panel overrides to turn any of them off.
- **Titles** — every panel's title and icon can be shown or hidden.
- **Theme color or your own color, everywhere** — every color option offers **Not set**, a **theme color** that follows your theme, a **custom** swatch, or any **CSS** color; backgrounds also offer **Transparent**.
- **Auto sizing** — the hero, clock and wind panels size themselves to their panel, and the editor shows what each Auto setting resolves to.

---

## The editor

- **Weather station** — your Weather Sources in priority order, and **Values used**: every value the card reads, the sensor it uses, its integration and live reading.
- **Appearance** — card title, background, panel style and layout.
- **Panel buttons** — where the buttons go, which panels get one, and whether each browser remembers them.
- **Layout** — a map of the grid: drag to move, drag edges to resize, keyboard arrows too, and a **screen guide** for a chosen display size.
- **Panels** — the panel list, with stacks and their panels indented underneath. Each panel opens its own settings, grouped and in the same style throughout.
- **Live preview** — run the animations and maps while editing when you want to see the real thing.
- **Import / Export** — copy the whole card's settings as YAML, or paste settings to restore or share a setup.
- **Unsaved changes** banner on the preview until you save.

Only what you change is saved, so the stored config stays short. Prefer YAML? Every option is listed in the **[configuration reference](docs/CONFIGURATION.md)**.

---

## Works with

| | Needed? | Adds |
|---|---|---|
| A **weather entity** (OpenWeatherMap, NWS, Met.no, Pirate Weather …) | Yes | Forecasts and the current condition |
| **Ecowitt**, **Ecowitt Local**, **Ecowitt Official** | Recommended | Your station's readings and diagnostics |
| [Statistics Graph Chart Card](https://github.com/cataseven/Statistics-Graph-Chart-Card) | Optional | Richer station graphs |
| [Wind Rose Card](https://github.com/aukedejong/lovelace-windrose-card) | Optional | The full-featured wind rose |
| [AirNow](https://www.home-assistant.io/integrations/airnow/) or an air-quality sensor | Optional | Air quality panel, AQI and ozone readings |
| [Pollen Levels](https://github.com/eXPerience83/pollenlevels) (Google Pollen API) | Optional | Pollen panel |
| The CoAgMET records package ([`extras/coagmet`](extras/coagmet)), Colorado | Optional | Measured area records, rain normals, frost dates and garden water use |
| An Ecowitt WH57 lightning sensor, WH51 soil sensor | Optional | Lightning panel, soil moisture |

Radar (RainViewer), the Windy map and Open-Meteo need no account.

---

## Installation

**Via HACS (recommended)** — click the badge at the top of this page, or add `Ltek/weather-station-flex-card` as a custom repository with category **Dashboard**, then install **Weather Station Flex Card (Ltek)** and hard-refresh.

**Manually:**

1. Create the folder `\config\www\community\weather-station-flex-card`.
2. Download [`dist/weather-station-flex-card.js`](https://github.com/Ltek/weather-station-flex-card) and place it in that folder.
3. Add it as a Dashboard resource:
   - **Settings → Dashboards → ⋮ → Resources → Add Resource**
   - URL: `/local/community/weather-station-flex-card/weather-station-flex-card.js` · Type: **JavaScript Module**
4. Clear your browser cache and hard-refresh.

Then add **Weather Station Flex Card** from the card picker (or start from the YAML in the [configuration reference](docs/CONFIGURATION.md)), choose your weather entity and station device under **Weather station**, and arrange the panels. For a wall display, put it in a **Panel** view and choose **Full screen** under Appearance.

---

## Works alongside Weather Flex Card

Both cards can be on the same dashboard; this card uses its own element names.

---

## Credits

- Base card and animations: [troinine/ha-weather-forecast-card](https://github.com/troinine/ha-weather-forecast-card) (MIT).
- Layout inspired by [Station Météo](https://github.com/RenaudSub/Station-Meteo) (no code or assets used).
- Radar: [RainViewer](https://www.rainviewer.com). Wind map: [Windy](https://www.windy.com). Base maps: Esri, HERE, Garmin, Maxar, © OpenStreetMap contributors. Optional layers: [OpenWeatherMap](https://openweathermap.org).
- Charts: [Chart.js](https://www.chartjs.org). Maps: [Leaflet](https://leafletjs.com). Sun and moon: [SunCalc](https://github.com/mourner/suncalc).

## License

MIT — see [LICENSE](LICENSE).
