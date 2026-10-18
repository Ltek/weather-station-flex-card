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

await esbuild.build({
  ...common,
  entryPoints: [path.join(root, "src/card/weather-station-flex-card.js")],
  outfile: path.join(root, "dist/weather-station-flex-card.js"),
  minify: !preview,
  sourcemap: false,
  banner: { js: `/* weather-station-flex-card ${pkgVersion} — https://github.com/Ltek/weather-station-flex-card */` },
});

if (preview) {
  await esbuild.build({
    ...common,
    entryPoints: [path.join(root, "preview/main.js")],
    outfile: path.join(root, "preview/build/main.js"),
    minify: false,
    sourcemap: "inline",
  });
}
