#!/usr/bin/env bash
set -euo pipefail
PROJECT="/home/gurman/edubridge-website"
BACKUP="/home/gurman/edubridge-website/.patch5-exam-reportcard-backup-20261004-142525"
cp "$BACKUP/data/seoLandingPages.js" "$PROJECT/data/seoLandingPages.js"
cp "$BACKUP/public/sitemap.xml" "$PROJECT/public/sitemap.xml"
for f in custom-report-card-designer-school.jsx school-result-report-card-software.jsx school-exam-marks-entry-software.jsx school-exam-scheduling-software.jsx exam-invigilation-management-software.jsx school-answer-script-management-software.jsx; do
  if [[ -f "$BACKUP/pages/$f" ]]; then cp "$BACKUP/pages/$f" "$PROJECT/pages/$f"; else rm -f "$PROJECT/pages/$f"; fi
done
echo "Rollback complete."
