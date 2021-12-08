/*
An array is said to be analogous to the secret array if all of the following conditions are true:
• The length of the array is equal to the length of the secret array.
• Each integer in the array lies in the interval [lowerBound, upperBound].
• The difference between each pair of consecutive integers of the array must be equal to the difference between the respective pair of consecutive integers in the secret array. In other words, let the secret array be [s[0], s[1],..., s[n-1]] and let the analogous array be [a[0], a[1],..., a[n-1]], then (a[i-1] - a[i]) must be equal to (s[i-1] - s[i]) for each i from 1 to n -1.

Given the value of integers lowerBound and upperBound, inclusive, and the array of differences between each pair of consecutive integers of the secret array, find the number of arrays that are analogous to the secret array. If there is no array analogous to the secret array, return 0.

For example:
consecutiveDifference = [-2, -1, -2, 5]
lowerBound = 3
upperBound = 10

Note that none of the values is out of the bound. All possible analogous arrays are:
[3, 5, 6, 8, 3]
[4, 6, 7, 9, 4]
[5, 7, 8, 10, 5]

Tha answer is 3.
*/

const countAnalogousArrays = (
  consecutiveDifference,
  lowerBound,
  upperBound
) => {
  if (upperBound < lowerBound || consecutiveDifference?.length == 0) {
    return 0;
  }

  const difference = consecutiveDifference.length;
  let analogousCount = 0;

  for (let begins = lowerBound; begins <= upperBound; begins++) {
    const analogous = [];
    let isAnaglogous = true;
    analogous[0] = begins;

    for (let i = 1; i <= difference; i++) {
      const temp = analogous[i - 1] - consecutiveDifference[i - 1];
      if (temp < lowerBound || temp > upperBound) {
        isAnaglogous = false;
        break;
      } else {
        analogous[i] = temp;
      }
    }
    analogousCount += isAnaglogous ? 1 : 0;
  }
  return analogousCount;
};

const consecutiveDifference = [-2, -1, -2, 5];
const lowerBound = 3;
const upperBound = 10;

console.log(
  countAnalogousArrays(consecutiveDifference, lowerBound, upperBound)
);
