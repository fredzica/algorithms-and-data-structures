interface TrieNode<T> {
  element: T | null
  terminates: boolean
  children: TrieNode<T>[] | null
}
/**
 * Checks if a word is present in the Trie.
 *
 * This algorithm expects a Trie implementation where the children array will
 * have as size only the number of chars they actually contain (the maximum being ALPHABET_SIZE).
 * I'm aware other Trie implementations always have the children array with size ALPHABET_SIZE.
 * Although those implementations will occupy more memory, searches on them are faster because
 * they will know the exact index for each of the word's chars being searched.
 *
 * The runtime complexity is O(k), where k is the length of the word.
 * The space complexity is O(1).
 * @param word The word to be searched for.
 * @param rootNode The root node of the Trie.
 * @returns if the word is valid.
 */
const isValidWord = (word: string, rootNode: TrieNode<string>) => {
  const chars = [...word]
  let node = rootNode

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i]
    if (!node.children) {
      return false
    }

    let found = false
    for (let j = 0; j < node.children.length; j++) {
      const child = node.children[j]

      if (child.element && child.element === char) {
        node = child
        found = true

        if (node.terminates && word.length === i + 1) {
          return true
        }

        break
      }
    }

    if (!found) {
      return false
    }
  }

  return false
}

export { TrieNode, isValidWord }
