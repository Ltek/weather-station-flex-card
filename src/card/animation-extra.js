// Extra weather animations for the conditions the vendored provider leaves
// blank, drawn in the same style as its own (same sky gradients, cloud sprites,
// turbulence filter, particle paths, wind-driven drift):
//   fog            overcast sky + mist banks drifting with the wind
//   hail           storm sky + clouds + hailstones that bounce when they land
//   windy          clear sky + sun/moon + gust streaks blowing with the wind
//   windy-variant  as windy, plus drifting clouds
//   exceptional    overcast sky + a slow amber glow
// and an overcast sky + grey cloud deck behind rain, snow and storms (the
// provider draws those on a bare background). New effects: fog, hail, wind,
// exceptional (show_condition_effects: true includes them).
import { css, html, nothing } from "lit";
import { WeatherAnimationProvider } from "../../vendor/weather-forecast-card/src/components/animation/wfc-animation-provider";

export const EXTRA_EFFECTS = ["fog", "hail", "wind", "exceptional"];

const OVERCAST = new Set(["cloudy", "fog", "rainy", "pouring", "snowy", "snowy-rainy", "lightning", "lightning-rainy", "hail", "exceptional"]);
const STORM = new Set(["pouring", "lightning", "lightning-rainy", "hail"]);
const PRECIP = new Set(["rainy", "pouring", "snowy", "snowy-rainy", "lightning", "lightning-rainy", "hail"]);
// Drawing order, back to front (the provider stacks its layers in DOM order).
const ORDER = ["sky", "exceptional", "sun", "moon", "cloud", "fog", "rain", "snow", "hail", "wind", "lightning"];
const rnd = (a, b) => a + Math.random() * (b - a);

