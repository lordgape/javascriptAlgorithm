const arr = [
  23,
  "apple",
  ["banana", "strawberry", "apple", 23],
  ["banana", "strawberry", "apple", 23],
];
const stockLeft = (arr, item) => {
  let sum = 0;
  arr = arr.flat();
  for (const element of arr) {
    if (element === item) {
      sum += 1;
    }
  }

  return sum;
};

console.log(stockLeft(arr, 23));
console.log(stockLeft(arr, "banana"));

const matchKeyCombo = (sequence) => {
  const qSplit = sequence.toLowerCase().split("qee");
  const zSplit = sequence.toLowerCase().split("zcc");

  return qSplit.length == zSplit.length;
};

console.log(matchKeyCombo("QEEAZCC"));

/* Write a program that, given an array A[] of n numbers and another number x, determines whether or not there exist two elements in A[] whose sum is exactly x. */

const getPair = (arr, target) => {
  const visited = new Set();

  for (const element of arr) {
    const temp = target - element;

    if (visited.has(temp)) {
      return [temp, element];
    }
    visited.add(element);
  }

  return [];
};

console.log(getPair([1, 2, 3], 5));
console.log(getPair([0, -1, 2, -3, 1], -2));

const numberOnly = (n) => {
  n.forEach((element) => {});
  return n.filter((item) => /\d/.test(item));
};

console.log(numberOnly([1, "a", "b", "2"]));

function sortObjectByNumericKey(table, criteria) {
  return (a, b) => {
    if (!a.hasOwnProperty(criteria) || !b.hasOwnProperty(criteria)) {
      return 0;
    }

    comparison = +a[criteria] - +b[criteria];

    return comparison * -1;
  };
}

const a = [
  { key: 6 },
  { key: 9 },
  { key: 2 },
  { key: 1 },
  { key: 12 },
  { key: 63 },
  { key: 20 },
  { key: 25 },
  { key: 13 },
  { key: 19 },
  { key: 32 },
  { key: 70 },
  { key: 14 },
  { key: 7 },
  { key: 8 },
];

console.log(a.sort(sortObjectByNumericKey(a, "key")));

/**
 *  console.log(isAnagram("anagram","nagaram"));
 * @param {Anagram} str
 */

const isAnagram = (s, t) => {
  let strS = {};
  if (s.length !== t.length) return false;
  for (let char of s) {
    strS[char] = (strS[char] || 0) + 1;
    console.log(strS[char]);
  }
  for (let char of t) {
    if (!strS[char]) return false;
    strS[char]--;
  }

  return true;
};

/**
 *
 * @param {Palidrome} str
 */
function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, "");
  var reverseStr = lowRegStr.split("").reverse().join("");
  return reverseStr === lowRegStr;
}
palindrome("A man, a plan, a canal. Panama");

/**
 *
 * Most repeated word
 */

function findMostReaptedWord(str) {
  let mapCount = {};
  let mostRepeating;
  let currentCount = 0;
  str.match(/\w+/g).forEach(function (word) {
    mapCount[word] = (mapCount[word] || 0) + 1;
  });
  console.log(mapCount);
  for (let word in mapCount) {
    if (mapCount[word] > currentCount) {
      currentCount = mapCount[word];
      mostRepeating = word;
    }
  }
  return mostRepeating;
}

const filterDuplicate = (arr) => {
  return Object.keys(
    arr.reduce((acc, currentValue) => {
      acc[currentValue] = 0;
      return acc;
    }, {})
  );
};

/**
 *
 * @description Find the smallest positive integer that does not occur in a given sequence.
 */

function missingInteger(A) {
  let MapPositiveInteger = A.reduce((accumulator, currentElement) => {
    if (currentElement > 0) accumulator[currentElement] = true;

    return accumulator;
  }, {});

  let sizeOfMappedinteger = Object.keys(MapPositiveInteger).length;

  if (sizeOfMappedinteger == 0) return 1;

  for (let i = 1; i <= sizeOfMappedinteger; i++) {
    if (!MapPositiveInteger[i]) return i;
  }

  return Math.max(...A) + 1;
}

/**
 *
 * @description  pair is complete
 */
const isParenComplete = (str) =>
  !str.split("").reduce((prev, char) => {
    console.log(`R1 ${prev} ${char}`);

    if (prev < 0) {
      console.log(`R2 ${prev}`);
      return prev;
    }
    if (char === "(") {
      //    console.log(`R3 ${prev}`);
      return ++prev;
    }
    if (char === ")") {
      console.log(`R4 ${prev}`);
      return --prev;
    }
    return prev;
  }, 0);

/**
 *
 * sumOfDigit
 *
 */

function sumOfDigit(digit) {
  if (Math.floor(digit) == 0) return 0;
  return Math.floor(digit % 10) + sumOfDigit(digit / 10);
}

