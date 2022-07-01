/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

const hasDuplicate = (nums) => {
  const hash = {}
  for(const num of nums) {
      console.log(num);
      if(num in hash) {
          return true
      }
      hash[num] = 1;
  }
  return false;
};

console.log(hasDuplicate([1,1,1,3,3,4,3,2,4,2]));
console.log(hasDuplicate([1,2,3]));
