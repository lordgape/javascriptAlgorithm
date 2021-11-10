const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const breathFirstTraversal = (graph, sourceNode) => {
  const queue = [sourceNode];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    console.log(currentNode);

    for (const neighbor of graph[currentNode]) {
      queue.push(neighbor);
    }
  }
};

breathFirstTraversal(graph,'a');
