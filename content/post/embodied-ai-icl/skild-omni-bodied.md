---
title: "Skild Omni-Bodied：本体受限时的运动适应"
date: 2026-09-17T11:20:00+08:00
lastmod: 2026-09-17T11:20:00+08:00
summary: "Skild AI 展示机器狗在关节锁定、肢体变化和轮子卡住时，通过调整步态继续运动的表现。"
tags: ["Embodied AI ICL", "Robot Locomotion", "Cross-Embodiment"]
website: "https://www.skild.ai/blogs/omni-bodied"
project_url: "https://www.skild.ai/blogs/omni-bodied"
thumbnail: "images/embodied-ai-icl/skild-omni-bodied.png"
thumbnail_alt: "Skild 官网展示不同机器人本体、加装高跷和腿部受限机器狗的六格拼图"
thumbnail_caption: "Skild Omni-Bodied · 官方演示拼图"
thumbnail_source: "https://www.skild.ai/_next/static/media/locoformer.fe908b66.png"
draft: false
---

记录重点：**机器狗在本体受阻或运动能力受限时，如何调整运动方式继续行走。**

Skild AI 的官网文章《The case for an omni-bodied robot brain》（2025 年 9 月 24 日）介绍了跨本体机器人控制模型，展示同一模型面对不同身体形态及突发运动限制时的适应表现。按官网说明，这些演示未进行针对各场景的额外微调。

- **关节锁定／腿部受限**：膝关节被软件锁定后，机器狗重新分配承重、调整步态；轮足机器人也展示了部分腿部锁定后的运动。
- **肢体长度变化**：小腿缩短或加装高跷后，通过改变摆腿幅度、步频和落脚位置适应新的身体条件。
- **轮子卡住**：轮足机器人从滚动切换到迈步，轮子恢复后再切回滚动。

官网还展示了把前一次失败轨迹作为上下文、让后续尝试改善的例子，并将其描述为上下文学习（ICL）。因此归入 Embodied AI ICL，关注从近期交互经验适应身体变化的能力。以上为官方演示记录。
