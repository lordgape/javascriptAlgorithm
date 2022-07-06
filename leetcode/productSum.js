/* Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation. */

const productExceptSelf = (nums) => {
  nums = nums.map((num, numIndex) => {
    return nums.reduce((acc, cur, index) => {
      if (index != numIndex) {
        console.log(acc,cur);
        acc = Math.abs(acc * cur);
        
      }
      return acc;
    }, 1);
  });

  return nums;
};

// console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1,1,0,-3,3]));
