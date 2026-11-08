/** Temperature series that can share the hourly chart's temperature axis. */
export const FORECAST_CHART_OVERLAYS = [
  { value: "dew_point", label: "Dew point", color: "#48A5E8", dashed: false },
  { value: "apparent_temperature", label: "Feels like", color: "#AB70D6", dashed: true },
] as const;

/** Supported forecast temperature overlays. */
export type ForecastChartOverlay = (typeof FORECAST_CHART_OVERLAYS)[number]["value"];

/** Standalone chart views offered by the hourly panel editor. */
export const FORECAST_CHART_METRICS = [
  { value: "temperature_and_precipitation", label: "Temperature & precipitation" },
  { value: "apparent_temperature", label: "Feels like" },
  { value: "humidity", label: "Humidity" },
  { value: "pressure", label: "Pressure" },
  { value: "uv_index", label: "UV index" },
] as const;
