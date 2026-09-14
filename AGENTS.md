# Gulucaptain 内容管理规则

新增论文、网页或短记录前，先读取 `data/topics.yaml`，根据标题、摘要、方法、任务与应用场景判断其语义是否落入现有主题的 `description` 或 `semantic_scope`。

- 与现有主题核心研究问题一致时，加入 `content/post/<topic-slug>/`，不要因为出现新的模型名或次要标签而创建新主题。
- 只共享宽泛背景词、但核心任务明显不同的内容，应建立新主题，并同步添加 `data/topics.yaml` 条目和 `content/post/<topic-slug>/_index.md`。
- 每条资料使用独立 Markdown 文件；`date` 是精确到分钟的录入时间，主题页会自动按 `date` 倒序排列。
- 论文条目将完整论文标题写入 `paper_title`，作为主题页中的子模块标题；`title` 保留模型或项目简称。非论文资料可省略 `paper_title`。
- 将官方来源分别写入 `project_url`、`paper_url`、`code_url`、`model_url`；页面会自动生成 GitHub 风格的链接按钮，只填写确实存在的链接，不在正文中重复罗列。
- 新增或修改资料后，将所属主题 `_index.md` 的 `lastmod` 更新为最新时间。
- 主题页每页条数由 `hugo.toml` 中的 `topicPageSize` 统一控制。
- 保留准确的官方来源链接；为每条资料从官方来源选择缩略图，保存到 `static/images/<topic-slug>/`，并填写 `thumbnail`、`thumbnail_alt`、`thumbnail_caption`、`thumbnail_source`。
- 完成后运行本地和发布构建，确认主题索引、分页、搜索与图片都正常。
