import { css, html, nothing } from "lit";

// Shared look for every panel tile.
export const panelStyles = css`
  :host {
    display: flex;
    flex-direction: column;
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

/** Panel tile look (card grid, stacks, pop-ups). */
export const tileStyles = css`
    .tile {
      position: relative;
      background: var(--wsfc-tile-bg, rgba(127, 127, 127, 0.08));
      border-radius: var(--wsfc-radius, 16px);
      box-shadow: var(--wsfc-tile-shadow, none);
      border: var(--wsfc-tile-border, 0 solid transparent);
      padding: 12px 14px;
      min-width: 0;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      /* visible: a non-visible overflow would let the grid shrink a tile below
         its content (its automatic minimum height becomes 0). Panels clip
         their own content. */
      overflow: visible;
    }
    /* The hero's Weather Flex card draws its own background and sizes to its sections. */
    .tile.hero { background: transparent; padding: 0; }
    .tile.bare { background: transparent; padding: 4px 2px; overflow: visible; }
    .tile.stack { background: transparent; padding: 0; overflow: visible; }
    /* Panels without a tile of their own get no border or shadow. */
    .tile.bare:not(.bg-translucent):not(.bg-solid), .tile.stack { border: 0; box-shadow: none; }
    /* Children fill the tile but never shrink below their content. */
    .tile > :not(.expand) { flex: 1 0 auto; }
`;

/** Panel-button chips (card top bar and heading panels). */
export const chipStyles = css`
    .chip {
      display: inline-flex; align-items: center; gap: 6px;
      font: inherit; font-size: 13px; white-space: nowrap;
      padding: 6px 12px; border-radius: 999px; cursor: pointer;
      color: var(--secondary-text-color);
      background: transparent;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.35));
      transition: background-color 0.15s, color 0.15s, border-color 0.15s;
    }
    .chip ha-icon { --mdc-icon-size: 18px; }
    .chip ha-icon.open { --mdc-icon-size: 14px; opacity: 0.7; }
    .chip.on { color: var(--text-primary-color, #fff); background: var(--primary-color); border-color: var(--primary-color); }
    .chip.popup { color: var(--primary-text-color); }
    .chip.popup.on { color: var(--text-primary-color, #fff); }
    .chip:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }
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

/** Open Home Assistant's more-info dialog for an entity. */
export function moreInfo(host, entityId) {
  if (entityId) host.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId }, bubbles: true, composed: true }));
}

/**
 * Panel header: icon + title + optional right-side controls.
 * show_title: false hides the title (and icon); show_icon: false hides just the icon.
 */
export function head(config, icon, defTitle, right = nothing) {
  if (config?.show_title === false) return right === nothing ? nothing : html`<div class="head"><span class="title"></span>${right}</div>`;
  return html`<div class="head">
    ${config?.show_icon === false ? nothing : html`<ha-icon icon=${config?.icon || icon}></ha-icon>`}
    <span class="title">${config?.title || defTitle}</span>${right}
  </div>`;
}

/** Big value + label; tapping opens Home Assistant's more-info dialog. */
export function reading(host, { label, value, unit, digits = 0, color, entity }) {
  const open = () => moreInfo(host, entity);
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

/** Stand-in for a live map while the dashboard is being edited. */
export const pausedStyles = css`
  .paused { flex: 1; min-height: 120px; border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px;
    color: var(--wsfc-muted); font-size: 13px; text-align: center; padding: 8px;
    background: repeating-linear-gradient(135deg, rgba(127, 127, 127, 0.08) 0 12px, rgba(127, 127, 127, 0.14) 12px 24px); }
  .paused ha-icon { --mdc-icon-size: 32px; opacity: 0.7; }
`;
export function paused(icon, what) {
  return html`<div class="paused" role="img" aria-label="${what} paused while editing"><ha-icon icon=${icon}></ha-icon><span>${what} — paused while editing</span></div>`;
}
