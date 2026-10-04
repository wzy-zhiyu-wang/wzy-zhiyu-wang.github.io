---
layout: page
title: About
permalink: /about/
nav: true
nav_order: 1
description: My work across autonomous research agents and AI for biology and health.
---

#### Current

I am an ML Research Scientist at [Sapient Intelligence](https://www.sapient.inc/) in Beijing. I am developing **Praxist**, an autonomous AI-scientist framework with DAG-based execution lineage for reproducible solution provenance ([arXiv](https://arxiv.org/abs/2608.25955), [GitHub](https://github.com/sapientinc/PRAXIST)). On Karpathy's AutoResearch prompt, Praxist achieved roughly **30% higher performance at 10% of the cost** of Claude Code with Opus. If you find Praxist useful, please give it a star on [GitHub](https://github.com/sapientinc/PRAXIST)!

In 2026, I showcased Praxist at the [AI4 conference](https://ai4.io/) through live demonstrations and conversations with prospective customers and collaborators.

I am leading a joint project between Sapient and [Shanghai Jiao Tong University](https://en.sjtu.edu.cn/) (with Prof. Liang Hong) that applies Praxist to the [Virtual Cell Challenge 2026](https://virtualcellchallenge.org/): zero-shot prediction of single-cell responses to CRISPRi gene knockdowns. Our team is currently ranked **167th of 1,169 (top 15%)** on the preliminary leaderboard.

Since April 2026, I have been collaborating with [Prof. Jian Tang](https://jian-tang.com/) at [Mila](https://mila.quebec/en) on Bayesian optimization for auto-research systems, where a Gaussian process predicts which candidate solutions are worth expanding and Thompson sampling chooses the next experiment.

#### Research

Based at the [University of Cambridge](https://www.cam.ac.uk/) and collaborating with [Shanghai Jiao Tong University](https://en.sjtu.edu.cn/), I developed [PLASMA](https://arxiv.org/abs/2510.11752), an optimal-transport module for fast and interpretable protein substructure alignment. It improved ROC-AUC by 10–30% across seven protein language models on three datasets curated from InterPro (motifs, active sites, and binding sites), and was accepted as a poster at [ICLR 2026](https://iclr.cc/).

At Cambridge, I built [Topotein](https://arxiv.org/abs/2509.03885), a complete SE(3)-equivariant framework that adds a secondary-structure level to protein representations via a hierarchical hypergraph. This coarser-grained view gives a better global understanding of protein structure: it achieved the best SCOP fold classification accuracy (43.3%, vs. 38.4% for the same network without the hierarchy). I presented this work in an [invited talk](https://talks.cam.ac.uk/talk/index/234460) at Cambridge, and the project received the Department of Computer Science and Technology's **Highly Commended M.Phil Project Prize 2024–2025**.

I also built [MoRE-GNN](https://arxiv.org/abs/2510.06880), a heterogeneous graph autoencoder that learns relational graphs directly from single-cell RNA, protein, and ATAC data; it outperforms MOJITOO on BM-CITE and LUNG-CITE clustering and supports cross-modal prediction. With Prof. Hatice Gunes, I developed [GraphAU-Pain](https://arxiv.org/abs/2505.19802v2), presented at the IJCAI 2025 MiGA Workshop, and extended it into [GraphAU-Pain++](https://doi.org/10.1109/MCE.2026.3723599), a data-efficient AU-graph transfer learning framework published in _IEEE Consumer Electronics Magazine_.

At UCL, I collaborated with clinicians from UCL Hospital on readmission prediction using remote patient monitoring data. I developed a SQL-based data pipeline, performed clinical feature engineering, and built interpretable models with a ROC-AUC of 0.79 ± 0.03 and SHAP analysis.

#### Education

At the [University of Cambridge](https://www.cam.ac.uk/), I completed an M.Phil. in Advanced Computer Science with Distinction, **ranked 8th out of 60**. Courses included Geometric Deep Learning, Affective AI, Mobile & Wearable ML, NLP, and Multi-agent RL.

I graduated with First-Class Honors in B.Sc. Computer Science from [University College London](https://www.ucl.ac.uk/). Courses included Machine Learning, Computer Vision, Reinforcement Learning, Mathematics & Statistics, and Software Engineering.

#### Industry Experience

At [Xunfei Healthcare Technology](https://www.xunfeihealthcare.com/en/about.html), I built a knowledge-distillation pipeline using a teacher LLM to synthesize medical instruction examples, improving the [Xiaoyi](https://www.xunfeihealthcare.com/en/product/244.html) student model's instruction-following accuracy from 34% to 82% through supervised fine-tuning.

At [Luojin Data Information](https://pitchhub.36kr.com/project/2180550044503169), I developed a RAG pipeline with a MongoDB vector store and LangChain agents for automated financial-report classification, achieving 92% query-translation accuracy and a 97% entity-matching rate.

Through UCL's industrial collaboration program with the [NHS](https://www.nhs.uk/), I built a system that crawls a hospital's website and auto-generates a [homepage navigation agent](https://theailaboratory.wordpress.com/2023/03/25/the-ixn-nhs-ucl-and-ibm-ai-spell-out-how-to-transform-complex-data-into-meaningful-information/) that answers visitor questions and guides them to the right pages, cutting setup from weeks of manual development to 30 minutes. The project was demonstrated live at Great Ormond Street Hospital and presented to IBM, Microsoft, and Intel.

#### Academic Service

I am a reviewer for **NeurIPS 2026** and for the **AI4Science Workshops at NeurIPS 2025 and ICML 2026**. I was also a Programming Tutor at UCL in 2022–23.

#### Research Interests

I am interested in **AI agents**, **large language models**, **AI for biology and health**, and **geometric deep learning**. I welcome opportunities to collaborate on technically ambitious, high-impact work.

#### Technical Skills

**Machine Learning:** PyTorch, PyTorch Lightning, PyTorch Geometric, NumPy, Pandas, Scikit-learn

**Languages:** Python, JavaScript, Java, C++, R

**Research Infrastructure:** SLURM, Weights & Biases, TensorBoard
