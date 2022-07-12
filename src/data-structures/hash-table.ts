import { DoublyLinkedList } from './linked-list'

export class HashTable<K, V> {
  private keys: DoublyLinkedList<[K, V]>[] = []

  get(key: K): V | undefined {
    return undefined
  }

  contains(key: K): boolean {
    return false
  }

  put(key: K, value: V): void {
    return
  }
}
