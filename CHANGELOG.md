# Changelog — CV Website Updates

## 2026-03-27 (Revision 9) — New profile photo, refined palette, CV recompilation

### Profile photo
- Replaced `assets/img/prof_pic.jpg` and `assets/img/prof_pic_color.png` with new photo (`profile_s.png` — burgundy jacket, golden yellow flower background).
- Updated `CV/src/cv_photo.png` and `assets/cv_backup/cv_photo.png` with matching photo.

### Color refinement
- `_sass/_variables.scss`: Refined `$yellow-color` from `#efcc00` (neon yellow) to `#E8B830` (warmer golden, matches photo flowers). Added `$golden-color: #DAA520`.

### CV recompilation
- Recompiled `CV/src/compile_en.tex` with XeLaTeX — new photo and burgundy colors rendered.
- Copied compiled PDF to `assets/pdf/Zhiyu_Wang_CV.pdf` (download section) and `assets/cv_backup/Zhiyu_Wang_CV_backup_20260327.pdf`.

---

## 2026-03-27 (Revision 8) — Color theme, Sapient fix, CV recompilation

### Color theme — Burgundy + Golden Yellow
- **_sass/_variables.scss:** Added `$burgundy-color: #9B1B30` and `$burgundy-color-dark: #7A1628`.
- **_sass/_themes.scss:** Light mode theme color changed from `$orange-color-dark` to `$burgundy-color`; dark mode stays `$yellow-color`.
- **CV/src/main.tex:** `Icon` color changed from gold RGB(243,182,0) to burgundy RGB(155,27,48); `TextHighlight` changed from RGB(162,122,0) to RGB(122,22,40).

### Sapient Intelligence description — Fixed across all files
- Changed from "researching graph-based HRM for reasoning over relational databases" to "applying HRM to healthcare scenarios".
- Updated in: `_pages/about.md`, `_pages/about_detail.md`, `_data/cv.yml`, `assets/json/resume.json`, `CV/src/main.tex`, `assets/cv_backup/Zhiyu_Wang_CV_source.tex`.
- Also fixed typo "Hierarchcal" → "Hierarchical" in LaTeX source.

### CV recompilation
- Created `CV/src/compile_en.tex` — English-only compilation wrapper (no Chinese LaTeX deps needed).
- Compiled to `assets/pdf/Zhiyu_Wang_CV.pdf` — downloadable from website home page.

### Profile photo
- Pending: new photo (burgundy jacket, yellow flowers) to replace current formal headshot.

---

## 2026-03-20 (Revision 7) — Fix preview image overflow for external URLs

### _layouts/bib.liquid — Add size constraints to external preview images
- External URL preview images (line 30) had no size constraints — just a bare `<img>` tag.
- Local file previews were fine because they go through `figure.liquid` with `sizes="200px"`.
- Fix: added inline style `width: 100%; max-width: 200px; height: auto;` to the external URL `<img>` tag.

### _sass/_base.scss — Add CSS for `.preview` class
- The `.preview` class was empty (no styles at all).
- Added `max-width: 100%; height: auto; display: block;` as a safety net so preview images always stay within their column.

---

## 2026-03-20 (Revision 6) — Add preview images for all papers

### papers.bib — Preview images added
- **PLASMA:** Added `preview` field with visual abstract from arXiv (external URL via imgur, sourced from arxiv.org/html/2510.11752v1).
- **TCPNet:** Added `preview` field with visual abstract from arXiv (external URL via imgur, sourced from arxiv.org/html/2509.03885v1).
- **MoRE-GNN:** Added `preview` field with visual abstract from arXiv (external URL via imgur, sourced from arxiv.org/html/2510.06880v1).
- **GraphAU-Pain:** Already had local `preview={graphau-pain.png}` — no change.

### Notes
- al-folio's `bib.liquid` supports external URLs for preview images (if the value contains `://`, it uses the URL directly as `<img src>`; otherwise it looks in `assets/img/publication_preview/`).
- Images were fetched from arXiv HTML paper pages, resized to 600px width with white background, and uploaded as PNG to imgur for reliable external hosting.
- Final URLs: PLASMA → `https://i.imgur.com/mOWLREe.png`, TCPNet → `https://i.imgur.com/stHO4zU.png`, MoRE-GNN → `https://i.imgur.com/4Daqd2D.png`.

---

## 2026-03-20 (Revision 5) — Fix author lists from arXiv, update selected papers

