// Libraries loaded on first use from files next to the card (see build.mjs):
// a URL built at run time, so the bundler leaves them out of the card.
import { CARD_VERSION } from "./constants.js";

const cache = new Map();
/** import() a file beside the card, e.g. lazyLib("wsfc-leaflet.js"). */
export function lazyLib(file) {
  if (!cache.has(file)) {
    const url = new URL(`./${file}?v=${CARD_VERSION}`, import.meta.url).href;
    cache.set(file, import(/* @vite-ignore */ url).catch((e) => {
      cache.delete(file);
      throw new Error(`${file} could not be loaded (${e?.message || e}). Reinstall the card so every file in its dist folder is present.`);
    }));
  }
  return cache.get(file);
}
