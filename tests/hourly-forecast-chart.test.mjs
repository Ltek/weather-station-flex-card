// npm test
// Exercise the built card, including its vendored chart and forecast processing.
import assert from "node:assert/strict";
import { after, test } from "node:test";
import { Window } from "happy-dom";
import { readFile } from "node:fs/promises";
import { createContext, SourceTextModule } from "node:vm";

const win = new Window({ url: "http://localhost/" });
// Happy DOM omits this browser API; use Node's implementation in this realm.
win.structuredClone = structuredClone;
// Run the production module in its own DOM realm without replacing Node globals.
const bundleURL = new URL("../dist/weather-station-flex-card.js", import.meta.url);
const context = createContext(win);
const card = new SourceTextModule(await readFile(bundleURL, "utf8"), {
  context,
  initializeImportMeta: (meta) => { meta.url = bundleURL.href; },
});
await card.link(() => { throw new Error("The card bundle must be self-contained"); });
await card.evaluate();
const { document } = win;
after(() => win.happyDOM.close());

const weather = { entity_id: "weather.home", state: "rainy", attributes: { temperature_unit: "°F", precipitation_unit: "in", supported_features: 3 } };
const hass = {
  states: { "weather.home": weather },
  locale: { language: "en", number_format: "language" },
  config: { unit_system: { temperature: "°F", length: "mi" } },
  localize: (key) => key,
  formatEntityAttributeName: (_entity, key) => key,
};
const forecast = [
  { datetime: "2026-11-08T00:00:00Z", temperature: 48, dew_point: 35, precipitation: 0.1 },
  { datetime: "2026-11-08T01:00:00Z", temperature: 49, dew_point: 37, precipitation: 0.2 },
];

function chart(options = {}, type = "hourly", data = forecast, states = hass.states) {
  const el = document.createElement("wsfc-forecast-chart");
  Object.assign(el, { hass: { ...hass, states }, weatherEntity: states["weather.home"], config: { entity: "weather.home", forecast: options }, forecastType: type, forecast: data, itemWidth: 80 });
  return el.getChartConfig();
}

test("opt-in overlay preserves the temperature and precipitation datasets", () => {
  const base = chart();
  const enabled = chart({ chart_overlays: ["dew_point"] });
  assert.equal(base.data.datasets.length, 3);
  assert.equal(enabled.data.datasets.length, 4);
  assert.deepEqual(Array.from(enabled.data.datasets[0].data), [35, 37]);
  assert.equal(enabled.data.datasets[0].yAxisID, "yTemp");
  assert.equal(enabled.data.datasets[0].borderColor, "#48A5E8");
  assert.deepEqual(
    Array.from(enabled.data.datasets.slice(1), (d) => Array.from(d.data)),
    Array.from(base.data.datasets, (d) => Array.from(d.data)),
  );
  assert.ok(enabled.options.scales.yTemp.min < 35);
  assert.ok(enabled.options.scales.yTemp.max > 49);
});

test("missing or invalid forecast dew points leave gaps, including a valid zero", () => {
  const data = [null, undefined, NaN, Infinity, 0, -5].map((dew_point) => ({ ...forecast[0], dew_point }));
  const result = chart({ chart_overlays: ["dew_point"] }, "hourly", data);
  assert.deepEqual(Array.from(result.data.datasets[0].data), [null, null, null, null, 0, -5]);
  assert.equal(result.data.datasets[0].spanGaps, false);
  assert.equal(chart({ chart_overlays: ["dew_point"] }, "hourly", [forecast[0]].map((f) => ({ ...f, dew_point: undefined }))).data.datasets.length, 3);
});

test("daily and twice-daily charts stay unchanged", () => {
  for (const type of ["daily", "twice_daily", "legacy"]) {
    assert.equal(chart({ chart_overlays: ["dew_point"] }, type).data.datasets.length, 3);
  }
});

