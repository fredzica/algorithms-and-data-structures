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
}

export { Graph, GraphNode }
