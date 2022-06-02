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

### Operations

- addFirst(element: T): void
- addLast(element: T): void
- removeFirst(): T | null
- removeLast(): T | null
- get(index: number): T | null

### Complexity

Why bother with linked lists since there are already arrays? Although retrieving items from specific indexes on linked lists is O(n), deleting and inserting is O(1). Arrays sometimes need to be resized on insertion and deletes. Then a linked list can be useful in specific scenarios.

Retrieving can be improved if the searched index is verified to be closer to the beginning or the end of the list.

## Queue

Queues enforce that data is stored with a FIFO (first in first out) policy.

Queues are have 2 implementations here. One is made purely with nodes that point to each other, and the newest and oldest pointer are kept. The other is backed by a Linked List.

### Operations

- add(elem: T): void
- remove(): T | undefined
- peek(): T | undefined
- isEmpty(): boolean

### Complexity

All operations are O(1), with the exception of peek in the linked list backed implementation which is O(n) (can be optimized).

## Stack

The stack abstraction allows for placing elements and retrieving only the most recent, just as a real-world stack. The policy here is LIFO (last in first out)

### Operations

- pop(): T | undefined
- push(elem: T): void
- peek() : T | undefined
- isEmpty(): boolean

### Complexity

All operations are O(1).

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

### Operations

- insert
- find
- delete

#### Traversals

There are 3 orders for traversing a binary tree:

- in order: left nodes, current node, right nodes
- pre order: current node, left nodes, right nodes
- post order: left nodes, right nodes, current node

- Verify if:
  is binary search
  is complete
  is full
  is perfect

print tree representation

### Complexity

Insert and find will be O(log n) on balanced trees. Delete...?

Traversals are O(n) since they visit every node.

# Algorithms
