# Changelog

## v2026.10.19.5

- **Sky Bar fixed:** its forecast temperatures, condition icons, extra metrics and cloud shading were missing whenever the Hourly and Daily sections were hidden (as in the hero), because the hourly forecast was never subscribed. It is now subscribed whenever the Sky Bar needs it. (Weather Flex Card has the same bug.)
- **Sky Bar panel** (`sky_bar`), and a hero option to turn its own Sky Bar off (`sky_bar: false`).
- **Separate panels:** `sun` (sun arc over the sky, plus dawn, sunrise, solar noon, sunset, dusk, daylight), `moon` (phase, illumination, rise/set, next full and new), `hourly` and `daily` forecasts. `sun_moon` and `forecast` remain as combined panels.
- **Tap to open:** any panel can sit in the grid as a live preview and open larger in a pop-up when tapped (`display: tile_popup`) — e.g. the radar.
- **Animated card background** (`background: animated`): the hero's weather animation (sky, sun/moon, clouds, rain, snow, lightning) fills the whole card behind every panel; panels become semi-transparent (`panel_opacity`, 0–1, default 0.55) with a blur behind them (`panel_blur`, default 6 px). The hero turns transparent instead of drawing its own.
- Default dashboard uses the new hourly, sun and moon panels.

## v2026.10.19.4

- **Drag-and-drop layout** in the editor (Panels → Layout): a map of the 12-column grid. Drag a panel to move it; drag its right edge, bottom edge or corner to change width and height. Arrow keys move the focused panel, Shift+arrows resize it. Only values that differ from the panel's defaults are saved.
- **Weather Sources in one place.** The Weather station section now holds the full Weather Sources list (add the station device and weather entity, set priority and per-value overrides) and shows which sensor is used for each value. The embedded Weather Flex editors (Hero, Forecast, Sun & Moon, Weather Flex sections) no longer repeat it. The editor section is renamed from "Hero & Weather Sources" to "Hero".

## v2026.10.19.3

- **UV & Solar graph** (`uv_solar`): UV index as a shaded area on the left axis and solar radiation on the right, with 24h / 7d / 30d ranges — like Temp & Humidity. In the default dashboard as a hidden panel with its own button.
- **Stack panel** (`stack`): puts panels side by side (`direction: horizontal`) or one above another (`vertical`), like Home Assistant's horizontal/vertical stack. Horizontal stacks only wrap when a child would get narrower than `min_width`. Children take `grow` (relative width). Edited as a nested panel list in the editor.
- **Weather station section** at the top of the editor: pick the station device and the forecast weather entity directly, with a table of the sensor used for each value.
- **Full screen fixed.** Panels no longer get squeezed below their content (the hero was being cut off); the grid scrolls inside the card, and the row height is solved so explicit-height panels share the screen (`fit_height`, on by default). On a narrow card full screen falls back to normal height instead of a scrolling box inside the page.
- **Layout size** setting (`layout_size`: auto / wide / medium / narrow) to force the desktop, tablet or phone layout.
- **Hero:** on narrow widths the clock now sits below the conditions, so condition, icon and temperature keep the top-left corner.
- Default dashboard: the forecast panel shows the hourly forecast (like Station Météo); a hidden *Daily forecast* panel was added.

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
