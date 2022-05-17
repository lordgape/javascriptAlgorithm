// Create a stack that would take only integers and is able to return the
// minimum value in the stack at any point;
// no O(n) operations are allowed.
// Use of the keywords `this` or `class` is not allowed.
// Inheritance (class based or prototypical) is not allowed.

// Your code here ...

const keepMinimumValueStack = () => {
  const stack = [];
  let min = [Infinity]
  return {
    push: (aValue) => {
       let lastValue =  min.pop();
       lastValue = lastValue > aValue ? aValue : lastValue 
       min.push(lastValue);
      stack.push(aValue);
      console.log(stack);
    },

    pop: () => {
      stack.pop();
      min.pop();
      console.log(stack);
    },

    min: () => {
        const small = min[min.length-1]
        console.log("small",small)
        return small;
    }
  };
};

const myStack = keepMinimumValueStack();
myStack.push(30);
myStack.push(41);
myStack.push(23);
myStack.push(57);
myStack.push(13);
myStack.push(22);
myStack.push(5);
myStack.push(1);
myStack.push(2);
// // console.log("//////////////////////");
// // console.log(myStack.originalStack());
console.log(myStack.min());
// // // Should print:
// // // [ 30, 41, 23, 57, 13, 22,  5,  1,  2 ]
// // // 1
// // console.log("//////////////////////");
// // myStack.pop();
// // console.log("//////////////////////");
// // console.log(myStack.originalStack());
// // console.log(myStack.min());
// // // Should print:
// // // [ 30, 41, 23, 57, 13, 22,  5,  1 ]
// // // 1
// // console.log("//////////////////////");
// // myStack.pop();
// // console.log("//////////////////////");
// // console.log(myStack.originalStack());
// // console.log(myStack.min());
// // // Should print:
// // // [ 30, 41, 23, 57, 13, 22, 5 ]
// // // 5
// // console.log("//////////////////////");
// // myStack.pop();
// // console.log("//////////////////////");
// // console.log(myStack.originalStack());
// // console.log(myStack.min());
// // // Should print:
// // // [ 30, 41, 23, 57, 13, 22 ]
// // // 13
// // console.log("//////////////////////");
// // myStack.pop();
// // console.log("//////////////////////");
// // console.log(myStack.originalStack());
// // console.log(myStack.min());
// // // Should print:
// // // [ 30, 41, 23, 57, 13 ]
// // // 13
// // console.log("//////////////////////");
myStack.pop();
// console.log("//////////////////////");
// console.log(myStack.originalStack());
// console.log(myStack.min());
// Should print:
// [ 30, 41, 23, 57 ]
// 23
// console.log("//////////////////////");
