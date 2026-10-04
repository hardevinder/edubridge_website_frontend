#!/usr/bin/env bash
set -euo pipefail
PROJECT="/home/gurman/edubridge-website"
BACKUP="/home/gurman/edubridge-website/.patch3-authority-pages-backup-20261004-141349"
cp "$BACKUP/data/seoLandingPages.js" "$PROJECT/data/seoLandingPages.js"
cp "$BACKUP/public/sitemap.xml" "$PROJECT/public/sitemap.xml"
for f in school-admission-management-software.jsx school-timetable-software.jsx parent-app-for-schools.jsx school-communication-software.jsx student-information-system-school.jsx how-to-choose-school-erp.jsx; do
  if [[ -f "$BACKUP/pages/$f" ]]; then
    cp "$BACKUP/pages/$f" "$PROJECT/pages/$f"
  else
    rm -f "$PROJECT/pages/$f"
  fi
done
echo "Rollback complete."
