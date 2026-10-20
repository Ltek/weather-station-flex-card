// Station health: battery, signal, RSSI and online state of every station
// device — from any of the Ecowitt integrations, or several at once (e.g. the
// core integration for readings plus Ecowitt Local for battery and signal).
import { LitElement, html, css, nothing } from "lit";
import { panelStyles, head, moreInfo } from "./shared.js";
import { stationDevices, metricSensor } from "../card/resolve.js";

const KIND = [
  ["online", (h, dc) => dc === "connectivity" || /\bonline\b/.test(h)],
  ["battery", (h, dc) => dc === "battery" || /batt/.test(h)],
  ["capacitor", (h) => /capacitor|cap[\s_-]?volt/.test(h)],
  ["rssi", (h, dc) => /rssi/.test(h) || (dc === "signal_strength" && /dbm/.test(h))],
  ["signal", (h, dc) => /signal/.test(h) || dc === "signal_strength"],
];
const ICON = { online: "mdi:lan-connect", battery: "mdi:battery", capacitor: "mdi:flash", rssi: "mdi:wifi-strength-2", signal: "mdi:signal" };
const LABEL = { online: "Online", battery: "Battery", capacitor: "Capacitor", rssi: "RSSI", signal: "Signal" };

/** ok | warn | bad | "" for a health reading. */
export function healthLevel(kind, st) {
  const s = st?.state, a = st?.attributes || {};
  if (s == null || s === "unavailable" || s === "unknown") return "bad";
  const n = Number(s), unit = a.unit_of_measurement || "";
  if (kind === "online") return s === "on" ? "ok" : "bad";
  if (kind === "battery") {
    if (st.entity_id.startsWith("binary_sensor.")) return s === "on" ? "bad" : "ok"; // on = low
    if (unit === "%") return n < 15 ? "bad" : n < 30 ? "warn" : "ok";
    if (unit === "V") return n < 2.3 ? "bad" : n < 2.5 ? "warn" : "ok"; // 2×AA / supercap packs
    if (!isNaN(n) && n <= 5) return n <= 1 ? "bad" : n <= 2 ? "warn" : "ok"; // 0–5 bars
    return "";
  }
  if (kind === "capacitor") return unit === "V" && n < 2.3 ? "warn" : "ok";
  if (kind === "rssi") return n < -90 ? "bad" : n < -80 ? "warn" : "ok";
  if (kind === "signal") {
    if (unit === "%") return n < 25 ? "bad" : n < 50 ? "warn" : "ok";
    if (!isNaN(n) && n <= 4) return n <= 1 ? "bad" : n <= 2 ? "warn" : "ok"; // 0–4 bars
  }
  return "";
}

/** Health entities on the station devices, grouped by device. */
export function healthRows(station, hass) {
  const groups = [];
  for (const did of stationDevices(station, hass)) {
    const dev = hass.devices?.[did];
    const rows = [];
    for (const [eid, reg] of Object.entries(hass.entities || {})) {
      if (reg.device_id !== did) continue;
      const st = hass.states[eid];
      if (!st) continue;
      const h = `${eid} ${st.attributes?.friendly_name || ""} ${st.attributes?.unit_of_measurement || ""}`.toLowerCase();
      const dc = st.attributes?.device_class;
      const kind = KIND.find(([, test]) => test(h, dc))?.[0];
      if (!kind) continue;
      let name = st.attributes?.friendly_name || eid;
      const dn = dev?.name_by_user || dev?.name;
      if (dn && name.startsWith(dn)) name = name.slice(dn.length).trim() || LABEL[kind];
      rows.push({ eid, kind, name, st, level: healthLevel(kind, st), platform: reg.platform });
    }
    const order = ["online", "battery", "capacitor", "signal", "rssi"];
    rows.sort((a, b) => order.indexOf(a.kind) - order.indexOf(b.kind) || a.name.localeCompare(b.name));
    if (rows.length) groups.push({ device: dev?.name_by_user || dev?.name || did, model: dev?.model, rows });
  }
  return groups;
}

