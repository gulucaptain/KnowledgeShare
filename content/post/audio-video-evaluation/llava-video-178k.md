---
title: "LLaVA-Video-178K"
date: 2026-09-12T20:50:00+08:00
lastmod: 2026-09-12T20:50:00+08:00
summary: "包含视频描述、开放问答和选择问答的大规模视频指令数据集，可作为音视频评测的候选视觉数据源。"
tags: ["Audio-Video Evaluation", "Video Dataset", "Video Understanding"]
website: "https://llava-vl.github.io/blog/2024-09-30-llava-video/"
project_url: "https://llava-vl.github.io/blog/2024-09-30-llava-video/"
paper_url: "https://arxiv.org/abs/2410.02713"
code_url: "https://github.com/LLaVA-VL/LLaVA-NeXT"
model_url: "https://huggingface.co/datasets/lmms-lab/LLaVA-Video-178K"
thumbnail: "images/audio-video-evaluation/llava-video-178k-distribution.jpg"
thumbnail_alt: "LLaVA-Video-178K 在不同视频来源和任务类型上的数据分布"
thumbnail_caption: "LLaVA-Video-178K 官方数据分布图"
thumbnail_source: "https://llava-vl.github.io/blog/2024-09-30-llava-video/static/images/dataset-distribution.jpg"
draft: false
---

LLaVA-Video-178K 是面向视频指令跟随的合成视频—语言数据集，对应论文 *LLaVA-Video: Video Instruction Tuning With Synthetic Data*。官方资料列出 178,510 条视频描述、960,792 条开放式问答和 196,198 条选择题问答，覆盖详细描述、视频理解与推理等任务。

## 用途记录

可作为 Audio-Video 评测工作的候选视觉理解数据源。官方数据卡将其模态标记为视频和文本；使用前需要根据具体评测设计确认原始视频是否保留所需音轨，以及是否具备相应的音频标注。
