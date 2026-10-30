// Build: bundles the card into dist/weather-station-flex-card.js (one file).
//   node build.mjs            -> production bundle (minified)
//   node build.mjs --preview  -> also bundles preview/main.js for the local preview page
import * as esbuild from "esbuild";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const preview = process.argv.includes("--preview");

// Custom-element / class / CSS-variable renames applied to the vendored
// troinine source and the generated Weather Flex sections, so this bundle never
// registers the same element names as Weather Flex Card on the same dashboard.
// Public theme variables (--weather-forecast-card-*) are intentionally kept.
const RENAMES = [
  [/"weather-forecast-card-editor"/g, '"wsfc-flex-core-editor"'],
  [/action-handler-wfc\b/g, "action-handler-wsfc"],
  [/(^|[^a-z0-9-])wfc-/g, "$1wsfc-"],
];
const RENAME_DIRS = [path.join(root, "vendor"), path.join(root, "src/flex")];
const applyRenames = (code) => {
  // Module specifiers name files (e.g. ./components/wfc-current-weather) and
  // must not be renamed — mask them while the rename rules run.
  const specs = [];
  const masked = code.replace(/(\bfrom\s+|\bimport\s+|\bimport\()(["'])([^"']+)\2/g, (_m, kw, q, spec) => {
    specs.push(spec);
    return `${kw}${q}\u0000${specs.length - 1}\u0000${q}`;
  });
  const renamed = RENAMES.reduce((c, [re, to]) => c.replace(re, to), masked);
  return renamed.replace(/\u0000(\d+)\u0000/g, (_m, i) => specs[Number(i)]);
};

const renamePlugin = {
  name: "wsfc-rename",
  setup(build) {
    build.onLoad({ filter: /\.(ts|js)$/ }, async (args) => {
      if (!RENAME_DIRS.some((d) => args.path.startsWith(d))) return undefined;
      let code = await fs.promises.readFile(args.path, "utf8");
      // Parcel's `import * as x from "bundle-text:..."` yields the string itself;
      // with esbuild a default import is the equivalent.
      code = code.replace(/import \* as (\w+) from "bundle-text:/g, 'import $1 from "bundle-text:');
      return { contents: applyRenames(code), loader: args.path.endsWith(".ts") ? "ts" : "js" };
    });
  },
};

// "bundle-text:./file.css" (Parcel syntax used upstream) and "inline-css:pkg/file.css"
// (ours, e.g. Leaflet's stylesheet) both become a default-exported string.
const textPlugin = {
  name: "bundle-text",
  setup(build) {
    build.onResolve({ filter: /^(bundle-text|inline-css):/ }, (args) => {
      const spec = args.path.replace(/^(bundle-text|inline-css):/, "");
      const resolved = spec.startsWith(".")
        ? path.resolve(args.resolveDir, spec)
        : path.join(root, "node_modules", spec);
      return { path: resolved, namespace: "text" };
    });
    build.onLoad({ filter: /.*/, namespace: "text" }, async (args) => {
      const css = await fs.promises.readFile(args.path, "utf8");
      const inVendor = args.path.startsWith(path.join(root, "vendor"));
      return { contents: inVendor ? applyRenames(css) : css, loader: "text" };
    });
  },
};

const pkgVersion = (() => {
  const c = fs.readFileSync(path.join(root, "src/card/constants.js"), "utf8");
  return /CARD_VERSION\s*=\s*"([^"]+)"/.exec(c)[1];
})();

const common = {
  bundle: true,
  format: "esm",
  target: ["es2020", "safari15"],
  plugins: [renamePlugin, textPlugin],
  legalComments: "eof",
  logLevel: "info",
};

// Leaflet (radar) and js-yaml (Import / Export) are loaded only when used, as
// their own self-contained files next to the card (dist/wsfc-leaflet.js,
// dist/wsfc-yaml.js), so a dashboard without a radar never downloads Leaflet.
// The card imports nothing at load time: a missing extra file only affects
// the feature that needs it.
for (const f of fs.readdirSync(path.join(root, "dist"))) if (/^wsfc-.*\.js$/.test(f)) fs.rmSync(path.join(root, "dist", f));
// Leaflet's file also carries its stylesheet (export leafletCss), so the card doesn't.
const LIBS = [
  ["wsfc-leaflet", `export * from "leaflet/dist/leaflet-src.esm.js";\nexport const leafletCss = ${JSON.stringify(fs.readFileSync(path.join(root, "node_modules/leaflet/dist/leaflet.css"), "utf8"))};`],
  ["wsfc-yaml", `export * from "js-yaml";`],
];
for (const [name, contents] of LIBS) {
  await esbuild.build({
    stdin: { contents, resolveDir: root, loader: "js" },
    bundle: true, format: "esm", target: ["es2020", "safari15"], minify: true, legalComments: "eof", logLevel: "error",
    outfile: path.join(root, "dist", `${name}.js`),
  });
}
// --- The editor (dist/wsfc-editor.js) --------------------------------------
// Loaded when the card editor opens. It doesn't carry its own copy of the
// card's modules: every module outside the editor (src/editor, the sections'
// editor part, the vendored editor) and lit come from the card at run time,
// through globalThis.__wsfcHost (src/card/host.generated.js, written below),
// so they are the same instances with the same state.
const EDITOR_ENTRY = path.join(root, "src/editor/editor.js");
const editorOwn = (p) =>
  p.startsWith(path.join(root, "src/editor") + path.sep) ||
  p === path.join(root, "src/flex/sections-editor.js") ||
  p.startsWith(path.join(root, "vendor/weather-forecast-card/src/editor") + path.sep);
const HOST_PKGS = /^(lit|lit-html|lit-element|@lit\/[^/]+)(\/|$)/;
const hostKey = (p) => (p.startsWith(root) ? path.relative(root, p) : p).split(path.sep).join("/");

// Which modules the editor takes from the card (resolved paths), found by
// resolving its imports without bundling them.
const hostMods = new Map(); // key -> { path, pkg }
const hostPlugin = (mode) => ({
  name: "wsfc-host",
  setup(build) {
    build.onResolve({ filter: /.*/ }, async (args) => {
      if (args.pluginData?.wsfcHost || args.kind === "entry-point" || args.namespace === "host" || /^(bundle-text|inline-css):/.test(args.path)) return undefined;
      const pkg = HOST_PKGS.test(args.path) ? args.path : null;
      let resolved = null;
      if (!pkg) {
        const r = await build.resolve(args.path, { kind: args.kind, resolveDir: args.resolveDir, importer: args.importer, pluginData: { wsfcHost: true } });
        if (r.errors.length || r.external) return undefined;
        resolved = r.path;
        if (resolved.includes(`${path.sep}node_modules${path.sep}`) || editorOwn(resolved)) return undefined; // bundled into the editor
      }
      const key = pkg ? pkg.replace(/\.js$/, "") : hostKey(resolved);
      hostMods.set(key, { path: resolved, pkg, from: args.resolveDir });
      return mode === "scan" ? { path: key, external: true } : { path: key, namespace: "host" };
    });
    build.onLoad({ filter: /.*/, namespace: "host" }, async (args) => {
      const names = await exportNames(hostMods.get(args.path));
      const named = names.filter((n) => n !== "default");
      return {
        contents: `const m = globalThis.__wsfcHost?.[${JSON.stringify(args.path)}];\n` +
          `if (!m) throw new Error("wsfc-editor.js: the card did not provide ${args.path}; update every file of the card together");\n` +
          (named.length ? `export const { ${named.join(", ")} } = m;\n` : "") +
          (names.includes("default") ? "export default m.default;\n" : ""),
        loader: "js",
      };
    });
  },
});

// Export names of a module, as esbuild sees them (re-exports included).
const exportCache = new Map();
async function exportNames(mod) {
  const key = mod.path || mod.pkg;
  if (!exportCache.has(key)) {
    const r = await esbuild.build({
      ...common, entryPoints: mod.path ? [mod.path] : undefined,
      stdin: mod.path ? undefined : { contents: `export * from ${JSON.stringify(mod.pkg)};`, resolveDir: root, loader: "js" },
      write: false, metafile: true, logLevel: "silent", outdir: path.join(root, ".exports-tmp"),
    });
    const out = Object.values(r.metafile.outputs).find((o) => o.entryPoint || o.exports?.length);
    exportCache.set(key, out?.exports || []);
  }
  return exportCache.get(key);
}

// 1. Find the modules the editor needs from the card.
await esbuild.build({ ...common, entryPoints: [EDITOR_ENTRY], write: false, logLevel: "error", plugins: [hostPlugin("scan"), ...common.plugins] });
// 2. The card's table of them.
{
  const keys = [...hostMods.keys()].sort();
  const hostFile = path.join(root, "src/card/host.generated.js");
  const rel = (m) => (m.pkg ? m.pkg : "./" + path.relative(path.dirname(hostFile), m.path).split(path.sep).join("/"));
  const code = "// GENERATED by build.mjs — do not edit. The modules the editor (dist/wsfc-editor.js)\n// takes from the card at run time.\n" +
    keys.map((k, i) => `import * as m${i} from ${JSON.stringify(rel(hostMods.get(k)))};`).join("\n") +
    `\nglobalThis.__wsfcHost = {\n${keys.map((k, i) => `  ${JSON.stringify(k)}: m${i},`).join("\n")}\n};\n`;
  if (!fs.existsSync(hostFile) || fs.readFileSync(hostFile, "utf8") !== code) fs.writeFileSync(hostFile, code);
}

await esbuild.build({
  ...common,
  entryPoints: [path.join(root, "src/card/weather-station-flex-card.js")],
  outfile: path.join(root, "dist/weather-station-flex-card.js"),
  minify: !preview,
  sourcemap: false,
  banner: { js: `/* weather-station-flex-card ${pkgVersion} — https://github.com/Ltek/weather-station-flex-card */` },
});
// 3. The editor, against the card's table.
await esbuild.build({
  ...common,
  plugins: [hostPlugin("build"), ...common.plugins],
  entryPoints: [EDITOR_ENTRY],
  outfile: path.join(root, "dist/wsfc-editor.js"),
  minify: !preview,
  sourcemap: false,
  logLevel: "error",
  banner: { js: `/* weather-station-flex-card ${pkgVersion} editor — https://github.com/Ltek/weather-station-flex-card */` },
});

if (preview) {
  // The preview loads the split libraries from beside its own bundle.
  fs.mkdirSync(path.join(root, "preview/build"), { recursive: true });
  for (const f of fs.readdirSync(path.join(root, "dist"))) if (/^wsfc-.*\.js$/.test(f)) fs.copyFileSync(path.join(root, "dist", f), path.join(root, "preview/build", f));
  await esbuild.build({
    ...common,
    entryPoints: [path.join(root, "preview/main.js")],
    outfile: path.join(root, "preview/build/main.js"),
    minify: false,
    sourcemap: "inline",
  });
}
