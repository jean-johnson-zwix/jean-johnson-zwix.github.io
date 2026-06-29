---
featured: true
title: Job Search Buddy — Autonomous Daily Job Pipeline
badge: "🤖 Agentic AI"
color: pink
category: Agentic AI / LLM
highlight: "Autonomous LangGraph pipeline that scores, ranks, and delivers daily job matches"
github: https://github.com/jean-johnson-zwix/job_search_buddy
demo: ""
image: "/assets/images/job_search_buddy_architecture.png"
stack:
  - Python
  - LangGraph
  - Gemini Flash Lite
  - Groq
  - Supabase
  - Next.js
  - GitHub Actions
  - Google Drive API
  - Resend
tagline: "Daily LangGraph pipeline that fetches, scores, and emails top job matches"
order: 2
---

A fully autonomous job search agent built on a LangGraph StateGraph pipeline that
runs daily via GitHub Actions. It fetches live engineering roles from Greenhouse
and Ashby ATS APIs across 50+ companies, filters out non-US and irrelevant postings,
scores each job against my resume using a multi-provider LLM fallback chain
(Gemini → Groq → OpenRouter), and delivers a ranked digest to my inbox every morning.
A Next.js dashboard tracks applications, surfaces skill demand trends, and monitors
LLM token usage per pipeline run.
