const test = (K, scores) => {
  let qualifyPoint = []
  let counter = 0;
 let sorted =  scores.sort((a,b)=> b-a)

 console.log("Sorted ", sorted);
  sorted.reduce((prev,current) => {

    if(current != prev && qualifyPoint.length < K )
    {
      counter++
      qualifyPoint.push(counter)
    }
    else if (current == prev ) {
      qualifyPoint.push(counter)
    }
    else {
      qualifyPoint.push(scores.length)
    }
    console.log("Prev is ", prev);
    prev = current
    return prev

  },-1)

  console.log(`Point is `,qualifyPoint);

  return qualifyPoint.filter((element) => element <= K ).length
};

console.log("Result: ", test(4,[2,2,3,4,5]));

const car = (cars, k) => {

    let newcars = cars.sort((a,b) => a-b).slice(0,k);
   
    return Math.abs((newcars[0] - newcars[k -1])) + 1
   
   
     
   }
   
   
   
   
   
   console.log("result ",car([1,2,3,10],4))