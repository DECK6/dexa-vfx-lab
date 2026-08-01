#!/usr/bin/env bash
# Copy build output into the dexa.art repo (adxdeck) — commit/push is done manually after user approval.
set -euo pipefail
cd "$(dirname "$0")/.."
DEST="../adxdeck-dexa-daily-main/vfx"
[ -d dist ] || { echo "dist/ not found — run 'bun run build' first"; exit 1; }
mkdir -p "$DEST"
rsync -a --delete dist/ "$DEST/"
echo "deployed dist/ → $DEST (git commit/push는 사용자 승인 후 수동)"