### papers.bib — Author lists verified against arXiv
- **PLASMA:** Added 4 missing authors — Bingxin Zhou, Jing Wang, Yang Tan, Weishu Zhao. Full list: Zhiyu Wang, Bingxin Zhou, Jing Wang, Yang Tan, Weishu Zhao, Pietro Liò, Liang Hong. Also corrected title to "Fast and Interpretable Protein Substructure Alignment via Optimal Transport".
- **TCPNet:** Added 4 missing authors — Arian R. Jamasb, Mustafa Hajij, Alex Morehead, Luke Braithwaite. Full list: Zhiyu Wang, Arian R. Jamasb, Mustafa Hajij, Alex Morehead, Luke Braithwaite, Pietro Liò. Also corrected title to "Topotein: Topological Deep Learning for Protein Representation Learning".
- **MoRE-GNN (multi-omics):** Added 2 missing authors — Sonia Koszut, Francesco Ceccarelli. Full list: Zhiyu Wang, Sonia Koszut, Pietro Liò, Francesco Ceccarelli. Also corrected title to "MoRE-GNN: Multi-omics Data Integration with a Heterogeneous Graph Autoencoder".
- **GraphAU-Pain:** Author list was already correct (Zhiyu Wang, Yang Liu, Hatice Gunes). No change.

### papers.bib — Selected papers updated
- Only the 2 protein works are now `selected={true}`: PLASMA (ICLR 2026) and TCPNet.
- MoRE-GNN and GraphAU-Pain changed to `selected={false}` — they still appear on the Publications page but not on the homepage.

### coauthors.yml — New co-authors added (with verified Google Scholar URLs)
- Bingxin Zhou, Arian R. Jamasb, Mustafa Hajij, Alex Morehead.
- Removed co-authors where verified URLs could not be found (Jing Wang, Yang Tan, Weishu Zhao, Luke Braithwaite, Sonia Koszut, Francesco Ceccarelli) to avoid broken links.

---

## 2026-03-20 (Revision 4) — PLASMA accepted at ICLR 2026

