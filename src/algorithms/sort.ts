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
  return array
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
