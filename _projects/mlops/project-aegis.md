---
featured: false
title: Project Aegis — Edge-to-Cloud Industrial Telemetry
badge: "IoT / Edge AI"
color: sage
category: MLOps
highlight: "AWS IoT SiteWise + Greengrass V2 telemetry platform with GenAI diagnostics on alarm — ~$10/mo"
github: https://github.com/jean-johnson-zwix/project_aegis
demo: ""
image: "/assets/images/mlops/project-aegis.png"
stack:
  - AWS IoT SiteWise
  - Greengrass V2
  - AWS Lambda
  - EventBridge
  - DynamoDB
  - Amazon Nova Lite
  - AWS CDK
  - MQTT
  - Docker
  - Python
tagline: "Edge-to-cloud IoT pipeline on AWS with GenAI diagnostics for ~$10/mo"
order: 8
---

An edge-to-cloud industrial telemetry platform simulating a data center CRAC cooling fleet on AWS IoT SiteWise and Greengrass V2. A Dockerized edge core validates Modbus sensor data, buffers offline readings in SQLite WAL for replay, and publishes over MQTTS into a four-level SiteWise asset hierarchy with transforms, metrics, and alarms. When an alarm fires, an EventBridge-driven Lambda gathers 30 minutes of telemetry and generates a structured AI diagnosis with Amazon Nova Lite into DynamoDB, with a cooldown to cap LLM spend. The full stack deploys via CDK for ~$10–12/month.
