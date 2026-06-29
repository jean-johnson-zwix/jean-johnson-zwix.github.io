---
featured: true
title: Six Eyes — MLOps Pipeline for AI Research Hype Prediction
badge: "MLOps"
color: sage
category: MLOps
highlight: "End-to-end MLOps pipeline predicting which Arxiv papers will trend — daily ingestion, monthly retraining, weekly drift reports"
github: https://github.com/jean-johnson-zwix/six-eyes
demo: ""
image: "/assets/images/mlops/six-eyes.png"
stack:
  - Go
  - Python
  - XGBoost
  - MLflow
  - Prefect
  - Optuna
  - Evidently
  - DVC
  - HuggingFace Hub
  - Supabase
  - GraphQL
  - Docker
  - GitHub Actions
tagline: "Predicts which Arxiv papers will trend — daily ingestion, monthly retraining, drift reports"
order: 2
---

An end-to-end MLOps pipeline that predicts which Arxiv ML papers will gain traction — GitHub stars crossing 100 within 60 days — and serves ranked predictions through a research digest API. A Go service ingests papers daily from Arxiv, Semantic Scholar, and HuggingFace; a monthly Prefect Cloud flow retrains an XGBoost model on a 230K-paper seed dataset with Optuna tuning and MLflow tracking on DagShub; exported models ship to HuggingFace Hub and are scored at query time by a Go GraphQL API on Render. Evidently drift reports publish weekly to GitHub Pages, with DVC versioning and Docker CI/CD.
