import { BinaryTreeNode } from './tree'

class MinHeap<T> {
  private _root?: BinaryTreeNode<T>

  public get root(): BinaryTreeNode<T> | undefined {
    return this._root
  }

  insert(node: BinaryTreeNode<T>): void {}

  extractMinimum(node: BinaryTreeNode<T>): T {
    return node.element
  }
}

const isMinHeap = <T>(node: BinaryTreeNode<T>): boolean => {
  return false
}

export { MinHeap, isMinHeap }
