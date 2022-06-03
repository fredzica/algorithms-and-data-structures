import { BinaryTreeNode, inOrderTraversal, isCompleteTree, isFullTree, postOrderTraversal, preOrderTraversal } from "../../src/data-structures/tree"

import { fixtures } from "../fixtures/tree"

describe("Tree algorithms tests", () => {
    const testTraversal = <T>(expectedElements: T[], node: BinaryTreeNode<T>) => {
        expect(node.element).toEqual(expectedElements.shift())
    }
    it("Should traverse a tree in order", () => {
        const expectedElements = [2, 1, 4, 3, 5, 0, 6, 7]
        inOrderTraversal(fixtures.traversalTestsRoot, (node) => testTraversal(expectedElements, node))
    })

    it("Should traverse a tree pre order", () => {
        const expectedElements = [0, 1, 2, 3, 4, 5, 6, 7]
        preOrderTraversal(fixtures.traversalTestsRoot, (node) => testTraversal(expectedElements, node))
    })

    it("Should traverse a tree post order", () => {
        const expectedElements = [2, 4, 5, 3, 1, 7, 6, 0]
        postOrderTraversal(fixtures.traversalTestsRoot, (node) => testTraversal(expectedElements, node))
    })

    it("Should check if a tree is full", () => {
        expect(isFullTree(fixtures.oneElement)).toBe(true)
        expect(isFullTree(fixtures.perfect2Levels)).toBe(true)
        expect(isFullTree(fixtures.perfect3Levels)).toBe(true)

        expect(isFullTree(fixtures.onlyLeft)).toBe(false)
        expect(isFullTree(fixtures.onlyRight)).toBe(false)
        expect(isFullTree({
            element: 0,
            left: {
                element: 1,
                left: { element: 2 },
                right: {
                    element: 3,
                    left: { element: 4 },
                    right: { element: 5 },
                }
            },
            right: {
                element: 6,
                right: { element: 7 },
            }
        })).toBe(false)


    })

    it("Should check if a tree is complete", () => {
        expect(isCompleteTree(fixtures.oneElement)).toBe(true)
        expect(isCompleteTree(fixtures.perfect2Levels)).toBe(true)
        expect(isCompleteTree(fixtures.perfect3Levels)).toBe(true)
        expect(isCompleteTree(fixtures.onlyLeft)).toBe(true)
        expect(isCompleteTree(fixtures.complete)).toBe(true)

        expect(isCompleteTree(fixtures.onlyRight)).toBe(false)
        expect(isCompleteTree({
            element: 0,
            left: {
                element: 1,
                left: { element: 2 },
                right: {
                    element: 3,
                    left: { element: 4 },
                    right: { element: 5 },
                }
            },
            right: {
                element: 6,
                right: { element: 7 },
            }
        })).toBe(false)

        expect(isCompleteTree({
            element: 3,
            left: {
                element: 1,
                left: {
                    element: 4,
                    left: { element: 10 },
                    right: { element: 6 },
                },
                right: {
                    element: 2,
                    left: { element: 8 },
                    right: {
                        element: 7,
                        left: { element: 11 },
                        right: { element: 9 }
                    }
                }
            },
            right: {
                element: 6,
                right: { element: 7 },
            }
        })).toBe(false)


        expect(isCompleteTree({
            element: 2,
            left: {
                element: 1,
                left: {
                    element: 3,
                    left: {
                        element: 4,
                        left: { element: 6 },
                        right: {
                            element: 10,
                            right: { element: 11 }
                        },
                    },
                }
            },
            right: {
                element: 5,
                left: { element: 7 },
                right: {
                    element: 8,
                    right: { element: 9 }
                },
            }
        })).toBe(false)
    })
})
