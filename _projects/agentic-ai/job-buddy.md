---
featured: true
title: Job Buddy — Autonomous Job Search Agent
badge: "🤖 Agentic AI"
color: pink
category: Agentic AI / LLM
highlight: "Multi-phase autonomous agent with RAG and Gmail integration"
github: https://github.com/jean-johnson-zwix/job_buddy
demo: ""
image: "/assets/images/job_buddy_architecture.png"
stack:
  - Python
  - LangChain
  - Gemini 2.5 Flash
  - RAG
  - ChromaDB
  - PostgreSQL
  - Streamlit
  - Gmail API
  - Tavily AI
tagline: "Autonomous agent that scores job postings against my resume via RAG"
order: 1
---

A multi-phase autonomous job search agent built with LangChain and Gemini 2.5 Flash. It parses GitHub READMEs into a vectorized ChromaDB knowledge base of personal projects via RAG, scores incoming job postings against my resume, and uses Tavily AI to autonomously search and extract job descriptions from external career sites. Gmail and Google Drive APIs feed real job alerts and resume versions into the pipeline, PostgreSQL persists scored matches, and a Streamlit dashboard surfaces fit analysis with resume optimization tips for each posting — an automated review queue for the daily grind.
