---
title: "Sim2Real-VLA"
paper_title: "Sim2Real VLA: Zero-Shot Generalization of Synthesized Skills to Realistic Manipulation"
date: "2026-10-22T14:08:00+08:00"
lastmod: "2026-10-22T14:08:00+08:00"
summary: "以规划器与执行器的双系统架构结合自动合成数据，让仿真训练的 VLA 操作技能零样本迁移到真实机器人。"
tags: ["Robot Agents & Manipulation", "Sim2Real", "Vision-Language-Action"]
paper_url: "https://openreview.net/pdf?id=H4SyKHjd4c"
project_url: "https://dexforce.com/news_detail.php?id=1236"
thumbnail: "images/robot-agents/sim2real-vla-architecture.webp"
thumbnail_alt: "Sim2Real-VLA 由可供性链规划、动作执行与验证组成的双系统架构"
thumbnail_caption: "Sim2Real-VLA · 作者团队公布的架构图"
thumbnail_source: "https://dexforce.com/ueditor/php/upload/image/20260324/1774333670712703.webp"
draft: false
---

Sim2Real-VLA 研究仅用合成数据训练的机器人操作模型如何迁移到真实环境。按作者团队公布的摘要，方法采用双系统：高层规划器预测可供性（affordance）链，低层执行器通过 token 化动作空间实时执行并验证计划，以减少无关视觉特征对迁移的干扰，突出操作所需的运动信息。

该方法将模型与操作技能的自动数据生成流程结合，面向可扩展训练和零样本仿真到现实迁移。团队介绍中报告了双手、灵巧及长时程任务的实验，但此处不补充未读取的具体指标。

来源：[作者团队发布的论文摘要与架构图](https://dexforce.com/news_detail.php?id=1236)。OpenReview PDF 当前触发访问验证，本条依据团队官方介绍整理，尚未直接核对 PDF 正文。
