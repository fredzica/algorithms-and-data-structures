import { LinkedListQueue } from './queue'

/**
 * Represents a graph node.
 */
class GraphNode<T> {
  visited = false

  constructor(public element: T, public neighbors: GraphNode<T>[] = []) {}

  /**
   * Adds a neighbor to the node.
   * @param node The node to add as a neighbor.
   */
  addNeighbor(node: GraphNode<T>) {
    this.neighbors.push(node)
  }
}

/**
 * Represents a graph.
 */
class Graph<T> {
  constructor(public nodes: GraphNode<T>[] = []) {}

  /**
   * Returns the size of the graph.
   * The runtime complexity is O(1).
   * The space complexity is O(1).
   * @returns The number of nodes in the graph.
   */
  size(): number {
    return this.nodes.length
  }

  /**
   * Performs a breadth-first search on the graph.
   * The runtime complexity is O(n + a), where n is the number of nodes
   * and a is the number of adjacencies.
   * The space complexity is O(n).
   * @param visitFn The function to call when a node is visited.
   */
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

  /**
   * Performs a depth-first search on the graph.
   * The runtime complexity is O(n + a), where n is the number of nodes
   * and a is the number of adjacencies.
   * The space complexity is O(n) (because of the recursion call stack).
   * @param visitFn The function to call when a node is visited.
   */
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
