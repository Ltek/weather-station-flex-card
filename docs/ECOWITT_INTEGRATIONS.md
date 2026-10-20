# Ecowitt integrations — what each exposes in Home Assistant

Checked against each integration's source (October 2026) for a GW2000-series gateway with a WS90 array. Entity names are the English names; ids depend on the device name.

| | **Ecowitt** (HA core) | **Ecowitt Local** | **Ecowitt Official** |
|---|---|---|---|
| Install | Built in (Settings → Integrations) | HACS default store | HACS custom repository |
| Source | [home-assistant.io/integrations/ecowitt](https://www.home-assistant.io/integrations/ecowitt/) | [alexlenk/ecowitt_local](https://github.com/alexlenk/ecowitt_local) | [Ecowitt/ha-ecowitt-iot](https://github.com/Ecowitt/ha-ecowitt-iot) |
| How data arrives | Gateway **pushes** to an HA webhook (set in the gateway's "Customized" upload) | HA **polls** the gateway's local web API | HA **polls** the gateway's local HTTP API |
| Devices | **One**, named after the gateway model | **One per sensor** (WS90, WH31…) **plus** one for the gateway | **One**, named after the gateway |
| Entity ids | `sensor.gw2000b_outdoor_temperature` | `sensor.ecowitt_outdoor_temp_<hwid>` — stable across battery swaps | `sensor.gw2000b_outdoor_temperature` |
| Gateways | All that support custom upload (incl. GW1000, WS2910, HP25xx) | GW1000/1100/1200/2000/3000 (not WS2910, displays) | GW1100 and newer (not GW1000, WS2910, HP25xx) |

## Readings

| Value | Ecowitt (core) | Ecowitt Local | Ecowitt Official |
|---|---|---|---|
| Outdoor temperature | Outdoor Temperature | Outdoor Temperature | Outdoor temperature |
| Feels like | Feels like Temperature | Feels Like Temperature | Feel likes · Apparent Temperatur |
| Wind chill / heat index | Windchill | Wind Chill · Heat Index | — |
| Dew point | Dewpoint | Dewpoint Temperature | Dew point |
| Humidity | Humidity | Outdoor Humidity | Outdoor humidity |
| Indoor temp / humidity / dew point | ✓ | ✓ (gateway device) | ✓ |
| Relative / absolute pressure | ✓ | ✓ (gateway device) | ✓ |
| Vapour pressure deficit | ✓ | ✓ | VPD |
| Wind speed / gust / max daily gust | ✓ | ✓ | Wind speed · Wind gust · Day wind max |
| Wind direction + 10-min average | ✓ | ✓ | ✓ |
| Solar radiation (W/m²) | Solar Radiation | Solar Radiation | Solar irradiance |
| Illuminance (lux) | Solar Lux | Solar Illuminance | **—** |
| UV index | UV Index | UV Index (+ UV Radiation µW/cm²) | UV-Index |
| Rain rate / event / hourly / daily / weekly / monthly / yearly / 24 h (WS90 piezo) | "… Rain Piezo" | "Rain Rate", "Daily Rain"… | "Piezo rain rate", "Daily piezo rainfall"… |
| Raining now | Rain State Piezo (binary) | Rain State Piezo (binary) | Rain Status (binary) |

## Station health

| Value | Ecowitt (core) | Ecowitt Local | Ecowitt Official |
|---|---|---|---|
| Sensor battery | WS90: **voltage** only ("WH90 Battery", V); some sensors as low/OK binary | **%** per sensor ("Battery") | **%** per sensor ("Haptic Array Battery") |
| WS90 capacitor voltage | WH90 Capacitor (V) | — | — |
| Signal (0–4 bars) | **—** | Signal Strength (%) · Signal Quality | Haptic Array Signal |
| RSSI (dBm) | **—** | RSSI | Haptic Array RSSI |
| Sensor online | — (entities go *unavailable* after 5 min without data) | Online (binary, per sensor) | — |
| Gateway online | — | Gateway Online (binary) | — |

## Using them with this card

- **Any one of them works.** Add the station's device under **Weather station → Weather Sources**; its sensors are mapped automatically (outdoor before indoor, instantaneous before averages, relative before absolute pressure, real feels-like before wind chill/heat index, UV index never confused with UV radiation).
- **Ecowitt Local** splits the station over two devices; add either one — the other (same integration entry) is searched automatically.
- **Several at once.** Sources are a priority list: the first source that has a value wins. A common setup is the core integration for readings (push, fastest) plus Ecowitt Local for battery, signal, RSSI and online state, shown by the **Station health** panel. Running two integrations against one gateway is fine: the core one only listens, the others poll.
- **Illuminance** is missing from the Ecowitt Official integration; add a second source if you show lux.
