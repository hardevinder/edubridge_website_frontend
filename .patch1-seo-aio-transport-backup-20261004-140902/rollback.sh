#!/usr/bin/env bash
set -euo pipefail
PROJECT="/home/gurman/edubridge-website"
BACKUP="/home/gurman/edubridge-website/.patch1-seo-aio-transport-backup-20261004-140902"
cp "$BACKUP/data/seoLandingPages.js" "$PROJECT/data/seoLandingPages.js"
cp "$BACKUP/components/SearchLandingPage.jsx" "$PROJECT/components/SearchLandingPage.jsx"
cp "$BACKUP/public/sitemap.xml" "$PROJECT/public/sitemap.xml"
for f in school-management-software.jsx school-management-system.jsx erp-software-for-schools.jsx school-erp-software-india.jsx school-college-transport-management-software.jsx; do
  if [[ -f "$BACKUP/pages/$f" ]]; then
    cp "$BACKUP/pages/$f" "$PROJECT/pages/$f"
  else
    rm -f "$PROJECT/pages/$f"
  fi
done
echo "Rollback complete."
