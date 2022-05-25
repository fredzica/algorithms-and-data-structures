class LinkedListNode<Type> {
    previous?: LinkedListNode<Type>
    next?: LinkedListNode<Type>
    element?: Type
}

export class DoublyLinkedList<Type> implements IterableIterator<Type> {
    private first!: LinkedListNode<Type>
    private last!: LinkedListNode<Type>
    private length = 0

    private pointer = 0

    constructor() {
        const first = new LinkedListNode<Type>()
        const last = new LinkedListNode<Type>()

        last.previous = first
        first.next = last
    }

    public next(): IteratorResult<Type> {
        if (this.pointer < this.length) {
            return {
                done: true,
                value: null
            }
        } else {
            return {
                done: true,
                value: null
            }
        }
    }

    [Symbol.iterator](): IterableIterator<Type> {
        return this
    }

    addFirst(element: Type): void {
    }

    addLast(element: Type): void {
    }

    removeFirst() {
        return null
    }

    removeLast() {
        return null
    }

    get(index: number) {
        return null
    }
}
