---
title: "AV-ALOHA"
date: "2026-10-16T17:37:00+08:00"
lastmod: "2026-10-16T17:37:00+08:00"
summary: "通过额外的 7 自由度相机机械臂与 VR 遥操作采集示范，同时学习主动视角控制和双臂操作，在遮挡或视野受限的任务中改善模仿学习表现。"
tags: ["Robot Agents & Manipulation", "Active Vision"]
paper_title: "Active Vision Might Be All You Need: Exploring Active Vision in Bimanual Robotic Manipulation"
website: "https://lara-soltani.com/av-aloha/"
project_url: "https://lara-soltani.com/av-aloha/"
paper_url: "https://arxiv.org/abs/2409.17435"
code_url: "https://github.com/soltanilara/av-aloha"
thumbnail: "images/robot-agents/av-aloha.png"
thumbnail_alt: "AV-ALOHA 系统示意图：VR 遥操作、双臂操作机器人与搭载双目相机的主动视觉机械臂"
thumbnail_caption: "AV-ALOHA · 官方系统概览"
thumbnail_source: "https://lara-soltani.com/av-aloha/static/images/ActiveVisionSystemFigure.png"
draft: false
---

AV-ALOHA 在 ALOHA 2 双臂系统之外增加一条搭载双目相机的 7 自由度机械臂，让机器人主动调整视角，缓解固定相机造成的遮挡和视野限制。操作者通过 VR 头显接收第一人称立体画面，并用头部与身体运动控制相机位姿，同时操控双臂采集示范；机器人随后从示范中学习操作策略与主动视觉策略。

作者在真实环境和仿真中，以 ACT 策略比较不同相机配置，结果表明主动视觉在可见性受限、需要视角规划的任务中优于固定相机。论文于 2024 年 9 月首次提交，2025 年 3 月修订，发表于 ICRA 2025。其核心启发是将“看哪里”与“如何操作”共同纳入模仿学习。

来源：[论文摘要](https://arxiv.org/abs/2409.17435)与[官方项目页](https://lara-soltani.com/av-aloha/)。
