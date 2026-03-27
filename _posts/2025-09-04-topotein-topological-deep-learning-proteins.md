---
layout: post
title: "Topotein: Why Proteins Need Topological Deep Learning"
date: 2025-09-04
description: Introducing Topotein, a framework that brings topological deep learning to protein representation learning through the Protein Combinatorial Complex and TCPNet.
tags: protein-structure topological-deep-learning GNN equivariance
categories: research
thumbnail: https://i.imgur.com/Uy6OHVH.jpeg
related_posts: false
---

Proteins are inherently hierarchical. Amino acid residues fold into secondary structures (helices, sheets, loops), which assemble into domains and ultimately into functional 3D architectures. Yet most current deep learning methods for protein structure analysis — whether sequence-based language models or geometric graph neural networks — represent proteins as flat sequences or simple residue-level graphs, ignoring this rich multi-scale organization. In this post, I introduce **Topotein**, a framework that bridges this gap by applying topological deep learning to protein representation learning. The paper is available on [arXiv (2509.03885)](https://arxiv.org/abs/2509.03885).

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded" src="https://i.imgur.com/Uy6OHVH.jpeg" alt="Topotein Framework Overview">
    </div>
</div>
<div class="caption">
    Figure 1: Overview of the Topotein framework. Given PDB protein structures, we construct Protein Combinatorial Complexes that hierarchically organize residues (rank-0), interactions (rank-1), secondary structures (rank-2), and complete proteins (rank-3). These multi-rank representations are processed by geometric topological neural networks like TCPNet.
</div>

## The Hierarchy Problem in Protein Representation

Consider how a protein actually works: a catalytic triad in a serine protease involves specific residues, but its function depends on the spatial arrangement of secondary structure elements that position those residues correctly. Capturing this requires reasoning across scales — from individual residues, through local structural elements, up to global fold topology.

Standard geometric GNNs treat proteins as graphs where nodes are residues and edges connect spatially close residue pairs. While effective, this representation fundamentally lacks the vocabulary to express higher-order structural relationships. A helix is not just a set of connected residues — it is a coherent structural unit with its own geometric properties. How do we teach a neural network to reason about these multi-scale structures?

## The Protein Combinatorial Complex (PCC)

Our answer is the **Protein Combinatorial Complex (PCC)**, a novel topological representation that organizes proteins into a hierarchy of cells at different ranks:

- **Rank 0 (nodes):** Individual residues, each carrying geometric features like coordinates and orientations.
- **Rank 1 (edges):** Pairwise interactions between residues — both local backbone connections and long-range spatial contacts.
- **Rank 2 (2-cells):** Secondary structure elements (SSEs) — helices, sheets, and loops — represented as higher-order cells that group their constituent residues.
- **Rank 3 (3-cells):** The complete protein, providing a global context cell.

The PCC is built on the mathematical framework of combinatorial complexes from algebraic topology, which generalizes graphs to include higher-dimensional cells with flexible membership relationships. Crucially, each cell at every rank carries its own geometric features, preserving SE(3)-equivariant information throughout the hierarchy.

## TCPNet: Topology-Complete Message Passing

Given the PCC representation, we need a neural network that can process information across all ranks simultaneously. This is where **TCPNet** (Topology-Complete Perceptron Network) comes in.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded" src="https://i.imgur.com/5AdCdq0.png" alt="Topological Neural Network Architecture">
    </div>
</div>
<div class="caption">
    Figure 2: Topological neural network architecture. The figure illustrates how information flows across ranks in a topological network compared to standard graph neural networks.
</div>

TCPNet performs **SE(3)-equivariant message passing** across the full hierarchy of the PCC. "Topology-complete" means that TCPNet implements message passing along *all* possible inter-rank pathways — residues inform secondary structures, secondary structures inform residues, and both communicate with the global protein representation. This bidirectional, cross-rank communication allows the network to capture dependencies that flat graph networks simply cannot express.

<div class="row mt-3">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img class="img-fluid rounded" src="https://i.imgur.com/g33qCv1.png" alt="Topology-Complete Perceptron">
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <img class="img-fluid rounded" src="https://i.imgur.com/dcfYIVB.png" alt="TCPNet Model Architecture">
    </div>
</div>
<div class="caption">
    Figure 3: Left — The Topology-Complete Perceptron (TCP) unit. Right — The full TCPNet model architecture showing how TCP layers are stacked with readout for downstream tasks.
</div>

The SE(3)-equivariance ensures that the learned representations respect the physical symmetries of protein structures: rotating or translating a protein in space does not change the network's predictions. This is achieved through geometric vector perceptrons that maintain separate scalar and vector channels throughout the message-passing process.

## Experimental Results

We evaluated Topotein on four protein representation learning tasks using the ProteinWorkshop benchmark:

**Fold Classification** is where Topotein truly shines. This task requires classifying proteins into 1,195 fold classes at varying levels of difficulty (Family, Superfamily, and Fold splits). TCPNet achieved the best performance across all splits, with a notable **~3% improvement on the challenging Fold split** compared to state-of-the-art geometric GNNs. This makes intuitive sense — fold classification fundamentally depends on recognizing arrangements of secondary structure elements, exactly the kind of multi-scale reasoning that PCC enables.

**Inverse Folding** involves predicting amino acid identities from structure alone (a node-level, 23-class classification task). TCPNet showed competitive performance, demonstrating that topological features complement traditional residue-level geometric information.

**Gene Ontology (Cellular Component)** prediction is a multi-label graph classification task that tests whether structural representations capture functional information. Topotein performed competitively, indicating that hierarchical structural features carry meaningful functional signals.

**Antibody Developability** prediction, a binary graph classification task, rounded out the evaluation. Across all four tasks, TCPNet consistently matched or outperformed existing geometric GNNs while providing richer, more interpretable structural representations.

## Why Topology Matters

The results on fold classification are particularly telling. When we strip away sequence information and rely purely on structure, the advantage of topological representations becomes most apparent. The Fold split — where train and test proteins share no fold-level similarity — is where graph-based methods struggle most and where TCPNet's ability to reason about SSE arrangements provides the largest gains.

This suggests that topological deep learning captures structural patterns that are fundamentally inaccessible to flat graph representations, validating the hypothesis that proteins' hierarchical organization is not just a biological fact but a computationally useful inductive bias.

## Code and Reproducibility

The full codebase, **TopoteinWorkshop**, is publicly available as an extension to the ProteinWorkshop framework. It includes implementations of TCPNet along with other topological architectures (GVP-TNN, ETNN), PCC featurization pipelines, and all experimental configurations. Check it out on [GitHub](https://github.com/ZW471/TopoteinWorkshop).

We hope Topotein inspires further exploration of topological deep learning in structural biology — there is much more to discover about how higher-order structural relationships can improve protein understanding.

---

*This blog post was generated with the assistance of Claude. For precise technical details, please refer to the [original paper](https://arxiv.org/abs/2509.03885).*
