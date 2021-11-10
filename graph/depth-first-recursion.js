const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const depthFirstTraversal = (graph, sourceNode) => {
  console.log(sourceNode);
  for (const neighbor of graph[sourceNode]) {
    depthFirstTraversal(graph, neighbor);
  }
};

depthFirstTraversal(graph,'a');
