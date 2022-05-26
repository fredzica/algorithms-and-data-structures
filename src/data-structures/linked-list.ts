class LinkedListNode<Type> {
    previous?: LinkedListNode<Type>
    next?: LinkedListNode<Type>
    element!: Type
}

export class DoublyLinkedList<Type> implements IterableIterator<Type> {
    private first?: LinkedListNode<Type>
    private last?: LinkedListNode<Type>
    private length = 0

    private itCounter = 0
    private itCurrent?: LinkedListNode<Type>

    next(): IteratorResult<Type> {
        if (this.itCounter < this.length && this.first) {
            if (!this.itCurrent) {
                this.itCurrent = this.first
            }
            const element = this.itCurrent.element
            this.itCurrent = this.itCurrent.next

            this.itCounter++

            const done = !this.itCurrent
            if (done) {
                this.itCounter = 0
                this.itCurrent = undefined
            }

            return {
                done,
                value: element
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
        const newFirst = new LinkedListNode<Type>()
        newFirst.element = element

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

    addLast(element: Type): void {
        const newLast = new LinkedListNode<Type>()
        newLast.element = element

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

    removeFirst(): Type | null {
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

    removeLast(): Type | null {
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

    get(index: number): Type | null {
        if (index > this.length - 1 || !this.first) {
            return null
        }

        let current = this.first;
        for (let i = 0; i < index && current.next; i++) {
            current = current.next;
        }

        return current.element
    }
}
