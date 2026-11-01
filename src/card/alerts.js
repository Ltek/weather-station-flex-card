// Alerts bar: one thin row at the top of the card that appears only while
// something needs attention — heat or frost (the Frost & heat watch rules on
// the live readings and tonight's forecast low), lightning nearby (the
// Lightning panel's 30-30 rule) and weather alerts from an alerts sensor
// (e.g. NWS Alerts). Tapping an alert opens the matching panel, if there is one.
import { html, css, nothing } from "lit";
import { metricValue, entityValue } from "./resolve.js";
import { metricEntity } from "./metrics.js";
import { watchState } from "../panels/watch.js";
import { lightningIds, strikeTime } from "../panels/lightning.js";

const toF = (v) => (v?.unit === "°C" ? (v.value * 9) / 5 + 32 : v?.value);
const toMph = (v) => {
  if (!v) return null;
  const u = String(v.unit || "").toLowerCase();
  return u === "km/h" ? v.value / 1.609344 : u === "m/s" ? v.value * 2.236936 : v.value;
};

// The Lightning panel's own sensor choices (if there is one), so the bar reads the same sensors.
function lightningConf(c) {
  const walk = (list) => { for (const p of list || []) { if (p?.type === "lightning") return p; const q = p?.type === "stack" && walk(p.panels); if (q) return q; } return null; };
  return walk(c.panels) || {};
}

// A weather alerts sensor: one with a list of alerts in its Alerts attribute
// (the NWS Alerts integration's), preferring names with "nws" or "alert".
const alertList = (st) => st?.attributes?.Alerts ?? st?.attributes?.alerts;
export function findAlertsEntity(hass) {
  const ids = Object.keys(hass?.states || {}).filter((e) => e.startsWith("sensor.") && Array.isArray(alertList(hass.states[e])));
  return ids.find((e) => /nws/.test(e)) || ids.find((e) => /alert/.test(e)) || ids[0] || null;
}

/** The alerts sensor in use: the one chosen, else the one found (off with Weather alerts off). */
export function alertsEntity(c, hass) {
  if (c.alerts_weather === false) return null;
  return c.alerts_entity || findAlertsEntity(hass);
}

/**
 * What each alert reads, for the editor: [{ key, title, rule, on, items: [{ label, entity, how }] }],
 * how = "chosen" | "found" | "missing".
 */
export function alertSources(hass, station, c) {
  const m = (label, key) => { const e = metricEntity(key, station, hass); return { label, entity: e || null, how: e ? "found" : "missing" }; };
  const lc = lightningConf(c), ids = lightningIds(lc, station, hass);
  const found = findAlertsEntity(hass);
  return [
    { key: "watch", title: "Heat and frost", on: c.alerts_watch !== false,
      rule: "Heat caution when it feels like 90 °F (32 °C) or more, heat danger at 103 °F (39 °C). Frost when it's near freezing, or likely tonight (cold, calm, clear, a low dew point, or a forecast low of 34 °F / 1 °C or less).",
      items: [m("Temperature", "temperature"), m("Feels like", "apparent_temperature"), m("Dew point", "dew_point"), m("Wind speed", "wind_speed"),
        { label: "Tonight's low (hourly forecast)", entity: c.entity || null, how: c.entity ? "chosen" : "missing" },
        { label: "Day or night", entity: hass?.states?.["sun.sun"] ? "sun.sun" : null, how: hass?.states?.["sun.sun"] ? "found" : "missing" }] },
    { key: "lightning", title: "Lightning nearby", on: c.alerts_lightning !== false,
      rule: "A strike within 10 mi (16 km) in the last 30 minutes (the 30-30 rule: stay indoors until 30 minutes after the last close strike).",
      items: [{ label: "Strike distance", entity: ids.distance || null, how: lc.distance_entity ? "chosen" : ids.distance ? "found" : "missing", note: lc.distance_entity ? "Set in the Lightning panel." : "" },
        { label: "Last strike time", entity: ids.time || null, how: lc.time_entity ? "chosen" : ids.time ? "found" : "missing", note: ids.time ? "" : "Without it, the distance sensor's last change is used." }] },
    { key: "weather", title: "Weather alerts", on: c.alerts_weather !== false,
      rule: "Up to 3 active alerts from the sensor's Alerts list (watches, warnings, advisories); severe and extreme ones in red.",
      items: [{ label: "Alerts sensor", entity: c.alerts_entity || found, how: c.alerts_entity ? "chosen" : found ? "found" : "missing",
        note: c.alerts_entity || found ? "" : "None found. Install the NWS Alerts integration (HACS), or choose a sensor below." }] },
  ];
}

