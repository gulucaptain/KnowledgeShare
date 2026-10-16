---
title: "GeoVerse"
date: "2026-10-16T18:19:00+08:00"
lastmod: "2026-10-16T18:19:00+08:00"
summary: "在三维基础模型的几何潜空间中生成新视角，注入 Wan2.2 VACE 的外观先验，并用持久全局空间记忆约束连续视角扩展，兼顾未见区域补全与跨视角几何一致性。"
tags: ["Spatial Intelligence"]
paper_title: "GeoVerse: World-Consistent Novel View Synthesis in Geometric Latent Space"
website: "https://geoverse-nvs.github.io/"
project_url: "https://geoverse-nvs.github.io/"
paper_url: "https://arxiv.org/abs/2609.35734v1"
thumbnail: "images/spatial-intelligence/geoverse.jpg"
thumbnail_alt: "GeoVerse 结合全局空间记忆、视频特征注入和几何潜空间扩散生成新视角的流程"
thumbnail_caption: "GeoVerse · 论文 Figure 2（v1）"
thumbnail_source: "https://arxiv.org/html/2609.35734v1/Method.png"
draft: false
---

GeoVerse 面向稀疏图像条件下的新视角合成，将三维基础模型的几何先验与视频生成模型的外观先验结合：通过类似 ControlNet 的适配器注入 Wan2.2 VACE 多层特征，并将已观察与生成的内容持续聚合到全局空间记忆中，重投影为目标视角的 RGB-D 引导。

这使多步视角扩展共享同一场景表示，减少累积漂移；同时采用 reflow 蒸馏，将几何潜空间生成压缩到四步去噪。论文在多数据集上评估视觉质量与几何一致性。本条按用户指定的 v1（2026 年 9 月 28 日）整理。

来源：[论文](https://arxiv.org/abs/2609.35734v1)与[官方项目页](https://geoverse-nvs.github.io/)。
