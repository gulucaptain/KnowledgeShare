---
title: "Zero-WAM"
date: 2026-09-12T20:52:00+08:00
lastmod: 2026-09-12T20:52:00+08:00
summary: "把人类视频作为上下文任务说明，实现开放任务上的零样本机器人控制。"
tags: ["Embodied AI ICL", "World-Action Model", "Human Video"]
website: "https://robbyant-research.github.io/Zero-WAM/"
paper_title: "Zero-WAM: In-Context World-Action Modeling from Human Videos for Open-Ended Task Generalization"
project_url: "https://robbyant-research.github.io/Zero-WAM/"
paper_url: "https://arxiv.org/abs/2608.26103"
code_url: "https://github.com/robbyant-research/Zero-WAM"
thumbnail: "images/embodied-ai-icl/zero-wam-framework.webp"
thumbnail_alt: "Zero-WAM 从人类演示视频到机器人动作生成的模型框架"
thumbnail_caption: "Zero-WAM 官方方法框架图"
thumbnail_source: "https://robbyant-research.github.io/Zero-WAM/static/images/paper/framework-v1.0.webp"
draft: false
---

Zero-WAM 是一个因果视频—动作模型，把一段人类演示视频直接作为上下文中的任务说明，再生成机器人动作。其训练数据包含 74.2K 组对齐的人类—机器人上下文样本，覆盖 8.6K 个任务，目标是在未见过的开放任务上实现无需参数更新的迁移。
