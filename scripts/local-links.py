"""Make a separate Hugo preview usable by double-clicking index.html."""
import html
import os
import re
import sys
from pathlib import Path
from urllib.parse import urlsplit, unquote

root = Path(sys.argv[1]).resolve()
base = sys.argv[2].rstrip('/') + '/'
base_path = urlsplit(base).path
pattern = re.compile(r'([\"\'])([^\"\'<>\n]+)\1')
for page in root.rglob('*.html'):
    def replace(match):
        url = html.unescape(match[2])
        refresh = "0; url=" if url.startswith("0; url=") else ""
        if refresh: url = url[len(refresh):]
        if url.startswith(base): rest = url[len(base):]
        elif url.startswith(base_path): rest = url[len(base_path):]
        else: return match[0]
        parsed = urlsplit(rest)
        target = root / unquote(parsed.path)
        if target.is_dir(): target = target/'index.html'
        if not target.exists(): return match[0]
        relative = os.path.relpath(target, page.parent).replace(os.sep, '/')
        if parsed.query: relative += '?' + parsed.query
        if parsed.fragment: relative += '#' + parsed.fragment
        return match[1] + html.escape(refresh + relative,quote=True) + match[1]
    page.write_text(pattern.sub(replace,page.read_text(encoding='utf-8')),encoding='utf-8')
