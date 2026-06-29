---
featured: true
title: LLM Buddy - LLM Evaluation & Benchmarking Platform
badge: "MLOps"
color: sage
category: MLOps
highlight: "Automated LLM evaluation pipeline with live GCP leaderboard"
github: https://github.com/jean-johnson-zwix/llm_buddy
demo: "https://llm-benchmarker-dashboard-738128790851.us-central1.run.app"
image: "/assets/images/mlops/llm-buddy.png"
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
tagline: "Automated LLM benchmarking with chain-of-thought judging and live GCP leaderboard"
order: 1
---

An automated benchmarking pipeline that evaluates free-tier LLMs across coding, reasoning, summarization, and RAG tasks — replacing intuition-based model selection with reproducible, auditable data. The core engineering decision is the Chain-of-Thought judge: the judge model must cite a direct quote and identify gaps before scoring accuracy, clarity, and completeness, with every verdict traceable in a reasoning audit panel. The pipeline is instrumented end-to-end — per-model latency tracking revealed a 9× gap — with MLflow tracking, BigQuery storage, and a live leaderboard on GCP Cloud Run.
