---
featured: false
title: Agents World — Visual AI Hackathon
badge: "Computer Vision"
color: lavender
category: ML & Vision
highlight: "FiftyOne plugin combining real-time facial landmark detection with AI illusion image generation"
github: https://github.com/jean-johnson-zwix/agents_world_hackathon_project
demo: ""
image: "/assets/images/ml-vision/agents-world-hackathon.png"
stack:
  - Python
  - FiftyOne
  - MediaPipe
  - PyTorch
  - Diffusion Models
  - MongoDB
tagline: "FiftyOne plugin pairing facial landmarks with diffusion-generated illusions"
order: 20
---

A visual AI hackathon project built as a FiftyOne plugin that combines facial landmark detection with illusion image generation. The plugin (`@local/agents_world`) operates on the LFW faces dataset and supports two operators: annotating facial features (eyes, nose, mouth, face bounding boxes) using MediaPipe, and generating illusion images from a text prompt using diffusion models. Generated illusion samples are tagged and linked back to their source control image with metadata including ground truth identity labels, facial feature coordinates, and the illusion source sample ID.
