/* Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation. */

const productExceptSelf = (nums) => {
  let ans = [];

  ans[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    ans[i] = ans[i - 1] * nums[i - 1];
  }

  let right = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] = ans[i] * right;
    right *= nums[i];
  }

  return ans;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1,1,0,-3,3]));