const EXTRA_CSS = css`
  :host {
    --fog-color: var(--weather-forecast-card-effects-fog-color, var(--cloud-color));
    --hail-color: var(--weather-forecast-card-effects-hail-color, #eef4fb);
    --wind-color: var(--weather-forecast-card-effects-wind-color, rgba(255, 255, 255, 0.55));
    --exceptional-color: var(--weather-forecast-card-effects-exceptional-color, rgba(255, 166, 0, 0.32));
  }
  :host(.light) { --wind-color: var(--weather-forecast-card-effects-wind-color, rgba(255, 255, 255, 0.75)); }

  /* Storm deck: the overcast sky, a step darker. */
  .sky.overcast.storm, .night-sky.overcast.storm { filter: brightness(0.72) saturate(0.85); }

  /* Fog: soft banks in the cloud colour, roughened by their own turbulence, on the cloud drift. */
  .fog-haze { position: absolute; inset: 0; border-radius: inherit;
    background: linear-gradient(180deg, transparent 0%, color-mix(in srgb, var(--fog-color), transparent 85%) 30%, color-mix(in srgb, var(--fog-color), transparent 70%) 65%, color-mix(in srgb, var(--fog-color), transparent 55%) 100%); }
  .fog-track { position: absolute; inset: 0; width: 200%; animation: cloud-drift calc(var(--fog-duration, 120s) * var(--wsfc-anim-fog, 1)) linear infinite; will-change: transform; }
  .fog-track.drift-right { animation-direction: reverse; }
  .fog-bank { position: absolute; filter: var(--wsfc-fog-filter, url(#wfc-fog-rough)); }
  .fog-bank::before { content: ""; position: absolute; inset: 0; filter: blur(14px);
    background:
      radial-gradient(30% 50% at 18% 55%, var(--fog-color) 0 45%, transparent 70%),
      radial-gradient(34% 60% at 45% 50%, var(--fog-color) 0 45%, transparent 70%),
      radial-gradient(30% 55% at 72% 52%, var(--fog-color) 0 45%, transparent 70%),
      radial-gradient(60% 40% at 50% 62%, var(--fog-color) 0 40%, transparent 72%); }
  .fog-bank.night { filter: var(--wsfc-fog-filter-night, url(#wfc-fog-rough) brightness(0.55)); }
  .fog-breathe { position: absolute; inset: 0; animation: fog-breathe calc(14s * var(--wsfc-anim-fog, 1)) ease-in-out infinite alternate; }

  /* Hail: pellets on the raindrop paths (same wind angle), bouncing where they land. */
  .hailstone { position: absolute; left: 0; top: 0; width: var(--hail-size); height: var(--hail-size); border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #fff 0 30%, var(--hail-color) 60%, color-mix(in srgb, var(--hail-color), #8aa0b8 35%) 100%);
    box-shadow: 0 0 2px rgba(255, 255, 255, 0.6);
    animation: hail-fall calc(var(--duration) * var(--wsfc-anim-hail, 1)) linear infinite; animation-delay: calc(var(--delay) * var(--wsfc-anim-hail, 1)); }

  /* Wind: thin arcs blowing across, faded at both ends. */
  .wind-path { position: absolute; left: 0; right: 0; top: var(--y); height: 30px; opacity: 0;
    animation: wind-gust calc(var(--duration) * var(--wsfc-anim-wind, 1)) ease-in-out infinite; animation-delay: calc(var(--delay) * var(--wsfc-anim-wind, 1)); }
  .wind-path.left { animation-name: wind-gust-left; }
  .wind-streak { position: absolute; left: 0; top: 0; width: var(--len); height: 100%; border-top: var(--thick) solid var(--wind-color); border-radius: 50%;
    -webkit-mask-image: linear-gradient(90deg, transparent, #000 30%, #000 70%, transparent); mask-image: linear-gradient(90deg, transparent, #000 30%, #000 70%, transparent); }
  .wind-path.left .wind-streak { transform: scaleX(-1); }
  .wind-streak.curl { border-radius: 60% 40% 50% 50% / 100% 100% 0 0; }

  /* Exceptional: a slow amber glow over the overcast sky. */
  .exceptional-glow { position: absolute; inset: 0; border-radius: inherit;
    background: radial-gradient(70% 60% at 50% 20%, var(--exceptional-color), transparent 70%);
    animation: exceptional-pulse calc(6s * var(--wsfc-anim-exceptional, 1)) ease-in-out infinite alternate; }

  @keyframes fog-breathe { from { opacity: 0.75; } to { opacity: 1; } }
  @keyframes hail-fall {
    0% { opacity: 1; transform: translate3d(0, 0, 0); }
    70% { opacity: 1; transform: translate3d(0, calc(var(--landing-pos-y) + var(--drop-start-pos-diff-y)), 0); }
    80% { opacity: 0.9; transform: translate3d(calc(var(--bounce-x) * 0.6), calc(var(--landing-pos-y) + var(--drop-start-pos-diff-y) - var(--bounce)), 0); }
    90% { opacity: 0.6; transform: translate3d(var(--bounce-x), calc(var(--landing-pos-y) + var(--drop-start-pos-diff-y)), 0); }
    100% { opacity: 0; transform: translate3d(var(--bounce-x), calc(var(--landing-pos-y) + var(--drop-start-pos-diff-y)), 0); }
  }
  @keyframes wind-gust {
    0% { opacity: 0; transform: translate3d(-35%, 0, 0); }
    15% { opacity: var(--op); }
    50% { transform: translate3d(35%, 6px, 0); }
    85% { opacity: var(--op); }
    100% { opacity: 0; transform: translate3d(110%, -4px, 0); }
  }
  @keyframes wind-gust-left {
    0% { opacity: 0; transform: translate3d(110%, 0, 0); }
    15% { opacity: var(--op); }
    50% { transform: translate3d(35%, 6px, 0); }
    85% { opacity: var(--op); }
    100% { opacity: 0; transform: translate3d(-35%, -4px, 0); }
  }
  @keyframes exceptional-pulse { from { opacity: 0.35; } to { opacity: 1; } }
`;

