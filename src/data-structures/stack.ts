class Node<T> {
  next?: Node<T>

  constructor(public element: T) {}
}

export class Stack<T> {
  private top?: Node<T>

  /**
   * Pops an element from the stack.
   *
   * The runtime complexity is O(1).
   * The space complexity is O(1).
   * @returns The removed element
   */
  pop(): T | undefined {
    const elem = this.top?.element
    this.top = this.top?.next

    return elem
  }

  /**
   * Pushes an element to the stack.
   *
   * The runtime complexity is O(1).
   * The space complexity is O(1).
   * @param elem The element to be added
   */
  push(elem: T): void {
    const newNode = new Node(elem)
    newNode.next = this.top
    this.top = newNode
  }

  /**
   * Peeks what is the top element.
   *
   * The runtime complexity is O(1).
   * The space complexity is O(1).
   * @returns The top element
   */
  peek(): T | undefined {
    return this.top?.element
  }

  /**
   * Returns if the stack is empty.
   *
   * The runtime complexity is O(1).
   * The space complexity is O(1).
   * @returns A boolean indicating if the stack is empty
   */
  isEmpty(): boolean {
    return !this.top
  }
}
