// One-line summaries shown in a folded panel's header (collapsed_info), e.g.
// "7 strikes today · 6 mi" for Lightning or "Today 0.02 in" for Rain totals.
// Synchronous, from live states (and, for a few panels, data the panel element
// has already loaded); null when there's nothing useful to say.
import { metricValue, entityValue } from "./resolve.js";
import { metricEntity, cardinal } from "./metrics.js";
import { lightningIds } from "../panels/lightning.js";
import { aqEntity, aqiLevel, AQI_LEVELS } from "./air.js";

const f = (v, d = 0) => (v == null || !Number.isFinite(Number(v)) ? null : Number(v).toFixed(d).replace(/\.0+$/, (m) => (d ? m : "")));
const val = (x, d) => (x ? `${f(x.value, d)}${x.unit && !/^°/.test(x.unit) ? ` ${x.unit}` : x.unit || ""}` : null);

function weatherLine(hass, station) {
  const t = metricValue(station, hass, "temperature");
  const w = hass.states[station?.entity];
  const cond = w?.state ? hass.localize?.(`component.weather.entity_component._.state.${w.state}`) || w.state.replace(/-/g, " ") : null;
  return [val(t, 0), cond].filter(Boolean).join(" · ") || null;
}

const BY_TYPE = {
  lightning(p, h, s) {
    const ids = lightningIds(p, s, h);
    const c = entityValue(h, ids.count), d = entityValue(h, ids.distance);
    const n = c && Number.isFinite(c.value) ? c.value : null;
    if (n === 0) return "No strikes today";
    const km = d && Number.isFinite(d.value) ? (/mi/i.test(d.unit) ? d.value * 1.609344 : d.value) : null;
    const us = h.config?.unit_system?.length !== "km";
    return [n != null ? `${n} strike${n === 1 ? "" : "s"} today` : null, km != null ? `latest ${us ? `${f(km / 1.609344)} mi` : `${f(km)} km`}` : null].filter(Boolean).join(" · ") || null;
  },
  rain(p, h, s) {
    const t = entityValue(h, metricEntity("rain_today", s, h)), r = entityValue(h, metricEntity("rain_rate", s, h));
    const d = h.config?.unit_system?.temperature === "°C" ? 1 : 2;
    return [r && r.value > 0 ? `raining ${val(r, d)}` : null, t ? `today ${val(t, d)}` : null].filter(Boolean).join(" · ") || null;
  },
  wind(p, h, s) {
    const sp = metricValue(s, h, "wind_speed"), g = metricValue(s, h, "wind_gust_speed"), d = metricValue(s, h, "wind_bearing");
    if (!sp) return null;
    return `${val(sp, 0)}${d ? ` from ${cardinal(d.value)}` : ""}${g ? `, gust ${f(g.value)}` : ""}`;
  },
  temp_humidity(p, h, s) {
    return [val(metricValue(s, h, "temperature"), 1), val(metricValue(s, h, "humidity"), 0)].filter(Boolean).join(" · ") || null;
  },
  uv_solar(p, h, s) {
    const u = metricValue(s, h, "uv_index"), r = metricValue(s, h, "solar_radiation");
    return [u ? `UV ${f(u.value, 1)}` : null, val(r, 0)].filter(Boolean).join(" · ") || null;
  },
  vpd(p, h, s, el) {
    const v = el?._value?.();
    return v ? `${f(v.kpa, 2)} kPa` : null;
  },
  frost_watch(p, h, s, el) {
    return el?.shadowRoot?.querySelector(".box .t")?.textContent?.trim() || null;
  },
  air_quality(p, h, s) {
    const a = entityValue(h, p.entities?.aqi || aqEntity(s, h, "aqi"));
    if (!a || !Number.isFinite(a.value)) return null;
    const lv = aqiLevel(a.value);
    return `AQI ${f(a.value)}${lv != null && lv >= 0 && AQI_LEVELS[lv]?.name ? ` · ${AQI_LEVELS[lv].name}` : ""}`;
  },
  pollen(p, h, s, el) {
    return el?.shadowRoot?.querySelector(".hdr")?.textContent?.split("·").pop()?.trim() || null;
  },
  records(p, h, s, el) {
    const a = el?._area?.records_today;
    if (!a?.temperature_2m_max) return null;
    return `record today ${f(a.temperature_2m_max.value)}° (${a.temperature_2m_max.date.slice(0, 4)})`;
  },
  garden(p, h, s, el) {
    const n = el?.shadowRoot?.querySelector(".nights .n b");
    return n ? `tonight ${n.textContent}` : null;
  },
  radar(p, h, s, el) {
    return el?._frameLabel ? `radar ${el._frameLabel}` : null;
  },
  health(p, h, s) {
    const t = metricValue(s, h, "temperature");
    return t ? "station online" : "station offline";
  },
};
for (const t of ["forecast", "hourly", "daily", "day", "bulletin", "sky_tracker", "astronomy", "moon", "wind_map", "graph", "statistics", "card"]) BY_TYPE[t] ||= (p, h, s) => weatherLine(h, s);

/** The text for a folded panel's header, or "" for none. */
export function foldInfo(p, mode, hass, station, el) {
  if (!hass || mode === "off") return "";
  if (mode === "entity" || (mode !== "summary" && p.collapsed_entity)) {
    const st = p.collapsed_entity && hass.states[p.collapsed_entity];
    if (st) {
      const n = Number(st.state);
      const v = Number.isFinite(n) ? f(n, Math.abs(n) < 10 && !Number.isInteger(n) ? 1 : 0) : st.state;
      const u = st.attributes?.unit_of_measurement;
      return `${p.collapsed_label ? `${p.collapsed_label} ` : ""}${v}${u ? (/^°/.test(u) ? u : ` ${u}`) : ""}`;
    }
    if (mode === "entity") return "";
  }
  try {
    return (BY_TYPE[p.type]?.(p, hass, station, el) || "").trim();
  } catch (_e) {
    return "";
  }
}
