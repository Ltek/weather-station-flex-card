# Configuration reference

Everything below can be set in the visual editor; this page is for those who prefer YAML or want to see every option in one place. It is generated from the editor itself (`node scripts/gen-config-doc.mjs`), so it matches what the editor offers.

Only options that differ from their default need to be written. The editor saves exactly that way, so a config it saved stays short.

**Contents:** [Minimal config](#minimal-config) · [Card options](#card-options) · [Options every panel takes](#options-every-panel-takes) · [Panel types](#panel-types) · [Examples](#examples) · [Notes](#notes)

## Minimal config

```yaml
type: custom:weather-station-flex-card
entity: weather.openweathermap        # forecast + condition (any weather.* entity)
metric_sources:                       # Weather Sources: for each value, the first source that has it wins
  sources:
    - ref: device:<your station's device id>   # its sensors are found automatically (outdoor first)
    - ref: weather.openweathermap
```

With no `panels:` the card shows its default dashboard (hero, bulletin, Sky Tracker, a Button Menu with the panel buttons, wind, six metric tiles, hourly and tomorrow's forecast; several more panels hidden until you tap their buttons; radar and wind map as pop-ups).

## Card options

| Option | Value | What it does |
|---|---|---|
| `entity` | entity id (`weather.*`) | **Required.** The weather entity for the forecast, the current condition and anything the station doesn't measure. |
| `metric_sources.sources` | list | Weather Sources in priority order. Each item: `ref` (`device:<id>` or an entity id), optional `overrides` (value → entity id) and `disabled: true`. |
| `panels` | list | The panels, in grid order (see below). |
| `storage_key` | text | Optional name for the per-browser saved panel-button states (default: the dashboard path, entity and title). |
| `min_row_height` / `max_row_height` | number px | Limits for the row height calculated in full screen with fit (default 60 / 400). |
| `layout_screen` | `window` or `<width>x<height>` | Editor only: the Layout map's screen guide. |
| `layout_guide` | `line` · `frame` | Editor only: how the screen guide is drawn. |

### Card

| Option | Value | Default | What it does |
|---|---|---|---|
| `title` | text |  | **Title** — Optional title row above the panels. |
| `subtitle` | text |  | **Subtitle** |
| `icon` | icon, e.g. `mdi:weather-windy` |  | **Icon** |

### Background

| Option | Value | Default | What it does |
|---|---|---|---|
| `background` | `none` · `animated` · `image` | `none` | **Card background** — With an animated or image background, panels become see-through and the hero stops drawing its own. |
| `background_effects` | list of: `rain` · `snow` · `lightning` · `sky` · `moon` · `sun` · `cloud` | `["rain","snow","lightning","sky","moon","sun","cloud"]` | **Animation effects** — Which effects the weather animation draws. At night it shows the dark sky and the moon instead of the sun. |
| `background_moon_phase` | `true` / `false` | `true` | **Show moon phase** — Shade the night-time moon to the current lunar phase (off: a full moon). |
| `anim_twinkle` | number 10–150 % | `100` | **Star twinkle** — Animation speeds (100% = normal, 50% = half as fast), for the card background and the hero's own animation. |
| `anim_clouds` | number 10–150 % | `100` | **Cloud drift** |
| `anim_rain` | number 10–150 % | `100` | **Rain** |
| `anim_snow` | number 10–150 % | `100` | **Snow** |
| `anim_sun` | number 10–150 % | `100` | **Sun rays** |
| `anim_lightning` | number 10–150 % | `100` | **Lightning** |
| `background_image` | image (uploaded through the editor) |  | **Background image** — Image background: upload a PNG, JPG, WEBP… or pick one from your media. |
| `background_image_url` | URL |  | **Background image URL** — Image background: or an image URL (wins over the upload), e.g. /local/images/sky.jpg. |
| `background_image_fit` | `cover` · `contain` · `tile` | `cover` | **Image fit** |
| `background_dim` | number 0–0.9 | `0.25` | **Darken image** — Image background: darken it so text stays readable (0 = off). |

### Panels

| Option | Value | Default | What it does |
|---|---|---|---|
| `panel_opacity` | number 0–1 | `0.55` | **Panel opacity** — With a card background: panel opacity (0 = fully transparent, 1 = solid). Default 0.55. |
| `panel_blur` | number 0–30 px | `6` | **Panel blur** — With a card background: blur behind panels. Default 6. |
| `panel_radius` | number 0–40 px |  | **Corner radius** — Auto: your theme's card corner radius (shown above). Move the slider to set your own; × goes back to Auto. |
| `panel_shadow` | `none` · `soft` · `medium` · `strong` | `none` | **Shadow** |
| `panel_border_width` | number 0–6 px |  | **Border width** — Border (default none). |
| `panel_border_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Border color** — Not set: the theme's divider color. |
| `panel_glow` | `true` / `false` | `false` | **Glow** — A soft glow around each panel. |
| `panel_glow_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Glow color** — Not set: the border color, else the theme's primary color. |
| `panel_glow_size` | number 2–40 px | `10` | **Glow size** |

### Layout & behaviour

| Option | Value | Default | What it does |
|---|---|---|---|
| `layout` | `auto` · `fullscreen` | `auto` | **Layout** |
| `fit_height` | `true` / `false` | `true` | **Fit panels to the screen height** — Full screen: panels with a height share the screen height (row height is calculated). |
| `layout_size` | `auto` · `wide` · `medium` · `narrow` | `auto` | **Layout size** — In a Sections view the card is only as wide as its section; widen the section or use a Panel view for the desktop layout. |
| `row_height` | number 40–300 px |  | **Row height** — Height of one row unit (default 110). |
| `gap` | number 0–32 px |  | **Gap** — Space between panels (default 12). |

### Panel buttons

| Option | Value | Default | What it does |
|---|---|---|---|
| `remember` | `true` / `false` | `true` | **Remember Panel Button States** — Keep which panels were shown or hidden with the panel buttons after a refresh, in each browser. Off: every load starts from the panels' Shown setting (the eye icon). |

Where the buttons go: `panel_bar: false` hides the bar; a Button Menu panel (`heading`) with `show_bar: true` holds them instead of the row above the panels. Which panels get a button is each panel's `in_bar`.

## Options every panel takes

| Option | Value | Default | What it does |
|---|---|---|---|
| `show_title` | `true` / `false` | `true` | **Show the title** |
| `title` | text |  | **Title** |
| `show_icon` | `true` / `false` | `true` | **Show the title icon** |
| `icon` | icon, e.g. `mdi:weather-windy` |  | **Icon** |
| `span` | number 1–12 |  | **Width** — Width in twelfths of the card. |
| `rows` | number 0–10 |  | **Height** — Height in row units, in half steps (0 = fit content, 0.5 = half height). |
| `display` | `grid` · `tile_popup` · `popup` |  | **Display** |
| `in_bar` | `true` / `false` |  | **Panel button** — Adds a button for this panel to the button menu, to show or hide it (or open its pop-up). Off: no button, and the panel is always shown (unless hidden with the eye icon in the panel list). |
| `tile_background` | `default` · `translucent` · `solid` · `none` | `default` | **Panel background** |
| `tile_shadow` | `true` / `false` | `true` | **Disable shadow** (the editor shows it as a *Disable …* checkbox; `false` = disabled) |
| `tile_border` | `true` / `false` | `true` | **Disable border** (the editor shows it as a *Disable …* checkbox; `false` = disabled) |
| `tile_glow` | `true` / `false` | `true` | **Disable glow** (the editor shows it as a *Disable …* checkbox; `false` = disabled) |

Also: `type` (required), `id` (optional, keeps a panel's saved button state when you reorder panels), `span_medium` / `span_narrow` (width on tablets / phones) and `rows_compact` (height on tablets and phones). On tablets small tiles stay side by side and wide panels go full width; on phones tiles pair up and everything else is full width.

### Inside a stack

Panels inside a `stack` have no grid place of their own; they take:

| Option | Value | Default | What it does |
|---|---|---|---|
| `show_title` | `true` / `false` | `true` | **Show the title** |
| `title` | text |  | **Title** |
| `show_icon` | `true` / `false` | `true` | **Show the title icon** |
| `icon` | icon, e.g. `mdi:weather-windy` |  | **Icon** |
| `grow` | number 0–12 |  | **Grow** — Horizontal: relative width (default 1). Vertical: 1 = share leftover height. |
| `min_width` | number 80–800 px |  | **Minimum width** — Horizontal: narrowest this panel gets before wrapping. |
| `rows` | number 0–10 |  | **Height** — Vertical: minimum height in row units (half steps allowed). |
| `tile_shadow` | `true` / `false` | `true` | **Disable shadow** (the editor shows it as a *Disable …* checkbox; `false` = disabled) |
| `tile_border` | `true` / `false` | `true` | **Disable border** (the editor shows it as a *Disable …* checkbox; `false` = disabled) |
| `tile_glow` | `true` / `false` | `true` | **Disable glow** (the editor shows it as a *Disable …* checkbox; `false` = disabled) |

## Panel types

### Hero (current conditions) — `type: hero`

Default size: 12 of 12 wide, 3 rows high. Also takes `flex:`: Weather Flex section settings (what the embedded section editor saves), merged over the panel's defaults.

| Option | Value | Default | What it does |
|---|---|---|---|
| `main_temperature` | `temperature` · `feels_like` | `temperature` | **Main temperature** — Feels like shows the feels-like temperature in place of the temperature (falls back to the temperature when there's no feels-like value). |
| `auto_scale` | `true` / `false` | `false` | **Set scale to Auto** — Size the temperature, its sub-header, condition, icon, clock, date and metric chips from the panel's size. Each then has its own scale below, instead of the pixel sizes in the sections editor. |
| `scale` | number 50–200 % | `100` | **Overall scale** — Everything bigger or smaller; the items below scale on top of this. |
| `temp_scale` | number 30–300 % | `100` | **Temperature** |
| `condition_scale` | number 30–300 % | `100` | **Condition text** |
| `icon_scale` | number 30–300 % | `100` | **Condition icon** |
| `clock_scale` | number 30–300 % | `100` | **Clock time** |
| `date_scale` | number 30–300 % | `100` | **Date** |
| `secondary_scale` | number 30–300 % | `100` | **Temperature sub-header** — The line under the temperature, e.g. today's high / low. |
| `chips_scale` | number 30–300 % | `100` | **Metric chips** |

**Sun & moon facts**

| Option | Value | Default | What it does |
|---|---|---|---|
| `show_facts` | `true` / `false` | `false` | **Show sun & moon facts** |
| `facts` | list of: `dawn` · `sunrise` · `solar_noon` · `sunset` · `dusk` · `day_length` · `visible_light` · `moonrise` · `moonset` · `moon_phase` · `moon_illumination` · `next_full` · `next_new` | `["dawn","sunrise","solar_noon","sunset","dusk","day_length","visible_light","moonrise","moonset","moon_phase","moon_illumination","next_full","next_new"]` | **Facts** |
| `fact_position` | `bottom` · `top` | `bottom` | **Position** |
| `fact_spacing` | `spread` · `packed` | `spread` | **Spacing** |
| `fact_gap` | number 4–80 px | `14` | **Gap between facts** |
| `fact_align` | `left` · `center` · `right` | `left` | **Alignment** |
| `fact_moon_illum` | `separate` · `right` · `below` | `separate` | **Illumination** |
| `fact_illum_value` | `below` · `right` | `below` | **Illumination %** |
| `fact_moon_size` | number 16–160 px | `36` | **Moon image size** |
| `fact_label_size` | number 8–32 px | `11` | **Label size** |
| `fact_label_weight` | `400` · `500` · `700` | `400` | **Label weight** |
| `fact_label_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Label color** — Not set: secondary text. |
| `fact_value_size` | number 8–40 px | `13` | **Value size** |
| `fact_value_weight` | `400` · `500` · `700` | `400` | **Value weight** |
| `fact_value_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Value color** — Not set: primary text. |

### Air quality — `type: air_quality`

Default size: 4 of 12 wide, fits its content.

| Option | Value | Default | What it does |
|---|---|---|---|
| `layout` | `scale` · `rows` · `bars` · `tiles` | `scale` | **Layout** |
| `pollutants` | list of: `pm2_5` · `pm10` · `ozone` · `co2` |  | **Pollutants** — Default: all that are found. |
| `extra` | mapping / list |  | **More readings** — More readings, e.g. - entity: sensor.erie_benzene with optional label, icon and thresholds: [moderate, elevated, high, very high] in the sensor's unit. Benzene and CO₂ have built-in thresholds. |
| `show_aqi` | `true` / `false` | `true` | **Show the AQI** |
| `show_scale` | `true` / `false` |  | **AQI scale** — Rows, bars and tiles: AQI colour scale under the number (default: on for tiles only). |
| `bar_height` | number 60–400 px |  | **Bar height** — Vertical bars: height (default 140). |
| `show_source` | `true` / `false` | `true` | **Show the source** — Show the data source (e.g. AirNow, Boulder AIR). |
| `source` | text |  | **Source text** — Replace the source text (default: the sensor's source attribute or integration). |
| `show_location` | `true` / `false` | `true` | **Show the town / area** — Show the reporting area / town (AirNow's reporting area). |
| `location` | text |  | **Town / area text** — Replace the area or town text. |
| `entities.aqi` | entity id (`sensor.*`) |  | **AQI sensor** — Default: the station's own sensor, else AirNow, else any outdoor AQI sensor. |
| `entities.pm2_5` | entity id (`sensor.*`) |  | **PM2.5 sensor** |
| `entities.pm10` | entity id (`sensor.*`) |  | **PM10 sensor** |
| `entities.ozone` | entity id (`sensor.*`) |  | **Ozone sensor** |
| `entities.co2` | entity id (`sensor.*`) |  | **CO₂ sensor** |

### Astronomy — `type: astronomy`

Default size: 6 of 12 wide, 3 rows high.

| Option | Value | Default | What it does |
|---|---|---|---|
| `show_chart` | `true` / `false` | `true` | **Altitude chart** — Sun and moon altitude over the day. |
| `show_table` | `true` / `false` | `true` | **Sun & moon table** — Rise and set times for the sun, the three twilights and the moon. |

**Sun & moon facts**

| Option | Value | Default | What it does |
|---|---|---|---|
| `show_facts` | `true` / `false` | `true` | **Show sun & moon facts** |
| `facts` | list of: `dawn` · `sunrise` · `solar_noon` · `sunset` · `dusk` · `day_length` · `visible_light` · `moonrise` · `moonset` · `moon_phase` · `moon_illumination` · `next_full` · `next_new` | `["dawn","sunrise","solar_noon","sunset","dusk","day_length","visible_light","moonrise","moonset","moon_phase","moon_illumination","next_full","next_new"]` | **Facts** |
| `fact_position` | `below` · `above` | `below` | **Position** |
| `fact_spacing` | `spread` · `packed` | `spread` | **Spacing** |
| `fact_gap` | number 4–80 px | `14` | **Gap between facts** |
| `fact_align` | `left` · `center` · `right` | `left` | **Alignment** |
| `fact_moon_illum` | `separate` · `right` · `below` | `separate` | **Illumination** |
| `fact_illum_value` | `below` · `right` | `below` | **Illumination %** |
| `fact_moon_size` | number 16–160 px | `36` | **Moon image size** |
| `fact_label_size` | number 8–32 px | `11` | **Label size** |
| `fact_label_weight` | `400` · `500` · `700` | `400` | **Label weight** |
| `fact_label_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Label color** — Not set: secondary text. |
| `fact_value_size` | number 8–40 px | `13` | **Value size** |
| `fact_value_weight` | `400` · `500` · `700` | `400` | **Value weight** |
| `fact_value_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Value color** — Not set: primary text. |

### Bulletin — `type: bulletin`

Default size: 4 of 12 wide, 3 rows high.

| Option | Value | Default | What it does |
|---|---|---|---|
| `entity` | entity id |  | **Text sensor** — Optional text sensor (e.g. a forecast-text or NWS sensor) shown under the summary. |
| `attribute` | text |  | **Text attribute** — Attribute of that sensor holding the text (default: its state). |
| `alerts_entity` | entity id (`sensor.*`) |  | **Alerts sensor** — Optional NWS Alerts sensor; active alerts are shown at the top. |
| `show_sun` | `true` / `false` | `true` | **Show sun** |
| `show_moon` | `true` / `false` | `true` | **Show moon** |

### Button Menu — `type: heading`

Default size: 12 of 12 wide, fits its content.

| Option | Value | Default | What it does |
|---|---|---|---|
| `subtitle` | text |  | **Subtitle** |
| `show_status` | `true` / `false` |  | **Show station status** — Show whether the station's sensors are reporting. |
| `show_bar` | `true` / `false` |  | **Panel buttons here** — Show the panel buttons in this heading instead of above the panels. |

### Clock — `type: clock`

Default size: 4 of 12 wide, 1 row high.

| Option | Value | Default | What it does |
|---|---|---|---|
| `show_time` | `true` / `false` | `true` | **Show the time** |
| `show_seconds` | `true` / `false` | `false` | **Seconds** |
| `time_format` | `auto` · `12` · `24` | `auto` | **Time format** |
| `show_date` | `true` / `false` | `true` | **Show the date** |
| `date_format` | `long` · `medium` · `short` · `weekday` · `full` | `medium` | **Date format** |
| `align` | `center` · `left` · `right` | `center` | **Alignment** |
| `auto_size` | `true` / `false` | `true` | **Auto size** — Size the time and date to fill the panel. |
| `scale` | number 50–200 % | `100` | **Auto scaling** — Auto size: bigger or smaller. |
| `date_scale` | number 10–100 % | `30` | **Date size** — Date size as a share of the time's size. |
| `time_size` | number 12–200 px | `48` | **Time size** |
| `date_size` | number 8–80 px | `16` | **Date size** |
| `time_weight` | `300` · `400` · `500` · `700` | `300` | **Time weight** |
| `color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Color** — Time color. Not set: the theme's text color. |
| `date_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Date color** — Not set: secondary text. |

### Current Weather Metrics — `type: chips`

Default size: 12 of 12 wide, fits its content. Also takes `flex:`: Weather Flex section settings (what the embedded section editor saves), merged over the panel's defaults.

No options of its own beyond `flex:`.

### Daily forecast — `type: daily`

Default size: 8 of 12 wide, 3 rows high. Also takes `flex:`: Weather Flex section settings (what the embedded section editor saves), merged over the panel's defaults.

No options of its own beyond `flex:`.

### Day forecast — `type: day`

Default size: 4 of 12 wide, 4 rows high.

| Option | Value | Default | What it does |
|---|---|---|---|
| `day_offset` | number 0–7 |  | **Day** — 0 = today, 1 = tomorrow (default), … |
| `entity` | entity id (`weather.*`) |  | **Weather entity** — Weather entity (default: the card's). |
| `icon_size` | number 32–160 |  | **Icon size** |

### Forecast (hourly + daily) — `type: forecast`

Default size: 8 of 12 wide, 4 rows high. Also takes `flex:`: Weather Flex section settings (what the embedded section editor saves), merged over the panel's defaults.

No options of its own beyond `flex:`.

### Graph — `type: graph`

Default size: 6 of 12 wide, 3 rows high.

| Option | Value | Default | What it does |
|---|---|---|---|
| `series` | mapping / list |  | **Series** — Advanced: list of series (metric or entity, label, color, axis left/right, style line/area/dashed/bar, cumulative, band). Colors and sensors can also be set under Series above. |
| `ranges` | list of: `6h` · `12h` · `24h` · `48h` · `7d` · `30d` · `90d` · `365d` |  | **Range buttons** |
| `range` | `6h` · `12h` · `24h` · `48h` · `7d` · `30d` · `90d` · `365d` |  | **Default range** — Range shown first. |
| `show_readings` | `true` / `false` | `true` | **Show current readings** |
| `left_min` | number |  | **Left axis min** |
| `left_max` | number |  | **Left axis max** |
| `right_min` | number |  | **Right axis min** |
| `right_max` | number |  | **Right axis max** |

### Home Assistant card — `type: card`

Default size: 6 of 12 wide, fits its content.

| Option | Value | Default | What it does |
|---|---|---|---|
| `card` | mapping / list |  | **Card configuration** — Any card configuration, e.g. type: statistics-graph. |

### Hourly forecast — `type: hourly`

Default size: 8 of 12 wide, 3 rows high. Also takes `flex:`: Weather Flex section settings (what the embedded section editor saves), merged over the panel's defaults.

No options of its own beyond `flex:`.

### Metric tile — `type: metric`

Default size: 2 of 12 wide, 2 rows high.

| Option | Value | Default | What it does |
|---|---|---|---|
| `metric` | `temperature` · `apparent_temperature` · `dew_point` · `humidity` · `pressure` · `wind_speed` · `wind_gust_speed` · `uv_index` · `solar_radiation` · `illuminance` · `rain_rate` · `rain_today` · `rain_24h` · `rain_event` · `battery` · `battery_voltage` · `capacitor` · `signal` · `signal_quality` · `rssi` · `online` · `hardware_id` · `vpd` · `indoor_temperature` · `aqi` · `pm2_5` · `pm10` · `ozone` · `co2` · `indoor_humidity` |  | **Metric** — Resolved through Weather Sources; set an entity to use any sensor instead. |
| `entity` | entity id |  | **Sensor** |
| `label` | text |  | **Label** |
| `color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Color** — Not set: the metric's color. |
| `digits` | number 0–3 |  | **Decimals** |
| `chart` | `line` · `bar` · `none` |  | **Sparkline** |
| `hours` | number 1–168 |  | **Hours** — Sparkline hours (default 24). |
| `show_minmax` | `true` / `false` | `true` | **Show today's min/max** |

### Moon — `type: moon`

Default size: 4 of 12 wide, 2 rows high.

| Option | Value | Default | What it does |
|---|---|---|---|
| `moon_size` | number 40–240 px |  | **Moon size** |

### Pollen — `type: pollen`

Default size: 4 of 12 wide, fits its content.

| Option | Value | Default | What it does |
|---|---|---|---|
| `device` | device id |  | **Pollen location** — Pollen Levels location (default: the first one). |
| `view` | `plants` · `types` | `plants` | **Default view** |
| `species` | list of text |  | **Species** — Species to show, in order, by Google code or name (e.g. JUNIPER, OAK, GRAMINALES). Blank shows the busiest. |
| `max_rows` | number 0–20 | `6` | **Rows** — Rows when no species are listed (0 = all). |
| `hide_off_season` | `true` / `false` | `true` | **Hide out-of-season species** — Hide species that are out of season. |
| `hide_when_off_season` | `true` / `false` | `false` | **Hide the panel out of season** — Hide the whole panel when no species is in season (its panel button still opens it). |
| `hide_when_none` | `true` / `false` | `false` | **Hide the panel when all are None** — Hide the whole panel when every species is at None today (its panel button still opens it). |
| `show_tomorrow` | `true` / `false` | `true` | **Tomorrow's trend** |
| `show_season` | `true` / `false` | `true` | **Season strip** — 12-month strip: how many of the shown species are in season each month. |
| `hide_none` | `true` / `false` | `true` | **Hide species at None** — Hide species with nothing in the air today (level None). |
| `show_nothing` | `true` / `false` | `true` | **Show the "nothing in the air" text** — Show "In season, but nothing in the air today" in the header line when every species is at None. |
| `nothing_text` | text |  | **"Nothing in the air" text** — Replace that text, e.g. "All clear". |
| `show_source` | `true` / `false` | `true` | **Show the source** — Show the data source (Google) in the header line. |
| `source` | text |  | **Source text** — Replace the source text. |
| `show_location` | `true` / `false` | `true` | **Show the town / area** — Show the town in the header line. |
| `location` | text |  | **Town / area text** — Replace the town (default: your Home Assistant location name). |
| `seasons` | mapping / list |  | **Season months** — Season months per species, e.g. JUNIPER: [1, 2, 3, 4]. Default: Google's season text, else typical months. |
| `entities` | entity id (`sensor.*`) — list |  | **Sensors** — Advanced: use these sensors instead of finding Pollen Levels automatically. |

### Radar / map — `type: radar`

Default size: 6 of 12 wide, 4 rows high.

| Option | Value | Default | What it does |
|---|---|---|---|
| `radar` | `true` / `false` | `true` | **Radar loop** — RainViewer radar loop. Turn off for a plain map with OpenWeatherMap layers. |
| `start_paused` | `true` / `false` | `false` | **Start paused** — Show only the latest radar image until you press play; the other frames load then. Lighter for low-powered tablets. |
| `base_map` | `gray` · `streets` · `topo` · `imagery` · `osm` |  | **Base map** |
| `zoom` | number 2–14 |  | **Zoom** |
| `latitude` | number |  | **Latitude** — Map center (default: your Home Assistant location). |
| `longitude` | number |  | **Longitude** |
| `radar_opacity` | number 0.1–1 |  | **Radar opacity** |
| `owm_api_key` | text |  | **OpenWeatherMap API key** — Optional OpenWeatherMap key for map layers. Visible to anyone who can view the dashboard. |
| `owm_layers` | list of: `wind_new` · `precipitation_new` · `clouds_new` · `temp_new` · `pressure_new` |  | **OpenWeatherMap layers** |
| `owm_default` | `none` · `wind_new` · `precipitation_new` · `clouds_new` · `temp_new` · `pressure_new` |  | **Layer shown first** |
| `owm_opacity` | number 0.1–1 |  | **Layer opacity** |
| `base_map_url` | text |  | **Custom tile URL** — Custom XYZ tile URL (overrides base map). |
| `base_map_attribution` | text |  | **Custom tile attribution** |

### Sky Tracker — `type: sky_tracker`

Default size: 4 of 12 wide, 2 rows high. Also takes `flex:`: Weather Flex section settings (what the embedded section editor saves), merged over the panel's defaults.

| Option | Value | Default | What it does |
|---|---|---|---|
| `show_arc` | `true` / `false` | `true` | **Sun arc** — Sun arc: the sun's path, its position now, sunrise and sunset; the moon at night. |
| `show_sky` | `true` / `false` | `true` | **Sky gradient & forecast row** — Sky gradient: daylight and cloud cover over time, with the forecast row (temperatures, icons, wind…). |
| `timeframe` | `hours` · `day` · `sunrise_sunset` | `hours` | **Time window** — One time window for the arc and the sky. |
| `hours` | number 6–72 | `24` | **Hours** |
| `anchor` | `now_center` · `now_left` | `now_center` | **Now is** |
| `moon` | `true` / `false` | `true` | **Moon at night** — Show the moon on the arc at night. |
| `moon_phase` | `true` / `false` | `true` | **Draw the moon phase** — Draw the moon in its current phase (off: a moon icon). |
| `show_steps` | `true` / `false` | `false` | **Step buttons** — ◀ Now ▶ buttons in the header to look at later hours or days. |
| `step_hours` | `6` · `12` · `24` | `12` | **Step** |
| `max_ahead` | number 12–168 h | `48` | **How far ahead** — Hourly forecasts usually reach 48 h; beyond that the bar shows daylight only. |
| `return_after` | number 0–600 s | `60` | **Back to now after** — 0 = stay. |

**Sun & moon facts**

| Option | Value | Default | What it does |
|---|---|---|---|
| `show_facts` | `true` / `false` | `false` | **Show sun & moon facts** |
| `facts` | list of: `dawn` · `sunrise` · `solar_noon` · `sunset` · `dusk` · `day_length` · `visible_light` · `moonrise` · `moonset` · `moon_phase` · `moon_illumination` · `next_full` · `next_new` | `["dawn","sunrise","solar_noon","sunset","dusk","day_length","visible_light","moonrise","moonset","moon_phase","moon_illumination","next_full","next_new"]` | **Facts** |
| `fact_position` | `below` · `above` · `header` | `below` | **Position** |
| `fact_spacing` | `spread` · `packed` | `spread` | **Spacing** |
| `fact_gap` | number 4–80 px | `14` | **Gap between facts** |
| `fact_align` | `left` · `center` · `right` | `left` | **Alignment** |
| `fact_moon_illum` | `separate` · `right` · `below` | `separate` | **Illumination** |
| `fact_illum_value` | `below` · `right` | `below` | **Illumination %** |
| `fact_moon_size` | number 16–160 px | `36` | **Moon image size** |
| `fact_label_size` | number 8–32 px | `11` | **Label size** |
| `fact_label_weight` | `400` · `500` · `700` | `400` | **Label weight** |
| `fact_label_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Label color** — Not set: secondary text. |
| `fact_value_size` | number 8–40 px | `13` | **Value size** |
| `fact_value_weight` | `400` · `500` · `700` | `400` | **Value weight** |
| `fact_value_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Value color** — Not set: primary text. |

### Stack (side by side / stacked) — `type: stack`

Default size: 12 of 12 wide, fits its content.

| Option | Value | Default | What it does |
|---|---|---|---|
| `direction` | `horizontal` · `vertical` | `horizontal` | **Direction** |
| `min_width` | number 80–800 px |  | **Minimum width** — Horizontal: children wrap to a new line only below this width (default 180). |

### Station graph — `type: statistics`

Default size: 6 of 12 wide, 3 rows high.

| Option | Value | Default | What it does |
|---|---|---|---|
| `engine` | `auto` · `sgcc` · `builtin` | `auto` | **Graph card** — Automatic uses cataseven's Statistics Graph Chart Card when it is installed (mixed bars/lines/areas, second axis), otherwise Home Assistant's built-in card. |
| `preset` | `temps` · `wind` · `pressure_humidity` · `solar_uv` · `rain` · `air_quality` · `temperature_range` | `temps` | **Graph** |
| `days_to_show` | number 0.25–365 |  | **Days** |
| `period` | `5minute` · `hour` · `day` · `week` · `month` |  | **Resolution** |
| `chart_type` | `line` · `bar` |  | **Chart type** — Built-in card only (the custom card sets this per series). |
| `stat_types` | list of: `mean` · `min` · `max` · `state` · `change` |  | **Values** |
| `card` | mapping / list |  | **Card configuration** — Extra options merged into the graph card's config, e.g. show_interval_picker: true, or a full entities: list. |

### Station health — `type: health`

Default size: 4 of 12 wide, fits its content.

| Option | Value | Default | What it does |
|---|---|---|---|
| `show_devices` | `true` / `false` |  | **Show device names** — Show device names even when there is only one. |
| `include_ecowitt` | `true` / `false` | `true` | **All Ecowitt devices** — Also show devices from any Ecowitt integration that aren't in Weather Sources (e.g. Ecowitt Local's sensor devices next to the core integration). |
| `show_ids` | `true` / `false` | `true` | **Hardware IDs** |
| `devices` | device id — list |  | **More devices** — Any other devices to show (battery, signal, online). |

### Temp & Humidity — `type: temp_humidity`

Default size: 6 of 12 wide, 3 rows high.

| Option | Value | Default | What it does |
|---|---|---|---|
| `range` | `6h` · `12h` · `24h` · `48h` · `7d` · `30d` · `90d` · `365d` |  | **Default range** |
| `show_readings` | `true` / `false` | `true` | **Show current readings** |

### UV & Solar — `type: uv_solar`

Default size: 6 of 12 wide, 3 rows high.

| Option | Value | Default | What it does |
|---|---|---|---|
| `range` | `6h` · `12h` · `24h` · `48h` · `7d` · `30d` · `90d` · `365d` |  | **Default range** |
| `show_readings` | `true` / `false` | `true` | **Show current readings** |

### Wind — `type: wind`

Default size: 6 of 12 wide, 4 rows high.

**View**

| Option | Value | Default | What it does |
|---|---|---|---|
| `fit` | `true` / `false` | `true` | **Fit to the panel** — Shrink the compass or rose so everything fits the panel's height (instead of the panel growing and stretching its row). |
| `view` | `compass` · `rose` |  | **Default view** |
| `show_view_buttons` | `true` / `false` | `true` | **View buttons** — Compass / Rose buttons in the header. |

**Readings (speed, gust, direction)**

| Option | Value | Default | What it does |
|---|---|---|---|
| `readings_position` | `auto` · `side` · `above` · `below` · `hidden` | `auto` | **Readings** |

**Chart**

| Option | Value | Default | What it does |
|---|---|---|---|
| `show_chart` | `true` / `false` | `true` | **Show the chart** — 24 h speed and gust chart. |
| `chart_position` | `below` · `above` | `below` | **Chart position** |
| `chart_legend` | `true` / `false` | `false` | **Chart legend** — Speed / Gust legend on the chart. |
| `windrose_chart` | `true` / `false` | `true` | **Chart with the Wind Rose Card** — Also with the Wind Rose Card. |

**Compass**

| Option | Value | Default | What it does |
|---|---|---|---|
| `dial_scale` | number 50–250 % | `100` | **Size** — Compass and built-in rose size. |
| `compass_arrow_size` | number 50–400 % | `100` | **Pointer size** — Direction pointer size. |
| `compass_arrow_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Pointer color** — Not set: the wind color. |

**Wind rose**

| Option | Value | Default | What it does |
|---|---|---|---|
| `rose_engine` | `auto` · `windrose` · `builtin` | `auto` | **Wind rose** — aukedejong's Wind Rose Card (HACS) with your station's sensors filled in, or our built-in 24 h rose. |
| `show_legend` | `true` / `false` | `true` | **Rose legend** — Built-in rose: speed colour legend. |
| `rose_bins` | mapping / list |  | **Rose speed bins** — Built-in rose: speed thresholds in the sensor's unit, e.g. [1, 5, 10, 15, 25]. |
| `windrose_preset` | `standard` · `periods` · `beaufort` · `corners` · `stats` · `playback` · `minimal` | `standard` | **Wind Rose Card preset** — Wind Rose Card starting layout; the settings below change parts of it. |
| `wr_period` | `preset` · `-1h` · `-8h` · `-1d` · `-7d` · `-30d` | `preset` | **Default period** — Period shown first. |
| `wr_scale` | number 30–150 % | `100` | **Size** — Wind Rose Card size within the panel. |
| `wr_arrow` | `true` / `false` | `true` | **Direction arrow** — Current direction arrow. |
| `wr_arrow_size` | number 10–240 | `50` | **Arrow size** — Direction arrow (pointer) size. |
| `wr_arrow_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Arrow color** — Not set: red. The Wind Rose Card uses it for the speed-bar arrows too. |

**Wind Rose Card: speed bars**

| Option | Value | Default | What it does |
|---|---|---|---|
| `wr_bars` | `preset` · `right` · `bottom` · `hidden` | `preset` | **Speed bars** |
| `wr_beaufort` | `preset` · `on` · `off` | `preset` | **Bar scale** |
| `wr_bar_full` | `preset` · `on` · `off` | `preset` | **Full colour scale** — Every range gets its own colour (blue → green → yellow → red), like the Beaufort bars. |
| `wr_range_step` | number 1–20 |  | **Range step** — Speed bars in your unit: width of each colour band (e.g. 5 mph). Smaller = more colours. |
| `wr_range_max` | number 5–150 |  | **Speed bar max** — Last band starts here. |
| `wr_gust_max` | number 5–150 |  | **Gust bar max** — Default: the speed bar max. |
| `wr_speed_arrows` | `preset` · `on` · `off` | `preset` | **Speed arrows** — Arrow on each bar at the current speed. |
| `wr_speed_arrow_size` | number 10–240 | `40` | **Speed arrow size** |

**Wind Rose Card: corner info**

| Option | Value | Default | What it does |
|---|---|---|---|
| `wr_corners` | `preset` · `on` · `off` | `preset` | **Corner info** |
| `corner_speed` | `top_left` · `top_right` · `bottom_left` · `bottom_right` · `hidden` | `top_left` | **Speed** |
| `corner_direction` | `top_left` · `top_right` · `bottom_left` · `bottom_right` · `hidden` | `top_right` | **Direction** |
| `corner_gust` | `top_left` · `top_right` · `bottom_left` · `bottom_right` · `hidden` | `bottom_left` | **Gust** |
| `corner_label_size` | number 20–120 | `50` | **Label size** — Label size (the card's own scale). |
| `corner_value_size` | number 20–160 | `80` | **Value size** — Value size (the card's own scale). |
| `corner_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Text color** — Text color. |

**Wind Rose Card: statistics**

| Option | Value | Default | What it does |
|---|---|---|---|
| `wr_stats` | `preset` · `top` · `bottom` · `off` | `preset` | **Position** |
| `stats_items` | list of: `min` · `avg` · `max` · `median` · `p90` · `calm` | `["min","avg","max","p90","calm"]` | **Show** |
| `stats_align` | `left` · `center` · `right` | `left` | **Alignment** |
| `stats_size` | number 8–40 px | `13` | **Text size** |
| `stats_weight` | `400` · `500` · `700` | `400` | **Text weight** |
| `stats_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Text color** — Not set: secondary text. |

**Wind Rose Card: buttons**

| Option | Value | Default | What it does |
|---|---|---|---|
| `wr_buttons` | `preset` · `periods` · `playback` · `none` | `preset` | **Buttons** |
| `wr_buttons_position` | `preset` · `top` · `bottom` | `preset` | **Button position** |

**Wind Rose Card: advanced**

| Option | Value | Default | What it does |
|---|---|---|---|
| `windrose` | mapping / list |  | **Wind Rose Card options** — Any of the card's own options, merged last, e.g. rose_config, colors or speed_ranges. |

**Sensors**

| Option | Value | Default | What it does |
|---|---|---|---|
| `entities.wind_speed` | entity id (`sensor.*`) |  | **Wind speed sensor** |
| `entities.wind_gust_speed` | entity id (`sensor.*`) |  | **Gust sensor** |
| `entities.wind_bearing` | entity id (`sensor.*`) |  | **Wind direction sensor** |

### Wind map (Windy) — `type: wind_map`

Default size: 6 of 12 wide, 3 rows high.

| Option | Value | Default | What it does |
|---|---|---|---|
| `start_paused` | `true` / `false` | `false` | **Start paused** — Don't load the animated Windy map until you press play (Windy can't show a still image). Lighter for low-powered tablets. |
| `overlay` | `wind` · `gust` · `rain` · `temp` · `clouds` · `pressure` · `radar` · `satellite` | `wind` | **Layer** |
| `zoom` | number 3–11 | `6` | **Zoom** |
| `model` | `ecmwf` · `gfs` · `icon` · `namConus` | `ecmwf` | **Forecast model** |
| `level` | `surface` · `850h` · `700h` · `500h` · `300h` | `surface` | **Altitude** |
| `wind_unit` | `mph` · `km/h` · `kt` · `m/s` · `bft` |  | **Wind unit** — Default follows Home Assistant's unit system. |
| `marker` | `true` / `false` | `true` | **Location pin** — Pin at your location. |
| `latitude` | number |  | **Latitude** — Map center (default: home). |
| `longitude` | number |  | **Longitude** |

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

## Notes

- An OpenWeatherMap API key in the card's config can be read by anyone who can view the dashboard.
- Graph ranges of 7 days or more use long-term statistics, which Home Assistant keeps for sensors with a `state_class` (Ecowitt sensors have one).
- Panel button states are saved per browser (`remember: false` turns that off); `show: false` sets what's hidden when the dashboard loads.
- Configs from older builds keep working: the old `sky_bar`, `sun` and `sun_moon` panels become a Sky Tracker, and a top-level `hero:` block becomes the hero panel's `flex:`.
