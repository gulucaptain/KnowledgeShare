---
title: "AgenticGen"
date: 2026-09-16T20:53:00+08:00
lastmod: 2026-09-16T20:53:00+08:00
summary: "将广告视频生成拆为策略选择和草稿生成，用线上业务反馈与质量奖励优化两个推理阶段。"
tags: ["Advertising Video Generation", "ByteDance", "Agentic Generation", "Reinforcement Learning"]
paper_title: "AgenticGen: Reward-Guided Agentic Video Generation for Advertising"
paper_url: "https://arxiv.org/abs/2609.09187"
draft: false
---

AgenticGen 是一项面向广告视频生成的奖励引导智能体框架。本条按提供者的介绍，记录为字节跳动在广告与视频生成方向的研究进展。它把商品条件下的广告创作拆成可训练的策略选择与草稿生成两个推理阶段，用累积线上反馈学习业务表现奖励，同时引入符合人类质量标准的规则评价奖励。

优化流程先通过 DPO 对齐线上偏好，再用 GRPO 结合过程奖励与结果奖励改进两个阶段。论文摘要报告，在 TikTok 广告系统的线上 A/B 实验中，相对 SFT 基线，CTR、CVR 和 Advv 分别提升 2.72%、2.63% 和 9.61%。这些是论文报告的特定实验结果。
