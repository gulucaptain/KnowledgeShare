---
title: "TRELLIS.2"
date: "2026-10-16T18:19:00+08:00"
lastmod: "2026-10-16T18:19:00+08:00"
summary: "以 O-Voxel 稀疏体素统一表示几何与 PBR 材质，通过 Sparse Compression VAE 获得紧凑结构化潜变量，并训练 4B 参数流匹配模型实现高质量图像到三维资产生成。"
tags: ["Spatial Intelligence"]
paper_title: "Native and Compact Structured Latents for 3D Generation"
website: "https://microsoft.github.io/TRELLIS.2/"
project_url: "https://microsoft.github.io/TRELLIS.2/"
paper_url: "https://arxiv.org/abs/2512.14692"
code_url: "https://github.com/microsoft/TRELLIS.2"
thumbnail: "images/spatial-intelligence/trellis-2.jpg"
thumbnail_alt: "TRELLIS.2 从原生三维网格转换到 O-Voxel 并压缩为结构化潜变量的流程"
thumbnail_caption: "TRELLIS.2 · 官方方法概览"
thumbnail_source: "https://microsoft.github.io/TRELLIS.2/assets/method/overview.jpg"
draft: false
---

TRELLIS.2 从原生三维数据学习结构化潜表示。O-Voxel 同时编码几何和外观，可处理开放表面、非流形及内部封闭结构，并表达颜色、粗糙度、金属度与透明度等 PBR 属性。Sparse Compression VAE 压缩稀疏体素，再由 4B 参数流匹配模型生成三维资产，兼顾复杂拓扑、细节材质与推理效率。

其核心价值是将几何与材质统一在可压缩的原生三维表示中，支持高分辨率图像到三维资产生成。论文于 2025 年 12 月首次提交。

来源：[论文](https://arxiv.org/abs/2512.14692)与[官方项目页](https://microsoft.github.io/TRELLIS.2/)。