if (!WeatherAnimationProvider.__wsfcExtra) {
  WeatherAnimationProvider.__wsfcExtra = true;
  WeatherAnimationProvider.finalize?.();
  WeatherAnimationProvider.elementStyles = [...(WeatherAnimationProvider.elementStyles || []), EXTRA_CSS];
  const proto = WeatherAnimationProvider.prototype;

  const enabled = (el, fx) => {
    const c = el.config?.show_condition_effects;
    return c === true || (Array.isArray(c) && c.includes(fx));
  };
  // The provider's own code draws an overcast deck only for `cloudy`; call it as if cloudy.
  const asCloudy = (el) => Object.create(el, { weatherEntity: { value: { ...el.weatherEntity, state: "cloudy" } } });
  const overcast = (el) => OVERCAST.has(el.weatherEntity?.state);

  // The editor's background preview picks day or night itself.
  const night = proto.isNightTime;
  proto.isNightTime = function () {
    return typeof this.wsfcNight === "boolean" ? this.wsfcNight : night.call(this);
  };

  const active = proto.getActiveEffects;
  proto.getActiveEffects = function () {
    const out = new Set(active.call(this));
    const s = this.weatherEntity?.state;
    const sorted = () => [...out].sort((a, b) => ORDER.indexOf(a) - ORDER.indexOf(b));
    if (!s || !this.config?.show_condition_effects) return sorted();
    const add = (fx) => enabled(this, fx) && out.add(fx);
    if (OVERCAST.has(s)) add("sky");
    if (PRECIP.has(s) || s === "windy-variant") add("cloud");
    if (s === "fog") add("fog");
    if (s === "hail") add("hail");
    if (s === "exceptional") add("exceptional");
    if (s === "windy" || s === "windy-variant") {
      add("sky");
      add(this.isNightTime() ? "moon" : "sun");
      add("wind");
    }
    return sorted();
  };

  proto.renderSky = function () {
    const base = this.isNightTime() ? "night-sky" : "sky";
    const s = this.weatherEntity?.state;
    return html`<div class="${base}${overcast(this) ? " overcast" : ""}${STORM.has(s) ? " storm" : ""}"></div>`;
  };

  // Clouds: the overcast deck for every overcast condition, kept until it changes.
  const computeClouds = proto.computeCloudParticles;
  proto.computeCloudParticles = function () {
    return computeClouds.call(overcast(this) ? asCloudy(this) : this);
  };
  proto.getStableCloudParticles = function () {
    const sig = `${overcast(this) ? "overcast" : "partly"}:${this.isNightTime()}`;
    if (sig !== this._cloudSignature || !this._cloudParticles?.length) {
      this._cloudParticles = this.computeCloudParticles();
      this._cloudSignature = sig;
    }
    return this._cloudParticles;
  };

  const compute = proto.computeParticles;
  proto.computeParticles = function () {
    const list = compute.call(this);
    const fx = this.getActiveEffects();
    if (fx.includes("fog")) list.push(...fogBanks(this));
    if (fx.includes("hail")) list.push(...hailstones(this));
    if (fx.includes("wind")) list.push(...gusts(this));
    return list;
  };

  const render = proto.render;
  const EXTRA = { fog: (el) => renderFog(el), hail: (el) => renderHail(el), wind: (el) => renderWind(el), exceptional: () => html`<div class="exceptional-glow"></div>` };
  proto.render = function () {
    const fx = this.getActiveEffects();
    if (!fx.some((f) => EXTRA[f])) return render.call(this);
    // The provider's own layers one at a time, so new ones slot in at their depth.
    try {
      return html`${fx.map((f) => {
        if (EXTRA[f]) return EXTRA[f](this);
        this.getActiveEffects = () => [f];
        return render.call(this);
      })}`;
    } finally {
      delete this.getActiveEffects;
    }
  };
}

// --- Fog ---------------------------------------------------------------------
function fogBanks(el) {
  const out = [], night = el.isNightTime();
  // Three depths: far banks high and faint, near banks low and dense.
  [[3, 0.22, 0.38, 0.7], [3, 0.45, 0.62, 0.85], [3, 0.7, 0.9, 0.85]].forEach(([n, y0, y1, op], layer) => {
    for (let i = 0; i < n; i++) {
      const slot = 100 / n;
      out.push({ type: "fog", layer, night, x: (i * slot + rnd(-slot * 0.2, slot * 0.2)).toFixed(1), y: (rnd(y0, y1) * 100).toFixed(0),
        w: rnd(55, 80).toFixed(0), h: (rnd(26, 40) + layer * 8).toFixed(0), op: (op * rnd(0.75, 0.95)).toFixed(2) });
    }
  });
  return out;
}

