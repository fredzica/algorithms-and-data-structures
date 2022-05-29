import { BinaryTreeNode } from "../../src/data-structures/tree"

import { inOrderTraversal, postOrderTraversal, preOrderTraversal } from "../../src/algorithms/tree"

describe("Tree algorithms tests", () => {
    const testTraversal = <T>(expectedElements: T[], node: BinaryTreeNode<T>) => {
        console.log(node.element)
        expect(expectedElements.shift()).toEqual(node.element)
    }

    const root = new BinaryTreeNode(
        0,
        new BinaryTreeNode(
            1,
            new BinaryTreeNode(2),
            new BinaryTreeNode(
                3,
                new BinaryTreeNode(4),
                new BinaryTreeNode(5),
            )
        ),
        new BinaryTreeNode(
            6,
            undefined,
            new BinaryTreeNode(7),
        )
    )

    it("Should traverse a tree in order", () => {
        const expectedElements = [2, 1, 4, 3, 5, 0, 6, 7]
        inOrderTraversal(root, (node) => testTraversal(expectedElements, node))
    })

    it("Should traverse a tree pre order", () => {
        const expectedElements = [2, 1, 3, 0, 4]
        preOrderTraversal(root, (node) => testTraversal(expectedElements, node))
    })

    it("Should traverse a tree post order", () => {
        const expectedElements = [2, 1, 3, 0, 4]
        postOrderTraversal(root, (node) => testTraversal(expectedElements, node))
    })
})
