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
    return undefined
  }

  contains(key: string): boolean {
    return false
  }

  put(key: string, value: V): void {
    return
  }

  private hashCode(key: string): number {
    let h = 0
    for (let i = 0; i < key.length; i++)
      h = Math.imul(31, h) + key.charCodeAt(i)

    return h
  }
}
