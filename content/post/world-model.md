---
title: "World Model"
date: 2026-09-12T19:32:00+08:00
lastmod: 2026-09-12T19:32:00+08:00
summary: "World Model 主题资料：用于机器人操作的多视角生成与潜空间规划工作。"
tags: ["World Model", "Multi-view Generation", "Robot Manipulation"]
draft: false
---

## DUET-DINO

*Simultaneous Cross-View World Modeling for Latent Planning in Robot Manipulation*

[项目网站](https://utn-air.github.io/DUET-DINO/) · [论文](https://arxiv.org/abs/2609.10506) · 记录于 2026-09-12

主题：**World Model** · **Multi-view Generation** · **Robot Manipulation**

DUET-DINO 是一种用于机器人操作的同步跨视角潜空间世界模型。它通过交叉视角条件，联合预测固定侧视相机和腕部相机的未来视觉表征，将全局场景信息与夹爪近景信息结合起来，从而在完整的 7-DoF 动作空间中进行零样本目标条件潜空间规划。

{{< project-image src="images/world-model/duet-dino-architecture.svg" alt="DUET-DINO 的侧视与腕部视角交叉条件世界模型架构" caption="DUET-DINO 官方模型架构图" source="https://utn-air.github.io/DUET-DINO/static/figures/DUET-DINO.svg" >}}

{{< website title="DUET-DINO" url="https://utn-air.github.io/DUET-DINO/" >}}
