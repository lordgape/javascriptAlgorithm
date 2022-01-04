/*
Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.

In how many ways can you travel to the goal on a grid with dimensions m * n ? A 3 X 2 grid should give you 3 ways
*/

const gridTraveler = (m, n, memo = {}) => {
  const pos = m + "," + n;
  if (pos in memo) return memo[pos];
  if (m == 1 && n == 1) return 1;
  if (m == 0 || n == 0) return 0;

  memo[pos] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);

  return memo[pos];
};

console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(18, 5)); // 5985
