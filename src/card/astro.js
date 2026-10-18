// Sun and moon facts for the Sun & Moon and Bulletin panels (SunCalc).
import * as SunCalc from "suncalc";

const PHASES = [
  [0.03, "New moon"], [0.22, "Waxing crescent"], [0.28, "First quarter"], [0.47, "Waxing gibbous"],
  [0.53, "Full moon"], [0.72, "Waning gibbous"], [0.78, "Last quarter"], [0.97, "Waning crescent"], [1.01, "New moon"],
];
export const phaseName = (p) => PHASES.find(([lim]) => p < lim)[1];

/** Next time within `days` the moon phase reaches `target` (0 new, 0.5 full). */
function nextPhase(from, target, days = 31) {
  let prev = SunCalc.getMoonIllumination(from).phase;
  for (let h = 1; h <= days * 24; h++) {
    const d = new Date(from.getTime() + h * 3600e3);
    const p = SunCalc.getMoonIllumination(d).phase;
    // Crossing: phase passes the target (handles the 1 -> 0 wrap for new moon).
    const crossed = target === 0 ? p < prev : prev < target && p >= target;
    if (crossed) return d;
    prev = p;
  }
  return null;
}

export function moonInfo(hass, now = new Date()) {
  const { latitude: lat, longitude: lon } = hass?.config || {};
  const ill = SunCalc.getMoonIllumination(now);
  const times = lat != null ? SunCalc.getMoonTimes(now, lat, lon) : {};
  return {
    phase: ill.phase,
    name: phaseName(ill.phase),
    fraction: ill.fraction,
    rise: times.rise || null,
    set: times.set || null,
    alwaysUp: !!times.alwaysUp,
    alwaysDown: !!times.alwaysDown,
    nextFull: nextPhase(now, 0.5),
    nextNew: nextPhase(now, 0),
  };
}

export function sunInfo(hass, now = new Date()) {
  const { latitude: lat, longitude: lon } = hass?.config || {};
  if (lat == null) return null;
  const t = SunCalc.getTimes(now, lat, lon);
  const daylightMs = t.sunset - t.sunrise;
  return { sunrise: t.sunrise, sunset: t.sunset, noon: t.solarNoon, dawn: t.dawn, dusk: t.dusk, daylightMs };
}

export const timeFmt = (hass) => new Intl.DateTimeFormat(hass?.locale?.language, { hour: "numeric", minute: "2-digit" });
export const dayFmt = (hass) => new Intl.DateTimeFormat(hass?.locale?.language, { weekday: "short", month: "short", day: "numeric" });
