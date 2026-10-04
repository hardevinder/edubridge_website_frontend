#!/usr/bin/env bash
set -euo pipefail
PROJECT="/home/gurman/edubridge-website"
BACKUP="/home/gurman/edubridge-website/.patch4-ai-authority-backup-20261004-141817"
cp "/home/gurman/edubridge-website/.patch4-ai-authority-backup-20261004-141817/data/seoLandingPages.js" "/home/gurman/edubridge-website/data/seoLandingPages.js"
cp "/home/gurman/edubridge-website/.patch4-ai-authority-backup-20261004-141817/public/sitemap.xml" "/home/gurman/edubridge-website/public/sitemap.xml"
for f in ai-lesson-plan-generator-school.jsx ai-syllabus-breakup-school.jsx ai-worksheet-generator-school.jsx ai-question-paper-generator-school.jsx ai-student-performance-analysis-school.jsx ai-teacher-assistant-school.jsx; do
  if [[ -f "/home/gurman/edubridge-website/.patch4-ai-authority-backup-20261004-141817/pages/ai-teacher-assistant-school.jsx" ]]; then
    cp "/home/gurman/edubridge-website/.patch4-ai-authority-backup-20261004-141817/pages/ai-teacher-assistant-school.jsx" "/home/gurman/edubridge-website/pages/ai-teacher-assistant-school.jsx"
  else
    rm -f "/home/gurman/edubridge-website/pages/ai-teacher-assistant-school.jsx"
  fi
done
echo "Rollback complete."
