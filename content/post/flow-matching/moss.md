---
title: "MOSS"
paper_title: "MOSS: Mode-Oriented Source Shaping for Robot Flow Matching Policies"
date: "2026-10-17T15:30:00+08:00"
lastmod: "2026-10-17T15:30:00+08:00"
summary: "通过按行为模式塑造初始高斯噪声分布，将 Flow Matching 机器人策略中的随机模式采样变为可主动选择的行为控制。"
tags: ["Flow Matching", "Policy Learning", "Source Shaping"]
paper_url: "https://arxiv.org/abs/2610.22193"
project_url: "https://mmmmazr.github.io/moss"
website: "https://mmmmazr.github.io/moss"
thumbnail: "images/flow-matching/moss-overview.jpg"
thumbnail_alt: "MOSS 的多模式机器人任务、初始噪声分布自适应分离及模型架构"
thumbnail_caption: "MOSS · Figure 1 方法概览"
thumbnail_source: "https://arxiv.org/html/2610.22193v1/figure/teaser.png"
draft: false
---

MOSS（Mode-Oriented Source Shaping）研究同一机器人观测对应多种可行动作时，如何主动选择执行哪种行为。其核心是把行为模式编码到生成过程的初始噪声分布中，使模式选择转化为选择从哪个高斯分量采样，而不是完全交给随机采样。

论文从经验和理论上分析了 Flow Matching 的源空间结构：理想确定性 ODE 输运下，不同行为模式对应不同的源空间原像；但数据不平衡、模型容量有限和推理步数较少会模糊模式边界。MOSS 据此构造语义对齐的模式专属高斯源，并用局部多模态强度估计器调节分布几何：行为相似时收缩到共享高斯，接近行为分叉点时再拉开各模式的源分布。多个模式共享同一个流网络。

部署时，从目标模式对应的初始分布采样即可引导策略。论文在 6 个仿真和 3 个真实机器人操作任务上评估，报告目标模式引导率最高达到 100%；在 10:90 的不平衡数据下，少数模式引导率超过 90%。这些数值是论文在其任务设置下的结果，模式引导率与任务成功率是不同指标。

记录重点：**Flow Matching 的策略可控性不仅来自动作端条件，也可以通过设计和选择初始噪声源来实现。**

来源：[论文摘要与方法概述](https://arxiv.org/html/2610.22193)。
