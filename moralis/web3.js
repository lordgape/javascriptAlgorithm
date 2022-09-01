function solution(A, K) {
  var n = A.length;
  var best = 0;
  var count = 1;
  for (var i = 0; i < n - K -1 ; i++) {
    
    if (A[i] == A[i + 1]) {
      count = count + 1;
    } else {
      count = 1;
    }
    if (count > best)  {
        best = count;
    }
  }
  var result = best  + K;

  return result;
}

console.log(solution([1, 1, 3, 3, 3, 4, 5, 5, 5, 5], 2));
