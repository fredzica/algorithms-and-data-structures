import {
  BinarySearchTree,
  BinaryTreeNode,
  inOrderTraversal,
  isBinarySearchTree,
  isCompleteTree,
  isFullTree,
  isPerfectTree,
  postOrderTraversal,
  preOrderTraversal,
} from '../../src/data-structures/tree'
import { fixtures } from '../fixtures/tree'

describe('Tree algorithms tests', () => {
  const testTraversal = <T>(expectedElements: T[], node: BinaryTreeNode<T>) => {
    expect(node.element).toEqual(expectedElements.shift())
  }
  it('Should traverse a tree in order', () => {
    const expectedElements = [2, 1, 4, 3, 5, 0, 6, 7]
    inOrderTraversal(fixtures.traversalTestsRoot, (node) =>
      testTraversal(expectedElements, node),
    )
  })

  it('Should traverse a tree pre order', () => {
    const expectedElements = [0, 1, 2, 3, 4, 5, 6, 7]
    preOrderTraversal(fixtures.traversalTestsRoot, (node) =>
      testTraversal(expectedElements, node),
    )
  })

  it('Should traverse a tree post order', () => {
    const expectedElements = [2, 4, 5, 3, 1, 7, 6, 0]
    postOrderTraversal(fixtures.traversalTestsRoot, (node) =>
      testTraversal(expectedElements, node),
    )
  })

  it('Should check if a tree is full', () => {
    expect(isFullTree(fixtures.oneElement)).toBe(true)
    expect(isFullTree(fixtures.perfect2Levels)).toBe(true)
    expect(isFullTree(fixtures.perfect3Levels)).toBe(true)

    expect(isFullTree(fixtures.onlyLeft)).toBe(false)
    expect(isFullTree(fixtures.onlyRight)).toBe(false)
    expect(
      isFullTree({
        element: 0,
        left: {
          element: 1,
          left: { element: 2 },
          right: {
            element: 3,
            left: { element: 4 },
            right: { element: 5 },
          },
        },
        right: {
          element: 6,
          right: { element: 7 },
        },
      }),
    ).toBe(false)
  })

  it('Should check if a tree is complete', () => {
    expect(isCompleteTree(fixtures.oneElement)).toBe(true)
    expect(isCompleteTree(fixtures.perfect2Levels)).toBe(true)
    expect(isCompleteTree(fixtures.perfect3Levels)).toBe(true)
    expect(isCompleteTree(fixtures.onlyLeft)).toBe(true)
    expect(isCompleteTree(fixtures.complete)).toBe(true)

    expect(isCompleteTree(fixtures.onlyRight)).toBe(false)
    expect(
      isCompleteTree({
        element: 0,
        left: {
          element: 1,
          left: { element: 2 },
          right: {
            element: 3,
            left: { element: 4 },
            right: { element: 5 },
          },
        },
        right: {
          element: 6,
          right: { element: 7 },
        },
      }),
    ).toBe(false)

    expect(
      isCompleteTree({
        element: 3,
        left: {
          element: 1,
          left: {
            element: 4,
            left: { element: 10 },
            right: { element: 6 },
          },
          right: {
            element: 2,
            left: { element: 8 },
            right: {
              element: 7,
              left: { element: 11 },
              right: { element: 9 },
            },
          },
        },
        right: {
          element: 6,
          right: { element: 7 },
        },
      }),
    ).toBe(false)

    expect(
      isCompleteTree({
        element: 2,
        left: {
          element: 1,
          left: {
            element: 3,
            left: {
              element: 4,
              left: { element: 6 },
              right: {
                element: 10,
                right: { element: 11 },
              },
            },
          },
        },
        right: {
          element: 5,
          left: { element: 7 },
          right: {
            element: 8,
            right: { element: 9 },
          },
        },
      }),
    ).toBe(false)
  })

  it('Should check if a tree is perfect', () => {
    expect(isPerfectTree(fixtures.perfect2Levels)).toEqual(true)
    expect(isPerfectTree(fixtures.perfect3Levels)).toEqual(true)
    expect(isPerfectTree(fixtures.oneElement)).toEqual(true)

    expect(isPerfectTree(fixtures.traversalTestsRoot)).toEqual(false)
    expect(isPerfectTree(fixtures.onlyLeft)).toEqual(false)
  })

  it("Should check if it's a binary search tree", () => {
    expect(isBinarySearchTree(fixtures.oneElement)).toEqual(true)
    if (!fixtures.bst.root) {
      fail()
    }
    expect(isBinarySearchTree(fixtures.bst.root)).toEqual(true)

    expect(isBinarySearchTree(fixtures.almostBst)).toEqual(false)
    expect(isBinarySearchTree(fixtures.traversalTestsRoot)).toEqual(false)
    expect(isBinarySearchTree(fixtures.complete)).toEqual(false)
    expect(isBinarySearchTree(fixtures.onlyLeft)).toEqual(false)
    expect(isBinarySearchTree(fixtures.perfect3Levels)).toEqual(false)
  })

  it('Should properly create a binary search tree', () => {
    const bst = new BinarySearchTree()
    bst.insert('g')
    bst.insert('y')
    bst.insert('t')
    bst.insert('c')
    bst.insert('b')
    bst.insert('9')
    bst.insert('o')
    bst.insert('b')
    bst.insert('p')
    bst.insert('z')
    bst.insert('l')
    bst.insert('a')
    bst.insert('5')

    if (!bst.root) {
      fail('bst.root should be present')
    }
    expect(isBinarySearchTree(bst.root)).toEqual(true)
  })

  it('Should correctly search for elements in a BST', () => {
    const tree = fixtures.bst

    expect(tree.exists('z')).toEqual(true)
    expect(tree.exists('o')).toEqual(true)
    expect(tree.exists('5')).toEqual(true)

    expect(tree.exists('i')).toEqual(false)
    expect(tree.exists('1')).toEqual(false)
  })

  it('Should correctly find the maximum value in a BST subtree', () => {
    const tree = fixtures.bst

    expect(tree.findSubtreeMaximum()?.element).toEqual('z')
  })

  it('Should correctly find the minimum value in a BST subtree', () => {
    const tree = fixtures.bst

    expect(tree.findSubtreeMinimum()?.element).toEqual('3')
  })

  it('Should correctly delete elements in a BST', () => {
    const tree = new BinarySearchTree()
    tree.insert('g')
    tree.insert('y')
    tree.insert('t')
    tree.insert('c')
    tree.insert('b')
    tree.insert('9')
    tree.insert('o')
    tree.insert('n')
    tree.insert('5')
    tree.insert('b')
    tree.insert('p')
    tree.insert('z')
    tree.insert('l')
    tree.insert('3')
    tree.insert('a')
    tree.insert('t')
    tree.insert('m')
    tree.insert('r')
    tree.insert('s')

    expect(tree.delete('z')).toEqual(true)
    expect(tree.exists('z')).toEqual(false)

    expect(tree.delete('o')).toEqual(true)
    expect(tree.exists('o')).toEqual(false)

    expect(tree.delete('c')).toEqual(true)
    expect(tree.exists('c')).toEqual(false)

    expect(tree.delete('b')).toEqual(true)
    expect(tree.exists('b')).toEqual(true) // there are two b's in the bst

    expect(tree.delete('5')).toEqual(true)
    expect(tree.exists('5')).toEqual(false)

    expect(tree.delete('3')).toEqual(true)
    expect(tree.exists('3')).toEqual(false)

    expect(tree.delete('g')).toEqual(true)
    expect(tree.exists('g')).toEqual(false)

    expect(tree.delete('k')).toEqual(false)

    if (!tree.root) {
      fail()
    }
    expect(isBinarySearchTree(tree.root)).toEqual(true)
  })
})
