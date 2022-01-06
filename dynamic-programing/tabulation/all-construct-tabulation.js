/*
Write a function `allConstruct(target,wordBank)` that accepts a target string and an array of strings.

The function should return a 2D array containing all of the ways the target can be constructed 
by concatenating elements of the wordBank array.

You may reuse elements of wordBank as many times as needed

*/

const allConstruct = (target, wordBank, memo = {}) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);

  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const combination = table[i].map((subarray) => [...subarray, word]);
        table[i + word.length].push(...combination);
      }
    }
  }

  return table[target.length];
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
  allConstruct("eeeeeeeeeeeeef", [
    "e",
    "ee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
); // []
