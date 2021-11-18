/* 
connected components count
Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.

test_00:
connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}); // -> 2
test_01:
connectedComponentsCount({
  1: [2],
  2: [1,8],
  6: [7],
  9: [8],
  7: [6, 8],
  8: [9, 7, 2]
}); // -> 1
test_02:
connectedComponentsCount({
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1]
}); // -> 3
test_03:
connectedComponentsCount({}); // -> 0
test_04:
connectedComponentsCount({
  0: [4,7],
  1: [],
  2: [],
  3: [6],
  4: [0],
  6: [3],
  7: [0],
  8: []
}); // -> 5

*/

const connectedComponentsCount = (graph) => {
  let count = 0;

  const visited = new Set();

  for (const src in graph) {
    if (exploreConnectedComponent(graph, src, visited)) {
      count += 1;
    }
  }

  return count;
};

const exploreConnectedComponent = (graph, currentNode, visited) => {
  if (visited.has(String(currentNode))) return false;

  visited.add(String(currentNode));

  for (const neighbor of graph[currentNode]) {
    exploreConnectedComponent(graph, neighbor, visited);
  }

  return true;
};

// test_00: // -> 2
const test = connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
});
console.assert(test == 2);
console.log(test);

// test_01: // -> 1
const test1 = connectedComponentsCount({
  1: [2],
  2: [1, 8],
  6: [7],
  9: [8],
  7: [6, 8],
  8: [9, 7, 2],
});
console.assert(test1 == 1);
console.log(test1);

// test_02: // -> 3
const test2 = connectedComponentsCount({
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1],
});
console.assert(test2 == 3);
console.log(test2);

// test_03: // -> 0
const test3 = connectedComponentsCount({});
console.assert(test3 == 0);
console.log(test3);

// test_04: // -> 5
const test4 = connectedComponentsCount({
  0: [4, 7],
  1: [],
  2: [],
  3: [6],
  4: [0],
  6: [3],
  7: [0],
  8: [],
});
console.assert(test4 == 5);
console.log(test4);

console.log("Done");
