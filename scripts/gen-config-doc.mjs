// Generates docs/CONFIGURATION.md from the editor's own schemas, so the YAML
// reference always matches what the visual editor offers.
//   node scripts/gen-config-doc.mjs
import { createRequire } from "node:module";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const require = createRequire("/shared/user/code/_tests/package.json");
const { Window } = require("happy-dom");
const win = new Window({ url: "http://localhost/" });
for (const k of ["window", "document", "customElements", "HTMLElement", "CustomEvent", "Event", "Node", "navigator", "getComputedStyle", "ResizeObserver", "CSSStyleSheet", "ShadowRoot", "Element", "DocumentFragment", "MutationObserver", "requestAnimationFrame", "cancelAnimationFrame", "Document", "Text", "Comment", "HTMLTemplateElement", "NodeFilter", "HTMLCanvasElement", "TreeWalker", "DOMParser", "matchMedia", "Image", "HTMLDivElement", "localStorage"]) {
  try { globalThis[k] = k === "window" ? win : win[k]; } catch { Object.defineProperty(globalThis, k, { value: win[k], configurable: true }); }
}
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "wsfc-doc-"));
fs.copyFileSync(path.join(root, "dist/weather-station-flex-card.js"), path.join(tmp, "card.mjs"));
for (const f of fs.readdirSync(path.join(root, "dist"))) if (/^wsfc-.*\.js$/.test(f)) fs.copyFileSync(path.join(root, "dist", f), path.join(tmp, f));
const origLog = console.log; console.log = () => {}; console.info = () => {};
await import(pathToFileURL(path.join(tmp, "card.mjs")).href);
await customElements.get("weather-station-flex-card").loadEditor();
console.log = origLog;
const S = globalThis.__wsfcSchemas;
if (!S) throw new Error("schemas not exposed by the bundle");

const md = (s) => String(s ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ");
const code = (v) => "`" + (typeof v === "string" ? v : JSON.stringify(v)) + "`";

function typeOf(f) {
  const s = f.selector || {};
  if (s.boolean) return "`true` / `false`";
  if (s.select) {
    const opts = (s.select.options || []).map((o) => (typeof o === "string" ? o : o.value)).filter((v) => v !== "");
    return (s.select.multiple ? "list of: " : "") + opts.map(code).join(" · ");
  }
  if (s.number) {
    const n = s.number;
    const r = n.min != null && n.max != null ? ` ${n.min}–${n.max}` : "";
    return `number${r}${n.unit_of_measurement ? ` ${n.unit_of_measurement}` : ""}`;
  }
  if (s.text && /(^|_|\.)color$/.test(f.name)) return "color: `#rrggbb`, `var(--primary-color)`, any CSS color";
  if (s.text) return s.text.multiple ? "list of text" : s.text.type === "url" ? "URL" : "text";
  if (s.entity) return `entity id${s.entity.domain ? ` (\`${[].concat(s.entity.domain).join("`, `")}.*\`)` : ""}${s.entity.multiple ? " — list" : ""}`;
  if (s.device) return `device id${s.device.multiple ? " — list" : ""}`;
  if (s.icon) return "icon, e.g. `mdi:weather-windy`";
  if (s.media) return "image (uploaded through the editor)";
  if (s.object) return "mapping / list";
  return "";
}

function table(fields, defaults = {}) {
  const rows = fields.map((f) => {
    const def = defaults[f.name] !== undefined ? defaults[f.name] : f.default;
    const label = f.label || S.LABELS[f.name] || "";
    const what = [label && `**${label}**`, f.helper].filter(Boolean).join(" — ");
    const note = f.invert ? " (the editor shows it as a *Disable …* checkbox; `false` = disabled)" : "";
    return `| \`${f.name}\` | ${md(typeOf(f))} | ${def === undefined ? "" : code(def)} | ${md(what)}${note} |`;
  });
  return ["| Option | Value | Default | What it does |", "|---|---|---|---|", ...rows].join("\n");
}

