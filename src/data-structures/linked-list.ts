class Node<T> {
  previous?: Node<T>
  next?: Node<T>

  constructor(public element: T) {}
}

export class DoublyLinkedList<T> implements IterableIterator<T> {
  public length = 0

  private first?: Node<T>
  private last?: Node<T>

  private itCurrent?: Node<T>
  private itCounter = 0

  /**
   * Adds an element to the beginning of the linked list.
   *
   * The runtime complexity is O(1).
   * The space complexity is O(1).
   * @param element The element to be added
   */
  addFirst(element: T): void {
    const newFirst = new Node(element)

    if (!this.first) {
      this.first = newFirst
      this.last = newFirst
    } else {
      newFirst.next = this.first
      this.first.previous = newFirst

      this.first = newFirst
    }

    this.length++
  }

  /**
   * Adds an element to the end of the linked list.
   *
   * The runtime complexity is O(1).
   * The space complexity is O(1).
   * @param element The element to be added
   */
  addLast(element: T): void {
    const newLast = new Node(element)

    if (!this.last) {
      this.last = newLast
      this.first = newLast
    } else {
      newLast.previous = this.last
      this.last.next = newLast

      this.last = newLast
    }

    this.length++
  }

  /**
   * Removes an element from the beginning of the linked list.
   *
   * The runtime complexity is O(1).
   * The space complexity is O(1).
   * @returns The removed element
   */
  removeFirst(): T | null {
    if (!this.first) {
      return null
    }

    const oldFirst = this.first
    if (this.length === 1) {
      this.first = undefined
      this.last = undefined
    } else if (this.length > 1) {
      const newFirst = this.first.next

      if (newFirst) {
        newFirst.previous = undefined
        this.first = newFirst
      }
    }

    this.length--
    return oldFirst.element
  }

  /**
   * Removes an element from the end of the linked list.
   *
   * The runtime complexity is O(1).
   * The space complexity is O(1).
   * @returns The removed element
   */
  removeLast(): T | null {
    if (!this.last) {
      return null
    }

    const oldLast = this.last
    if (this.length === 1) {
      this.first = undefined
      this.last = undefined
    } else if (this.length > 1) {
      const newLast = this.last.previous

      if (newLast) {
        newLast.next = undefined
        this.last = newLast
      }
    }

    this.length--
    return oldLast.element
  }

  /**
   * Retrieves an element in a specific index.
   *
   * The runtime complexity is O(n).
   * The space complexity is O(1).
   * @returns The found element
   */
  get(index: number): T | null {
    if (index < 0 || index > this.length - 1 || !this.first) {
      return null
    }

    let current = this.first
    for (let i = 0; i < index && current.next; i++) {
      current = current.next
    }

    return current.element
  }

  next(): IteratorResult<T> {
    if (!this.first) {
      return {
        done: true,
        value: null,
      }
    }

    const done = this.itCounter === this.length
    if (done) {
      this.itCounter = 0
      this.itCurrent = undefined

      return {
        done: true,
        value: null,
      }
    }

    if (!this.itCurrent) {
      this.itCurrent = this.first
    }

    const element = this.itCurrent.element
    this.itCurrent = this.itCurrent.next
    this.itCounter++

    return {
      done,
      value: element,
    }
  }

  [Symbol.iterator](): IterableIterator<T> {
    return this
  }
}
