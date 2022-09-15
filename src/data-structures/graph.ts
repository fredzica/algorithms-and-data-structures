class GraphNode<T> {
  element: T
  visited = false
  neighbors: GraphNode<T>[]

  constructor(element: T, neighbors: GraphNode<T>[] = []) {
    this.element = element
    this.neighbors = neighbors
  }

  addNeighbor(node: GraphNode<T>) {
    this.neighbors.push(node)
  }
}

class Graph<T> {
  nodes: GraphNode<T>[]

  constructor(nodes: GraphNode<T>[] = []) {
    this.nodes = nodes
  }

  size(): number {
    return this.nodes.length
  }

  breadthFirstSearch(visitFn: (node: GraphNode<T>) => void): void {
    if (this.nodes.length === 0) {
      return
    }

    return
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
