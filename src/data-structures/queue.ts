class Node<T> {
    previous?: Node<T>

    constructor(public element: T) { }
}

export class Queue<T> {
    private newest?: Node<T>
    private oldest?: Node<T>

    add(elem: T) {

    }

    remove(): T | undefined {
        return undefined
    }

    peek(): T | undefined {
        return undefined
    }

    isEmpty(): boolean {
        return true
    }
}