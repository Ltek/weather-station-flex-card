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
| `background_effects` | list of: `rain` · `snow` · `lightning` · `sky` · `moon` · `sun` · `cloud` · `fog` · `hail` · `wind` · `exceptional` | `["rain","snow","lightning","sky","moon","sun","cloud","fog","hail","wind","exceptional"]` | **Animation effects** — Which effects the weather animation draws. At night it shows the dark sky and the moon instead of the sun. Rain, snow and storms get an overcast sky and cloud deck (Sky, Clouds). |
| `background_moon_phase` | `true` / `false` | `true` | **Show moon phase** — Shade the night-time moon to the current lunar phase (off: a full moon). |
| `anim_low_power` | `true` / `false` | `false` | **Low-power animation** — For tablets and other low-powered screens: no panel blur while the background animates, each cloud drawn once on its own, and simpler cloud edges. Smoother drift; clouds look a little softer. |
| `anim_twinkle` | number 10–150 % | `100` | **Star twinkle** — Animation speeds (100% = normal, 50% = half as fast), for the card background and the hero's own animation. |
| `anim_clouds` | number 10–150 % | `100` | **Cloud drift** |
| `anim_rain` | number 10–150 % | `100` | **Rain** |
| `anim_snow` | number 10–150 % | `100` | **Snow** |
| `anim_sun` | number 10–150 % | `100` | **Sun rays** |
| `anim_lightning` | number 10–150 % | `100` | **Lightning** |
| `anim_fog` | number 10–150 % | `100` | **Fog drift** |
| `anim_hail` | number 10–150 % | `100` | **Hail** |
| `anim_wind` | number 10–150 % | `100` | **Wind gusts** |
| `background_image` | image (uploaded through the editor) |  | **Background image** — Image background: upload a PNG, JPG, WEBP… or pick one from your media. |
| `background_image_url` | URL |  | **Background image URL** — Image background: or an image URL (wins over the upload), e.g. /local/images/sky.jpg. |
| `background_image_fit` | `cover` · `contain` · `tile` | `cover` | **Image fit** |
| `background_dim` | number 0–0.9 | `0.25` | **Darken image** — Image background: darken it so text stays readable (0 = off). |

### Panels

| Option | Value | Default | What it does |
|---|---|---|---|
| `panel_opacity` | number 0–1 | `0.55` | **Panel opacity** — With a card background: panel opacity (0 = fully transparent, 1 = solid). Default 0.55. |
| `panel_blur` | number 0–30 px | `6` | **Panel blur** — With a card background: blur behind panels. Default 6 (off with Low-power animation). |
| `panel_radius` | number 0–40 px |  | **Corner radius** — Auto: your theme's card corner radius (shown above). Move the slider to set your own; × goes back to Auto. |
| `panel_shadow` | `none` · `soft` · `medium` · `strong` | `none` | **Shadow** |
| `panel_border_width` | number 0–6 px |  | **Border width** — Border (default none). |
| `panel_border_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Border color** — Not set: the theme's divider color. |
| `panel_glow` | `true` / `false` | `false` | **Glow** — A soft glow around each panel. |
| `panel_glow_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Glow color** — Not set: the border color, else the theme's primary color. |
| `panel_glow_size` | number 2–40 px | `10` | **Glow size** |

### Screen fit & sizing

