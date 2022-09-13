import { Stack } from '../../src/data-structures/stack'

describe('Stack tests', () => {
  it('Should push an element', () => {
    const stack = new Stack<number>()
    stack.push(2134)
    const top = 12
    stack.push(top)

    expect(stack.peek()).toEqual(top)
  })

  it('Should peek an element', () => {
    const stack = new Stack<number>()
    expect(stack.peek()).toBeFalsy()

    const top = 12
    stack.push(top)
    expect(stack.peek()).toEqual(top)
    expect(stack.peek()).toEqual(top)
  })

  it('Should pop an element', () => {
    const stack = new Stack<number>()
    expect(stack.pop()).toBeFalsy()

    const first = 9
    const second = 18
    stack.push(second)
    stack.push(first)

    expect(stack.pop()).toEqual(first)
    expect(stack.pop()).toEqual(second)
    expect(stack.pop()).toBeFalsy()
  })

  it("Should correctly return if it's empty", () => {
    const stack = new Stack<number>()
    expect(stack.isEmpty()).toEqual(true)

    stack.push(1)
    expect(stack.isEmpty()).toEqual(false)
  })
})
