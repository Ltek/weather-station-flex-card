#!/usr/bin/env node
// Regenerates src/flex/sections.js from Weather Flex Card's shipped file.
//
// Weather Flex Card = minified troinine/ha-weather-forecast-card v1.1.0 bundle
// + a readable "sections extension" appended after it. The extension refers to
// the bundle's minified identifiers (l5, eq, iC, ...). Here we cut the extension
// out and prepend an import block that binds those exact names to the matching
// exports of the vendored v1.1.0 source, so the extension body stays
// byte-identical to Weather Flex and fixes can be re-ported by re-running this.
//
// Usage: node scripts/port-wfc-sections.mjs [path/to/weather-flex-card.js]

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as acorn from "acorn";
import * as walk from "acorn-walk";

const BROWSER_GLOBALS = new Set(("window document console Object Array Math Number String Date JSON Set Map " +
  "WeakMap Intl parseFloat parseInt isNaN isFinite setTimeout clearTimeout setInterval clearInterval " +
  "customElements undefined Promise Error Boolean navigator requestAnimationFrame cancelAnimationFrame " +
  "CustomEvent Event HTMLElement ResizeObserver localStorage sessionStorage RegExp Symbol " +
  "encodeURIComponent structuredClone arguments Infinity NaN getComputedStyle Reflect globalThis location").split(" "));

// Approximate scope analysis: anything declared anywhere counts as declared.
// Good enough to catch references to the minified bundle's top-level names.
function freeIdentifiers(code) {
  const ast = acorn.parse(code, { ecmaVersion: "latest", sourceType: "script" });
  const declared = new Set();
  const addPattern = (p) => walk.full(p, (q) => q.type === "Identifier" && declared.add(q.name));
  walk.full(ast, (n) => {
    if (n.type === "VariableDeclarator") addPattern(n.id);
    if ((n.type === "FunctionDeclaration" || n.type === "FunctionExpression") && n.id) declared.add(n.id.name);
    if (/Function/.test(n.type)) n.params.forEach(addPattern);
    if (n.type === "CatchClause" && n.param) addPattern(n.param);
  });
  const used = new Set();
  walk.ancestor(ast, {
    Identifier(n, anc) {
      const p = anc[anc.length - 2];
      if (p?.type === "MemberExpression" && p.property === n && !p.computed) return;
      if (p?.type === "Property" && p.key === n && !p.computed && !p.shorthand) return;
      used.add(n.name);
    },
  });
  return [...used].filter((n) => !declared.has(n) && !BROWSER_GLOBALS.has(n)).sort();
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcFile =
  process.argv[2] || "/shared/user/code/weather-flex-card/weather-flex-card.js";
const outFile = path.join(root, "src/flex/sections.js");

const text = fs.readFileSync(srcFile, "utf8");
const MARK = "/* ===========================================================================\n * weather-flex-card — Sectioned layout extension";
const start = text.indexOf(MARK);
if (start < 0) throw new Error(`Extension marker not found in ${srcFile}`);
let body = text.slice(start);

const build = /const WFC_BUILD = "([^"]+)"/.exec(body)?.[1];
if (!build) throw new Error("WFC_BUILD not found");

// Minified name -> import. Verified against the v1.1.0 bundle; port fails
// loudly below if the extension starts using a name that is not mapped here.
const IMPORTS = `import { html as eq, svg as eX, nothing as eY } from "lit";
import { fireEvent as ih, hasAction as ib } from "custom-card-helpers";
import * as i_ from "suncalc";
import { WeatherForecastCard as l5 } from "../../vendor/weather-forecast-card/src/weather-forecast-card";
import {
  WeatherForecastCardEditor as l3,
  extractCustomAttributes as l8,
  denormalizeConfig as cr,
} from "../../vendor/weather-forecast-card/src/editor/weather-forecast-card-editor";
import { WfcCurrentWeather as lD } from "../../vendor/weather-forecast-card/src/components/wfc-current-weather";
import { CURRENT_WEATHER_ATTRIBUTES as iX, ForecastMode as iG } from "../../vendor/weather-forecast-card/src/types";
import {
  getDailyForecastType as i6,
  WEATHER_ATTRIBUTE_ICON_MAP as i0,
  formatWeatherEntityAttributeValue as rt,
} from "../../vendor/weather-forecast-card/src/data/weather";
import { getLocale as iA, getSuntimesInfo as iC } from "../../vendor/weather-forecast-card/src/helpers";
import { actionHandler as iq } from "../../vendor/weather-forecast-card/src/hass/action-handler-directive";
`;
const MAPPED = ["eq", "eX", "eY", "ih", "ib", "i_", "l5", "l3", "l8", "cr", "lD", "iX", "iG", "i6", "i0", "rt", "iA", "iC", "iq"];

