# algorithms-and-data-structures

![CI status](https://github.com/fredzica/algorithms-and-data-structures/actions/workflows/node.js.yml/badge.svg)
![Test Coverage](https://api.codeclimate.com/v1/badges/c9a7e116c41f7ea2ade9/test_coverage)

Algorithms and data structures in Typescript with unit test coverage.

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

The stack abstraction allows for placing elements and retrieving only the most recent, just as a real-world stack.

### Operations

- pop(): T | undefined
- push(elem: T): void
- peek() : T | undefined
- isEmpty(): boolean

### Complexity

All operations are O(1).

## Tree

### Operations

### Complexity

# Algorithms
