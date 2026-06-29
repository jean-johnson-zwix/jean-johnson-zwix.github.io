---
featured: true
title: Multimodal Sentiment Classifier
badge: "Multimodal ML · NLP + Vision"
color: lavender
category: ML & Vision
highlight: "Val Macro-F1: 0.63 on MVSA dataset"
github: https://github.com/jean-johnson-zwix/multimodal-sentiment-analysis
demo: ""
image: "/assets/images/ml-vision/multimodal-sentiment.png"
video: "fQ7b1QPJfOE"
stack:
  - Python
  - PyTorch
  - RoBERTa
  - ResNet-50
  - AWS
tagline: "Cross-modal attention fusing RoBERTa + ResNet-50 for tweet sentiment"
order: 4
---

A multimodal sentiment classifier built on the MVSA dataset using cross-modal attention and gated fusion. RoBERTa is fine-tuned as the text branch and ResNet-50 as the vision branch; their feature extractors are then plugged into a fusion head where text-guided visual attention and visual-guided textual attention let each modality query the other, and a learned gate decides how much to trust each. Trained on an AWS g5.xlarge, the fused model reaches 63.67% validation accuracy — beating the text-only (60%) and image-only (54%) unimodal baselines and validating the fusion design.
