// Wind Rose Card (aukedejong/lovelace-windrose-card) hosting for the Wind
// panel's rose view: the station's direction, speed and gust sensors go into
// a config built from a preset; anything under `windrose:` is merged on top.
// Presets follow the card's EXAMPLES.md (v2.7.0).
import { deepMerge } from "../card/config.js";

export const WINDROSE_TAG = "windrose-card";
export const hasWindrose = () => !!customElements.get(WINDROSE_TAG);

/** "auto" (Wind Rose Card when installed) | "windrose" | "builtin". */
export function roseEngine(c) {
  const e = c?.rose_engine || "auto";
  if (e === "builtin") return "builtin";
  if (e === "windrose") return "windrose";
  return hasWindrose() ? "windrose" : "builtin";
}

// Home Assistant unit -> the card's output unit name.
const OUT_UNIT = { mph: "mph", "km/h": "kph", "m/s": "mps", kn: "knot", kt: "knot", knots: "knot", "ft/s": "fps", Beaufort: "bft" };

const periodButtons = (spans, active) => ({
  location: "bottom",
  buttons: spans.map(([text, back, extra]) => ({ type: "period_selector", button_text: text, period_back: back, ...(back === active ? { active: true } : {}), ...(extra || {}) })),
});

export const WINDROSE_PRESETS = {
  standard: {
    label: "Standard — 24 h, speed bar at the side, current direction",
    build: () => ({ windspeed_bar_location: "right", data_period: { period_back: "-1d" } }),
  },
  periods: {
    label: "Period buttons — 1 h / 8 h / 1 day / 7 days",
    build: () => ({
      windspeed_bar_location: "bottom",
      buttons_config: periodButtons([["1 h", "-1h"], ["8 h", "-8h"], ["1 day", "-1d"], ["7 days", "-7d", { use_statistics: true, statistics_period: "hour" }]], "-1d"),
    }),
  },
  beaufort: {
    label: "Beaufort — speed and gust bars in Beaufort, live speed arrows",
    build: (u) => ({
      windspeed_bar_location: "bottom",
      data_period: { period_back: "-1d" },
      _speed: { speed_range_beaufort: true, current_speed_arrow: true, windspeed_bar_full: true },
      _gust: { speed_range_beaufort: true, current_speed_arrow: true, windspeed_bar_full: true, output_speed_unit: u },
    }),
  },
  corners: {
    label: "Corner info — speed, direction and gust around the rose (sygad's style)",
    build: (u, ids, unit) => ({
      windspeed_bar_location: "right",
      data_period: { period_back: "-1d" },
      rose_config: { center_circle: { text: "${calm-percentage}%" } },
      corner_info: {
        top_left: { label: "Speed", entity: ids.speed, unit: ` ${unit}`, precision: 1 },
        top_right: { label: "Direction", entity: ids.dir, input_unit: "degrees", output_unit: "letters" },
        ...(ids.gust ? { bottom_left: { label: "Gust", entity: ids.gust, unit: ` ${unit}`, precision: 1 } } : {}),
      },
    }),
  },
  stats: {
    label: "Statistics — min / max / average speed and calm % under the rose",
    build: () => ({
      windspeed_bar_location: "right",
      data_period: { period_back: "-1d" },
      text_blocks: {
        bottom: {
          ...statsBlock({}),
        },
      },
    }),
  },
  playback: {
    label: "Playback — step through the last 10 days (hourly statistics)",
    build: () => ({
      windspeed_bar_location: "right",
      buttons_config: {
        location: "bottom",
        buttons: [
          { type: "period_shift", button_text: "−12 h", shift_period: "-12h" },
          { type: "period_selector", button_text: "24 h", period_back: "-1d", active: true },
          { type: "period_shift", button_text: "+12 h", shift_period: "+12h" },
          { type: "period_shift_play", button_text: "▶ 10 days", period_back: "-10d", window_period: "-1d", step_period: "+3h", delay: 150, use_statistics: true, statistics_period: "hour" },
        ],
      },
    }),
  },
  minimal: {
    label: "Minimal — the rose only",
    build: () => ({ hide_windspeed_bar: true, data_period: { period_back: "-1d" }, direction_labels: { show_intercardinal_directions: false } }),
  },
};