test("hourly panel forwards chart settings and explicit empty or false overrides", () => {
  const panel = document.createElement("wsfc-panel-hourly");
  panel.station = { entity: "weather.home" };
  panel.config = { chart_overlays: ["dew_point", "apparent_temperature"], chart_attribute: "humidity", show_attribute_selector: true };
  const config = panel._coreConfig();
  assert.deepEqual(Array.from(config.forecast.chart_overlays), ["dew_point", "apparent_temperature"]);
  assert.equal(config.forecast.hourly_chart_attribute, "humidity");
  assert.equal(config.forecast.hourly_show_attribute_selector, true);
  panel.config.show_attribute_selector = false;
  assert.equal(panel._coreConfig().forecast.hourly_show_attribute_selector, false);
  panel.config = { chart_overlays: [], flex: { forecast: { chart_overlays: ["dew_point"] } } };
  assert.equal(panel._coreConfig().forecast.chart_overlays.length, 0);
});

test("hour grouping averages available overlay readings and preserves missing data", () => {
  const core = document.createElement("wsfc-flex-core");
  core.hass = hass;
  core.config = { entity: "weather.home", forecast: { hourly_group_size: 2 } };
  const grouped = [35, 37, undefined, NaN].map((dew_point, i) => ({ ...forecast[0], datetime: new Date(2026, 10, 8, i).toISOString(), dew_point, apparent_temperature: dew_point }));
  core._hourlyForecastEvent = { type: "hourly", forecast: grouped };
  core.processForecastData();
  assert.equal(core._hourlyForecastData[0].dew_point, 36);
  assert.equal(core._hourlyForecastData[1].dew_point, undefined);
  assert.equal(core._hourlyForecastData[0].apparent_temperature, 36);
  assert.equal(core._hourlyForecastData[1].apparent_temperature, undefined);
  core._hourlyForecastEvent = { type: "hourly", forecast: grouped.map((f) => ({ ...f, dew_point: undefined })) };
  core.processForecastData();
  assert.equal(core._hourlyForecastData[0].dew_point, undefined);
});

test("other selected chart metrics do not receive temperature overlays", () => {
  const el = document.createElement("wsfc-forecast-chart");
  Object.assign(el, { hass, weatherEntity: weather, config: { forecast: { chart_overlays: ["dew_point"] } }, forecastType: "hourly", forecast, itemWidth: 80 });
  for (const metric of ["humidity", "pressure", "apparent_temperature", "uv_index"]) {
    el._selectedAttribute = metric;
    assert.equal(el.getChartConfig().data.datasets.length, 1);
  }
});

test("Celsius forecasts use the same axis and temperature formatting", () => {
  const states = {
    "weather.home": { ...weather, attributes: { ...weather.attributes, temperature_unit: "°C" } },
  };
  const data = forecast.map((f) => ({ ...f, temperature: 8, dew_point: 0 }));
  const result = chart({ chart_overlays: ["dew_point"] }, "hourly", data, states);
  const dewPoint = result.data.datasets[0];
  assert.deepEqual(Array.from(dewPoint.data), [0, 0]);
  assert.equal(dewPoint.datalabels.formatter(0), "0°");
  assert.equal(dewPoint.datalabels.formatter(null), null);
  assert.ok(result.options.scales.yTemp.min < 0);
  assert.ok(result.options.scales.yTemp.max > 8);
});

test("an empty overlay list keeps the default chart", () => {
  const base = chart();
  const disabled = chart({ chart_overlays: [] });
  assert.deepEqual(
    Array.from(disabled.data.datasets, (d) => Array.from(d.data)),
    Array.from(base.data.datasets, (d) => Array.from(d.data)),
  );
  assert.equal(disabled.options.scales.yTemp.min, base.options.scales.yTemp.min);
  assert.equal(disabled.options.scales.yTemp.max, base.options.scales.yTemp.max);
});

