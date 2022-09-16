import { BinaryTreeNode, isCompleteTree } from './tree'

/**
 * MinHeap is a complete binary tree where the value of each node
 * is less than or equal to the value of its parent.
 */
class MinHeap<T> {
  private heap: T[]
  private size = 0

  constructor(capacity: number) {
    this.heap = new Array(capacity)
  }

  /**
   * Retrieves the minimum value in the heap.
   * The runtime complexity is O(1).
   * The space complexity is O(1).
   * @returns The minimum value in the heap.
   */
  min(): T | undefined {
    return this.heap[0]
  }

  /**
   * Adds an element to the heap.
   * The runtime complexity is O(logn).
   * The space complexity is O(1).
   * @param element The element to add to the heap.
   */
  insert(element: T): void {
    this.heap[this.size] = element
    this.size++

    this.bubbleUp()
  }

  /**
   * Removes the minimum value from the heap.
   * The runtime complexity is O(logn).
   * The space complexity is O(1).
   * @returns The removed minimum value from the heap.
   */
  extractMinimum(): T | undefined {
    if (this.size === 0) {
      return undefined
    }

    const min = this.heap[0]
    this.heap[0] = this.heap[this.size - 1]
    this.size--

    this.bubbleDown()

    return min
  }

  /**
   * Creates a binary tree representation of the heap.
   * @returns A binary tree representation of the heap.
   */
  toTreeRepresentation(): BinaryTreeNode<T> | undefined {
    if (this.size === 0) {
      return undefined
    }

    const root = { element: this.heap[0] }
    this.createTree(root, 0)

    return root
  }

  private getLeftChildIndex(index: number): number {
    return 2 * index + 1
  }

  private getRightChildIndex(index: number): number {
    return 2 * index + 2
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2)
  }

  private createTree(node: BinaryTreeNode<T>, index: number): void {
    const leftIndex = this.getLeftChildIndex(index)
    const rightIndex = this.getRightChildIndex(index)

    if (leftIndex < this.size) {
      node.left = { element: this.heap[leftIndex] }
      this.createTree(node.left, leftIndex)
    }

    if (rightIndex < this.size) {
      node.right = { element: this.heap[rightIndex] }
      this.createTree(node.right, rightIndex)
    }
  }

  private bubbleUp(): void {
    let index = this.size - 1
    const element = this.heap[index]

    while (index > 0) {
      const parentIndex = this.getParentIndex(index)
      const parent = this.heap[parentIndex]

      if (element >= parent) {
        break
      }

      this.heap[parentIndex] = element
      this.heap[index] = parent
      index = parentIndex
    }
  }

  private bubbleDown(): void {
    let index = 0
    const element = this.heap[index]

    while (index < this.size) {
      const leftChildIndex = this.getLeftChildIndex(index)
      const rightChildIndex = this.getRightChildIndex(index)

      if (leftChildIndex > this.size) {
        break
      }

      if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
        this.heap[index] = this.heap[leftChildIndex]
        this.heap[leftChildIndex] = element
        index = leftChildIndex
      } else {
        this.heap[index] = this.heap[rightChildIndex]
        this.heap[rightChildIndex] = element
        index = rightChildIndex
      }
    }
  }
}

const isMinHeapRecursive = <T>(node: BinaryTreeNode<T>): boolean => {
  for (const child of [node.left, node.right]) {
    if (child) {
      if (node.element > child.element) {
        return false
      }

      if (!isMinHeapRecursive(child)) {
        return false
      }
    }
  }

  return true
}

/**
 * Checks if a binary tree respects the a min heap.
 * The runtime complexity is O(n).
 * The space complexity is O(1).
 * @param node The root node of the binary tree.
 */
const isMinHeap = <T>(node: BinaryTreeNode<T> | undefined): boolean => {
  if (node === undefined) {
    return true
  }

  const isComplete = isCompleteTree(node)
  if (!isComplete) {
    return false
  }

  return isMinHeapRecursive(node)
}

export { MinHeap, isMinHeap }