/**
 *
 * priceCheck
 */
function priceCheck(products, productPrice, productSold, soldPrice) {
  let productPriceRegister = products.reduce(
    (accumulator, currentElement, currentIndex) => {
      accumulator[currentElement] = productPrice[currentIndex];

      return accumulator;
    },
    {}
  );

  return productSold.filter((element, currentIndex) => {
    return productPriceRegister[element] != soldPrice[currentIndex];
  }).length;
}

/**
 * manipulateStudentRecord
 */
function manipulateStudentRecord(obj, operation, prop, newValue) {
  if (
    operation == "delete" &&
    Object.prototype.hasOwnProperty.call(obj, prop)
  ) {
    delete obj[prop];
  }

  if (operation == "edit" && Object.prototype.hasOwnProperty.call(obj, prop)) {
    obj[prop] = newValue;
  }

  return obj;
}

/**
 * Printing steps.
 */
function printSteps(n) {
  for (let row = 0; row < n; row++) {
    let step = "";

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        step += "#";
      } else {
        step += " ";
      }
    }

    console.log(step);
  }
}

/**
 *
 * @param {String} hex An hashed password from register
 */
function heidiDecode(hex) {
  var str = "";
  var shift = parseInt(hex.substr(-1));
  hex = hex.substr(0, hex.length - 1);
  for (var i = 0; i < hex.length; i += 2)
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16) - shift);
  return str;
}

/**
 *  Capitalize each word in a string
 */
function capitalize(str) {
  return str
    .split(" ")
    .map((element) => {
      element = element[0].toUpperCase() + element.slice(1);

      return element;
    })
    .join(" ");
}

/**
 * Anagram problem. Check if two string uses the same number of character to form different or the same words. Ignore whitespace and puntunctions and special character
 */