test("both overlays share the temperature axis with distinct styles", () => {
  const data = forecast.map((f) => ({ ...f, apparent_temperature: 60 }));
  const result = chart({ chart_overlays: ["dew_point", "apparent_temperature"] }, "hourly", data);
  assert.equal(result.data.datasets.length, 5);
  const [dewPoint, feelsLike] = result.data.datasets;
  assert.deepEqual(Array.from(feelsLike.data), [60, 60]);
  assert.equal(feelsLike.yAxisID, "yTemp");
  assert.equal(feelsLike.label, "apparent_temperature");
  assert.notEqual(feelsLike.borderColor, dewPoint.borderColor);
  assert.ok(feelsLike.borderDash.length > 0);
  assert.ok(result.options.scales.yTemp.min < 35);
  assert.ok(result.options.scales.yTemp.max > 60);
});

test("feels-like works independently and invalid values leave gaps", () => {
  const data = [null, undefined, NaN, Infinity, 0, -5].map((apparent_temperature) => ({ ...forecast[0], apparent_temperature }));
  const result = chart({ chart_overlays: ["apparent_temperature"] }, "hourly", data);
  assert.equal(result.data.datasets.length, 4);
  assert.deepEqual(Array.from(result.data.datasets[0].data), [null, null, null, null, 0, -5]);
  assert.equal(result.data.datasets[0].spanGaps, false);
  assert.equal(chart({ chart_overlays: ["apparent_temperature"] }).data.datasets.length, 3);
});

test("unsupported, duplicated, or malformed overlay settings add no extra lines", () => {
  for (const chart_overlays of [null, "dew_point", {}, ["humidity", "temperature", "missing"]]) {
    assert.equal(chart({ chart_overlays }).data.datasets.length, 3);
  }
  assert.equal(chart({ chart_overlays: ["dew_point", "dew_point"] }).data.datasets.length, 4);
});

const { render } = win.__wsfcHost.lit;
function renderChart(options, data) {
  const el = document.createElement("wsfc-forecast-chart");
  Object.assign(el, { hass, weatherEntity: weather, config: { entity: "weather.home", forecast: options }, forecastType: "hourly", forecast: data, itemWidth: 80 });
  const container = document.createElement("div");
  render(el.render(), container);
  return container;
}

test("rendered selector offers only metrics with finite forecast readings", () => {
  const container = renderChart({ show_attribute_selector: true }, [
    { ...forecast[0], humidity: 0, pressure: NaN, apparent_temperature: 52 },
    { ...forecast[1], uv_index: Infinity },
  ]);
  const selector = container.querySelector("wsfc-chart-attribute-selector");
  assert.deepEqual(Array.from(selector.options, (o) => o.value), ["temperature_and_precipitation", "apparent_temperature", "humidity"]);
  assert.ok(container.querySelector(".wsfc-settings-toggle-button"));
});

test("rendered legend identifies each available overlay and its style", () => {
  const container = renderChart({ chart_overlays: ["dew_point", "apparent_temperature"] }, forecast.map((f) => ({ ...f, apparent_temperature: 52 })));
  assert.match(container.textContent, /dew_point/);
  assert.match(container.textContent, /apparent_temperature/);
  assert.ok(container.querySelector('span[style*="dashed"]'));
  assert.ok(container.querySelector('span[style*="solid"]'));
});

test("hourly editor exposes metric selection and overlay choices", async () => {
  const editorURL = new URL("../dist/wsfc-editor.js", import.meta.url);
  const editor = new SourceTextModule(await readFile(editorURL, "utf8"), {
    context,
    initializeImportMeta: (meta) => { meta.url = editorURL.href; },
  });
  await editor.link(() => { throw new Error("The editor bundle must be self-contained"); });
  await editor.evaluate();
  const { schema } = win.__wsfcSchemas.PANEL_TYPES.hourly;
  const overlays = schema.find((f) => f.name === "chart_overlays");
  assert.equal(overlays.selector.select.multiple, true);
  assert.deepEqual(Array.from(overlays.selector.select.options, (o) => o.value), ["dew_point", "apparent_temperature"]);
  const metric = schema.find((f) => f.name === "chart_attribute");
  assert.deepEqual(Array.from(metric.selector.select.options, (o) => o.value), ["temperature_and_precipitation", "apparent_temperature", "humidity", "pressure", "uv_index"]);
  assert.equal(schema.find((f) => f.name === "show_attribute_selector").default, false);
});

