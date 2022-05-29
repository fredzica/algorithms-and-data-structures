import { BinaryTreeNode } from "../data-structures/tree"

const inOrderTraversal = (node: BinaryTreeNode, visit: (node: BinaryTreeNode) => void) => {
    if (node.left) {
        inOrderTraversal(node.left, visit)
    }
    visit(node)
    if (node.right) {
        inOrderTraversal(node.right, visit)
    }
}

const preOrderTraversal = (node: BinaryTreeNode, visit: (node: BinaryTreeNode) => void) => {
    visit(node)
    if (node.left) {
        preOrderTraversal(node.left, visit)
    }
    if (node.right) {
        preOrderTraversal(node.right, visit)
    }
}

const postOrderTraversal = (node: BinaryTreeNode, visit: (node: BinaryTreeNode) => void) => {
    if (node.left) {
        postOrderTraversal(node.left, visit)
    }
    if (node.right) {
        postOrderTraversal(node.right, visit)
    }
    visit(node)
}

export {
    inOrderTraversal,
    preOrderTraversal,
    postOrderTraversal
}
