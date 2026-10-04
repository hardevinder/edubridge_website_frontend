#!/usr/bin/env bash
set -euo pipefail
PROJECT="/home/gurman/edubridge-website"
BACKUP="/home/gurman/edubridge-website/.patch2-growth-pages-backup-20261004-140905"
cp "$BACKUP/data/seoLandingPages.js" "$PROJECT/data/seoLandingPages.js"
cp "$BACKUP/public/sitemap.xml" "$PROJECT/public/sitemap.xml"
for f in college-management-software.jsx ai-school-management-software.jsx school-fee-management-software.jsx school-attendance-management-software.jsx school-report-card-software.jsx; do
  if [[ -f "$BACKUP/pages/$f" ]]; then
    cp "$BACKUP/pages/$f" "$PROJECT/pages/$f"
  else
    rm -f "$PROJECT/pages/$f"
  fi
done
echo "Rollback complete."