| Option | Value | Default | What it does |
|---|---|---|---|
| `layout` | `auto` · `fullscreen` | `auto` | **Layout** |
| `fit_height` | `true` / `false` | `true` | **Fit panels to the screen height** — Full screen: panels with a height share the screen height (row height is calculated). |
| `auto_fit` | `true` / `false` | `false` | **Auto-fit to the screen** — The layout and sizes you set are the design, for the Screen guide's size (Layout Map → Screen guide). Every screen shows that design scaled to fit: rows share the screen height, the layout stays as designed until the screen is phone-narrow, and each panel's contents scale with the screen — smaller where they'd still overflow. Full screen recommended. |
| `auto_fit_min` | number 30–100 % | `60` | **Smallest content scale** — Below this a panel scrolls instead, so text stays readable. |
| `auto_fit_max` | number 100–250 % | `150` | **Largest content scale** — On screens bigger than the design. |
| `fit_strict` | `true` / `false` | `false` | **Strict fit to screen dimensions** — Every panel is exactly the height you set, so the page fits the screen as the layout map shows; content taller than its panel scrolls inside the panel. Off: panels grow to fit their content (the page may scroll). |
| `panel_overflow` | `grow` · `scroll` | `grow` | **When a panel's content doesn't fit** — For panels with a set height (Height above 0); each panel can override this. Scroll locks every panel to its size in any layout; Strict fit does the same in full screen. |
| `layout_size` | `auto` · `wide` · `medium` · `narrow` | `auto` | **Layout size** — In a Sections view the card is only as wide as its section; widen the section or use a Panel view for the desktop layout. |
| `row_height` | number 40–300 px |  | **Row height** — Height of one row unit (default 110). |
| `gap` | number 0–32 px |  | **Gap** — Space between panels (default 12). |

### Alerts bar

| Option | Value | Default | What it does |
|---|---|---|---|
| `alerts_bar` | `true` / `false` | `false` | **Alerts bar** — A thin row at the top that appears only while something needs attention: heat or frost (the Frost & heat watch rules), lightning within 10 miles in the last 30 minutes, and weather alerts. Tap one to open its panel. |
| `alerts_watch` | `true` / `false` | `true` | **Heat and frost** |
| `alerts_lightning` | `true` / `false` | `true` | **Lightning nearby** |
| `alerts_entity` | entity id (`sensor.*`) |  | **Weather alerts sensor** — Optional, e.g. the NWS Alerts integration's sensor (its Alerts attribute). |

### Collapsed panels

| Option | Value | Default | What it does |
|---|---|---|---|
| `collapsed_view` | `minimal` · `compact` | `minimal` | **Default view when collapsed** — For panels with Collapse button on; panels without a tiles view use Minimal. Each panel can override it — Convert all now clears those overrides. |
| `collapsed_open` | `auto` · `inplace` · `overlay` · `popup` | `auto` | **A folded panel opens** — Each panel can override this (Collapse → Opens). |
| `open_icon_small` | `picture-in-picture-top-right` · `open-in-new` · `resize` · `image-size-select-large` · `dock-window` · `custom` | `picture-in-picture-top-right` | **Small pop-over icon** — On a folded panel that opens over the others. |
| `open_icon_small_custom` | icon, e.g. `mdi:weather-windy` |  | **Custom icon** — Any Home Assistant icon, e.g. mdi:arrow-expand-down. |
| `open_icon_full` | `arrow-expand` · `fullscreen` · `arrow-expand-all` · `custom` | `arrow-expand` | **Full-size icon** — Expand to the whole card, tap-to-open tiles and panels that open as a pop-up. |
| `open_icon_full_custom` | icon, e.g. `mdi:weather-windy` |  | **Custom icon** — Any Home Assistant icon, e.g. mdi:arrow-expand-down. |
| `collapse_title_tap` | `true` / `false` | `true` | **Tap the title to fold / unfold** — For panels with Collapse button on (each panel can override this). |
| `show_collapse_hint` | `true` / `false` | `false` | **Hint under the title while folded** — e.g. "Tap title to show" (off by default: the open button already says it). |
| `collapse_hint` | text |  | **Hint text** — Default "Tap title to show". |
| `collapsed_info` | `summary` · `off` | `summary` | **Info in the header while folded** |
| `expanded_icon_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Title icon color** — Not set: the theme's normal title icon colour. |
| `expanded_text_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Title text color** — Not set: the theme's text colour. |
| `collapsed_icon_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Folded icon color** — Not set: the same as the title icon colour. |
| `collapsed_text_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Folded title color** — Not set: the same as the title text colour. |

### Panel buttons