### Changes
- **`_bibliography/papers.bib`:** Updated PLASMA entry — changed from `@article` to `@inproceedings`, `abbr` from `arXiv` to `ICLR`, `year` to `2026`, added `booktitle` for ICLR.
- **`_data/venues.yml`:** Added ICLR venue (url: https://iclr.cc/, color: #8e44ad).
- **`_news/plasma-iclr2026.md` [NEW]:** News item for PLASMA acceptance at ICLR 2026 (dated Jan 2026).
- **`_data/cv.yml`:** Updated PLASMA research entry to note ICLR 2026 acceptance.
- **`assets/json/resume.json`:** Updated SJTU highlights to mention ICLR 2026 acceptance.
- **`_pages/about_detail.md`:** Updated PLASMA mention to include ICLR 2026 acceptance.

---

## 2026-03-18 (Revision 3) — Page restructure, news date format, agent guides

### Structural Changes

#### Removed CV page from navigation
- `_pages/cv.md`: Set `nav: false` — page still exists at `/cv/` but is no longer in the navbar.

#### Split home page and about page
- **`_pages/about.md` (Home, `/`):** Trimmed to a clean 3-paragraph intro with profile photo, social links, news feed, and selected papers. No longer contains the full research/education/industry narrative.
- **`_pages/about_detail.md` (About, `/about/`) [NEW]:** New detailed page containing the full narrative — current position, research projects, education, industry experience, technical skills. Linked from the home page.

#### News date display
- **`_includes/news.liquid`:** Changed date format from `'%b %d, %Y'` (e.g., "Jun 19, 2025") to `'%b %Y'` (e.g., "Jun 2025"). Full dates remain in news item YAML frontmatter for correct chronological sorting.

### New Files

- **`AGENT_GUIDE.md`:** High-level guide for AI agents. Documents the project goal (keep LaTeX CV and website in sync), update workflow, page architecture, conventions, and an "Evolving Project Notes" section to track new capabilities as they are added.
- **`_pages/about_detail.md`:** Detailed About page (see above).

### Updated Files

- **`AGENT.md`:** Rewritten to be a concise technical reference. Now points to `AGENT_GUIDE.md` as the primary reading. Updated directory structure and page architecture to reflect the new home/about split.
- **`CHANGELOG.md`:** This entry.

---

## 2026-03-18 (Revision 2) — Full update from LaTeX source

Sourced all content directly from `CV/src/main.tex` (the authoritative LaTeX source), replacing the earlier PDF-only extraction.

### Backups Created

- `assets/cv_backup/Zhiyu_Wang_CV_backup_20260318.pdf` — existing website CV PDF
- `assets/cv_backup/Zhiyu_Wang_CV_source.tex` — LaTeX source file
- `assets/cv_backup/main.bib` — LaTeX bibliography file
- `assets/cv_backup/cv_photo.png` — CV photo from LaTeX project

### New Files

- **`AGENT.md`** — Comprehensive codebase guide for AI agents. Documents directory structure, key files, how to update from LaTeX, current state, build instructions, and conventions.

### Files Changed

#### 1. `_data/cv.yml`
**Before (Revision 1):** Updated from PDF extraction, had some stale data.
**After (Revision 2, from LaTeX):**
- **NEW: Sapient Intelligence** (Sep 2025–Present) — AI Research & Application Engineer, graph-based Hierarchical Reasoning Models, collaboration with Peking Union Medical College Hospital.
- **NEW: PLASMA project at SJTU** (Apr–Sep 2025) — Protein Substructure Alignment via Optimal Transport with Prof. Pietro Lio & Prof. Liang Hong. Paper link: arxiv.org/abs/2510.11752.
- **Updated: Hierarchical Protein Representation Learning** — Added TCPNet paper link (arxiv.org/abs/2509.03885), invited talk link (talks.cam.ac.uk/talk/index/234460). Changed description to match LaTeX wording ("residue-level and secondary structure-level features without losing any geometric information").
- **Updated: Multi-Omics** — Added paper link (arxiv.org/abs/2510.06880). Updated training time description ("less than an hour on a laptop GPU" instead of "a few minutes").
- **Updated: Readmission Prediction** — Title changed from "RPM Surgery Complication Prediction Model" to "Readmission Prediction with Remote Patient Monitoring Data". Updated descriptions to match LaTeX ("collaborated with clinicians from UCL Hospital", "extreme data scarcity (55 patients)").
- **Updated job titles:** Xunfei changed from "Machine Learning Engineer" to "Assistant AI Research Engineer". Luojin changed from "Machine Learning Engineer" to "Intern Machine Learning Engineer".
- **Updated descriptions:** Xunfei now uses "knowledge distillation pipeline" framing. Luojin consolidated into single RAG pipeline description. NHS description simplified.

#### 2. `assets/json/resume.json`
- **Location:** Changed from Shanghai to Beijing (current position is Sapient Intelligence, Beijing).
- **NEW work entry:** Sapient Intelligence (AI Research & Application Engineer, Sep 2025–Present).
- **NEW work entry:** SJTU (Research Assistant, Apr–Sep 2025) with PLASMA highlights.
- **Updated Cambridge entry:** Added TCPNet paper + invited talk links, multi-omics paper link.
- **Updated Xunfei:** Title → "Assistant AI Research Engineer", description → knowledge distillation framing.
- **Updated Luojin:** Title → "Intern Machine Learning Engineer", description → RAG pipeline framing.

#### 3. `_pages/about.md`
- **Subtitle:** Changed from "Research Assistant @ SJTU" to "AI Research & Application Engineer @ Sapient Intelligence".
- **Current section:** Rewritten — now mentions Sapient Intelligence as current role, SJTU/PLASMA as previous.
- **Research section:** Added PLASMA paper link, TCPNet paper + invited talk links, multi-omics paper link. Updated wording to match LaTeX ("residue-level and secondary structure-level features").

#### 4. `_bibliography/papers.bib`
**Before:** 1 entry (GraphAU-Pain).
**After:** 4 entries:
- **NEW: PLASMA** (arXiv:2510.11752) — Protein local alignment via optimal transport.
- **NEW: TCPNet** (arXiv:2509.03885) — Topological neural network for hierarchical protein representation.
- **NEW: Multi-omics GNN** (arXiv:2510.06880) — Heterogeneous graph network for single-cell multi-omics.
- GraphAU-Pain (unchanged).

#### 5. `_data/coauthors.yml`
- **NEW: Prof. Liang Hong** (SJTU) — PLASMA co-supervisor.

#### 6. `_data/venues.yml`
Previously updated to replace Einstein template venues with IJCAI MiGA (unchanged in this revision).

### Source of Truth

All content sourced from `CV/src/main.tex`. Only uncommented (active) LaTeX content was used; commented-out lines (starting with `%`) were excluded. English content was extracted from `\lang{English}{Chinese}` macros.

---

## 2026-03-18 (Revision 1) — Initial update from PDF

Initial migration from Einstein template data to Zhiyu Wang's CV. Content was extracted from the compiled PDF (`Zhiyu_Wang_CV.pdf`) since the LaTeX source was not yet available. This revision was superseded by Revision 2 above.
