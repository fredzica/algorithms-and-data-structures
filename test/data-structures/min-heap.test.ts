import { isMinHeap, MinHeap } from '../../src/data-structures/min-heap'

describe('Min Heap tests', () => {
  it('Should check valid Min Heaps', () => {
    expect(
      isMinHeap({
        element: 5,
        left: {
          element: 7,
          left: {
            element: 11,
            left: { element: 12 },
            right: { element: 13 },
          },
          right: {
            element: 9,
            left: { element: 14 },
          },
        },
        right: {
          element: 6,
          left: { element: 8 },
          right: { element: 10 },
        },
      }),
    ).toBe(true)

    expect(
      isMinHeap({
        element: 13,
      }),
    ).toBe(true)

    expect(
      isMinHeap({
        element: 3,
        left: { element: 4 },
        right: { element: 6 },
      }),
    ).toBe(true)

    expect(
      isMinHeap({
        element: 9,
        left: { element: 1 },
        right: { element: 12 },
      }),
    ).toBe(false)

    expect(
      isMinHeap({
        element: 3,
        left: {
          element: 4,
          left: { element: 5 },
          right: { element: 6 },
        },
        right: {
          element: 7,
          left: { element: 5 },
          right: { element: 8 },
        },
      }),
    ).toBe(false)

    expect(
      isMinHeap({
        element: 3,
        left: {
          element: 4,
          left: { element: 5 },
          right: { element: 6 },
        },
        right: {
          element: 7,
          right: { element: 8 },
        },
      }),
    ).toBe(false)

    expect(
      isMinHeap({
        element: 3,
        left: {
          element: 4,
          right: { element: 6 },
        },
        right: {
          element: 5,
        },
      }),
    ).toBe(false)
  })

  it('Should correctly insert', () => {
    const minHeap = new MinHeap<number>(10)

    minHeap.insert(5)
    minHeap.insert(17)
    minHeap.insert(10)
    minHeap.insert(84)
    minHeap.insert(19)
    expect(minHeap.min()).toBe(5)

    minHeap.insert(3)
    minHeap.insert(6)
    minHeap.insert(22)
    minHeap.insert(9)

    expect(minHeap.min()).toBe(3)

    const treeRoot = minHeap.toTreeRoot()
    if (!treeRoot) {
      fail()
    }
    expect(isMinHeap(treeRoot)).toBe(true)
  })

  it('Should correctly extract minimum', () => {
    const minHeap = new MinHeap<number>(10)
    expect(minHeap.extractMinimum()).toBeUndefined()

    minHeap.insert(5)
    minHeap.insert(17)
    minHeap.insert(10)
    minHeap.insert(84)
    minHeap.insert(19)
    minHeap.insert(3)
    minHeap.insert(6)
    minHeap.insert(22)
    minHeap.insert(9)

    expect(minHeap.min()).toBe(3)
    expect(minHeap.extractMinimum()).toBe(3)

    const treeRoot = minHeap.toTreeRoot()
    expect(isMinHeap(treeRoot)).toBe(true)

    expect(minHeap.extractMinimum()).toBe(5)
  })
})
