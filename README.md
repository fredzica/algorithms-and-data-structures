# algorithms-and-data-structures

![CI status](https://github.com/fredzica/algorithms-and-data-structures/actions/workflows/node.js.yml/badge.svg)

Algorithms and data structures in Typescript with unit test coverage.

Typescript has been a great choice for this project so far since it's a modern and powerful language with lightweight syntax. Also, static typing is nice to have when dealing with data structures since it makes expectations explicit at compile time, rendering the code easier to reason about.

# Data structures

## Linked List

A linked list is comprised of many nodes that have pointers to the next node, allowing the traversal of the list.

When the nodes also have a pointer to the previous node, we call it a doubly linked list. Otherwise, it's a singly linked list. If the last node has the first node as a next, and the first node has the last node as a previous (in the case of a doubly linked list), we are talking about a circular linked list.

The doubly linked list is implemented here.

### Operations

### Complexity

Why bother with linked lists since there are already arrays? Although retrieving items from specific indexes on linked lists is O(n), deleting and inserting is O(1). Arrays sometimes need to be resized on insertion and deletes. Then a linked list can be useful in specific scenarios.

## Queue

### Operations

### Complexity

## Stack

### Operations

### Complexity

## Tree

### Operations

### Complexity

# Algorithms
