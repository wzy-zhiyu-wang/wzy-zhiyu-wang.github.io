# AGENT_GUIDE.md — Guide for AI Agents Working on This Project

> **Read this file first before making any changes.**
> This is a living document. Update it whenever new skills, workflows, or conventions are added.

---

## Project Goal

This project maintains **two tightly coupled artifacts** for Zhiyu Wang:

1. **LaTeX CV** (`../CV/src/main.tex`) — the single source of truth for all CV content.
2. **Jekyll website** (this repo) — the public-facing academic website at https://wzy-zhiyu-wang.github.io/.

**The core job of an agent is to keep them in sync.** When the LaTeX CV is updated, the website must be updated to match. The LaTeX always wins — it is the authoritative source.

This is an **evolving project**. New skills, tools, and automation may be added over time. Whenever a new capability is integrated (e.g., a new MCP connector, a new skill, a scheduled task), this guide should be updated to reflect it.

---

## Quick Reference: What to Edit

| When this changes in LaTeX... | Update these website files |
|-------------------------------|--------------------------|
| New position / job | `_data/cv.yml`, `assets/json/resume.json`, `_pages/about.md` (home), `_pages/about_detail.md` |
| New research project | `_data/cv.yml`, `assets/json/resume.json`, `_pages/about_detail.md` |
| New publication / paper | `_bibliography/papers.bib`, possibly `_pages/about_detail.md` |
| New co-author / supervisor | `_data/coauthors.yml` |
| New award or news | `_data/cv.yml` (honors section), `_news/` (new .md file) |
| Updated descriptions or bullet points | `_data/cv.yml`, `assets/json/resume.json` |
| New PDF compiled | `assets/pdf/Zhiyu_Wang_CV.pdf` (replace), `assets/cv_backup/` (backup old) |

---

## Project Structure

```
cv_website/
├── CV/                          # LaTeX CV repo (SOURCE OF TRUTH)
│   └── src/
│       ├── main.tex             # THE authoritative CV content
│       ├── main.bib             # Bibliography (currently empty — papers in .tex)
│       └── cv_photo.png         # CV photo
│
└── wzy-zhiyu-wang.github.io/    # Jekyll website repo
    ├── _pages/
    │   ├── about.md             # HOME page (/) — clean, brief intro
    │   ├── about_detail.md      # ABOUT page (/about/) — detailed background
    │   ├── publications.md      # Publications page (auto from papers.bib)
    │   ├── news.md              # News page
    │   └── cv.md                # CV page (HIDDEN from nav, kept for direct URL access)
    ├── _data/
    │   ├── cv.yml               # Structured CV data for /cv page
    │   ├── coauthors.yml        # Co-author name → URL mapping
    │   ├── socials.yml          # Social links
    │   └── venues.yml           # Publication venue metadata
    ├── _bibliography/
    │   └── papers.bib           # BibTeX entries (drives Publications page)
    ├── _news/                   # News items (one .md per announcement)
    ├── _includes/
    │   └── news.liquid          # News display template (shows month+year only)
    ├── assets/
    │   ├── pdf/                 # Downloadable CV PDF
    │   ├── json/resume.json     # JSON Resume data
    │   ├── cv_backup/           # Backups (PDF + LaTeX source)
    │   └── img/                 # Images
    ├── _config.yml              # Site configuration
    ├── run.sh                   # Local dev server launcher
    ├── AGENT_GUIDE.md           # THIS FILE — read first
    ├── AGENT.md                 # Technical codebase reference
    └── CHANGELOG.md             # Change log
```

---

## How to Read the LaTeX Source

The LaTeX file (`../CV/src/main.tex`) is bilingual. Key patterns:

```latex
% This is a comment — SKIP these lines (they are disabled content)

\lang{English text}{Chinese text}     % Use the FIRST argument (English)
\cvsubheading{Title}{Institution}{Location}{Role}{Supervisor}{Date}
\cvitem{English bullet}{Chinese bullet}
\link{url}{display text}              % Hyperlink
\pill{tag text}                       % Styled badge/tag
```

**Important:** Lines starting with `%` are commented out. Do NOT include them on the website. Some content is intentionally hidden in the LaTeX (e.g., old bullet points replaced with newer ones).

---

## Step-by-Step: Updating the Website from LaTeX

