// Single source of truth for the card version (format YYYY.MM.DD.BUILD, see
// ha-card-build-release.md). publish.py rewrites this line on release.
export const CARD_VERSION = "2026.10.18.1";

export const CARD_TYPE = "weather-station-flex-card";
export const CARD_NAME = "Weather Station Flex Card";

// Panel catalog: id -> label / icon. Order here is the default panel order.
export const PANELS = {
  temp_humidity: { label: "Temp & Humidity", icon: "mdi:thermometer-water" },
  wind: { label: "Wind", icon: "mdi:weather-windy" },
  radar: { label: "Radar", icon: "mdi:radar" },
  forecast: { label: "Forecast", icon: "mdi:calendar-week" },
  sun_moon: { label: "Sun & Moon", icon: "mdi:weather-sunset" },
};
export const PANEL_IDS = Object.keys(PANELS);