class WsfcHealth extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, station: { attribute: false } };
  static styles = [
    panelStyles,
    css`
      .grp { margin-bottom: 8px; }
      .dev { font-size: 12px; color: var(--wsfc-muted); margin: 6px 0 4px; }
      .rows { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 6px; }
      .row { display: flex; align-items: center; gap: 8px; padding: 6px 8px; border-radius: 10px; background: rgba(127, 127, 127, 0.08); cursor: pointer; min-width: 0; }
      .row ha-icon { --mdc-icon-size: 18px; color: var(--c, var(--wsfc-muted)); flex: 0 0 auto; }
      .row .t { min-width: 0; }
      .row .n { font-size: 11px; color: var(--wsfc-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .row .v { font-size: 14px; font-weight: 500; white-space: nowrap; }
      .ok { --c: var(--success-color, #43a047); }
      .warn { --c: var(--warning-color, #ffa600); }
      .bad { --c: var(--error-color, #db4437); }
      .last { font-size: 12px; color: var(--wsfc-muted); margin-top: 4px; }
      .last.warn { color: var(--warning-color, #ffa600); }
      .last.bad { color: var(--error-color, #db4437); }
    `,
  ];

  render() {
    if (!this.hass) return nothing;
    const c = this.config || {};
    const groups = healthRows(this.station, this.hass);
    const fmt = (r) => {
      const st = r.st, u = st.attributes?.unit_of_measurement || "";
      if (r.kind === "online") return st.state === "on" ? "Online" : "Offline";
      if (st.entity_id.startsWith("binary_sensor.")) return r.kind === "battery" ? (st.state === "on" ? "Low" : "OK") : st.state;
      if (["unavailable", "unknown"].includes(st.state)) return "—";
      return `${st.state}${u ? ` ${u}` : ""}`;
    };
    return html`
      ${head(c, "mdi:heart-pulse", "Station health")}
      ${groups.length
        ? groups.map((g) => html`<div class="grp">
            ${groups.length > 1 || c.show_devices ? html`<div class="dev">${g.device}${g.model ? ` · ${g.model}` : ""}</div>` : nothing}
            <div class="rows">${g.rows.map((r) => html`<div class="row ${r.level}" @click=${() => moreInfo(this, r.eid)} title=${r.eid}>
              <ha-icon icon=${r.kind === "battery" && r.level === "bad" ? "mdi:battery-alert" : ICON[r.kind]}></ha-icon>
              <div class="t"><div class="n">${r.name}</div><div class="v">${fmt(r)}</div></div>
            </div>`)}</div>
          </div>`)
        : html`<div class="note">No battery, signal or online sensors on the station devices. The Home Assistant core Ecowitt integration reports only some batteries and no signal — add Ecowitt Local or the Ecowitt Official integration as a second source under Weather station.</div>`}
      ${this._lastReport()}
    `;
  }

  // Age of the newest reading among the core station metrics.
  _lastReport() {
    const ids = ["temperature", "humidity", "wind_speed", "pressure"].map((k) => metricSensor(this.station, this.hass, k)).filter(Boolean);
    const ts = ids.map((e) => Date.parse(this.hass.states[e]?.last_updated || this.hass.states[e]?.last_changed || "")).filter((t) => !isNaN(t));
    if (!ts.length) return nothing;
    const min = Math.round((Date.now() - Math.max(...ts)) / 60e3);
    const lvl = min > 30 ? "bad" : min > 10 ? "warn" : "";
    const txt = min < 1 ? "just now" : min < 60 ? `${min} min ago` : `${Math.floor(min / 60)} h ${min % 60} min ago`;
    return html`<div class="last ${lvl}">Last reading ${txt}</div>`;
  }
}

customElements.get("wsfc-panel-health") || customElements.define("wsfc-panel-health", WsfcHealth);
