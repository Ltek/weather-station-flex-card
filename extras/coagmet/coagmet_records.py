#!/usr/bin/env python3
"""Area weather records from CoAgMET (Colorado State University) for Home Assistant.

Downloads a station's daily history (Northern Water or CoAgMET network), drops
impossible readings, and prints one small JSON object for the
coagmet_records.yaml command_line sensor: all-time records, records for
today's date and this month, this season's frost dates, growing degree days,
rain totals against the station's normal and the last week's
evapotranspiration. Values use Open-Meteo's daily variable names
(temperature_2m_max, temperature_2m_min, precipitation_sum,
wind_gusts_10m_max, et0_fao_evapotranspiration) and a daily_units map, so the
Weather Station Flex Card reads CoAgMET and Open-Meteo the same way.
Standard library only.

Usage: coagmet_records.py [station] [network] [timezone] [cache file]
  station   5-character id, default lmt01 (Longmont South)
  network   nw (Northern Water) or coag (CoAgMET), default nw
  timezone  default America/Denver
"""
import csv
import io
import json
import os
import sys
import time
import urllib.request
from datetime import date, datetime, timedelta

try:
    from zoneinfo import ZoneInfo
except ImportError:  # pragma: no cover
    ZoneInfo = None

STATION = (sys.argv[1] if len(sys.argv) > 1 else "lmt01").lower()
NETWORK = (sys.argv[2] if len(sys.argv) > 2 else "nw").lower()
TZ = sys.argv[3] if len(sys.argv) > 3 else "America/Denver"
CACHE = sys.argv[4] if len(sys.argv) > 4 else f"/config/.coagmet_{STATION}.csv"
BASE = "https://coagmet.colostate.edu/data/" + ("nw/" if NETWORK == "nw" else "")
FIELDS = "tMax,tMin,precip,gustSpeed,etoASCE"
MAX_AGE_S = 20 * 3600  # re-download at most about once a day

# Readings outside these are instrument faults (e.g. a July low of -265 °F).
OK = {
    "high": (-40.0, 115.0),
    "low": (-45.0, 90.0),
    "rain": (0.0, 8.0),
    "gust": (0.0, 130.0),
    "et0": (0.0, 1.0),
}


