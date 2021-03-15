"use strict";

const mergeSort = (arr) => {

    // break condition
    if(arr.length <= 1)
        return arr;

    let middle = Math.floor(arr.length/2);
    let leftArray = arr.slice(0,middle);
    let rightArray = arr.slice(middle)

    return merge(mergeSort(leftArray),mergeSort(rightArray))
    
  
  // break condition
  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2);
  let leftArray = arr.slice(0, middle);
  let rightArray = arr.slice(middle);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const merge = (left,right) => {
    console.log("going to merge left array",left);
    console.log("going to merge right array",right);
    let result = [];
    let leftIndex = 0
    let rightIndex = 0;

    while(leftIndex < left.length & rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++;
        }
        else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}

let items = [6, 5, 4, 9, 3, 7, 8, 2, 1, 10];
console.log("Result: ", mergeSort(items));
