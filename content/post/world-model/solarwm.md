---
title: "SolarWM"
date: 2026-09-12T21:32:00+08:00
lastmod: 2026-09-12T21:32:00+08:00
summary: "覆盖开放数据、可扩展训练和长时序推理的视频世界模型基础设施。"
tags: ["World Model", "Video World Model", "Long-Horizon Generation"]
website: "https://junchao-cs.github.io/SolarWM-Web/"
paper_title: "SolarWM: Open Data and Scalable Training for Long-Horizon Video World Models"
project_url: "https://junchao-cs.github.io/SolarWM-Web/"
paper_url: "https://arxiv.org/abs/2609.02886"
code_url: "https://github.com/Junchao-cs/SolarWM"
model_url: "https://huggingface.co/collections/junchaoh-cs/solarwm"
thumbnail: "images/world-model/solarwm-teaser.png"
thumbnail_alt: "SolarWM 长时序交互视频世界模型展示"
thumbnail_caption: "SolarWM 官方项目展示图"
thumbnail_source: "https://junchao-cs.github.io/SolarWM-Web/assets/images/solar_teaser-cover.png"
draft: false
---

SolarWM 提供从数据处理、训练到长时序推理的开放视频世界模型方案。它把 14 个数据集中的 143 万段视频统一成包含观测、相机几何、描述和质量信息的数据格式，并用同一套三阶段训练流程支持 Wan2.2、LTX-2.5 与 MiniMax-H3 等 5B–33B 视频骨干；模型只用 5 秒片段训练，也能进行分钟到小时级的自回归交互生成。