function renderFog(el) {
  const banks = el._particles.filter((p) => p.type === "fog");
  const { duration, driftRight } = el.computeCloudDrift();
  const bank = (b) => html`<div class="fog-bank ${b.night ? "night" : ""}"
    style="left:${b.x}%;top:calc(${b.y}% - ${b.h / 2}%);width:${b.w}%;height:${b.h}%;opacity:${b.op}"></div>`;
  return html`
    <svg class="cloud-defs" width="0" height="0" aria-hidden="true"><defs>
      <filter id="wfc-fog-rough" x="-20%" y="-40%" width="140%" height="180%" color-interpolation-filters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency="0.006 0.03" numOctaves="4" seed="3" stitchTiles="stitch" result="n"></feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="n" scale="60" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
      </filter></defs></svg>
    <div class="fog-haze"></div>
    <div class="fog-breathe">
      ${[0, 1, 2].map((layer) => {
        const set = banks.filter((b) => b.layer === layer);
        if (!set.length) return nothing;
        // Far banks slower, like the cloud layers; fog moves slower than cloud.
        const d = Math.round((duration * 1.6 * [1.5, 1.0, 0.7][layer]) / 5) * 5;
        return html`<div class="fog-track ${driftRight ? "drift-right" : ""}" style="--fog-duration:${d}s">
          <div class="cloud-set">${set.map(bank)}</div><div class="cloud-set cloud-set-second">${set.map(bank)}</div>
        </div>`;
      })}
    </div>`;
}

// --- Hail --------------------------------------------------------------------
function hailstones(el) {
  const h = el._containerHeight || 300, count = 45, col = 100 / count;
  return Array.from({ length: count }, (_, i) => {
    const depth = Math.random();
    return { type: "hail", x: `${(i * col + rnd(0, col * 0.8)).toFixed(1)}%`, delay: rnd(0, 2).toFixed(2), duration: (rnd(1.1, 1.5) - depth * 0.3).toFixed(2),
      size: (3 + depth * 4).toFixed(1), landingPosY: (h * rnd(0.82, 0.98)).toFixed(0), bounce: (8 + depth * 14).toFixed(0), bounceX: rnd(-10, 10).toFixed(0) };
  });
}

function renderHail(el) {
  el.style.setProperty("--container-height", `${el._containerHeight}px`);
  el.style.setProperty("--fall-angle", `${el.computeFallingAngle(true)}deg`);
  return el._particles.filter((p) => p.type === "hail").map((p) => html`
    <div class="raindrop-path" style="--duration:${p.duration}s;--delay:${p.delay}s;--pos-x:${p.x};--landing-pos-y:${p.landingPosY}px;--hail-size:${p.size}px;--bounce:${p.bounce}px;--bounce-x:${p.bounceX}px">
      <div class="hailstone"></div><div class="splat"></div>
    </div>`);
}

// --- Wind --------------------------------------------------------------------
function gusts(el) {
  const count = 12;
  return Array.from({ length: count }, (_, i) => ({
    type: "gust", y: (8 + (i / count) * 80 + rnd(-4, 4)).toFixed(0), delay: rnd(0, 5).toFixed(1), dur: rnd(2.6, 4.2).toFixed(2),
    len: rnd(160, 340).toFixed(0), thick: rnd(1.2, 2.6).toFixed(1), op: rnd(0.55, 1).toFixed(2), curl: Math.random() < 0.35,
  }));
}

function renderWind(el) {
  const { duration, driftRight } = el.computeCloudDrift();
  // Stronger wind (shorter cloud drift) blows the streaks faster: 0.7x at gale, 1.3x when calm.
  const k = 0.7 + Math.max(0, Math.min(1, (duration - 50) / 40)) * 0.6;
  return el._particles.filter((p) => p.type === "gust").map((p) => html`
    <div class="wind-path ${driftRight ? "" : "left"}" style="--y:${p.y}%;--duration:${(p.dur * k).toFixed(2)}s;--delay:${p.delay}s;--op:${p.op}">
      <div class="wind-streak ${p.curl ? "curl" : ""}" style="--len:${p.len}px;--thick:${p.thick}px"></div>
    </div>`);
}
