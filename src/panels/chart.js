// Chart.js setup shared by the history panels. Linear x axis in ms (no date
// adapter needed); tick labels are formatted here.
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  BarController,
  BarElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// Only controllers/elements/scales are registered globally. Plugins are passed
// per chart (INLINE_PLUGINS) because Chart.js plugin registration is global:
// a globally registered Tooltip/Legend would also appear on the vendored
// forecast chart, and that chart registers chartjs-plugin-datalabels globally,
// which baseOptions() switches off for our charts.
Chart.register(LineController, LineElement, PointElement, LinearScale, BarController, BarElement);
export const INLINE_PLUGINS = [Filler, Tooltip];
// For charts that show a legend (per chart, like the others).
export const LEGEND_PLUGINS = [Filler, Tooltip, Legend];

export { Chart };

/** Apply alpha (0..1) to a hex or rgb() color; other formats are returned as-is. */
export function withAlpha(color, a) {
  const c = String(color).trim();
  let m = /^#([0-9a-f]{3})$/i.exec(c);
  if (m) return withAlpha("#" + m[1].split("").map((x) => x + x).join(""), a);
  m = /^#([0-9a-f]{6})([0-9a-f]{2})?$/i.exec(c);
  if (m) {
    const n = parseInt(m[1], 16);
    return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
  }
  m = /^rgba?\(([^)]+)\)$/i.exec(c);
  if (m) {
    const [r, g, b] = m[1].split(/[\s,/]+/).filter(Boolean);
    return `rgba(${r},${g},${b},${a})`;
  }
  return c;
}

export function timeTick(rangeHours, locale) {
  const long = rangeHours > 48;
  const fmt = new Intl.DateTimeFormat(locale, long ? { month: "short", day: "numeric" } : { hour: "numeric" });
  return (v) => fmt.format(new Date(v));
}

export function tooltipTitle(rangeHours, locale) {
  const fmt = new Intl.DateTimeFormat(
    locale,
    rangeHours > 48 ? { weekday: "short", month: "short", day: "numeric", hour: rangeHours > 24 * 8 ? undefined : "numeric" } : { weekday: "short", hour: "numeric", minute: "2-digit" }
  );
  return (items) => (items.length ? fmt.format(new Date(items[0].parsed.x)) : "");
}

/** Base options; callers add scales/datasets. */
export function baseOptions(el, rangeHours, locale) {
  const text = getComputedStyle(el).getPropertyValue("--secondary-text-color").trim() || "#9e9e9e";
  // Text size (the panel's text_scale) for the axis labels.
  const ts = parseFloat(getComputedStyle(el).getPropertyValue("--wsfc-ts")) || 1;
  const font = { size: Math.round(12 * ts) };
  const grid = "rgba(127,127,127,0.18)";
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    parsing: false,
    normalized: true,
    spanGaps: false,
    interaction: { mode: "index", intersect: false },
    elements: { point: { radius: 0, hitRadius: 6, hoverRadius: 3 }, line: { borderWidth: 2, tension: 0.35 } },
    plugins: {
      datalabels: { display: false },
      legend: { display: false },
      tooltip: { callbacks: { title: tooltipTitle(rangeHours, locale) } },
    },
    scales: {
      x: {
        type: "linear",
        grid: { color: grid },
        ticks: { color: text, font, maxRotation: 0, autoSkip: true, maxTicksLimit: 8, callback: timeTick(rangeHours, locale) },
      },
    },
    _text: text,
    _grid: grid,
    _font: font,
  };
}
