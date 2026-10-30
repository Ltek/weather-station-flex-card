// Config helpers shared by the card and the editor.

const isObj = (v) => v !== null && typeof v === "object" && !Array.isArray(v);

/** Deep merge for config objects (arrays and scalars from `over` replace). */
export function deepMerge(base, over) {
  if (!isObj(over)) return over === undefined ? base : over;
  const out = { ...(isObj(base) ? base : {}) };
  for (const k of Object.keys(over)) out[k] = isObj(over[k]) && isObj(out[k]) ? deepMerge(out[k], over[k]) : over[k];
  return out;
}

/**
 * Minimal object such that deepMerge(base, result) deep-equals `value`.
 * Arrays are atomic (kept whole when they differ). Returns undefined when equal.
 * Keys present in base but absent from value are not representable by a merge
 * and are ignored (the editor never deletes default keys).
 */
export function deepDiff(value, base) {
  if (isObj(value) && isObj(base)) {
    const out = {};
    for (const k of Object.keys(value)) {
      const d = deepDiff(value[k], base[k]);
      if (d !== undefined) out[k] = d;
    }
    return Object.keys(out).length ? out : undefined;
  }
  return JSON.stringify(value) === JSON.stringify(base) ? undefined : value;
}

/** Drop undefined / empty-string / empty-object values (keeps false and 0). */
export function prune(obj) {
  if (!isObj(obj)) return obj;
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === "" || v === null) continue;
    const p = isObj(v) ? prune(v) : v;
    if (isObj(p) && !Object.keys(p).length) continue;
    out[k] = p;
  }
  return out;
}

export const clone = (v) => (v === undefined ? v : JSON.parse(JSON.stringify(v)));

/**
 * Screen fit mode, from `screen_fit` or the settings it replaced (fit_height,
 * fit_strict, auto_fit):
 *   none    no fit: panels are their set heights, the page scrolls
 *   rows    full screen: rows share the screen height; panels grow to fit their content (default)
 *   strict  full screen: every panel is exactly its height; content scrolls inside it
 *   scale   auto-fit: exact heights, and each panel's contents scale to fit the screen
 */
export function fitMode(c = {}) {
  if (["none", "rows", "strict", "scale"].includes(c.screen_fit)) return c.screen_fit;
  if (c.auto_fit) return "scale";
  if (c.fit_height === false) return "none";
  if (c.fit_strict) return "strict";
  return "rows";
}
