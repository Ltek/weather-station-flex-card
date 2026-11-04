// Sunlight Visualizer (NoUsername10/Sunlight_Visualizer): finding its sensors,
// naming the house's walls by compass direction, how strong the sun is right now
// (best source first), and the "Sun on the house" alert rule.
//
// Its surface azimuths (integration sensor.py, _get_surface_azimuths):
//   front = house angle, right = +90, back = +180, left = +270 (degrees, clockwise from north).
import * as SunCalc from "suncalc";
import { metricValue, integrationOf } from "./resolve.js";

export const SV_ATTR = "sunlight_visualizer_source";
export const SV_VALUE = "sunlight_visualizer";
export const WALLS = ["front", "right", "back", "left"];
const OFFSET = { front: 0, right: 90, back: 180, left: 270 };
const COMPASS = ["North", "North-east", "East", "South-east", "South", "South-west", "West", "North-west"];

const isSv = (hass, eid) => hass?.states?.[eid]?.attributes?.[SV_ATTR] === SV_VALUE || hass?.entities?.[eid]?.platform === SV_VALUE;
const live = (st) => st && !["unknown", "unavailable", ""].includes(st.state);

/**
 * Sunlight Visualizer's entities: { walls: { front, right, back, left }, roof, houseAngle,
 * shortwave, all } (entity ids; null when missing), or null when it isn't installed.
 * Found by the attribute its entities carry, else by its documented entity ids.
 */
export function svEntities(hass) {
  const ids = Object.keys(hass?.states || {});
  const own = ids.filter((e) => isSv(hass, e));
  const pool = own.length ? own : ids;
  const pick = (re) => pool.find((e) => re.test(e)) || null;
  const walls = Object.fromEntries(WALLS.map((w) => [w, pick(new RegExp(`^sensor\\.${w}_wall_sunlight(_\\d+)?$`))]));
  if (!own.length && !Object.values(walls).some(Boolean)) return null;
  return {
    walls,
    roof: pick(/^sensor\.roof_sunlight(_\d+)?$/),
    houseAngle: pick(/^number\.house_angle(_\d+)?$/),
    shortwave: pick(/^sensor\.open_meteo_shortwave_radiation(_\d+)?$/),
    all: own,
  };
}

/** The house's front direction (degrees): the wall sensors' house_angle, else number.house_angle. */
export function houseAngle(hass, sv) {
  if (!sv) return null;
  for (const e of Object.values(sv.walls)) {
    const a = Number(hass?.states?.[e]?.attributes?.house_angle);
    if (e && Number.isFinite(a)) return a;
  }
  const n = Number(hass?.states?.[sv.houseAngle]?.state);
  return Number.isFinite(n) ? n : null;
}

/** Each wall's facing direction (degrees clockwise from north). */
export function wallBearings(angle) {
  const a = Number(angle) || 0;
  return Object.fromEntries(WALLS.map((w) => [w, (((a + OFFSET[w]) % 360) + 360) % 360]));
}

/** "West" for 270, "South-west" for 225 (8 points). */
export function compassName(deg) {
  return COMPASS[Math.round((((Number(deg) % 360) + 360) % 360) / 45) % 8];
}

/** Clear-sky sunlight on flat ground (W/m², Haurwitz) at a sun elevation in degrees. */
export function clearSky(elevation) {
  const s = Math.sin((Number(elevation) * Math.PI) / 180);
  return s > 0.01 ? 1098 * s * Math.exp(-0.057 / s) : 0;
}

/** Clear-sky sunlight cut by cloud cover (0–100 %, Kasten–Czeplak). */
export function cloudy(ghi, cover) {
  const c = Math.max(0, Math.min(100, Number(cover) || 0)) / 100;
  return ghi * (1 - 0.75 * c ** 3.4);
}

const wm2 = (v) => v && Number.isFinite(Number(v.value)) && (!v.unit || /w\/m/i.test(v.unit));

/**
 * How strong the sun is right now, best source first:
 *   1. a solar radiation sensor in the Data Sources list (the station's first)
 *   2. Sunlight Visualizer's Open-Meteo sunlight sensor
 *   3. the card's own Open-Meteo request (`om` = openMeteoNow() data)
 *   4. a clear-sky estimate cut by the weather entity's cloud cover
 * -> { value, unit, source, entity, how: "measured" | "forecast" | "estimate" } or null.
 */
