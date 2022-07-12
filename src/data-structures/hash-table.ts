import { DoublyLinkedList } from './linked-list'

/**
 * A simple implementation of a HashTable.
 *
 * The keys and values are mapped to an array of linked lists.
 * The linked lists exist to handle possible collisions.
 *
 * I could've used generics to accept any types for the keys,
 * but that involves accepting only "hashable" types and, consequently,
 * implementing type-specific hash code functions, which feels like
 * an unnecessary overhead for the purposes of this project.
 */
export class HashTable<V> {
  private keys: DoublyLinkedList<[string, V]>[] = []

  get(key: string): V | undefined {
    const index = this.getArrayIndex(key)
    const tuples = this.keys[index]

    if (!tuples) return undefined

    for (const tuple of tuples) {
      if (tuple[0] === key) {
        return tuple[1]
      }
    }

    return undefined
  }

  contains(key: string): boolean {
    return !!this.get(key)
  }

  put(key: string, value: V): void {
    const index = this.getArrayIndex(key)
    let tuples = this.keys[index]
    if (!tuples) {
      const linkedList = new DoublyLinkedList<[string, V]>()

      this.keys[index] = linkedList
      tuples = linkedList
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
