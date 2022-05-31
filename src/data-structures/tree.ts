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

export {
    BinaryTreeNode,
    inOrderTraversal,
    preOrderTraversal,
    postOrderTraversal
}
