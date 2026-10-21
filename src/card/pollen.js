// Pollen data: species rows, levels, tomorrow's trend and the season calendar.
//
// Source: the Pollen Levels integration (Google Maps Pollen API,
// github.com/eXPerience83/pollenlevels). It creates, per location:
//   - one sensor per pollen type (Grass / Tree / Weed) and per plant (Oak,
//     Juniper, Ragweed …), state = Google's Universal Pollen Index 0–5, with
//     attributes category, inSeason, tomorrow_value, trend (up/down/flat),
//     forecast[], color_hex; plants also carry code, type and season;
//   - summary sensors (top pollen types today, plants in season today, …).
// Other sources can be added as adapters returning the same row shape.

const PL = "pollenlevels";
const SUMMARY_KEYS = new Set(["plants_in_season_today", "overall_pollen_risk_today", "top_pollen_types_today"]);

const TYPE_ICON = { TREE: "mdi:tree", GRASS: "mdi:grass", WEED: "mdi:flower-tulip" };

// Typical Northern-hemisphere pollen months (1 = January) per Google plant
// code, used when Google's season text can't be read. Editable per panel.
export const DEFAULT_SEASONS = {
  ALDER: [1, 2, 3, 4], ASH: [3, 4, 5], BIRCH: [3, 4, 5], COTTONWOOD: [3, 4, 5], ELM: [2, 3, 4],
  MAPLE: [2, 3, 4], OLIVE: [4, 5, 6], JUNIPER: [1, 2, 3, 4], OAK: [3, 4, 5, 6], PINE: [4, 5, 6],
  CYPRESS_PINE: [8, 9, 10], HAZEL: [1, 2, 3], GRAMINALES: [5, 6, 7, 8], RAGWEED: [8, 9, 10],
  MUGWORT: [7, 8, 9], JAPANESE_CEDAR: [2, 3, 4], JAPANESE_CYPRESS: [3, 4],
  TREE: [2, 3, 4, 5, 6], GRASS: [5, 6, 7, 8], WEED: [8, 9, 10],
};

export const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const SEASON_MONTHS = { winter: [12, 1, 2], spring: [3, 4, 5], summer: [6, 7, 8], fall: [9, 10, 11], autumn: [9, 10, 11] };

/**
 * Months (1–12) from a season text such as "Late winter, spring" or
 * "Spring, early summer". Southern hemisphere shifts by six months.
 * Returns [] when nothing is recognised.
 */
export function parseSeason(text, southern = false) {
  if (!text || typeof text !== "string") return [];
  const out = new Set();
  const re = /\b(early|mid|late)?[\s-]*(winter|spring|summer|fall|autumn)\b/gi;
  let m;
  while ((m = re.exec(text))) {
    const months = SEASON_MONTHS[m[2].toLowerCase()];
    const part = (m[1] || "").toLowerCase();
    const pick = part === "early" ? months.slice(0, 2) : part === "late" ? months.slice(1) : part === "mid" ? [months[1]] : months;
    pick.forEach((x) => out.add(x));
  }
  // "winter to spring" style ranges are covered by both words being listed.
  return [...out].map((x) => (southern ? ((x + 5) % 12) + 1 : x)).sort((a, b) => a - b);
}

/** UPI 0–5 -> chip level. */
export function levelOf(value, inSeason) {
  if (value == null || isNaN(value)) return inSeason === false ? "off" : "none";
  if (value <= 0) return inSeason === false ? "off" : "none";
  if (value <= 2) return "low";
  if (value <= 3) return "medium";
  return "high";
}

export const LEVEL_LABEL = { none: "None", low: "Low", medium: "Medium", high: "High", off: "Off season" };

const num = (s) => {
  const n = Number(s);
  return s == null || s === "" || isNaN(n) ? null : n;
};

/** Pollen Levels entities grouped by location (config entry + subentry). */
export function pollenLevelsLocations(hass) {
  const reg = hass?.entities || {};
  const devs = hass?.devices || {};
  const locs = new Map();
  for (const eid in reg) {
    const r = reg[eid];
    if (r?.platform !== PL || !eid.startsWith("sensor.")) continue;
    const st = hass.states[eid];
    if (!st) continue;
    const dev = devs[r.device_id] || {};
    const subs = dev.config_entries_subentries ? JSON.stringify(dev.config_entries_subentries) : "";
    const key = subs || (dev.config_entries || [])[0] || "default";
    if (!locs.has(key)) locs.set(key, { key, devices: new Set(), plants: [], types: [], summary: {} });
    const loc = locs.get(key);
    if (r.device_id) loc.devices.add(r.device_id);
    if (r.entity_category) continue; // region / date / last updated
    if (SUMMARY_KEYS.has(r.translation_key)) { loc.summary[r.translation_key] = eid; continue; }
    const a = st.attributes || {};
    if (a.code) loc.plants.push(eid);
    else if ("category" in a) loc.types.push(eid);
  }
  return [...locs.values()];
}

