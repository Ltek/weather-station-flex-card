// Weather Sources editor: the card-wide, ordered list of data sources. Each
// source is its own collapsible section showing what it supplies; any value
// can be pointed at another entity. Same config as Weather Flex Card
// (metric_sources.sources[] = { ref, overrides?, disabled? }).
// Fires `sources-changed` with { entity, metric_sources }.
import { LitElement, html, css, nothing } from "lit";
import { sourceDefault, integrationOf, entityValue, deviceEntities } from "../card/resolve.js";
import "./entity-select.js";

export const SOURCE_METRICS = [
  ["temperature", "Temperature"], ["apparent_temperature", "Feels like"], ["dew_point", "Dew point"], ["humidity", "Humidity"],
  ["pressure", "Pressure"], ["wind_speed", "Wind speed"], ["wind_gust_speed", "Wind gust"], ["wind_bearing", "Wind direction"],
  ["uv_index", "UV index"], ["solar_radiation", "Solar radiation"], ["illuminance", "Illuminance"], ["precipitation", "Rain rate"],
  ["visibility", "Visibility"], ["cloud_coverage", "Cloud cover"], ["ozone", "Ozone"],
];

const isDev = (r) => typeof r === "string" && r.startsWith("device:");

class WsfcSourcesEditor extends LitElement {
  static properties = { hass: { attribute: false }, config: { attribute: false }, _open: { state: true }, _adding: { state: true } };

  constructor() {
    super();
    this._open = new Set();
  }

  get _sources() {
    const ms = this.config?.metric_sources || {};
    if (Array.isArray(ms.sources)) return ms.sources.filter((s) => s?.ref).map((s) => ({ ref: s.ref, overrides: { ...(s.overrides || {}) }, disabled: !!s.disabled }));
    return this.config?.entity ? [{ ref: this.config.entity, overrides: {} }] : [];
  }

  _station(sources) {
    return { entity: this.config?.entity, metric_sources: { ...(this.config?.metric_sources || {}), sources } };
  }

  _commit(sources) {
    const clean = sources.filter((s) => s?.ref).map((s) => {
      const o = Object.fromEntries(Object.entries(s.overrides || {}).filter(([, v]) => v));
      return { ref: s.ref, ...(Object.keys(o).length ? { overrides: o } : {}), ...(s.disabled ? { disabled: true } : {}) };
    });
    const ms = { ...(this.config?.metric_sources || {}) };
    delete ms.primary; delete ms.fallback; delete ms.custom; delete ms.device_map;
    if (clean.length) ms.sources = clean;
    else delete ms.sources;
    // Forecast + condition entity = first enabled weather entity (forecast-capable first).
    const fc = (e) => (this.hass?.states?.[e]?.attributes?.supported_features & 7) !== 0;
    const weathers = (list) => list.map((s) => s.ref).filter((r) => typeof r === "string" && r.startsWith("weather."));
    const en = weathers(clean.filter((s) => !s.disabled)), all = weathers(clean);
    const entity = en.find(fc) || en[0] || all.find(fc) || all[0] || this.config?.entity;
    this.dispatchEvent(new CustomEvent("sources-changed", { detail: { entity, metric_sources: Object.keys(ms).length ? ms : undefined } }));
  }

  _info(ref) {
    const h = this.hass;
    if (isDev(ref)) {
      const d = h?.devices?.[ref.slice(7)];
      const eid = deviceEntities(h, ref.slice(7))[0];
      return { icon: "mdi:access-point", name: d?.name_by_user || d?.name || ref.slice(7), kind: "Station device", sub: [d?.manufacturer, d?.model].filter(Boolean).join(" "), integ: integrationOf(h, eid) };
    }
    const st = h?.states?.[ref];
    if (ref.startsWith("weather.")) return { icon: "mdi:weather-partly-cloudy", name: st?.attributes?.friendly_name || ref, kind: "Weather entity", sub: "forecast + condition", integ: integrationOf(h, ref) };
    return { icon: "mdi:eye-outline", name: st?.attributes?.friendly_name || ref, kind: "Sensor", sub: ref, integ: integrationOf(h, ref) };
  }

  // Likely candidates for a value: the source device's own entities (and its
  // siblings), filtered loosely to sensors with a unit.
  _candidates(ref, def) {
    const h = this.hass;
    if (!isDev(ref)) return [];
    const unit = def && h.states[def]?.attributes?.unit_of_measurement;
    const id = ref.slice(7);
    const entries = h.devices?.[id]?.config_entries || [];
    const devs = new Set([id, ...Object.entries(h.devices || {}).filter(([, d]) => (d.config_entries || []).some((e) => entries.includes(e))).map(([k]) => k)]);
    return [...devs].flatMap((d) => deviceEntities(h, d)).filter((e) => e.startsWith("sensor.") && h.states[e]?.attributes?.unit_of_measurement && (!unit || h.states[e].attributes.unit_of_measurement === unit)).sort();
  }