const STATS = { min: ["Min", "min-speed"], avg: ["Avg", "average-speed"], max: ["Max", "max-speed"], median: ["Median", "median-speed"], p90: ["P90", "p90-speed"], calm: ["Calm", "calm-percentage", "%"] };
const STATS_DEFAULT = ["min", "avg", "max", "p90", "calm"];

/** Statistics line for the card's text block, from the chosen parts and style. */
export function statsBlock(c) {
  const items = (Array.isArray(c?.stats_items) && c.stats_items.length ? c.stats_items : STATS_DEFAULT).filter((k) => STATS[k]);
  // The card fills in "${name}" placeholders.
  const text = items.map((k) => STATS[k][0] + " ${" + STATS[k][1] + "}" + (STATS[k][2] || "")).join(" · ");
  const style = [c?.stats_weight && c.stats_weight !== "400" ? `font-weight:${Number(c.stats_weight)}` : "", c?.stats_align && c.stats_align !== "left" ? `text-align:${c.stats_align}` : ""].filter(Boolean).join(";");
  const w = style ? `<div style="${style}">${text}</div>` : text;
  return { text: w, text_size: Number(c?.stats_size) || 13, text_color: c?.stats_color || "var(--secondary-text-color)" };
}

/**
 * Panel options that override the preset ("preset" / unset = keep the preset's).
 *   wr_bars: right | bottom | hidden      wr_corners: on | off
 *   wr_stats: top | bottom | off          wr_buttons: periods | playback | none
 *   wr_buttons_position: top | bottom     wr_period: -1h | -8h | -1d | -7d | -30d
 *   wr_beaufort: on | off                 wr_arrow: false hides the direction arrow
 */
const CORNERS = ["top_left", "top_right", "bottom_left", "bottom_right"];

/** Corner info with each reading in its chosen corner (or hidden). */
export function cornerInfo(c, ids, unit) {
  const items = {
    speed: { label: "Speed", entity: ids.speed, unit: ` ${unit}`, precision: 1 },
    direction: { label: "Direction", entity: ids.dir, input_unit: "degrees", output_unit: "letters" },
    gust: ids.gust ? { label: "Gust", entity: ids.gust, unit: ` ${unit}`, precision: 1 } : null,
  };
  const place = { speed: c?.corner_speed || "top_left", direction: c?.corner_direction || "top_right", gust: c?.corner_gust || "bottom_left" };
  const out = {};
  for (const [k, item] of Object.entries(items)) {
    const at = place[k];
    if (!item || !CORNERS.includes(at) || out[at]) continue;
    out[at] = { ...item, ...(c?.corner_label_size ? { label_text_size: Number(c.corner_label_size) } : {}), ...(c?.corner_value_size ? { value_text_size: Number(c.corner_value_size) } : {}), ...(c?.corner_color ? { color: c.corner_color } : {}) };
  }
  return out;
}

