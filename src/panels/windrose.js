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
          text: "Min ${min-speed} · Avg ${average-speed} · Max ${max-speed} · P90 ${p90-speed} · Calm ${calm-percentage}%",
          text_size: 13,
          text_color: "var(--secondary-text-color)",
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
  const merged = deepMerge(card, c?.windrose || {});
  // The card refuses data_period together with an active period button.
  if (merged.buttons_config?.buttons?.some((b) => b.type === "period_selector" && b.active)) delete merged.data_period;
  return merged;
}
