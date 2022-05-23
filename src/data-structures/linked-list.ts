class LinkedListNode<Type> {
    previous: LinkedListNode<Type> = null
    next: LinkedListNode<Type> = null
    element: Type = null
}

class DoublyLinkedList<Type>{

    readonly first: LinkedListNode<Type>
    readonly last: LinkedListNode<Type>

    addFirst(element: Type): void {

    }

    addLast(element: Type): void {

    }

    removeFirst(): Type {
        return null
    }

    removeLast(): Type {
        return null
    }

    get(index: number): Type {
        return null



    }


}