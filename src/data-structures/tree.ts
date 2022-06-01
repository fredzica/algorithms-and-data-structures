class BinaryTreeNode<T> {
    constructor(
        public element: T,
        public left?: BinaryTreeNode<T>,
        public right?: BinaryTreeNode<T>
    ) { }
}


const inOrderTraversal = <T>(node: BinaryTreeNode<T>, visit: (node: BinaryTreeNode<T>) => void) => {
    if (node.left) {
        inOrderTraversal(node.left, visit)
    }
    visit(node)
    if (node.right) {
        inOrderTraversal(node.right, visit)
    }
}

const preOrderTraversal = <T>(node: BinaryTreeNode<T>, visit: (node: BinaryTreeNode<T>) => void) => {
    visit(node)
    if (node.left) {
        preOrderTraversal(node.left, visit)
    }
    if (node.right) {
        preOrderTraversal(node.right, visit)
    }
}

const postOrderTraversal = <T>(node: BinaryTreeNode<T>, visit: (node: BinaryTreeNode<T>) => void) => {
    if (node.left) {
        postOrderTraversal(node.left, visit)
    }
    if (node.right) {
        postOrderTraversal(node.right, visit)
    }
    visit(node)
}

const isBinarySearchTree = <T>(node: BinaryTreeNode<T>): boolean => {
    return false
}

const isCompleteTree = <T>(node: BinaryTreeNode<T>): boolean => {
    return false
}

/**
 * Checks if the tree is full, i.e., if all nodes have either zero or two child nodes.
 * @param node The root of the tree to be checked
 * @returns True if the tree is full. False otherwise.
 */
const isFullTree = <T>(node: BinaryTreeNode<T>): boolean => {
    const isNodeFull = !!node.left === !!node.right

    if (!isNodeFull) {
        return false
    }

    if (node.left && node.right) {
        return isFullTree(node.left) && isFullTree(node.right)
    }

    return true
}

/**
 * Checks if the tree is full and complete.
 * @param node The root of the tree to be checked
 * @returns True if the tree is perfect. False otherwise.
 */
const isPerfectTree = <T>(node: BinaryTreeNode<T>): boolean => {
    return isCompleteTree(node) && isFullTree(node)
}

export {
    BinaryTreeNode,
    inOrderTraversal,
    preOrderTraversal,
    postOrderTraversal,
    isBinarySearchTree,
    isCompleteTree,
    isFullTree,
    isPerfectTree
}
