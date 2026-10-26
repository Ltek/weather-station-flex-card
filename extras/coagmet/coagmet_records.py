#!/usr/bin/env python3
"""Area weather records from CoAgMET (Colorado State University) for Home Assistant.

Downloads a station's daily history (Northern Water or CoAgMET network), drops
impossible readings, and prints one small JSON object: all-time records,
records for today's date and this month, this season's first frost and frost
nights, and growing degree days. Run by the command_line sensor in
coagmet_records.yaml once a day; standard library only.

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
FIELDS = "tMax,tMin,precip,gustSpeed"
MAX_AGE_S = 20 * 3600  # re-download at most about once a day

# Readings outside these are instrument faults (e.g. a July low of -265 °F).
OK = {
    "high": (-40.0, 115.0),
    "low": (-45.0, 90.0),
    "rain": (0.0, 8.0),
    "gust": (0.0, 130.0),
}


def fetch(url, timeout=90):
    req = urllib.request.Request(url, headers={"User-Agent": "HomeAssistant-coagmet-records"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read().decode("utf-8", "replace")


def history():
    """The station's daily CSV, from the cache when it is fresh."""
    fresh = os.path.exists(CACHE) and time.time() - os.path.getmtime(CACHE) < MAX_AGE_S
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
        days.append({"d": d, "high": hi, "low": lo, "rain": num(r[4], "rain"), "gust": num(r[5], "gust")})
    return days


def best(days, key, pick):
    vals = [x for x in days if x[key] is not None]
    if not vals:
        return None
    x = pick(vals, key=lambda y: y[key])
    return {"value": round(x[key], 2), "date": x["d"].isoformat()}


def summary(days, today):
    wettest = lambda xs: best([x for x in xs if (x["rain"] or 0) > 0], "rain", max)
    out = {
        "warmest": best(days, "high", max),
        "coldest": best(days, "low", min),
        "gust": best(days, "gust", max),
        "wettest": wettest(days),
    }
    md = (today.month, today.day)
    same = [x for x in days if (x["d"].month, x["d"].day) == md and x["d"] < today]
    month = [x for x in days if x["d"].month == today.month]
    # Frost season from July 1, so a January frost counts with the fall before it.
    fs = date(today.year if today.month >= 7 else today.year - 1, 7, 1)
    season = [x for x in days if x["d"] >= fs]
    frosts = [x for x in season if x["low"] is not None and x["low"] <= 32]
    # Growing degree days, 86/50 method: highs capped at 86, lows raised to 50.
    ys = date(today.year, 1, 1)
    gdd = sum(
        max(0.0, (min(x["high"], 86) + min(max(x["low"], 50), 86)) / 2 - 50)
        for x in days
        if x["d"] >= ys and x["high"] is not None and x["low"] is not None
    )
    # Typical first fall frost: the median over complete past seasons.
    firsts = []
    for y in range(days[0]["d"].year, today.year + 1):
        s, e = date(y, 7, 1), date(y + 1, 6, 30)
        if e >= today or s < days[0]["d"]:
            continue
        f = [x for x in days if s <= x["d"] <= e and x["low"] is not None and x["low"] <= 32]
        if f:
            firsts.append((f[0]["d"] - s).days)
    firsts.sort()
    typical = (fs + timedelta(days=firsts[len(firsts) // 2])).strftime("%m-%d") if firsts else None
    out["today"] = {
        "date": today.strftime("%m-%d"),
        "years": len(same),
        "high": best(same, "high", max),
        "low": best(same, "low", min),
        "wettest": wettest(same),
    }
    out["month"] = {
        "month": today.month,
        "warmest": best(month, "high", max),
        "coldest": best(month, "low", min),
        "gust": best(month, "gust", max),
        "wettest": wettest(month),
    }
    out["frost"] = {
        "season_start": fs.isoformat(),
        "first": {"date": frosts[0]["d"].isoformat(), "value": round(frosts[0]["low"], 1)} if frosts else None,
        "nights": len(frosts),
        "typical_first": typical,
    }
    out["gdd"] = {"since": ys.isoformat(), "value": round(gdd), "base": 50}
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
            "elevation_ft": m.get("elevation"),
            "since": days[0]["d"].isoformat(),
            "days": len(days),
            "units": "us",
            "source": "CoAgMET, Colorado State University",
            **summary(days, now.date()),
        }
    except Exception as e:  # report instead of failing silently
        result = {"state": "error", "error": str(e)[:200]}
    print(json.dumps(result, separators=(",", ":")))


if __name__ == "__main__":
    main()
