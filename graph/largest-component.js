/*

largest component
Write a function, largestComponent, that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph.

test_00:
largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}); // -> 4
test_01:
largestComponent({
  1: ['2'],
  2: ['1','8'],
  6: ['7'],
  9: ['8'],
  7: ['6', '8'],
  8: ['9', '7', '2']
}); // -> 6
test_02:
largestComponent({
  3: [],
  4: ['6'],
  6: ['4', '5', '7', '8'],
  8: ['6'],
  7: ['6'],
  5: ['6'],
  1: ['2'],
  2: ['1']
}); // -> 5
test_03:
largestComponent({}); // -> 0
test_04:
largestComponent({
  0: ['4','7'],
  1: [],
  2: [],
  3: ['6'],
  4: ['0'],
  6: ['3'],
  7: ['0'],
  8: []
}); 

*/

const largestComponent = (graph) => {
  let largest = 0;

  const visited = new Set();

  for (const node in graph) {
    const size = explore(graph, node, visited);

    if (size > largest) {
      largest = size;
    }
  }

  return largest;
};

const explore = (graph, currentNode, visited) => {
  if (visited.has(currentNode)) return 0;

  visited.add(currentNode);

  let size = 1;

  for (const neighbor of graph[currentNode]) {
    size += explore(graph, neighbor, visited);
  }

  return size;
};

// test_00: // -> 4
const test = largestComponent({
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
});

console.log("test_00", test);
console.assert(test == 4);

// test_01:  // -> 6
const test2 = largestComponent({
  1: ['2'],
  2: ['1','8'],
  6: ['7'],
  9: ['8'],
  7: ['6', '8'],
  8: ['9', '7', '2']
});

console.log("test_01", test2);
console.assert(test2 == 6);

// test_02: // -> 5
const test3 = largestComponent({
  3: [],
  4: ['6'],
  6: ['4', '5', '7', '8'],
  8: ['6'],
  7: ['6'],
  5: ['6'],
  1: ['2'],
  2: ['1']
}); 

console.log("test_02", test3);
console.assert(test3 == 5);

// test_03:  // -> 0
const test4 = largestComponent({});

console.log("test_03", test4);
console.assert(test4 == 0);

// test_04: == 3
const test5 = largestComponent({
  0: ['4','7'],
  1: [],
  2: [],
  3: ['6'],
  4: ['0'],
  6: ['3'],
  7: ['0'],
  8: []
}); 

console.log("test_04", test5);
console.assert(test5 == 3);

console.log("Done");
