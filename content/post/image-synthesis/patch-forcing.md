---
title: "Patch Forcing"
paper_title: "Denoising, Fast and Slow: Difficulty-Aware Adaptive Sampling for Image Generation"
date: "2026-10-17T13:23:00+08:00"
lastmod: "2026-10-17T13:23:00+08:00"
summary: "通过 patch 级噪声调度与难度预测，自适应分配图像生成的去噪计算，让简单区域先提供上下文，帮助复杂区域细化。"
tags: ["Image Synthesis", "Adaptive Sampling", "Diffusion Forcing"]
paper_url: "https://arxiv.org/abs/2604.19141"
code_url: "https://github.com/CompVis/patch-forcing"
thumbnail: "images/image-synthesis/patch-forcing-fig1.png"
thumbnail_alt: "Patch Forcing 的训练噪声分布，以及不同推理采样策略的 FID 对比"
thumbnail_caption: "Patch Forcing · Figure 1 方法概览"
thumbnail_source: "https://arxiv.org/html/2604.19141v1/fpf-purples.png"
draft: false
---

Patch Forcing（PF）研究图像不同区域所需去噪计算并不相同的问题。传统扩散与流模型通常对所有 patch 使用相同时间步和计算次数，而 PF 允许不同区域采用不同噪声水平与去噪进度，让容易生成的区域提前形成较清晰的上下文，辅助仍然困难的区域。

训练时，作者提出 Logit-Normal Truncated Gaussian（LTG）时间步采样器，限制每张训练图像中可用的最大 patch 信息量，缓解直接独立采样造成的训练—推理不匹配。模型再加入轻量的 patch 难度预测头，支持 Dual-Loop、Context Look-ahead 等自适应采样策略：简单区域更快推进，困难区域获得更多细化与上下文。

论文在类别条件 ImageNet 生成中展示了质量提升，并扩展到文本生成图像；该方法可与表征对齐和引导方法结合。其核心不仅是减少冗余计算，也是在给定采样预算下利用先生成区域改善后续生成。

来源：[论文摘要与方法概述](https://arxiv.org/html/2604.19141)。
