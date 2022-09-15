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
    if (this.size == 0) {
      this.heap[0] = element
      this.size++
      return
    }

    this.heap[this.size] = element
    this.size++

    this.bubbleUp()
  }

  extractMinimum(): T | undefined {
    return this.heap[0]
  }

  toTreeRoot(): BinaryTreeNode<T> | undefined {
    if (this.size == 0) {
      return undefined
    }

    const root = { element: this.heap[0] }
    this.assignToTree(root, 0)

    return root
  }

  private assignToTree(node: BinaryTreeNode<T>, index: number): void {
    const leftIndex = index * 2 + 1
    const rightIndex = index * 2 + 2

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
      const parentIndex = Math.floor((index - 1) / 2)
      const parent = this.heap[parentIndex]

      if (element >= parent) {
        break
      }

      this.heap[parentIndex] = element
      this.heap[index] = parent
      index = parentIndex
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