| Option | Value | Default | What it does |
|---|---|---|---|
| `remember` | `true` / `false` | `true` | **Remember Panel Button States** — Keep which panels were shown or hidden with the panel buttons after a refresh, in each browser. Off: every load starts from the panels' Shown setting (the eye icon). |

Where the buttons go: `panel_bar: false` hides the bar; a Button Menu panel (`heading`) with `show_bar: true` holds them instead of the row above the panels. Which panels get a button is each panel's `in_bar`.

## Options every panel takes

| Option | Value | Default | What it does |
|---|---|---|---|
| `display` | `grid` · `tile_popup` · `popup` |  | **Location** |
| `span` | number 1–12 |  | **Width** — Width in twelfths of the card. |
| `rows` | number 0–10 |  | **Height** — Height in row units, in half steps (0 = fit content, 0.5 = half height). |
| `overflow` | `default` · `grow` · `scroll` | `default` | **When the content doesn't fit** — Scroll needs a height of at least 1 row (it is raised to 1 when you pick Scroll). |
| `compact` | `true` / `false` | `false` | **Compact view** — Show this panel as one row of small tiles with all its data; tapping it opens the full panel (see Collapse → Opens). |
| `content_scale` | number 40–200 % | `100` | **Scale all Panel Contents** — Everything inside the panel bigger or smaller (text, icons, tiles), so it fits the space. |
| `collapsible` | `true` / `false` | `false` | **Collapse button** — Fold the panel down to its title header to save space (e.g. maps). A folded map is paused. With Remember Panel Button States, this browser remembers what you folded. |
| `collapsed` | `true` / `false` | `false` | **Start collapsed** |
| `collapsed_open` | `default` · `inplace` · `overlay` · `popup` | `default` | **Opens** |
| `collapsed_view` | `default` · `minimal` · `compact` | `default` | **View when collapsed** |
| `compact_expand` | `true` / `false` | `true` | **Tap the tiles to open the full panel** — Compact view. Off: a tap on a tile opens that sensor (the fold button still opens the panel). |
| `compact_icon` | `true` / `false` | `true` | **Show the icon in the tiles row** |
| `compact_title` | `true` / `false` | `true` | **Show the title in the tiles row** |
| `collapse_title_tap` | `default` · `on` · `off` | `default` | **Tap the title to fold / unfold** |
| `show_collapse_hint` | `default` · `on` · `off` | `default` | **Hint under the title while folded** |
| `collapse_hint` | text |  | **Hint text** — Default "Tap title to show". |
| `collapsed_info` | `default` · `summary` · `entity` · `off` | `default` | **Info in the header while folded** |
| `collapsed_entity` | entity id |  | **Entity to show** — Its value in the folded header (used by "An entity's value", and instead of the summary when set). |
| `collapsed_label` | text |  | **Label before the value** |
| `expanded_icon_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Title icon color** — Not set: the theme's normal title icon colour. |
| `expanded_text_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Title text color** — Not set: the theme's text colour. |
| `collapsed_icon_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Folded icon color** — Not set: the same as the title icon colour. |
| `collapsed_text_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Folded title color** — Not set: the same as the title text colour. |
| `show_title` | `true` / `false` | `true` | **Show the title** |
| `title` | text |  | **Title** |
| `show_icon` | `true` / `false` | `true` | **Show the title icon** |
| `icon` | icon, e.g. `mdi:weather-windy` |  | **Icon** |
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
| `grow` | number 0–6 |  | **Share of the stack** — How much of the stack's space this panel takes, compared with the others. Side-by-side stack: its share of the width (default 1; 2 = twice as wide as a 1). Stack one above the other: its share of the leftover height (0 = only as tall as its content; default 1 when it has a height or the stack fills its panel, else 0). Panels hidden by their buttons give their share to the others. |
| `min_width` | number 80–800 px |  | **Narrowest width** — Side-by-side stack: the narrowest this panel gets before the stack wraps it onto a new line (default 180 px). |
| `rows` | number 0–10 |  | **Height** — Vertical: minimum height in row units (half steps allowed). |
| `compact` | `true` / `false` | `false` | **Compact view** — Show this panel as one row of small tiles with all its data; tapping it opens the full panel. |
| `collapsible` | `true` / `false` | `false` | **Collapse button** — Fold the panel down to its title header to save space (e.g. maps). A folded map is paused. With Remember Panel Button States, this browser remembers what you folded. |
| `collapsed` | `true` / `false` | `false` | **Start collapsed** |
| `collapsed_open` | `default` · `inplace` · `overlay` · `popup` | `default` | **Opens** |
| `collapsed_view` | `default` · `minimal` · `compact` | `default` | **View when collapsed** |
| `compact_expand` | `true` / `false` | `true` | **Tap the tiles to open the full panel** — Compact view. Off: a tap on a tile opens that sensor (the fold button still opens the panel). |
| `compact_icon` | `true` / `false` | `true` | **Show the icon in the tiles row** |
| `compact_title` | `true` / `false` | `true` | **Show the title in the tiles row** |
| `collapse_title_tap` | `default` · `on` · `off` | `default` | **Tap the title to fold / unfold** |
| `show_collapse_hint` | `default` · `on` · `off` | `default` | **Hint under the title while folded** |
| `collapse_hint` | text |  | **Hint text** — Default "Tap title to show". |
| `collapsed_info` | `default` · `summary` · `entity` · `off` | `default` | **Info in the header while folded** |
| `collapsed_entity` | entity id |  | **Entity to show** — Its value in the folded header (used by "An entity's value", and instead of the summary when set). |
| `collapsed_label` | text |  | **Label before the value** |
| `expanded_icon_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Title icon color** — Not set: the theme's normal title icon colour. |
| `expanded_text_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Title text color** — Not set: the theme's text colour. |
| `collapsed_icon_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Folded icon color** — Not set: the same as the title icon colour. |
| `collapsed_text_color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Folded title color** — Not set: the same as the title text colour. |
| `show_title` | `true` / `false` | `true` | **Show the title** |
| `title` | text |  | **Title** |
| `show_icon` | `true` / `false` | `true` | **Show the title icon** |
| `icon` | icon, e.g. `mdi:weather-windy` |  | **Icon** |
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
| `fit` | `true` / `false` | `true` | **Fit to the panel** — With a set height: everything scales so the hero fills its panel (no empty space below, nothing cut off) — a 0.5-row hero shrinks to fit; one next to a taller panel grows. Off: sizes follow the width only, and the hero sets its own height. |
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

