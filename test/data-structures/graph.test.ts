import { Graph, GraphNode } from '../../src/data-structures/graph'

const generateRandomConnectedGraph = (): Graph<number> => {
  const nodes: Array<GraphNode<number>> = []
  const nodeCount = Math.random() * 100

  const firstNode = new GraphNode(0)
  nodes.push(firstNode)
  for (let i = 1; i < nodeCount; i++) {
    const node = new GraphNode(i)
    nodes.push(node)
  }

  for (let i = 0; i < nodeCount; i++) {
    const currentNode = nodes[i]
    if (i + 1 < nodes.length) {
      currentNode.addNeighbor(nodes[i + 1])
    }
    currentNode.addNeighbor(nodes[Math.floor(Math.random() * nodeCount)])
  }

  return new Graph(nodes)
}

describe('Graph tests', () => {
  it('should visit every node once with DFS', () => {
    // TODO: test 0 and 1 element graphs
    const graph = generateRandomConnectedGraph()

    const elements: typeof graph.nodes = []
    graph.depthFirstSearch((node) => {
      elements.push(node)
    })

    expect(elements).toHaveLength(graph.size())
    expect(elements).toEqual(graph.nodes)
  })

  it('should visit every node once with BFS', () => {
    const graph = generateRandomConnectedGraph()

    const elements: number[] = []
    graph.breadthFirstSearch((node) => {
      elements.push(node.element)
    })

    expect(elements).toHaveLength(graph.size())
    expect(elements).toContain(graph.nodes.map((node) => node.element))
  })
})
