/*
Grid Climbing: A grid with mrows and n columns is used to form a cluster of nodes. If a point in the grid has a value of 1, then it represents a node. Each node in the cluster has a level associated with it. A node located in the throw of the grid is a level inode. Here are the rules for creating a cluster: Every node at level /connects to all the nodes at level k where > i and kis the first level after level i that contains at least 1 node. • When i reaches the last level in the grid, no more connections are possible. . Given such a grid, find the number of connections present in the cluster.

Example: gridOfNodes = [[1, 1, 1], [0, 1, 0], [0, 0, 0],[1,1, 0]] .
• Row 1 to row 2: o Each of the three nodes in the first row connects to the single node in the second row: 3 connections. Row 2 to row 4: There is no node in row 3 so it is skipped.
• The single node in the second row connects to each of the two nodes in the last row: 2 connections. There are a total of 3 + 2 = 5 connections. Function Description Complete the numberOfConnections function in the editor below. The function must return a integer denoting the number of connections.

Can someone please provide the optimized code in java for the given solution below. Moreover what will be the time and space complexity for thr given and optmized solution below.

*/

const nodeCount = (grid) => {
  let count = 0;
  let current = 0;
  let prev = 0;

  const visited = new Set();

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      current = exploreSize(r, c, grid, visited);
      if (current > 0) {
        count += current * prev;
        prev = current;
      }
    }
  }

  return count;
};

const exploreSize = (row, column, grid, visited) => {
  const rowInBound = 0 <= row && row < grid.length;
  const columnInBound = 0 <= column && column < grid[0].length;

  if (!rowInBound || !columnInBound) return 0;

  if (grid[row][column] == 0) return 0;

  const pos = row + "," + column;

  if (visited.has(pos)) return 0;

  visited.add(pos);

  let size = 1;

  size += exploreSize(row - 1, column, grid, visited);
  size += exploreSize(row, column - 1, grid, visited);
  size += exploreSize(row, column + 1, grid, visited);

  return size;
};

const gridOfNodes = [
  [1, 1, 1],
  [1, 1, 0],
  [0, 0, 0],
  [1, 1, 0],
];

console.log(nodeCount(gridOfNodes));
