const numPlayer = (K, scores) => {
  scores = scores.filter((score) => score > 0);
  scores = scores.sort((a, b) => (a - b) * -1);
  let position = 1;
  let levelUpPosition = [];

  for (let i = 0; i < scores.length; i++) {
    if (i == 0) {
      levelUpPosition.push(position);
      continue;
    }

    if (scores[i] == scores[i - 1]) {
      levelUpPosition.push(position);
      continue;
    } else if (i == scores.length - 1) {
      levelUpPosition.push(scores.length);
    } else {
      position++;
      levelUpPosition.push(position);
    }
  }

  levelUpPosition = levelUpPosition.filter(position => position <= K)

  return levelUpPosition.length;
};

console.log(numPlayer(3, [100,0, 50, 50, 25,0]));
console.log(numPlayer(4, [20,40, 60, 80, 100]));
console.log(numPlayer(4, [2,2, 3, 4, 5]));
