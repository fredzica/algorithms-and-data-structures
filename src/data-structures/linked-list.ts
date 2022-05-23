class LinkedListNode {
    previous: LinkedListNode
    next: LinkedListNode
    element = null

    constructor(previous: LinkedListNode, next: LinkedListNode, element) {
        this.previous = previous
        this.next = next
        this.element = element
    }
}

class DoublyLinkedList {
    private first: LinkedListNode
    private last: LinkedListNode

    constructor(firstElement: any) {
    }

    addFirst(element): void {

    }

    addLast(element): void {

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