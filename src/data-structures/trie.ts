interface TrieNode<T> {
  element: T
  terminates: boolean
  children: [TrieNode<T>]
}

const isValidWord = <T>(word: string, rootNode: TrieNode<T>) => {
  return false
}

export { TrieNode }
