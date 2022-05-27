class Node<T> {
    previous?: Node<T>

    constructor(public element: T) { }
}

export class Queue<T> {
    private newest?: Node<T>
    private oldest?: Node<T>

    add(elem: T) {
        const newNode = new Node(elem)
        if (!this.oldest || !this.newest) {
            this.oldest = newNode
        } else {
            this.newest.previous = newNode
        }

        this.newest = newNode
    }

    remove(): T | undefined {
        const elem = this.oldest?.element
        this.oldest = this.oldest?.previous

        if (!this.oldest) {
            this.newest = undefined
        }

        return elem
    }

    peek(): T | undefined {
        return this.oldest?.element
    }

    isEmpty(): boolean {
        return !this.newest
    }
}