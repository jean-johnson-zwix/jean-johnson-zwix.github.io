---
featured: false
title: Cloud Face Recognition — AWS Distributed Pipeline
badge: "Cloud / AWS"
color: sage
category: MLOps
highlight: "4-phase distributed face recognition pipeline on AWS — from EC2 autoscaling to IoT Greengrass edge inference"
github: https://github.com/jean-johnson-zwix/cloud_face_recognition
demo: ""
image: ""
stack:
  - Python
  - AWS Lambda
  - AWS EC2
  - AWS IoT Greengrass
  - AWS SQS
  - AWS SimpleDB
  - MTCNN
  - FaceNet
  - PyTorch
tagline: "4-phase AWS pipeline from EC2 autoscaling to IoT Greengrass edge inference"
order: 21
---

A four-phase AWS application for real-time face recognition from IoT video streams. Phase 1: a two-tier web/app architecture backed by SimpleDB. Phase 2: elastic EC2 autoscaling on the app tier serving a FaceNet recognition model. Phase 3: a serverless Lambda pipeline — MTCNN face detection feeding a recognition function. Phase 4: edge inference on AWS IoT Greengrass, where devices stream frames over MQTT to a Greengrass Core detection component, detected faces flow through SQS to the FaceNet Lambda, and results return to the device via a response queue.
