---
title: "FPO"
date: 2026-09-17T11:05:00+08:00
lastmod: 2026-09-17T11:05:00+08:00
summary: "用条件 Flow Matching 损失构造优势加权的策略优化比率，使流模型兼容 PPO-clip，无需精确计算动作似然。"
tags: ["Reinforcement Learning", "Flow Matching", "PPO", "Generative Policy"]
paper_title: "Flow Matching Policy Gradients"
website: "https://flowreinforce.github.io/"
project_url: "https://flowreinforce.github.io/"
paper_url: "https://arxiv.org/abs/2507.21053"
code_url: "https://github.com/akanazawa/fpo"
thumbnail: "images/reinforcement-learning/fpo-policy-gradient.svg"
thumbnail_alt: "官网展示的策略梯度与优势加权训练关系示意图"
thumbnail_caption: "FPO 官方项目页：策略梯度示意图"
thumbnail_source: "https://flowreinforce.github.io/assets/img/fpo/policy_grad.svg"
draft: false
---

Flow Matching Policy Gradients 提出 Flow Policy Optimization（FPO），将 Flow Matching 纳入在线同策略强化学习。它用条件 Flow Matching 损失构造优势加权的优化比率，兼容 PPO-clip 的裁剪框架，从而绕开流模型精确动作似然难以计算的问题。

训练沿着“策略采样—奖励与优势估计—优势加权 Flow Matching”循环进行。该方法不绑定特定扩散采样器或流积分方式，可从奖励出发训练连续控制策略，并保留多模态动作分布的表达能力；论文报告其在条件信息不足的控制场景中优于高斯策略。

## 阅读关注

用户关注：Flow Matching 在 PPO 中的梯度截断问题。本文的核心表述是构造兼容 PPO-clip 的替代优化目标，而非取消 PPO 的裁剪机制；可重点阅读损失比率与信赖域约束的设计。