export function applyOverrides(card, c, ids, unit) {
  const set = (v) => v != null && v !== "" && v !== "preset";
  if (set(c.wr_bars)) {
    if (c.wr_bars === "hidden") card.hide_windspeed_bar = true;
    else { delete card.hide_windspeed_bar; card.windspeed_bar_location = c.wr_bars; }
  }
  // Corner placement / style also re-builds a preset's corner info.
  if (card.corner_info && !set(c.wr_corners) && (c.corner_speed || c.corner_direction || c.corner_gust || c.corner_label_size || c.corner_value_size || c.corner_color)) card.corner_info = cornerInfo(c, ids, unit);
  if (set(c.wr_corners)) {
    if (c.wr_corners === "off") delete card.corner_info;
    else card.corner_info = cornerInfo(c, ids, unit);
  }
  if (set(c.wr_stats)) {
    delete card.text_blocks;
    if (c.wr_stats !== "off") card.text_blocks = { [c.wr_stats]: statsBlock(c) };
  } else if (card.text_blocks) {
    // The preset's statistics line, in the chosen parts and style.
    for (const k of Object.keys(card.text_blocks)) card.text_blocks[k] = statsBlock(c);
  }
  if (set(c.wr_buttons)) {
    if (c.wr_buttons === "none") delete card.buttons_config;
    else card.buttons_config = { ...WINDROSE_PRESETS[c.wr_buttons].build().buttons_config };
  }
  if (card.buttons_config && set(c.wr_buttons_position)) card.buttons_config = { ...card.buttons_config, location: c.wr_buttons_position };
  if (set(c.wr_period)) {
    // A default period: the matching period button becomes the active one.
    const btns = card.buttons_config?.buttons;
    const sel = btns?.filter((b) => b.type === "period_selector");
    if (sel?.length) {
      const hit = sel.find((b) => b.period_back === c.wr_period);
      if (hit) card.buttons_config = { ...card.buttons_config, buttons: btns.map((b) => (b.type === "period_selector" ? { ...b, active: b === hit } : b)) };
      else card.data_period = { period_back: c.wr_period };
    } else card.data_period = { period_back: c.wr_period };
  }
  // Colour bands: the card colours each speed range (blue → red); more, smaller
  // ranges and the full scale give the full colour bar.
  if (set(c.wr_bar_full)) card.windspeed_entities = card.windspeed_entities.map((e) => ({ ...e, windspeed_bar_full: c.wr_bar_full === "on" }));
  if (c.wr_range_step || c.wr_range_max || c.wr_gust_max) {
    card.windspeed_entities = card.windspeed_entities.map((e, i) => {
      if (e.speed_range_beaufort) return e;
      const max = i === 0 ? c.wr_range_max : c.wr_gust_max || c.wr_range_max;
      return { ...e, ...(c.wr_range_step ? { speed_range_step: Number(c.wr_range_step) } : {}), ...(max ? { speed_range_max: Number(max) } : {}) };
    });
  }
  if (set(c.wr_beaufort)) {
    const on = c.wr_beaufort === "on";
    card.windspeed_entities = card.windspeed_entities.map((e) => ({ ...e, speed_range_beaufort: on, ...(on ? { current_speed_arrow: true } : {}) }));
  }
  // Arrow sizes are always written out (the slider's value, or its default), so
  // a preset or the Wind Rose Card's own defaults can't make them differ from
  // what the slider shows.
  const size = (v, d) => Math.max(10, Math.min(240, Number(v ?? d) || d));
  if (c.wr_arrow === false) card.current_direction = { ...(card.current_direction || {}), show_arrow: false };
  else card.current_direction = { ...(card.current_direction || {}), show_arrow: true, arrow_size: size(c.wr_arrow_size, 50) };
  if (c.wr_arrow_color) card.colors = { ...(card.colors || {}), rose_current_direction_arrow: c.wr_arrow_color };
  card.windspeed_entities = card.windspeed_entities.map((e) => ({
    ...e,
    ...(set(c.wr_speed_arrows) ? { current_speed_arrow: c.wr_speed_arrows === "on" } : {}),
    current_speed_arrow_size: size(c.wr_speed_arrow_size, 40),
  }));
  return card;
}

/** Wind Rose Card config for a Wind panel (ids from Weather Sources). */
export function windroseCard(c, ids, unit) {
  const out = OUT_UNIT[unit] || "mph";
  const preset = WINDROSE_PRESETS[c?.windrose_preset] || WINDROSE_PRESETS.standard;
  const { _speed, _gust, ...p } = preset.build(out, ids, unit);
  // Bars in the sensor's unit, labelled as Home Assistant shows it (the card says "m/h" for mph).
  const base = { speed_unit: "auto", output_speed_unit: out, output_speed_unit_label: unit || undefined, speed_range_beaufort: false, windspeed_bar_full: false };
  const card = {
    type: `custom:${WINDROSE_TAG}`,
    refresh_interval: 300,
    wind_direction_entity: { entity: ids.dir },
    windspeed_entities: [
      { entity: ids.speed, name: "Speed", ...base, ...(_speed || {}) },
      ...(ids.gust ? [{ entity: ids.gust, name: "Gust", ...base, use_for_windrose: false, ...(_gust || {}) }] : []),
    ],
    current_direction: { show_arrow: true },
    matching_strategy: { name: "full-time" },
    ...p,
  };
  applyOverrides(card, c || {}, ids, unit);
  const merged = deepMerge(card, c?.windrose || {});
  // Beaufort bars: let the card label them "Beaufort", not the speed unit.
  merged.windspeed_entities = (merged.windspeed_entities || []).map((e) => {
    if (!e.speed_range_beaufort || (c?.windrose?.windspeed_entities || []).some((x) => x?.output_speed_unit_label)) return e;
    const { output_speed_unit_label: _l, ...rest } = e;
    return rest;
  });
  // The card refuses data_period together with an active period button.
  if (merged.buttons_config?.buttons?.some((b) => b.type === "period_selector" && b.active)) delete merged.data_period;
  return merged;
}
