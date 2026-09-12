---
title: "FailBench"
date: 2026-09-12T21:31:00+08:00
lastmod: 2026-09-12T21:31:00+08:00
summary: "检验视觉语言模型能否跨数据来源可靠判断机器人任务成败的基准。"
tags: ["R4R-Auto-Eval", "Robot Failure Detection", "VLM Evaluation"]
website: "https://metric-ai-lab.github.io/failbench/"
paper_title: "FailBench: How Reliable are VLMs at Judging Robot Task Success?"
project_url: "https://metric-ai-lab.github.io/failbench/"
paper_url: "https://arxiv.org/abs/2609.03611"
thumbnail: "images/r4r-auto-eval/failbench-paper.png"
thumbnail_alt: "FailBench 论文首页，介绍机器人任务成功判断基准"
thumbnail_caption: "FailBench 官方论文首页"
thumbnail_source: "https://arxiv.org/pdf/2609.03611"
draft: false
---

FailBench 收集了来自 14 个公开来源的 2,197 次机器人操作尝试，用原始结果标签评测视觉语言模型判断任务是否成功的可靠性。对 13 种检测器的实验显示，最佳模型的平均平衡准确率只有 0.77；在依赖接触信息的装配任务中，所有模型都低于 0.60，并普遍在视觉证据含糊时偏向判断为成功。
