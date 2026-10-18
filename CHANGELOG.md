# Changelog

## v2026.10.18.2

**Visual editor** and a **full dashboard layout**.

- **Visual editor.** General settings; *Hero & Weather Sources* embeds Weather Flex Card's complete editor; *Panels* lists every panel with reorder, show/hide, duplicate, delete and add, plus each panel's layout and options. Forecast, Sun & Moon and Weather Flex sections panels embed the Weather Flex editor for their sections. Only changed values are saved.
- **Dashboard grid.** Panels sit in a 12-column grid with per-panel width (`span`) and height (`rows`), with automatic tablet and phone layouts (`span_medium`, `span_narrow`, `rows_compact` to override).
- **Default dashboard** modeled on Station Météo's overview: hero, bulletin, "Local measurements" heading with station status and panel buttons, wind, six metric tiles, forecast and tomorrow.
- **New panels:** `hero` (now a panel, any size), `bulletin`, `heading`, `metric` tiles (today's min/max, sparkline, UV level, pressure trend), `graph` (any series, two axes, bars for rain, up to 365 days), `day` (any day's forecast), `flex` (any Weather Flex config) and `card` (any Home Assistant card).
- **Maps:** radar panels take a base map (gray, streets, topo, satellite imagery, OSM, custom URL); `radar: false` gives a plain map with OpenWeatherMap layers. Several map panels can be added.
- **Pop-ups:** any panel can open from its panel button instead of sitting in the grid (`display: popup`).
- Panel toggles are remembered per browser.
- Configs from v2026.10.18.1 keep working (the hero becomes a panel; top-level `hero:` becomes its `flex:`).

## v2026.10.18.1

First build.

- **Hero** built from Weather Flex Card's sections (header, metric chips, Sky Bar, clock) over the animated weather background. Uses Weather Flex's Weather Sources, so an Ecowitt gateway device is auto-mapped.
- **Panel bar** to switch panels on and off; panels can be expanded; tabs on narrow screens.
- **Temp & Humidity**: temperature, dew point and humidity in one chart; 24h history, 7d/30d statistics with a min–max band.
- **Wind**: compass or 24-hour wind rose, plus a speed/gust chart.
- **Radar**: RainViewer loop with play/pause; optional OpenWeatherMap layers.
- **Forecast** and **Sun & Moon** panels from Weather Flex's hourly, daily, sun arc and Sky Bar sections, plus moon phase.
- Can share a dashboard with Weather Flex Card (separate `wsfc-*` element names).
- YAML configuration only; no visual editor yet.
