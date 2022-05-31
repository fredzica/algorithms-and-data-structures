class Node<T> {
    next?: Node<T>

    constructor(public element: T) { }
}

export class Stack<T> {
    private top?: Node<T>

    pop(): T | undefined {
        const elem = this.top?.element
        this.top = this.top?.next

        return elem
    }

    push(elem: T): void {
        const newNode = new Node(elem)
        newNode.next = this.top
        this.top = newNode
    }

    peek(): T | undefined {
        return this.top?.element
    }

    isEmpty(): boolean {
        return !this.top
    }
}
