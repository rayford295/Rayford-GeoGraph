# Fork Guide: Build Your Own GeoGraph

This repository can be forked into a personal research atlas for another scholar, lab, course, or project. The goal is simple: turn research outputs into a public knowledge base and knowledge graph.

## 1. Fork and Rename

1. Open [Rayford GeoGraph](https://github.com/rayford295/Rayford-GeoGraph).
2. Click `Fork`.
3. Rename the fork to your preferred project name, for example `YourName-GeoGraph`.
4. In GitHub repository settings, enable GitHub Pages from the `main` branch root.

Your site will usually be available at:

```text
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/
```

## 2. Replace Identity and Links

Update these files first:

- `README.md`
- `README.zh-CN.md`
- `package.json`
- `index.html`
- `raw/scholar/google-scholar.json`
- `scripts/fetch-scholar.js`
- `.github/workflows/update-scholar.yml`

Replace Rayford/Yifan links with your own website, GitHub profile, Google Scholar profile, and repository name.

## 3. Add Your Research Outputs

Use the template at:

```text
wiki/papers/_template.md
```

Copy it to a new file such as:

```text
wiki/papers/my-first-paper.md
```

Then fill in:

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

Files that start with `_` are ignored by the build script, so `_template.md` will not appear as a graph node.

## 4. Connect the Graph

Every node should connect to at least one other node. Use relationship labels such as:

- `extends`
- `uses the same dataset as`
- `shares method lineage with`
- `contrasts with`
- `opens a new branch from`

Good graph connections explain your intellectual trajectory, not just citation relationships.

## 5. Build Locally

Run:

```bash
npm run build
```

This reads `wiki/papers/*.md` and generates `data.js`.

## 6. Add Google Scholar

Find your Google Scholar user id from your profile URL:

```text
https://scholar.google.com/citations?user=YOUR_ID
```

Update the user id in:

- `scripts/fetch-scholar.js`
- `raw/scholar/google-scholar.json`
- `.github/workflows/update-scholar.yml`
- `index.html`
- `README.md`

Then run:

```bash
npm run scholar:update
```

## 7. Publish

Commit and push:

```bash
git add .
git commit -m "Customize my GeoGraph"
git push
```

GitHub Pages will deploy the site. The weekly Scholar workflow will run automatically if Actions are enabled.

## Suggested Customization Checklist

- Replace all personal links.
- Replace paper pages.
- Replace raw source records.
- Update theme and method tags.
- Update graph positions so nodes do not overlap.
- Update colors to match your field or identity.
- Check `data.js` after running `npm run build`.
- Open the GitHub Pages site and test search, filters, and node clicks.
