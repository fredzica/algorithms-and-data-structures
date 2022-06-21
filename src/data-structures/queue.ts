import { DoublyLinkedList } from './linked-list'

class Node<T> {
  previous?: Node<T>

  constructor(public element: T) {}
}

export interface Queue<T> {
  add(elem: T): void
  remove(): T | undefined
  peek(): T | undefined
  isEmpty(): boolean
}

/**
 * A Queue that relies on a LinkedList implementation
 */
export class LinkedListQueue<T> implements Queue<T> {
  private linkedList = new DoublyLinkedList<T>()

  /**
   *
   *
   * The runtime complexity is O(1).
   * The space complexity is O(1).
   * @returns The removed element
   */
  add(elem: T) {
    this.linkedList.addFirst(elem)
  }

  /**
   *
   *
   * The runtime complexity is O(1).
   * The space complexity is O(1).
   * @returns The removed element
   */
  remove() {
    return this.linkedList.removeLast() ?? undefined
  }

  /**
   * Peeks the next element in the queue.
   *
   * The runtime complexity is O(n) (see the linked list get implementation).
   * The space complexity is O(1).
   * @returns The next element in the queue
   */
  peek() {
    const lastIndex = this.linkedList.length - 1
    return this.linkedList.get(lastIndex) ?? undefined
  }

  /**
   * Returns if the queue is empty.
   *
   * The runtime complexity is O(1).
   * The space complexity is O(1).
   * @returns A boolean indicating if the queue is empty
   */
  isEmpty() {
    return this.linkedList.length === 0
  }
}

/**
 * A Queue implemented from the ground up
 */
export class PureQueue<T> implements Queue<T> {
  private newest?: Node<T>
  private oldest?: Node<T>

  /**
   * Adds an element to the queue.
   *
   * The runtime complexity is O(1).
   * The space complexity is O(1).
   * @param elem The element to be added
   */
  add(elem: T) {
    const newNode = new Node(elem)
    if (!this.oldest || !this.newest) {
      this.oldest = newNode
    } else {
      this.newest.previous = newNode
    }

    this.newest = newNode
  }

  /**
   * Retrieves the next element in the queue.
   *
   * The runtime complexity is O(1).
   * The space complexity is O(1).
   * @returns The next element in the queue
   */
  remove() {
    const elem = this.oldest?.element
    this.oldest = this.oldest?.previous

    if (!this.oldest) {
      this.newest = undefined
    }

    return elem
  }

  /**
   * Peeks the next element in the queue.
   *
   * The runtime complexity is O(1).
   * The space complexity is O(1).
   * @returns The next element in the queue
   */
  peek() {
    return this.oldest?.element
  }

  /**
   * Returns if the queue is empty.
   *
   * The runtime complexity is O(1).
   * The space complexity is O(1).
   * @returns A boolean indicating if the queue is empty
   */
  isEmpty() {
    return !this.newest
  }
}