const out = [];
out.push(`# Configuration reference

Everything below can be set in the visual editor; this page is for those who prefer YAML or want to see every option in one place. It is generated from the editor itself (\`node scripts/gen-config-doc.mjs\`), so it matches what the editor offers.

Only options that differ from their default need to be written. The editor saves exactly that way, so a config it saved stays short.

**Contents:** [Minimal config](#minimal-config) · [Card options](#card-options) · [Options every panel takes](#options-every-panel-takes) · [Panel types](#panel-types) · [Examples](#examples) · [Notes](#notes)

## Minimal config

\`\`\`yaml
type: custom:weather-station-flex-card
entity: weather.openweathermap        # forecast + condition (any weather.* entity)
metric_sources:                       # Weather Sources: for each value, the first source that has it wins
  sources:
    - ref: device:<your station's device id>   # its sensors are found automatically (outdoor first)
    - ref: weather.openweathermap
\`\`\`

With no \`panels:\` the card shows its default dashboard (hero, bulletin, Sky Tracker, a Button Menu with the panel buttons, wind, six metric tiles, hourly and tomorrow's forecast; several more panels hidden until you tap their buttons; radar and wind map as pop-ups).

## Card options

| Option | Value | What it does |
|---|---|---|
| \`entity\` | entity id (\`weather.*\`) | **Required.** The weather entity for the forecast, the current condition and anything the station doesn't measure. |
| \`metric_sources.sources\` | list | Weather Sources in priority order. Each item: \`ref\` (\`device:<id>\` or an entity id), optional \`overrides\` (value → entity id) and \`disabled: true\`. |
| \`panels\` | list | The panels, in grid order (see below). |
| \`storage_key\` | text | Optional name for the per-browser saved panel-button states (default: the dashboard path, entity and title). |
| \`min_row_height\` / \`max_row_height\` | number px | Limits for the row height calculated in full screen with fit (default 60 / 400). |
| \`layout_screen\` | \`window\` or \`<width>x<height>\` | Editor only: the Layout map's screen guide. |
| \`layout_guide\` | \`line\` · \`frame\` | Editor only: how the screen guide is drawn. |
`);
for (const [title, fields] of [...(S.STATION_FIELDS ? [["Current condition", S.STATION_FIELDS]] : []), ...(S.BACKGROUND_GROUPS || []), ...S.APPEARANCE_GROUPS, ...(S.LAYOUT_GROUPS || []), ...(S.PANEL_GROUPS || [])]) {
  out.push(`### ${title}\n\n${table(fields, S.GENERAL_DEFAULTS)}\n`);
}
out.push(`### Panel buttons\n\n${table(S.REMEMBER, S.GENERAL_DEFAULTS)}\n\nWhere the buttons go: \`panel_bar: false\` hides the bar; a Button Menu panel (\`heading\`) with \`show_bar: true\` holds them instead of the row above the panels. Which panels get a button is each panel's \`in_bar\`.\n`);

out.push(`## Options every panel takes

${table(S.COMMON_SCHEMA)}

Also: \`type\` (required), \`id\` (optional, keeps a panel's saved button state when you reorder panels), \`span_medium\` / \`span_narrow\` (width on tablets / phones) and \`rows_compact\` (height on tablets and phones). On tablets small tiles stay side by side and wide panels go full width; on phones tiles pair up and everything else is full width.

### Inside a stack

Panels inside a \`stack\` have no grid place of their own; they take:

${table(S.STACK_CHILD_SCHEMA)}
`);

out.push("## Panel types\n");
const order = Object.keys(S.PANEL_TYPES).filter((k) => k !== "map");
order.sort((a, b) => (a === "hero" ? -1 : b === "hero" ? 1 : S.PANEL_TYPES[a].label.localeCompare(S.PANEL_TYPES[b].label)));
for (const type of order) {
  const m = S.PANEL_TYPES[type];
  out.push(`### ${m.label} — \`type: ${type}\`\n`);
  out.push(`Default size: ${m.span} of 12 wide, ${m.rows ? `${m.rows} row${m.rows === 1 ? "" : "s"} high` : "fits its content"}.${m.flex ? " Also takes `flex:`: Weather Flex section settings (what the embedded section editor saves), merged over the panel's defaults." : ""}\n`);
  if (m.groups) {
    for (const [g, f] of m.groups) out.push(`**${g}**\n\n${table(f)}\n`);
  } else if (m.schema?.length) {
    // Split out sub-panels (e.g. Sun & moon facts) like the editor does.
    const main = m.schema.filter((f) => !f.sub), subs = {};
    for (const f of m.schema.filter((x) => x.sub)) (subs[f.sub] ||= []).push(f);
    if (main.length) out.push(`${table(main)}\n`);
    for (const [name, f] of Object.entries(subs)) out.push(`**${name}**\n\n${table(f)}\n`);
  } else out.push("No options of its own beyond `flex:`.\n");
}

const examples = fs.readFileSync(path.join(root, "docs/config-examples.md"), "utf8");
out.push(examples);
fs.writeFileSync(path.join(root, "docs/CONFIGURATION.md"), out.join("\n"));
console.log("wrote docs/CONFIGURATION.md");
process.exit(0);
