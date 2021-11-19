/* shortest path
Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1.

test_00:
const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

shortestPath(edges, 'w', 'z'); // -> 2
test_01:
const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

shortestPath(edges, 'y', 'x'); // -> 1
test_02:
const edges = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];

shortestPath(edges, 'a', 'e'); // -> 3
test_03:
const edges = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];

shortestPath(edges, 'e', 'c'); // -> 2
test_04:
const edges = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];

shortestPath(edges, 'b', 'g'); // -> -1
test_05:
const edges = [
  ['c', 'n'],
  ['c', 'e'],
  ['c', 's'],
  ['c', 'w'],
  ['w', 'e'],
];

shortestPath(edges, 'w', 'e'); // -> 1
test_06:
const edges = [
  ['c', 'n'],
  ['c', 'e'],
  ['c', 's'],
  ['c', 'w'],
  ['w', 'e'],
];

shortestPath(edges, 'n', 'e'); // -> 2
test_07:
const edges = [
  ['m', 'n'],
  ['n', 'o'],
  ['o', 'p'],
  ['p', 'q'],
  ['t', 'o'],
  ['r', 'q'],
  ['r', 's']
];

shortestPath(edges, 'm', 's'); // -> 6

*/

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);

  const visited = new Set([nodeA]);

  const queue = [[nodeA, 0]];

  while (queue.length > 0) {
    const currentNode = queue.shift();

    const [node, distance] = currentNode;

    if (node == nodeB) return distance;

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  return -1;
};

const buildGraph = (edges) => {
  const graph = {};

  for (const edge of edges) {
    const [a, b] = edge;

    if (!graph[a]) {
      graph[a] = [];
    }

    if (!graph[b]) {
      graph[b] = [];
    }

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};


// test_00: // -> 2
const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

const test = shortestPath(edges, 'w', 'z'); 
console.assert(test == 2)
console.log(test);

// test_01:  // -> 1
const edges1 = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

const test1 = shortestPath(edges1, 'y', 'x');
console.assert(test1 == 1)
console.log(test1);

// test_02: // -> 3
const edges2 = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];

const test2 = shortestPath(edges2, 'a', 'e'); // -> 3
console.assert(test2 == 3)
console.log(test2);

// test_04: // -> -1
const edges3 = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];

const test3 = shortestPath(edges3, 'b', 'g'); 
console.assert(test3 == -1)
console.log(test3);

// test_05:  // -> 1
const edges4 = [
  ['c', 'n'],
  ['c', 'e'],
  ['c', 's'],
  ['c', 'w'],
  ['w', 'e'],
];

const test4 = shortestPath(edges4, 'w', 'e');
console.assert(test4 == 1)
console.log(test4);

// test_06: // -> 2
const edges5 = [
  ['c', 'n'],
  ['c', 'e'],
  ['c', 's'],
  ['c', 'w'],
  ['w', 'e'],
];

const test5 = shortestPath(edges5, 'n', 'e'); 
console.assert(test5 == 2)
console.log(test5);


// test_07: // -> 6
const edges6 = [
  ['m', 'n'],
  ['n', 'o'],
  ['o', 'p'],
  ['p', 'q'],
  ['t', 'o'],
  ['r', 'q'],
  ['r', 's']
];

const test6 = shortestPath(edges6, 'm', 's'); 
console.assert(test6 == 6)
console.log("test_07",test6);

console.log("Done");