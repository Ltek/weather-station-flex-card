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
  ["window.__WFC_BUILD = WFC_BUILD;", "window.__WSFC_SECTIONS_BUILD = WFC_BUILD;"],
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