// Patches: keep this list short — every patch is a divergence from Weather Flex.
const patches = [
  // Don't claim to be Weather Flex in the console, and don't overwrite its global.
  ["`%cWEATHER-FLEX-CARD%c sections extension loaded (build ${WFC_BUILD})`",
   "`%cWEATHER-STATION-FLEX-CARD%c flex sections loaded (Weather Flex sections ${WFC_BUILD})`"],
  ["window.__WFC_BUILD = WFC_BUILD;", "window.__WSFC_SECTIONS_BUILD = WFC_BUILD;\n  // Exposed for the Weather Station Flex Card editor: it diffs edited configs\n  // against the resolved defaults so saved YAML stays minimal.\n  l5.__wfcResolve = wfcResolve;\n  l5.__wfcBuild = WFC_BUILD;"],
  // The embedded editor sits inside this card's editor; name it accordingly.
  ['const WFC_CARD_NAME = "Weather Flex Card";', 'const WFC_CARD_NAME = "Weather Flex sections";'],
  // Fix: the Sky Bar's forecast temps/icons/extras and its cloud-cover shading
  // need the hourly forecast, but the forecast was only subscribed when the
  // Hourly or Daily section was shown — so a Sky Bar without them (e.g. in the
  // hero) silently lost those features. (Same bug exists in Weather Flex Card.)
  ["    const wantForecast = !!(wfc.hourly.show || wfc.daily.show);\n",
   "    const sp = wfc.sun_position || {};\n" +
   "    const fx = sp.forecast_extra;\n" +
   "    const skyNeedsHourly = !!(sp.show && (sp.weather_adjust !== false || [sp.forecast_temps, sp.forecast_icons].some((v) => v && v !== \"hidden\") || (Array.isArray(fx) ? fx.length : fx && fx !== \"none\") || Object.values(sp.forecast_metric_pos || {}).some((v) => v && v !== \"hidden\")));\n" +
   "    const wantHourly = !!(wfc.hourly.show || skyNeedsHourly);\n" +
   "    const wantForecast = !!(wantHourly || wfc.daily.show);\n" +
   "    const types = wantHourly && wfc.daily.show ? \"both\" : wantHourly ? \"hourly\" : \"daily\";\n"],
  ['    if (wfc.hourly.show && wfc.daily.show) patched.forecast_types = "both";\n',
   '    if (wantForecast && (types === "both" || !config.forecast_types || skyNeedsHourly)) patched.forecast_types = types;\n'],
  ['    if (wfc.hourly.show && wfc.daily.show) this.config.forecast_types = "both";\n',
   '    if (patched.forecast_types) this.config.forecast_types = patched.forecast_types;\n'],
  // The Sun Position arc with baseline "Sky Bar" renders the complete Sky Bar
  // (forecast row included) even while the Sky Bar section itself is hidden,
  // so it needs the hourly forecast too.
  ["    const sp = wfc.sun_position || {};\n    const fx = sp.forecast_extra;\n    const skyNeedsHourly = !!(sp.show && (",
   "    const sp = wfc.sun_position || {};\n    const fx = sp.forecast_extra;\n    const skyShown = !!(sp.show || (wfc.sun_arc && wfc.sun_arc.show && wfc.sun_arc.baseline_mode === \"sky\"));\n    const skyNeedsHourly = !!(skyShown && ("],
  // ---- Device auto-mapping, checked against the entity sets the three Ecowitt
  // integrations create (see _tests/fixtures/ecowitt-integrations.mjs):
  // "Feel likes" (Ecowitt Official) is a feels-like temperature.
  ["{ re: /feels[\\s_-]?like|apparent|wind[\\s_-]?chill|windchill/i, key: \"apparent_temperature\" },",
   "{ re: /feels?[\\s_-]?likes?|apparent|wind[\\s_-]?chill|windchill|heat[\\s_-]?index/i, key: \"apparent_temperature\" },"],
  // Indoor readings are never the outdoor value, even when a device has
  // nothing else (Ecowitt Local's gateway device holds only indoor temp/humidity
  // and pressure). "UV Radiation" (µW/cm²) is not the UV index. Heat index and
  // wind chill rank below a real feels-like; channel/probe sensors below the
  // outdoor array.
  ["    if (/indoor|inside/.test(hay)) pen += 100;\n",
   "    if (/indoor|inside/.test(hay)) return null;\n" +
   "    if (key === \"uv_index\" && !/index|\\buvi\\b/.test(hay)) return null;\n" +
   "    if (key === \"apparent_temperature\" && /chill|heat[\\s_-]?index/.test(hay)) pen += 10;\n" +
   "    if (/globe|wbgt|soil|water|pool|probe|leaf|\\bch[\\s_-]?\\d|(temperature|humidity)[\\s_-]?\\d|_\\d+$/.test(hay.replace(/_2$/, \"\"))) pen += 40;\n" +
   "    if (/outdoor/.test(hay)) pen -= 2;\n"],
  // A device's sibling devices (same integration entry — e.g. Ecowitt Local's
  // gateway next to its WS90 device) fill values the device itself lacks.
  ["  function wfcAutoMapDevice(hass, deviceId) {\n    const map = {}, best = {};\n    for (const eid of wfcDeviceEntities(hass, deviceId)) {\n      const c = wfcClassifyWeatherEntity(hass, eid);\n      if (!c) continue;\n",
   "  const WFC_SIB_CACHE = new WeakMap();\n" +
   "  function wfcSiblingDevices(hass, deviceId) {\n" +
   "    const devs = (hass && hass.devices) || {};\n" +
   "    let c = WFC_SIB_CACHE.get(devs);\n" +
   "    if (!c) { c = new Map(); WFC_SIB_CACHE.set(devs, c); }\n" +
   "    if (!c.has(deviceId)) c.set(deviceId, wfcSiblingDevicesRaw(devs, deviceId));\n" +
   "    return c.get(deviceId);\n" +
   "  }\n" +
   "  function wfcSiblingDevicesRaw(devs, deviceId) {\n" +
   "    const me = devs[deviceId];\n" +
   "    const entries = (me && me.config_entries) || [];\n" +
   "    if (!entries.length) return [];\n" +
   "    return Object.keys(devs).filter((id) => id !== deviceId && (devs[id].config_entries || []).some((e) => entries.includes(e)));\n" +
   "  }\n" +
   "  function wfcAutoMapDevice(hass, deviceId) {\n    const map = {}, best = {};\n" +
   "    const own = wfcDeviceEntities(hass, deviceId).map((eid) => [eid, 0]);\n" +
   "    const sib = wfcSiblingDevices(hass, deviceId).flatMap((d) => wfcDeviceEntities(hass, d).map((eid) => [eid, 15]));\n" +
   "    for (const [eid, extra] of [...own, ...sib]) {\n      const c0 = wfcClassifyWeatherEntity(hass, eid);\n      if (!c0) continue;\n      const c = { key: c0.key, penalty: c0.penalty + extra };\n"],
  // ---- Performance: Home Assistant replaces hass.states on every state change,
  // but hass.entities / hass.devices only when the registry changes. Index
  // device -> entities once per registry object instead of scanning every
  // entity on every render (this scan was ~90% of render time with ~3000
  // entities), and memoize each device's auto-map per registry + the set of
  // its entities that currently have a state.
  ["  function wfcDeviceEntities(hass, deviceId) {\n    if (!hass || !deviceId || !hass.entities) return [];\n    const out = [];\n    for (const eid in hass.entities) {\n      const e = hass.entities[eid];\n      if (e && e.device_id === deviceId) out.push(eid);\n    }\n    return out;\n  }\n",
   "  const WFC_DEV_INDEX = new WeakMap();\n" +
   "  function wfcDeviceEntities(hass, deviceId) {\n" +
   "    if (!hass || !deviceId || !hass.entities) return [];\n" +
   "    let idx = WFC_DEV_INDEX.get(hass.entities);\n" +
   "    // Re-check the registry size once per hass object, in case it was mutated in place.\n" +
   "    if (idx && idx.hass !== hass) { idx.hass = hass; if (Object.keys(hass.entities).length !== idx.size0) idx = null; }\n" +
   "    if (!idx) {\n" +
   "      idx = new Map();\n" +
   "      for (const eid in hass.entities) {\n" +
   "        const d = hass.entities[eid] && hass.entities[eid].device_id;\n" +
   "        if (!d) continue;\n" +
   "        if (!idx.has(d)) idx.set(d, []);\n" +
   "        idx.get(d).push(eid);\n" +
   "      }\n" +
   "      idx.size0 = Object.keys(hass.entities).length;\n" +
   "      idx.hass = hass;\n" +
   "      WFC_DEV_INDEX.set(hass.entities, idx);\n" +
   "    }\n" +
   "    return idx.get(deviceId) || [];\n" +
   "  }\n"],
  ["  function wfcAutoMapDevice(hass, deviceId) {\n    const map = {}, best = {};\n",
   "  const WFC_MAP_CACHE = new WeakMap();\n" +
   "  function wfcAutoMapDevice(hass, deviceId) {\n" +
   "    if (!hass || !hass.entities) return wfcAutoMapDeviceRaw(hass, deviceId);\n" +
   "    let byReg = WFC_MAP_CACHE.get(hass.entities);\n" +
   "    if (!byReg) { byReg = new Map(); WFC_MAP_CACHE.set(hass.entities, byReg); }\n" +
   "    const ids = [deviceId, ...wfcSiblingDevices(hass, deviceId)];\n" +
   "    let sig = \"\";\n" +
   "    for (const d of ids) for (const eid of wfcDeviceEntities(hass, d)) if (hass.states[eid]) sig += eid.length + \",\";\n" +
   "    const key = deviceId + \"|\" + ids.length + \"|\" + sig;\n" +
   "    const hit = byReg.get(deviceId);\n" +
   "    if (hit && hit.key === key && hit.devices === hass.devices) return hit.map;\n" +
   "    const map = wfcAutoMapDeviceRaw(hass, deviceId);\n" +
   "    byReg.set(deviceId, { key, devices: hass.devices, map });\n" +
   "    return map;\n" +
   "  }\n" +
   "  function wfcAutoMapDeviceRaw(hass, deviceId) {\n    const map = {}, best = {};\n"],
  // Moon marker drawn in the current phase: moon_icon "phase" (Sky Tracker).
  ["      if (!isDay && cfg.night_moon) {\n        const moon = cfg.moon_icon || \"mdi:weather-night\";",
   "      if (!isDay && cfg.night_moon && cfg.moon_icon === \"phase\") {\n" +
   "        const ph = i_.getMoonIllumination(new Date()).phase, r = 10, c = 11;\n" +
   "        const f = Math.cos(ph * 2 * Math.PI), rx = Math.abs(f) * r, lit = ph < 0.5 ? 1 : 0;\n" +
   "        const d = `M${c} ${c - r} A${r} ${r} 0 0 ${lit} ${c} ${c + r} A${rx} ${r} 0 0 ${f > 0 ? 1 - lit : lit} ${c} ${c - r} Z`;\n" +
   "        marker = eq`<span class=\"${cls} wfc-sunarc-sun-icon wfc-sunarc-moon-icon\" style=${style}><svg viewBox=\"0 0 22 22\" width=\"22\" height=\"22\" style=\"display:block\"><circle cx=\"11\" cy=\"11\" r=\"10\" fill=\"#2b2f36\" stroke=\"rgba(255,255,255,.35)\" stroke-width=\".8\"></circle><path d=${d} fill=\"#e9e6d6\"></path></svg></span>`;\n" +
   "      } else if (!isDay && cfg.night_moon) {\n        const moon = cfg.moon_icon || \"mdi:weather-night\";"],
  // Auto size for the clock time and date (0 = Auto): the host sets
  // --wfc-clock-auto / --wfc-clock-date-auto (the Weather Station hero scales
  // them with the tile); standalone they fall back to the old defaults.
  ["      `font-size:${clamp(Number(cc.clock_font_size) || 28, 8, 100)}px;` +\n",
   "      `font-size:${Number(cc.clock_font_size) > 0 ? clamp(Number(cc.clock_font_size), 8, 100) + \"px\" : \"var(--wfc-clock-auto, 28px)\"};` +\n"],
  ["      `font-size:${clamp(Number(cc.clock_date_font_size) || 12, 8, 100)}px;` +\n",
   "      `font-size:${Number(cc.clock_date_font_size) > 0 ? clamp(Number(cc.clock_date_font_size), 8, 100) + \"px\" : \"var(--wfc-clock-date-auto, 12px)\"};` +\n"],
  ['${this._wfcNumField(id, "clock_font_size", "Size", "px", s.clock_font_size, 28)}',
   '${this._wfcAutoSizeField(id, "clock_font_size", "Time size")}'],
  ['${this._wfcNumField(id, "clock_date_font_size", "Size", "px", s.clock_date_font_size, 12)}',
   '${this._wfcAutoSizeField(id, "clock_date_font_size", "Date size")}'],
  ["    if (/chip_text_size|chip_icon_size/.test(field)) return { min: 0, max: 48, step: 1 };\n",
   "    if (/chip_text_size|chip_icon_size/.test(field)) return { min: 0, max: 48, step: 1 };\n    if (/clock_font_size|clock_date_font_size/.test(field)) return { min: 0, max: 100, step: 1 };\n"],
  // wsfcHide (set by the Weather Station editor): fields that panel options
  // control instead (e.g. Sky Tracker's time window and moon), hidden here.
  ["  edProto._wfcSelect = function (id, field, label, options, current, dflt) {\n",
   "  edProto._wfcSelect = function (id, field, label, options, current, dflt) {\n    if (this.wsfcHide && this.wsfcHide.includes(field)) return eY;\n"],
  ["  edProto._wfcNumField = function (id, field, label, suffix, value, dflt) {\n",
   "  edProto._wfcNumField = function (id, field, label, suffix, value, dflt) {\n    if (this.wsfcHide && this.wsfcHide.includes(field)) return eY;\n"],
  ['${this._wfcGroup("Timeframe")}', '${this.wsfcHide && this.wsfcHide.includes("timeframe_mode") ? eY : this._wfcGroup("Timeframe")}'],
  ['${this._wfcGroup("Timeframe")}', '${this.wsfcHide && this.wsfcHide.includes("timeframe_mode") ? eY : this._wfcGroup("Timeframe")}'],
  ['                ${this._wfcCheckbox("Use a moon icon at night (between sunset & sunrise)", !!s.night_moon, (e) =>\n                  this._wfcToggleSecField(id, "night_moon", e)\n                )}\n                ${s.night_moon\n',
   '                ${this.wsfcHide && this.wsfcHide.includes("night_moon") ? eY : this._wfcCheckbox("Use a moon icon at night (between sunset & sunrise)", !!s.night_moon, (e) =>\n                  this._wfcToggleSecField(id, "night_moon", e)\n                )}\n                ${s.night_moon && !(this.wsfcHide && this.wsfcHide.includes("night_moon"))\n'],
  // Embedded in a Weather Station panel (wsfcMode "sections"): no editor
  // header (name, build, auto-collapse); the panel's editor is the context.
  ['      <div class="wfc-ed-header">\n        <div class="wfc-ed-title">',
   '      ${this.wsfcMode === "sections" ? eY : eq`<div class="wfc-ed-header">\n        <div class="wfc-ed-title">'],
  ['          <span>Auto Collapse setting panels when opening new panel</span>\n        </label>\n      </div>\n',
   '          <span>Auto Collapse setting panels when opening new panel</span>\n        </label>\n      </div>`}\n'],
  // Four-mode color control for every color field (hex-only for Sky Bar day/night).
  ["  edProto._wfcColorField = function (label, value, onChange) {\n    const val = value || \"#888888\";\n    const isSet = !!value;\n    // One horizontal row: label on the left, then swatch, readout and reset.\n    // Unset shows \"theme default\" (not \"auto\").\n    return eq`\n      <div class=\"wfc-color-field\">\n        <span class=\"wfc-field-label wfc-color-label\">${label}</span>\n        <input\n          type=\"color\"\n          class=\"wfc-color-input\"\n          .value=${val}\n          @change=${onChange}\n          @input=${onChange}\n        />\n        <span class=\"wfc-color-hex\">${value || \"theme default\"}</span>\n        <button\n          type=\"button\"\n          class=\"wfc-color-reset\"\n          title=\"Reset to theme default\"\n          ?disabled=${!isSet}\n          @click=${() => onChange({ target: { value: \"\" } })}\n        >Reset</button>\n      </div>\n    `;\n  };\n",
   "  edProto._wfcColorField = function (label, value, onChange) {\n    // Weather Station: the four-mode color control (design system \u00a73) \u2014\n    // Not set / Theme color / Custom swatch / CSS. Sky Bar day and night\n    // colors are blended in JS, so they stay hex swatches (the one exception).\n    if (/^(Day|Night) color$/.test(label)) return this._wfcColorFieldHex(label, value, onChange);\n    const THEME = [[\"var(--primary-color)\", \"Primary\"], [\"var(--accent-color)\", \"Accent\"], [\"var(--primary-text-color)\", \"Primary text\"], [\"var(--secondary-text-color)\", \"Secondary text\"], [\"var(--disabled-text-color)\", \"Disabled text\"], [\"var(--state-active-color)\", \"State active\"], [\"var(--error-color)\", \"Error\"], [\"var(--warning-color)\", \"Warning\"], [\"var(--success-color)\", \"Success\"], [\"var(--info-color)\", \"Info\"]];\n    const v = value == null ? \"\" : String(value);\n    const bg = /background|bg$|^Chip background/i.test(label);\n    const mode = v === \"\" ? \"default\" : v === \"transparent\" ? \"transparent\" : /^#[0-9a-fA-F]{3,8}$/.test(v) ? \"custom\" : /^var\\(/.test(v) && THEME.some(([x]) => x === v) ? \"theme\" : \"css\";\n    const hex6 = /^#[0-9a-fA-F]{6}$/.test(v) ? v : \"#4fc3f7\";\n    const set = (x) => onChange({ target: { value: x } });\n    const switchMode = (m) => set(m === \"default\" ? \"\" : m === \"transparent\" ? \"transparent\" : m === \"theme\" ? (THEME.some(([x]) => x === v) ? v : THEME[0][0]) : m === \"custom\" ? hex6 : v || hex6);\n    return eq`\n      <div class=\"wfc-color-field wsfc-color4\">\n        <span class=\"wfc-field-label wfc-color-label\">${label}</span>\n        <select class=\"wfc-native-select\" style=\"flex:0 0 auto;width:auto\" @change=${(e) => switchMode(e.target.value)}>\n          ${[[\"default\", \"Not set\"], ...(bg || mode === \"transparent\" ? [[\"transparent\", \"Transparent\"]] : []), [\"theme\", \"Theme color\"], [\"custom\", \"Custom\"], [\"css\", \"CSS\"]].map(([m, l]) => eq`<option value=${m} ?selected=${m === mode}>${l}</option>`)}\n        </select>\n        ${mode === \"theme\"\n          ? eq`<select class=\"wfc-native-select\" style=\"flex:1 1 120px;width:auto\" @change=${(e) => set(e.target.value)}>${THEME.map(([x, l]) => eq`<option value=${x} ?selected=${x === v}>${l}</option>`)}</select>`\n          : mode === \"custom\"\n            ? eq`<input type=\"color\" class=\"wfc-color-input\" .value=${hex6} @change=${(e) => set(e.target.value)} />`\n            : mode === \"css\"\n              ? eq`<input type=\"text\" class=\"wfc-native-select\" style=\"flex:1 1 120px;width:auto\" .value=${v} @change=${(e) => set(e.target.value)} />`\n              : eY}\n        ${mode !== \"default\" && mode !== \"transparent\" ? eq`<span style=\"width:16px;height:16px;border-radius:50%;flex:0 0 auto;border:1px solid var(--divider-color);background:${v}\"></span>` : eY}\n      </div>\n    `;\n  };\n  edProto._wfcColorFieldHex = function (label, value, onChange) {\n    const val = value || \"#888888\";\n    const isSet = !!value;\n    // One horizontal row: label on the left, then swatch, readout and reset.\n    // Unset shows \"theme default\" (not \"auto\").\n    return eq`\n      <div class=\"wfc-color-field\">\n        <span class=\"wfc-field-label wfc-color-label\">${label}</span>\n        <input\n          type=\"color\"\n          class=\"wfc-color-input\"\n          .value=${val}\n          @change=${onChange}\n          @input=${onChange}\n        />\n        <span class=\"wfc-color-hex\">${value || \"theme default\"}</span>\n        <button\n          type=\"button\"\n          class=\"wfc-color-reset\"\n          title=\"Reset to theme default\"\n          ?disabled=${!isSet}\n          @click=${() => onChange({ target: { value: \"\" } })}\n        >Reset</button>\n      </div>\n    `;\n  };\n"],
  ["      bg = wfcHexToRgba(color, alpha) || color;\n",
   "      bg = wfcHexToRgba(color, alpha) || `color-mix(in srgb, ${color} ${fillPct}%, transparent)`;\n"],
  // Hero sub-header metric: high/low needs the forecasts; other metrics come from Weather Sources.
  ["    const wantHourly = !!(wfc.hourly.show || skyNeedsHourly);\n    const wantForecast = !!(wantHourly || wfc.daily.show);\n    const types = wantHourly && wfc.daily.show ? \"both\" : wantHourly ? \"hourly\" : \"daily\";\n",
   "    // The header's default sub-line (today's high / low) needs both forecasts,\n    // even when no forecast section is shown (e.g. a hero on its own).\n    const secAttr = config.current && config.current.secondary_info_attribute;\n    const secHL = !!(wfc.current.show && (secAttr == null || secAttr === \"\"));\n    const wantHourly = !!(wfc.hourly.show || skyNeedsHourly || secHL);\n    const wantDaily = !!(wfc.daily.show || secHL);\n    const wantForecast = !!(wantHourly || wantDaily);\n    const types = wantHourly && wantDaily ? \"both\" : wantHourly ? \"hourly\" : \"daily\";\n"],
  ["    if (wantForecast && (types === \"both\" || !config.forecast_types || skyNeedsHourly)) patched.forecast_types = types;\n",
   "    if (wantForecast && (types === \"both\" || !config.forecast_types || skyNeedsHourly || secHL)) patched.forecast_types = types;\n"],
  ["      const v = this.config && this.config.current && this.config.current.secondary_info_attribute;\n      if (v === \"__wfc_none__\") return null;\n      return ORIG_SECONDARY.call(this);\n",
   "      const v = this.config && this.config.current && this.config.current.secondary_info_attribute;\n      if (v === \"__wfc_none__\") return null;\n      // A chosen metric follows Weather Sources like the rest of the card (the\n      // station's sensor first, then the weather entity). One that no source\n      // has shows nothing, instead of silently falling back to humidity.\n      if (typeof v === \"string\" && v && this.weatherEntity && cardProto._wfcMetricEntityChain) {\n        const ctx = { config: this.config, hass: this.hass, _wfcSources: cardProto._wfcSources, _wfcSlotEntityForKey: cardProto._wfcSlotEntityForKey, _wfcMetricEntityChain: cardProto._wfcMetricEntityChain };\n        let eid = null;\n        try { eid = (cardProto._wfcMetricEntityChain.call(ctx, v) || []).find((e) => !String(e).startsWith(\"weather.\") && this.hass && this.hass.states[e]); } catch (_e) { eid = null; }\n        if (eid) {\n          const cfg = { ...this.config, current: { ...this.config.current, secondary_info_attribute: { name: v, entity: eid } } };\n          return ORIG_SECONDARY.call(Object.create(this, { config: { value: cfg } }));\n        }\n        if (!(v in (this.weatherEntity.attributes || {}))) return null;\n      }\n      return ORIG_SECONDARY.call(this);\n"],
  // Metric chain: card-provided extra sources (air quality) before the weather entity.
  ["    // Safety net: the base entity is always a candidate of last resort (it is\n    // what the header/forecast fall back to even if it is absent from the list).\n    add(this.config && this.config.entity);\n    return chain;\n",
   "    // Weather Station: other integrations for metrics Weather Sources may not\n    // cover (e.g. ozone, PM2.5 from AirNow or an air-quality sensor).\n    if (typeof l5.__wsfcExtraEntity === \"function\") {\n      try { add(l5.__wsfcExtraEntity(key, this.hass, this.config)); } catch (_e) { /* ignore */ }\n    }\n    // Safety net: the base entity is always a candidate of last resort (it is\n    // what the header/forecast fall back to even if it is absent from the list).\n    add(this.config && this.config.entity);\n    return chain;\n"],
  // Editor: air-quality metrics found elsewhere are not marked unavailable.
  ["    if (this.__wfcSrc) Object.values(this.__wfcSrc).forEach((rec) => { if (rec) { scanFc(rec.hourly); scanFc(rec.daily); } });\n    return avail;\n",
   "    if (this.__wfcSrc) Object.values(this.__wfcSrc).forEach((rec) => { if (rec) { scanFc(rec.hourly); scanFc(rec.daily); } });\n    // Weather Station: metrics found in other integrations (air quality) count as available.\n    if (typeof l5.__wsfcExtraEntity === \"function\") {\n      for (const k of [\"ozone\"]) { try { if (l5.__wsfcExtraEntity(k, this.hass, this._config)) avail.add(k); } catch (_e) { /* ignore */ } }\n    }\n    return avail;\n"],
  // Hero inside a card with its own animated background: the animation settings live in Appearance.
  ["          ${this._wfcConfigCheckbox(\"show_moon_phase\", \"Show moon phase\", this._config.show_moon_phase, true)}\n          <p class=\"wfc-hint\">Shades the night-time moon to match the current lunar phase. Disable to always show a full moon.</p>\n          ${this._wfcStockFormFor(WFC_APPEARANCE_FORM_FIELDS)}\n          <p class=\"wfc-hint\">Which weather conditions trigger visual effects/animations on the card.</p>\n",
   "          ${this.wsfcHide && this.wsfcHide.includes(\"show_condition_effects\")\n            ? eq`<p class=\"wfc-hint\">The weather animation is drawn behind the whole card (Appearance \u2192 Background), so its effects and moon phase are set there.</p>`\n            : eq`${this._wfcConfigCheckbox(\"show_moon_phase\", \"Show moon phase\", this._config.show_moon_phase, true)}\n          <p class=\"wfc-hint\">Shades the night-time moon to match the current lunar phase. Disable to always show a full moon.</p>\n          ${this._wfcStockFormFor(WFC_APPEARANCE_FORM_FIELDS)}\n          <p class=\"wfc-hint\">Which weather conditions trigger visual effects/animations on the card.</p>`}\n"],
  // Sky Tracker step buttons: a time offset for the Sky Bar and Sun Position windows.
  ["  cardProto._wfcSunHours = function (cfg) {\n    cfg = cfg || {};\n    const now = new Date();\n",
   "  cardProto._wfcSunHours = function (cfg) {\n    cfg = cfg || {};\n    // timeframe_offset_hours (Weather Station's Sky Tracker step buttons) moves\n    // the window into the future; the real \"now\" marker stays where it is.\n    const now = new Date(Date.now() + (Number(cfg.timeframe_offset_hours) || 0) * 3600000);\n"],
  ["  cardProto._wfcArcWindow = function (cfg, rise, set) {\n    const mode = cfg.timeframe_mode || \"sunrise_sunset\";\n    const now = Date.now();\n",
   "  cardProto._wfcArcWindow = function (cfg, rise, set) {\n    const mode = cfg.timeframe_mode || \"sunrise_sunset\";\n    const now = Date.now() + (Number(cfg.timeframe_offset_hours) || 0) * 3600000;\n"],
  ["    const cfg = wfc.sun_arc;\n    const { sunrise, sunset } = wfcSunTimes(this.hass);\n",
   "    const cfg = wfc.sun_arc;\n    // Shifted window: the sun's path for that day.\n    const { sunrise, sunset } = wfcSunTimes(this.hass, new Date(Date.now() + (Number(cfg.timeframe_offset_hours) || 0) * 3600000));\n"],
  // Forecast Weather Metrics list in on-screen order.
  ["  edProto._wfcMoveMetric = function (id, key, dir) {\n    this._wfcCommitMetrics(id, (order) => {\n      const i = order.indexOf(key);\n      const j = i + dir;\n      if (i < 0 || j < 0 || j >= order.length) return;\n      const tmp = order[i];\n      order[i] = order[j];\n      order[j] = tmp;\n    });\n  };\n",
   "  edProto._wfcMoveMetric = function (id, key, dir) {\n    // Weather Station: the list is shown top to bottom as on the bar, so\n    // \"up\" moves a metric up on screen. Rows below the bar are stored\n    // outer \u2192 inner (bottom first), so their direction flips.\n    const wfc = this._wfcState();\n    const list = wfcMetrics(wfc[id] || {});\n    const me = list.find((m) => m.key === key);\n    if (me && me.pos === \"below\") dir = -dir;\n    this._wfcCommitMetrics(id, (order, pos) => {\n      const i = order.indexOf(key);\n      // Swap with the nearest metric in the same placement.\n      let j = i + dir;\n      while (j >= 0 && j < order.length && pos[order[j]] !== pos[key]) j += dir;\n      if (i < 0 || j < 0 || j >= order.length) return;\n      const tmp = order[i];\n      order[i] = order[j];\n      order[j] = tmp;\n    });\n  };\n"],
  ["  edProto._wfcMetricsOrder = function (id, s) {\n    const list = wfcMetrics(s);\n",
   "  edProto._wfcMetricsOrder = function (id, s) {\n    // Top to bottom as on the bar: above (outer first), overlay, below\n    // (inner first = top), then hidden.\n    const all = wfcMetrics(s);\n    const grp = (p) => all.filter((m) => m.pos === p);\n    const list = [...grp(\"above\"), ...grp(\"overlay\"), ...grp(\"below\").reverse(), ...all.filter((m) => ![\"above\", \"overlay\", \"below\"].includes(m.pos))];\n"],
  ["            <ha-icon class=\"wfc-ico-btn ${i === 0 ? \"disabled\" : \"\"}\" icon=\"mdi:arrow-up-bold\" title=\"Move up\"",
   "            <ha-icon class=\"wfc-ico-btn ${i === 0 || arr[i - 1].pos !== m.pos ? \"disabled\" : \"\"}\" icon=\"mdi:arrow-up-bold\" title=\"Move up\""],
  ["            <ha-icon class=\"wfc-ico-btn ${i === arr.length - 1 ? \"disabled\" : \"\"}\" icon=\"mdi:arrow-down-bold\" title=\"Move down\"",
   "            <ha-icon class=\"wfc-ico-btn ${i === arr.length - 1 || arr[i + 1].pos !== m.pos ? \"disabled\" : \"\"}\" icon=\"mdi:arrow-down-bold\" title=\"Move down\""],
  ["Order is outer \u2192 inner. Expand a metric",
   "Listed top to bottom as they appear on the bar; the arrows move a metric up or down among those in the same place (change its place with the drop-down). Expand a metric"],
  // Size fields controlled by the panel (e.g. the hero's Set scale to Auto) are hidden.
  ["  edProto._wfcAutoSizeField = function (id, field, label) {\n",
   "  edProto._wfcAutoSizeField = function (id, field, label) {\n    if (this.wsfcHide && this.wsfcHide.includes(field)) return eY;\n"],
  ["        // in px; icon in px.\n        header_state_size: 0,\n        header_temp_size: 0,\n        header_icon_size: 0,\n",
   "        // in px; icon in px.\n        header_state_size: 0,\n        header_temp_size: 0,\n        header_icon_size: 0,\n        header_secondary_size: 0,\n"],
  ["    if (/header_state_size|header_temp_size/.test(field)) return { min: 0, max: 64, step: 1 };\n",
   "    if (/header_secondary_size/.test(field)) return { min: 0, max: 48, step: 1 };\n    if (/header_state_size|header_temp_size/.test(field)) return { min: 0, max: 64, step: 1 };\n"],
  ["                ${this._wfcAutoSizeField(id, \"header_temp_size\", \"Temperature size\")}\n",
   "                ${this._wfcAutoSizeField(id, \"header_temp_size\", \"Temperature size\")}\n                ${this._wfcAutoSizeField(id, \"header_secondary_size\", \"Temperature sub-header size\")}\n"],
  ["    const iconSz = Number(cc.header_icon_size) || 0;\n    const sizeStyle =\n      (iconSz ? `--current-conditions-icon-size:${iconSz}px;` : \"\") +\n",
   "    const iconSz = Number(cc.header_icon_size) || 0;\n    // Sub-header (the line under the temperature), e.g. today's high / low.\n    const secSz = Number(cc.header_secondary_size) || 0;\n    const sizeStyle =\n      (secSz ? `--wfc-hdr-sec:${secSz}px;` : \"\") +\n      (iconSz ? `--current-conditions-icon-size:${iconSz}px;` : \"\") +\n"],
  ["        class=\"wfc-current-weather-container${stateSz || tempSz ? \" wfc-hdr-sized\" : \"\"}\"\n",
   "        class=\"wfc-current-weather-container${stateSz || tempSz ? \" wfc-hdr-sized\" : \"\"}${secSz ? \" wfc-hdr-secsized\" : \"\"}\"\n"],
  ["        .weatherEntity=${this._wfcMergedCurrentEntity(ctx.stateObj)}\n          .config=${this.config}\n",
   "        .weatherEntity=${this._wfcMainTempEntity(this._wfcMergedCurrentEntity(ctx.stateObj), cc)}\n          .config=${this._wfcMainTempConfig(cc)}\n"],
  ["  // --- Details ---------------------------------------------------------------\n  cardProto._wfcDetailValue = function (key, ctx) {\n",
   "  // Main temperature: \"feels_like\" shows the feels-like value in its place.\n  cardProto._wfcFeelsLike = function (stateObj) {\n    let v = null;\n    try { v = this._wfcCurrentMetricRaw(\"apparent_temperature\"); } catch (_e) { v = null; }\n    if (v == null) v = stateObj && stateObj.attributes ? stateObj.attributes.apparent_temperature : null;\n    const n = Number(v);\n    return v == null || v === \"\" || !Number.isFinite(n) ? null : n;\n  };\n  cardProto._wfcMainTempEntity = function (stateObj, cc) {\n    if (!cc || cc.main_temperature !== \"feels_like\" || !stateObj || !stateObj.attributes) return stateObj;\n    const v = this._wfcFeelsLike(stateObj);\n    if (v == null) return stateObj;\n    return { ...stateObj, attributes: { ...stateObj.attributes, temperature: v } };\n  };\n  // A temperature entity would win over the feels-like value, so drop it then.\n  cardProto._wfcMainTempConfig = function (cc) {\n    if (!cc || cc.main_temperature !== \"feels_like\" || !this.config.current || !this.config.current.temperature_entity) return this.config;\n    if (this._wfcFeelsLike(this.hass && this.config.entity ? this.hass.states[this.config.entity] : null) == null) return this.config;\n    const current = { ...this.config.current };\n    delete current.temperature_entity;\n    if (this.__wfcMtCfg && this.__wfcMtCfg.src === this.config) return this.__wfcMtCfg.cfg;\n    const cfg = { ...this.config, current };\n    this.__wfcMtCfg = { src: this.config, cfg };\n    return cfg;\n  };\n\n  // --- Details ---------------------------------------------------------------\n  cardProto._wfcDetailValue = function (key, ctx) {\n"],
  ["      .wfc-hdr-sized .wfc-current-temperature { font-size: var(--wfc-hdr-temp, inherit) !important; }\n",
   "      .wfc-hdr-sized .wfc-current-temperature { font-size: var(--wfc-hdr-temp, inherit) !important; }\n      .wfc-hdr-secsized .wfc-current-secondary-info { font-size: var(--wfc-hdr-sec) !important; line-height: 1.2; }\n      .wfc-hdr-secsized .wfc-current-secondary-icon { width: 1.25em !important; height: 1.25em !important; --mdc-icon-size: 1.25em !important; }\n"],
  ["      .wfc-hdr-secsized .wfc-current-secondary-info { font-size: var(--wfc-hdr-sec) !important; line-height: 1.2; }\n",
   "      .wfc-hdr-secsized .wfc-current-secondary-info { font-size: var(--wfc-hdr-sec) !important; line-height: 1.2; }\n      .wfc-hdr-secsized .wfc-current-secondary-info .wfc-current-secondary-value { font-size: inherit !important; line-height: inherit; }\n"],
  ["      clock_date_placement: \"with_time\",\n      clock_format:",
   "      clock_date_placement: \"with_time\",\n      // Time and date (when the date is with the clock) aligned to each other.\n      clock_align: \"center\",\n      clock_format:"],
  ["      push(timePlace, eq`<div class=\"wfc-clock\">${timeEl}${dateEl}</div>`);\n",
   "      const al = cc.clock_align === \"left\" || cc.clock_align === \"right\" ? \" wfc-clock-al-\" + cc.clock_align : \"\";\n      push(timePlace, eq`<div class=\"wfc-clock${al}\">${timeEl}${dateEl}</div>`);\n"],
  ["      .wfc-clock { display: flex; flex-direction: column; align-items: center; line-height: 1.05; flex: 0 0 auto; }\n",
   "      .wfc-clock { display: flex; flex-direction: column; align-items: center; line-height: 1.05; flex: 0 0 auto; }\n      .wfc-clock.wfc-clock-al-left { align-items: flex-start; text-align: left; }\n      .wfc-clock.wfc-clock-al-right { align-items: flex-end; text-align: right; }\n"],
  ["                        ${this._wfcAutoSizeField(id, \"clock_date_font_size\", \"Date size\")}\n                        ${this._wfcColorField(\"Date color\", s.clock_date_color, (e) =>\n                          this._wfcSetSecField(id, \"clock_date_color\", e.target.value)\n                        )}\n                      </div>\n",
   "                        ${this._wfcAutoSizeField(id, \"clock_date_font_size\", \"Date size\")}\n                        ${this._wfcColorField(\"Date color\", s.clock_date_color, (e) =>\n                          this._wfcSetSecField(id, \"clock_date_color\", e.target.value)\n                        )}\n                      </div>\n                      ${s.clock_show_time && (s.clock_date_placement === \"with_time\" || !s.clock_date_placement)\n                        ? this._wfcSelect(id, \"clock_align\", \"Time & date alignment\", [{ value: \"left\", label: \"Left\" }, { value: \"center\", label: \"Center\" }, { value: \"right\", label: \"Right\" }], s.clock_align || \"center\", \"center\")\n                        : eY}\n"],
];
for (const [from, to] of patches) {
  if (!body.includes(from)) throw new Error(`Patch target missing: ${from}`);
  body = body.replace(from, to);
}

// Guard: every free (undeclared, non-browser-global) identifier the extension
// uses must be one we import. A new minified name would otherwise be a silent
// ReferenceError at runtime.
const unmapped = freeIdentifiers(body).filter((n) => !MAPPED.includes(n));
if (unmapped.length) {
  throw new Error(`Extension uses unmapped bundle identifiers: ${unmapped.join(", ")} — add them to IMPORTS`);
}

const header = `// GENERATED by scripts/port-wfc-sections.mjs — do not edit by hand.
// Source: ${srcFile} (Weather Flex sections build ${build}).
// The body below is Weather Flex Card's sections extension, unchanged except for
// the patches listed in the port script.
`;
fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, header + IMPORTS + "\n" + body);
console.log(`wrote ${path.relative(root, outFile)} (Weather Flex sections ${build}, ${body.length} chars)`);
