---
id: damagearbiter
short_title: DamageArbiter
title: DamageArbiter: A CLIP-Enhanced Multimodal Arbitration Framework for Hurricane Damage Assessment from Street-View Imagery
year: 2026
venue: arXiv Preprint
type: Preprint
status: Preprint
authors:
  - Yifan Yang
  - Lei Zou
  - Wenjing Gong
  - Kani Fu
  - Zongrong Li
  - Siqin Wang
  - Bing Zhou
  - Heng Cai
  - Hao Tian
themes:
  - Disaster Assessment
  - Multimodal Learning
  - Spatial Intelligence
methods:
  - CLIP
  - Multimodal Arbitration
  - Street-View Imagery
links:
  - label: Paper
    url: https://arxiv.org/abs/2603.14837
  - label: Code
    url: https://github.com/rayford295/DamageArbiter
  - label: Dataset
    url: https://doi.org/10.6084/m9.figshare.28801208.v2
  - label: Hugging Face
    url: https://huggingface.co/datasets/Rayford295/BiTemporal-StreetView-Damage
connections:
  - target: hyperlocal-disaster
    label: extends the practical damage assessment pipeline with stronger multimodal arbitration
  - target: disastervlp
    label: formalizes semantic damage reasoning into a robust framework
  - target: satellite-to-street
    label: pairs with generative work that can expand post-disaster street-view availability
repository:
  name: DamageArbiter
  url: https://github.com/rayford295/DamageArbiter
  preview: https://opengraph.githubassets.com/rayford-geograph/rayford295/DamageArbiter
  language: Python
  stars: 1
  forks: 1
  commits: 61
position:
  x: 705
  y: 255
color: "#0f1f34"
radius: 42
---

## Summary

Introduces a CLIP-enhanced multimodal arbitration framework for more reliable hurricane damage assessment from street-view imagery.

## Repository Snapshot

The companion repository includes code, dataset references, figures, slides, and the paper PDF. Its README frames the method as a disagreement-driven arbitration system that combines Vision Transformer and CLIP representations with LLM-generated textual annotations, then uses confidence-based arbitration to resolve cross-modal disagreement.

## Data and Study Area

The repository documents pre- and post-disaster street-view imagery from Horseshoe Beach, Florida after Hurricane Milton, with georeferenced annotations and mild, moderate, and severe damage labels. It links both the Figshare dataset record and the Hugging Face dataset release.

## Key Repository Assets

- `code/` for the model and analysis workflow.
- `dataset/` for data organization references.
- `figure/` for paper and presentation visuals.
- `slides/` for public presentation materials.

## Recognition

The repository records acceptance at the AAG Annual Meeting 2026 GIS Specialty Group Student Honors Paper Competition award session.

## Impact

This paper consolidates the disaster branch into a more trustworthy and explainable multimodal system, making the research narrative clearer and more mature.

## Chinese Summary

这个作品把街景灾害损伤评估从单一模型预测推进到多模态仲裁。它利用 ViT、CLIP 和 LLM 生成的文本标注来发现并处理跨模态不一致，让模型输出更可解释，也更适合灾后快速评估场景。
