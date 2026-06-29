---
featured: false
title: Arm Code MCP — Arm64 Optimization for Coding Agents
badge: "AI Dev Tool"
color: pink
category: Agentic AI / LLM
highlight: "MCP server giving coding agents grounded Arm64 optimization tools — perf analysis, NEON intrinsics, dependency audits"
github: https://github.com/jean-johnson-zwix/arm-code-mcp
demo: ""
image: ""
stack:
  - Python
  - Model Context Protocol
  - Docker
  - NEON SIMD
  - Linux perf
tagline: "MCP server giving coding agents grounded Arm64 perf and NEON guidance"
order: 7
---

An MCP server that helps coding agents — Claude Code, GitHub Copilot, Codex — optimize Linux workloads on Arm64. It exposes three offline, structured tools: parsing perf report output into a ranked list of hot symbols, recommending NEON SIMD intrinsics for hot loops via hybrid semantic and keyword search over 110 curated intrinsics, and auditing requirements.txt, pyproject.toml, or Dockerfiles for packages lacking arm64 wheels. Ships as a Docker container with a curated knowledge base and evaluation harness, so agents give grounded Arm-specific guidance instead of hallucinated intrinsics.
