---
title: "IDSpect"
date: "2026-10-15T12:30:00+08:00"
lastmod: "2026-10-15T12:30:00+08:00"
summary: "针对图像生成中的中文错字，利用表意文字描述序列 IDS 将字符分解为部件及空间关系。训练专用识别器后，以 IDSpect 提供部件级结构奖励，并结合整字语义奖励进行 GRPO 后训练，改善文字结构和语义对齐，且不增加推理开销。"
tags: ["Image Synthesis"]
draft: false
paper_title: "Decompose Radicals, Then Reward: Fine-Grained Inspection for Accurate Chinese Text Rendering"
paper_url: "https://arxiv.org/abs/2609.37569"
thumbnail: "images/image-synthesis/idspect.jpg"
thumbnail_alt: "IDSpect 的论文方法或结果示意图"
thumbnail_caption: "IDSpect · 论文 Figure 1"
thumbnail_source: "https://arxiv.org/html/2609.37569v1/intro-layout.png"
---

针对图像生成中的中文错字，利用表意文字描述序列 IDS 将字符分解为部件及空间关系。训练专用识别器后，以 IDSpect 提供部件级结构奖励，并结合整字语义奖励进行 GRPO 后训练，改善文字结构和语义对齐，且不增加推理开销。

来源：[论文摘要](https://arxiv.org/abs/2609.37569)。
