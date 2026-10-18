// Shared weather/subscribe_forecast subscriptions: several panels (tomorrow,
// bulletin, ...) can listen to the same entity/type with one websocket sub.

const subs = new Map(); // key -> { listeners:Set, data, unsub:Promise|null }

export function watchForecast(hass, entityId, type, cb) {
  if (!hass?.connection || !entityId) return () => {};
  const key = `${entityId}|${type}`;
  let s = subs.get(key);
  if (!s) {
    s = { listeners: new Set(), data: null, unsub: null };
    subs.set(key, s);
    s.unsub = hass.connection
      .subscribeMessage(
        (ev) => {
          s.data = ev?.forecast || [];
          s.listeners.forEach((l) => l(s.data));
        },
        { type: "weather/subscribe_forecast", forecast_type: type, entity_id: entityId },
        { resubscribe: true }
      )
      .catch((e) => {
        console.warn("weather-station-flex-card: forecast subscription failed", entityId, type, e);
        return null;
      });
  }
  s.listeners.add(cb);
  if (s.data) cb(s.data);
  return () => {
    s.listeners.delete(cb);
    if (!s.listeners.size) {
      subs.delete(key);
      Promise.resolve(s.unsub).then((u) => typeof u === "function" && u()).catch(() => {});
    }
  };
}

/** Daily forecast entry for the local calendar day `offset` days from today. */
export function forecastForDay(daily, offset) {
  if (!Array.isArray(daily)) return null;
  const target = new Date();
  target.setHours(0, 0, 0, 0);
  target.setDate(target.getDate() + offset);
  const key = target.toDateString();
  return daily.find((f) => new Date(f.datetime).toDateString() === key) || daily[offset] || null;
}
