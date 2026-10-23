// "Unsaved changes" state shared by the editor and its preview card. Home
// Assistant gives the preview a fresh card element on every change, so the
// flag lives here (module scope) and an event tells live previews to redraw.
let unsaved = false;
export const isUnsaved = () => unsaved;
export function setUnsaved(v) {
  v = !!v;
  if (v === unsaved) return;
  unsaved = v;
  window.dispatchEvent(new CustomEvent("wsfc-unsaved", { detail: { unsaved: v } }));
}

// "Live preview" (editor checkbox, not saved): while editing, run the
// animations and maps instead of pausing them. Each editing session starts off.
let live = false;
export const isLive = () => live;
export function setLive(v) {
  v = !!v;
  if (v === live) return;
  live = v;
  window.dispatchEvent(new CustomEvent("wsfc-live", { detail: { live: v } }));
}
