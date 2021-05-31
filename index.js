// LARGE array of size N
// contains number in range of 1 and N
// exactly 1 number missing
// exactly 1 number repeated
// find both missing and repeated number
// without using extra space

// e.g
// 5,4,4,1,3 -> [2, 4]
// 6,5,4,5,3,2 -> [1, 5]

const duplicateAndMissing = (arrayN) => {
  
    arrayN = arrayN.sort((a,b) => a > b);
      
    for(let i=1; i<=arrayN.length; i++) {
      if(!arrayN.includes(i) ) {
        console.log(i)
      }
      
      
      if(arrayN[i-1] == arrayN[i]) {
        console.log(arrayN[i])
      }
    }
  }
  
  duplicateAndMissing([6,5,4,5,3,2]);
  duplicateAndMissing([5,4,4,1,3]);
  duplicateAndMissing([1,1,2]);
  duplicateAndMissing([1,1]);