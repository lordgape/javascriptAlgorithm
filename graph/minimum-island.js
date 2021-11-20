/* minimum island
Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.

You may assume that the grid contains at least one island.

test_00:
const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

minimumIsland(grid); // -> 2
test_01:
const grid = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
];

minimumIsland(grid); // -> 1
test_02:
const grid = [
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
];

minimumIsland(grid); // -> 9
test_03:
const grid = [
  ['W', 'W'],
  ['L', 'L'],
  ['W', 'W'],
  ['W', 'L']
];

minimumIsland(grid); // -> 1

*/

const minimumIsland = (grid) => {
  let smallest = Infinity;

  const visited = new Set();

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const size = exploreSize(grid, r, c, visited);

      if (size != 0 && size < smallest) {
        smallest = size;
      }
    }
  }

  return smallest;
};

const exploreSize = (grid, row, col, visited) => {
  const rowInbound = 0 <= row && row < grid.length;
  const colInbound = 0 <= col && col < grid[0].length;

  if (!rowInbound || !colInbound) return 0;

  if (grid[row][col] === "W") return 0;

  const pos = row + "," + col;

  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;

  size += exploreSize(grid, row - 1, col, visited);
  size += exploreSize(grid, row + 1, col, visited);
  size += exploreSize(grid, row, col + 1, visited);
  size += exploreSize(grid, row, col - 1, visited);

  return size;
};

// test_00:  // -> 2
const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

const test = minimumIsland(grid);

console.assert(test === 2);
console.log("test", test);
console.log("Done");
