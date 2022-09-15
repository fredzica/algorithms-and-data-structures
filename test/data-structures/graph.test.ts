import { Graph, GraphNode } from '../../src/data-structures/graph'

const generateConnectedGraph = (
  nodeCount = Math.random() * (100 - 2) + 2,
): Graph<number> => {
  const nodes: Array<GraphNode<number>> = []

  for (let i = 0; i < nodeCount; i++) {
    const node = new GraphNode(i)
    nodes.push(node)
  }

  for (let i = 0; i < nodeCount; i++) {
    const currentNode = nodes[i]
    if (i + 1 < nodes.length) {
      currentNode.addNeighbor(nodes[i + 1])
    }
    if (nodeCount > 1) {
      currentNode.addNeighbor(nodes[Math.floor(Math.random() * nodeCount)])
    }
  }

  return new Graph(nodes)
}

describe('Graph tests', () => {
  it('should run DFS on graph with size 0', () => {
    const graph = generateConnectedGraph(0)
    const elements: GraphNode<number>[] = []

    const fn = (node: GraphNode<number>) => {
      elements.push(node)
    }
    graph.depthFirstSearch(fn)
    expect(elements).toHaveLength(0)
    expect(elements).toEqual([])
  })

  it('should run DFS on graph with size 1', () => {
    const graph = generateConnectedGraph(1)
    const elements: number[] = []

    const fn = (node: GraphNode<number>) => {
      elements.push(node.element)
    }
    graph.depthFirstSearch(fn)
    expect(elements).toHaveLength(1)
    expect(elements).toEqual([0])
  })

  it('should visit every node once with DFS', () => {
    const graph = generateConnectedGraph()

    const elements: typeof graph.nodes = []
    graph.depthFirstSearch((node) => {
      elements.push(node)
    })

    expect(elements).toHaveLength(graph.size())
    expect(elements).toEqual(graph.nodes)
  })

  it('should run BFS on graph with size 0', () => {
    const graph = generateConnectedGraph(0)
    const elements: GraphNode<number>[] = []

    const fn = (node: GraphNode<number>) => {
      elements.push(node)
    }
    graph.breadthFirstSearch(fn)
    expect(elements).toHaveLength(0)
    expect(elements).toEqual([])
  })

  it('should run BFS on graph with size 1', () => {
    const graph = generateConnectedGraph(1)
    const elements: number[] = []

    const fn = (node: GraphNode<number>) => {
      elements.push(node.element)
    }
    graph.breadthFirstSearch(fn)
    expect(elements).toHaveLength(1)
    expect(elements).toEqual([0])
  })

  it('should visit every node once with BFS', () => {
    const graph = generateConnectedGraph()

    const elements: number[] = []
    graph.breadthFirstSearch((node) => {
      elements.push(node.element)
    })

    expect(elements).toHaveLength(graph.size())
    expect(elements).toContain(graph.nodes.map((node) => node.element))
  })
})
