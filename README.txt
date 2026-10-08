EduBridge College ERP + LMS SEO Patch — 8 October 2026

This is a MERGE PATCH, not replacement files. It preserves previous Transport SEO updates.

1. Download ZIP into ~/Downloads and extract ZIP directly in ~/edubridge-website:
   cd ~/edubridge-website
   unzip -o ~/Downloads/EduBridge_College_ERP_LMS_SEO_Full_Patch.zip -d .

2. Apply changes:
   python3 apply_college_seo.py

3. Verify:
   npm run build
   git diff --stat
   git status

4. After successful build, review pages and commit:
   git add data/seoLandingPages.js components/SearchLandingPage.jsx public/sitemap.xml pages/college-erp-lms-software.jsx pages/group-of-colleges-management-software.jsx pages/college-lecture-attendance-software.jsx
   git commit -m "Expand college ERP LMS and multi campus SEO"
   git push

Existing /college-management-software URL is preserved; /college-erp is untouched. The script backs up original edited files into .college-seo-backup-* before changing them. Re-running updates safely. Do not publish unverified feature claims; check demonstration readiness first. Google rankings are not guaranteed.
