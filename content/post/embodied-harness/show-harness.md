---
title: "Show-Harness"
date: 2026-09-12T21:01:00+08:00
lastmod: 2026-09-16T19:38:00+08:00
summary: "以离散语义动作和闭环反馈让 VLM 直接控制机器人，支持零样本部署、轻量微调与 GUI 示教。"
tags: ["Embodied Harness", "Code-As-Policy", "VLM", "Robot Control"]
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

Show-Harness 由新加坡国立大学 Show Lab 提出，将机器人控制组织为“观察—推理—动作—反馈”闭环。VLM 读取多视角图像、本体状态与交互历史，选择移动、旋转、抓取等离散语义动作；机器人专用解释器将其映射为受工作空间约束的小步运动。动作方向和步长由接口约定与解释器确定。

## 与 Code-as-Policy 的关系

两者都通过可解释接口连接基础模型与机器人。Code-as-Policy 通常生成调用感知和控制 API 的程序；本文主要让 VLM 逐步选择语义动作符号，并根据执行反馈修正决策。其主要贡献在于语义动作接口及其物理执行方式。

## 方法与结果

- 同一动作接口支持前沿 VLM 零样本控制与小型开源 VLM 轻量微调；规划、动作历史和失败恢复等模块提供控制上下文。
- GUMI 将动作单元映射为 GUI 操作，让人类和智能体无需专用遥操作设备即可采集示教。
- 论文跨任务实验包含 10 项任务、每项 10 次试验：零样本与微调版本平均成功率分别为 89% 和 86%，最高基线为 57%；跨本体实验分别为 93% 和 87%。结果仅对应论文设置。

## 局限与阅读重点

当前验证主要覆盖配备平行夹爪的单臂和双臂操作，向灵巧手、人形机器人等复杂本体的扩展仍待验证。阅读时重点关注语义动作的粒度、解释器如何落到物理控制，以及闭环反馈与代码生成策略之间的取舍。