/** Row for one Pollen Levels sensor. */
function plRow(hass, eid, seasons, southern) {
  const st = hass.states[eid];
  const a = st?.attributes || {};
  const code = String(a.code || "").toUpperCase() || typeFromIcon(a.icon) || typeFromName(a.friendly_name);
  const value = num(st?.state);
  const tomorrow = num(a.tomorrow_value);
  let trend = a.trend;
  if (!trend && value != null && tomorrow != null) trend = tomorrow > value ? "up" : tomorrow < value ? "down" : "flat";
  const months = seasons?.[code] || seasons?.[a.code] || (parseSeason(a.season, southern).length ? parseSeason(a.season, southern) : southernShift(DEFAULT_SEASONS[code], southern)) || [];
  const plantType = String(a.type || "").toUpperCase();
  return {
    entity: eid,
    code,
    name: shortName(a.friendly_name, hass, eid) || code,
    icon: TYPE_ICON[plantType] || TYPE_ICON[code] || a.icon || "mdi:flower-pollen",
    value,
    max: 5,
    pct: value == null ? 0 : Math.max(0, Math.min(100, (value / 5) * 100)),
    inSeason: a.inSeason ?? null,
    level: levelOf(value, a.inSeason),
    category: a.category || null,
    tomorrow,
    trend: trend || null,
    color: a.color_hex || null,
    months: months || [],
  };
}

const southernShift = (months, southern) => (months && southern ? months.map((x) => ((x + 5) % 12) + 1) : months);
const typeFromIcon = (icon) => Object.keys(TYPE_ICON).find((k) => TYPE_ICON[k] === icon) || "";
const typeFromName = (n) => (/grass/i.test(n || "") ? "GRASS" : /tree/i.test(n || "") ? "TREE" : /weed/i.test(n || "") ? "WEED" : "");

// "Pollen plants (Home) Juniper" -> "Juniper": friendly names lead with the device name.
function shortName(friendly, hass, eid) {
  if (!friendly) return "";
  const dev = hass.devices?.[hass.entities?.[eid]?.device_id];
  const dn = dev?.name_by_user || dev?.name;
  if (dn && friendly.startsWith(dn)) return friendly.slice(dn.length).trim() || friendly;
  return friendly;
}

/**
 * Everything the pollen panel shows.
 * config: { device, view: plants|types, species: [codes], max_rows, seasons: {CODE: [months]}, entities: [ids] }
 */
export function pollenModel(config, hass, now = new Date()) {
  const c = config || {};
  const southern = (hass?.config?.latitude ?? 0) < 0;
  let loc = null;
  let ids;
  if (Array.isArray(c.entities) && c.entities.length) {
    ids = c.entities.filter((e) => hass.states[e]);
  } else {
    const locs = pollenLevelsLocations(hass);
    loc = (c.device && locs.find((l) => l.devices.has(c.device))) || locs[0] || null;
    if (!loc) return { source: null, rows: [], entities: [] };
    ids = c.view === "types" ? loc.types : loc.plants.length ? loc.plants : loc.types;
  }
  let rows = ids.map((e) => plRow(hass, e, c.seasons, southern));
  if (Array.isArray(c.species) && c.species.length) {
    const want = c.species.map((s) => String(s).toUpperCase());
    rows = want.map((w) => rows.find((r) => r.code === w || r.name.toUpperCase() === w)).filter(Boolean);
  } else {
    // Busiest first: highest today, then in season, then name.
    rows.sort((a, b) => (b.value ?? -1) - (a.value ?? -1) || Number(b.inSeason === true) - Number(a.inSeason === true) || a.name.localeCompare(b.name));
    const max = Number(c.max_rows ?? 6);
    if (max > 0) rows = rows.slice(0, max);
  }
  const month = now.getMonth() + 1;
  // The strip and "due next" use every species shown, in season or not.
  const strip = Array.from({ length: 12 }, (_, i) => rows.filter((r) => r.months.includes(i + 1)).length);
  const top = rows.filter((r) => (r.value ?? 0) > 0).sort((a, b) => b.value - a.value)[0] || null;
  const none = (r) => (r.value ?? 0) <= 0;
  const inSeason = (r) => (r.value ?? 0) > 0 || r.inSeason === true || (r.inSeason == null && r.months.includes(month));
  const anyIn = rows.some(inSeason);
  const all = rows;
  // Off-season species are hidden by default (hide_off_season: false shows them).
  if (c.hide_off_season !== false) rows = rows.filter(inSeason);
  // Species with nothing in the air today (level None) are hidden too (hide_none: false shows them).
  if (c.hide_none !== false) rows = rows.filter((r) => !none(r));
  let status;
  if (top) status = `${top.name} ${LEVEL_LABEL[top.level].toLowerCase()} today`;
  else if (anyIn) status = "In season, but nothing in the air today";
  else status = ["Out of season", nextDue(all, month)].filter(Boolean).join(" · ");
  const summary = loc?.summary || {};
  return {
    // show_source / show_location: false hide them; source / location replace the text.
    source: c.show_source === false ? "" : c.source || (c.entities?.length ? "Pollen" : "Google"),
    town: c.show_location === false ? "" : c.location || hass?.config?.location_name || "",
    anyIn,
    top,
    status,
    rows,
    total: all.length,
    outOfSeason: all.length > 0 && !anyIn,
    strip,
    month,
    entities: [...ids, ...Object.values(summary)],
  };
}

/** "Hazel due in January" — the species whose season starts soonest. */
export function nextDue(rows, month) {
  let best = null;
  for (const r of rows) {
    if (!r.months.length) continue;
    for (let d = 1; d <= 12; d++) {
      const m = ((month - 1 + d) % 12) + 1;
      if (r.months.includes(m)) {
        if (!best || d < best.d) best = { r, d, m };
        break;
      }
    }
  }
  return best ? `${best.r.name} due in ${MONTHS[best.m - 1]}` : "";
}
