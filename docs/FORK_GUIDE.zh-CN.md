# Fork 指南：做一个你自己的 GeoGraph

这个仓库可以 fork 成另一个研究者、实验室、课程或项目的个人研究图谱。核心目标很简单：把研究产出做成一个公开知识库和知识图谱。

## 1. Fork 并改名

1. 打开 [Rayford GeoGraph](https://github.com/rayford295/Rayford-GeoGraph)。
2. 点击 `Fork`。
3. 把 fork 后的仓库改成你自己的名字，例如 `YourName-GeoGraph`。
4. 在 GitHub repository settings 里启用 GitHub Pages，来源选择 `main` branch root。

网站通常会发布到：

```text
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/
```

## 2. 替换身份信息和链接

优先修改这些文件：

- `README.md`
- `README.zh-CN.md`
- `package.json`
- `index.html`
- `raw/scholar/google-scholar.json`
- `scripts/fetch-scholar.js`
- `.github/workflows/update-scholar.yml`

把 Rayford/Yifan 的网站、GitHub、Google Scholar、仓库名替换成你自己的。

## 3. 添加你的研究产出

模板文件在：

```text
wiki/papers/_template.md
```

复制成一个新文件，例如：

```text
wiki/papers/my-first-paper.md
```

然后填写：

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

以 `_` 开头的文件会被构建脚本忽略，所以 `_template.md` 不会出现在图谱里。

## 4. 连接图谱

每个节点最好至少连接到另一个节点。关系标签可以写：

- `extends`
- `uses the same dataset as`
- `shares method lineage with`
- `contrasts with`
- `opens a new branch from`

好的图谱关系应该解释你的研究脉络，而不仅仅是论文引用关系。

## 5. 本地构建

运行：

```bash
npm run build
```

脚本会读取 `wiki/papers/*.md` 并生成 `data.js`。

## 6. 添加 Google Scholar

从你的 Google Scholar profile URL 里找到 user id：

```text
https://scholar.google.com/citations?user=YOUR_ID
```

然后修改：

- `scripts/fetch-scholar.js`
- `raw/scholar/google-scholar.json`
- `.github/workflows/update-scholar.yml`
- `index.html`
- `README.md`

再运行：

```bash
npm run scholar:update
```

## 7. 发布

提交并推送：

```bash
git add .
git commit -m "Customize my GeoGraph"
git push
```

GitHub Pages 会自动部署网站。如果 Actions 已启用，Scholar 每周刷新也会自动运行。

## 自定义检查清单

- 替换所有个人链接。
- 替换 paper 页面。
- 替换 raw source records。
- 更新 theme 和 method 标签。
- 调整 graph positions，避免节点重叠。
- 改成适合你领域或个人风格的颜色。
- 运行 `npm run build` 后检查 `data.js`。
- 打开 GitHub Pages，测试搜索、筛选和节点点击。
