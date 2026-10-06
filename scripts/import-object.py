#!/usr/bin/env python3
"""Lift a carousel object from yk-site/objects/<name>/index.html into src/components/objects/<name>.astro, verbatim."""
import re, sys, pathlib

SRC = pathlib.Path("/Users/Kath/Workspace/yk-site/objects")
OUT = pathlib.Path(__file__).resolve().parent.parent / "src/components/objects"

for name in sys.argv[1:]:
    html = (SRC / name / "index.html").read_text()
    css = html.split("/* ===== OBJECT STYLES ===== */", 1)[1].split("</style>", 1)[0].strip()
    m = re.search(r'<div class="stage">\s*(.*?)\s*</div>\s*<figcaption', html, re.S)
    if not m:
        sys.exit(f"{name}: could not find the stage markup")
    markup = re.sub(r"<!-- ===== OBJECT MARKUP ===== -->\s*", "", m.group(1)).strip()
    js = html.split("/* ===== OBJECT SCRIPT ===== */", 1)[1].rsplit("</script>", 1)[0].strip()
    assert f'class="obj-{name}' in markup, f"{name}: root .obj-{name} missing"
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / f"{name}.astro").write_text(
        f"---\n// Imported from yk-site/objects/{name} by scripts/import-object.py; edit there and re-import.\n---\n"
        f"{markup}\n\n<style is:inline>\n{css}\n</style>\n\n<script is:inline>\n{js}\n</script>\n"
    )
    print(f"{name}: {len(css)} css, {len(markup)} markup, {len(js)} js")
