# algorithms-and-data-structures

![CI status](https://github.com/fredzica/algorithms-and-data-structures/actions/workflows/node.js.yml/badge.svg)
![Test Coverage](https://api.codeclimate.com/v1/badges/c9a7e116c41f7ea2ade9/test_coverage)

Algorithms and data structures in Typescript with unit test coverage.

The implementations and concepts are for learning purposes. Reaching state-of-the-art and completeness is not the primary goal of this repository (maybe one day, who knows?). But of course suggestions and improvements are welcome.

The book Cracking The Coding Interview is being used as a guide for which algorithms/data structures/concepts should be studied.

Typescript has been a great choice for this project so far since it's a modern and powerful language with lightweight syntax. Also, static typing is nice to have when dealing with data structures since it makes expectations explicit at compile time, rendering the code easier to reason about.

# Data structures

## Linked List

A linked list is comprised of many nodes that have pointers to the next node, allowing the traversal of the list.

When the nodes also have a pointer to the previous node, we call it a doubly linked list. Otherwise, it's a singly linked list. If the last node has the first node as a next, and the first node has the last node as a previous (in the case of a doubly linked list), we are talking about a circular linked list.

The doubly linked list is implemented here.

Why bother with linked lists since there are already arrays? Although retrieving items from specific indexes on linked lists is O(n), deleting and inserting is O(1). Arrays sometimes need to be resized on insertion and deletes. Then a linked list can be useful in specific scenarios.

## Queue

Queues enforce that data is stored with a FIFO (first in first out) policy.

Queues are have 2 implementations here. One is made purely with nodes that point to each other, and the newest and oldest pointer are kept. The other is backed by a Linked List.

## Stack

The stack abstraction allows for placing elements and retrieving only the most recent, just as a real-world stack. The policy here is LIFO (last in first out)

## Tree

A Tree is comprised of a root node that can have children nodes. Those children nodes also can have children, and so on.

A Node is called a Leaf node if it doesn't have children.

### Classification

#### Binary Tree

Nodes in binary trees have at most 2 children. For now only the binary tree will be implemented in this project.

##### Balanced

A binary tree is balanced when its subtrees have the same size (or almost).

##### Binary Search Tree

A binary search tree implies an ordering on its elements. Every node must be greater or equal than its descendent nodes to its left and lesser than its descendent nodes to the right.

##### Complete Binary Tree

A binary tree is complete when all its levels (horizontal layers) are filled. Its last level may be not completely filled, but the existing nodes should be filled from the left to the right.

##### Full Binary Tree

A binary tree is full when all its nodes have zero or two children.

##### Perfect Binary Tree

A binary tree is perfect when it's both complete and full.

##### Trie

The Trie is normally used to store words. It enables easy checks for words with a prefix or the existence of words.
Its nodes can have any number of children, and its paths represent words.

##### Min Heap

A Min Heap is a complete binary tree where the child nodes are greater or equal than the parent node. This makes the root node the smallest node in the tree. It is used for implementing priority queues and in the heapsort algorithm.

#### Traversals

There are 3 orders for traversing a binary tree:

- in order: left nodes, current node, right nodes
- pre order: current node, left nodes, right nodes
- post order: left nodes, right nodes, current node

## Hash Table

The Hash Table enables mapping keys to values. Its biggest advantage is constant-time complexity for retrieving a value of a key. It works by keeping an array and mapping each new key to a value in that array, via a hash code function. Accessing the array by its index makes the constant-time search possible.
Its drawbacks are memory storage for keeping the entire array and possible collisions when storing the keys and values. If the collisions are too frequent, its runtime complexity becomes O(n). But, for the general use case, good hash table implementations are very useful and don't result in unintended behavior.

## Graph

A graph is a collection of nodes that can be connected to each other. The connections can be either unidirectional or bidirectional.
Trees are graphs, but not all graphs are trees. Cycles can exist in graphs.

# Algorithms

## Sorting

### Insertion sort

Insertion sort is a simple sorting algorithm that works by going through each item and inserting it in a subset of the array that is sorted.

### Selection sort

Selection sort is a simple sorting algorithm that goes through each item, selects the smallest value in the unsorted part of the array and swaps it with the current item.

### Mergesort

Merge sort works by recursively halving the array until they have only one element. Then it merges all those halves back in sorted order.

### Quicksort

Quicksort works by recursively partitioning the array into 2 parts: the left part is smaller than the pivot, and the right part is greater than the pivot. Then it recursively sorts the left and right parts.
