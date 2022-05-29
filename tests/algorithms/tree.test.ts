import { BinaryTreeNode } from "../../src/data-structures/tree"

import { inOrderTraversal } from "../../src/algorithms/tree"

describe("Tree algorithms tests", () => {
    it("Should traverse a tree in order", () => {
        const root = new BinaryTreeNode("0",
            new BinaryTreeNode(
                "1", new BinaryTreeNode("2"), new BinaryTreeNode("3")
            ),
            new BinaryTreeNode("4")
        )

        inOrderTraversal(root, (node) => console.log(node.element))
    })
})
