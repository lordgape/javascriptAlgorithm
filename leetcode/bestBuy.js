/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0 */

// Time Complexity is O(n)
// Space Complexity is O(1)

const bestBuy = (prices) => {
  let largestPrice = 0;
  let minSofar = Infinity;
  for (const price of prices) {
    if (price < minSofar) {
      minSofar = price;
    } else {
      largestPrice = Math.max(largestPrice, price - minSofar);
    }
  }

  return largestPrice;
};

console.log(bestBuy([7, 1, 5, 3, 6, 4]));
console.log(bestBuy([7, 6, 4, 3, 1]));
