---
paper_acronym: "RICL"
title: RICL
date: '2026-09-23T17:33:00+08:00'
lastmod: '2026-09-23T17:33:00+08:00'
paper_title: 'RICL: Adding In-Context Adaptability to Pre-Trained Vision-Language-Action
  Models'
summary: 通过后训练和检索增强上下文学习，让预训练 VLA 在不更新目标任务参数的情况下利用少量机器人演示适配新操作任务。
tags:
- In-Context Learning
- Vision-Language-Action
- Robot Manipulation
website: https://ricl-vla.github.io/
project_url: https://ricl-vla.github.io/
paper_url: https://arxiv.org/abs/2508.02062
code_url: https://github.com/ricl-vla/ricl_openpi
thumbnail: images/embodied-ai-icl/ricl-pi0-architecture.png
thumbnail_alt: RICL-π₀-FAST 的架构图，展示查询观测、检索到的演示片段与动作插值层如何共同预测机器人动作
thumbnail_caption: RICL 论文 Figure 2：RICL-π₀-FAST 架构
thumbnail_source: https://arxiv.org/html/2508.02062v1/regentic-pi0-arch.png
draft: false
---

RICL 研究如何为已预训练的视觉—语言—动作模型补上上下文学习能力。作者以 π₀-FAST-DROID 为基础，用少量机器人示范进行后训练，使模型在部署新操作任务时能从 10–20 条示范中检索最相关的状态、图像与动作片段，并把它们作为上下文预测动作，而无需在目标任务上更新参数。

方法保留图像编码器，仅微调语言模型；检索端用 DINO-v2 表征查询图像，与示范缓冲区匹配相邻状态。模型再通过与最近检索动作相关的插值层，结合检索动作和 VLA 输出生成最终动作块。论文在未见物体、新动作与新场景的操作任务上报告，纯 RAG + ICL 的 RICL-π₀-FAST-DROID 优于基线 π₀-FAST-DROID；若允许继续在这 20 条目标任务示范上微调，RICL 的表现进一步提升。

这项工作把“收集少量示范并作为上下文提供”变成了预训练 VLA 的适配接口，适合归入具身智能中的 ICL 与示范驱动机器人学习脉络。论文的 arXiv v1 实际提交于 2025 年 8 月 4 日，并被 CoRL 2025 接收。

来源：[RICL 论文页面](https://arxiv.org/abs/2508.02062)；[项目主页](https://ricl-vla.github.io/)
