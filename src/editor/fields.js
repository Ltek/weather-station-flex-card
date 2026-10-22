// Editor fields in the Ltek design system (CARD_DESIGN_SYSTEM.md):
// checkboxes instead of switches, drop-downs instead of radio lists, sliders
// with a bold readout for sizes, and the four-mode color control. Fields with
// richer Home Assistant selectors (entity, device, icon, object, media …) are
// still drawn by ha-form, in runs between the native ones.
import { html, css, nothing } from "lit";

export const THEME_COLORS = [
  ["var(--primary-color)", "Primary"],
  ["var(--accent-color)", "Accent"],
  ["var(--primary-text-color)", "Primary text"],
  ["var(--secondary-text-color)", "Secondary text"],
  ["var(--disabled-text-color)", "Disabled text"],
  ["var(--state-active-color)", "State active"],
  ["var(--error-color)", "Error"],
  ["var(--warning-color)", "Warning"],
  ["var(--success-color)", "Success"],
  ["var(--info-color)", "Info"],
];

/** default | theme | custom | css for a stored color (design system §3). */
export function colorMode(cur) {
  cur = cur == null ? "" : String(cur);
  if (cur === "") return "default";
  if (cur === "transparent") return "transparent";
  if (/^#[0-9a-fA-F]{3,8}$/.test(cur)) return "custom";
  if (/^var\(/.test(cur) && THEME_COLORS.some(([v]) => v === cur)) return "theme";
  return "css";
}

const isColor = (f) => !!f.selector?.ltek_color || (!!f.selector?.text && /(^|_|\.)color$/.test(f.name));
const isPx = (n) => /px|%/.test(n?.unit_of_measurement || "");

/** Which fields this module draws itself. */
export function nativeField(f) {
  const s = f.selector || {};
  if (s.boolean) return true;
  if (s.select && !s.select.custom_value) return true;
  if (s.number) return true;
  if (isColor(f)) return true;
  if (s.text && !s.text.multiple) return true;
  return false;
}

const hex6 = (v) => (/^#[0-9a-fA-F]{6}$/.test(v || "") ? v : null);

/**
 * Fields for `schema`, values from `data`; `onChange(data)` gets the whole data
 * object with the edited field set (undefined = cleared). `haForm(data, schema,
 * onChange)` draws the fields we don't.
 */
export function renderFields({ data, schema, onChange, label, helper, haForm, auto }) {
  const out = [];
  let run = [];
  const flush = () => {
    if (!run.length) return;
    const fields = run;
    out.push(haForm(Object.fromEntries(fields.map((f) => [f.name, data[f.name]])), fields, (v) => onChange({ ...data, ...v })));
    run = [];
  };
  for (const f of schema) {
    // Sub-settings of a feature that's off are hidden (design system: no dead controls).
    if (typeof f.when === "function" && !f.when(data)) continue;
    if (!nativeField(f)) { run.push(f); continue; }
    flush();
    out.push(field(f, data[f.name], (v) => onChange({ ...data, [f.name]: v }), label(f), helper(f), auto?.(f)));
  }
  flush();
  return out;
}

function field(f, value, set, lab, help, autoText) {
  const s = f.selector || {};
  const id = `f-${f.name.replace(/\W/g, "_")}`;
  const hint = help ? html`<div class="fhelp">${help}</div>` : nothing;
  if (s.boolean) {
    // invert: the box means the opposite of the stored value ("Disable shadow" stores tile_shadow: false).
    const on = f.invert ? value === false : !!value;
    return html`<div class="fld"><label class="fchk"><input type="checkbox" .checked=${on} @change=${(e) => set(f.invert ? !e.target.checked : e.target.checked)} />${lab}</label>${hint}</div>`;
  }
  if (s.select && !s.select.multiple) {
    const opts = (s.select.options || []).map((o) => (typeof o === "string" ? { value: o, label: o } : o));
    const cur = value == null ? "" : String(value);
    return html`<div class="fld"><div class="frow"><label for=${id}>${lab}</label>
      <select id=${id} class="sel" @change=${(e) => set(e.target.value === "" ? undefined : e.target.value)}>
        ${opts.some((o) => String(o.value) === cur) ? nothing : html`<option value="" ?selected=${cur === ""}>—</option>`}
        ${opts.map((o) => html`<option value=${o.value} ?selected=${String(o.value) === cur}>${o.label}</option>`)}
      </select></div>${hint}</div>`;
  }
  if (s.select && s.select.multiple) {
    const opts = (s.select.options || []).map((o) => (typeof o === "string" ? { value: o, label: o } : o));
    const cur = Array.isArray(value) ? value : [];
    const toggle = (v, on) => {
      const next = opts.map((o) => o.value).filter((x) => (x === v ? on : cur.includes(x)));
      set(next.length ? next : undefined);
    };
    return html`<div class="fld"><div class="flab">${lab}</div><div class="fmulti">
      ${opts.map((o) => html`<label class="fchk"><input type="checkbox" .checked=${cur.includes(o.value)} @change=${(e) => toggle(o.value, e.target.checked)} />${o.label}</label>`)}
    </div>${hint}</div>`;
  }
  if (s.number) {
    const n = s.number;
    const unit = n.unit_of_measurement || "";
    if (n.mode === "slider" || isPx(n)) {
      const min = n.min ?? 0, max = n.max ?? 100, step = n.step ?? 1;
      const shown = value ?? f.default;
      // At Auto the thumb sits on the detected value, not on the minimum.
      const autoNum = parseFloat(autoText);
      const thumb = shown ?? (Number.isFinite(autoNum) ? Math.max(min, Math.min(max, autoNum)) : min);
      const fmt = (v) => (v == null || v === "" ? "Auto" : `${v}${unit}`);
      return html`<div class="fld"><div class="frow nowrap"><label for=${id}>${lab}</label>
        <input id=${id} type="range" class="frange" min=${min} max=${max} step=${step} .value=${String(thumb)}
          @input=${(e) => { const o = e.target.parentElement.querySelector(".fval"); if (o) o.textContent = fmt(e.target.value); }}
          @change=${(e) => set(Number(e.target.value))} />
        <span class="fval">${fmt(shown)}</span>
        ${value != null && f.default === undefined ? html`<button class="freset" title="Back to Auto" @click=${() => set(undefined)}>×</button>` : nothing}
      </div>${autoText && shown == null ? html`<div class="fauto">Auto: ${autoText}</div>` : nothing}${hint}</div>`;
    }
    return html`<div class="fld"><div class="frow"><label for=${id}>${lab}</label>
      <input id=${id} type="number" class="ftext num" min=${n.min ?? nothing} max=${n.max ?? nothing} step=${n.step ?? "any"} .value=${value ?? ""}
        @change=${(e) => set(e.target.value === "" ? undefined : Number(e.target.value))} />${unit ? html`<span class="funit">${unit}</span>` : nothing}
    </div>${hint}</div>`;
  }
  if (isColor(f)) return colorField(id, value, set, lab, hint, /background|(^|_)bg(_|$)/i.test(`${f.name} ${lab}`));
  // plain text
  return html`<div class="fld"><div class="frow"><label for=${id}>${lab}</label>
    <input id=${id} type=${s.text?.type || "text"} class="ftext" .value=${value ?? ""} @change=${(e) => set(e.target.value === "" ? undefined : e.target.value)} />
  </div>${hint}</div>`;
}

// Four-mode color control: Not set / Theme color / Custom / CSS.
// Background colors also offer Transparent.
function colorField(id, value, set, lab, hint, bg = false) {
  const mode = colorMode(value);
  const v = value == null ? "" : String(value);
  const switchMode = (m) => {
    if (m === "default") return set(undefined);
    if (m === "transparent") return set("transparent");
    if (m === "theme") return set(THEME_COLORS.some(([x]) => x === v) ? v : THEME_COLORS[0][0]);
    if (m === "custom") return set(hex6(v) || "#4fc3f7");
    return set(v || "#4fc3f7"); // css keeps what's there
  };
  return html`<div class="fld"><div class="frow"><label for=${id}>${lab}</label>
    <span class="fcolor">
      <select id=${id} class="sel mode" @change=${(e) => switchMode(e.target.value)}>
        ${[["default", "Not set"], ...(bg || mode === "transparent" ? [["transparent", "Transparent"]] : []), ["theme", "Theme color"], ["custom", "Custom"], ["css", "CSS"]].map(([m, l]) => html`<option value=${m} ?selected=${m === mode}>${l}</option>`)}
      </select>
      ${mode === "theme"
        ? html`<select class="sel" aria-label="Theme color" @change=${(e) => set(e.target.value)}>${THEME_COLORS.map(([x, l]) => html`<option value=${x} ?selected=${x === v}>${l}</option>`)}</select>`
        : mode === "custom"
          ? html`<input type="color" class="fswatch" aria-label="Color" .value=${hex6(v) || "#4fc3f7"} @change=${(e) => set(e.target.value)} />`
          : mode === "css"
            ? html`<input type="text" class="ftext" aria-label="CSS color" .value=${v} @change=${(e) => set(e.target.value || undefined)} />`
            : nothing}
      ${mode !== "default" && mode !== "transparent" ? html`<span class="fdot" style="background:${v}"></span>` : nothing}
    </span>
  </div>${hint}</div>`;
}

export const fieldStyles = css`
  .fld { padding: var(--ltek-sp-1, 4px) 0; }
  .frow { display: flex; align-items: center; gap: var(--ltek-sp-4, 12px); flex-wrap: wrap; justify-content: flex-start; }
  .frow.nowrap { flex-wrap: nowrap; }
  .frow > label, .flab { font-size: var(--ltek-fs-label, 14px); color: var(--ltek-c-text); white-space: nowrap; }
  /* Basis 0: a long option text never pushes the control onto its own line. */
  .frow > .sel, .frow > .ftext, .frow > .frange, .frow > .fcolor { flex: 1 1 0; min-width: 0; }
  .frow > .sel { min-width: 120px; }
  .ftext { font: inherit; font-size: var(--ltek-fs-label, 14px); padding: var(--ltek-ctrl-pad, 6px 8px); border-radius: var(--ltek-r-ctrl, 6px); border: 1px solid var(--ltek-c-border); background: var(--card-background-color, #1c1c1c); color: var(--ltek-c-text); box-sizing: border-box; height: 34px; }
  .ftext.num { flex: 0 1 110px; }
  .funit { color: var(--ltek-c-muted); font-size: var(--ltek-fs-small, 12px); }
  .frange { accent-color: var(--ltek-c-accent); }
  .fval { flex: 0 0 var(--ltek-slider-val-w, 44px); text-align: right; font-weight: 700; font-variant-numeric: tabular-nums; white-space: nowrap; font-size: var(--ltek-fs-label, 14px); }
  .freset { border: 0; background: none; color: var(--ltek-c-muted); cursor: pointer; font-size: 16px; padding: 0 2px; }
  .fchk { display: inline-flex; align-items: center; gap: var(--ltek-sp-2, 8px); font-size: var(--ltek-fs-label, 14px); cursor: pointer; }
  .fchk input { accent-color: var(--ltek-c-accent); width: 16px; height: 16px; margin: 0; }
  .fmulti { display: flex; flex-wrap: wrap; gap: var(--ltek-sp-1, 4px) var(--ltek-sp-4, 12px); margin-top: 4px; }
  .fauto { color: var(--ltek-c-accent); font-size: var(--ltek-fs-small, 12px); margin-top: 2px; }
  .fhelp { color: var(--ltek-c-muted); font-size: var(--ltek-fs-small, 12px); line-height: 1.35; margin-top: 2px; }
  .fcolor { display: flex; align-items: center; gap: var(--ltek-sp-2, 8px); flex-wrap: wrap; }
  .fcolor .sel.mode { flex: 0 0 auto; }
  .fcolor > .sel:not(.mode), .fcolor > .ftext { flex: 1 1 120px; }
  .fswatch { width: 44px; height: 34px; padding: 0; border: 1px solid var(--ltek-c-border); border-radius: var(--ltek-r-ctrl, 6px); background: none; cursor: pointer; }
  .fdot { width: 18px; height: 18px; border-radius: 50%; border: 1px solid var(--ltek-c-border); flex: 0 0 auto; }
`;
