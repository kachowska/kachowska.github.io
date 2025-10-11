#!/usr/bin/env bash
set -euo pipefail

BASE_URL="https://kachowska.github.io"

urls=("$BASE_URL/")

extract_routes() {
  # Try ripgrep if available, otherwise fall back to grep.
  if command -v rg >/dev/null 2>&1; then
    rg -o "/articles/[A-Za-z0-9\-]+" -N assets/index-*.js 2>/dev/null | awk -F: '{print $NF}' | sort -u
  else
    # grep: -h suppress filename, -o only match, -E extended regex
    grep -h -oE "/articles/[A-Za-z0-9\-]+" assets/index-*.js 2>/dev/null | sort -u || true
  fi
}

routes=$(extract_routes || true)

for route in $routes; do
  # Ensure each route starts with /articles/
  case "$route" in
    /articles/*) urls+=("$BASE_URL$route");;
  esac
done

{
  echo '<?xml version="1.0" encoding="UTF-8"?>'
  echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  for url in "${urls[@]}"; do
    echo "  <url><loc>$url</loc></url>"
  done
  echo '</urlset>'
} > sitemap.xml
