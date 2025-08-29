#!/usr/bin/env bash
set -euo pipefail

BASE_URL="https://kachowska.github.io"

urls=("$BASE_URL/")

# Extract article routes from bundled assets
routes=$(rg -o "/articles/[a-zA-Z0-9\-]+" -N assets/index-*.js | cut -d: -f2 | sort -u)

for route in $routes; do
  urls+=("$BASE_URL$route")
done

{
  echo '<?xml version="1.0" encoding="UTF-8"?>'
  echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  for url in "${urls[@]}"; do
    echo "  <url><loc>$url</loc></url>"
  done
  echo '</urlset>'
} > sitemap.xml
