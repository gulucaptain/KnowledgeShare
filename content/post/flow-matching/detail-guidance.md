---
title: "Detail Guidance"
date: "2026-10-15T12:30:00+08:00"
lastmod: "2026-10-15T12:30:00+08:00"
summary: "分析 Diffusion Transformer 中的大激活，指出其主要影响局部细节而非整体语义。提出无需训练的 Detail Guidance，通过破坏大激活构造细节不足的模型，反向引导原模型增强细节，并可与 CFG 结合。"
tags: ["Flow Matching"]
draft: false
paper_title: "Massive Activations are the Key to Local Detail Synthesis in Diffusion Transformers"
paper_url: "https://arxiv.org/abs/2510.11538"
thumbnail: "images/flow-matching/detail-guidance.jpg"
thumbnail_alt: "Detail Guidance 的论文方法或结果示意图"
thumbnail_caption: "Detail Guidance · 论文 Figure 1"
thumbnail_source: "https://arxiv.org/html/2510.11538v2/f1_v3.png"
---

分析 Diffusion Transformer 中的大激活，指出其主要影响局部细节而非整体语义。提出无需训练的 Detail Guidance，通过破坏大激活构造细节不足的模型，反向引导原模型增强细节，并可与 CFG 结合。

来源：[论文摘要](https://arxiv.org/abs/2510.11538)。
