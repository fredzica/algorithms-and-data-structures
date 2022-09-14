import { isMinHeap } from '../../src/data-structures/min-heap'

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
  })

  it('Should check invalid Min Heaps', () => {
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
})