function anagram(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

/**
 * Array Chunked
 */
function chunk(array, size) {
  let chunked = [];

  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  // for(let element of array)
  // {
  //     let last = chunked[chunked.length -1] ;

  //     if(!last || last.length === size)
  //     {
  //         chunked.push([element]);
  //     }
  //     else{

  //         last.push(element);
  //     }
  // }

  return chunked;
}

/**
 *  Maximum Char in a string
 */
function maxChar(str) {
  let maxCharMap = {};

  for (let character of str)
    maxCharMap[character] = maxCharMap[character] + 1 || 1;

  let maxValue = Math.max(...Object.values(maxCharMap));

  return Object.keys(maxCharMap).filter(
    (key) => maxCharMap[key] == maxValue
  )[0];
}

/**
 * Destructive parameters. depends on function dependOns
 */
function double({ year = dependOn("year"), age = 0, size = 0 } = {}) {
  year *= 2;
  age *= 2;
  size *= 2;

  return { year, age, size };
}

function dependOn(param) {
  let error = new Error(`The parameter ${param} is required`);

  throw error;
}

/**
 *  Natural calculator
 */
const one = (fn) => {
  let digit = 1;
  if (fn == undefined) return digit;
  else return compute(digit, fn);
};

const compute = (digit, fn) => {
  let mathOperand = fn;

  switch (mathOperand.operator) {
    case "plus":
      return digit + mathOperand.y;
    case "multiply":
      return digit * mathOperand.y;
    case "subtract":
      return digit - mathOperand.y;
    case "divide":
      return digit / mathOperand.y;
  }
};

const two = (fn) => {
  let digit = 2;
  if (fn == undefined) return digit;
  else return compute(digit, fn);
};

const plus = (randomX) => {
  return {
    operator: "plus",
    y: randomX,
  };
};

/**
 * There is an array with some numbers. All numbers are equal except for one. Try to find it!
 */
function findUniq(arr) {
  let xArr = arr.reduce((accumulate, currentValue) => {
    if (currentValue in accumulate) accumulate[currentValue]++;
    else accumulate[currentValue] = 1;

    return accumulate;
  }, {});

  return Number(
    Object.keys(xArr).filter((e) => {
      return xArr[e] == 1;
    })
  );
}

/**
 * Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements,
 * with the same multiplicities.
 * "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
 *
 * Interesting test case occur when the array has zero
 * [63, 97, 0, 21, 3, 81, 83], [3969, 9409, 0, 441, 9, 6561, 6889]
 */
function comp(array1, array2) {
  if (
    array1 == null ||
    array1 == undefined ||
    array2 == null ||
    array2 == undefined ||
    array1.length !== array2.length
  )
    return false;

  return compsame(array1, array2);

  function compsame(array1, array2) {
    array1 = array1
      .map((element) => {
        return element * element;
      })
      .sort((element1, element2) => {
        return element1 > element2;
      });

    let newArray = [];

    newArray = array2
      .sort((element1, element2) => {
        return element1 > element2;
      })
      .filter((element, cIndex) => {
        if (array1[cIndex] === element) {
          newArray.push(element);
          return newArray;
        }
      });

    return newArray.length == array1.length;
  }
}

/**
 * The goal of this exercise is to convert a string to a new string where each character in the new string
 * is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string.
 * Ignore capitalization when determining if a character is a duplicate.
 *
 */
function duplicateEncode(word) {
  let countDuplicate = {};

  countDuplicate = word
    .toLowerCase()
    .split("")
    .reduce((accumulate, currentValue, cIndex, cArray) => {
      if (currentValue in accumulate) accumulate[currentValue]++;
      else accumulate[currentValue] = 1;

      return accumulate;
    }, {});

  return word
    .toLowerCase()
    .split("")
    .reduce((accumulate, currentValue) => {
      if (countDuplicate[currentValue] >= 2) {
        accumulate.push(")");
      } else {
        accumulate.push("(");
      }

      return accumulate;
    }, [])
    .join("");
}

/**
 * Given: an array containing hashes of names
 * Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
 */
function listNames(names) {
  let lastTwoNames = [];

  if (names.length >= 2) {
    lastTwoNames.unshift(names.pop()["name"]);
    lastTwoNames.unshift(names.pop()["name"]);
    names.push({ name: lastTwoNames.join(" & ") });
  }

  return names
    .reduce((accumulate, currentValue) => {
      accumulate.push(currentValue["name"]);

      return accumulate;
    }, [])
    .join(", ");
}

/**
 * Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
 * You can guarantee that input is non-negative.
 */
function countBits(n) {
  return n
    .toString(2)
    .split("")
    .reduce((accumulate, currentValue) => {
      if (currentValue == "1") accumulate++;

      return accumulate;
    }, 0);
}

/**
 * Filter out WUB from a song lyric
 */
function songDecoder(song) {
  return song
    .toUpperCase()
    .split("WUB")
    .filter((text) => text != "")
    .join(" ");
}

/**
 * Shift an array by two to the left
 */
function circle(aList) {
  let newList = [];
  newList.unshift(aList.shift());
  newList.unshift(aList.shift());
  return aList.concat(newList);
}

/*
 *   Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
 *   each taken only once - coming from s1 or s2.
 * @param a - String
 * @param b - String
 */
function longest(a, b) {
  let combineString = a + b;

  return combineString
    .split("")
    .reduce((accumulate, currentVale) => {
      if (accumulate.indexOf(currentVale) === -1) accumulate.push(currentVale);

      return accumulate;
    }, [])
    .sort()
    .join("");
}

/*
 *
 *   Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
 *   which is the number of times you must multiply the digits in num until you reach a single digit.
 */
function persistence(num) {
  // Base Case.
  if (num < 10) return 0;

  numString = num + "";

  let testResult = 1;

  for (i = 0; i < numString.length; i++) {
    testResult *= parseInt(numString[i]);
  }

  // Recursive
  return 1 + persistence(testResult);
}

/**
 * Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013).
 * Jaden is also known for some of his philosophy that he delivers via Twitter.
 * When writing on Twitter, he is known for almost always capitalizing every word.
 * Your task is to convert strings to how they would be written by Jaden Smith.
 * The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
 */

String.prototype.toJadenString = function () {
  return this.split(" ")
    .map((element) => {
      return element.charAt(0).toUpperCase() + element.substring(1);
    })
    .join(" ");
};
/**
 *  Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself),
 *  from smallest to largest.
 *  If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
 */
function divisors(integer) {
  let possibleDivisors = [];
  for (i = 2; i < integer; i++) {
    if (integer % i == 0) {
      possibleDivisors.push(i);
    }
  }

  if (possibleDivisors.length == 0) return "(Integer) is prime";
  else return possibleDivisors;
}

function multipy(a, b) {
  return a * b;
}

/**
 * Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
 * For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
 * [10, 343445353, 3453445, 3453545353453] should return 3453455.
 *
 * @param {integer} numbers
 */

function sumOfLowestPositiveInteger(numbers) {
  if (numbers.length > 4) {
    return;
  }

  numbers.sort((a, b) => {
    return a > b;
  });

  return numbers[0] + numbers[1];
}

/**
 * Simple, given a string of words, return the length of the shortest word(s).
 * String will never be empty and you do not need to account for different data types.
 *
 * @param {String} s
 */

function shortestWord(s) {
  //Convert a sentence into individual words by using a space delimiter
  wordsArray = s.split(" ");

  let sizeOfEachWordsArray = [];

  wordsArray.forEach((element) => {
    if (element.length > 0) sizeOfEachWordsArray.push(element.length);
  });

  return Math.min(...sizeOfEachWordsArray);
}
