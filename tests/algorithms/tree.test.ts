import { BinaryTreeNode } from "../../src/data-structures/tree"

import { inOrderTraversal } from "../../src/algorithms/tree"

describe("Tree algorithms tests", () => {
    const testTraversal = <T>(expectedElements: T[], node: BinaryTreeNode<T>) => {
        console.log(node.element)
        expect(expectedElements.shift()).toEqual(node.element)
    }

    it("Should traverse a tree in order", () => {
        const root = new BinaryTreeNode(0,
            new BinaryTreeNode(
                1, new BinaryTreeNode(2), new BinaryTreeNode(3)
            ),
            new BinaryTreeNode(4)
        )

        const expectedElements = [2, 1, 3, 0, 4]
        inOrderTraversal(root, (node) => testTraversal(expectedElements, node))
    })
})
