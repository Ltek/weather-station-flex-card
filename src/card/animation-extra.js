// Extra weather animations for the conditions the vendored provider leaves
// blank, drawn in the same style as its own (same sky gradients, cloud sprites,
// turbulence filter, particle paths, wind-driven drift):
//   fog            overcast sky + mist banks drifting with the wind
//   hail           storm sky + clouds + hailstones that bounce when they land
//   windy          clear sky + sun/moon + soft wisps of air blowing with the wind
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
// Wind in three steps (calm, breezy, strong) from the provider's cloud drift, so
// small changes between updates don't change any animation's speed.
const windLevel = (el) => { const d = el.computeCloudDrift().duration; return d < 63 ? 2 : d < 77 ? 1 : 0; };
// Fog / wind density (percent, 100 = normal) from the card's config.
const density = (el, key) => Math.max(0.3, Math.min(2, (Number(el.config?.[key]) || 100) / 100));
const rnd = (a, b) => a + Math.random() * (b - a);

const EXTRA_CSS = css`
  :host {
    --fog-color: var(--weather-forecast-card-effects-fog-color, var(--cloud-color));
    --hail-color: var(--weather-forecast-card-effects-hail-color, #eef4fb);
    --wind-color: var(--weather-forecast-card-effects-wind-color, rgba(255, 255, 255, 0.85));
    --exceptional-color: var(--weather-forecast-card-effects-exceptional-color, rgba(255, 166, 0, 0.32));
  }
  :host(.light) { --wind-color: var(--weather-forecast-card-effects-wind-color, rgba(255, 255, 255, 0.95)); }

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

  /* Wind: soft, blurred wisps of air at three depths, frayed by their own turbulence
     (like the cloud edges), drifting across with a gentle rise and fall. */
  .wind-path { position: absolute; left: 0; right: 0; top: var(--y); height: var(--h); opacity: 0; will-change: transform, opacity;
    animation: wind-gust calc(var(--duration) * var(--wsfc-anim-wind, 1)) ease-in-out infinite; animation-delay: calc(var(--delay) * var(--wsfc-anim-wind, 1)); }
  .wind-path.wave-b { animation-name: wind-gust-b; }
  .wind-path.left { animation-direction: reverse; }
  .wind-wisp { position: absolute; left: 0; top: 0; width: var(--len); height: 100%; filter: var(--wsfc-wind-filter, url(#wfc-wind-soft)) blur(var(--blur)); }
  .wind-wisp::before, .wind-wisp::after { content: ""; position: absolute; left: 0; right: 0; border-radius: 50%; }
  .wind-wisp::before { top: 20%; height: 60%; background: radial-gradient(50% 50% at 50% 50%, var(--wind-color) 0%, color-mix(in srgb, var(--wind-color), transparent 55%) 45%, transparent 72%); }
  .wind-wisp::after { top: 58%; left: 18%; right: -8%; height: 26%; background: radial-gradient(50% 50% at 45% 50%, color-mix(in srgb, var(--wind-color), transparent 35%) 0%, transparent 70%); }
  .wind-path.left .wind-wisp { transform: scaleX(-1); }
  /* Rain splash: a soft ring that spreads and fades where the drop lands, with two
     droplets thrown up, instead of the dotted arc. Hail shares it. */
  .splat { width: 18px; height: 7px; left: -9px; border: 0; border-radius: 50%; background: none; transform-origin: center;
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--rain-color), #fff 45%); filter: blur(0.4px); opacity: 0; animation-name: splat-ring; }
  .splat::before, .splat::after { content: ""; position: absolute; top: 2px; width: 2px; height: 2px; border-radius: 50%;
    background: color-mix(in srgb, var(--rain-color), #fff 55%); opacity: 0; animation: splat-drop var(--duration) linear infinite; animation-delay: var(--delay); }
  .splat::before { left: 4px; --dx: -4px; } .splat::after { left: 12px; --dx: 4px; --dy: 1.3; }
  .raindrop-path .splat, .raindrop-path .splat::before, .raindrop-path .splat::after { animation-duration: calc(var(--duration) * var(--wsfc-anim-rain, 1)); animation-delay: calc(var(--delay) * var(--wsfc-anim-rain, 1)); }
  @keyframes splat-ring {
    0%, 74% { opacity: 0; transform: scale(0.25, 0.25); }
    78% { opacity: 0.55; transform: scale(0.5, 0.5); }
    100% { opacity: 0; transform: scale(1.6, 1.4); }
  }
  @keyframes splat-drop {
    0%, 74% { opacity: 0; transform: translate3d(0, 0, 0); }
    78% { opacity: 0.8; transform: translate3d(calc(var(--dx) * 0.4), calc(-6px * var(--dy, 1)), 0); }
    90% { opacity: 0.5; transform: translate3d(var(--dx), calc(-8px * var(--dy, 1)), 0); }
    100% { opacity: 0; transform: translate3d(calc(var(--dx) * 1.3), 0, 0); }
  }

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
  /* Two wave shapes, each with uneven timing: a slow start, a surge through the
     middle (brighter, longer), and an easing tail. --amp flips the wave per wisp. */
  @keyframes wind-gust {
    0% { opacity: 0; transform: translate3d(-45%, 0, 0) rotate(var(--tilt)) scaleX(0.8); }
    14% { opacity: calc(var(--op) * 0.6); transform: translate3d(-28%, calc(var(--amp) * -0.6), 0) rotate(calc(var(--tilt) * -0.5)) scaleX(0.9); }
    32% { opacity: var(--op); transform: translate3d(-4%, var(--amp), 0) rotate(var(--tilt)) scaleX(1.15); }
    50% { opacity: var(--op); transform: translate3d(28%, calc(var(--amp) * -0.3), 0) rotate(calc(var(--tilt) * -1)) scaleX(1.2); }
    68% { opacity: calc(var(--op) * 0.8); transform: translate3d(54%, calc(var(--amp) * 0.7), 0) rotate(calc(var(--tilt) * 0.5)) scaleX(1.05); }
    86% { opacity: calc(var(--op) * 0.4); transform: translate3d(82%, calc(var(--amp) * -0.4), 0) rotate(var(--tilt)) scaleX(0.95); }
    100% { opacity: 0; transform: translate3d(105%, 0, 0) rotate(0deg) scaleX(0.85); }
  }
  @keyframes wind-gust-b {
    0% { opacity: 0; transform: translate3d(-45%, 0, 0) rotate(0deg) scaleX(0.85); }
    20% { opacity: calc(var(--op) * 0.5); transform: translate3d(-30%, var(--amp), 0) rotate(var(--tilt)) scaleX(0.95); }
    40% { opacity: calc(var(--op) * 0.9); transform: translate3d(-8%, calc(var(--amp) * -0.8), 0) rotate(calc(var(--tilt) * -0.7)) scaleX(1.1); }
    56% { opacity: var(--op); transform: translate3d(30%, calc(var(--amp) * 0.4), 0) rotate(calc(var(--tilt) * 0.4)) scaleX(1.25); }
    72% { opacity: calc(var(--op) * 0.7); transform: translate3d(62%, calc(var(--amp) * -0.6), 0) rotate(calc(var(--tilt) * -1)) scaleX(1.05); }
    100% { opacity: 0; transform: translate3d(105%, calc(var(--amp) * 0.3), 0) rotate(0deg) scaleX(0.85); }
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

  // New particles only when what they depend on changes (not on every state update),
  // so nothing restarts or jumps to a new random place.
  const compute = proto.computeParticles;
  const kept = (el, kind, sig, make) => {
    const c = (el.__wsfcKept ||= {});
    if (!c[kind] || c[kind].sig !== sig) c[kind] = { sig, list: make(el) };
    return c[kind].list;
  };
  proto.computeParticles = function () {
    const list = compute.call(this);
    const fx = this.getActiveEffects();
    if (fx.includes("fog")) list.push(...kept(this, "fog", `${this.isNightTime()}:${density(this, "fog_density")}`, fogBanks));
    if (fx.includes("hail")) list.push(...kept(this, "hail", `${this._containerHeight}`, hailstones));
    if (fx.includes("wind")) list.push(...kept(this, "wind", `${density(this, "wind_density")}`, gusts));
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
  const out = [], night = el.isNightTime(), k = density(el, "fog_density");
  // Three depths: far banks high and faint, near banks low and dense. Density
  // adds banks (up to twice as many) and makes each one hide a little more.
  [[3, 0.22, 0.38, 0.7], [3, 0.45, 0.62, 0.85], [3, 0.7, 0.9, 0.85]].forEach(([n0, y0, y1, op], layer) => {
    const n = Math.max(1, Math.round(n0 * Math.min(2, Math.sqrt(k))));
    for (let i = 0; i < n; i++) {
      const slot = 100 / n;
      out.push({ type: "fog", layer, night, x: (i * slot + rnd(-slot * 0.2, slot * 0.2)).toFixed(1), y: (rnd(y0, y1) * 100).toFixed(0),
        w: rnd(55, 80).toFixed(0), h: (rnd(26, 40) + layer * 8).toFixed(0), op: Math.min(1, op * rnd(0.75, 0.95) * Math.min(1.25, Math.sqrt(k))).toFixed(2) });
    }
  });
  return out;
}

function renderFog(el) {
  const banks = el._particles.filter((p) => p.type === "fog");
  const { driftRight } = el.computeCloudDrift();
  const base = [190, 150, 115][windLevel(el)];
  const bank = (b) => html`<div class="fog-bank ${b.night ? "night" : ""}"
    style="left:${b.x}%;top:calc(${b.y}% - ${b.h / 2}%);width:${b.w}%;height:${b.h}%;opacity:${b.op}"></div>`;
  return html`
    <svg class="cloud-defs" width="0" height="0" aria-hidden="true"><defs>
      <filter id="wfc-fog-rough" x="-20%" y="-40%" width="140%" height="180%" color-interpolation-filters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency="0.006 0.03" numOctaves="4" seed="3" stitchTiles="stitch" result="n"></feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="n" scale="60" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
      </filter></defs></svg>
    <div class="fog-haze" style="opacity:${Math.min(1.3, density(el, "fog_density")).toFixed(2)}"></div>
    <div class="fog-breathe">
      ${[0, 1, 2].map((layer) => {
        const set = banks.filter((b) => b.layer === layer);
        if (!set.length) return nothing;
        // Far banks slower, like the cloud layers; fog moves slower than cloud.
        const d = Math.round(base * [1.5, 1.0, 0.7][layer]);
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
  // Far wisps: thin, faint, slow and blurrier; near ones: longer, thicker, faster.
  // Density sets how many. Each wisp gets its own wave (amplitude, phase, tilt), so no
  // two follow the same path, and a surge point where it speeds up and brightens.
  const out = [], k = density(el, "wind_density");
  [[5, 0.6, 1.6], [5, 1.0, 1.0], [3, 1.5, 0.72]].forEach(([n0, size, slow], layer) => {
    const n = Math.max(1, Math.round(n0 * k));
    for (let i = 0; i < n; i++) {
      const dur = rnd(5.5, 8) * slow;
      out.push({ type: "gust", layer, y: (6 + ((i + layer / 3) / n) * 84 + rnd(-4, 4)).toFixed(0), dur: dur.toFixed(2),
        // A negative delay starts each wisp part-way along, so they are spread out from the first frame.
        delay: (-rnd(0, dur)).toFixed(2), len: (rnd(260, 420) * size).toFixed(0), h: (rnd(10, 16) * size).toFixed(0),
        blur: (layer === 0 ? 5 : layer === 1 ? 3.5 : 2.5).toFixed(1), op: (rnd(0.55, 0.8) * [0.6, 0.8, 1][layer]).toFixed(2),
        amp: rnd(10, 30).toFixed(0), phase: Math.random() < 0.5 ? 1 : -1, tilt: rnd(-4, 4).toFixed(1), wave: Math.random() < 0.5 ? "a" : "b" });
    }
  });
  return out;
}

function renderWind(el) {
  const { driftRight } = el.computeCloudDrift();
  // Stronger wind blows the wisps faster.
  const k = [1.25, 1, 0.72][windLevel(el)];
  return html`
    <svg class="cloud-defs" width="0" height="0" aria-hidden="true"><defs>
      <filter id="wfc-wind-soft" x="-10%" y="-60%" width="120%" height="220%" color-interpolation-filters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency="0.006 0.09" numOctaves="3" seed="11" stitchTiles="stitch" result="n"></feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="n" scale="16" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
      </filter></defs></svg>
    ${el._particles.filter((p) => p.type === "gust").map((p) => html`
      <div class="wind-path wave-${p.wave} ${driftRight ? "" : "left"}" style="--y:${p.y}%;--h:${p.h}px;--duration:${(p.dur * k).toFixed(2)}s;--delay:${(p.delay * k).toFixed(2)}s;--op:${p.op};--amp:${p.amp * p.phase}px;--tilt:${p.tilt}deg">
        <div class="wind-wisp" style="--len:${p.len}px;--blur:${p.blur}px"></div>
      </div>`)}`;
}
