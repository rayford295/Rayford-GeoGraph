# Rayford GeoGraph

[一键打开网站](https://rayford295.github.io/Rayford-GeoGraph/) | [Google Scholar](https://scholar.google.com/citations?user=B-fiSHwAAAAJ) | [打开学术主页](https://rayford295.github.io/) | [English README](./README.md)

Rayford GeoGraph 是我为这个世界贡献的一份开放研究知识库和知识图谱。它把我的论文、书章、数据集、GitHub 仓库和 GeoAI 工作流组织成一个可以浏览、可以复用、可以持续生长的研究星图。

它不是普通的 publication list。每个研究产出都是一个节点，有论文线索、代码线索、方法线索和研究脉络。我的目标是让别人更容易理解我的研究从哪里来、解决了什么问题、如何复现、还能往哪里走。

## 这是什么

- 一个面向公众开放的 GeoAI/GIScience 研究图谱。
- 一个星空风格的交互网站，用来探索论文、仓库、数据集和方法。
- 一个由 markdown 维护的结构化知识库，适合人和 agent 一起持续更新。
- 一个每周自动更新的 Google Scholar 公开指标快照。

## 一键入口

- 网站地址：[rayford295.github.io/Rayford-GeoGraph](https://rayford295.github.io/Rayford-GeoGraph/)
- GitHub 仓库：[github.com/rayford295/Rayford-GeoGraph](https://github.com/rayford295/Rayford-GeoGraph)
- Google Scholar：[scholar.google.com/citations?user=B-fiSHwAAAAJ](https://scholar.google.com/citations?user=B-fiSHwAAAAJ)
- 主站地址：[rayford295.github.io](https://rayford295.github.io/)

## 前端体验

- 第一屏就是交互式研究星图。
- 支持关键词搜索、主题筛选、仓库卡片，以及 `Network`、`Timeline`、`Repo` 三种视图。
- 点击节点后，右侧 inspector 会展示仓库信息、方法标签、论文链接、数据链接和图谱关系。
- 视觉语言采用星空和星座感：每个研究产出都是同一片研究天空中的一颗星。

## 知识库结构

- `wiki/papers/`：每个研究产出的结构化页面。
- `wiki/concepts/`：可复用的概念页面。
- `wiki/comparisons/`：跨论文的研究脉络页面。
- `raw/papers/`：论文和仓库的原始记录。
- `raw/scholar/google-scholar.json`：最新 Google Scholar 公开 profile 快照。
- `scripts/build-map.js`：把论文页面编译成前端图谱数据。
- `scripts/fetch-scholar.js`：刷新 Google Scholar 公开指标。
- `.github/workflows/update-scholar.yml`：每周自动刷新 Scholar 快照。

## 当前研究产出

- ArcGIS Text SAM Tree Segmentation
- GeoLocator
- Hyperlocal Disaster Damage Assessment
- Perceiving Multidimensional Disaster Damages
- DamageArbiter
- Satellite-to-Street

## 每周 Scholar 更新

仓库内置了 GitHub Actions 定时任务，每周运行一次。它会读取公开 Google Scholar profile，更新 `raw/scholar/google-scholar.json`，并且只有在数据变化时才自动提交。

Google Scholar 有时会限制自动访问。遇到这种情况时，脚本会保留上一次快照，不会破坏网站。

## 本地更新流程

```bash
npm run build
npm run scholar:update
```

修改 `wiki/papers/` 后运行 `npm run build`。如果想手动刷新本地 Google Scholar 快照，运行 `npm run scholar:update`。

## 后续方向

1. 给每个研究产出增加独立项目页。
2. 继续扩充 `wiki/concepts/` 和 `wiki/comparisons/`。
3. 把演讲、数据集、代码发布和合作者也接入图谱。
4. 让网页直接支持中英双语内容切换。
