import type { ForecastAttribute } from "./weather";

type DewPointReading = {
  readonly value: number;
  readonly source: "provider" | "calculated";
};

/**
 * Prefer a provider's dew point; otherwise estimate it from forecast temperature
 * and relative humidity using the Magnus equation over liquid water.
 * Returns the reading in the forecast's unit, or undefined for unusable inputs.
 * Formula and supported range: https://www.npl.co.uk/resources/q-a/dew-point-and-relative-humidity
 */
export function forecastDewPoint(
  forecast: Pick<ForecastAttribute, "temperature" | "humidity" | "dew_point">,
  unit: string,
): DewPointReading | undefined {
  const { dew_point, temperature, humidity } = forecast;
  if (typeof dew_point === "number" && Number.isFinite(dew_point)) {
    return { value: dew_point, source: "provider" };
  }
  if (
    typeof temperature !== "number" || !Number.isFinite(temperature) ||
    typeof humidity !== "number" || !Number.isFinite(humidity) ||
    humidity <= 0 || humidity > 100
  ) return undefined;

  let celsius: number;
  switch (unit) {
    case "°C": celsius = temperature; break;
    case "°F": celsius = (temperature - 32) * 5 / 9; break;
    case "K": celsius = temperature - 273.15; break;
    default: return undefined;
  }
  if (celsius < -45 || celsius > 60) return undefined;

  const gamma = Math.log(humidity / 100) + 17.62 * celsius / (243.12 + celsius);
  const dewCelsius = 243.12 * gamma / (17.62 - gamma);
  if (!Number.isFinite(dewCelsius) || dewCelsius < -45) return undefined;

  const value = unit === "°F" ? dewCelsius * 9 / 5 + 32
    : unit === "K" ? dewCelsius + 273.15 : dewCelsius;
  return { value, source: "calculated" };
}