export function sunStrength(hass, station, c = {}, om = null, sv = svEntities(hass), now = new Date()) {
  const m = metricValue(station, hass, "solar_radiation");
  if (wm2(m) && !String(m.entity).startsWith("weather.")) return { value: Number(m.value), unit: "W/m²", source: integrationOf(hass, m.entity) || "Your sensor", entity: m.entity, how: "measured" };
  const sw = sv?.shortwave && hass.states[sv.shortwave];
  if (live(sw) && Number.isFinite(Number(sw.state))) return { value: Number(sw.state), unit: "W/m²", source: "Sunlight Visualizer (Open-Meteo)", entity: sv.shortwave, how: "forecast" };
  const o = om?.sky?.shortwave_radiation;
  if (o && Number.isFinite(Number(o.value))) return { value: Number(o.value), unit: "W/m²", source: "Open-Meteo", entity: null, how: "forecast" };
  const lat = hass?.config?.latitude, lon = hass?.config?.longitude;
  if (lat == null || lon == null) return null;
  const el = (SunCalc.getPosition(now, lat, lon).altitude * 180) / Math.PI;
  const w = hass.states[c.entity];
  const cover = Number(w?.attributes?.cloud_coverage ?? om?.sky?.cloud_cover?.value);
  const value = Math.round(Number.isFinite(cover) ? cloudy(clearSky(el), cover) : clearSky(el));
  return { value, unit: "W/m²", source: Number.isFinite(cover) ? "Estimate from cloud cover" : "Clear-sky estimate", entity: Number.isFinite(cover) ? c.entity || null : null, how: "estimate" };
}

/** Temperature now in the alert's unit (°F, or °C on a metric system) with its entity. */
export function tempNow(hass, station) {
  const t = metricValue(station, hass, "temperature");
  if (!t || !Number.isFinite(Number(t.value))) return null;
  const metric = hass?.config?.unit_system?.temperature === "°C";
  let v = Number(t.value);
  if (t.unit === "°C" && !metric) v = (v * 9) / 5 + 32;
  if (t.unit === "°F" && metric) v = ((v - 32) * 5) / 9;
  return { value: v, unit: metric ? "°C" : "°F", entity: t.entity };
}

/** Default thresholds (the temperature one in the HA unit system). */
export function sunDefaults(hass) {
  const metric = hass?.config?.unit_system?.temperature === "°C";
  return { alignment: 50, solar: 600, temp: metric ? 27 : 80 };
}

/** The alert's thresholds from the card config. */
export function sunThresholds(c = {}, hass) {
  const d = sunDefaults(hass);
  const n = (v, def) => (Number.isFinite(Number(v)) && v !== "" && v != null ? Number(v) : def);
  return { alignment: n(c.alerts_sun_alignment, d.alignment), solar: n(c.alerts_sun_solar, d.solar), temp: n(c.alerts_sun_temp, d.temp) };
}

const joinNames = (a) => (a.length <= 1 ? a.join("") : `${a.slice(0, -1).join(", ")} and ${a[a.length - 1]}`);

/**
 * The "Sun on the house" alert, or null. `prev` = walls that were on last time
 * (a Set, kept by the caller): a wall stays on until a reading falls below 90 % of its threshold.
 * -> { text, walls: [{ wall, name, alignment }], sun, temp, on: Set }
 */
export function sunAlert(hass, station, c = {}, om = null, prev = new Set(), now = new Date()) {
  const sv = svEntities(hass);
  if (!sv) return { on: new Set() };
  const th = sunThresholds(c, hass);
  const sun = sunStrength(hass, station, c, om, sv, now), temp = tempNow(hass, station);
  const bear = wallBearings(houseAngle(hass, sv) ?? 0);
  const on = new Set(), walls = [];
  for (const w of WALLS) {
    const st = sv.walls[w] && hass.states[sv.walls[w]];
    const a = live(st) ? Number(st.state) : NaN;
    if (!Number.isFinite(a) || !sun || !temp) continue;
    const k = prev.has(w) ? 0.9 : 1;
    // (Temperature: 2 °F / 1 °C below the threshold once on.)
    if (a >= th.alignment * k && sun.value >= th.solar * k && temp.value >= th.temp - (prev.has(w) ? (temp.unit === "°C" ? 1 : 2) : 0)) {
      on.add(w);
      walls.push({ wall: w, name: compassName(bear[w]), alignment: a });
    }
  }
  if (!walls.length) return { on, sun, temp };
  walls.sort((x, y) => y.alignment - x.alignment);
  const names = joinNames(walls.map((x, i) => (i ? x.name.toLowerCase() : x.name)));
  const text = `${names} side${walls.length > 1 ? "s" : ""}: strong direct sun, ${Math.round(temp.value)} ${temp.unit}`;
  return { text, walls, sun, temp, on };
}
