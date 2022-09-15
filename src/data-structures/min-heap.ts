import { BinaryTreeNode, isCompleteTree } from './tree'

class MinHeap<T> {
  private heap: T[]
  private size = 0

  constructor(capacity: number) {
    this.heap = new Array(capacity)
  }

  min(): T | undefined {
    return this.heap[0]
  }

  insert(element: T): void {
    this.heap[this.size] = element
    this.size++

    this.bubbleUp()
  }

  extractMinimum(): T | undefined {
    if (this.size == 0) {
      return undefined
    }

    const min = this.heap[0]
    this.heap[0] = this.heap[this.size - 1]
    this.size--

    this.bubbleDown()

    return min
  }

  toTreeRepresentation(): BinaryTreeNode<T> | undefined {
    if (this.size == 0) {
      return undefined
    }

    const root = { element: this.heap[0] }
    this.assignToTree(root, 0)

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

  private assignToTree(node: BinaryTreeNode<T>, index: number): void {
    const leftIndex = this.getLeftChildIndex(index)
    const rightIndex = this.getRightChildIndex(index)

    if (leftIndex < this.size) {
      node.left = { element: this.heap[leftIndex] }
      this.assignToTree(node.left, leftIndex)
    }

    if (rightIndex < this.size) {
      node.right = { element: this.heap[rightIndex] }
      this.assignToTree(node.right, rightIndex)
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

const checkMinHeap = <T>(node: BinaryTreeNode<T>): boolean => {
  for (const child of [node.left, node.right]) {
    if (child) {
      if (node.element > child.element) {
        return false
      }

      if (!checkMinHeap(child)) {
        return false
      }
    }
  }

  return true
}

const isMinHeap = <T>(node: BinaryTreeNode<T> | undefined): boolean => {
  if (node == undefined) {
    return true
  }

  const isComplete = isCompleteTree(node)
  if (!isComplete) {
    return false
  }

  return checkMinHeap(node)
}

export { MinHeap, isMinHeap }
