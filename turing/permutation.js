"use strict";

const permutation = (str) => {
  permutateWord(str, 0, str.length - 1);
};

const permutateWord = (str, startingIndex, endingIndex) => {
  if (startingIndex == endingIndex) console.log(str);

  for (let i = startingIndex; i <= endingIndex; i++) {
    str = swap(str, startingIndex, i);
    permutateWord(str, startingIndex + 1, endingIndex);
    str = swap(str, startingIndex, i);
  }
};

const swap = (str, fromPosition, toPosition) => {
  let stringArray = str.split("");

  let temp = stringArray[fromPosition];
  stringArray[fromPosition] = stringArray[toPosition];
  stringArray[toPosition] = temp;

  return stringArray.join("");


  
};

console.log("", permutation("ABC"));
