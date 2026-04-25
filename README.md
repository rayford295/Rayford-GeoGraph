# Rayford GeoGraph

[Open Live Website](https://rayford295.github.io/Rayford-GeoGraph/) | [Make Your Own](https://rayford295.github.io/Rayford-GeoGraph/fork.html) | [Google Scholar](https://scholar.google.com/citations?user=B-fiSHwAAAAJ) | [Main Homepage](https://rayford295.github.io/) | [中文说明](./README.zh-CN.md)

Rayford GeoGraph is my personal contribution to a more open research knowledge layer: a public knowledge base and knowledge graph for my papers, book chapters, datasets, GitHub repositories, and GeoAI workflows.

Instead of presenting research as a flat publication list, this project treats each output as a connected object with a paper trail, code trail, method trail, and intellectual lineage. The goal is to make my research easier to inspect, reuse, teach, and extend.

## What This Is

- A public research atlas for Yifan Yang's GeoAI and GIScience work.
- A star-map style website for exploring papers, repositories, datasets, and methods.
- A structured markdown knowledge base that agents and humans can maintain together.
- A weekly-updated Google Scholar snapshot for public citation metadata.
- A forkable template for other researchers who want to build their own research graph.

## One-Click Access

- Live site: [rayford295.github.io/Rayford-GeoGraph](https://rayford295.github.io/Rayford-GeoGraph/)
- Fork guide: [rayford295.github.io/Rayford-GeoGraph/fork.html](https://rayford295.github.io/Rayford-GeoGraph/fork.html)
- GitHub repository: [github.com/rayford295/Rayford-GeoGraph](https://github.com/rayford295/Rayford-GeoGraph)
- Google Scholar: [scholar.google.com/citations?user=B-fiSHwAAAAJ](https://scholar.google.com/citations?user=B-fiSHwAAAAJ)
- Main academic homepage: [rayford295.github.io](https://rayford295.github.io/)

## Frontend Experience

- The first screen is an interactive research constellation.
- The graph supports keyword search, theme filters, repository cards, and three views: `Network`, `Timeline`, and `Repo`.
- Each node opens an inspector with repository metadata, methods, paper links, dataset links, and graph relationships.
- The visual language is intentionally celestial: research outputs appear as connected stars in the same research sky.

## Knowledge Architecture

- `wiki/papers/`: structured profiles for research outputs.
- `wiki/concepts/`: reusable concept pages.
- `wiki/comparisons/`: cross-paper research narratives.
- `raw/papers/`: source records for paper and repository metadata.
- `raw/scholar/google-scholar.json`: the latest Google Scholar profile snapshot.
- `scripts/build-map.js`: compiles paper pages into `data.js`.
- `scripts/fetch-scholar.js`: refreshes public Google Scholar metadata.
- `.github/workflows/update-scholar.yml`: runs the Scholar refresh once per week.
- `docs/FORK_GUIDE.md`: explains how another researcher can fork and customize the atlas.
- `wiki/papers/_template.md`: reusable paper-node template ignored by the graph build.

## Current Research Outputs

- ArcGIS Text SAM Tree Segmentation
- GeoLocator
- Hyperlocal Disaster Damage Assessment
- Perceiving Multidimensional Disaster Damages
- DamageArbiter
- Satellite-to-Street

## Weekly Scholar Refresh

The repository includes a scheduled GitHub Actions workflow that runs once per week. It fetches the public Google Scholar profile, updates `raw/scholar/google-scholar.json`, and commits the new snapshot only when the data changes.

Google Scholar may temporarily rate-limit automated requests. When that happens, the script keeps the previous snapshot and avoids breaking the website.

## Local Workflow

```bash
npm run build
npm run scholar:update
```

Use `npm run build` after editing `wiki/papers/`. Use `npm run scholar:update` when you want to refresh the local Google Scholar snapshot manually.

## Make Your Own

This repository is designed to be forked. Start with the [Make Your Own page](https://rayford295.github.io/Rayford-GeoGraph/fork.html), then follow [docs/FORK_GUIDE.md](./docs/FORK_GUIDE.md). The short version:

1. Fork and rename the repository.
2. Replace personal links, Scholar user id, and homepage metadata.
3. Copy `wiki/papers/_template.md` for each research output.
4. Run `npm run build`.
5. Enable GitHub Pages and publish your own research graph.

## Next Growth Directions

1. Add dedicated project pages for each research output.
2. Expand `wiki/concepts/` and `wiki/comparisons/`.
3. Add talks, datasets, code releases, and collaborators as graph entities.
4. Add bilingual content blocks directly on the website.
