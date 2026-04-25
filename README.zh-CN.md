# Yifan Research Map

[一键打开网站](https://rayford295.github.io/yifan-research-map/) | [打开学术主页](https://rayford295.github.io/) | [English README](./README.md)

这个仓库用于维护 Yifan Yang 的公开研究知识图谱网站。它把可视化前端和可持续维护的 markdown 知识库结合在一起，整体思路参考了 `raw + wiki + schema` 的结构。

## 一键入口

- 网站地址：[rayford295.github.io/yifan-research-map](https://rayford295.github.io/yifan-research-map/)
- 主站地址：[rayford295.github.io](https://rayford295.github.io/)
- 仓库地址：[github.com/rayford295/yifan-research-map](https://github.com/rayford295/yifan-research-map)

## 仓库结构

- `raw/`：原始资料层，存放不可直接改写的论文记录和来源说明。
- `wiki/`：知识层，存放结构化 markdown 页面。
- `outputs/`：构建产物或后续报告输出目录。
- `scripts/build-map.js`：把 `wiki/papers/` 编译成前端图谱数据。
- `data.js`：网站前端使用的生成数据文件。
- `CLAUDE.md`：后续让 agent 自动维护知识库时使用的规则文件。

## 工作方式

每篇一作论文都会在 `wiki/papers/` 中对应一份 markdown 页面。页面里既有结构化元数据，也有研究脉络、方法、关系和链接。构建脚本会读取这些页面，自动生成前端图谱所需的 `data.js`，这样网站展示和知识库内容就能保持同步。

## 当前范围

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
