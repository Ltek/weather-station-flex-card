// Open icons offered in Layout & Behavior (the first is the default):
// small = a folded panel opening over the others; full = expand to the whole
// card, tap-to-open tiles and panels that open as a pop-up.
export const OPEN_ICONS_SMALL = ["picture-in-picture-top-right", "open-in-new", "resize", "image-size-select-large", "dock-window"];
export const OPEN_ICONS_FULL = ["arrow-expand", "fullscreen", "arrow-expand-all"];

/**
 * The icon for a setting: a listed name, "custom" (+ the *_custom icon), or
 * any "prefix:name" icon typed in YAML.
 */
export function openIcon(c, key, list) {
  const v = c?.[key];
  if (v === "custom" && c[`${key}_custom`]) return c[`${key}_custom`];
  if (typeof v === "string" && v.includes(":")) return v;
  return `mdi:${list.includes(v) ? v : list[0]}`;
}
