# Rayford GeoGraph

[Open Live Website](https://rayford295.github.io/Rayford-GeoGraph/) | [Open Main Homepage](https://rayford295.github.io/) | [中文说明](./README.zh-CN.md)

Rayford GeoGraph is a public GitHub Pages research atlas for Yifan Yang's papers, book chapters, datasets, and code-backed GeoAI workflows. It combines a graph-first frontend with a maintainable markdown knowledge base and explicit GitHub repository metadata for every research output.

## One-Click Access

- Live site: [rayford295.github.io/Rayford-GeoGraph](https://rayford295.github.io/Rayford-GeoGraph/)
- Main academic homepage: [rayford295.github.io](https://rayford295.github.io/)
- Repository: [github.com/rayford295/Rayford-GeoGraph](https://github.com/rayford295/Rayford-GeoGraph)

## Frontend Experience

- Graph workspace as the first screen.
- Theme filters, repository cards, and keyword search.
- Network, timeline, and repository-weighted views.
- Inspector panel with GitHub previews, repository metrics, methods, links, and graph relationships.

## Project Structure

- `raw/`: Immutable source notes and paper records.
- `wiki/`: Structured markdown pages maintained as the research knowledge layer.
- `outputs/`: Generated artifacts.
- `scripts/build-map.js`: Builds front-end graph data from `wiki/papers/`.
- `data.js`: Generated graph dataset used by the website.
- `CLAUDE.md`: Schema and workflow rules for future agent-assisted maintenance.

## How It Works

Each first-authored research output is stored as a markdown page in `wiki/papers/` with structured frontmatter, repository metadata, and narrative sections. The build script reads those files, extracts metadata, and writes `data.js` for the website. This keeps the public visualization aligned with the underlying research knowledge base.

## Current Scope

- ArcGIS Text SAM Tree Segmentation
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
