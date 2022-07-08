interface TrieNode<T> {
  element: T | null
  terminates: boolean
  children: TrieNode<T>[] | null
}

const isValidWord = <T>(word: string, rootNode: TrieNode<T>) => {
  return false
}

export { TrieNode, isValidWord }
