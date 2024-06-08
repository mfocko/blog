---
id: index
slug: /rank-balanced-trees/
title: Rank-Balanced Trees
description: |
  Explaining the rank-balanced trees. The web version of my bachelor thesis.
tags:
  - balanced trees
  - red-black trees
  - avl tree
  - wavl tree
last_update:
  date: 2024-06-08
---

Data structures have become a regular part of the essential toolbox for
problem-solving. In many cases, they also help to improve the existing
algorithms’ performance, e.g., using a priority queue in _Dijkstra’s algorithm_
_for the shortest path_. This thesis will mainly discuss the implementation of
a set.

Currently, the most commonly used implementations of sets use hash tables, but
we will talk about another common alternative, implementation via self-balancing
search trees. Compared to a hash table, they provide consistent time complexity,
but at the cost of a requirement for ordering on the elements. The most
implemented self-balancing binary tree is a _red-black tree_, as described by
_Guibas and Sedgewick_[^1]. Among other alternatives, we can find (non-binary)
_B-tree_[^2] and _AVL tree_[^3].

We will focus on the _Weak AVL_ (_WAVL_) _tree_[^4] that is a relaxed variant of
the AVL tree, but still provides better balancing than a red-black tree.

We will start by describing the AVL tree, then we will introduce the idea
of a _rank-balanced tree_. Given this insight we will be able to explore various
implementations of aforementioned trees using the rank-balanced tree. At the end
we will focus on the _Weak AVL tree_

[^1]: [A dichromatic framework for balanced trees.](https://doi.org/10.1109/SFCS.1978.3)
[^2]: [Organization and Maintenance of Large Ordered Indices.](https://doi.org/10.1145/1734663.1734671)
[^3]:
    ADELSON-VELSKIJ, Georgij; LANDIS, Evgenij. An algorithm for the
    organization of information. _Doklady Akad. Nauk SSSR._ 1962, vol. 146,
    pp. 263–266.

[^4]: [Rank-Balanced Trees](https://doi.org/10.1145/2689412)
