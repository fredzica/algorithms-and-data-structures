import { LinkedListQueue } from './queue'

class GraphNode<T> {
  visited = false

  constructor(public element: T, public neighbors: GraphNode<T>[] = []) {}

  addNeighbor(node: GraphNode<T>) {
    this.neighbors.push(node)
  }
}

class Graph<T> {
  constructor(public nodes: GraphNode<T>[] = []) {}

  size(): number {
    return this.nodes.length
  }

  breadthFirstSearch(visitFn: (node: GraphNode<T>) => void): void {
    if (this.nodes.length === 0) {
      return
    }

    const queue = new LinkedListQueue<GraphNode<T>>()
    queue.add(this.nodes[0])
    this.nodes[0].visited = true

    while (!queue.isEmpty()) {
      const currentNode = queue.remove()
      if (!currentNode) {
        // This should never happen, but TypeScript doesn't know that.
        break
      }

      visitFn(currentNode)

      for (const neighbor of currentNode.neighbors) {
        if (!neighbor.visited) {
          neighbor.visited = true
          queue.add(neighbor)
        }
      }
    }
  }

  depthFirstSearch(visitFn: (node: GraphNode<T>) => void): void {
    if (this.nodes.length === 0) {
      return
    }

    this.depthFirstSearchRecursive(this.nodes[0], visitFn)
  }

  private depthFirstSearchRecursive(
    node: GraphNode<T>,
    visitFn: (node: GraphNode<T>) => void,
  ): void {
    visitFn(node)
    node.visited = true
    for (const neighbor of node.neighbors) {
      if (!neighbor.visited) {
        this.depthFirstSearchRecursive(neighbor, visitFn)
      }
    }
  }
}

export { Graph, GraphNode }
