---
title: "DreamX-Creator"
date: 2026-09-12T19:55:00+08:00
lastmod: 2026-09-12T19:55:00+08:00
summary: "以 7B 生成器为核心的原生音视频联合生成与单步 2K 精炼系统。"
tags: ["Audio-Video Generation", "Video Generation", "Multimodal Generation"]
website: "https://github.com/AMAP-ML/DreamX-Creator"
paper_title: "DreamX-Creator: Democratizing Native Audio-Video Generation at 2K Resolution"
paper_url: "https://arxiv.org/abs/2608.31106"
code_url: "https://github.com/AMAP-ML/DreamX-Creator"
thumbnail: "images/audio-video-generation/dreamx-creator-teaser.png"
thumbnail_alt: "DreamX-Creator 的原生音视频生成样例与 2K 精炼效果"
thumbnail_caption: "DreamX-Creator 官方展示图"
thumbnail_source: "https://github.com/AMAP-ML/DreamX-Creator/blob/main/dreamx-creator_teaser.png"
draft: false
---

DreamX-Creator 1.0 是一个以 7B 生成器为核心的原生音视频联合生成系统。给定首帧和文本提示，它分别处理音频与视频流，并在网络后半段通过门控跨模态注意力进行双向交互；随后使用音视频强化学习改善生成质量与同步性，再由自回归单步 2K 精炼器提升视频分辨率。
