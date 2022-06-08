import { BinarySearchTree } from '../../src/data-structures/tree'

const bst = new BinarySearchTree()
bst.insert('g')
bst.insert('y')
bst.insert('t')
bst.insert('c')
bst.insert('b')
bst.insert('9')
bst.insert('o')
bst.insert('n')
bst.insert('5')
bst.insert('b')
bst.insert('p')
bst.insert('z')
bst.insert('l')
bst.insert('a')
bst.insert('t')
bst.insert('3')
bst.insert('m')
bst.insert('r')
bst.insert('s')

export const fixtures = {
  traversalTestsRoot: {
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
  },
  oneElement: { element: 2 },
  onlyLeft: { element: 2, left: { element: 6 } },
  onlyRight: { element: 2, right: { element: 3 } },
  perfect2Levels: { element: 2, left: { element: 6 }, right: { element: 3 } },
  perfect3Levels: {
    element: 2,
    left: {
      element: 1,
      left: { element: 2 },
      right: { element: 3 },
    },
    right: {
      element: 4,
      left: { element: 5 },
      right: { element: 6 },
    },
  },
  complete: {
    element: 2,
    left: {
      element: 1,
      left: {
        element: 4,
        left: {
          element: 8,
        },
        right: {
          element: 9,
        },
      },
      right: {
        element: 5,
        left: {
          element: 10,
        },
      },
    },
    right: {
      element: 3,
      left: {
        element: 6,
      },
      right: {
        element: 7,
      },
    },
  },
  bst,
  almostBst: {
    element: 2,
    left: {
      element: 2,
      left: { element: 1 },
      right: { element: 3 },
    },
    right: {
      element: 6,
      left: { element: 5 },
      right: {
        element: 7,
        right: {
          element: 9,
          left: { element: 8 },
          right: {
            element: 10,
            right: { element: 11 },
          },
        },
      },
    },
  },
}
