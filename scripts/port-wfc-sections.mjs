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
