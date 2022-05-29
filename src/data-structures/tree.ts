export class BinaryTreeNode<T> {
    constructor(
        public element: T,
        public left?: BinaryTreeNode<T>,
        public right?: BinaryTreeNode<T>
    ) { }
}
