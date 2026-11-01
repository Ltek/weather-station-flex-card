// Panel View: one drop-down for how a panel starts and what a tap does.
// Each option is named "<view at rest> → <what a tap does>". It reads and writes
// the existing settings (compact, collapsible, collapsed, collapsed_view,
// collapsed_open), so older YAML keeps working.
import { COMPACT_TYPES } from "../card/compact.js";

const OPEN_LABEL = { inplace: "in place", overlay: "over the other panels", popup: "as a pop-up" };

export const VIEW_KEYS = ["compact", "collapsible", "collapsed", "collapsed_view", "collapsed_open"];

/** The options for a panel: tiles only where the panel has a tiles row. */
export function viewOptions(p, card = {}, canCollapse = true) {
  if (!canCollapse) return [["full", "Full Size"]];
  const out = [
    ["full", "Full Size"],
    ["full_title", "Full Size → Collapse to Title"],
    ["title_full", "Title → Expand to Full Size"],
  ];
  if (!COMPACT_TYPES.has(p.type)) return out;
  return [
    ...out,
    ["full_tiles", "Full Size → Collapse to Tiles"],
    ["tiles", `Tiles → Expand (card default: ${defaultOpen(card)})`],
    ["tiles_inplace", "Tiles → Expand in Place"],
    ["tiles_overlay", "Tiles → Open Over the Other Panels"],
    ["tiles_popup", "Tiles → Open as a Pop-up"],
  ];
}

function defaultOpen(card) {
  const v = card.collapsed_open;
  if (OPEN_LABEL[v]) return OPEN_LABEL[v];
  return card.layout === "fullscreen" || card.screen_fit === "scale" ? "over the other panels" : "in place";
}

const always = (p) => COMPACT_TYPES.has(p.type) && (!!p.compact || (p.type === "air_quality" && p.layout === "compact"));
const own = (v) => (v && v !== "default" ? v : null);

/** The option a panel's current settings amount to. */
export function readView(p = {}, card = {}) {
  const tiles = (open) => (own(open) ? `tiles_${own(open)}` : "tiles");
  if (always(p)) {
    if (own(p.collapsed_view) === "minimal") return p.collapsed === false ? "full_title" : "title_full";
    return p.collapsed === false ? "full_tiles" : tiles(p.collapsed_open);
  }
  if (!p.collapsible) return "full";
  const view = COMPACT_TYPES.has(p.type) ? own(p.collapsed_view) || (card.collapsed_view === "compact" ? "compact" : "minimal") : "minimal";
  if (view === "compact") return p.collapsed ? tiles(p.collapsed_open) : "full_tiles";
  return p.collapsed ? "title_full" : "full_title";
}

/** The panel with the settings for `view` (the others removed). */
export function writeView(p, view, card = {}) {
  const q = { ...p };
  for (const k of VIEW_KEYS) delete q[k];
  if (q.type === "air_quality" && q.layout === "compact") delete q.layout;
  const minimal = () => { if (COMPACT_TYPES.has(q.type) && card.collapsed_view === "compact") q.collapsed_view = "minimal"; };
  // Title options keep the panel's own opening (it applies to them too).
  const keepOpen = () => { if (own(p.collapsed_open)) q.collapsed_open = p.collapsed_open; };
  switch (view) {
    case "full_title": q.collapsible = true; minimal(); keepOpen(); break;
    case "title_full": q.collapsible = true; q.collapsed = true; minimal(); keepOpen(); break;
    case "full_tiles": q.compact = true; q.collapsed = false; q.collapsed_open = "inplace"; break;
    case "tiles": q.compact = true; break;
    case "tiles_inplace": q.compact = true; q.collapsed_open = "inplace"; break;
    case "tiles_overlay": q.compact = true; q.collapsed_open = "overlay"; break;
    case "tiles_popup": q.compact = true; q.collapsed_open = "popup"; break;
    default: break;
  }
  return q;
}

/** What kind of view: "full", "title" (collapses to its title) or "tiles". */
export function viewKind(view) {
  return view === "full" ? "full" : view === "full_title" || view === "title_full" ? "title" : "tiles";
}