### Air dryness (VPD) — `type: vpd`

Default size: 4 of 12 wide, fits its content.

| Option | Value | Default | What it does |
|---|---|---|---|
| `entity` | entity id (`sensor.*`) |  | **VPD sensor** — Default: the station's own VPD sensor, else worked out from temperature and humidity. |
| `show_plant` | `true` / `false` | `true` | **Plant picture** |
| `show_advice` | `true` / `false` | `true` | **Garden advice** — What the reading means this season. |
| `show_scale` | `true` / `false` | `true` | **Colour scale** |
| `show_note` | `true` / `false` | `true` | **Explanation** |
| `content_width` | number 30–200 % | `100` | **Horizontal spacing** |
| `content_height` | number 30–200 % | `100` | **Vertical spacing** |

### Air quality — `type: air_quality`

Default size: 4 of 12 wide, fits its content.

| Option | Value | Default | What it does |
|---|---|---|---|
| `layout` | `compact` · `scale` · `rows` · `bars` · `tiles` | `scale` | **Layout** |
| `pollutants` | list of: `pm2_5` · `pm10` · `ozone` · `co2` |  | **Pollutants** — Default: all that are found. |
| `extra` | mapping / list |  | **More readings** — More readings, e.g. - entity: sensor.erie_benzene with optional label, icon and thresholds: [moderate, elevated, high, very high] in the sensor's unit. Benzene and CO₂ have built-in thresholds. |
| `tile_fill` | `true` / `false` | `false` | **Stretch tiles to fill the width** — Off: each tile is as wide as what's in it. |
| `content_width` | number 30–200 % | `100` | **Horizontal spacing** — Width of tiles, chips and the gaps between columns. |
| `content_height` | number 30–200 % | `100` | **Vertical spacing** — Row height, padding and the gaps between rows. |
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

