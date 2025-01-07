class Graph {
    constructor(vertices) {
      this.vertices = vertices;
      this.adjList = new Map();
    }
  
    // Add edge to the graph
    addEdge(u, v) {
      if (!this.adjList.has(u)) this.adjList.set(u, []);
      this.adjList.get(u).push(v);
    }
  
    // Topological Sort using DFS
    topologicalSortDFS() {
      const visited = new Set();
      const stack = [];
  
      const dfs = (node) => {
        if (visited.has(node)) return;
        visited.add(node);
  
        const neighbors = this.adjList.get(node) || [];
        for (const neighbor of neighbors) {
          dfs(neighbor);
        }
  
        stack.push(node); // Push the node to stack after visiting its neighbors
      };
  
      // Start DFS for all vertices
      for (const vertex of this.adjList.keys()) {
        if (!visited.has(vertex)) dfs(vertex);
      }
  
      return stack.reverse(); // Reverse stack for topological order
    }
  }
  

  const g = new Graph(6);
  g.addEdge(5, 2);
  g.addEdge(5, 0);
  g.addEdge(4, 0);
  g.addEdge(4, 1);
  g.addEdge(2, 3);
  g.addEdge(3, 1);
  
  console.log("Topological Order (DFS):", g.topologicalSortDFS());
  