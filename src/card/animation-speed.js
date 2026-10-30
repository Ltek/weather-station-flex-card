// Animation speeds for the weather animation (card background and the hero's
// own): extra rules appended to the vendored provider's styles, driven by CSS
// variables the card sets (they inherit into the hero's provider too). Each is
// a duration multiplier: 2 = half as fast. Speeds are 10–150 %.
export const SPEED_MIN = 10, SPEED_MAX = 150;
import { css } from "lit";
import { WeatherAnimationProvider } from "../../vendor/weather-forecast-card/src/components/animation/wfc-animation-provider";

const SPEED_CSS = css`
  .star { animation-duration: calc(3s * var(--wsfc-anim-twinkle, 1)); }
  .cloud-track { animation-duration: calc(var(--cloud-drift-duration, 80s) * var(--wsfc-anim-clouds, 1)); }
  .raindrop, .splat { animation-duration: calc(var(--duration) * var(--wsfc-anim-rain, 1)); animation-delay: calc(var(--delay) * var(--wsfc-anim-rain, 1)); }
  .snowflake { animation-duration: calc(var(--duration) * var(--wsfc-anim-snow, 1)); animation-delay: calc(var(--delay) * var(--wsfc-anim-snow, 1)); }
  .cloud { filter: var(--wsfc-cloud-filter, url(#wfc-cloud-rough)); will-change: var(--wsfc-cloud-will, auto); }
  .cloud.night { filter: var(--wsfc-cloud-filter-night, url(#wfc-cloud-rough) brightness(0.5)); }
  :host { --sun-spin-duration: calc(var(--weather-forecast-card-effects-sun-spin-duration, 100s) * var(--wsfc-anim-sun, 1)); }
`;

// Lit finalizes a class's styles when it is defined (the vendored module does
// that on import), so the rules are added to the finalized list; it is read
// when each provider instance is created, and none exists yet at this point.
if (!WeatherAnimationProvider.__wsfcSpeed) {
  WeatherAnimationProvider.finalize?.();
  WeatherAnimationProvider.elementStyles = [...(WeatherAnimationProvider.elementStyles || []), SPEED_CSS];
  WeatherAnimationProvider.__wsfcSpeed = true;
  // The provider picks new random stars / drops / rays on every weather update
  // (every few seconds in Home Assistant), which restarts each twinkle at a new
  // point: stars looked slow, then fast, then slow. Keep each kind of particle
  // while its count and the panel height are unchanged; a real change (more
  // rain, another condition, a resize) still gets new ones.
  const proto = WeatherAnimationProvider.prototype;
  // Cloud and fog drift speed follows the forecast wind (and the speed slider),
  // and its direction the wind's. A CSS animation whose duration or direction
  // changes jumps to a new position; keep each track where it was and carry on
  // at the new speed. Wind gusts likewise keep their progress.
  const DRIFT = new Set(["cloud-drift", "wind-gust"]);
  const tracks = (el) => [...(el.renderRoot?.querySelectorAll?.(".cloud-track, .fog-track, .wind-path") || [])];
  const anim = (t) => t.getAnimations?.().find((a) => DRIFT.has(a.animationName));
  const where = (a, t) => {
    const d = Number(a?.effect?.getComputedTiming?.().duration);
    const del = Number(a?.effect?.getTiming?.().delay) || 0;
    const c = Number(a?.currentTime);
    return d > 0 && Number.isFinite(c) ? { d, del, f: ((((c - del) % d) + d) % d) / d, rev: t.classList.contains("drift-right") || t.classList.contains("left") } : null;
  };
  const before = proto.willUpdate;
  proto.willUpdate = function (changed) {
    this.__wsfcDrift = new Map(tracks(this).map((t) => [t, where(anim(t), t)]));
    return before?.call(this, changed);
  };
  const after = proto.updated;
  proto.updated = function (changed) {
    const r = after?.call(this, changed);
    const prev = this.__wsfcDrift || new Map();
    tracks(this).forEach((t) => {
      const a = anim(t), was = prev.get(t), now = where(a, t);
      if (!a || !was || !now) return;
      // A reversed drift runs the same keyframes backwards: mirror the progress so the track stays put.
      const f = was.rev !== now.rev ? 1 - was.f : was.f;
      if (Math.abs(now.d - was.d) > 1 || was.rev !== now.rev) a.currentTime = now.del + f * now.d;
    });
    return r;
  };
  const compute = proto.computeParticles;
  if (typeof compute === "function") {
    proto.computeParticles = function () {
      const next = compute.call(this);
      const prev = this.__wsfcParticles;
      const h = this._containerHeight;
      if (prev && prev.h === h) {
        const byType = (list) => list.reduce((m, p) => ((m[p.type] ||= []).push(p), m), {});
        const a = byType(prev.list), b = byType(next);
        for (const t of Object.keys(b)) if (a[t] && a[t].length === b[t].length) b[t] = a[t];
        const kept = next.map(() => null);
        const idx = {};
        next.forEach((p, i) => { idx[p.type] = (idx[p.type] ?? -1) + 1; kept[i] = b[p.type][idx[p.type]]; });
        this.__wsfcParticles = { h, list: kept };
        return kept;
      }
      this.__wsfcParticles = { h, list: next };
      return next;
    };
  }
}

// Low-power animation: each cloud on its own layer, no turbulence edges.
export const LOW_POWER_VARS = "--wsfc-cloud-will:transform;--wsfc-cloud-filter:none;--wsfc-cloud-filter-night:brightness(0.5);--wsfc-fog-filter:none;--wsfc-fog-filter-night:brightness(0.55);--wsfc-wind-filter:opacity(1)";

export const ANIM_SPEEDS = [
  ["anim_twinkle", "--wsfc-anim-twinkle", "Star twinkle"],
  ["anim_clouds", "--wsfc-anim-clouds", "Cloud drift"],
  ["anim_rain", "--wsfc-anim-rain", "Rain"],
  ["anim_snow", "--wsfc-anim-snow", "Snow"],
  ["anim_sun", "--wsfc-anim-sun", "Sun rays"],
  ["anim_fog", "--wsfc-anim-fog", "Fog drift"],
  ["anim_hail", "--wsfc-anim-hail", "Hail"],
  ["anim_wind", "--wsfc-anim-wind", "Wind gusts"],
];

/** CSS variables for the configured speeds (percent, 100 = normal). */
export function animSpeedVars(c) {
  const out = [];
  // Overall speed multiplies every effect's own speed.
  const all = Math.max(SPEED_MIN, Math.min(SPEED_MAX, Number(c?.anim_speed) || 100)) / 100;
  for (const [key, v] of ANIM_SPEEDS) {
    let pct = Number(c?.[key]);
    pct = pct > 0 ? Math.max(SPEED_MIN, Math.min(SPEED_MAX, pct)) : 100;
    const k = (pct / 100) * all;
    if (Math.abs(k - 1) > 1e-6) out.push(`${v}:${(1 / k).toFixed(3)}`);
  }
  return out;
}
