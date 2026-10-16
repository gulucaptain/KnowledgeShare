---
title: "LSM-World"
date: "2026-10-16T18:19:00+08:00"
lastmod: "2026-10-16T18:19:00+08:00"
summary: "将静态场景信息直接存为扩散潜空间中的持久三维缓存，通过深度反投影构建记忆、潜空间投影查询新视角，减少 RGB 点云渲染与重复编码开销，保持视频世界模型的空间一致性。"
tags: ["Spatial Intelligence"]
paper_title: "Latent Spatial Memory for Video World Models"
website: "https://microsoft.github.io/LatentSpatialMemory/"
project_url: "https://microsoft.github.io/LatentSpatialMemory/"
paper_url: "https://arxiv.org/abs/2606.09828v2"
code_url: "https://github.com/microsoft/LatentSpatialMemory"
thumbnail: "images/spatial-intelligence/lsm-world.jpg"
thumbnail_alt: "LSM-World 潜空间三维缓存的初始化、读取与更新流程"
thumbnail_caption: "LSM-World · 官方架构图"
thumbnail_source: "https://microsoft.github.io/LatentSpatialMemory/assets/figures/pipeline_hd.png"
draft: false
---

这项工作提出潜空间空间记忆，将扩散模型的潜变量经深度引导反投影到三维，直接保存并读取场景特征，避免先渲染 RGB 点云再经 VAE 编码的往返过程。生成过程中持续更新静态场景缓存，使相机大幅移动后仍能返回此前观察过的区域。作者报告相较显式三维基线降低了生成耗时与缓存占用，并在 WorldScore 和 RealEstate10K 上评估世界建模及重建质量。

本条按用户指定的 v2（2026 年 8 月 27 日修订）整理；官方项目名为 LSM-World，arXiv 摘要中框架称为 Mirage。

来源：[论文](https://arxiv.org/abs/2606.09828v2)与[官方项目页](https://microsoft.github.io/LatentSpatialMemory/)。
