import { BinaryTreeNode, inOrderTraversal, isCompleteTree, isFullTree, postOrderTraversal, preOrderTraversal } from "../../src/data-structures/tree"

describe("Tree algorithms tests", () => {
    const testTraversal = <T>(expectedElements: T[], node: BinaryTreeNode<T>) => {
        expect(node.element).toEqual(expectedElements.shift())
    }

    const traversalTestsRoot: BinaryTreeNode<number> = {
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
    }

    it("Should traverse a tree in order", () => {
        const expectedElements = [2, 1, 4, 3, 5, 0, 6, 7]
        inOrderTraversal(traversalTestsRoot, (node) => testTraversal(expectedElements, node))
    })

    it("Should traverse a tree pre order", () => {
        const expectedElements = [0, 1, 2, 3, 4, 5, 6, 7]
        preOrderTraversal(traversalTestsRoot, (node) => testTraversal(expectedElements, node))
    })

    it("Should traverse a tree post order", () => {
        const expectedElements = [2, 4, 5, 3, 1, 7, 6, 0]
        postOrderTraversal(traversalTestsRoot, (node) => testTraversal(expectedElements, node))
    })

    it("Should check if a tree is full", () => {
        expect(isFullTree({ element: 2 })).toBe(true)
        expect(isFullTree({ element: 2, left: { element: 6 }, right: { element: 3 } })).toBe(true)
        expect(isFullTree({
            element: 2,
            left: {
                element: 1,
                left: { element: 2, },
                right: { element: 3 }
            },
            right: {
                element: 4,
                left: { element: 5, },
                right: { element: 6 }
            }
        })).toBe(true)

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
        expect(isCompleteTree({ element: 2 })).toBe(true)
        expect(isCompleteTree({ element: 2, left: { element: 6 }, right: { element: 3 } })).toBe(true)
        expect(isCompleteTree({
            element: 2,
            left: {
                element: 1,
                left: { element: 2, },
                right: { element: 3 }
            },
            right: {
                element: 4,
                left: { element: 5, },
                right: { element: 6 }
            }
        })).toBe(true)
        expect(isCompleteTree({ element: 2, left: { element: 6 } })).toBe(true)
        expect(isCompleteTree({
            element: 2,
            left: {
                element: 1,
                left: {
                    element: 4,
                    left: {
                        element: 8
                    },
                    right: {
                        element: 9
                    }
                },
                right: {
                    element: 5,
                    left: {
                        element: 10
                    }
                }
            },
            right: {
                element: 3,
                left: {
                    element: 6
                },
                right: {
                    element: 7
                }
            }
        })).toBe(true)

        expect(isCompleteTree({ element: 2, right: { element: 3 } })).toBe(false)
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
                            element: 5,
                            right: { element: 7 }
                        },
                    },
                }
            },
            right: {
                element: 5,
            }
        })).toBe(false)
    })
})
