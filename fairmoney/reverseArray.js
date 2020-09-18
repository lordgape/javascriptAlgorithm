/**
 * Given an array of integers, reverse the given array in place using an index and loop rather than a built-in function

Example
arr = [1,3,2,4,5]

Return the array [5,4,2,3,1] which is the reserve of the input array.

 */

 function reverseArray(n) {

    if(n.length == 1)
        return n;

    let newArray = [];
    let counter = 0

    for(let i = n.length; i > 0 ; i--) {
        
        newArray[counter] = n[i-1];
        counter++;
    }

    return newArray;
 }

 console.log(`My new array is ${reverseArray([0,1])}`);