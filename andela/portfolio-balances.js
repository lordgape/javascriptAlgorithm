/* Challenge: Portfolio Balances

An investor opens a new account and wants to invest in a number of assets. Each asset begins with a balance of 0, and its value is stored in an array using 1-based indexing. Periodically, a contribution is received and equal investments are made in a subset of the portfolio.Each contribution will be given by investment amount, start index, end index. Each investment in that range will receive the contribution amount. Determine the maximum amount invested in any one investment after all contributions.

For example, start with an array of 5 elements (n = 5): investments = [0, 0, 0, 0, 0]. The variables left and right represent the starting and ending indices, inclusive. Another variable, contribution, is the new funds to invest per asset. The first investment is at index 1.

left    right   contribution              investments array

											[  0,  0,  0,  0,  0]
1          2        10                      [ 10, 10,  0,  0,  0]
2          4         5                      [ 10, 15,  5,  5,  0]
3          5        12                      [ 10, 15, 17, 17, 12] 
In the first round, a contribution of 10 is made to investments 1 and 2. In the second round, a contribution of 5 is made to assets 2, 3 and 4. Finally, in the third round, a contribution of 12 is added to investments 3, 4 and 5. The maximum invested in any one asset is 17

*Note: The investments array is not provided in the function. It is to be created after the number of assets available is known.

*/

const portfolioBalance = (length, updates) => {
  const investment = Array(length).fill(0);

  for (let i = 0; i < updates.length; i++) {
    investment[updates[i][0]] += updates[i][2];

    if (updates[i][1] < length - 1) {
      investment[updates[i][1] + 1] -= updates[i][2];
    }
  }

  for (let i = 1; i < length; i++) {
    investment[i] += investment[i - 1];
  }

  return Math.max(...investment);
};

const length = 5;
const updates = [
  [1, 3, 2],
  [2, 4, 3],
  [0, 2, -2],
];
// const length = 5;
// const updates = [
//   [1, 2, 10],
//   [2, 4, 5],
//   [3, 5, 12],
// ];

console.log(getModifiedArray(length, updates));
