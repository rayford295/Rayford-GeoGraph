# Yifan Research Map

[Open Live Website](https://rayford295.github.io/yifan-research-map/) | [Open Main Homepage](https://rayford295.github.io/) | [中文说明](./README.zh-CN.md)

This repository powers a public GitHub Pages website for Yifan Yang's research knowledge graph. It combines an interactive frontend with a maintainable markdown knowledge base inspired by the `raw + wiki + schema` pattern.

## One-Click Access

- Live site: [rayford295.github.io/yifan-research-map](https://rayford295.github.io/yifan-research-map/)
- Main academic homepage: [rayford295.github.io](https://rayford295.github.io/)
- Repository: [github.com/rayford295/yifan-research-map](https://github.com/rayford295/yifan-research-map)

## Project Structure

- `raw/`: Immutable source notes and paper records.
- `wiki/`: Structured markdown pages maintained as the research knowledge layer.
- `outputs/`: Generated artifacts.
- `scripts/build-map.js`: Builds front-end graph data from `wiki/papers/`.
- `data.js`: Generated graph dataset used by the website.
- `CLAUDE.md`: Schema and workflow rules for future agent-assisted maintenance.

## How It Works

Each first-authored paper is stored as a markdown page in `wiki/papers/` with structured frontmatter and narrative sections. The build script reads those files, extracts metadata, and writes `data.js` for the website. This keeps the public visualization aligned with the underlying research knowledge base.

## Current Scope

- GeoLocator
- Hyperlocal Disaster Damage Assessment
- Perceiving Multidimensional Disaster Damages
- DamageArbiter
- Satellite-to-Street

## Local Update Workflow

1. Add or revise source notes in `raw/`.
2. Update the corresponding markdown page in `wiki/papers/`.
3. Run `node scripts/build-map.js`.
4. Commit and push changes to refresh GitHub Pages.

## Next Growth Directions

1. Add dedicated node pages for each paper.
2. Expand `wiki/concepts/` and `wiki/comparisons/`.
3. Include talks, datasets, code releases, and collaborators as graph entities.
4. Add bilingual content blocks directly on the website.
