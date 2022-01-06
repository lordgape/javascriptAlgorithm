/*
Write a function `allConstruct(target,wordBank)` that accepts a target string and an array of strings.

The function should return a 2D array containing all of the ways the target can be constructed 
by concatenating elements of the wordBank array.

You may reuse elements of wordBank as many times as needed

*/

const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  let combination = [];

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const arrayConstruct = allConstruct(suffix, wordBank, memo);
      const possibleWordCombination = arrayConstruct.map((construct) => [
        word,
        ...construct,
      ]);
      combination.push(...possibleWordCombination);
    }
  }

  memo[target] = combination;
  return combination;
};

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // [['purp','le],['p','ur','p','le']]
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // [ [ 'abc', 'def' ] ]
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // []
console.log(
  allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); /* [
    [ 'enter', 'a', 'p', 'ot', 'ent', 'p', 'ot' ],
    [
      'enter', 'a',
      'p',     'ot',
      'ent',   'p',
      'o',     't'
    ],
    [
      'enter', 'a',
      'p',     'o',
      't',     'ent',
      'p',     'ot'
    ],
    [
      'enter', 'a',
      'p',     'o',
      't',     'ent',
      'p',     'o',
      't'
    ]
  ] */
console.log(
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
); // []
