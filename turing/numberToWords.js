"use strict";

const UNIT_HASH_TABLE = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

const TENS_HASH_TABLE = {
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  2: "twenty",
  3: "thirty",
  4: "forty",
  5: "fifty",
  6: "sixty",
  7: "seventy",
  8: "eighty",
  9: "ninety",
};

const HUNDRED = "hundred";
const THOUSAND = "thousand";
const MILLION = "million";

function numberToWord(num) {
  num = +num;
  switch (num.toString().length) {
    case 1:
      return getUnitInWords(num);
    case 2:
      return getTensInWords(num);
    case 3:
      return getHundredsInWords(num);
    case 4:
    case 5:
    case 6:
      return getMulptipleOfThousandsInWords(num);
    case 7:
    case 8:
    case 9:
      return getMulptipleOfMillionsInWords(num);
    default:
      return `unknown argument ${num} was passed`;
  }
}

const getUnitInWords = (num) => {
  // Learn unit 1 - 9
  if (num.toString().length != 1) return `${num} is not a unit`;

  return UNIT_HASH_TABLE[+num];
};

const getTensInWords = (num) => {
  if (num.toString().length != 2) return `${num} is not a tens`;

  // Learn tens between 10 - 19
  if (+num < 20) return TENS_HASH_TABLE[+num];

  // learn tens that ends with ty 20,30,40,50,60,70,80,90
  if (+num > 19 && num % 10 == 0) {
    return TENS_HASH_TABLE[num.toString()[0]];
  }
  // Learn tens that does not end with ty and is above 20. Example [21.....99]
  return TENS_HASH_TABLE[num.toString()[0]] + " " + getUnitInWords(num % 10);
};

const getHundredsInWords = (num) => {
  if (num.toString().length != 3) return `${num} is not a hundred`;

  let integerPart = num.toString()[0];

  let otherPart = num.toString()[1] + num.toString()[2];

  otherPart = +otherPart;

  if (num % 100 == 0) return getUnitInWords(+integerPart) + " " + HUNDRED;

  let isTensOrUnit =
    otherPart.toString().length == 1
      ? getUnitInWords(otherPart)
      : getTensInWords(otherPart);

  return getUnitInWords(+integerPart) + " " + HUNDRED + " and " + isTensOrUnit;
};

const getMulptipleOfThousandsInWords = (num) => {
  if (!num.toString().length >4 && !num.toString().length < 6)
    return `${num} is not multiple of thousand`;

  let multiplePart = (num / 1000).toString().split(".");

  let isDefinite =
    multiplePart.length == 2 ? numberToWord(multiplePart[1]) : "";

  return numberToWord(multiplePart[0]) + " " + THOUSAND + " " + isDefinite;
};

const getMulptipleOfMillionsInWords = (num) => {
  if (!num.toString().length > 7 && !num.toString().length < 10) //100, 000, 000
    return `${num} is not multiple of thousand`;

  let multiplePart = (num / 1000000).toString().split(".");

  let isDefinite =
    multiplePart.length == 2 ? numberToWord(multiplePart[1]) : "";

  return numberToWord(multiplePart[0]) + " " + MILLION + " " + isDefinite;
};



console.log("", numberToWord(111));
