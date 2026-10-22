# Changelog

## v2026.10.22.28

- **Editor controls follow the design guide, everywhere:** on/off settings are checkboxes (not switches), choices are drop-downs (not radio lists), sizes and percentages are sliders with a bold value, and every color is the four-mode control (Not set / Theme color / Custom swatch / CSS). Sub-settings of a feature that's turned off are hidden (e.g. chart position while the chart is off, glow color while glow is off). Entity, device and icon pickers are unchanged.
- **Wind panel:** chart legend on/off; size sliders for the compass / built-in rose and for the Wind Rose Card; statistics alignment (left, center, right); corner info placement for speed, direction and gust (any corner or hidden) with label and value size and text color.

## v2026.10.22.27

- **Wind panel settings in groups** by what they change: View, Readings, Chart, Compass, Wind rose, and the Wind Rose Card's speed bars, corner info, statistics, buttons and advanced options, then Sensors.
- **Wind Rose Card statistics:** choose which values show (Min, Average, Max, Median, P90, Calm %) and their text size, weight and color.
- **Arrows, each on its own:** compass pointer size and color; the Wind Rose Card's direction arrow size and color; its speed-bar arrows on or off and their size. The Wind Rose Card draws the speed-bar arrows in the direction arrow's color, so they share it.
- Fix: the Wind panel's chart switch was labelled "Altitude chart".

## v2026.10.22.26

