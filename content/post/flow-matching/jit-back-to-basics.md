---
paper_acronym: "JiT"
title: "JiT"
paper_title: "Back to Basics: Let Denoising Generative Models Denoise"
date: "2026-10-27T11:29:00+08:00"
lastmod: "2026-10-27T11:29:00+08:00"
summary: "主张直接预测干净数据，而非噪声或带噪量：自然图像位于低维流形附近，直接预测可使容量有限的网络在高维像素空间中有效工作。以大 patch 的普通图像 Transformer 在原始像素上训练，不依赖 tokenizer、预训练或额外损失，展示简洁的像素扩散生成路径。"
tags: ["Flow Matching"]
paper_url: "https://arxiv.org/abs/2511.13720"
thumbnail: "images/flow-matching/jit-back-to-basics.jpg"
thumbnail_alt: "JiT 的论文方法或实验示意图"
thumbnail_caption: "JiT · Figure 1"
thumbnail_source: "https://arxiv.org/html/2511.13720v2/teaser-update.png"
draft: false
---

主张直接预测干净数据，而非噪声或带噪量：自然图像位于低维流形附近，直接预测可使容量有限的网络在高维像素空间中有效工作。以大 patch 的普通图像 Transformer 在原始像素上训练，不依赖 tokenizer、预训练或额外损失，展示简洁的像素扩散生成路径。

来源：[论文摘要与原文](https://arxiv.org/abs/2511.13720)。
