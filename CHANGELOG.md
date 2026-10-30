# Changelog

## v2026.10.30.85

- **Wind wisps stay where they are.** Each fades in at its own spot, drifts 60–150 px with the wind (under an eighth of the screen) and fades out. About half rise or sink by a few pixels, slowly; the rest stay level. Nothing crosses the screen or bounces.
- **Lightning lights the clouds.** In storms, six glows along the cloud deck flicker at random places and strengths, each on its own irregular cycle, with an occasional faint flash over the whole card. The old single white flash is gone (it was nearly invisible behind the panels).
- New sliders in Background → Animation: **Time between strikes** (2–90 s, default 12) and **Lightning intensity** (10–200 %). The Lightning speed slider is removed (`anim_lightning` is ignored).

## v2026.10.30.84

- **Background has its own settings section** in the editor (between Weather station and Appearance), with the preview button in its title bar and three groups: Background, Animation and Image. Appearance keeps Card and Panels.
- **Fog density** and **Wind density** sliders (30–200 %): how many mist banks and how much they hide; how many wisps of air blow across.
- **Softer rain splashes.** Where a drop lands, a soft ring spreads and fades and two droplets are thrown up, instead of the dotted arc. Hail uses the same splash.
- **Wind wisps no longer move in straight lines.** Each follows one of two wave paths, rising, falling and tilting, with a slow start, a surge through the middle and an easing tail.

## v2026.10.30.83

- **Fog and wind no longer jump or restart.** Their mist banks and gusts were picked again on every state update, and their speed changed with each small wind reading, so they jumped to new places. They now stay put. Speeds change only between three wind steps (calm, breezy, strong), and drifting layers keep their place when the wind speed or direction changes. This also applies to clouds and hail.
- **Softer, more natural wind.** The thin lines are replaced by blurred wisps of air at three depths, frayed like the cloud edges. Far wisps are fainter and slower, near ones longer and faster, and they rise and fall gently as they drift.

## v2026.10.30.82

- **Background preview in the editor.** Appearance → Background has a magnifying-glass button (shown with the animated background). It opens a live preview of the card's background on demand. Pick any of the 15 weather conditions, or Now, and Day or Night. The preview uses your effects, speeds and low-power setting. Tap the button again to close it.

## v2026.10.30.81

- **Animated background for every weather condition**, drawn in the same style as the existing sky, clouds, rain and snow:
  - **Fog**: an overcast sky with mist banks at three depths, drifting with the wind.
  - **Hail**: a dark storm sky and grey clouds, with hailstones that fall at the wind's angle and bounce when they land.
  - **Windy**: sky with the sun or moon, and gusts streaking across in the wind's direction, faster in stronger wind. **Windy with clouds** adds drifting clouds.
  - **Exceptional**: an overcast sky with a slow amber glow.
  - Rain, pouring, snow, sleet and storms now have an overcast sky and grey cloud deck behind them (darker for storms and pouring rain) instead of a bare background.
- Animation effects has four new choices: Fog, Hail, Wind gusts and Unusual weather glow. New speed sliders: Fog drift, Hail and Wind gusts. Low-power animation also simplifies the fog edges.

## v2026.10.29.80

- **Compact rows in a vertical stack grow to fill it.** The rows share the stack's height and their tiles get larger until the widest row runs out of room, all rows at the same size, so the data is easier to read from across the room. Stack options → Spare height has a new default, **Grow compact rows to fill it**. The other choices (spread, centre, top) keep the normal size. **Largest compact size** (100–400 %, default 250 %) sets a limit.

## v2026.10.29.79

- **Vertical stacks spread their panels over spare height** (e.g. compact rows of tiles in a tall stack) instead of leaving it all at the bottom. Stack options → **Spare height**: Spread the panels out evenly (default), Centre them, or Keep them at the top.

## v2026.10.29.78

- **Full-size icon defaults to `mdi:arrow-expand` again** (fullscreen and arrow-expand-all are the alternatives).
- **Custom open icons:** both icon drop-downs (Layout & Behavior → Collapsed panels) end with **Custom icon…**, which shows Home Assistant's icon picker for any icon. In YAML, `open_icon_small` / `open_icon_full` also take an icon directly, e.g. `mdi:weather-windy`.

## v2026.10.29.77