- **Wind panel layout options:** where the speed / gust / direction readings go (beside the dial, above, below or hidden; by default beside our dial and hidden with the Wind Rose Card), the chart above or below (above, it's a strip so the dial keeps its room), and switches for the Compass/Rose buttons and the rose's colour legend.
- **Wind Rose Card parts**, each "From the preset" by default or set on its own: speed bars (right, bottom, hidden), corner info (speed, direction, gust), min / average / max / P90 / calm % text (above or below the rose), buttons (period buttons, playback, none) and their position, the period shown first, Beaufort or speed-unit bars, the direction arrow, and whether the chart shows with it.

## v2026.10.22.25

- **Editor, Panels list:** a stack's panels are listed indented under the stack, so it's clear what each stack holds. Open them from there; the stack's own pencil opens only the stack's settings.
- **Putting panels into a stack** is done from the stack: under its panels, **Add new to stack** adds a new panel, and **Move into stack** moves an existing panel in (any panel except the hero or another stack). The stack button (≡) appears only on panels inside a stack, and moves the panel back out into the grid. The "Stack with the next panel" button, which created a new stack, is gone.

## v2026.10.22.24

- **New Chips panel** (`chips`): the hero's current-condition chips (feels like, humidity, dew point, wind, pressure, UV …) on their own, with all of Weather Flex's Current Weather Metrics options (which chips and their order, chips or plain rows, columns, sizes with Auto, colours).
- **New Clock panel** (`clock`): time and date that size themselves to fill the panel (with a scale %), or fixed sizes. Seconds, 12/24-hour or Home Assistant's setting, five date formats, alignment, weight and colours. It updates once a minute (or each second with seconds on) and doesn't redraw on Home Assistant state changes.
- **Removed the Weather Flex sections panel** (`flex`): every Weather Flex section now has its own panel (Hero, Chips, Hourly, Daily, Forecast, Sky Tracker). The old `map` alias for Radar is gone too.
- **Sky Tracker:** its embedded Weather Flex editor no longer shows the time-window, anchor and night-moon settings, which the panel's own options control (changing them there had no effect).
- Fix: a new hero panel no longer gets a Sky Tracker added under it automatically (that migration now only runs for configs from before Sky Tracker).

## v2026.10.22.23

- **Stacks fill the space of hidden panels.** A panel inside a stack that is toggled off, or hiding itself (e.g. Pollen out of season or all at None), leaves the stack, and the other panels grow into its space. In a vertical stack with a height, children now share that height by default. A stack whose panels are all hidden leaves the grid.
- **Panels inside stacks get panel buttons** (same default as on their own), so Pollen keeps its button inside a stack, and opens as a pop-up when it's hiding itself.
- **Stack with the next panel** (Panels list, ⊟ button): puts a panel and the one after it in a vertical stack in one click, with the wider width and both heights added up (two half-height panels make a one-row stack). **Move out of the stack** does the reverse.

## v2026.10.22.22

- **Wind panel uses the Wind Rose Card when it's installed.** If aukedejong's [Wind Rose Card](https://github.com/aukedejong/lovelace-windrose-card) is installed (HACS), the Wind panel's Rose view shows it in place of the built-in rose, with your station's direction, speed and gust sensors filled in from Weather Sources and the bars in your unit. Without it, the built-in rose stays. `rose_engine: builtin` keeps the built-in rose either way.
- **Wind Rose Card presets** (`windrose_preset`), based on its examples: Standard (24 h, speed bars at the side), Period buttons (1 h / 8 h / 1 day / 7 days), Beaufort (Beaufort bars with live speed arrows), Corner info (speed, direction and gust around the rose), Statistics (min / average / max / P90 / calm % under the rose), Playback (step or play through the last 10 days) and Minimal. Any of the card's own options can be added under `windrose:`.

## v2026.10.22.21

- **Hero: Set scale to Auto** (`auto_scale: true`, at the top of the Hero section). The temperature, condition text, icon, clock, date and metric chips are sized from the hero panel's width and height, over the sizes set in the sections editor, so they stay in proportion when the panel or screen changes size.
- **Hero: Auto scaling** (`scale`, 50–200 %, default 100) makes the auto sizes bigger or smaller.
- **Clock and date sizes can be Auto:** in Clock & Date, the time and date sizes are now sliders with Auto at 0 (like the header sizes). At Auto they follow the hero panel's size, even with Set scale to Auto off.

## v2026.10.22.20

- **Radar:** the loop time and a round play/pause button are now in the panel's header (with the overlay picker, if set), instead of a bar under the map, so the map gets the full height.
- Panels that open larger when tapped show the same small expand-arrows icon in the corner as the other panels, instead of an "Open" pill.

## v2026.10.22.19

- **Half-height panels:** panel height now goes in half steps (0.5, 1, 1.5 …), in the panel's Height slider and the layout map (drag or Shift+↑/↓). Two half-height panels stacked fill exactly one row, e.g. Pollen above Air quality next to a one-row panel.
- **Pollen:** new **Hide the panel when all are None** (`hide_when_none`, off by default). **Hide the panel out of season** is now off by default too (set `hide_when_off_season: true` for the old behaviour).
- **General is now Appearance**, in groups: Card, Background, Panels, Layout & behaviour.
- **Image background:** Background → Image, then upload a PNG/JPG/WEBP (or pick from your media) or give a URL. Fill / Fit / Tile and a Darken slider. Panels turn see-through over it, like the animated background.
- **Panel style** for all panels: corner radius, shadow (soft / medium / strong), border width and color, and a glow with its own color and size.

## v2026.10.21.18

- **Pollen:** "Nothing in the air today" was shown twice: in the header line and again as a note when every row was hidden. The note is gone; the header line says it once. New options: `show_nothing: false` hides that text, and `nothing_text` replaces it (e.g. "All clear").

## v2026.10.21.17

- **Pollen:** species with nothing in the air today (level None) are hidden (`hide_none`, on by default). When every in-season species is at None, the panel says "Nothing in the air today".
- **Source and town text** in the Pollen and Air quality headers: `show_source: false` / `show_location: false` hide them, and `source:` / `location:` replace the text (e.g. "Google" → "Google Pollen", AirNow's "Denver" → "Erie").

## v2026.10.21.16

- **Air quality: new default layout `scale`**, in the Pollen panel's style. A header line (source · area · category · time), the Air Quality Index with its main pollutant on a segmented EPA colour scale with a marker, then one row per pollutant: icon, name and value, its own colour scale with a marker, and its rating. PM2.5, PM10 and ozone use the six EPA categories (Good, Moderate, Sensitive groups, Unhealthy, Very unhealthy, Hazardous). Benzene, CO₂ and readings with your own `thresholds` use five bands (Low, Moderate, Elevated, High, Very high). Readings with no standard show just the value. `rows`, `bars` and `tiles` are still available.
- **Pollen:** out-of-season species are hidden (`hide_off_season`, on by default). When no species is in season the panel leaves the grid (`hide_when_off_season`, on by default); its panel button then opens it as a pop-up showing what's due next.
- **Panel background** for every panel (Layout → Panel background): Default, See-through (uses Panel opacity), Solid or None. A see-through Button Menu gets a tile behind its buttons.
- The **Heading** panel is now called **Button Menu**. The Add panel list shows Hero first, then the other types alphabetically.
- **Fix: Panel button.** Turning off a panel's button could leave the panel hidden for good: a remembered "off" from its old button still applied, and nothing could turn it back on. A panel without a button now always follows **Shown**. The option's help now explains what it does.

## v2026.10.21.15

- **Air quality panel layouts:** `layout: rows` gives one row per pollutant (icon, name, bar, category chip, value), and `layout: bars` gives vertical bars side by side with 50/100/150 guide lines. Both use the EPA AQI scale and colours (green Good, yellow Moderate, orange Unhealthy for sensitive groups, red Unhealthy, purple, maroon). `tiles` stays the default.
- **More readings:** `extra:` adds any sensor as a row or bar, e.g. Boulder AIR's benzene or ethane. Readings without an EPA AQI are coloured from other health standards: benzene from ATSDR minimal risk levels (chronic 3 ppb, acute 9 ppb), CO₂ from 1000 ppm comfort guidance and the 5000 ppm OSHA limit. Set your own with `thresholds: [moderate, elevated, high, very high]`. Readings with no standard show "No standard".
- The line under the AQI shows the source and main pollutant (from the sensor's `source` and `main_pollutant` attributes, e.g. the Boulder AIR package); `source:` overrides it.
- **Pollen panel** restyled like sygad's pop-up: one header line (source · town · today's main allergen, or "Out of season · hazel due in January"), divider lines between rows, filled level chips, and a "Season" strip of month bars with the letters underneath.

## v2026.10.21.14

- **Faster editing:** while the dashboard is in edit mode or the card is shown in the card editor's preview, the animated background is replaced by a still gradient, panel blur is off, the hero's own animation stops, and the Radar and Windy map panels show a placeholder instead of loading the live map. Everything returns when you finish editing. Graphs and the other panels stay live. In the preview mockup this cut the page's main-thread work from ~840 ms to ~220 ms per 5 seconds, not counting the Windy map, which no longer loads at all. Turn it off with **General → Pause animations and maps while editing** (`lite_editing: false`).
- Fix: a radar map re-attached after a dashboard view switch could lose its radar frames.

## v2026.10.21.13

- **Pollen panel** (`pollen`): reads the Pollen Levels integration (Google Pollen API — covers the US). Heading with source, town and today's main allergen; a status line ("Juniper medium today", "In season, but nothing in the air today", or which species is due next and when); one row per species with icon, a 0–100 bar, a level chip (None / Low / Medium / High / Off season), today's index and an arrow for tomorrow; and a 12-month season strip coloured by how many of the shown species are in season (green 1, amber 2, red 3+), current month outlined. Season months come from Google's season text, else typical months, and can be set per species. Options: location, species view or tree/grass/weed types, a species list and order, row count. Redraws only when one of its sensors changes.
- **Air quality panel** (`air_quality`): US AQI with its EPA category and a 0–300+ scale, the reporting area and time, and PM2.5, PM10, ozone and CO₂ rows coloured by their own EPA category. Uses the station's own air sensors first, then Home Assistant's AirNow integration, then any outdoor sensor with that device class.
- New metrics **AQI, PM2.5, PM10, Ozone, CO₂** for metric tiles and graphs, and an **Air quality** preset in Station graph (AQI on the left axis, PM2.5 on the right). They are listed under Weather station → Values used.

## v2026.10.20.12

- **Faster editor:** Home Assistant hands the editor new data on every state change; the editor re-rendered all of its open forms (entity pickers and the embedded Weather Flex editors) each time. It now re-renders for that only when the entity/device registry, theme or language changed, and refreshes live values every 15 s. An update to an open editor went from ~1–5 ms of our own work plus Home Assistant's form rebuilds to ~0.2 ms.
- **Fix: graph line colors.** In Temp & Humidity and UV & Solar, a color set in the Series list was ignored for lines whose preset has its own color (UV index, humidity). The Series color now always wins.
- Station graph: when the config changes twice quickly (e.g. a color), the graph can no longer end up built from the older one.

## v2026.10.20.11

- **Much faster:** every state change in Home Assistant re-rendered the card's panels, and each one re-scanned every entity in Home Assistant to find the station's sensors. The station's sensors are now indexed once per registry change. With ~3000 entities, an update went from ~66 ms to ~5 ms (default dashboard, measured headless). Bigger installs gain more.

## v2026.10.20.10

- **Weather station editor:** every editor section starts collapsed. Weather Sources rebuilt: each source is its own collapsible section with its priority number, type, integration and how many values it supplies; open one to see each value, its current reading, and a drop-down that shows **Default** (the sensor picked automatically) or another sensor — with a *Default* button to go back. Priority arrows, skip and remove on each source; *Add source* takes a device or an entity.
- **Values used** is collapsible and shows which integration each value comes from.
- **Graph panels** (Graph, Temp & Humidity, UV & Solar, Station graph): a *Series* list to change each line's **color** and **sensor** (drop-down shows *Default* while the station's own sensor is used), and **Reset to default** — on every panel, keeping its type, position and size.

## v2026.10.20.9

- **Works with all three Ecowitt integrations** — Home Assistant's Ecowitt, Ecowitt Local and the Ecowitt Official Integration — alone or together. See [docs/ECOWITT_INTEGRATIONS.md](docs/ECOWITT_INTEGRATIONS.md) for what each exposes.
- **Auto-mapping fixes** found by testing each integration's entity names: Ecowitt Local's gateway device no longer supplies indoor temperature/humidity as the outdoor value; its "UV Radiation" (µW/cm²) is no longer taken as the UV index; the Official integration's "Feel likes" is recognised; heat index and wind chill rank below a real feels-like; channel/probe sensors rank below the outdoor array; daily rain is found for piezo gauges ("Daily piezo rainfall").
- **Sibling devices:** with Ecowitt Local (one device per sensor plus the gateway), adding either device finds the other — e.g. pressure from the gateway.
- **Station health panel** (`health`): battery (%, V or low/OK), capacitor, signal, RSSI and online state of every station device, colour-coded, plus the age of the last reading. Combine sources to fill gaps — e.g. the core integration for readings and Ecowitt Local for battery and signal.
- New metrics for tiles and graphs: `battery`, `signal`, `rssi`. The Weather station editor lists them under "Values used" with today's rain.

## v2026.10.20.8

- **Astronomy panel** (`astronomy`), after Weather Underground's: sun and moon altitude over today with their current positions; a rise/set table for the sun, civil, nautical and astronomical twilight and the moon; length of day (with the change since yesterday), length of visible light, solar noon and the moon phase.
- **Wind map panel** (`wind_map`): Windy's animated map centred on home — wind, gusts, rain, temperature, clouds, pressure, radar or satellite layer; zoom, forecast model, altitude, units, location pin. Default: opens as a pop-up from its panel button; use `display: tile_popup` for a tile that opens larger.
- **Station graphs** (`statistics`): your station's sensors filled in through Weather Sources and drawn by [cataseven's Statistics Graph Chart Card](https://github.com/cataseven/Statistics-Graph-Chart-Card) when it is installed — or Home Assistant's built-in Statistics graph card otherwise (`engine: auto | sgcc | builtin`). Presets match crookster.org's dashboard: `temps` (temperature, feels like, dew point; 36 h), `wind` (average speed, gust max, direction on a 0–360° second axis), `pressure_humidity` (two axes), `solar_uv` (solar, UV max on a second axis), `rain` (rate as bars, today's total as an area on a second axis) and `temperature_range` (30 days, min–max band). `days_to_show`, and any card option under `card:` (e.g. `show_interval_picker: true`, or your own `entities:` list).

## v2026.10.20.7

- **Sky Tracker** (`sky_tracker`) replaces the Sky Bar, Sun and Sun & Moon panels: the sun arc drawn over the sky gradient (daylight and cloud cover) with the forecast row under it, and the moon on the arc at night — drawn in its current phase. Layers (`show_arc`, `show_sky`), one time window for both (`timeframe`, `hours`, `anchor`), `moon`, `moon_phase` and `show_facts` (sun times). Use two trackers with one layer each to show the arc and the sky separately. Default size 4×2.
- **Hero** no longer contains a Sky Bar — place a Sky Tracker anywhere instead.
- **Automatic migration:** `sky_bar` → tracker (sky only), `sun` → tracker (arc + sky, sun times on), `sun_moon` → tracker + `moon`; a Sky Bar panel and a Sun panel together become one tracker; a hero that showed its Sky Bar gets a tracker right after it with the same settings. The editor saves the new form.
- Fix: the forecast row under the arc (Sun Position with the Sky Bar as baseline) was missing because the hourly forecast wasn't subscribed.
- **Editor:** *Layout* (drag-and-drop map) and *Panels* (the list with settings) are separate sections, so editing a panel no longer re-renders the map; the list has no move arrows at the top level (use Layout; stacks keep theirs). New **Panel buttons** section: buttons above the panels, in the heading, or hidden, and a checkbox per panel with All / None. Embedded Weather Flex editors only show the parts that apply to the panel (e.g. Sun Position and Sky Bar for the tracker).

## v2026.10.19.6

- **Hero:** no longer shows the weather entity's name (e.g. "OpenWeatherMap") under the condition — the readings come from your station, so the label was misleading. Set a *Name* in the Hero editor (Weather Flex's name field) to show your own label.

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