/**
 * Active alerts: [{ kind, icon, text, level: "warn" | "danger", type? }].
 * `low` = tonight's forecast low in °F (or null).
 */
export function activeAlerts(hass, station, c, low) {
  const out = [];
  const s = station, h = hass;
  const on = (k) => c[`alerts_${k}`] !== false;
  if (on("watch")) {
    const t = metricValue(s, h, "temperature");
    if (t) {
      const st = watchState({
        t: toF(t), feels: toF(metricValue(s, h, "apparent_temperature")), dew: toF(metricValue(s, h, "dew_point")),
        wind: toMph(metricValue(s, h, "wind_speed")), low, night: h.states["sun.sun"]?.state === "below_horizon",
      });
      const metric = h.config?.unit_system?.temperature === "°C";
      const text = metric ? st.title : st.title;
      if (st.state === "danger") out.push({ kind: "heat", icon: "mdi:thermometer-alert", text, level: "danger", type: "frost_watch" });
      else if (st.state === "heat") out.push({ kind: "heat", icon: "mdi:white-balance-sunny", text, level: "warn", type: "frost_watch" });
      else if (st.state === "frost" || st.state === "tonight") out.push({ kind: "frost", icon: "mdi:snowflake-alert", text, level: st.state === "frost" ? "danger" : "warn", type: "frost_watch" });
    }
  }
  if (on("lightning")) {
    const ids = lightningIds(lightningConf(c), s, h);
    const d = entityValue(h, ids.distance), t = strikeTime(h, ids);
    const km = d && Number.isFinite(d.value) ? (/mi/i.test(d.unit) ? d.value * 1.609344 : d.value) : null;
    if (km != null && km <= 16 && t && Date.now() - t <= 30 * 60e3) {
      const us = h.config?.unit_system?.length !== "km";
      out.push({ kind: "lightning", icon: "mdi:flash-alert", text: `Lightning ${us ? `${Math.round(km / 1.609344)} mi` : `${Math.round(km)} km`} away — head indoors`, level: "danger", type: "lightning" });
    }
  }
  const eid = alertsEntity(c, h);
  const st = eid && h.states[eid];
  const list = st ? st.attributes?.Alerts || st.attributes?.alerts || [] : [];
  if (Array.isArray(list)) for (const a of list.slice(0, 3)) {
    const sev = String(a.Severity || a.severity || "").toLowerCase();
    out.push({ kind: "alert", icon: "mdi:alert", text: a.Event || a.event || a.title || "Weather alert", level: /severe|extreme/.test(sev) ? "danger" : "warn", entity: eid });
  }
  return out;
}

export const alertStyles = css`
  .alerts { display: flex; flex-wrap: wrap; gap: 6px; flex: 0 0 auto; }
  .alert-chip { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px 4px 8px; border-radius: 999px; border: 0; font: inherit; font-size: 13px; font-weight: 600; cursor: pointer;
    background: color-mix(in srgb, var(--warning-color, #ffa600) 28%, transparent); color: var(--primary-text-color); }
  .alert-chip.danger { background: color-mix(in srgb, var(--error-color, #db4437) 70%, transparent); color: #fff; }
  .alert-chip.frost { background: color-mix(in srgb, #4aa3ff 40%, transparent); }
  .alert-chip ha-icon { --mdc-icon-size: 18px; }
  .alert-chip:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }
`;

export function alertsBar(alerts, onPick) {
  if (!alerts.length) return nothing;
  return html`<div class="alerts" role="status" aria-label="Weather alerts">${alerts.map((a) => html`<button class="alert-chip ${a.level} ${a.kind}" type="button" @click=${() => onPick(a)}>
    <ha-icon icon=${a.icon}></ha-icon>${a.text}</button>`)}</div>`;
}
