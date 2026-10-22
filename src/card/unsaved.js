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
