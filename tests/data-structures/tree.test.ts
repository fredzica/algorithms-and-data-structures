import { BinaryTreeNode, inOrderTraversal, postOrderTraversal, preOrderTraversal } from "../../src/data-structures/tree"

describe("Tree algorithms tests", () => {
    const testTraversal = <T>(expectedElements: T[], node: BinaryTreeNode<T>) => {
        expect(expectedElements.shift()).toEqual(node.element)
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
    })
})
