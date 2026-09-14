---
title: "Pink"
date: 2026-09-14T14:23:00+08:00
lastmod: 2026-09-14T14:23:00+08:00
summary: "基于 Pinocchio 与二次规划求解器，将多个操作目标转化为受约束机器人速度的 Python 差分逆运动学库。"
tags: ["Robot Manipulation", "Inverse Kinematics", "Quadratic Programming"]
website: "https://pink-kinematics.github.io/pink/"
project_url: "https://pink-kinematics.github.io/pink/"
code_url: "https://github.com/pink-kinematics/pink"
thumbnail: "images/robot-manipulation/pink-banner.png"
thumbnail_alt: "Pink 项目横幅，展示 Pink 名称与多种机器人模型"
thumbnail_caption: "Pink 官方项目横幅"
thumbnail_source: "https://user-images.githubusercontent.com/1189580/192318997-ed7574c3-8238-451d-9548-a769d46ec03b.png"
draft: false
---

Pink 是基于 Pinocchio 的 Python 差分逆运动学库，用于将机械臂等关节机器人的末端位姿、姿态和关节姿态等操作目标转化为可执行的关节速度。它允许为多个任务设置不同权重，并将任务冲突、关节构型限制和速度限制统一写入二次规划问题；持续积分求得的速度即可让机器人跟踪固定或动态更新的目标。项目提供 UR5、Panda、双臂、移动机器人与人形机器人等示例，适合作为机器人操作执行层中的运动学求解工具。
