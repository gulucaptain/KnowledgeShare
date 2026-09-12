---
title: "Show-Harness"
date: 2026-09-12T21:01:00+08:00
lastmod: 2026-09-12T21:01:00+08:00
summary: "用离散语义动作单元把视觉语言模型直接连接到机器人控制器。"
tags: ["Embodied Harness", "VLM", "Robot Control"]
website: "https://showlab.github.io/Show-Harness/"
paper_title: "Show-Harness: Just a VLM Agent Can Play Robots"
project_url: "https://showlab.github.io/Show-Harness/"
paper_url: "https://arxiv.org/abs/2609.10522"
code_url: "https://github.com/showlab/Show-Harness"
model_url: "https://huggingface.co/showlab/Show-Harness-VLMs"
thumbnail: "images/embodied-harness/show-harness-overview.svg"
thumbnail_alt: "Show-Harness 通过语义动作接口连接视觉语言模型与机器人"
thumbnail_caption: "Show-Harness 官方系统概览图"
thumbnail_source: "https://showlab.github.io/Show-Harness/assets/images/overview.svg"
draft: false
---

Show-Harness 设计了一套紧凑的语义控制接口，让视觉语言模型输出离散的增量动作单元，再由针对具体机器人本体的解释器把这些动作落到实际控制空间。它既可直接使用前沿视觉语言模型进行零样本控制，也可微调较小的视觉语言模型，从而把高层视觉推理与不同机器人的底层执行连接起来。
