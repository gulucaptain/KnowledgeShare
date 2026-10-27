---
title: "Diffusion Forcing"
paper_title: "Diffusion Forcing: Next-token Prediction Meets Full-Sequence Diffusion"
date: "2026-10-27T11:29:00+08:00"
lastmod: "2026-10-27T11:29:00+08:00"
summary: "以每个 token 独立的噪声水平训练扩散模型，结合因果下一 token 预测与整序列扩散的优势。模型可一次生成一个或多个未来 token，而无需完全扰动过去；支持超出训练长度的视频滚动生成，以及可变预测时域的采样、引导和决策规划。"
tags: ["Flow Matching"]
paper_url: "https://arxiv.org/abs/2407.01392"
project_url: "https://boyuan.space/diffusion-forcing"
website: "https://boyuan.space/diffusion-forcing"
thumbnail: "images/flow-matching/diffusion-forcing.jpg"
thumbnail_alt: "Diffusion Forcing 的论文方法或实验示意图"
thumbnail_caption: "Diffusion Forcing · Figure 1"
thumbnail_source: "https://arxiv.org/html/2407.01392v4/Capabilities.png"
draft: false
---

以每个 token 独立的噪声水平训练扩散模型，结合因果下一 token 预测与整序列扩散的优势。模型可一次生成一个或多个未来 token，而无需完全扰动过去；支持超出训练长度的视频滚动生成，以及可变预测时域的采样、引导和决策规划。

来源：[论文摘要与原文](https://arxiv.org/abs/2407.01392)。
