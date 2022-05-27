import { LinkedListQueue, PureQueue, Queue } from "../../src/data-structures/queue"

describe("Queue tests", () => {
    const testImplementations = <T>(testFn: (q: Queue<T>) => void) => {
        const types = [PureQueue, LinkedListQueue]
        types.forEach((type) => {
            const q = new type<T>()
            testFn(q)
        })
    }

    it("Should add an element", () => {
        const testAdd = (q: Queue<string>) => {
            const added = "hello"
            q.add(added)
            expect(q.peek()).toEqual(added)

            q.add("world")
            expect(q.peek()).toEqual(added)
        }

        testImplementations(testAdd)
    })

    it("Should remove an element", () => {
        const testRemove = (q: Queue<string>) => {
            expect(q.remove()).toBeUndefined()

            q.add("hello")
            q.add("world")

            expect(q.remove()).toEqual("hello")
            expect(q.remove()).toEqual("world")
            expect(q.remove()).toBeUndefined()
        }

        testImplementations(testRemove)
    })

    it("Should peek the first element", () => {
        const testPeek = (q: Queue<string>) => {
            expect(q.peek()).toBeUndefined()

            const added = "hello"
            q.add(added)
            expect(q.peek()).toEqual(added)

            q.add("world")
            expect(q.peek()).toEqual(added)
        }

        testImplementations(testPeek)
    })

    it("Should correctly return if it's empty", () => {
        const testIsEmpty = (q: Queue<number>) => {
            expect(q.isEmpty()).toEqual(true)

            q.add(33)
            expect(q.isEmpty()).toEqual(false)
        }

        testImplementations(testIsEmpty)
    })
})
