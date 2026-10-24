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
  .lightning-flash { animation-duration: calc(20s * var(--wsfc-anim-lightning, 1)); }
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

export const ANIM_SPEEDS = [
  ["anim_twinkle", "--wsfc-anim-twinkle", "Star twinkle"],
  ["anim_clouds", "--wsfc-anim-clouds", "Cloud drift"],
  ["anim_rain", "--wsfc-anim-rain", "Rain"],
  ["anim_snow", "--wsfc-anim-snow", "Snow"],
  ["anim_sun", "--wsfc-anim-sun", "Sun rays"],
  ["anim_lightning", "--wsfc-anim-lightning", "Lightning"],
];

/** CSS variables for the configured speeds (percent, 100 = normal). */
export function animSpeedVars(c) {
  const out = [];
  for (const [key, v] of ANIM_SPEEDS) {
    let pct = Number(c?.[key]);
    if (pct > 0) pct = Math.max(SPEED_MIN, Math.min(SPEED_MAX, pct));
    if (pct > 0 && pct !== 100) out.push(`${v}:${(100 / pct).toFixed(3)}`);
  }
  return out;
}
