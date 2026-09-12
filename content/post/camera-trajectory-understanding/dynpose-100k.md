---
title: "DynPose-100K"
date: 2026-09-12T20:57:00+08:00
lastmod: 2026-09-12T20:57:00+08:00
summary: "面向动态互联网视频的大规模相机位姿数据集与自动标注流程。"
tags: ["Camera Trajectory Understanding", "Camera Pose", "Dataset"]
website: "https://research.nvidia.com/labs/cosmos-lab/dynpose-100k/"
paper_title: "Dynamic Camera Poses and Where to Find Them"
project_url: "https://research.nvidia.com/labs/cosmos-lab/dynpose-100k/"
paper_url: "https://arxiv.org/abs/2504.17788"
thumbnail: "images/camera-trajectory-understanding/dynpose-collection.jpg"
thumbnail_alt: "DynPose-100K 动态视频采集流程"
thumbnail_caption: "DynPose-100K 官方数据采集流程图"
thumbnail_source: "https://research.nvidia.com/labs/cosmos-lab/dynpose-100k/assets/collection1.jpg"
draft: false
---

DynPose-100K 是一个为动态互联网视频标注相机位姿的大规模数据集。其数据流程先用通用视觉语言模型与专用模型筛选适合估计的视频，再结合点跟踪、动态区域掩码和运动恢复结构技术估计相机轨迹，为视频生成、仿真和相机运动研究提供训练数据。