### Frost & heat watch — `type: frost_watch`

Default size: 4 of 12 wide, fits its content.

| Option | Value | Default | What it does |
|---|---|---|---|
| `use_forecast` | `true` / `false` | `true` | **Use tonight's forecast low** — Also warn about frost later tonight (lowest hourly forecast in the next 18 hours). |
| `show_note` | `true` / `false` | `true` | **Unofficial note** |
| `heat_danger` | number |  | **Heat danger at feels-like** — In your temperature unit. Default 103 °F / 39 °C. |
| `heat_caution` | number |  | **Heat caution at feels-like** — Default 90 °F / 32 °C. |
| `frost_temp` | number |  | **Frost possible at or below** — Air temperature, any time. Default 36 °F / 2 °C. |
| `frost_night_temp` | number |  | **Calm, dry night: frost at or below** — With a dew point at or below freezing and light wind. Default 41 °F / 5 °C. |
| `frost_low` | number |  | **Frost tonight when the low is at or below** — Default 34 °F / 1 °C. |

### Frost & the garden — `type: garden`

Default size: 4 of 12 wide, fits its content.

| Option | Value | Default | What it does |
|---|---|---|---|
| `show_outlook` | `true` / `false` | `true` | **Frost outlook (next nights)** |
| `outlook_source` | `forecast` · `open_meteo` | `forecast` | **Outlook from** |
| `show_season` | `true` / `false` | `true` | **Frost this season** |
| `show_gdd` | `true` / `false` | `true` | **Growing degree days** |
| `show_soil` | `true` / `false` | `true` | **Soil temperature and moisture** — The station's soil sensors, else the Soil Temperature integration, else Open-Meteo. |
| `show_water` | `true` / `false` | `true` | **Water balance (last 7 days)** |
| `open_meteo` | `true` / `false` | `true` | **Use Open-Meteo** — Forecast lows, soil and evapotranspiration for your location (free, no key). |
| `area_source` | `auto` · `coagmet` · `open_meteo` · `off` | `auto` | **Area data from** |
| `soil_temperature_entity` | entity id (`sensor.*`) |  | **Soil temperature sensor** |
| `soil_moisture_entity` | entity id (`sensor.*`) |  | **Soil moisture sensor** |
| `content_width` | number 30–200 % | `100` | **Horizontal spacing** |
| `content_height` | number 30–200 % | `100` | **Vertical spacing** |

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

### Lightning — `type: lightning`

Default size: 4 of 12 wide, fits its content.

| Option | Value | Default | What it does |
|---|---|---|---|
| `near_km` | number 1–40 | `16` | **Warn within (km)** — Default 16 km (10 miles). |
| `near_minutes` | number 5–120 | `30` | **…for (minutes after a strike)** |
| `hide_when_zero` | `true` / `false` | `false` | **Hide the panel when there are no strikes** — Hidden while the strike count is 0 (Ecowitt counts strikes per day). |
| `show_battery` | `true` / `false` | `true` | **Sensor battery** |
| `show_note` | `true` / `false` | `true` | **Note** |
| `distance_entity` | entity id (`sensor.*`) |  | **Distance sensor** — Found on its own (e.g. Ecowitt WH57). |
| `count_entity` | entity id (`sensor.*`) |  | **Strikes sensor** |
| `time_entity` | entity id (`sensor.*`) |  | **Last strike time sensor** |

### Metric tile — `type: metric`

Default size: 2 of 12 wide, 2 rows high.

