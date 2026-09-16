---
title: "Bench2Dex"
date: 2026-09-16T20:05:00+08:00
lastmod: 2026-09-16T20:05:00+08:00
summary: "覆盖 12 种灵巧手、26 个双手操作任务与约 1,300 条示教的视触觉仿真基准，统一接触表征并评测策略泛化。"
tags: ["Robot Manipulation", "Dexterous Manipulation", "Visuo-Tactile", "Bimanual Manipulation", "Benchmark"]
website: "https://bench2dex.github.io/"
paper_title: "Bench2Dex: Benchmarking Visuo-Tactile Bimanual Dexterous Manipulation Across Dexterous Hands"
project_url: "https://bench2dex.github.io/"
paper_url: "https://arxiv.org/abs/2609.15726v1"
code_url: "https://github.com/Bench2Dex/Bench2Dex"
model_url: "https://modelscope.cn/datasets/Bench2Dex/policy_ckpt"
thumbnail: "images/dexterous-manipulation/bench2dex-overview.png"
thumbnail_alt: "Bench2Dex 概览：多模态采集、遥操作系统、域随机化及 12 种机器人本体"
thumbnail_caption: "Bench2Dex 官方基准概览图"
thumbnail_source: "https://bench2dex.github.io/assets/img/figures/overview.png"
aliases: ["/post/dexterous-manipulation/bench2dex/"]
draft: false
---

Bench2Dex 是基于 Isaac Lab 的双手灵巧操作仿真基准，面向不同手型、接触表面与传感器布局下的视触觉学习。它覆盖 12 种灵巧手、26 个涉及工具使用、关节物体交互和多阶段操作的任务，提供约 1,300 条人类遥操作示教。统一触觉接口把局部接触几何转换为图像式观测，与视觉、本体状态、动作和物体状态同步记录。

## 评测设计

- 提供可执行的任务成功和阶段进度指标，区分完整完成与有效的部分进展。
- 将七类扰动分成两组：背景、纹理、光照、相机位姿和干扰物考察动作应保持不变的鲁棒性；物体位姿和桌面高度考察动作需要随几何变化而调整的泛化能力。
- 对比 ACT、Diffusion Policy、π0.5 与 GR00T N1.5。无扰动匹配条件下，GR00T 成功率为 48.5%；组合扰动下，GR00T 与 π0.5 分别为 19.8% 和 19.7%，说明该设置中的泛化仍有明显空间。

## 使用边界

触觉观测是统一的仿真接触表征，不复现某款物理传感器的输出，也不能直接证明真实灵巧手上的视触觉迁移效果。上述数字对应论文 v1 的任务和采样条件；聚合成功率之外，还应比较任务级结果与阶段进度。

官方仓库提供训练、推理和遥操作代码，并链接到[遥操作数据集](https://modelscope.cn/datasets/Bench2Dex/teleopdata)及策略权重。
