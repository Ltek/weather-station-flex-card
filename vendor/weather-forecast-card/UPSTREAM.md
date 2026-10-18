# Vendored: troinine/ha-weather-forecast-card

- Upstream: https://github.com/troinine/ha-weather-forecast-card
- Tag: v1.1.0 (commit b832be4dd771c8f428995172089cca3cfad3f3a4) — the same base Weather Flex Card ships.
- License: MIT (see LICENSE). Copied unmodified except `src/index.ts` (removed;
  this card has its own entry point).

At build time `build.mjs` renames the custom-element tags (`wfc-*` -> `wsfc-*`,
`weather-forecast-card` -> `wsfc-flex-core`) so this card can share a dashboard
with Weather Flex Card without the two registering the same elements. Keep the
files here pristine so they stay diffable against upstream.
