import { BinaryTreeNode } from './tree'

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

const isMinHeap = <T>(node: BinaryTreeNode<T>): boolean => {
  return false
}

export { MinHeap, isMinHeap }
