// Sun & moon facts shared by the Hero, Sky Tracker and Astronomy panels:
// one list of values, each with its own show/hide checkbox, and one style for
// all labels and one for all values.
import { html, css, nothing } from "lit";
import * as SunCalc from "suncalc";
import { moonInfo } from "../card/astro.js";
import { moonSvg } from "./sun-moon.js";

const opt = (pairs) => pairs.map(([value, label]) => ({ value, label }));

export const FACTS = [
  ["dawn", "Dawn"],
  ["sunrise", "Sunrise"],
  ["solar_noon", "Solar noon"],
  ["sunset", "Sunset"],
  ["dusk", "Dusk"],
  ["day_length", "Length of day"],
  ["visible_light", "Visible light"],
  ["moonrise", "Moonrise"],
  ["moonset", "Moonset"],
  ["moon_phase", "Moon phase"],
  ["moon_illumination", "Illumination"],
  ["next_full", "Next full moon"],
  ["next_new", "Next new moon"],
];
export const ALL_FACTS = FACTS.map(([k]) => k);

const valid = (d) => d instanceof Date && !isNaN(d);
const hm = (ms) => (ms == null || !isFinite(ms) ? "—" : `${Math.floor(ms / 3600e3)}h ${String(Math.round((ms % 3600e3) / 60e3)).padStart(2, "0")}m`);

/**
 * Editor fields for a panel's facts. `defaults` is the list shown when the user
 * hasn't chosen; `on` is whether the block shows by default.
 */
export function factsFields(defaults = ALL_FACTS, on = false) {
  // Form data already holds the default, so the checkbox state is d.show_facts.
  const when = (d) => !!d.show_facts;
  const weights = opt([["400", "Regular"], ["500", "Medium"], ["700", "Bold"]]);
  return [
    { name: "show_facts", label: "Show sun & moon facts", selector: { boolean: {} }, default: on },
    { name: "facts", label: "Facts", when, selector: { select: { multiple: true, options: opt(FACTS) } }, default: defaults },
    { name: "fact_moon_size", label: "Moon image size", when: (d) => when(d) && (d.facts || defaults).includes("moon_phase"), selector: { number: { min: 16, max: 160, step: 2, mode: "slider", unit_of_measurement: "px" } }, default: 36 },
    { name: "fact_label_size", label: "Label size", when, selector: { number: { min: 8, max: 32, mode: "slider", unit_of_measurement: "px" } }, default: 11 },
    { name: "fact_label_weight", label: "Label weight", when, selector: { select: { options: weights } }, default: "400" },
    { name: "fact_label_color", label: "Label color", when, selector: { text: {} }, helper: "Not set: secondary text." },
    { name: "fact_value_size", label: "Value size", when, selector: { number: { min: 8, max: 40, mode: "slider", unit_of_measurement: "px" } }, default: 13 },
    { name: "fact_value_weight", label: "Value weight", when, selector: { select: { options: weights } }, default: "400" },
    { name: "fact_value_color", label: "Value color", when, selector: { text: {} }, helper: "Not set: primary text." },
  ];
}