- **Opening a folded panel starts its animation:** a folded Radar or Windy map with Start paused plays (the whole radar loop / the live map) when you open it — over the others, in place or as a pop-up.
- **Open icons:** a folded panel that opens over the others shows a small pop-over icon (default `mdi:picture-in-picture-top-right`; or open-in-new, resize, image-size-select-large, dock-window); expanding to full size, tap-to-open tiles and panels opening as a pop-up show the full-size icon (default `mdi:fullscreen`; or arrow-expand-all). Panels that open in place keep the chevron. Layout & Behavior → Collapsed panels → Small pop-over icon / Full-size icon.
- **"Tap title to show" is off by default** (the open icon already says it); turn it on in Layout & Behavior or per panel.
- A folded Windy map no longer shows its stop button.

## v2026.10.29.76

**Faster on tablets**
- **Smaller card file:** Leaflet (radar) and js-yaml (Import / Export) are now separate files next to the card (`dist/wsfc-leaflet.js`, `dist/wsfc-yaml.js`), loaded only when a radar panel or the Import / Export dialog is used. The card file is 980 KB (was 1.17 MB); a dashboard without a radar loads about 190 KB less. If one is missing, only its feature reports it.
- **Fewer redraws:** Wind, Rain totals, Lightning, Air dryness, Frost & heat watch, Weather records and Frost & the garden now skip Home Assistant updates for other entities (Air quality, Pollen and the clock already did).
- **Auto-fit** re-measures only when a panel's content changes size (at most once a second), not after every state update.

**Settings**
- **Find a setting:** a search box at the top of the editor lists every matching setting with where it lives; pick one to open its section and highlight it.
- **Only changed:** shows only the settings you've changed from their defaults; sections holding changes get a dot.
- **Card default — X:** "Card default" choices in a panel say what the card's setting currently is (View when collapsed, Opens, title tap, hint, info, When the content doesn't fit).
- **Presets** for Air quality, Pollen, Rain totals, Frost & the garden, Weather records, Lightning, Wind, Radar, Wind map, Frost & heat watch and Air dryness (e.g. "Tablet compact", "Tiles row", "Full detail").
- **Folded panels keep their colours:** a folded title uses the same icon and text colours as an open one unless you set folded colours (they were dimmed).
- **Compact view shows the icon and the title** by default; each can be turned off (Show the icon / Show the title in the tiles row).

**Features**
- **Phone layout:** Layout Map → Layout for → Phone layout: its own order, widths, heights and hidden panels for narrow screens (under 720 px), created from the main layout with one tap.
- **Alerts bar** (Layout & Behavior → Alerts bar): a row at the top that appears only while something needs attention — heat or frost, lightning within 10 miles in the last 30 minutes, weather alerts from an alerts sensor; tap one to open its panel.
- **This device** button in the Screen guide: sets it to the browser window you're using (press it on the tablet).

**Fixes**
- Rain totals' row list was stored as `rows`, the same name as the panel's height; it is now `show_rows` (existing configs are converted).
- Two editor labels clashed (Wind's and Astronomy's chart checkbox; the sparkline's and Sky Tracker's hours).

## v2026.10.29.75

- **Wind: chart as a pop-over.** Wind options → Chart → **Show the chart: As a pop-over**: the panel shows just the compass or rose, and a chart button in its header opens the 24 h speed and gust chart over the panel (tap outside, the button or Esc closes it). **Pop-over height** slider (default 220 px).

## v2026.10.28.74

