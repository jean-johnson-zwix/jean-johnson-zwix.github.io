---
featured: false
title: Loan Rate Predictor — AWS MLOps Pipeline
badge: "MLOps"
color: sage
category: MLOps
highlight: "End-to-end SageMaker pipeline with drift monitoring and auto-retraining"
github: https://github.com/jean-johnson-zwix/loan_rate_predictor
demo: "https://jean-johnson-zwix.github.io/loan_rate_predictor/user-dashboard/"
stack:
  - Python
  - AWS SageMaker
  - Terraform
  - Evidently
  - CloudWatch
  - SNS
  - Lambda
  - API Gateway
  - MLflow
tagline: "SageMaker pipeline with drift monitoring and auto-retraining on mortgage data"
order: 20
---

An AWS-managed MLOps project predicting mortgage rate spread (APR minus APOR) on Arizona HMDA data from 2021–2024. A SageMaker XGBoost model is tuned via Bayesian AMT, versioned in Model Registry, and tracked with managed MLflow. Evidently generates per-feature drift reports and model-quality metrics across yearly vintages; when degradation crosses thresholds, CloudWatch alarms fire actionable SNS emails. A champion/challenger retraining loop promotes new models only when they close the accuracy gap on held-out eval slices. Two serving modes — batch transform for ops scoring and a Lambda-backed serverless endpoint behind API Gateway for a live pricing API — plus static ops and pricing dashboards on GitHub Pages. All infrastructure is Terraform-managed.
