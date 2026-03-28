# AGENT.md — Technical Codebase Reference

> **Start with [AGENT_GUIDE.md](AGENT_GUIDE.md)** for the project overview, goals, and update workflow.
> This file is the technical reference for the codebase structure and conventions.

## Overview

This is Zhiyu Wang's personal academic website built with [al-folio](https://github.com/alshedivat/al-folio), a Jekyll theme for academics. Deployed at **https://wzy-zhiyu-wang.github.io/**.

## Source of Truth

The **LaTeX CV** at `../CV/src/main.tex` is the authoritative source. See [AGENT_GUIDE.md](AGENT_GUIDE.md) for how to read it.

## Directory Structure

```
wzy-zhiyu-wang.github.io/
├── _config.yml              # Site-wide configuration
├── _pages/
│   ├── about.md             # HOME page (/) — brief intro, profile, news, selected papers
│   ├── about_detail.md      # ABOUT page (/about/) — full details, research, education, skills
│   ├── cv.md                # CV page (/cv/) — HIDDEN from nav, kept for direct URL access
│   ├── publications.md      # Publications (auto from papers.bib)
│   ├── news.md              # News feed
│   └── 404.md               # 404 page
├── _data/
│   ├── cv.yml               # Structured CV sections
│   ├── coauthors.yml        # Co-author name → URL mapping
│   ├── socials.yml          # Social links (email, GitHub, LinkedIn, ORCID, Scholar)
│   └── venues.yml           # Publication venue metadata
├── _bibliography/
│   └── papers.bib           # BibTeX entries
├── _news/                   # News items (one .md per announcement)
├── _includes/
│   └── news.liquid          # News template (displays month+year only)
├── _layouts/                # Liquid templates
├── _sass/                   # SCSS stylesheets
├── assets/
│   ├── pdf/                 # Downloadable CV PDF
│   ├── json/resume.json     # JSON Resume data
│   ├── cv_backup/           # Backups (PDF + LaTeX source + photo)
│   ├── img/                 # Images (profile pic, publication previews)
│   ├── css/                 # Compiled CSS
│   └── js/                  # JavaScript
├── run.sh                   # Local dev launcher (docker/native/install)
├── AGENT_GUIDE.md           # Project goals, workflow, evolving notes — READ FIRST
├── AGENT.md                 # This file — technical reference
└── CHANGELOG.md             # Change log
```

## Key Files to Edit

| File | What it controls | Notes |
|------|-----------------|-------|
| `_data/cv.yml` | CV page sections | Main structured CV data |
| `assets/json/resume.json` | JSON Resume data | Work history, education, skills, awards |
| `_pages/about.md` | **Home page** (`/`) | Brief intro — keep it clean |
| `_pages/about_detail.md` | **About page** (`/about/`) | Full details — research, education, industry, skills |
| `_bibliography/papers.bib` | Publications list | `selected={true}` → homepage |
| `_data/coauthors.yml` | Co-author auto-linking | Maps last names to URLs |
| `_data/venues.yml` | Venue badges/colors | Maps abbreviations to URLs |
| `_news/*.md` | News announcements | Full date in YAML for sorting; displays as month+year |
| `assets/pdf/Zhiyu_Wang_CV.pdf` | Downloadable CV PDF | Replace when new PDF compiled |

## Page Architecture

- **Home** (`/`) — `about.md` with `layout: about`. Brief intro, profile photo, social links, news feed, selected papers. Keep this clean.
- **About** (`/about/`) — `about_detail.md` with `layout: page`. Full narrative: current role, research, education, industry, skills.
- **Publications** (`/publications/`) — Auto-generated from `papers.bib`.
- **News** (`/news/`) — Lists all news items. Date displays as month+year only.
- **CV** (`/cv/`) — Hidden from nav (`nav: false`). Still accessible via direct URL.

## Current State (as of 2026-03-18)

**Person:** Zhiyu Wang (王智语)
**Current role:** AI Research & Application Engineer at Sapient Intelligence (Sep 2025–Present)
**Previous:** Research Assistant at SJTU (Apr–Sep 2025), Research Assistant at Cambridge (Oct 2024–Sep 2025)
**Education:** M.Phil. Cambridge (Distinction, 8/60), B.Sc. UCL (First Class Honors)

**Publications (4):**
1. PLASMA — arXiv:2510.11752
2. TCPNet — arXiv:2509.03885
3. Multi-omics GNN — arXiv:2510.06880
4. GraphAU-Pain — arXiv:2505.19802 (IJCAI25 MiGA)

**Key collaborators:** Pietro Lio, Liang Hong, Hatice Gunes, Ivana Drobnjak, Yang Liu

## Conventions

- **Home page stays clean.** 2-3 paragraphs max. Details go on About page.
- **News dates:** Full date in YAML frontmatter (for sorting). Display shows month+year only.
- **CV page is hidden** from nav but still accessible at `/cv/`.
- Publication preview images: `assets/img/publication_preview/`, referenced via `preview={file.png}` in .bib.
- `selected={true}` in .bib → appears on homepage.
- `abbr={VENUE}` in .bib must match key in `_data/venues.yml`.
- Social links are in `_data/socials.yml`, not `_config.yml`.

## Local Development

```bash
./run.sh            # Docker (localhost:8080)
./run.sh install    # Native first-time (localhost:4000)
./run.sh native     # Native subsequent runs
```
