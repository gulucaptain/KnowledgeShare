---
title: "FlashRender"
paper_title: "FlashRender: Few-Step Generative Rendering via Camera-Controlled Video MeanFlow"
date: "2026-10-27T11:29:00+08:00"
lastmod: "2026-10-27T11:29:00+08:00"
summary: "通过几何表征变换与对齐 RETA 减少相机控制对采样步数的依赖，降低去噪轨迹曲率；再结合 MeanFlow 微调和 on-policy flow map 蒸馏，修正少步采样的离散化与自滚动误差。论文研究沿目标相机轨迹快速重拍源视频，在较低采样成本下保持几何一致性和相机可控性。"
tags: ["Camera Control"]
paper_url: "https://arxiv.org/abs/2609.03563"
thumbnail: "images/camera-control/flashrender.jpg"
thumbnail_alt: "FlashRender 的论文方法或实验示意图"
thumbnail_caption: "FlashRender · Figure 1"
thumbnail_source: "https://arxiv.org/html/2609.03563v1/teaser.png"
draft: false
---

通过几何表征变换与对齐 RETA 减少相机控制对采样步数的依赖，降低去噪轨迹曲率；再结合 MeanFlow 微调和 on-policy flow map 蒸馏，修正少步采样的离散化与自滚动误差。论文研究沿目标相机轨迹快速重拍源视频，在较低采样成本下保持几何一致性和相机可控性。

来源：[论文摘要与原文](https://arxiv.org/abs/2609.03563)。
