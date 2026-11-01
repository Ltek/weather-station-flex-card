"""Rebuild the README's screenshot gallery from screenshots/ (run by the
update-screenshots GitHub workflow when screenshots change; also runs locally).

Images are shown two per row in file-name order, each linked to the full-size
file, with a caption made from the name: "04-compact-tiles.png" -> "Compact tiles".
"""
from pathlib import Path
import re

README = Path("README.md")
SCREENSHOTS = Path("screenshots")
START = "<!-- SCREENSHOTS:START -->"
END = "<!-- SCREENSHOTS:END -->"
EXTENSIONS = {".png", ".jpg", ".jpeg", ".gif", ".webp"}
COLUMNS = 2


def caption(stem: str) -> str:
    text = re.sub(r"^\d+[-_ ]*", "", stem).replace("_", " ").replace("-", " ").strip()
    return text[:1].upper() + text[1:] if text else stem


def gallery() -> str:
    images = sorted(p for p in SCREENSHOTS.iterdir() if p.is_file() and p.suffix.lower() in EXTENSIONS)
    rows = []
    for i in range(0, len(images), COLUMNS):
        cells = []
        for image in images[i:i + COLUMNS]:
            name = caption(image.stem)
            cells.append(
                f'    <td align="center" valign="top" width="{100 // COLUMNS}%">\n'
                f'      <a href="screenshots/{image.name}"><img src="screenshots/{image.name}" width="100%" alt="{name}"></a><br>\n'
                f"      <sub>{name}</sub>\n"
                "    </td>"
            )
        while len(cells) < COLUMNS:
            cells.append("    <td></td>")
        rows.append("  <tr>\n" + "\n".join(cells) + "\n  </tr>")
    return f"{START}\n<table>\n" + "\n".join(rows) + f"\n</table>\n{END}"


def main() -> None:
    if not README.exists():
        raise SystemExit("README.md not found")
    if not SCREENSHOTS.exists():
        raise SystemExit("screenshots/ directory not found")
    content = README.read_text(encoding="utf-8")
    section = gallery()
    pattern = re.compile(re.escape(START) + r".*?" + re.escape(END), re.DOTALL)
    if pattern.search(content):
        content = pattern.sub(lambda _m: section, content)
    else:
        content = content.rstrip("\n") + "\n\n" + section + "\n"
    README.write_text(content, encoding="utf-8")


if __name__ == "__main__":
    main()
