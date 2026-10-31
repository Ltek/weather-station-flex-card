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
     (like the cloud edges). Each fades in where it is, drifts a short way with the
     wind and fades out; some rise or sink by a few pixels, slowly. */
  .wind-path { position: absolute; left: var(--x0); top: var(--y); width: var(--len); height: var(--h); opacity: 0; will-change: transform, opacity;
    animation: wind-gust calc(var(--duration) * var(--wsfc-anim-wind, 1)) ease-in-out infinite; animation-delay: calc(var(--delay) * var(--wsfc-anim-wind, 1)); }
  .wind-path.left { animation-direction: reverse; }
  .wind-wisp { position: absolute; inset: 0; filter: var(--wsfc-wind-filter, url(#wfc-wind-soft)) blur(var(--blur)); }
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

  /* Lightning (see the storm scheduler below): the provider's single white
     flash is replaced by glows that light up the clouds and occasional bolts,
     each planned at random and drawn with the Web Animations API. */
  .lightning-flash { display: none; }
  .storm { position: absolute; inset: 0; pointer-events: none; overflow: hidden; border-radius: inherit; }
  .storm > * { position: absolute; pointer-events: none; opacity: 0; will-change: opacity; }
  .storm .glow { border-radius: 50%; mix-blend-mode: screen; filter: blur(var(--soft, 10px));
    background: radial-gradient(50% 50% at 50% 50%, var(--core) 0%, var(--tint) 38%, color-mix(in srgb, var(--tint), transparent 70%) 62%, transparent 78%); }
  .storm .sky-lit { inset: 0; mix-blend-mode: screen; background: radial-gradient(90% 70% at var(--cx) 15%, var(--tint), transparent 75%); }
  .storm svg.bolt { inset: 0; width: 100%; height: 100%; overflow: visible; }
  .storm svg.bolt path { fill: none; stroke-linecap: round; stroke-linejoin: round; }
  .storm svg.bolt .halo { stroke: var(--tint); filter: blur(5px); }
  .storm svg.bolt .core { stroke: var(--core); }

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
  /* A short drift (--dx) with a fade at both ends; --amp (often 0) is the gentle rise. */
  @keyframes wind-gust {
    0% { opacity: 0; transform: translate3d(calc(var(--dx) * -1), 0, 0) scaleX(0.92); }
    35% { opacity: var(--op); transform: translate3d(calc(var(--dx) * -0.3), var(--amp), 0) scaleX(1.04); }
    65% { opacity: var(--op); transform: translate3d(calc(var(--dx) * 0.3), calc(var(--amp) * -0.5), 0) scaleX(1.04); }
    100% { opacity: 0; transform: translate3d(var(--dx), 0, 0) scaleX(0.92); }
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

  // The storm runs while lightning is shown and the provider is on the page.
  const upd = proto.updated;
  proto.updated = function (changed) {
    const r = upd?.call(this, changed);
    if (this.isConnected && this.getActiveEffects().includes("lightning")) stormStart(this); else stormStop(this);
    return r;
  };
  const disc = proto.disconnectedCallback;
  proto.disconnectedCallback = function () {
    stormStop(this);
    return disc?.call(this);
  };

  const render = proto.render;
  const EXTRA = { fog: (el) => renderFog(el), hail: (el) => renderHail(el), wind: (el) => renderWind(el), lightning: (el) => renderLightning(el), exceptional: () => html`<div class="exceptional-glow"></div>` };
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

// --- Lightning -----------------------------------------------------------------
// A storm scheduler per provider: at random times (around the chosen interval,
// sometimes in quick clusters) it picks a cloud and lights it from inside in one
// of the colours lightning really shows (white most often, blue-violet, warm
// yellow / orange), with a flicker pattern of its own (1–5 pulses of different
// strengths and gaps). Sometimes the glow spreads to a neighbouring cloud, and
// now and then (Lightning bolts) a forked bolt drops from the cloud.
// [interval s, intensity 0.1–2, bolt share 0–1].
const lightningOpts = (el) => [
  Math.max(2, Math.min(90, Number(el.config?.lightning_interval) || 12)),
  Math.max(0.1, Math.min(2, (Number(el.config?.lightning_intensity) || 100) / 100)),
  Math.max(0, Math.min(1, (el.config?.lightning_bolts ?? 20) / 100)),
];

// [core, tint, weight]: the bright centre and the surrounding glow.
export const LIGHTNING_COLORS = [
  ["#ffffff", "rgba(235, 240, 255, 0.85)", 4],      // white
  ["#f4f6ff", "rgba(150, 175, 255, 0.85)", 3],      // blue-white
  ["#efe6ff", "rgba(165, 130, 255, 0.8)", 2],       // violet
  ["#fff8e1", "rgba(255, 214, 120, 0.85)", 3],      // warm yellow
  ["#fff1e0", "rgba(255, 160, 80, 0.8)", 2],        // orange
];
const pickColor = (r) => {
  const tot = LIGHTNING_COLORS.reduce((a, c) => a + c[2], 0);
  let x = r() * tot;
  for (const c of LIGHTNING_COLORS) if ((x -= c[2]) < 0) return c;
  return LIGHTNING_COLORS[0];
};

/**
 * One flash, planned: colour, size, flicker keyframes ({ offset, opacity }),
 * duration (ms), whether it spreads to a neighbour cloud, and whether it drops
 * a bolt. `r` is a random() function (tests pass a seeded one).
 */
export function planFlash(r = Math.random, [_, li, boltShare] = [12, 1, 0.2]) {
  const [core, tint] = pickColor(r);
  const pulses = 1 + Math.floor(r() * r() * 5); // mostly 1–2, sometimes up to 5
  const frames = [{ offset: 0, opacity: 0 }];
  let t = 0;
  const peak = Math.min(1, (0.45 + r() * 0.55) * li);
  for (let i = 0; i < pulses; i++) {
    const on = 25 + r() * 70, gap = 30 + r() * 170;
    const o = Math.min(1, peak * (i === 0 ? 0.6 + r() * 0.4 : 0.35 + r() * 0.65));
    frames.push({ t: t + 8, opacity: o }, { t: t + on, opacity: o * (0.15 + r() * 0.35) });
    t += on + gap;
  }
  const tail = 120 + r() * 380; // afterglow
  frames.push({ t: t + tail, opacity: 0 });
  const dur = t + tail;
  for (const f of frames) if (f.t != null) { f.offset = Math.min(1, f.t / dur); delete f.t; }
  frames.sort((a, b) => a.offset - b.offset);
  return { core, tint, frames, dur, peak, size: 0.55 + r() * 0.75, spread: r() < 0.3, bolt: r() < boltShare, cluster: r() < 0.3 };
}

/**
 * A forked bolt from (x0, y0) down to y1 (midpoint displacement), as pieces
 * [{ d, w }] where w is the core stroke width. Widths only ever stay the same or
 * shrink along a channel: the main channel starts thick and tapers; each branch
 * starts thinner than the main channel where it leaves it and tapers to a thread.
 */
export function boltPath(r, x0, y0, y1, width) {
  const seg = (ax, ay, bx, by, rough, depth, out) => {
    if (depth === 0) { out.push([bx, by]); return; }
    const mx = (ax + bx) / 2 + (r() - 0.5) * rough, my = (ay + by) / 2 + (r() - 0.5) * rough * 0.25;
    seg(ax, ay, mx, my, rough / 2, depth - 1, out); seg(mx, my, bx, by, rough / 2, depth - 1, out);
  };
  const d = (pts) => pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join("");
  // Widths along a channel of n points: start w0, each step the same or thinner, ending near wEnd.
  const taper = (n, w0, wEnd) => {
    const out = [w0];
    const k = Math.pow(Math.max(0.05, wEnd / w0), 1 / Math.max(1, n - 1));
    for (let i = 1; i < n; i++) {
      const prev = out[i - 1];
      // Mostly steady with sudden narrowings: hold, ease, or drop.
      const f = r() < 0.35 ? 1 : r() < 0.8 ? Math.pow(k, 1 + r()) : Math.pow(k, 3 + r() * 3);
      out.push(Math.max(wEnd * 0.6, Math.min(prev, prev * f)));
    }
    return out;
  };
  // Pieces of `chunk` points, each drawn at the width where it starts.
  const pieces = (pts, ws, chunk) => {
    const out = [];
    for (let i = 0; i < pts.length - 1; i += chunk) out.push({ d: d(pts.slice(i, Math.min(pts.length, i + chunk + 1))), w: +ws[i].toFixed(2) });
    return out;
  };
  const x1 = x0 + (r() - 0.5) * width * 0.25;
  const main = [[x0, y0]]; seg(x0, y0, x1, y1, (y1 - y0) * 0.35, 6, main);
  const w0 = 2.4 + r() * 2.6;                       // 2.4–5 px at the cloud
  const mainW = taper(main.length, w0, w0 * (0.3 + r() * 0.35));
  const out = { main: d(main), branches: [], pieces: pieces(main, mainW, 4) };
  const nb = Math.floor(r() * 4);                   // 0–3 forks
  for (let i = 0; i < nb; i++) {
    const at = Math.floor(main.length * (0.1 + r() * 0.55));
    const from = main[at];
    const len = (y1 - y0) * (0.12 + r() * 0.3), dir = r() < 0.5 ? -1 : 1;
    const pts = [from]; seg(from[0], from[1], from[0] + dir * len * (0.4 + r() * 0.7), from[1] + len, len * 0.35, 4, pts);
    const bw0 = mainW[at] * (0.4 + r() * 0.35);     // never thicker than the main channel there
    const bw = taper(pts.length, bw0, Math.max(0.35, bw0 * (0.15 + r() * 0.25)));
    out.branches.push(d(pts));
    out.pieces.push(...pieces(pts, bw, 2));
  }
  return out;
}

function renderLightning(el) {
  return html`<div class="storm"></div>`;
}

const SVGNS = "http://www.w3.org/2000/svg";
function stormFlash(el, plan, opts) {
  const storm = el.renderRoot?.querySelector(".storm");
  if (!storm) return;
  const box = el.getBoundingClientRect();
  if (!box.width || !box.height) return;
  // A cloud on screen (the clouds drift slowly, so its place holds for the flash).
  const clouds = [...el.renderRoot.querySelectorAll(".cloud")].map((c) => c.getBoundingClientRect())
    .filter((b) => b.width > 20 && b.right > box.left + 10 && b.left < box.right - 10 && b.bottom > box.top);
  const pick = clouds.length ? clouds[Math.floor(Math.random() * clouds.length)] : null;
  const cx = pick ? (pick.left + pick.width * (0.3 + Math.random() * 0.4) - box.left) : box.width * (0.1 + Math.random() * 0.8);
  const cy = pick ? (pick.top + pick.height * (0.35 + Math.random() * 0.3) - box.top) : box.height * (0.05 + Math.random() * 0.2);
  const w = (pick ? pick.width : box.width * 0.3) * plan.size, h = (pick ? pick.height : box.height * 0.25) * plan.size * 1.4;
  const add = (node, frames, delay = 0) => {
    storm.append(node);
    const done = () => node.remove();
    if (node.animate) node.animate(frames, { duration: plan.dur, delay, easing: "linear", fill: "forwards" }).finished.then(done, done);
    else setTimeout(done, plan.dur + delay);
  };
  const glow = (x, y, gw, gh, scale = 1, delay = 0) => {
    const g = document.createElement("div");
    g.className = "glow";
    g.style.cssText = `left:${x - gw / 2}px;top:${y - gh / 2}px;width:${gw}px;height:${gh}px;--core:${plan.core};--tint:${plan.tint};--soft:${Math.round(6 + gw / 25)}px`;
    add(g, plan.frames.map((f) => ({ offset: f.offset, opacity: f.opacity * scale })), delay);
  };
  glow(cx, cy, w, h);
  // Spreads through the cloud deck: a weaker, later glow in a neighbour.
  if (plan.spread && clouds.length > 1) {
    const n = clouds.filter((b) => b !== pick).sort((a, b) => Math.abs(a.left - pick.left) - Math.abs(b.left - pick.left))[0];
    glow(n.left + n.width / 2 - box.left, n.top + n.height * 0.5 - box.top, n.width * plan.size * 0.9, n.height * plan.size * 1.2, 0.6, 60 + Math.random() * 180);
  }
  // The sky around it lights up a little.
  const sky = document.createElement("div");
  sky.className = "sky-lit";
  sky.style.cssText = `--cx:${((cx / box.width) * 100).toFixed(0)}%;--tint:${plan.tint}`;
  add(sky, plan.frames.map((f) => ({ offset: f.offset, opacity: f.opacity * (plan.bolt ? 0.55 : 0.25) })));
  if (plan.bolt) {
    const r = Math.random;
    const { pieces } = boltPath(r, cx, cy + h * 0.15, box.height * (0.88 + r() * 0.12), box.width);
    const svg = document.createElementNS(SVGNS, "svg");
    svg.setAttribute("class", "bolt");
    svg.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`);
    svg.style.cssText = `--core:${plan.core};--tint:${plan.tint}`;
    // Halo under every piece first, then the cores, so the glow never covers a core.
    for (const cls of ["halo", "core"]) for (const pc of pieces) {
      const pth = document.createElementNS(SVGNS, "path");
      pth.setAttribute("class", cls); pth.setAttribute("d", pc.d);
      pth.setAttribute("stroke-width", String(cls === "halo" ? +(pc.w * 2.8 + 1).toFixed(2) : pc.w));
      svg.append(pth);
    }
    // The bolt is brightest on the strongest pulse, gone before the afterglow.
    add(svg, plan.frames.map((f) => ({ offset: f.offset, opacity: Math.min(1, (f.opacity / plan.peak) * (f.offset < 0.7 ? 1 : 0.2)) })));
  }
}

function stormStart(el) {
  if (el.__wsfcStorm) return;
  const tick = () => {
    const opts = lightningOpts(el);
    const visible = typeof document === "undefined" || !document.hidden;
    const plan = planFlash(Math.random, opts);
    if (visible) stormFlash(el, plan, opts);
    // Next strike: around the interval (exponential-ish), or soon after in a cluster.
    const gap = plan.cluster ? 400 + Math.random() * 1800 : opts[0] * 1000 * (0.25 + -Math.log(1 - Math.random() * 0.95) * 0.75);
    el.__wsfcStorm = setTimeout(tick, gap);
  };
  el.__wsfcStorm = setTimeout(tick, 600 + Math.random() * 2500);
}
function stormStop(el) {
  clearTimeout(el.__wsfcStorm);
  el.__wsfcStorm = null;
  el.renderRoot?.querySelectorAll?.(".storm > *").forEach((n) => n.remove());
}
export const __storm = { start: stormStart, stop: stormStop, flash: stormFlash };

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
  // Far wisps: thin, faint and blurrier; near ones: longer and thicker. Density sets
  // how many. Each stays near its own spot: it drifts 60–150 px with the wind while
  // it fades in and out. About half rise or sink a few pixels; the rest stay level.
  const out = [], k = density(el, "wind_density");
  [[5, 0.6], [5, 1.0], [3, 1.5]].forEach(([n0, size], layer) => {
    const n = Math.max(1, Math.round(n0 * k));
    for (let i = 0; i < n; i++) {
      const dur = rnd(7, 12);
      out.push({ type: "gust", layer, x0: rnd(-5, 75).toFixed(0), y: (6 + ((i + layer / 3) / n) * 84 + rnd(-4, 4)).toFixed(0), dur: dur.toFixed(2),
        // A negative delay starts each wisp part-way along, so they are spread out from the first frame.
        delay: (-rnd(0, dur)).toFixed(2), len: (rnd(260, 420) * size).toFixed(0), h: (rnd(10, 16) * size).toFixed(0),
        blur: (layer === 0 ? 5 : layer === 1 ? 3.5 : 2.5).toFixed(1), op: (rnd(0.55, 0.8) * [0.6, 0.8, 1][layer]).toFixed(2),
        dx: rnd(60, 150).toFixed(0), amp: Math.random() < 0.5 ? 0 : (rnd(2, 6) * (Math.random() < 0.5 ? 1 : -1)).toFixed(1) });
    }
  });
  return out;
}

function renderWind(el) {
  const { driftRight } = el.computeCloudDrift();
  // Stronger wind: the wisps fade through faster and drift further.
  const k = [1.25, 1, 0.72][windLevel(el)];
  return html`
    <svg class="cloud-defs" width="0" height="0" aria-hidden="true"><defs>
      <filter id="wfc-wind-soft" x="-10%" y="-60%" width="120%" height="220%" color-interpolation-filters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency="0.006 0.09" numOctaves="3" seed="11" stitchTiles="stitch" result="n"></feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="n" scale="16" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
      </filter></defs></svg>
    ${el._particles.filter((p) => p.type === "gust").map((p) => html`
      <div class="wind-path ${driftRight ? "" : "left"}" style="--x0:${p.x0}%;--y:${p.y}%;--len:${p.len}px;--h:${p.h}px;--duration:${(p.dur * k).toFixed(2)}s;--delay:${(p.delay * k).toFixed(2)}s;--op:${p.op};--dx:${Math.round(p.dx / k)}px;--amp:${p.amp}px">
        <div class="wind-wisp" style="--blur:${p.blur}px"></div>
      </div>`)}`;
}