- **A folded panel can open over the others.** Layout & Behavior → Collapsed panels → **A folded panel opens**: Automatic (over the other panels in full screen or Auto-fit, else in place), In place, **Over the other panels** (anchored to the panel's own place and width, growing down — or up near the bottom of the screen; tap outside, the ✕ or Esc to close; nothing else moves) or As a pop-up. Each panel can override it (Collapse → Opens), stacked panels too.
- **Compact view as a panel setting again** (Size and Scaling → Compact view), for panels in the grid and in stacks; Air quality also has a **Compact** layout. The panel shows its row of tiles and opens (as set above) when tapped.
- **Tiles view for more panels:** Daily / Hourly / Forecast (the next days or hours), Tomorrow, Current-conditions summary, Sky Tracker, Astronomy and Moon (sunrise, sunset, daylight, moon), Station health (battery, signal, online) — besides Air quality, Pollen, Rain, Lightning, VPD, Frost watch, Wind, Temp & Humidity, UV & Solar, Records and the garden.
- **Settings sections start closed, and only one opens at a time** in each panel (also the sub-panels inside, e.g. Wind's groups).
- `compact: true` is kept as the Compact view setting (v2026.10.28.71 turned it into Collapse settings).

## v2026.10.28.73

- **Panels inside a stack can fold**, including the Compact (tiles) view: each stacked panel has its own Collapse section (Collapse button, Start collapsed, View when collapsed, title tap, hint, info, colours), so a stack can hold several compact rows. Folded stacked panels take only their own height; the others fill the rest. Remembered per browser like the others; Convert all now covers them.
- Compact view with "Tap the tiles to open the full panel" off now has a fold button to open the panel (in the grid and in stacks); with it on, tapping the tiles opens it and no button covers the tiles.

## v2026.10.28.72

- **Fix: one Size and Scaling section per panel.** Panels inside a stack (e.g. Air quality, Pollen) showed it twice; settings of the same section are now always together.
- **Stacked panels:** Grow is now **Share of the stack**, a slider (0–6) with what it does: in a side-by-side stack, its share of the width (2 = twice as wide as a 1); in a stack one above the other, its share of the leftover height (0 = only as tall as its content). Min width is now **Narrowest width**, a slider.
- **Layout & Behavior** and **Layout Map** are separate top-level settings areas.

## v2026.10.28.71

- **New top-level settings area: Layout & Behavior** — Screen fit & sizing (layout, fit, Auto-fit, strict fit, overflow, layout size, row height, gap; moved from Appearance), **Collapsed panels** (moved from Appearance) and the layout map (was the Layout area).
- **Default view when collapsed: Minimal or Compact.** Minimal is the folded title with its line of info; Compact is the row of tiles with all the data. Compact is now a way of collapsing: a collapsed panel shows its tiles, tapping them opens the full panel and the fold button goes back — so Start collapsed, remembering and title tap work for it too. Each panel's Collapse section has **View when collapsed** (card default / Minimal / Compact); panels without a tiles view always use Minimal.
- **Convert all now** (Layout & Behavior → Collapsed panels): clears every panel's own View when collapsed, so they all follow the default.
- Panels saved with v2026.10.28.70's `compact: true` become collapsible, start collapsed and use the Compact view.

## v2026.10.28.70

- **Compact view** (new section in each panel's settings): the panel as a single row of small tiles with all its data — e.g. Air quality "AQI 56 Moderate · PM2.5 12.1 · PM10 21 · Ozone 0.041 · CO₂ 431". For Air quality, Pollen, Rain totals, Lightning, Air dryness, Frost & heat watch, Wind, Temperature & Humidity, UV & Solar, Weather records and Frost & the garden. **Tap to open the full panel** (on by default; its ⇕ button goes back; off: a tile opens its sensor) and **Show the title in the row**. Scale all Panel Contents applies; a compact panel doesn't also fold.

## v2026.10.28.69

- **Auto-fit to the screen** (Appearance → Layout, one switch for the card): the layout and sizes you set are the design for the Screen guide's size (e.g. 2000×1200). Every screen shows that design scaled to fit — rows share the screen height and every panel keeps its height, the layout stays as designed until the screen is phone-narrow, and each panel's contents scale with the screen (actual / design size), smaller where they'd still overflow. **Smallest content scale** (default 60 %; below it a panel scrolls) and **Largest content scale** (default 150 %). The hero, wind and maps keep sizing themselves; Scale all Panel Contents still applies on top.
- Full screen fit: the row height is now solved exactly (it was a little off with folded panels), so the page ends at the screen edge.

## v2026.10.27.68

- **Panel settings regrouped.** *Layout* is now **Size and Scaling**: Location (was Display), Width, Height, When the content doesn't fit, **Scale all Panel Contents** (was Content size) and, for Air quality and Pollen, Horizontal / Vertical spacing. The title, title icon and **Panel button** (was "Add a button…") moved to **Default Overrides**, with the background, shadow, border and glow. Stacked panels follow the same split.
- **Scroll needs a row:** picking Scroll for a panel raises its height to 1 when it was lower. The card-wide Scroll setting locks only panels at least one row tall (Strict fit still locks every panel with a height).

## v2026.10.27.67

- **Scroll when the content doesn't fit**, in any layout: Layout → **When a panel's content doesn't fit** — Grow (the panel gets taller, as before) or Scroll (every panel keeps its set height, with a scroll bar inside). Each panel can override it (Layout → When the content doesn't fit). Needs a set height (Height above 0). Strict fit still does this for every panel in full screen.

## v2026.10.27.66

- **Info in a folded panel's header** — e.g. "7 strikes today · latest 6 mi", "today 0.02 in", "AQI 56 · Moderate", "Freeze likely tonight", "record today 82° (1999)", "tonight 33°"; every panel has a summary. Per panel: the panel's summary, an entity's value (with an optional label) or none; card default in Appearance → Collapsible panels.
- **Lightning: Hide the panel when there are no strikes** (strike count 0).
- **Hero: Fit to the panel** (with Set scale to Auto and a set height; on by default): everything scales so the hero fills its panel — no empty space under it when a taller panel sits beside it, and a 0.5-row hero shrinks (padding too) instead of making the row taller.

## v2026.10.26.65

- **Fix: every panel with a title can fold.** "Tap to open larger" panels (e.g. a Radar tile) had no collapse button and couldn't fold; Wind folded to an empty strip. While folded, a tap-to-open panel unfolds instead of opening its pop-up.
- **Tap the title to fold / unfold** (on by default), with a **hint under the title while folded** ("Tap title to show", your own text, or off). The fold button is bigger (36 px target) and takes the title's icon colour.
- **Title colours, folded and unfolded:** collapsed icon / title (default: the theme's disabled colours) and expanded icon / title (default: the theme's state icon colour; title in the theme's text colour). Card-wide defaults in Appearance → Collapsible panels; each panel can override them.
- **Panel settings in flat expandable sections** (design system): Layout, Collapse, Default Overrides and the panel's own options each open on their own, with an accent border when open; the panel's options are open by default.
- **Lightning: Sensor battery** can be hidden.
- Color pickers offer the theme's Disabled and State icon colours.

## v2026.10.26.64

- **Open-Meteo names everywhere.** The CoAgMET package now writes Open-Meteo's daily variable names (`temperature_2m_max`, `temperature_2m_min`, `precipitation_sum`, `wind_gusts_10m_max`, `et0_fao_evapotranspiration`) with a `daily_units` map, in blocks `records`, `records_today`, `records_month`, `frost`, `growing_degree_days`, `precipitation` and `evapotranspiration`. The card works these out the same way from Open-Meteo, so either source reads alike (a test checks both give identical results). **Re-copy both package files** if you installed the earlier version.
- **Weather records: Open-Meteo fallback.** Area records from the CoAgMET sensor when it's there, else Open-Meteo's history for your location since 1940 (modelled; labelled as such). New option **Area records from**: automatic, CoAgMET, Open-Meteo or none.
- **New panel: Rain totals** — raining now, last hour, today, last 24 hours, this rain event, week, month, year (from Home Assistant's history when there's no sensor) and the last day it rained, with this month and year to date against the area's normal.
- **New panel: Frost & the garden** — the next nights' lows with frost marked (weather forecast or Open-Meteo), this season's first frost against the usual date, frost nights, growing degree days (86/50), soil temperature and moisture with what's ready to sow (soil sensors, the Soil Temperature integration, or Open-Meteo), and last week's rain against evapotranspiration.
- **New panel: Air dryness (VPD)** — the station's VPD sensor or worked out from temperature and humidity, on a colour scale, with seasonal garden advice and a plant that droops.
- **New panel: Frost & heat watch** — heat danger / heat caution / frost now / frost tonight / calm from the live readings and tonight's lowest hourly forecast; thresholds adjustable.
- **New panel: Lightning** — latest strike distance and time, strikes today, sensor battery, and a "head indoors" warning within 10 miles in the last 30 minutes; hidden without a sensor.
- New metrics found on their own: rain last hour / week / month / year, lightning distance / strikes / last strike, soil moisture and soil temperature.

## v2026.10.26.63

- **Strict fit to screen dimensions** (Layout, full screen with Fit on): every panel is exactly the height you set, so the page fits the screen as the layout map shows; content taller than its panel scrolls inside the panel. Off (the default) keeps today's behaviour, where panels grow to fit their content.
- **The layout map shows the real screen.** With a Screen guide set, a hidden, paused copy of the card is laid out at that screen size, and an "On the screen at load" view shows where every panel actually lands, the screen edge, and which panels are partly or fully off screen. Panels whose content makes them taller than their rows are marked in the map (e.g. 8×0.5 → 3.5).
- **Collapse to the title header** (any panel with a header): a Collapse button in the panel's header folds it down to its title, and Start collapsed folds it at load. A folded map is paused, so it doesn't load or animate. With Remember Panel Button States on, the browser remembers what you folded.
- **Content size** for every panel (40–200 %): everything inside bigger or smaller, so it fits its space.
- **Air quality and Pollen: Horizontal spacing and Vertical spacing** sliders (tile widths, columns and gaps; row height and padding). Air quality tiles are now as wide as what's in them (no empty space on the right), with **Stretch tiles to fill the width** to go back; less space between the AQI number and its rating.

## v2026.10.26.62

- **New panel: Weather records.** Your station's warmest, coldest, strongest gust and wettest day from Home Assistant's long-term statistics (grows as history builds up), plus area records from a nearby CoAgMET / Northern Water station: records for today's date, this month and all-time, with a badge when today beats the record for its date, and the station's distance and direction from home.
- **CoAgMET records package** in `extras/coagmet` (Colorado State University, free, no key): a command-line sensor that downloads a station's daily history once a day, drops impossible readings and stores the records summary (also this season's first frost, frost nights, the typical first-frost date and growing degree days, for the coming Frost & garden panel). Defaults to Longmont South (lmt01, since 1994).

## v2026.10.24.61

- **Low-power animation** (Appearance → Background), for tablets and other low-powered screens: no panel blur while the background animates (the panels no longer re-blur the moving clouds every frame), each cloud drawn once on its own layer, and simpler cloud edges (no turbulence filter). Smoother drift; clouds look a little softer.
- **Fix: clouds no longer jump when their drift speed changes.** The drift follows the forecast wind; a new speed used to snap the clouds to a different position. They now carry on from where they are at the new speed.

## v2026.10.24.60

- **Maps: Start paused** (new option on Radar / map and Wind map), for low-powered tablets.
  - **Radar:** shows only the latest radar image, paused; the rest of the loop is loaded the first time you press play.
  - **Wind map (Windy):** Windy can't show a still image, so the map isn't loaded at all until you press the play button on the panel; a stop button in its header unloads it again.

## v2026.10.24.59

- **Fix: star twinkle (and the other animations) run at a steady speed.** Every weather update picked new random stars, which restarted each twinkle part-way and made it look slow, then fast, then slow. Stars, rain, snow and sun rays now stay put until something really changes (the condition, rain amount or panel size).
- **Animation speed sliders are now 10–150 %** (were 25–300 %). Saved values outside the range are clamped.

## v2026.10.23.58

- **Fix: on small screens the wind rose / compass no longer overlaps the chart.** With Fit to the panel on, the rose was squeezed to the space left but drew at full size over the chart; it now keeps its real height and is narrowed until the rose, readings and chart all fit.

## v2026.10.23.57

- **Fix: Temperature sub-header size and scale now resize the text.** Only its wrapper was sized before; the high / low text kept a fixed 14 px.
- **Hero: Time & date alignment** — Left, Center (default) or Right, in the sections editor (Clock & Date → Date) when the date is placed with the clock.

## v2026.10.23.56

- **Hero: size for the line under the temperature** (e.g. today's high / low). With Set scale to Auto off: **Temperature sub-header size** in the sections editor (Current Weather Header → Header sizes). With Auto on: a **Temperature sub-header** scale slider (30–300 %).
- **Hero: Main temperature** drop-down — **Feels like** shows the feels-like temperature in place of the temperature (falls back to the temperature when there's no feels-like value).
- **Wind: arrow sizes always follow their sliders.** The Wind Rose Card direction arrow and speed-bar arrows are always given the slider's value (or its default), so a preset or the Wind Rose Card's own defaults can't change them. Max sizes doubled: Wind Rose Card arrows up to 240, compass pointer up to 400 %.

## v2026.10.23.55

- **Fix: the Wind Rose Card no longer goes blank when you change a setting.** The wind panel keeps its place on screen; the rose with the new settings loads its history in the background and replaces the old one once it's drawn.
- **Wind settings are easier to read.** View stays open at the top; Readings, Chart, Compass, Wind rose, each Wind Rose Card group (speed bars, corner info, statistics, buttons, advanced) and Sensors are now collapsible sub-panels with icons, closed until you open them.

## v2026.10.23.54

- **Hero: a size for every text item, with or without Auto.** With **Set scale to Auto** off, each item keeps its own pixel size in the sections editor (temperature, condition text, icon in Current Weather Header; time and date in Clock & Date; chips in Current Weather Metrics). With it on, those pixel sliders are replaced by scale sliders in the hero's own options — **Overall scale**, then **Temperature**, **Condition text**, **Condition icon**, **Clock time**, **Date** and **Metric chips** (30–300 %, 100 % = the auto size) — so each item can still be made bigger or smaller on its own.

## v2026.10.23.53

- **Fix: hero clock and date sizes.** A size equal to the hero's old built-in default (time 40 px, date 14 px) wasn't saved, so the wide or narrow hero presets (date 18 / 12 px) showed instead and the slider seemed to do nothing. The hero's clock and date now default to **Auto** (sized from the panel), so any size you set is kept.
- **Hero: Set scale to Auto** now hides the size sliders it overrides (header, clock, date, chips) in the sections editor, instead of leaving sliders that have no effect.
- **Clock panel:** new **Date size** (% of the time's size) while Auto size is on; the fixed Time size and Date size sliders show only with Auto size off.

## v2026.10.23.52

- **New configuration reference** ([docs/CONFIGURATION.md](docs/CONFIGURATION.md)): every card and panel option with its values, default and what it does, plus example YAML. It's generated from the editor's own settings (`npm run docs:config`), so it always matches the editor. The README now covers features only.

## v2026.10.23.51

- **Forecast Weather Metrics (Sky Bar) list in on-screen order:** the list was in the stored "outer → inner" order, so for metrics below the bar it read upside down (the one nearest the bar was last). It's now listed top to bottom as the metrics appear: above the bar, on the bar, below the bar from the bar down, then hidden ones. The ↑ ↓ arrows move a metric up or down on screen among the metrics in the same place; change a metric's place with its drop-down. Saved configs are unchanged.

## v2026.10.23.50

- **Sun & moon facts: Position** — Sky Tracker: below the sky, above the arc, or **in the header beside the step buttons**; Hero: along the bottom or the top; Astronomy: below or above. **Spacing**: spread across the width, or packed together, with a **Gap between facts** slider.
- **Import / Export** buttons at the top of the editor: Export shows the whole card's settings as YAML (copy or download a file); Import takes pasted YAML or JSON and replaces the settings in the editor (press Save to keep them). Bad input shows an error instead of changing anything.
- The editor header no longer shows the internal "Weather Flex sections" build.

## v2026.10.23.49

- **Editing is always paused, with a Live preview checkbox:** the animated background, panel blur and the Radar and Windy maps now always pause while you edit. A **Live preview** checkbox at the top of the editor runs them when you want to check the real look. It isn't saved and resets each time the editor closes. Removed the **Pause animations and maps while editing** setting (`lite_editing`) from Appearance.

## v2026.10.23.48

- **Sky Tracker: step buttons** (**Step buttons**, off by default): ◀ Now ▶ in the panel's header move the Sky Bar and sun arc to later hours or days, with a label like "Tomorrow 2 AM onward". Options: **Step** (6 h, 12 h, 1 day), **How far ahead** (12–168 h, default 48 — hourly forecasts usually reach 48 h; beyond that the bar shows daylight only) and **Back to now after** (default 60 s, 0 = stay).
- **Wind Rose Card: coloured speed bars.** **Full colour scale** shows every speed range in its own colour (blue → green → yellow → red), and **Range step**, **Speed bar max** and **Gust bar max** set how many bands there are in your unit (e.g. 5 mph steps to 40 mph). Beaufort bars are labelled "Beaufort" again instead of the speed unit.

## v2026.10.23.47

- **"Remember toggles" is now "Remember Panel Button States"** and lives in the **Panel buttons** section (it was under Appearance). Same behaviour: each browser keeps which panels were shown or hidden with the panel buttons across refreshes.

## v2026.10.23.46

- **Fix: the animation speed sliders weren't in the editor** (v2026.10.23.45 added them to the card but not to Appearance → Background). They're there now: Star twinkle, Cloud drift, Rain, Snow, Sun rays, Lightning.
- **Panel buttons** lists every panel, including those inside stacks (indented under them); All / None include them too.
- Removed the **Panel buttons** checkbox from Appearance — the Panel buttons section's placement (Above the panels / In the Button Menu panel / Hidden) does the same.

## v2026.10.23.45

- **Animation speeds** (Appearance → Background): separate sliders for **Star twinkle**, **Cloud drift**, **Rain**, **Snow**, **Sun rays** and **Lightning**, 25–300 % (100 % = normal, 50 % = half as fast). They apply to the card's animated background and to the hero's own animation.

## v2026.10.23.44

- **Fix: animated background stayed in daytime.** The weather animation only switches to its night sky (dark, stars, the moon instead of the sun) when it's told the sun times, and it wasn't — so a partly cloudy evening still showed blue sky and the sun. The card background and the hero's own animation now follow sunset and sunrise at your Home Assistant location.
- **Animated background settings in Appearance → Background:** **Animation effects** (rain, snow, lightning, sky, moon, sun, clouds) and **Show moon phase**, shown when Background is Animated weather. Image settings show only for an image background.
- **Hero:** its own animation settings (condition effects, moon phase under Card Appearance) are available only when the card has no animated or image background; otherwise it points to Appearance.

## v2026.10.23.43

- **Station diagnostics from every Ecowitt device**, everywhere they're used (Weather station → Values used, the Station health panel, metric tiles): battery, signal and RSSI were only looked for on the Weather Sources devices, so with the core integration as the source they missed Ecowitt Local's per-sensor devices (WS90 battery showed the core's WH65 on/off sensor; signal and RSSI weren't found). They now search all devices from the Ecowitt, Ecowitt Local and Ecowitt Official integrations, preferring a reading (e.g. 100 %) over an on/off sensor.
- **More diagnostics:** Battery voltage, Capacitor voltage, Signal quality (separate from Signal strength), Station online and Hardware ID — in Values used, as metric tiles and in Station health.
- **Station health:** "Connected" (Ecowitt Local's text state) now counts as online instead of offline; new options **All Ecowitt devices** (on by default), **Hardware IDs** and **More devices**.

## v2026.10.23.42

- **Weather Flex metrics look in air-quality integrations too:** the hero's Temperature sub-header metric and its metric chips (and the Current Weather Metrics panel) now find **Ozone** in your air-quality sources when Weather Sources don't have it — the station's own sensor, Home Assistant's AirNow integration, or any outdoor ozone sensor (the same lookup as the Air quality panel). The editor no longer marks Ozone "(unavailable)" when one exists.

## v2026.10.23.41

- **Fix: Temperature sub-header metric.** "High / Low Temperature" (the default) showed humidity in a hero without a forecast section, because the hero didn't load the forecast; it does now. A chosen metric now comes from Weather Sources like the rest of the card (the station's sensor first, e.g. UV and pressure in your units), and one that no source has (e.g. Ozone without an air-quality sensor) shows nothing instead of humidity.

## v2026.10.23.40

- **Screen guide, full screen with fit:** everything always fits there (the rows share the screen height), so the map now shows a green "Fits 2000×1200 · rows 201px" frame instead of a line at the bottom. The dashed screen-edge line appears only if the rows would have to be smaller than the 60 px minimum.
- The row height it shows leaves out panels hidden on load, as the dashboard does.

## v2026.10.23.39

- **Layout: screen guide.** Pick a screen (this browser window, 1920×1080, 2560×1440, 3440×1440, laptop, tablet, iPad landscape / portrait, a portrait panel, or a custom width × height) and the layout map is drawn to that screen's scale, with a dashed line where the screen ends, or a frame that shades everything off screen. It allows for the dashboard header, the card's padding, the button row and title. In full-screen mode with fit, rows share the screen height as on the dashboard, and the guide shows the row height that gives. Saved as `layout_screen` / `layout_guide`; used only by the editor.

## v2026.10.23.38

- **Hero:** removed the **Show the metric chips** checkbox; the metrics are turned on or off in **Section order & visibility**, as before.
- The **Chips** panel is now called **Current Weather Metrics** (its default title too). Its config type stays `chips`.

## v2026.10.22.37

- **Editor look:** the Weather Flex sub-panels inside a panel (Card Appearance, Current Weather Metrics, Sun Position …) are no longer indented, and **Sun & moon facts** looks like them (hairline card, bold title, accent icon, chevron). Group subtitles (Layout, Default Overrides, options groups) follow the design guide: theme accent color, mixed case, group size, semibold, thin divider; Appearance's group titles use the accent too.
- **Background colors offer Transparent** in the four-mode color control (e.g. Chip background, Card background, section backgrounds).
- **Hero: Show the metric chips** checkbox. The hero's chips and the Chips panel use the same Current Weather Metrics options and defaults.

## v2026.10.22.36

- **Editor, panel settings:** a **Default Overrides** group (Panel background, Disable shadow, Disable border, Disable glow) replaces the Shadow / Border / Glow checkboxes in Layout. **Sun & moon facts** is its own collapsible sub-panel in the Hero, Sky Tracker and Astronomy settings. The **Shown** checkbox is gone; the eye icon in the panel list does the same.
- **Weather Flex editors (Chips, Hero, forecasts, Sky Tracker):** every color is now the four-mode control (Not set / Theme color / Custom / CSS) instead of a bare swatch. Sky Bar day and night colors stay swatches, because they are blended. A theme or CSS color used as a section background keeps its opacity.

## v2026.10.22.35

- **Hero settings in one place:** the separate top-level Hero section is gone. Everything for the hero — Set scale to Auto, Auto scaling, sun & moon facts and its Weather Flex sections (header, metrics, clock & date …) — is in the Hero's row under **Panels**, like every other panel.
- **Per panel: Shadow, Border, Glow** checkboxes (Layout group, also inside stacks). Untick one to turn the Appearance shadow, border or glow off for just that panel. Shadow and glow are now separate layers, so either can be turned off alone.

## v2026.10.22.34

- **Sun & moon facts:** Illumination can join the moon phase — to the right of the phase name or under it — instead of being its own fact, with its % under the "Illumination" label or beside it. New **Alignment** (left, center, right) for the whole facts block.
- **Editor:** the Weather Flex settings inside a panel (e.g. Sky Tracker's Sun Position and Sky Bar, the Hero's sections) no longer show the "Weather Flex sections · build …" header and its auto-collapse checkbox, and the extra "Weather Flex sections" subtitle above them is gone.

## v2026.10.22.33

- **Hide a panel's title or its icon:** every panel with a header now has **Show the title** and **Show the title icon** checkboxes (Layout group, also for panels inside stacks). With the title off, its text and icon fields are hidden and the panel's own header controls (e.g. Wind's Compass / Rose, Radar's play button) stay. Metric tiles and the Button Menu follow them too. Chips, Sky Tracker and Home Assistant card panels still show a title only when you set one, or tick Show the title.

## v2026.10.22.32

- **Sun & moon facts in the Hero, Sky Tracker and Astronomy panels**, from one list: dawn, sunrise, solar noon, sunset, dusk, length of day (with the change since yesterday), visible light, moonrise, moonset, moon phase (with a moon image), illumination, next full moon and next new moon. Each panel has **Show sun & moon facts** and a checkbox per fact (all on by default), a moon image size, and one text size, weight and color for all labels and one for all values. In the Hero they sit across the bottom over its background; in Sky Tracker under the sky (replacing the old six "sun times"); in Astronomy under the table (replacing its summary).
- **Astronomy:** new **Sun & moon table** checkbox to hide the rise/set table.

## v2026.10.22.31

- **Appearance shows what Auto means:** under Corner radius, Row height and Gap, the editor shows the value Auto resolved to, e.g. "Auto: 12px (from the theme's card corner radius)" or "Auto: 96px (calculated to fit the screen)". When the dashboard's theme gives a different value than the editor preview (Home Assistant can use a different theme for each), both are shown. At Auto the slider sits on that value instead of at the left end.

## v2026.10.22.30

- **Wind panel fits its height** ("Fit to the panel", on by default): the compass or rose shrinks so the readings, bars, statistics, buttons and chart all fit the panel's height. Before, a tall Wind panel stretched its rows, so the panels beside it (e.g. a half-height Sky Tracker and Daily forecast) got empty space at the bottom. In fit mode the chart is a fixed strip. Turn it off per panel with `fit: false`.

## v2026.10.22.29

- **"Unsaved changes" banner** on the card editor's preview (like AlertTicker's test-mode banner): it appears at the top once you change something, goes away if you change it back, and clears when the editor closes. It never shows on the dashboard itself.

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
