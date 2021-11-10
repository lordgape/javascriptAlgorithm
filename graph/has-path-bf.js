/* has path
Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.

test_00:
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

hasPath(graph, 'f', 'k'); // true
test_01:
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

hasPath(graph, 'f', 'j'); // false
test_02:
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

hasPath(graph, 'i', 'h'); // true
test_03:
const graph = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],  
};

hasPath(graph, 'v', 'w'); // true
test_04:
const graph = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],  
};

hasPath(graph, 'v', 'z'); // false

*/

const hasPathBF = (graph, src, des) => {
    const queue = [src]

    while(queue.length > 0) {
        const currentNode = queue.shift();
        if(currentNode == des) {
            return true;
        }

        for(const neighbor of graph[currentNode]) {
            queue.push(neighbor);
        }
    }

    return false;
  };
  
  const graph = {
    v: ['x', 'w'],
    w: [],
    x: [],
    y: ['z'],
    z: [],  
  };
  
  console.log('test_01:',hasPathBF(graph, 'v', 'z')); // false
  
  
  // test_02:
  const graph2 = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };
  
  console.log('test_02:',hasPathBF(graph2, 'i', 'h')); // true