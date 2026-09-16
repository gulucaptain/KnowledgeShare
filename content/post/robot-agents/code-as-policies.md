---
title: "Code as Policies"
date: 2026-09-12T21:36:00+08:00
lastmod: 2026-09-12T21:36:00+08:00
summary: "让代码语言模型把自然语言指令直接转化为可执行机器人策略程序。"
tags: ["Robot Agents", "Code-As-Policy", "Language Model Program", "Embodied Control"]
website: "https://code-as-policies.github.io/"
paper_title: "Code as Policies: Language Model Programs for Embodied Control"
project_url: "https://code-as-policies.github.io/"
paper_url: "https://arxiv.org/abs/2209.07753"
code_url: "https://github.com/google-research/google-research/tree/master/code_as_policies"
thumbnail: "images/code-as-policy/code-as-policies-share.png"
thumbnail_alt: "Code as Policies 通过语言模型生成机器人策略代码"
thumbnail_caption: "Code as Policies 官方项目展示图"
thumbnail_source: "https://code-as-policies.github.io/img/share_image.png"
aliases: ["/post/code-as-policy/code-as-policies/"]
draft: false
---

Code as Policies 是早期将代码语言模型用于具身控制的代表性工作。它通过少样本提示把自然语言命令转化为调用感知与控制 API 的策略代码，并用递归生成补全未定义函数，使程序能够表达空间推理、反馈循环、轨迹和阻抗控制，在多种真实机器人平台上组合执行新指令。
