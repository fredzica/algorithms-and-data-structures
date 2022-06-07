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

  add(elem: T) {
    this.linkedList.addFirst(elem)
  }

  remove() {
    return this.linkedList.removeLast() ?? undefined
  }

  peek() {
    const lastIndex = this.linkedList.length - 1
    return this.linkedList.get(lastIndex) ?? undefined
  }

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

  add(elem: T) {
    const newNode = new Node(elem)
    if (!this.oldest || !this.newest) {
      this.oldest = newNode
    } else {
      this.newest.previous = newNode
    }

    this.newest = newNode
  }

  remove() {
    const elem = this.oldest?.element
    this.oldest = this.oldest?.previous

    if (!this.oldest) {
      this.newest = undefined
    }

    return elem
  }

  peek() {
    return this.oldest?.element
  }

  isEmpty() {
    return !this.newest
  }
}
