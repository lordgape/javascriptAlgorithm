"use strict";

// We are working on a word puzzle and need to find common English words. We are given some CSV input of words along with their occurrence count in a large body of text.

// Write a function that, given a maximum number of words C and a maximum word length K, returns the C most common words of length [2..K] together with their occurrence counts.

// counts = [
//     "POINT,333858038",
//     "NOT,4522732626",
//     "INTO,1144226142",
//     "ON,4594521081",
//     "FOR,6545282031",
//     "NOW,679337516",
//     "ONE,2148983086",
//     "BEHAVIOR,104177552",
//     "WAITS,2911079",
//     "PEOPLE,658716166",
//     "HI,15453893",
//     "FORM,352032932",
//     "OF,30966074232",
//     "THROUGH,647091198",
//     "BETWEEN,744064796",
//     "FOUR,262968583",
//     "LEFT,306802162",
//     "OFF,302535533",
//     "FROM,3469207674",
//     "NO,1400645478",
//     "FORMS,136468034",
//     "A,45916054218"
// ]

// # Sample usage with maximum word length 5, to find top 15 words:
// # Expected output (in order, pseudodata):
// get_list(counts, 15, 5) =>
// [
//     OF:     30966074232
//     FOR:    6545282031
//     ON:     4594521081
//     NOT:    4522732626
//     FROM:   3469207674
//     ONE:    2148983086
//     NO:     1400645478
//     INTO:   1144226142
//     NOW:    679337516
//     FORM:   352032932
//     POINT:  333858038
//     LEFT:   306802162
//     OFF:    302535533
//     FOUR:   262968583
//     FORMS:   136468034
// ]

// Complexity Analysis:

// n: Number of lines in the input
// c: Number of words in the output

const counts = [
  "POINT,333858038",
  "NOT,4522732626",
  "INTO,1144226142",
  "ON,4594521081",
  "FOR,6545282031",
  "NOW,679337516",
  "ONE,2148983086",
  "BEHAVIOR,104177552",
  "WAITS,2911079",
  "PEOPLE,658716166",
  "HI,15453893",
  "FORM,352032932",
  "OF,30966074232",
  "THROUGH,647091198",
  "BETWEEN,744064796",
  "FOUR,262968583",
  "LEFT,306802162",
  "OFF,302535533",
  "FROM,3469207674",
  "NO,1400645478",
  "FORMS,136468034",
  "A,45916054218",
];

const get_list = (counts, C, K) => {
  let localCounts = counts;

  

  // filter out words above K
  localCounts = counts.filter((entry) => {
    const [words, occurence] = entry.split(",");

    if (words.length <= K) {
      return true;
    }

    return false;
  });

  //  console.log(localCounts)

  // Sort count in descending order
  localCounts.sort((a, b) => {
    let [wordA, occurrenceA] = a.split(",");
    let [wordB, occurrenceB] = b.split(",");

    return (occurrenceA - occurrenceB) * -1 ;
  });

  // Get first common occurence
  localCounts = localCounts.slice(0, C);

  return localCounts;
};

console.log(get_list(counts, 15, 5));



