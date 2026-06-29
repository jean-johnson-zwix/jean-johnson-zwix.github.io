---
featured: false
title: Food Detection with YOLOv8
badge: "Computer Vision · Object Detection"
color: sage
category: MLOps
highlight: "mAP@0.5 = 0.659 · TensorRT FP16 optimized"
github: https://github.com/jean-johnson-zwix/food_detection
demo: ""
image: "/assets/images/mlops/food-detection.png"
video: "d4i9Wt9uG34"
stack:
  - Python
  - PyTorch
  - YOLOv8
  - TensorRT
  - OpenCV
tagline: "YOLOv8 fine-tuned on 100 food categories, exported to TensorRT FP16"
order: 6
---

Fine-tuned YOLOv8 on the UEC Food-100 dataset — 100 food categories with bounding boxes — to detect dishes in real-world photos, reaching mAP@0.5 = 0.659. The MLOps focus is the deployment path: the trained PyTorch model is exported to ONNX and compiled to a TensorRT FP16 engine, then benchmarked head-to-head against the ONNX baseline to quantify the latency gains of half-precision inference on GPU. Integrated with the Ultralytics workflow for serving predictions, the project covers the full journey from dataset processing and training to an optimized inference engine.