/** Values for today at the Home Assistant location (exported for tests). */
export function factValues(hass, now = new Date()) {
  const { latitude: lat, longitude: lon } = hass?.config || {};
  if (lat == null) return null;
  const noon = new Date(now); noon.setHours(12, 0, 0, 0);
  const t = SunCalc.getTimes(noon, lat, lon);
  const y = new Date(noon); y.setDate(y.getDate() - 1);
  const ty = SunCalc.getTimes(y, lat, lon);
  const moon = moonInfo(hass, now);
  const tf = new Intl.DateTimeFormat(hass?.locale?.language, { hour: "numeric", minute: "2-digit" });
  const df = new Intl.DateTimeFormat(hass?.locale?.language, { weekday: "short", month: "short", day: "numeric" });
  const f = (d) => (valid(d) ? tf.format(d) : "—");
  const dayLen = valid(t.sunset) && valid(t.sunrise) ? t.sunset - t.sunrise : null;
  const dayLenY = valid(ty.sunset) && valid(ty.sunrise) ? ty.sunset - ty.sunrise : null;
  const delta = dayLen != null && dayLenY != null ? Math.round((dayLen - dayLenY) / 60e3) : null;
  return {
    dawn: f(t.dawn),
    sunrise: f(t.sunrise),
    solar_noon: f(t.solarNoon),
    sunset: f(t.sunset),
    dusk: f(t.dusk),
    day_length: hm(dayLen),
    day_change: delta == null ? "" : `${delta >= 0 ? "+" : "−"}${Math.abs(delta)}m`,
    visible_light: hm(valid(t.dusk) && valid(t.dawn) ? t.dusk - t.dawn : null),
    moonrise: moon.alwaysUp ? "up all day" : moon.alwaysDown ? "down all day" : f(moon.rise),
    moonset: moon.alwaysUp || moon.alwaysDown ? "—" : f(moon.set),
    moon_phase: moon.name,
    moon_phase_value: moon.phase,
    moon_illumination: `${Math.round(moon.fraction * 100)}%`,
    next_full: moon.nextFull ? df.format(moon.nextFull) : "—",
    next_new: moon.nextNew ? df.format(moon.nextNew) : "—",
  };
}

/** The facts block for a panel config (nothing when it's off). */
export function renderFacts(hass, c, defaults = ALL_FACTS, on = false) {
  if (!(on ? c?.show_facts !== false : c?.show_facts === true)) return nothing;
  const v = factValues(hass);
  if (!v) return nothing;
  const keys = (Array.isArray(c?.facts) ? c.facts : defaults).filter((k) => FACTS.some(([x]) => x === k));
  if (!keys.length) return nothing;
  const label = Object.fromEntries(FACTS);
  const style = [
    c.fact_label_size ? `--fl-size:${Number(c.fact_label_size)}px` : "",
    c.fact_label_weight ? `--fl-weight:${c.fact_label_weight}` : "",
    c.fact_label_color ? `--fl-color:${c.fact_label_color}` : "",
    c.fact_value_size ? `--fv-size:${Number(c.fact_value_size)}px` : "",
    c.fact_value_weight ? `--fv-weight:${c.fact_value_weight}` : "",
    c.fact_value_color ? `--fv-color:${c.fact_value_color}` : "",
    `--moon-img:${Number(c.fact_moon_size) || 36}px`,
  ].filter(Boolean).join(";");
  return html`<div class="facts" style=${style}>${keys.map((k) =>
    k === "moon_phase"
      ? html`<div class="fact moon"><span class="mi">${moonSvg(v.moon_phase_value)}</span><div><span class="fl">${label[k]}</span><span class="fv">${v.moon_phase}</span></div></div>`
      : html`<div class="fact"><span class="fl">${label[k]}</span><span class="fv">${v[k]}${k === "day_length" && v.day_change ? html` <small class="fd">${v.day_change}</small>` : nothing}</span></div>`
  )}</div>`;
}

export const factStyles = css`
  .facts { display: grid; grid-template-columns: repeat(auto-fit, minmax(96px, 1fr)); gap: 6px 14px; margin-top: 8px; }
  .fact { min-width: 0; }
  .fact .fl { display: block; font-size: var(--fl-size, 11px); font-weight: var(--fl-weight, 400); color: var(--fl-color, var(--secondary-text-color)); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .fact .fv { display: block; font-size: var(--fv-size, 13px); font-weight: var(--fv-weight, 400); color: var(--fv-color, var(--primary-text-color)); white-space: nowrap; font-variant-numeric: tabular-nums; }
  .fact .fd { font-size: 0.8em; color: var(--secondary-text-color); }
  /* The moon item takes two columns (image + name) and never runs into its neighbour. */
  .fact.moon { display: flex; align-items: center; gap: 8px; grid-column: span 2; overflow: hidden; }
  .fact.moon > div { min-width: 0; }
  .fact.moon .fv { overflow: hidden; text-overflow: ellipsis; }
  .fact.moon .mi { flex: 0 0 auto; line-height: 0; }
  .fact.moon .mi svg { width: var(--moon-img, 36px); height: var(--moon-img, 36px); display: block; }
`;