test("a provider forecast with temperature and humidity gets a calculated dew point", () => {
  // Shape observed in HA: the provider supplies humidity but no dew_point.
  const data = [{ datetime: forecast[0].datetime, temperature: 53, humidity: 64, precipitation: 0 }];
  const result = chart({ chart_overlays: ["dew_point"] }, "hourly", data);
  assert.equal(result.data.datasets.length, 4);
  const line = result.data.datasets[0];
  assert.ok(Math.abs(line.data[0] - 41.1) < 0.1);
  assert.match(line.label, /calculated/);
  assert.ok(result.options.scales.yTemp.min < line.data[0]);
  assert.equal(data[0].dew_point, undefined);
  assert.match(renderChart({ chart_overlays: ["dew_point"] }, data).textContent, /dew_point \(calculated\)/);
});

test("calculated dew point uses the forecast temperature unit", () => {
  for (const [unit, temperature, expected] of [["°C", 20, 9.3], ["°F", 68, 48.7], ["K", 293.15, 282.4]]) {
    const states = { "weather.home": { ...weather, attributes: { ...weather.attributes, temperature_unit: unit } } };
    const data = [{ datetime: forecast[0].datetime, temperature, humidity: 50 }];
    const result = chart({ chart_overlays: ["dew_point"] }, "hourly", data, states);
    assert.ok(Math.abs(result.data.datasets[0].data[0] - expected) < 0.1, unit);
  }
});

test("provider dew points take priority, including zero, in mixed forecasts", () => {
  const data = [
    { ...forecast[0], dew_point: 0, temperature: 68, humidity: 50 },
    { ...forecast[1], dew_point: undefined, temperature: 68, humidity: 50 },
  ];
  const result = chart({ chart_overlays: ["dew_point"] }, "hourly", data);
  assert.equal(result.data.datasets[0].data[0], 0);
  assert.ok(Math.abs(result.data.datasets[0].data[1] - 48.7) < 0.1);
  assert.match(result.data.datasets[0].label, /calculated/);
  const provided = chart({ chart_overlays: ["dew_point"] }, "hourly", [data[0]]);
  assert.doesNotMatch(provided.data.datasets[0].label, /calculated/);
});

test("calculation preserves saturation and skips invalid humidity or temperature", () => {
  const states = { "weather.home": { ...weather, attributes: { ...weather.attributes, temperature_unit: "°C" } } };
  const saturated = chart({ chart_overlays: ["dew_point"] }, "hourly", [{ datetime: forecast[0].datetime, temperature: 0, humidity: 100 }], states);
  assert.equal(saturated.data.datasets[0].data[0], 0);
  for (const humidity of [0, -1, 101, undefined, null, NaN, Infinity, "50"]) {
    const data = [{ datetime: forecast[0].datetime, temperature: 20, humidity }];
    assert.equal(chart({ chart_overlays: ["dew_point"] }, "hourly", data, states).data.datasets.length, 3);
  }
  for (const temperature of [undefined, null, NaN, Infinity, -46, 61, "20"]) {
    const data = [{ datetime: forecast[0].datetime, temperature, humidity: 50 }];
    assert.equal(chart({ chart_overlays: ["dew_point"] }, "hourly", data, states).data.datasets.length, 3);
  }
  const unknownUnit = { "weather.home": { ...weather, attributes: { ...weather.attributes, temperature_unit: "unknown" } } };
  assert.equal(chart({ chart_overlays: ["dew_point"] }, "hourly", [{ datetime: forecast[0].datetime, temperature: 20, humidity: 50 }], unknownUnit).data.datasets.length, 3);
});
