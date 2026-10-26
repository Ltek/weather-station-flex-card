// Lightning (Ecowitt WH57 or any lightning sensor): how far away the latest
// strike was and when, strikes today, the sensor's battery, and a "head
// indoors" warning when a strike is within 10 miles (16 km) in the last 30
// minutes (the 30-30 rule). The panel hides itself when there's no sensor.
import { LitElement, html, css, nothing } from "lit";
import { panelStyles, head, fmt, moreInfo, statStyles, statRow } from "./shared.js";
import { entityValue, findHealthEntity } from "../card/resolve.js";
import { metricEntity } from "../card/metrics.js";

export function lightningIds(c = {}, station, hass) {
  return {
    distance: c.distance_entity || metricEntity("lightning_distance", station, hass),
    count: c.count_entity || metricEntity("lightning_count", station, hass),
    time: c.time_entity || metricEntity("lightning_time", station, hass),
    battery: c.battery_entity || findHealthEntity(station, hass, /(wh57|lightning).*batt|batt.*(wh57|lightning)/i),
  };
}

/** When the latest strike happened (ms), from a timestamp / epoch sensor or the distance sensor's last change. */
export function strikeTime(hass, ids) {
  const st = ids.time && hass.states[ids.time];
  if (st && !["unknown", "unavailable", ""].includes(st.state)) {
    const n = Number(st.state);
    if (Number.isFinite(n) && n > 1e9) return n < 1e12 ? n * 1000 : n;
    const t = Date.parse(st.state);
    if (Number.isFinite(t)) return t;
  }
  const d = ids.distance && hass.states[ids.distance];
  return d?.last_changed ? Date.parse(d.last_changed) : null;
}

class WsfcLightning extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false } };
  static styles = [
    panelStyles,
    statStyles,
    css`
      .warn { display: flex; gap: 10px; align-items: center; padding: 8px 10px; margin-bottom: 8px; border-radius: 10px; background: #5b1f8f; color: #fff; font-size: 13px; font-weight: 500; }
      .warn ha-icon { --mdc-icon-size: 26px; color: #ffc93c; flex: 0 0 auto; }
      .bolt { color: #ffc93c; }
    `,
  ];

  render() {
    if (!this.hass) return nothing;
    const c = this.config || {}, h = this.hass;
    const ids = lightningIds(c, this.station, h);
    const dist = entityValue(h, ids.distance), count = entityValue(h, ids.count), batt = entityValue(h, ids.battery);
    const title = head(c, "mdi:flash", "Lightning");
    if (!dist && !count) return html`${title}<div class="note">No lightning sensor found (e.g. an Ecowitt WH57).</div>`;
    const t = strikeTime(h, ids);
    const ago = t ? (Date.now() - t) / 60e3 : null;
    const km = dist && Number.isFinite(dist.value) ? (/mi/i.test(dist.unit) ? dist.value * 1.609344 : dist.value) : null;
    const us = h.config?.unit_system?.length !== "km";
    const near = km != null && km <= Number(c.near_km ?? 16) && ago != null && ago <= Number(c.near_minutes ?? 30);
    const lang = h.locale?.language;
    const when = t ? new Intl.DateTimeFormat(lang, { hour: "numeric", minute: "2-digit", ...(ago > 1440 ? { month: "short", day: "numeric" } : {}) }).format(new Date(t)) : "";
    const agoTxt = ago == null ? "" : ago < 1 ? "just now" : ago < 60 ? `${Math.round(ago)} min ago` : ago < 1440 ? `${Math.round(ago / 60)} h ago` : `${Math.round(ago / 1440)} days ago`;
    const shownDist = km == null ? "—" : us ? `${fmt(km / 1.609344, 0)} mi` : `${fmt(km, 0)} km`;
    return html`${title}
      ${near ? html`<div class="warn" role="alert"><ha-icon icon="mdi:flash-alert"></ha-icon>Lightning within ${us ? "10 miles" : "16 km"} — head indoors and stay there until 30 minutes after the last strike.</div>` : nothing}
      ${dist ? statRow("Latest strike", shownDist, t ? `${when} · ${agoTxt}` : "", "", () => moreInfo(this, dist.entity)) : nothing}
      ${count ? statRow("Strikes today", Number.isFinite(count.value) ? fmt(count.value, 0) : String(count.value), "", "", () => moreInfo(this, count.entity)) : nothing}
      ${batt ? statRow("Sensor battery", `${Number.isFinite(batt.value) ? fmt(batt.value, batt.unit === "V" ? 2 : 0) : batt.value}${batt.unit ? ` ${batt.unit}` : ""}`, "", "", () => moreInfo(this, batt.entity)) : nothing}
      ${c.show_note === false ? nothing : html`<div class="note">Strike distances are estimates, out to about 40 km (25 miles).</div>`}`;
  }
}
customElements.get("wsfc-panel-lightning") || customElements.define("wsfc-panel-lightning", WsfcLightning);
