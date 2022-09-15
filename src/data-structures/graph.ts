class GraphNode<T> {
  element: T
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
    return
  }

  depthFirstSearch(visitFn: (node: GraphNode<T>) => void): void {
    return
  }
}

export { Graph, GraphNode }
