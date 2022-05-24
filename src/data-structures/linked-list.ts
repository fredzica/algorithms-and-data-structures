class LinkedListNode<Type> {
    previous?: LinkedListNode<Type>
    next?: LinkedListNode<Type>
    element?: Type
}

export class DoublyLinkedList<Type> {
    private first!: LinkedListNode<Type>
    private last!: LinkedListNode<Type>
    private length = 0

    constructor() {
        const first = new LinkedListNode<Type>()
        const last = new LinkedListNode<Type>()

        last.previous = first
        first.next = last
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
