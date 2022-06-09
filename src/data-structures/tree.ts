interface BinaryTreeNode<T> {
  element: T
  parent?: BinaryTreeNode<T>
  left?: BinaryTreeNode<T>
  right?: BinaryTreeNode<T>
}

class BinarySearchTree<T> {
  private _root?: BinaryTreeNode<T>

  public get root(): BinaryTreeNode<T> | undefined {
    return this._root
  }

  /**
   * Inserts a new element into the tree. Inserts duplicates.
   *
   * The complexity is O(h), where h is the heigth of the tree.
   * @param element The element to be inserted
   */
  insert(element: T): void {
    if (!this._root) {
      this._root = { element }
      return
    }

    this.insertRecursion(element, this._root)
  }

  /**
   * Checks if an element exists on the tree.
   *
   * The complexity is O(h), where h is the heigth of the tree.
   * @param element The element to be checked
   */
  exists(element: T): boolean {
    return !!this.find(element)
  }

  /**
   * Deletes an element from the tree.
   *
   * The runtime complexity is O(h), where h is the heigth of the tree.
   * The space complexity is O(1).
   * @param element The element to be deleted
   * @returns True if the element was found and was deleted. False otherwise
   */
  delete(element: T): boolean {
    const node = this.find(element)
    if (!node) {
      return false
    }

    if (!node.left && !node.right) {
      // removing a leaf node
      if (node === node.parent?.left) {
        node.parent.left = undefined
      } else if (node === node.parent?.right) {
        node.parent.right = undefined
      }
      node.parent = undefined

      return true
    }

    const newNode = node.left
      ? this.findSubtreeMaximum(node.left)
      : this.findSubtreeMinimum(node.right)
    if (!newNode || !newNode.parent) {
      throw {
        message: 'Unexpected state: could not find a subtree maximum/minimum',
      }
    }
    // make the to-be-deleted node.element be newNode.element
    node.element = newNode.element

    // if node being deleted is the newNode's parent, it's enough to make its left or right subtree bubble up
    // otherwise, newNode's subtree must be correctly handled as below
    if (node.left) {
      if (newNode.left) {
        if (newNode.parent === node) {
          node.left = newNode.left
        } else {
          // if newNode has a left subtree (it won't have a right subtree)
          newNode.parent.right = newNode.left
          newNode.left = undefined
        }
      }
    } else if (node.right) {
      if (newNode.right) {
        if (newNode.parent === node) {
          node.right = newNode.right
        } else {
          // if newNode has a right subtree (it won't have a left subtree)
          newNode.parent.left = newNode.right
          newNode.right = undefined
        }
      }
    }
    newNode.parent = undefined

    return true
  }

  /**
   * Returns the maximum value in a subtree.
   *
   * The complexity is O(h), where h is the heigth of the tree.
   * The space complexity is O(1).
   * @param node the root node of the subtree
   */
  findSubtreeMaximum(node = this._root): BinaryTreeNode<T> | undefined {
    let current = node
    while (current?.right) {
      current = current.right
    }

    return current
  }

  /**
   * Returns the minimum value in a subtree.
   *
   * The complexity is O(h), where h is the heigth of the tree.
   * The space complexity is O(1).
   * @param node the root node of the subtree
   */
  findSubtreeMinimum(node = this._root): BinaryTreeNode<T> | undefined {
    let current = node
    while (current?.left) {
      current = current.left
    }

    return current
  }

  private insertRecursion(element: T, node: BinaryTreeNode<T>): void {
    if (element === node.element) {
      const newNode = { element, parent: node, left: node.left }
      node.left = newNode
    } else if (element > node.element) {
      if (node.right) {
        this.insertRecursion(element, node.right)
      } else {
        node.right = { element, parent: node }
      }
    } else if (element < node.element) {
      if (node.left) {
        this.insertRecursion(element, node.left)
      } else {
        node.left = { element, parent: node }
      }
    }
  }

  private find(element: T): BinaryTreeNode<T> | undefined {
    let current: BinaryTreeNode<T> | undefined = this.root

    while (current) {
      if (element === current.element) {
        return current
      } else if (element < current.element) {
        current = current.left
      } else if (element > current.element) {
        current = current.right
      }
    }

    return undefined
  }
}

const inOrderTraversal = <T>(
  node: BinaryTreeNode<T>,
  visit: (node: BinaryTreeNode<T>) => void,
) => {
  if (node.left) {
    inOrderTraversal(node.left, visit)
  }
  visit(node)
  if (node.right) {
    inOrderTraversal(node.right, visit)
  }
}

