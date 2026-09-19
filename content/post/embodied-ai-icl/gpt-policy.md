---
title: "GPT-Policy"
date: "2026-09-19T13:45:00+08:00"
lastmod: "2026-09-19T13:45:00+08:00"
paper_title: "In-Context Robot Learning with VLM Agents"
summary: "通过上下文编译、VLM 动作提议与受约束控制，在不更新参数的情况下利用演示与反馈完成机器人任务。"
tags: ["Embodied AI ICL", "VLM Agents"]
website: "https://cheng-haha.github.io/GPT-Policy/"
project_url: "https://cheng-haha.github.io/GPT-Policy/"
paper_url: "https://arxiv.org/abs/2609.19138"
code_url: "https://github.com/cheng-haha/GPT-Policy"
thumbnail: "images/embodied-ai-icl/gpt-policy-overview.png"
thumbnail_alt: "GPT-Policy 将任务指令、当前观察、演示与交互历史组装为上下文，再由 VLM 提议并执行机器人工具动作"
thumbnail_caption: "GPT-Policy 论文 Figure 2：框架概览"
thumbnail_source: "https://arxiv.org/html/2609.19138v1/overview.png"
draft: false
---

GPT-Policy 探索通用 VLM 能否从演示、示例和交互反馈中获得任务信息，并从新的初始状态生成可执行、可验证的机器人行为，而不进行梯度更新或持续修改任务专用参数。框架由保留关键视觉变化的上下文编译器、提议工具动作的 VLM，以及验证并执行动作、返回结果的受约束控制器组成。

作者报告：真实机器人实验中，没有机器人动作标签的人类视频演示也能改善任务完成；对接触敏感任务，配对动作参考进一步带来收益。这里保留摘要层面的结论，不外推为已解决通用机器人适配。

**个人阅读备注：**“基于 VLM 的 in-context learning，占坑工作。”暂作关注与后续细读入口，不将这一评价视为论文已验证结论。
