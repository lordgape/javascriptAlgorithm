/* undirected path
Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.

test_00:
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

undirectedPath(edges, 'j', 'm'); // -> true
test_01:
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

undirectedPath(edges, 'm', 'j'); // -> true
test_02:
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

undirectedPath(edges, 'l', 'j'); // -> true
test_03:
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

undirectedPath(edges, 'k', 'o'); // -> false
test_04:
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

undirectedPath(edges, 'i', 'o'); // -> false
test_05:
const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];


undirectedPath(edges, 'a', 'b'); // -> true
test_06:
const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];

undirectedPath(edges, 'a', 'c'); // -> true
test_07:
const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];

undirectedPath(edges, 'r', 't'); // -> true
test_08:
const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];

undirectedPath(edges, 'r', 'b'); // -> false 

*/

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);

  // console.log(graph);

  return hasPath(graph, nodeA, nodeB, new Set());
};

const hasPath = (graph, src, desc, visisted) => {
  if (src === desc) return true;

  if (visisted.has(src)) return false;

  visisted.add(src);
  for (const neighbor of graph[src]) {
    if (hasPath(graph, neighbor, desc, visisted) === true) {
      return true;
    }
  }

  return false;
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

//test_00
const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

console.assert(undirectedPath(edges, "j", "m") === true, "test_00"); // -> true

// test_01:
const edges1 = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

console.assert(undirectedPath(edges1, "m", "j") === true, "test_01"); // -> true

// test_02:
const edges2 = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

console.assert(undirectedPath(edges2, "l", "j") === true, "test_02"); // -> true

// test_03:
const edges3 = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

console.assert(undirectedPath(edges3, "k", "o") === false, "test_03"); // -> false

// test_04:
const edges4 = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

console.assert(undirectedPath(edges4, "i", "o") === false, "test_04"); // -> false

// test_05:
const edges5 = [
  ["b", "a"],
  ["c", "a"],
  ["b", "c"],
  ["q", "r"],
  ["q", "s"],
  ["q", "u"],
  ["q", "t"],
];

console.assert(undirectedPath(edges5, "a", "b") === true), "test_05"; // -> true

// test_06:
const edges6 = [
  ["b", "a"],
  ["c", "a"],
  ["b", "c"],
  ["q", "r"],
  ["q", "s"],
  ["q", "u"],
  ["q", "t"],
];

console.assert(undirectedPath(edges6, "a", "c") === true, "test_06"); // -> true

// test_07:
const edges7 = [
  ["b", "a"],
  ["c", "a"],
  ["b", "c"],
  ["q", "r"],
  ["q", "s"],
  ["q", "u"],
  ["q", "t"],
];

console.assert(undirectedPath(edges7, "r", "t") == true, "test_07"); // -> true

// test_08:
const edges8 = [
  ["b", "a"],
  ["c", "a"],
  ["b", "c"],
  ["q", "r"],
  ["q", "s"],
  ["q", "u"],
  ["q", "t"],
];

console.assert(undirectedPath(edges8, "r", "b") === false, "test_08"); // -> false

console.log("Done");



