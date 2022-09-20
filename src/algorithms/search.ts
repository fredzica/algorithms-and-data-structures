/**
 * Does a binary search in a sorted number array.
 * The runtime complexity is O(log n).
 * The space complexity is O(1).
 * @param arr The array to be searched.
 * @param target The number to be searched for.
 * @returns The number, if found. Or -1, if not found.
 */
const binarySearch = (arr: number[], target: number): number => {
  let low = 0
  let high = arr.length - 1

  while (high >= low) {
    const middleIx = Math.floor((low + high) / 2)
    const middle = arr[middleIx]
    if (target < middle) {
      high = middleIx - 1
    } else if (target > middle) {
      low = middleIx + 1
    } else {
      return target
    }
  }

  return -1
}

export { binarySearch }
