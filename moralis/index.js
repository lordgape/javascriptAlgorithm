const uni = (S) => {
  // TODO: check my todos
  let sum = 0;
let memo = {}
  for (let i = 0; i < S.length; i++) {
    let j = i;
    while (j < S.length) {
      let remainder = S.substring(i, ++j).split("");
      if (remainder in memo) {
          sum += memo[remainder];
        } else {
          memo[remainder] = countUnique(remainder);
          sum += memo[remainder];
        }
    }
  }

  return sum
};

const uni = (arr) => {
  let values = Object.values(
    arr.reduce((acc, cur) => {
      if (cur in acc) {
        acc[cur] = acc[cur] + 1;
      } else {
        acc[cur] = 1;
      }

      return acc;
    }, {})
  );

  values = values.filter((ele) => {
    return ele == 1;
  });

  return values.length;
};

console.log(uni("CODILITY"));
console.log(uni("ABABABABAAABAAAAAAAAAABBBABABA"));
