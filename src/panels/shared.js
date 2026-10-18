import { css, html, nothing } from "lit";

// Shared look for every panel tile.
export const panelStyles = css`
  :host {
    display: flex;
    flex-direction: column;
    min-height: 0;
    height: 100%;
    color: var(--primary-text-color);
    --wsfc-muted: var(--secondary-text-color);
    --wsfc-temp: var(--wsfc-temp-color, #ff9800);
    --wsfc-dew: var(--wsfc-dew-color, #26c6da);
    --wsfc-hum: var(--wsfc-hum-color, #42a5f5);
    --wsfc-wind: var(--wsfc-wind-color, #42a5f5);
    --wsfc-gust: var(--wsfc-gust-color, #ff9800);
  }
  .head {
    display: flex;
    align-items: center;
    gap: 8px;
    min-height: 32px;
    margin-bottom: 8px;
    padding-right: var(--wsfc-head-pad, 0);
  }
  .head ha-icon { --mdc-icon-size: 20px; color: var(--wsfc-muted); }
  .head .title { font-size: 15px; font-weight: 500; flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .seg {
    display: inline-flex;
    border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
    border-radius: 999px;
    overflow: hidden;
  }
  .seg button {
    font: inherit;
    font-size: 12px;
    color: var(--wsfc-muted);
    background: transparent;
    border: 0;
    padding: 4px 10px;
    cursor: pointer;
  }
  .seg button[aria-pressed="true"] {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }
  .readings {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 18px;
    margin-bottom: 8px;
  }
  .reading { display: flex; flex-direction: column; cursor: pointer; }
  .reading .v { font-size: 22px; font-weight: 500; line-height: 1.15; white-space: nowrap; }
  .reading .v small { font-size: 13px; font-weight: 400; color: var(--wsfc-muted); margin-left: 2px; }
  .reading .l { font-size: 12px; color: var(--wsfc-muted); display: flex; align-items: center; gap: 4px; }
  .reading .dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
  .body { position: relative; flex: 1; min-height: 160px; }
  .note { color: var(--wsfc-muted); font-size: 13px; padding: 8px 0; }
`;

export const fmt = (v, digits = 0) =>
  v == null || Number.isNaN(v) ? "—" : Number(v).toLocaleString(undefined, { maximumFractionDigits: digits, minimumFractionDigits: digits });

/** Segmented control. options: [{ value, label }] */
export function seg(options, value, onPick, label) {
  return html`<div class="seg" role="group" aria-label=${label}>
    ${options.map(
      (o) => html`<button type="button" aria-pressed=${String(o.value === value)} @click=${() => onPick(o.value)}>${o.label}</button>`
    )}
  </div>`;
}

/** Big value + label; tapping opens Home Assistant's more-info dialog. */
export function reading(host, { label, value, unit, digits = 0, color, entity }) {
  const open = () =>
    entity && host.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId: entity }, bubbles: true, composed: true }));
  return html`<div class="reading" @click=${open} role=${entity ? "button" : nothing} tabindex=${entity ? 0 : nothing}
    @keydown=${(e) => (e.key === "Enter" || e.key === " ") && open()}>
    <span class="v">${fmt(value, digits)}<small>${unit || ""}</small></span>
    <span class="l">${color ? html`<span class="dot" style="background:${color}"></span>` : nothing}${label}</span>
  </div>`;
}

/** Resolve a CSS custom property on an element to a concrete color for canvas. */
export function cssColor(el, name, fallback) {
  const v = getComputedStyle(el).getPropertyValue(name).trim();
  return v || fallback;
}
