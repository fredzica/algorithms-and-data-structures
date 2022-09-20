import { binarySearch } from '../../src/algorithms/search'

describe('Search algorithms', () => {
  it('Should do binary search on an empty array', () => {
    expect(binarySearch([], 0)).toBe(-1)
  })

  it('Should do binary search on an array with a single element', () => {
    expect(binarySearch([3], 3)).toBe(3)
    expect(binarySearch([3], 2)).toBe(-1)
    expect(binarySearch([3], 5)).toBe(-1)
  })

  it('Should do binary search on a long array', () => {
    const array = Array.from([...Array(100).keys()])
    expect(binarySearch(array, 1)).toBe(1)
    expect(binarySearch(array, 43)).toBe(43)
    expect(binarySearch(array, 89)).toBe(89)
    expect(binarySearch(array, 112)).toBe(-1)
  })
})