| Option | Value | Default | What it does |
|---|---|---|---|
| `metric` | `temperature` · `apparent_temperature` · `dew_point` · `humidity` · `pressure` · `wind_speed` · `wind_gust_speed` · `uv_index` · `solar_radiation` · `illuminance` · `rain_rate` · `rain_today` · `rain_24h` · `rain_event` · `rain_hour` · `rain_week` · `rain_month` · `rain_year` · `lightning_distance` · `lightning_count` · `lightning_time` · `soil_moisture` · `soil_temperature` · `battery` · `battery_voltage` · `capacitor` · `signal` · `signal_quality` · `rssi` · `online` · `hardware_id` · `vpd` · `indoor_temperature` · `aqi` · `pm2_5` · `pm10` · `ozone` · `co2` · `indoor_humidity` |  | **Metric** — Resolved through Weather Sources; set an entity to use any sensor instead. |
| `entity` | entity id |  | **Sensor** |
| `label` | text |  | **Label** |
| `color` | color: `#rrggbb`, `var(--primary-color)`, any CSS color |  | **Color** — Not set: the metric's color. |
| `digits` | number 0–3 |  | **Decimals** |
| `chart` | `line` · `bar` · `none` |  | **Sparkline** |
| `hours` | number 1–168 |  | **Sparkline hours** — Sparkline hours (default 24). |
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
| `content_width` | number 30–200 % | `100` | **Horizontal spacing** — Width of tiles, chips and the gaps between columns. |
| `content_height` | number 30–200 % | `100` | **Vertical spacing** — Row height, padding and the gaps between rows. |
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

### Rain totals — `type: rain`

Default size: 4 of 12 wide, fits its content.

| Option | Value | Default | What it does |
|---|---|---|---|
| `show_rows` | list of: `rain_rate` · `rain_hour` · `rain_today` · `rain_24h` · `rain_event` · `rain_week` · `rain_month` · `rain_year` · `last_rain` |  | **Rows** — In this order. Week, month and year come from Home Assistant's history when the station has no sensor for them. |
| `show_normal` | `true` / `false` | `true` | **Against the normal** — This month and year so far against the area's normal (CoAgMET or Open-Meteo). |
| `area_source` | `auto` · `coagmet` · `open_meteo` · `off` | `auto` | **Area data from** |
| `content_width` | number 30–200 % | `100` | **Horizontal spacing** |
| `content_height` | number 30–200 % | `100` | **Vertical spacing** |

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
| `spacing` | `fill` · `spread` · `center` · `top` | `fill` | **Spare height** — When the stack is taller than its panels (e.g. compact rows of tiles): where the spare height goes. |
| `compact_max_scale` | number 100–400 % | `250` | **Largest compact size** — How large compact rows may grow (they also stop when the widest row runs out of room). |
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

### Weather records — `type: records`

Default size: 4 of 12 wide, fits its content.

| Option | Value | Default | What it does |
|---|---|---|---|
| `show_station` | `true` / `false` | `true` | **This station's records** — From Home Assistant's long-term statistics (temperature, gust, rain today); grows as history builds up. |
| `show_today` | `true` / `false` | `true` | **Records for today's date** |
| `show_month` | `true` / `false` | `true` | **Records for this month** |
| `show_all_time` | `true` / `false` | `true` | **All-time area records** |
| `show_badge` | `true` / `false` | `true` | **Record badge** — A badge when today beats the area record for its date. |
| `show_source` | `true` / `false` | `true` | **Source line** |
| `area_source` | `auto` · `coagmet` · `open_meteo` · `off` | `auto` | **Area records from** |
| `records_entity` | entity id (`sensor.*`) |  | **Area records sensor** — Found on its own: the sensor from the coagmet_records package (CoAgMET / Northern Water, Colorado). |

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
| `chart_mode` | `inline` · `popover` | `inline` | **Show the chart** — Pop-over: the panel shows just the compass or rose; the chart opens on demand (tap outside, the button or Esc closes it). |
| `chart_popover_height` | number 120–500 px | `220` | **Pop-over height** |
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
| `wr_stats` | `preset` · `top` · `bottom` · `off` | `preset` | **Min / avg / max** |
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
