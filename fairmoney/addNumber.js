/**
 * Determine the integer floor of the sum of two floating point numbers. 
 * The floor is the truncated float value i.e anything after the decimal point is dropped.
 * 
 * Example 
 * floor(1.1 + 3.89) = floor(4.99) = 4
 */

 function addNumbers(a,b)
 {
     console.log(`a + b in javascript is ${a + b}`)
     return Math.floor(a + b);
 }

 console.log(`the integer floor sum of a + b is ${addNumbers(0.003, 1.2339)}`)