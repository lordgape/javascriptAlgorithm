const curry = (fn) => {
  return (curried = (...args) => {
    if (fn.length != args.length) {
      return curried.bind(null, ...args);
    }

    return fn(...args);
  });
};

let sum = (a, b, c) => {
  return a + b + c;
};

sum = curry(sum);

console.log(sum(1, 2, 3));
console.log(sum(1)(2, 3));
console.log(sum(1)(2)(3));
