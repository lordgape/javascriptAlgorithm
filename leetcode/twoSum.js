/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */

// Time Complexity is O(n)
// Space Complexity is O(n)

const twoSum = (nums, target) => {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i];
    if (remainder in hash) {
      // return [hash[remainder], i];
      return true
    }
    hash[nums[i]] = i;
  }

  return false
};

console.log(twoSum([3, 3], 6));
console.log(twoSum([2,7,11,15], 9));
