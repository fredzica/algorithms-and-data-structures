import { Queue } from "../../src/data-structures/queue"

describe("Queue tests", () => {
    it("Should add an element", () => {
        const q = new Queue<string>()

        q.add("hello")
        expect(q.peek()).toEqual("hello")

        q.add("world")
        expect(q.peek()).toEqual("world")
    })

    it("Should remove an element", () => {
        const q = new Queue<string>()

        expect(q.remove()).toBeUndefined()

        q.add("hello")
        q.add("world")

        expect(q.remove()).toEqual("world")
        expect(q.remove()).toEqual("hello")
        expect(q.remove()).toBeUndefined()
    })

    it("Should peek the first element", () => {
        const q = new Queue<string>()

        expect(q.peek()).toBeUndefined()

        q.add("hello")
        expect(q.peek()).toEqual("hello")

        q.add("world")
        expect(q.peek()).toEqual("world")
    })

    it("Should correctly return if it's empty", () => {
        const q = new Queue<number>()

        expect(q.isEmpty()).toEqual(true)

        q.add(33)
        expect(q.isEmpty()).toEqual(false)
    })
})