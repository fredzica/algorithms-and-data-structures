import { DoublyLinkedList } from './linked-list'

/**
 * A simple implementation of a HashTable.
 *
 * The keys and values are mapped to an array of linked lists.
 * The linked lists exist to handle possible collisions.
 *
 * As is expected with hash tables, the complexity of its operations
 * is 0(1), but the data structure uses some memory space in order
 * to enable the constant complexity of its operations.
 *
 * I could've used generics to accept any types for the keys,
 * but that involves accepting only "hashable" types and, consequently,
 * implementing type-specific hash code functions, which feels like
 * an unnecessary overhead for the purposes of this project.
 */
export class HashTable<V> {
  private entries: DoublyLinkedList<[string, V]>[] = []

  /**
   * Gets the value mapped to a key.
   *
   * The runtime complexity is O(1). But, if there are a lot of collisions,
   * it tends to O(n), where n is the number of stored keys.
   * The space complexity is O(1).
   *
   * @param key The key that maps to a value.
   * @returns The found value or undefined if the key wasn't found.
   */
  get(key: string): V | undefined {
    const index = this.getArrayIndex(key)
    const tuples = this.entries[index]

    if (!tuples) return undefined

    for (let index = 0; index < tuples.length; index++) {
      const tuple = tuples.get(index)

      if (tuple && tuple[0] === key) {
        return tuple[1]
      }
    }

    return undefined
  }

  /**
   * Determines if a key is present.
   *
   * The runtime complexity is O(1). But, if there are a lot of collisions,
   * it tends to O(n), where n is the number of stored keys.
   * The space complexity is O(1).
   *
   * @param key The key that maps to a value.
   * @returns true or false depending if the key is present.
   */
  contains(key: string): boolean {
    return !!this.get(key)
  }

  /**
   * Adds a key and a value. If the key is already present, its value will
   * be overwritten.
   *
   * The runtime complexity is O(1).
   * The space complexity is O(1).
   *
   * @param key The key that maps to a value.
   * @returns true or false depending if the key is present.
   */
  put(key: string, value: V): void {
    const index = this.getArrayIndex(key)
    let tuples = this.entries[index]
    if (!tuples) {
      tuples = new DoublyLinkedList<[string, V]>()
      this.entries[index] = tuples
    }

    tuples.addFirst([key, value])
  }

  private getArrayIndex(key: string): number {
    const hash = this.hashCode(key)
    const index = Math.abs(hash) % 10000
    return index
  }

  private hashCode(key: string): number {
    let h = 0
    for (let i = 0; i < key.length; i++)
      h = Math.imul(31, h) + key.charCodeAt(i)

    return h
  }
}
