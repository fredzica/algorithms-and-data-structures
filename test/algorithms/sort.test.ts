import {
  insertionSort,
  mergeSort,
  quickSort,
  selectionSort,
} from '../../src/algorithms/sort'

describe('Sort algorithms', () => {
  it('should sort arrays of numbers', () => {
    const testSort = <T>(array: T[], expected: T[]) => {
      ;[insertionSort, selectionSort, mergeSort, quickSort].forEach(
        (sortFn) => {
          console.log('testing ', sortFn.name, array)
          const arrayCopy = Array.from(array)
          expect(sortFn(arrayCopy)).toEqual(expected)
        },
      )
    }

    testSort([], [])
    testSort([10], [10])

    testSort([7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7])
    testSort([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7])

    const bigArray = [...Array(100).keys()]
    const shuffledBigArray = [...Array(100).keys()].sort(
      () => Math.random() - 0.5,
    )
    testSort(shuffledBigArray, bigArray)
  })
})
