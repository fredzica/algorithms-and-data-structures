import { DoublyLinkedList } from "../../src/data-structures/linked-list"

describe("Linked list tests", () => {
    it("Should insert a first element", () => {
        const ll = new DoublyLinkedList<number>()

        let first = 12
        ll.addFirst(first)
        expect(ll.get(0)).toEqual(first)

        first = 3
        ll.addFirst(first)
        expect(ll.get(0)).toEqual(first)
    })

    it("Should insert a last element", () => {
        const ll = new DoublyLinkedList<number>()

        let last = 12
        ll.addLast(last)
        expect(ll.get(0)).toEqual(last)

        last = 3
        ll.addLast(last)
        expect(ll.get(1)).toEqual(last)
    })

    it("Should remove a first element", () => {
        const ll = new DoublyLinkedList<string>()

        const first = 'a'
        const second = 'b'
        ll.addFirst(second)
        ll.addFirst(first)

        expect(ll.removeFirst()).toEqual(first)
        expect(ll.removeFirst()).toEqual(second)
        expect(ll.removeFirst()).toBeUndefined()
    })

    it("Should remove a last element", () => {
        const ll = new DoublyLinkedList<string>()

        const first = 'a'
        const second = 'b'
        ll.addLast(first)
        ll.addLast(second)

        expect(ll.removeLast()).toEqual(second)
        expect(ll.removeLast()).toEqual(first)
        expect(ll.removeLast()).toBeUndefined()
    })

    it("Should retrieve elements by their indexes", () => {
        const elements = Array.from(Array(10).keys())

        const ll = new DoublyLinkedList<number>()
        for (const element of elements) {
            ll.addLast(element)
        }

        for (const element of elements) {
            expect(ll.get(element)).toEqual(element)
        }
    })

    it("Should be iterable", () => {
        const elements = Array.from(Array(10).keys())

        const ll = new DoublyLinkedList<number>()
        for (const element of elements) {
            ll.addLast(element)
        }

        const iteratorResult = ll.next()
        expect(iteratorResult.done).toEqual(false)
        expect(iteratorResult.value).toEqual(1)

        let i = 1;
        for (const element of ll) {
            expect(ll.get(i)).toEqual(element)
            i++
        }
    })
})