const preOrderTraversal = <T>(
  node: BinaryTreeNode<T>,
  visit: (node: BinaryTreeNode<T>) => void,
) => {
  visit(node)
  if (node.left) {
    preOrderTraversal(node.left, visit)
  }
  if (node.right) {
    preOrderTraversal(node.right, visit)
  }
}

const postOrderTraversal = <T>(
  node: BinaryTreeNode<T>,
  visit: (node: BinaryTreeNode<T>) => void,
) => {
  if (node.left) {
    postOrderTraversal(node.left, visit)
  }
  if (node.right) {
    postOrderTraversal(node.right, visit)
  }
  visit(node)
}

/**
 * Checks if a tree is a binary search tree.
 * A BST has all nodes n respecting this order: descendent nodes to its left <= n < descendent nodes to its right
 * @param node The root node of the tree to be checked
 * @returns True if the tree is a BST. False otherwise.
 */
const isBinarySearchTree = <T>(node: BinaryTreeNode<T>): boolean => {
  const elements: T[] = []

  // collecting elements
  inOrderTraversal(node, (n) => {
    elements.push(n.element)
  })

  // checking order
  for (let index = 1; index < elements.length; index++) {
    const current = elements[index]
    const previous = elements[index - 1]

    if (previous > current) {
      return false
    }
  }

  return true
}

/**
 * Recursively creates a map that contains each horizontal level of the tree.
 * @param node The root of the tree
 * @param map A mapping of each level and its elements, to be filled by this function
 * @param level The current level that is being traversed
 */
const treeLevelsMap = <T>(
  node: BinaryTreeNode<T> | undefined,
  map: Map<number, (undefined | T)[]>,
  level = 0,
) => {
  let levelElements = map.get(level)
  if (!levelElements) {
    levelElements = [node?.element]
  } else {
    levelElements.push(node?.element)
  }
  map.set(level, levelElements)

  if (node?.left || node?.right) {
    const nextLevel = level + 1
    treeLevelsMap(node?.left, map, nextLevel)
    treeLevelsMap(node?.right, map, nextLevel)
  }
}

/**
 * Checks if a tree is complete, which means all but the last level been filled
 * If the last level is not completely filled, it should be filled from left to right
 * @param node The root node of the tree to be checked
 * @returns True if the tree is complete. False otherwise.
 */
const isCompleteTree = <T>(node: BinaryTreeNode<T>): boolean => {
  const treeElements: Map<number, (undefined | T)[]> = new Map()
  treeLevelsMap(node, treeElements)

  const levels: number[] = []
  for (const key of treeElements.keys()) {
    levels.push(key)
  }

  // last level can have trailing undefineds, but none that precedes a node value
  const lastLevel = levels.pop()
  if (lastLevel) {
    const elements = treeElements.get(lastLevel)
    if (elements) {
      let foundUndefined = false
      for (const element of elements) {
        const currentIsUndefined = element === undefined
        if (currentIsUndefined) {
          foundUndefined = true
        }

        if (foundUndefined && !currentIsUndefined) {
          return false
        }
      }
    }
  }

  // the levels before the last level must not have undefineds or unproper lengths
  for (const level of levels) {
    const elements = treeElements.get(level)

    if (
      elements?.includes(undefined) ||
      elements?.length !== Math.pow(2, level)
    ) {
      return false
    }
  }

  return true
}

/**
 * Checks if the tree is full, i.e., if all nodes have either zero or two child nodes.
 * @param node The root of the tree to be checked
 * @returns True if the tree is full. False otherwise.
 */
const isFullTree = <T>(node: BinaryTreeNode<T>): boolean => {
  const isNodeFull = !!node.left === !!node.right

  if (!isNodeFull) {
    return false
  }

  if (node.left && node.right) {
    return isFullTree(node.left) && isFullTree(node.right)
  }

  return true
}

/**
 * Checks if the tree is full and complete.
 * @param node The root of the tree to be checked
 * @returns True if the tree is perfect. False otherwise.
 */
const isPerfectTree = <T>(node: BinaryTreeNode<T>): boolean => {
  return isCompleteTree(node) && isFullTree(node)
}

export {
  BinaryTreeNode,
  BinarySearchTree,
  inOrderTraversal,
  preOrderTraversal,
  postOrderTraversal,
  isBinarySearchTree,
  isCompleteTree,
  isFullTree,
  isPerfectTree,
}
