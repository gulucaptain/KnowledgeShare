#!/bin/bash
set -e
cd "$(dirname "$0")"
bash scripts/build-local.sh
open index.html
