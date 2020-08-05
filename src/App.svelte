<script>
  import Graph from './components/Graph.svelte'
  import GraphNode from './components/GraphNode.svelte'
  import GraphEdge from './components/GraphEdge.svelte'

  const nodes = [
    { id: 'N1', label: 'Supplier ABC', icon: 'cargo' },
    { id: 'N2', label: 'Location A', icon: 'factory' },
    { id: 'N3', label: 'Location B', icon: 'factory' },
    { id: 'N4', label: 'Location C', icon: 'factory' },
    { id: 'N5', label: 'Location D', icon: 'factory' },
    { id: 'N6', label: 'Location E', icon: 'factory' },
    { id: 'N7', label: 'CD 123', icon: 'truck' },
    { id: 'N8', label: 'DC 234', icon: 'truck' },
    { id: 'N9', label: 'DC 456', icon: 'truck' }
  ]

  const edges = [
    { id: 'E1', source: 'N1', target: 'N2' },
    { id: 'E2', source: 'N2', target: 'N3' },
    { id: 'E3', source: 'N2', target: 'N4' },
    { id: 'E4', source: 'N3', target: 'N5' },
    { id: 'E5', source: 'N4', target: 'N6' },
    { id: 'E6', source: 'N5', target: 'N7' },
    { id: 'E7', source: 'N5', target: 'N8'},
    { id: 'E8', source: 'N6', target: 'N8' },
    { id: 'E9', source: 'N6', target: 'N9' },
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
