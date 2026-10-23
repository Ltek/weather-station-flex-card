// Clock panel: time and date, sized to fill the panel (or fixed sizes).
// Follows Home Assistant's language and 12/24-hour setting unless set here.
import { LitElement, html, css, nothing } from "lit";
import { panelStyles } from "./shared.js";

const DATE_FORMATS = {
  long: { weekday: "long", month: "long", day: "numeric" },
  medium: { weekday: "short", month: "short", day: "numeric" },
  short: { month: "numeric", day: "numeric" },
  weekday: { weekday: "long" },
  full: { weekday: "long", month: "long", day: "numeric", year: "numeric" },
};

/** hour12 for a panel config and Home Assistant's locale settings. */
export function clockHour12(c, hass) {
  const f = c?.time_format || "auto";
  if (f === "12") return true;
  if (f === "24") return false;
  const tf = hass?.locale?.time_format;
  if (tf === "12") return true;
  if (tf === "24") return false;
  return undefined; // language / system: Intl decides
}

/** Time and date strings for a moment. */
export function clockText(c, hass, now = new Date()) {
  const lang = hass?.locale?.language || hass?.language || undefined;
  const h12 = clockHour12(c, hass);
  const t = new Intl.DateTimeFormat(lang, { hour: "numeric", minute: "2-digit", ...(c?.show_seconds ? { second: "2-digit" } : {}), ...(h12 != null ? { hour12: h12 } : {}) });
  const d = new Intl.DateTimeFormat(lang, DATE_FORMATS[c?.date_format] || DATE_FORMATS.medium);
  return { time: t.format(now), date: d.format(now) };
}

/** Auto sizes (px) that fit `time` and `date` into w × h, times scale. */
export function clockSizes(w, h, timeText, showDate, scale = 1, dateShare = 0.3) {
  const chars = Math.max(4, String(timeText).length);
  let time = (w * 0.92) / (chars * 0.56); // digits are ~0.56 em wide
  // Height for the time plus the date line under it (date = dateShare of the time).
  if (h > 0) time = Math.min(time, (h * 0.9) / (showDate ? 1.25 + dateShare : 1.1));
  time = Math.max(14, time * scale);
  return { time: Math.round(time), date: Math.round(Math.max(8, time * dateShare)) };
}

class WsfcClock extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false }, _now: { state: true }, _dims: { state: true } };
  static styles = [
    panelStyles,
    css`
      /* The text is laid over the panel's box, so its size never feeds back into the box it's measured from. */
      :host { position: relative; min-height: 60px; flex: 1 1 auto; }
      .clock { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; line-height: 1.05; font-variant-numeric: tabular-nums; overflow: hidden; }
      .time { white-space: nowrap; letter-spacing: -0.01em; }
      .date { color: var(--secondary-text-color); white-space: nowrap; margin-top: 0.15em; }
      .left { align-items: flex-start; text-align: left; }
      .center { align-items: center; text-align: center; }
      .right { align-items: flex-end; text-align: right; }
    `,
  ];

  constructor() {
    super();
    this._now = new Date();
  }

  connectedCallback() {
    super.connectedCallback();
    this._tick();
    this._ro = new ResizeObserver(([e]) => {
      const { width, height } = e.contentRect;
      const k = `${Math.round(width)}:${Math.round(height)}`;
      if (k !== this._dimKey) { this._dimKey = k; this._dims = { w: width, h: height }; }
    });
    this._ro.observe(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this._timer);
    this._ro?.disconnect();
  }

  // Wake on the next second (with seconds) or the next minute.
  _tick() {
    clearTimeout(this._timer);
    this._now = new Date();
    const ms = this.config?.show_seconds ? 1000 - this._now.getMilliseconds() : 60000 - (this._now.getSeconds() * 1000 + this._now.getMilliseconds());
    this._timer = setTimeout(() => this._tick(), ms + 20);
  }

  updated(changed) {
    if (changed.has("config")) this._tick();
  }

  // Only the clock's own ticks and size changes redraw it, not every state change.
  shouldUpdate(changed) {
    return !(changed.size === 1 && changed.has("hass") && changed.get("hass"));
  }

  render() {
    if (!this.hass) return nothing;
    const c = this.config || {};
    const showTime = c.show_time !== false, showDate = c.show_date !== false;
    const { time, date } = clockText(c, this.hass, this._now);
    const { w = 300, h = 0 } = this._dims || {};
    const auto = c.auto_size !== false;
    const sz = auto ? clockSizes(w, h, showTime ? time : date, showTime && showDate, Number(c.scale ?? 100) / 100, Math.max(0.1, Math.min(1, Number(c.date_scale ?? 30) / 100))) : { time: Number(c.time_size) || 48, date: Number(c.date_size) || 16 };
    const dateSize = showTime ? sz.date : auto ? sz.time * 0.6 : sz.date;
    return html`<div class="clock ${c.align || "center"}" role="timer" aria-live="off" aria-label=${[showTime ? time : "", showDate ? date : ""].filter(Boolean).join(", ")}>
      ${showTime ? html`<span class="time" style="font-size:${sz.time}px;font-weight:${c.time_weight || 300};${c.color ? `color:${c.color};` : ""}">${time}</span>` : nothing}
      ${showDate ? html`<span class="date" style="font-size:${Math.round(dateSize)}px;${c.date_color ? `color:${c.date_color};` : ""}">${date}</span>` : nothing}
    </div>`;
  }
}

customElements.get("wsfc-panel-clock") || customElements.define("wsfc-panel-clock", WsfcClock);