1. **Read `../CV/src/main.tex`** — identify what changed (new positions, papers, descriptions, etc.)
2. **Backup** the current CV PDF and LaTeX source to `assets/cv_backup/`
3. **Update website files** (see Quick Reference table above)
4. **Update `CHANGELOG.md`** with a dated entry describing what changed
5. **Update `AGENT.md`** if the "Current State" section is outdated
6. **Update this file (`AGENT_GUIDE.md`)** if new workflows or skills were added

---

## Page Architecture

### Home page (`_pages/about.md`, permalink: `/`)
- Uses `layout: about` — renders profile photo, social links, news, selected papers
- Content should be **brief** — 2-3 short paragraphs max
- Links to the detailed About page for more info
- News section shows month+year only (not exact date), sorted by full date in frontmatter

### About page (`_pages/about_detail.md`, permalink: `/about/`)
- Uses `layout: page` — standard content page
- Contains **all details**: current role, research, education, industry experience, skills
- This is where the full narrative goes — everything from the LaTeX CV in prose form

### Publications page (`_pages/publications.md`, permalink: `/publications/`)
- Auto-generated from `_bibliography/papers.bib` by jekyll-scholar
- `selected={true}` entries also appear on the home page
- `abbr={VENUE}` must match a key in `_data/venues.yml` for badge rendering

### CV page (`_pages/cv.md`, permalink: `/cv/`)
- **Hidden from navigation** (`nav: false`) but still accessible via direct URL
- Renders `_data/cv.yml` sections + `assets/json/resume.json`
- Kept as a fallback; the About page is the primary detail page now

---

## News Items

News items live in `_news/` as individual `.md` files.

```yaml
---
layout: post
date: 2025-06-19 15:59:00-0400    # Full date for sorting
inline: true
related_posts: false
---
The news content goes here in Markdown.
```

**Display format:** The template (`_includes/news.liquid`) shows only **month and year** (e.g., "Jun 2025"). The full date in the frontmatter is still needed for correct chronological sorting.

---

## Publications (BibTeX)

Each entry in `_bibliography/papers.bib` should include:

```bibtex
@article{key,
    abbr={VENUE},           % Must match _data/venues.yml
    selected={true},        % true = show on homepage
    title={...},
    author={...},
    year={2025},
    arxiv={XXXX.XXXXX},     % arXiv ID for link
    bibtex_show={true},     % Show BibTeX toggle
    preview={image.png},    % Optional thumbnail in assets/img/publication_preview/
    abstract={...}
}
```

When adding a new paper, also add its venue to `_data/venues.yml` if not already present.

---

## Conventions & Rules

1. **LaTeX is truth.** Never invent content — always source from `main.tex`.
2. **Skip comments.** Lines starting with `%` in the LaTeX are disabled.
3. **Use English.** Extract the first argument from `\lang{EN}{CN}`.
4. **Backup before overwriting.** Always backup PDFs and source files to `assets/cv_backup/`.
5. **Log everything.** Every update gets a dated entry in `CHANGELOG.md`.
6. **News dates:** Keep full dates in frontmatter YAML for sorting. Display shows month+year only.
7. **Home page stays clean.** Brief intro only — details go on the About page.
8. **Update this guide.** If you add a new workflow, skill, or convention, add it here.

---

## Local Development

```bash
# Docker (recommended)
./run.sh

# Native Ruby
./run.sh install    # first time
./run.sh native     # subsequent runs
```

The site serves at `http://localhost:8080` (Docker) or `http://localhost:4000` (native).

---

## Evolving Project Notes

This section tracks new capabilities as they are added. **Agents: update this section when integrating new tools.**

### Current Capabilities (as of 2026-03-18)
- Manual sync: agent reads LaTeX → updates website files
- Local dev: Docker or native Jekyll

### Planned / Potential Additions
- **Scheduled task:** Auto-detect LaTeX changes and trigger website updates
- **Git automation:** Auto-commit and push website changes after sync
- **PDF compilation:** Compile LaTeX to PDF from within the agent workflow
- **Zotero integration:** Sync publications from Zotero library to papers.bib
- **Image generation:** Auto-generate publication preview thumbnails

> When any of the above (or other new skills) are implemented, document them here with usage instructions.
