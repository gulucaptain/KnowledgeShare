---
title: "Branching Flows"
paper_title: "Branching Flows: Discrete, Continuous, and Manifold Flow Matching with Splits and Deletions"
date: 2026-10-15T10:23:00+08:00
lastmod: 2026-10-15T10:23:00+08:00
summary: "通过可学习的随机分裂与删除过程，将流匹配扩展到元素数量可变的生成任务，并兼容离散、连续及流形空间。"
tags: ["Flow Matching"]
paper_url: "https://arxiv.org/pdf/2511.09465"
thumbnail: "images/flow-matching/branching-flows-fig1.png"
thumbnail_alt: "Branching Flows 的分裂与删除轨迹，以及分子和蛋白质生成示例"
thumbnail_caption: "Branching Flows · Fig.1 图形摘要"
thumbnail_source: "https://arxiv.org/pdf/2511.09465#page=2"
draft: false
---

扩散模型和流匹配在状态中元素数量预先固定的生成任务（例如图像）中表现出潜力，但当大语言模型的回答长度、分子的原子数或蛋白质链的氨基酸数量事先未知时，通常需要专门设计的处理方案。

Branching Flows 是一种将简单分布输运到数据分布的生成建模框架。状态中的元素沿一片二叉树森林演化，并以模型学习到的速率随机分裂或消亡，使模型能够在生成过程中控制序列的元素数量。

该框架可以与离散集合、连续欧氏空间、黎曼流形，以及混合这些组成部分的多模态乘积空间上的任意流匹配基础过程组合。论文展示了小分子和抗体序列的分布匹配，并将方法扩展到蛋白质结构等复杂领域。

以上依据用户提供的论文摘要翻译整理。缩略图取自论文第 2 页 Figure 1。
