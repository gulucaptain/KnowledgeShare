---
title: "VT-WM"
date: 2026-09-12T21:37:00+08:00
lastmod: 2026-09-12T21:37:00+08:00
summary: "融合外部视觉和触觉观测，为接触密集操作预测更符合物理规律的未来状态。"
tags: ["World Model", "Visuo-Tactile", "Contact-Rich Manipulation"]
website: "https://carolinahiguera.github.io/vtml/"
paper_title: "Visuo-Tactile World Models"
project_url: "https://carolinahiguera.github.io/vtml/"
paper_url: "https://arxiv.org/abs/2602.06001"
thumbnail: "images/world-model/visuo-tactile-world-model-diagram.jpg"
thumbnail_alt: "视触觉世界模型融合视觉和触觉潜变量预测下一状态"
thumbnail_caption: "VT-WM 官方模型架构图"
thumbnail_source: "https://carolinahiguera.github.io/vtml/static/media/images/vtwm_block_diagram.jpg"
draft: false
---

VT-WM 把外部相机视觉与指尖触觉编码成潜变量，再结合控制动作自回归预测下一时刻的视觉和触觉状态。触觉信号为遮挡和接触状态提供物理约束，使模型在长期想象中更好地保持物体恒常性和运动规律，并可作为 CEM 规划器中的模拟器，在零样本真实机器人接触密集任务上提升成功率。
