const assert = require('assert');

/**
 * Returns the smallest number with the same number of digits as `n`. 
 * Negative numbers always return 0.
 */
function minByDigits(n) {
  if(n <= 0 || n.toString().length == 1)
  {
    return 0
  }

  let strDigit = n.toString()
  const numberOfZero = strDigit.length;
  const fill =  new Array(numberOfZero-1).fill(0);

  // console.log(1 + fill.join(""),numberOfZero);

  return +(1 + fill.join(""));

  // log n
}

assert(minByDigits(-5) === 0);
assert(minByDigits(1) === 0);
assert(minByDigits(15) === 10);
assert(minByDigits(192) === 100);
assert(minByDigits(975) === 100);

console.log('done!');