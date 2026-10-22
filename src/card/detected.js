// Values the card resolves from the theme or the screen (corner radius, row
// height, gap), so the editor can show what "Auto" means. The dashboard card
// and the editor's preview card report separately: Home Assistant applies the
// dashboard's theme to the dashboard but the global theme to the editor dialog.
const store = { dashboard: null, preview: null };
export const detected = () => store;
export function setDetected(where, values) {
  const prev = JSON.stringify(store[where]);
  if (prev === JSON.stringify(values)) return;
  store[where] = values;
  window.dispatchEvent(new CustomEvent("wsfc-detected"));
}
