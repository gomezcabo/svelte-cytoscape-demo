<script>
  import Graph from './components/Graph.svelte'
  import GraphNode from './components/GraphNode.svelte'
  import GraphEdge from './components/GraphEdge.svelte'

  const nodes = [
    { id: 'G1' },
    { id: 'G2' },
    { id: 'G3' },
    { id: 'G4' },
    { id: 'G5' },
    { id: 'N1', label: 'Supplier ABC', icon: 'cargo', parent: 'G1' },
    { id: 'N2', label: 'Location A', icon: 'factory', parent: 'G2' },
    { id: 'N3', label: 'Location B', icon: 'factory', parent: 'G3' },
    { id: 'N4', label: 'Location C', icon: 'factory', parent: 'G3'  },
    { id: 'N5', label: 'Location D', icon: 'factory', parent: 'G4'  },
    { id: 'N6', label: 'Location E', icon: 'factory', parent: 'G4'  },
    { id: 'N7', label: 'CD 123', icon: 'truck', parent: 'G5'  },
    { id: 'N8', label: 'DC 234', icon: 'truck', parent: 'G5'  },
    { id: 'N9', label: 'DC 456', icon: 'truck', parent: 'G5'  }
  ]

  const red = '#c53449'
  const yellow = '#f5a623'
  const green = '#42ac89'

  const edges = [
    { id: 'E1', source: 'N1', target: 'N2', capacity: 25, color: green },
    { id: 'E2', source: 'N2', target: 'N3', capacity: 10, color: yellow },
    { id: 'E3', source: 'N2', target: 'N4', capacity: 10, color: red },
    { id: 'E4', source: 'N3', target: 'N5', capacity: 10, color: yellow },
    { id: 'E5', source: 'N4', target: 'N6', capacity: 10, color: red },
    { id: 'E6', source: 'N5', target: 'N7', capacity: 5, color: green },
    { id: 'E7', source: 'N5', target: 'N8', capacity: 10, color: yellow },
    { id: 'E8', source: 'N6', target: 'N8', capacity: 20, color: red },
    { id: 'E9', source: 'N6', target: 'N9', capacity: 10, color: yellow },
  ]
</script>

<Graph>
  {#each nodes as node}
    <GraphNode node={node}/>
  {/each}

  {#each edges as edge}
    <GraphEdge edge={edge}/>
  {/each}
</Graph>
