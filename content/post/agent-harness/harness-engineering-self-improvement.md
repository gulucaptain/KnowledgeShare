---
title: "Harness Engineering for Self-Improvement"
date: "2026-09-19T13:45:00+08:00"
lastmod: "2026-09-19T13:45:00+08:00"
summary: "Lilian Weng 梳理智能体运行框架如何通过工作流、记忆与评估反馈支持自我改进。"
tags: ["Agent Harness", "Self-Improvement"]
website: "https://lilianweng.github.io/posts/2026-07-04-harness/"
project_url: "https://lilianweng.github.io/posts/2026-07-04-harness/"
thumbnail: "images/agent-harness/coding-harness-loop.png"
thumbnail_alt: "编码智能体从观察仓库、规划、读写文件到测试及错误反馈的迭代流程"
thumbnail_caption: "Lilian Weng 博客：编码智能体工作流"
thumbnail_source: "https://lilianweng.github.io/posts/2026-07-04-harness/coding-harness-loop.png"
draft: false
---

Lilian Weng 在这篇 2026 年 7 月 4 日的博客中，将 harness 视为围绕基础模型组织执行、工具调用、上下文、持久化产物与评估的系统层。文章梳理工作流自动化、文件系统记忆、子智能体与后台任务等模式，并讨论优化目标从提示词、上下文和工作流逐步扩展到 harness 代码及优化器本身。

核心启发：自我改进也可以发生在模型外部，通过改进“如何获得并检验答案”的机制形成反馈循环；同时需要避免用过多启发式规则堆出脆弱系统。
