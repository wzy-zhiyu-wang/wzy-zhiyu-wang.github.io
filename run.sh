#!/bin/bash
# ============================================================
# run.sh — Launch the al-folio CV website locally
# Usage:
#   ./run.sh            → Docker (recommended, no Ruby needed)
#   ./run.sh native     → Native Ruby/Jekyll (requires Ruby 3+)
#   ./run.sh install    → Install Ruby deps then serve natively
# ============================================================

set -e
cd "$(dirname "$0")"

MODE="${1:-docker}"

case "$MODE" in

# ----------------------------------------------------------
# Option 1: Docker (recommended — zero setup)
# ----------------------------------------------------------
docker)
    echo "Starting with Docker on http://localhost:8080 ..."
    echo "Press Ctrl+C to stop."
    docker compose up
    ;;

# ----------------------------------------------------------
# Option 2: Native serve (assumes bundle install already done)
# ----------------------------------------------------------
native)
    echo "Starting natively on http://localhost:4000 ..."
    echo "Press Ctrl+C to stop."
    bundle exec jekyll serve --livereload --open-url
    ;;

# ----------------------------------------------------------
# Option 3: Install deps then serve natively
# ----------------------------------------------------------
install)
    echo "Installing dependencies..."
    bundle install
    echo ""
    echo "Starting natively on http://localhost:4000 ..."
    echo "Press Ctrl+C to stop."
    bundle exec jekyll serve --livereload --open-url
    ;;

*)
    echo "Usage: ./run.sh [docker|native|install]"
    exit 1
    ;;
esac
