#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")/.."
HUGO_BIN='.runtime/hugo-package/Payload/hugo'
if [[ ! -x "$HUGO_BIN" ]]; then HUGO_BIN=hugo; fi
PYTHON_BIN=python3
if ! "$PYTHON_BIN" -c 'import sys;sys.exit(sys.version_info < (3,9))' 2>/dev/null; then
  PYTHON_BIN="$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3"
fi
"$HUGO_BIN" --destination .preview --cleanDestinationDir
BASE_URL="$("$HUGO_BIN" config | sed -n 's/^baseurl = '\''\(.*\)'\''$/\1/p')"
if [[ -z "$BASE_URL" ]]; then echo '无法读取 baseURL'; exit 1; fi
"$PYTHON_BIN" scripts/local-links.py .preview "$BASE_URL"