  render() {
    if (!this.hass) return nothing;
    const sources = this._sources;
    const station = this._station(sources);
    const hasWeather = sources.some((s) => s.ref.startsWith("weather.") && !s.disabled);
    return html`
      <div class="list">
        ${sources.map((s, i) => this._source(s, i, sources, station))}
      </div>
      ${!hasWeather ? html`<p class="warn">Add a weather entity (e.g. OpenWeatherMap) — it supplies the forecast and condition.</p>` : nothing}
      ${this._adding ? this._addForm(sources) : html`<button class="add" type="button" @click=${() => (this._adding = true)}><ha-icon icon="mdi:plus"></ha-icon>Add source</button>`}
    `;
  }

  _source(s, i, sources, station) {
    const inf = this._info(s.ref);
    const open = this._open.has(s.ref);
    const rows = SOURCE_METRICS.map(([k, label]) => {
      const def = sourceDefault(station, this.hass, s.ref, k);
      const has = s.ref.startsWith("weather.") ? this.hass.states[s.ref]?.attributes?.[k] != null : !!def;
      return { k, label, def: s.ref.startsWith("weather.") ? (has ? s.ref : null) : def, ov: s.overrides[k] || "", has: has || !!s.overrides[k] };
    });
    const supplied = rows.filter((r) => r.has).length;
    const set = (fn) => { const list = sources.map((x) => ({ ...x, overrides: { ...x.overrides } })); fn(list); this._commit(list); };
    const toggle = () => { const o = new Set(this._open); o.has(s.ref) ? o.delete(s.ref) : o.add(s.ref); this._open = o; };
    return html`<div class="src ${open ? "open" : ""} ${s.disabled ? "off" : ""}">
      <div class="hd" @click=${toggle} role="button" tabindex="0" aria-expanded=${String(open)} @keydown=${(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), toggle())}>
        <span class="rank">${i + 1}</span>
        <ha-icon class="lead" icon=${inf.icon}></ha-icon>
        <div class="tt">
          <div class="nm">${inf.name}${s.disabled ? html` <span class="tag">hidden</span>` : nothing}</div>
          <div class="sb"><span class="pill">${inf.kind}</span>${inf.integ ? html`<span class="pill integ">${inf.integ}</span>` : nothing}<span>${supplied} value${supplied === 1 ? "" : "s"}</span></div>
        </div>
        <span class="acts" @click=${(e) => e.stopPropagation()}>
          <button class="ib" title="Higher priority" ?disabled=${i === 0} @click=${() => set((l) => ([l[i - 1], l[i]] = [l[i], l[i - 1]]))}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
          <button class="ib" title="Lower priority" ?disabled=${i === sources.length - 1} @click=${() => set((l) => ([l[i + 1], l[i]] = [l[i], l[i + 1]]))}><ha-icon icon="mdi:arrow-down"></ha-icon></button>
          <button class="ib" title=${s.disabled ? "Use this source" : "Skip this source"} @click=${() => set((l) => (l[i].disabled = !l[i].disabled))}><ha-icon icon=${s.disabled ? "mdi:eye-off" : "mdi:eye"}></ha-icon></button>
          <button class="ib del" title="Remove source" @click=${() => set((l) => l.splice(i, 1))}><ha-icon icon="mdi:delete-outline"></ha-icon></button>
        </span>
        <ha-icon class="chev" icon=${open ? "mdi:chevron-up" : "mdi:chevron-down"}></ha-icon>
      </div>
      ${open
        ? html`<div class="bd">
            ${inf.sub ? html`<div class="meta">${inf.sub}</div>` : nothing}
            <div class="tbl">
              ${rows.filter((r) => r.has || isDev(s.ref)).map((r) => {
                const shown = r.ov || r.def;
                const v = shown && !shown.startsWith("weather.") ? entityValue(this.hass, shown) : null;
                const wv = shown?.startsWith("weather.") ? this.hass.states[shown]?.attributes?.[r.k] : null;
                return html`<span class="k">${r.label}</span>
                  <wsfc-entity-select .hass=${this.hass} .value=${r.ov} .defaultEntity=${r.def}
                    .defaultLabel=${s.ref.startsWith("weather.") && !r.ov ? (r.def ? `Default — attribute` : "Default — none") : undefined}
                    .candidates=${this._candidates(s.ref, r.def)} label=${r.label}
                    @value-changed=${(e) => set((l) => (l[i].overrides[r.k] = e.detail.value || undefined))}></wsfc-entity-select>
                  <span class="v">${v ? `${v.value} ${v.unit}` : wv != null ? String(wv) : ""}</span>`;
              })}
            </div>
            ${s.ref.startsWith("weather.") ? html`<p class="hint">Only values this entity has are listed. Forecasts always come from the highest weather entity.</p>` : nothing}
          </div>`
        : nothing}
    </div>`;
  }

