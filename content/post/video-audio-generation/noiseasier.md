---
title: "NoisEasier"
date: 2026-09-12T21:35:00+08:00
lastmod: 2026-09-12T21:35:00+08:00
summary: "在不修改视频模型参数的情况下，用奖励梯度优化完整随机采样轨迹。"
tags: ["Video & Audio Generation", "CameraNoise", "Test-Time Scaling", "Text-to-Video"]
website: "https://yujiangpu20.github.io/noiseasier/"
paper_title: "NoisEasier: Test-Time Noise Optimization for Text-to-Video Generation"
project_url: "https://yujiangpu20.github.io/noiseasier/"
paper_url: "https://arxiv.org/abs/2608.30194"
code_url: "https://github.com/actionlab-cv/NoisEasier"
thumbnail: "images/camera-noise/noiseasier-result.jpg"
thumbnail_alt: "NoisEasier 奖励引导噪声优化后的视频生成画面"
thumbnail_caption: "NoisEasier 官方生成结果视频截帧"
thumbnail_source: "https://yujiangpu20.github.io/noiseasier/videos/gallery/VBench/sunrise_after.mp4"
aliases: ["/post/camera-noise/noiseasier/"]
draft: false
---

NoisEasier 是一种文本到视频生成的测试时扩展方法，用可微奖励反馈直接优化潜在噪声，而不更新生成模型参数。它借助 4–8 步的一致性视频模型，对完整随机采样轨迹进行联合优化，在属性绑定、物体交互和数量等组合对齐维度上取得稳定提升。
