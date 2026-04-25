# Rayford GeoGraph

[一键打开网站](https://rayford295.github.io/Rayford-GeoGraph/) | [打开学术主页](https://rayford295.github.io/) | [English README](./README.md)

Rayford GeoGraph 是 Yifan Yang 的公开研究图谱网站，用来组织一作论文、书章、数据集和带代码的 GeoAI 工作流。它现在不只是论文列表，而是一个由 GitHub 仓库内容驱动的研究门户。

## 一键入口

- 网站地址：[rayford295.github.io/Rayford-GeoGraph](https://rayford295.github.io/Rayford-GeoGraph/)
- 主站地址：[rayford295.github.io](https://rayford295.github.io/)
- 仓库地址：[github.com/rayford295/Rayford-GeoGraph](https://github.com/rayford295/Rayford-GeoGraph)

## 前端体验

- 第一屏就是研究图谱工作台。
- 支持主题筛选、仓库卡片和关键词搜索。
- 支持 network、timeline 和 repository-weighted 三种视图。
- 右侧 inspector 展示 GitHub 预览图、仓库指标、方法、链接和图谱关系。

## 仓库结构

- `raw/`：原始资料层，存放不可直接改写的论文记录和来源说明。
- `wiki/`：知识层，存放结构化 markdown 页面。
- `outputs/`：构建产物或后续报告输出目录。
- `scripts/build-map.js`：把 `wiki/papers/` 编译成前端图谱数据。
- `data.js`：网站前端使用的生成数据文件。
- `CLAUDE.md`：后续让 agent 自动维护知识库时使用的规则文件。

## 工作方式

每个一作研究产出都会在 `wiki/papers/` 中对应一份 markdown 页面。页面里既有结构化元数据，也有 GitHub 仓库信息、研究脉络、方法、关系和链接。构建脚本会读取这些页面，自动生成前端图谱所需的 `data.js`，这样网站展示和知识库内容就能保持同步。

## 当前范围

- ArcGIS Text SAM Tree Segmentation
- GeoLocator
- Hyperlocal Disaster Damage Assessment
- Perceiving Multidimensional Disaster Damages
- DamageArbiter
- Satellite-to-Street

## 本地更新流程

1. 在 `raw/` 中补充或更新原始资料。
2. 修改 `wiki/papers/` 中对应论文的 markdown 页面。
3. 运行 `node scripts/build-map.js`。
4. 提交并推送，GitHub Pages 会自动更新。

## 后续可以继续扩展

1. 给每篇论文增加独立页面。
2. 继续扩充 `wiki/concepts/` 和 `wiki/comparisons/`。
3. 把报告、代码、数据集、演讲和合作关系也接入图谱。
4. 让网页直接支持双语内容切换。
