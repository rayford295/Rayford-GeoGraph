# Research Map Schema

## Purpose

This repository is a bilingual research knowledge graph for Yifan Yang's first-authored publications. The public website should stay consistent with the markdown knowledge base.

## Core Structure

- `raw/` stores source records and immutable input notes.
- `wiki/` stores agent-maintained markdown pages.
- `wiki/index.md` is the catalog of knowledge pages.
- `wiki/log.md` is an append-only update log.
- `scripts/build-map.js` compiles `wiki/papers/` into `data.js`.
- `outputs/` stores generated reports and future exports.

## Page Rules

Every paper page in `wiki/papers/` must include YAML frontmatter with:

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
- `position`
- `color`
- `radius`

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
