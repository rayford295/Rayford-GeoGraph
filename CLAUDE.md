# Research Map Schema

## Purpose

This repository is a bilingual research knowledge graph for Yifan Yang's first-authored research outputs, including papers, book chapters, datasets, and code-backed GeoAI workflows. The public website should stay consistent with the markdown knowledge base and GitHub repository metadata.

## Core Structure

- `raw/` stores source records and immutable input notes.
- `raw/scholar/google-scholar.json` stores the latest public Google Scholar snapshot.
- `wiki/` stores agent-maintained markdown pages.
- `wiki/index.md` is the catalog of knowledge pages.
- `wiki/log.md` is an append-only update log.
- `scripts/build-map.js` compiles `wiki/papers/` into `data.js`.
- `outputs/` stores generated reports and future exports.
- `docs/FORK_GUIDE.md` and `docs/FORK_GUIDE.zh-CN.md` explain how others can fork the project.
- `wiki/papers/_template.md` is a reusable research-output template.

## Scholar Snapshot Rules

- The Google Scholar profile URL is `https://scholar.google.com/citations?user=B-fiSHwAAAAJ`.
- `scripts/fetch-scholar.js` should update only public profile metadata and article rows.
- If Google Scholar rate-limits or returns incomplete data, keep the previous snapshot.
- `.github/workflows/update-scholar.yml` runs the refresh weekly and commits only real data changes.

## Page Rules

Every research output page in `wiki/papers/` must include YAML frontmatter with:

- `id`
- `short_title`
- `title`
- `year`
- `venue`
- `type`
- `status`
- `authors`
- `themes`
- `methods`
- `links`
- `connections`
- `repository`
- `position`
- `color`
- `radius`

Files in `wiki/papers/` that begin with `_` are templates or internal scaffolds. They must not be compiled into `data.js`.

The `repository` object should include:

- `name`
- `url`
- `preview`
- `language`
- `stars`
- `forks`
- `commits`

Every research output page should also include enough narrative detail to support future project pages:

- `One-Sentence Takeaway`
- `Research Problem`
- `Core Question`
- `Summary`
- `Method Snapshot`
- `Data and Study Area`
- `Key Contributions`
- `How This Connects to My Other Work`
- `Impact`
- `Keywords`
- `Public Links`
- `Citation`
- `Chinese Summary`

## Workflow

### Ingest

1. Add or update a raw source file in `raw/`.
2. Create or revise the corresponding page in `wiki/papers/`.
3. Update concept pages or comparison pages if the new paper changes the broader narrative.
4. Update `wiki/index.md`.
5. Append a short note to `wiki/log.md`.

### Build

1. Run `node scripts/build-map.js`.
2. Confirm that `data.js` reflects the expected metadata.
3. Verify that the live site still opens and renders the graph correctly.

### Lint

Check for:

- missing links
- inconsistent themes or methods
- orphan papers with no graph connections
- outdated summaries after publication status changes
- duplicated concepts across wiki pages
