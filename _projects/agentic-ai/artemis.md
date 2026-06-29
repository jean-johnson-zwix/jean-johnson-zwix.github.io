---
featured: true
title: Artemis — AI-Powered Industrial Asset Monitor
badge: "⚡ Industrial AI"
color: pink
category: Agentic AI / LLM
highlight: "3-layer AI detection pipeline monitoring 96 offshore assets across 175 sensors in real time"
github: https://github.com/jean-johnson-zwix/aznn_hackazona_2026
demo: ""
image: "/assets/images/agentic-ai/artemis.png"
stack:
  - Python
  - FastAPI
  - Next.js 16
  - TypeScript
  - Azure OpenAI
  - PostgreSQL
  - Prisma
  - pgvector
  - Docker
  - MS Teams
  - Discord
  - Salesforce
tagline: "Real-time 3-layer AI pipeline monitoring 96 offshore assets"
order: 3
---

An AI-powered asset monitoring platform for offshore oil & gas, ingesting real-time readings from 96 assets and 175 sensors through a 3-layer pipeline. Layer 1 runs four pure detectors — threshold, Z-score, transmitter divergence, corrosion lifetime — handling 95.7% of readings without an LLM. Layer 2 gathers context via two-stage agentic RAG with PageIndex tree navigation (100% Recall@3 vs 33% for naive vector search). Layer 3 reasons with Azure OpenAI into structured, citation-backed insights delivered to a Next.js dashboard, MS Teams, and a Discord Q&A bot.
