// Panel placement on the 12-column grid. Each grid row unit is 4 tracks (quarter
// rows), so heights and positions go in steps of 0.25.
//
// A panel's place: x (column 0–11), y (rows from the top, quarter steps), its
// span (columns) and rows (height; 0 = fit content, placed in half a row that grows).
// Panels without x / y are placed in reading order, the way CSS grid would
// (sparse auto-placement), so configs from before free placement look the same.
//
//   arrange(items, { gravity }) -> Map key → { x, y, w, h }   (y, h in tracks)
//   pushDown(items, key, at, { gravity }) -> the same, with `key` placed at `at`
//                                            and the panels in its way moved down
export const Q = 4; // tracks per row unit
export const COLS = 12;

// Height 0 (fit content) takes two tracks, as before quarter rows: its tracks grow
// with its content, and fewer tracks means fewer gaps inside it.
export const toTracks = (rows) => (Number(rows) > 0 ? Math.max(1, Math.round(Number(rows) * Q)) : 2);
export const toRows = (tracks) => Math.round((tracks / Q) * 100) / 100;

const overlaps = (a, b) => a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;

function Grid() {
  const placed = [];
  return {
    placed,
    free: (r) => r.x >= 0 && r.x + r.w <= COLS && r.y >= 0 && !placed.some((p) => overlaps(p, r)),
    add: (r) => placed.push(r),
  };
}

/** CSS grid's sparse auto-placement (row-major): the result a plain grid gives. */
function flowInto(g, items, out, cursor = { x: 0, y: 0 }) {
  for (const it of items) {
    const w = Math.min(COLS, it.w);
    let { x, y } = cursor;
    for (let guard = 0; guard < 10000; guard++) {
      if (x + w > COLS) { x = 0; y++; continue; }
      if (g.free({ x, y, w, h: it.h })) break;
      x++;
    }
    const r = { key: it.key, x, y, w, h: it.h };
    g.add(r); out.set(it.key, r);
    cursor = { x: x + w, y };
  }
  return cursor;
}

/** Move every panel up as far as it goes, top to bottom (columns never change). */
function settle(list) {
  const done = [];
  for (const r of [...list].sort((a, b) => a.y - b.y || a.x - b.x)) {
    let y = r.y;
    while (y > 0 && !done.some((d) => overlaps(d, { ...r, y: y - 1 }))) y--;
    r.y = y;
    done.push(r);
  }
}

/**
 * items: [{ key, w, h, x?, y? }] (w columns, h tracks; x, y in columns / tracks).
 * Placed panels keep their place (moved down if they'd overlap one above them),
 * unplaced ones flow into the rest in their order. gravity: close gaps upward.
 */
export function arrange(items, { gravity = true } = {}) {
  const out = new Map(), g = Grid();
  const fixed = items.filter((it) => it.x != null && it.y != null).sort((a, b) => a.y - b.y || a.x - b.x);
  for (const it of fixed) {
    const w = Math.min(COLS, it.w), x = Math.max(0, Math.min(COLS - w, Math.round(it.x)));
    let y = Math.max(0, Math.round(it.y));
    while (!g.free({ x, y, w, h: it.h })) y++;
    const r = { key: it.key, x, y, w, h: it.h };
    g.add(r); out.set(it.key, r);
  }
  // Unplaced panels flow in reading order; with placed ones present they go below
  // them (a panel added to a placed layout lands at the bottom, not in a gap).
  const start = fixed.length ? { x: 0, y: Math.max(...[...out.values()].map((r) => r.y + r.h)) } : { x: 0, y: 0 };
  flowInto(g, items.filter((it) => !(it.x != null && it.y != null)), out, start);
  if (gravity && fixed.length) settle([...out.values()]);
  return out;
}

/** Place `key` at { x, y } (and size { w, h } if given); everything in its way moves down. */
export function pushDown(items, key, at, { gravity = true } = {}) {
  const cur = arrange(items, { gravity });
  const me = cur.get(key);
  if (!me) return cur;
  const w = Math.min(COLS, at.w ?? me.w), h = at.h ?? me.h;
  const moved = { key, x: Math.max(0, Math.min(COLS - w, Math.round(at.x))), y: Math.max(0, Math.round(at.y)), w, h };
  const out = new Map([[key, moved]]);
  const placed = [moved];
  for (const r of [...cur.values()].filter((r) => r.key !== key).sort((a, b) => a.y - b.y || a.x - b.x)) {
    const n = { ...r };
    for (let guard = 0; guard < 10000 && placed.some((p) => overlaps(p, n)); guard++) {
      n.y = Math.max(...placed.filter((p) => overlaps(p, n)).map((p) => p.y + p.h));
    }
    placed.push(n); out.set(n.key, n);
  }
  if (gravity) {
    // Close gaps, but the dropped panel stays where it was put unless there's room above it.
    settle([...out.values()]);
  }
  return out;
}

/** Keys in reading order (top to bottom, left to right). */
export const readingOrder = (pos) => [...pos.values()].sort((a, b) => a.y - b.y || a.x - b.x).map((r) => r.key);
