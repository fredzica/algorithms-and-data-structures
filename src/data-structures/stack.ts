class Node<T> {
    next?: Node<T>

    constructor(public element: T) { }
}

export class Stack<T> {
    private top?: Node<T>

    pop() {
        const elem = this.top?.element
        this.top = this.top?.next

        return elem
    }

    push(elem: T) {
        const newNode = new Node(elem)
        newNode.next = this.top
        this.top = newNode
    }

    peek() {
        return this.top?.element
    }

    isEmpty() {
        return !this.top
    }
}
