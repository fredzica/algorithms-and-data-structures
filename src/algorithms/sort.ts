/**
 * Sorts an array in place with the insertion sort algorithm.
 * @param array The array to sort
 * @returns The sorted array
 */
const insertionSort = <T>(array: T[]): T[] => {
  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      const e2 = array[j + 1]
      const e1 = array[j]

      if (e2 < e1) {
        array[j + 1] = e1
        array[j] = e2
      }
    }
  }

  return array
}

/**
 * Sorts an array in place with the selection sort algorithm.
 * @param array The array to sort
 * @returns The sorted array
 */
const selectionSort = <T>(array: T[]): T[] => {
  for (let i = 0; i < array.length; i++) {
    let smaller = array[i]
    let swapIndex = i
    for (let j = i + 1; j < array.length; j++) {
      const element = array[j]
      if (smaller > element) {
        smaller = element
        swapIndex = j
      }
    }

    array[swapIndex] = array[i]
    array[i] = smaller
  }

  return array
}

/**
 * Sorts an array in place with the mergesort algorithm.
 * @param array The array to sort
 * @returns The sorted array
 */
const mergeSort = <T>(array: T[]): T[] => {
  const helper = new Array(array.length)
  mergeSortHelper(array, helper, 0, array.length - 1)

  return array
}

const mergeSortHelper = <T>(
  array: T[],
  helper: T[],
  low: number,
  high: number,
) => {
  if (low < high) {
    const middle = Math.floor((low + high) / 2)
    mergeSortHelper(array, helper, low, middle)
    mergeSortHelper(array, helper, middle + 1, high)
    merge(array, helper, low, middle, high)
  }
}

const merge = <T>(
  array: T[],
  helperArray: T[],
  low: number,
  middle: number,
  high: number,
) => {
  for (let i = low; i <= high; i++) {
    helperArray[i] = array[i]
  }

  let leftIndex = low
  let rightIndex = middle + 1
  let currentIndex = low

  // find out which is the smallest element and put it in the original array
  while (leftIndex <= middle && rightIndex <= high) {
    if (helperArray[leftIndex] <= helperArray[rightIndex]) {
      array[currentIndex] = helperArray[leftIndex]
      leftIndex++
    } else {
      array[currentIndex] = helperArray[rightIndex]
      rightIndex++
    }
    currentIndex++
  }

  // copy the remaining (if any) left elements into the array
  const remaining = middle - leftIndex
  for (let i = 0; i <= remaining; i++) {
    array[currentIndex + i] = helperArray[leftIndex + i]
  }
}

/**
 * Sorts an array in place with the quicksort algorithm.
 * @param array The array to sort
 * @returns The sorted array
 */
const quickSort = <T>(array: T[]): T[] => {
  return array
}

export { insertionSort, selectionSort, mergeSort, quickSort }
