import { BinaryTreeNode, isCompleteTree } from './tree'

class MinHeap<T> {
  private _root?: BinaryTreeNode<T>

  public get root(): BinaryTreeNode<T> | undefined {
    return this._root
  }

  insert(node: T): void {}

  extractMinimum(): T | undefined {
    return this._root?.element
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

const isMinHeap = <T>(node: BinaryTreeNode<T>): boolean => {
  const isComplete = isCompleteTree(node)
  if (!isComplete) {
    return false
  }

  return checkMinHeap(node)
}

export { MinHeap, isMinHeap }
