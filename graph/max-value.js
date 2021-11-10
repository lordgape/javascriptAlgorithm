/*
Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.

Solve this without using any built-in array methods.

You can assume that the array is non-empty.

test_00:
maxValue([4, 7, 2, 8, 10, 9]); // -> 10

test_01:
maxValue([10, 5, 40, 40.3]); // -> 40.3

*/

const max_value = (nums) => {
  // Base Case

  if (nums.length == 1) {
    return nums[0];
  }

  const neighbor1 = nums[0];
  const neighbor2 = max_value(nums.slice(1));

  if (neighbor1 > neighbor2) {
    return neighbor1;
  }

  return neighbor2;
};

console.log(max_value([10, 5, 40, 40.3]));
