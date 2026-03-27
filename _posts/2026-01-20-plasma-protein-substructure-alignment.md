---
layout: post
title: "PLASMA: Fast and Interpretable Protein Substructure Alignment via Optimal Transport"
date: 2026-01-20
description: A deep dive into PLASMA, a plug-and-play module that reframes protein substructure alignment as an optimal transport problem, achieving both speed and interpretability.
tags: protein-structure optimal-transport deep-learning ICLR
categories: research
thumbnail: https://i.imgur.com/n6PXuCV.png
related_posts: false
---

Understanding how proteins share local structural motifs is fundamental to deciphering their functions, evolutionary relationships, and potential as drug targets. Traditional structural alignment tools like TM-align or DALI are powerful but often operate at the global level, making it difficult to pinpoint fine-grained, residue-level correspondences between local substructures. In this post, I introduce **PLASMA** (**P**luggable **L**ocal **A**lignment via **S**inkhorn **MA**trix), a lightweight deep learning module that reframes protein substructure alignment as an optimal transport problem, published at **ICLR 2026**.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded" src="https://i.imgur.com/n6PXuCV.png" alt="PLASMA Overview">
    </div>
</div>
<div class="caption">
    Figure 1: PLASMA Overview. PLASMA converts residue-level protein embeddings into substructure alignments using optimal transport. A Transport Planner learns cost matrices with Sinkhorn iterations, and a Plan Assessor produces similarity scores.
</div>

## Why Local Substructure Alignment Matters

Proteins are not monolithic entities — they are composed of modular substructures such as binding sites, catalytic motifs, and conserved folds. Two proteins with low overall sequence or structural similarity may nonetheless share a critical functional motif. Identifying these shared local substructures is essential for functional annotation (especially for proteins of unknown function), understanding convergent evolution where unrelated proteins independently evolve similar active sites, and structure-based drug design where binding pocket similarity guides lead optimization.

However, most existing tools focus on global alignment or rely on hand-crafted geometric features. What if we could leverage the rich residue-level embeddings from modern protein language models (pLMs) to perform local alignment directly?

## The Key Idea: Alignment as Optimal Transport

PLASMA's central insight is elegant: **finding the best residue-level alignment between two protein substructures is equivalent to solving an optimal transport (OT) problem**. Given two proteins with residue-level embeddings (from any pre-trained pLM), we want to find a transport plan — a soft assignment matrix — that maps residues from one protein to corresponding residues in the other, minimizing the total "cost" of the mapping.

Concretely, PLASMA consists of two components. The **Transport Planner** takes residue embeddings from a pair of proteins and learns a cost matrix, then applies differentiable Sinkhorn iterations to compute an optimal transport plan (the alignment matrix). The **Plan Assessor** takes this transport plan and produces an interpretable similarity score that quantifies how well the two substructures match.

The beauty of the OT formulation is that it naturally handles partial and variable-length matches. Unlike global alignment methods that force a one-to-one mapping across entire structures, optimal transport can focus on the most relevant correspondences — exactly what we need for local substructure comparison.

## Plug-and-Play Design

One of PLASMA's most practical features is its plug-and-play architecture. PLASMA sits on top of *any* protein representation model — whether it is ESM-2, ProtTrans, ProstT5, or a geometric GNN — and requires only minimal fine-tuning (or even no training at all in the case of the PLASMA-PF variant). This means researchers can immediately enhance their existing protein representation pipelines with substructure alignment capabilities without retraining the underlying model.

**PLASMA-PF** (Parameter-Free) is a particularly appealing variant: it uses a cosine-similarity-based cost matrix and applies Sinkhorn normalization without any learned parameters. This provides a practical alternative when labeled alignment data is scarce, while still substantially outperforming naive cosine similarity baselines.

## Experiments on VenusX

We evaluated PLASMA extensively on the **VenusX** benchmark, which provides fine-grained functional annotations for protein structures. Across 7 backbone protein language models and 3 alignment tasks (motif detection, binding site matching, and active site identification), PLASMA demonstrated:

- **Consistent and significant improvement of +10–30% ROC-AUC** across all backbones and tasks, compared to baseline similarity methods.
- **ROC-AUC above 0.9** on low-similarity protein pairs, where traditional methods like cosine similarity and embedding-based alignment (EBA) deteriorate sharply.
- **Orders-of-magnitude speedup** over classical structural alignment tools, with inference times in the millisecond range rather than seconds per pair.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded" src="https://i.imgur.com/49ob7Uk.png" alt="Performance versus computational efficiency comparison">
    </div>
</div>
<div class="caption">
    Figure 2: Performance versus computational efficiency comparison. ROC-AUC scores plotted against inference time (milliseconds) for motif and binding/active site detection using ProstT5 embeddings.
</div>

The results highlight that PLASMA's OT-based framework is particularly strong at separating positive from negative pairs in challenging cases where proteins share local motifs but differ globally — precisely the scenario where naive global methods fail.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded" src="https://i.imgur.com/WsjFFUb.png" alt="Score distribution comparison">
    </div>
</div>
<div class="caption">
    Figure 3: Score distribution comparison between alignment methods. PLASMA and PLASMA-PF clearly separate positive and negative pairs compared to EBA and CosineSim, which show substantial overlap.
</div>

## Biological Case Studies

Beyond quantitative benchmarks, we validated PLASMA through three biological case studies demonstrating its practical utility. In each case, PLASMA's alignment matrices provided clear, interpretable visualizations of which residues correspond between protein pairs, enabling researchers to understand *why* two substructures are considered similar — not just *that* they are similar. This interpretability is a key advantage over black-box similarity scores.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded" src="https://i.imgur.com/bbnHIuN.jpeg" alt="Biological case studies">
    </div>
</div>
<div class="caption">
    Figure 4: Biological case studies. PLASMA's alignment matrices provide interpretable residue-level correspondences between protein substructures, revealing functional similarities invisible to global methods.
</div>

## Looking Forward

PLASMA opens up several exciting directions. Its lightweight, modular design means it can be integrated into large-scale protein function prediction pipelines, evolutionary analysis workflows, or virtual screening platforms with minimal overhead. As protein language models continue to improve, PLASMA can seamlessly benefit from richer embeddings without architectural changes.

The code and data are publicly available, and we hope PLASMA will serve as a useful tool for the structural biology and machine learning communities. If you are interested in the details, check out the full paper on [arXiv (2510.11752)](https://arxiv.org/abs/2510.11752).

---

*This blog post was generated with the assistance of Claude. For precise technical details, please refer to the [original paper](https://arxiv.org/abs/2510.11752).*
