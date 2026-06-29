---
featured: false
title: Compensation Buddy — MLP Salary Predictor
badge: "🧠 Deep Learning"
color: lavender
category: ML & Vision
highlight: "$14,897 MAE on 260K US government records"
github: https://github.com/jean-johnson-zwix/compensation_buddy
demo: "https://compensationbuddy.streamlit.app/"
image: "/assets/images/ml-vision/compensation-buddy.png"
video: "6iXYifCIAJQ"
stack:
  - Python
  - PyTorch
  - Pandas
  - NumPy
  - Streamlit
tagline: "PyTorch MLP predicting H1B salaries to $14.9K MAE on 260K records"
order: 7
---

A deep learning salary predictor trained on 259,936 certified H1B records from US Department of Labor disclosure data. Raw filings were cleaned into 82 engineered features — rule-based job title categorization, seniority extraction, employer tiering, metro classification, and a log1p transform for the skewed wage distribution. A PyTorch MLP with LayerNorm and GELU converges in ~20 epochs to a $14,897 MAE, performing best in the $75K–$200K range. Error analysis shows it underestimates earners above $200K because the dataset lacks years-of-experience. Served via a live Streamlit app.
