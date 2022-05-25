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

    next(): IteratorResult<Type> {
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
        if (this.first == undefined) {
            const newFirst = new LinkedListNode<Type>()
            newFirst.element = element

            this.first = newFirst
            this.last = newFirst
        } else {
            const newFirst = new LinkedListNode<Type>()
            newFirst.element = element
            newFirst.next = this.first

            this.first.previous = newFirst

            this.first = newFirst
        }

        this.length++
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
        if (index > this.length - 1) {
            return undefined
        }

        let current = this.first;
        for (let i = 0; i < index && current.next !== undefined; i++) {
            current = current.next;
        }

        return current?.element
    }
}
