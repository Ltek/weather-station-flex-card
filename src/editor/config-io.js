// Import / export of the whole card config, in a native <dialog> (top layer,
// above Home Assistant's editor dialog) with a visible textarea, per the design
// system: the async clipboard is often blocked inside the editor, so the text
// is always selectable, and Copy / Paste are best-effort helpers.
import { lazyLib } from "../card/lazy.js";
// js-yaml is loaded the first time the dialog opens (a separate file).
let yaml;
const loadYaml = async () => (yaml ||= await lazyLib("wsfc-yaml.js"));

const CSS = `
  .wsfc-io::backdrop { background: rgba(0, 0, 0, 0.55); }
  .wsfc-io { border: 1px solid var(--divider-color, #444); border-radius: 14px; padding: 0; width: min(720px, 94vw);
    background: var(--card-background-color, #1c1c1c); color: var(--primary-text-color, #e1e1e1); font: 14px/1.4 var(--paper-font-body1_-_font-family, system-ui, sans-serif); }
  .wsfc-io .in { display: flex; flex-direction: column; gap: 10px; padding: 16px; }
  .wsfc-io h2 { margin: 0; font-size: 16px; font-weight: 600; }
  .wsfc-io p { margin: 0; color: var(--secondary-text-color, #9e9e9e); font-size: 12px; }
  .wsfc-io textarea { width: 100%; box-sizing: border-box; min-height: 340px; resize: vertical; font: 12px/1.45 var(--code-font-family, ui-monospace, monospace);
    background: var(--secondary-background-color, #111); color: inherit; border: 1px solid var(--divider-color, #444); border-radius: 8px; padding: 10px; }
  .wsfc-io .bar { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
  .wsfc-io .grow { flex: 1; }
  .wsfc-io button { font: inherit; padding: 6px 14px; border-radius: 8px; cursor: pointer; border: 1px solid var(--divider-color, #444); background: transparent; color: inherit; }
  .wsfc-io button.pri { background: var(--primary-color, #2196f3); border-color: var(--primary-color, #2196f3); color: var(--text-primary-color, #fff); }
  .wsfc-io .err { color: var(--error-color, #db4437); font-size: 12px; }
`;

/** YAML for a config (keys in their order, no type line duplicated). */
export const configToYaml = (config) => yaml.dump(config, { lineWidth: -1, noRefs: true });

/** Parse pasted YAML or JSON; throws with a readable message. */
export function parseConfig(text, cardType) {
  let cfg;
  try {
    cfg = yaml.load(String(text || ""));
  } catch (e) {
    throw new Error(`Not valid YAML or JSON: ${e.reason || e.message}`);
  }
  if (!cfg || typeof cfg !== "object" || Array.isArray(cfg)) throw new Error("Expected the card's settings (a YAML mapping).");
  if (cfg.type && cardType && cfg.type !== cardType) throw new Error(`This is a ${cfg.type} config, not ${cardType}.`);
  if (!cfg.entity) throw new Error("Missing entity: the weather entity (e.g. weather.openweathermap).");
  return { ...cfg, type: cardType || cfg.type };
}

/**
 * Open the dialog. mode "export" shows the config; "import" takes text and
 * calls onImport(config) when applied.
 */
export async function openConfigDialog(opts) {
  try {
    await loadYaml();
  } catch (e) {
    alert(String(e?.message || e));
    return;
  }
  return openDialog(opts);
}

/** Make YAML available to configToYaml / parseConfig (for callers outside the dialog). */
export const yamlReady = loadYaml;

function openDialog({ mode, config, cardType, onImport }) {
  const d = document.createElement("dialog");
  d.className = "wsfc-io";
  const style = document.createElement("style");
  style.textContent = CSS;
  const exp = mode === "export";
  d.innerHTML = `<div class="in">
    <h2>${exp ? "Export settings" : "Import settings"}</h2>
    <p>${exp ? "The whole card's settings as YAML. Copy them to keep a backup or to use them on another dashboard." : "Paste settings exported from this card (YAML or JSON). They replace the current settings in the editor; press Save in Home Assistant to keep them."}</p>
    <textarea spellcheck="false" aria-label="${exp ? "Exported settings" : "Settings to import"}"></textarea>
    <div class="err" role="alert"></div>
    <div class="bar">
      ${exp ? `<button class="copy">Copy to clipboard</button><button class="dl">Download file</button>` : `<button class="paste">Paste from clipboard</button>`}
      <span class="grow"></span>
      <button class="close">${exp ? "Close" : "Cancel"}</button>
      ${exp ? "" : `<button class="pri apply">Import</button>`}
    </div>
  </div>`;
  d.prepend(style);
  const ta = d.querySelector("textarea");
  const err = d.querySelector(".err");
  if (exp) ta.value = configToYaml(config);
  const close = () => { d.close(); d.remove(); };
  d.querySelector(".close").addEventListener("click", close);
  d.addEventListener("cancel", (e) => { e.preventDefault(); close(); });
  d.addEventListener("click", (e) => { if (e.target === d) close(); });
  d.querySelector(".copy")?.addEventListener("click", async (e) => {
    const b = e.currentTarget;
    ta.focus(); ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (_e) { ok = false; }
    if (!ok) { try { await navigator.clipboard.writeText(ta.value); ok = true; } catch (_e) { ok = false; } }
    b.textContent = ok ? "Copied ✓" : "Press Ctrl/Cmd+C";
  });
  d.querySelector(".dl")?.addEventListener("click", () => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([ta.value], { type: "text/yaml" }));
    a.download = "weather-station-flex-card.yaml";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });
  d.querySelector(".paste")?.addEventListener("click", async (e) => {
    try { ta.value = await navigator.clipboard.readText(); err.textContent = ""; }
    catch (_e) { e.currentTarget.textContent = "Paste with Ctrl/Cmd+V"; ta.focus(); }
  });
  d.querySelector(".apply")?.addEventListener("click", () => {
    try {
      const cfg = parseConfig(ta.value, cardType);
      onImport?.(cfg);
      close();
    } catch (e) {
      err.textContent = e.message;
    }
  });
  document.body.appendChild(d);
  try { d.showModal(); } catch (_e) { d.setAttribute("open", ""); }
  if (exp) { ta.focus(); ta.select(); } else ta.focus();
  return d;
}
