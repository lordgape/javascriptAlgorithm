/*
Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.

In how many ways can you travel to the goal on a grid with dimensions m * n ? A 3 X 2 grid should give you 3 ways
*/

const gridTraveler = (m, n) => {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  table[1][1] = 1;

  for (let r = 0; r <= m; r++) {
    for (let c = 0; c <= n; c++) {
      const current = table[r][c];
      if (c + 1 <= n) table[r][c + 1] += current;
      if (r + 1 <= m) table[r + 1][c] += current;
    }
  }

  return table[m][n];
};

console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 5)); // 5985
