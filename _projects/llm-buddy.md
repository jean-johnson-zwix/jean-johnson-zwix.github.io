---
featured: true
title: LLM Evaluation & Benchmarking Platform
badge: "MLOps"
color: blue
category: MLOps / GenAI
highlight: "Automated LLM evaluation pipeline with live GCP leaderboard"
github: https://github.com/jean-johnson-zwix/llm_buddy
demo: "https://llm-benchmarker-dashboard-738128790851.us-central1.run.app"
image: "/assets/images/llm_buddy_architecture.png"
stack:
  - Python
  - Gemini 2.5 Flash
  - LLaMA 4 Scout
  - Groq
  - MLflow
  - GCP BigQuery
  - Cloud Run
  - Docker
  - GitHub Actions
  - Streamlit
order: 1
---
LLM Buddy is an automated benchmarking pipeline that evaluates multiple LLMs across coding, 
reasoning, summarization, and RAG tasks using LLM-as-a-judge scoring. Buddy uses 
LLaMA 4 Maverick as an independent judge to score responses on accuracy, 
clarity, and completenessand tracks results in MLflow for experiment reproducibility and persist results to GCP BigQuery for long-term trend analysis. The solution also has automated weekly runs via GitHub Actions with GCP Workload Identity Federation and Live leaderboard deployed 
on GCP Cloud Run.