class GraphNode<T> {
  element: T
  neighbors: GraphNode<T>[]

  constructor(element: T, neighbors: GraphNode<T>[] = []) {
    this.element = element
    this.neighbors = neighbors
  }
}

class Graph<T> {
  nodes: GraphNode<T>[]

  constructor(nodes: GraphNode<T>[] = []) {
    this.nodes = nodes
  }

  length(): number {
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