  _addForm(sources) {
    const add = (ref) => {
      if (!ref || sources.some((s) => s.ref === ref)) { this._adding = false; return; }
      this._adding = false;
      // Devices go above weather entities by default; others at the end.
      const list = sources.slice();
      const firstWeather = list.findIndex((s) => s.ref.startsWith("weather."));
      if (isDev(ref) && firstWeather >= 0) list.splice(firstWeather, 0, { ref, overrides: {} });
      else list.push({ ref, overrides: {} });
      this._commit(list);
    };
    return html`<div class="addbox">
      <ha-form .hass=${this.hass} .data=${{ d: "" }} .schema=${[{ name: "d", selector: { device: {} } }]} .computeLabel=${() => "Station device (e.g. your Ecowitt gateway or sensor)"}
        @value-changed=${(e) => { e.stopPropagation(); add(e.detail.value?.d && `device:${e.detail.value.d}`); }}></ha-form>
      <ha-form .hass=${this.hass} .data=${{ e: "" }} .schema=${[{ name: "e", selector: { entity: {} } }]} .computeLabel=${() => "…or a weather entity or single sensor"}
        @value-changed=${(e) => { e.stopPropagation(); add(e.detail.value?.e); }}></ha-form>
      <button class="add ghost" type="button" @click=${() => (this._adding = false)}>Cancel</button>
    </div>`;
  }

  static styles = css`
    :host { display: block; }
    .list { display: flex; flex-direction: column; gap: 6px; }
    .src { border: 1px solid var(--ltek-c-border-soft, #333); border-radius: var(--ltek-r-card, 10px); background: var(--ltek-c-surface-raised, rgba(255, 255, 255, 0.02)); }
    .src.open { border-color: var(--ltek-c-accent, var(--primary-color)); }
    .src.off .tt, .src.off .lead { opacity: 0.5; }
    .hd { display: flex; align-items: center; gap: 8px; padding: 8px 10px; cursor: pointer; }
    .rank { width: 18px; height: 18px; border-radius: 50%; background: var(--ltek-c-accent-fade, rgba(33, 150, 243, 0.12)); color: var(--ltek-c-accent, var(--primary-color)); font-size: 11px; font-weight: 700; display: grid; place-items: center; flex: 0 0 auto; }
    .lead { --mdc-icon-size: 20px; color: var(--primary-text-color); flex: 0 0 auto; }
    .tt { flex: 1; min-width: 0; }
    .nm { font-size: 13px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .sb { display: flex; flex-wrap: wrap; gap: 4px 6px; align-items: center; font-size: 11px; color: var(--secondary-text-color); margin-top: 2px; }
    .pill { padding: 0 7px; border-radius: 999px; border: 1px solid var(--ltek-c-border, #444); line-height: 16px; }
    .pill.integ { border-color: transparent; background: var(--ltek-c-accent-fade, rgba(33, 150, 243, 0.12)); color: var(--ltek-c-accent, var(--primary-color)); }
    .tag { font-size: 10px; font-weight: 400; color: var(--secondary-text-color); }
    .acts { display: flex; gap: 0; }
    .ib { border: 0; background: transparent; color: var(--ltek-c-icon, #aaa); cursor: pointer; padding: 3px; border-radius: 6px; line-height: 0; }
    .ib:hover:not([disabled]) { color: var(--ltek-c-icon-hover, #fff); background: var(--ltek-c-accent-fade-soft, rgba(33, 150, 243, 0.08)); }
    .ib.del:hover { color: var(--ltek-c-error, #f44336); }
    .ib[disabled] { opacity: 0.3; cursor: default; }
    .ib ha-icon { --mdc-icon-size: 16px; }
    .chev { --mdc-icon-size: 18px; color: var(--secondary-text-color); }
    .bd { padding: 0 10px 10px 36px; }
    .meta { font-size: 11px; color: var(--secondary-text-color); margin-bottom: 6px; font-family: monospace; }
    .tbl { display: grid; grid-template-columns: minmax(90px, auto) minmax(0, 1fr) auto; gap: 4px 10px; align-items: center; font-size: 12px; }
    .tbl .k { color: var(--ltek-c-label, #ccc); }
    .tbl .v { color: var(--secondary-text-color); white-space: nowrap; font-size: 11px; }
    .hint { margin: 6px 0 0; font-size: 11px; color: var(--secondary-text-color); }
    .warn { margin: 6px 0 0; font-size: 12px; color: var(--warning-color, #ffa600); }
    .add { display: inline-flex; align-items: center; gap: 6px; margin-top: 8px; font: inherit; font-size: 13px; padding: 6px 12px; border-radius: 6px; border: 0; background: var(--ltek-c-accent, var(--primary-color)); color: #fff; cursor: pointer; }
    .add.ghost { background: transparent; color: var(--primary-text-color); border: 1px solid var(--ltek-c-border, #444); }
    .add ha-icon { --mdc-icon-size: 16px; }
    .addbox { display: flex; flex-direction: column; gap: 6px; margin-top: 8px; padding: 10px; border: 1px dashed var(--ltek-c-border, #444); border-radius: 10px; }
  `;
}

customElements.get("wsfc-sources-editor") || customElements.define("wsfc-sources-editor", WsfcSourcesEditor);
