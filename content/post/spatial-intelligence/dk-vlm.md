---
title: "DK-VLM"
paper_title: "DK-VLM: Geometry as Position for Spatial Reasoning in Vision-Language Models"
date: "2026-10-27T11:29:00+08:00"
lastmod: "2026-10-27T11:29:00+08:00"
summary: "把几何作为位置引入视觉语言模型的注意力，而非直接把重建特征融合进视觉 token。双核注意力分别保留原生语义位置编码，并利用三维点位移和相对相机变换调节几何注意力；学习门控融合两路输出，结合参考系组合监督改善跨视角与多步空间判断。"
tags: ["Spatial Intelligence"]
paper_url: "https://arxiv.org/abs/2610.22356"
project_url: "https://sumuru789.github.io/DK-VLM-website/"
website: "https://sumuru789.github.io/DK-VLM-website/"
thumbnail: "images/spatial-intelligence/dk-vlm.jpg"
thumbnail_alt: "DK-VLM 的论文方法或实验示意图"
thumbnail_caption: "DK-VLM · Figure 1"
thumbnail_source: "https://arxiv.org/html/2610.22356v1/teaser_dkvlm.png"
draft: false
---

把几何作为位置引入视觉语言模型的注意力，而非直接把重建特征融合进视觉 token。双核注意力分别保留原生语义位置编码，并利用三维点位移和相对相机变换调节几何注意力；学习门控融合两路输出，结合参考系组合监督改善跨视角与多步空间判断。

来源：[论文摘要与原文](https://arxiv.org/abs/2610.22356)。
