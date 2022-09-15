import { Graph, GraphNode } from '../../src/data-structures/graph'

const generateRandomGraph = (): Graph<number> => {
  const nodes: Array<GraphNode<number>> = []
  const nodeCount = Math.random() * 100

  for (let i = 0; i < nodeCount; i++) {
    nodes.push(new GraphNode(i, nodes[i - 1] ? [nodes[i - 1]] : []))
  }

  return new Graph(nodes)
}

describe('Graph tests', () => {
  const testSearch = <T>(
    graph: Graph<T>,
    searchFn: (visitFn: (node: GraphNode<T>) => void) => void,
  ) => {
    const elements: T[] = []
    searchFn((node) => {
      elements.push(node.element)
    })

    expect(elements).toHaveLength(graph.length())
    expect(elements).toContain(graph.nodes)
  }

  it('should visit every node with DFS', () => {
    const graph = generateRandomGraph()
    testSearch(graph, graph.depthFirstSearch)
  })

  it('should visit every node with BFS', () => {
    const graph = generateRandomGraph()
    testSearch(graph, graph.breadthFirstSearch)
  })
})