def fetch(url, timeout=90):
    req = urllib.request.Request(url, headers={"User-Agent": "HomeAssistant-coagmet-records"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read().decode("utf-8", "replace")


def history():
    """The station's daily CSV, from the cache when it is fresh."""
    fresh = os.path.exists(CACHE) and time.time() - os.path.getmtime(CACHE) < MAX_AGE_S
    if fresh:  # a cache from an older version without every field: download again
        with open(CACHE) as f:
            fresh = f.readline().count(",") >= FIELDS.count(",") + 2
    if not fresh:
        try:
            text = fetch(f"{BASE}daily/{STATION}.csv?from=start&to=now&fields={FIELDS}&header=yes&units=us&dateFmt=iso")
            if not text.startswith("Station"):
                raise ValueError(text[:200])
            with open(CACHE, "w") as f:
                f.write(text)
            return text
        except Exception:
            if not os.path.exists(CACHE):
                raise
    with open(CACHE) as f:
        return f.read()


def meta():
    try:
        m = json.loads(fetch(f"{BASE}metadata/{STATION}.json", 30))
        return m.get(STATION, m)
    except Exception:
        return {}


def num(v, kind):
    try:
        x = float(v)
    except (TypeError, ValueError):
        return None
    lo, hi = OK[kind]
    return x if lo <= x <= hi else None


def parse(text):
    rows = list(csv.reader(io.StringIO(text)))
    days = []
    for r in rows[2:]:  # header + units rows
        if len(r) < 6:
            continue
        try:
            d = date.fromisoformat(r[1])
        except ValueError:
            continue
        hi, lo = num(r[2], "high"), num(r[3], "low")
        if hi is not None and lo is not None and lo > hi:
            hi = lo = None
        days.append({"d": d, "high": hi, "low": lo, "rain": num(r[4], "rain"), "gust": num(r[5], "gust"),
                     "et0": num(r[6], "et0") if len(r) > 6 else None})
    return days


# Open-Meteo daily variable names, so the card reads CoAgMET and Open-Meteo alike.
TMAX, TMIN, PRECIP, GUST, ET0 = "temperature_2m_max", "temperature_2m_min", "precipitation_sum", "wind_gusts_10m_max", "et0_fao_evapotranspiration"
DAILY_UNITS = {TMAX: "°F", TMIN: "°F", PRECIP: "inch", GUST: "mp/h", ET0: "inch"}


def best(days, key, pick):
    vals = [x for x in days if x[key] is not None]
    if not vals:
        return None
    x = pick(vals, key=lambda y: y[key])
    return {"value": round(x[key], 2), "date": x["d"].isoformat()}


def four(days):
    wet = [x for x in days if (x["rain"] or 0) > 0]
    return {TMAX: best(days, "high", max), TMIN: best(days, "low", min), GUST: best(days, "gust", max), PRECIP: best(wet, "rain", max)}


def total(days, key="rain"):
    return round(sum(x[key] or 0 for x in days), 2)


def summary(days, today):
    first = days[0]["d"]
    done = [x for x in days if x["d"] < today]  # complete days
    md = (today.month, today.day)
    same = [x for x in done if (x["d"].month, x["d"].day) == md]
    month = [x for x in done if x["d"].month == today.month]
    out = {"records": four(done)}
    out["records_today"] = {"date": today.strftime("%m-%d"), "years": len(same), **{k: v for k, v in four(same).items() if k != GUST}}
    out["records_month"] = {"month": today.month, **four(month)}

    # Frost season from July 1, so a January frost counts with the fall before it.
    fs = date(today.year if today.month >= 7 else today.year - 1, 7, 1)
    frosts = [x for x in done if x["d"] >= fs and x["low"] is not None and x["low"] <= 32]
    firsts = []
    for y in range(first.year, today.year + 1):
        s0, e0 = date(y, 7, 1), date(y + 1, 6, 30)
        if e0 >= today or s0 < first:
            continue
        f = [x for x in done if s0 <= x["d"] <= e0 and x["low"] is not None and x["low"] <= 32]
        if f:
            firsts.append((f[0]["d"] - s0).days)
    firsts.sort()
    out["frost"] = {
        "season_start": fs.isoformat(),
        "first": {"date": frosts[0]["d"].isoformat(), "value": round(frosts[0]["low"], 1)} if frosts else None,
        "last": {"date": frosts[-1]["d"].isoformat(), "value": round(frosts[-1]["low"], 1)} if frosts else None,
        "nights": len(frosts),
        "typical_first": (fs + timedelta(days=firsts[len(firsts) // 2])).strftime("%m-%d") if firsts else None,
        "threshold": 32,
    }

    # Growing degree days, 86/50 method: highs capped at 86, lows raised to 50.
    ys = date(today.year, 1, 1)
    gdd = sum(
        max(0.0, (min(x["high"], 86) + min(max(x["low"], 50), 86)) / 2 - 50)
        for x in done
        if x["d"] >= ys and x["high"] is not None and x["low"] is not None
    )
    out["growing_degree_days"] = {"since": ys.isoformat(), "value": round(gdd), "base": 50, "cap": 86}

    # Rain totals against the station's own normal (complete past years only).
    years = [y for y in range(first.year, today.year) if date(y, 1, 1) >= first]
    def normal(sel):
        sums = [total([x for x in done if sel(x["d"], y)]) for y in years]
        return round(sum(sums) / len(sums), 2) if sums else None
    last = next((x for x in reversed(done) if (x["rain"] or 0) >= 0.01), None)
    out["precipitation"] = {
        "month_sum": total([x for x in done if x["d"].year == today.year and x["d"].month == today.month]),
        "month_normal": normal(lambda d, y: d.year == y and d.month == today.month),
        "year_sum": total([x for x in done if x["d"] >= ys]),
        "year_normal_to_date": normal(lambda d, y: d.year == y and (d.month, d.day) < md),
        "last_7_days": total(done[-7:]),
        "last": {"date": last["d"].isoformat(), "value": round(last["rain"], 2)} if last else None,
        "years": len(years),
    }

    # Water the garden loses (reference evapotranspiration) over the last week.
    wk = done[-7:]
    out["evapotranspiration"] = {
        "last_7_days": total(wk, "et0") if any(x["et0"] is not None for x in wk) else None,
        "days": [{"date": x["d"].isoformat(), "value": x["et0"]} for x in wk],
    }
    return out


def main():
    try:
        now = datetime.now(ZoneInfo(TZ)) if ZoneInfo else datetime.now()
        days = parse(history())
        if not days:
            raise ValueError("no data")
        m = meta()
        result = {
            "state": days[-1]["d"].isoformat(),
            "coagmet_station": STATION,
            "network": NETWORK,
            "station_name": m.get("name") or STATION,
            "location": m.get("location"),
            "latitude": m.get("lat"),
            "longitude": m.get("lon"),
            "elevation": round(m["elevation"] * 0.3048) if m.get("elevation") is not None else None,
            "since": days[0]["d"].isoformat(),
            "days": len(days),
            "daily_units": DAILY_UNITS,
            "source": "CoAgMET, Colorado State University",
            "kind": "measured",
            **summary(days, now.date()),
        }
    except Exception as e:  # report instead of failing silently
        result = {"state": "error", "error": str(e)[:200]}
    print(json.dumps(result, separators=(",", ":")))


if __name__ == "__main__":
    main()
