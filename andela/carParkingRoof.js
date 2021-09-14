const carParkingRoof = (cars, K) => {
  if (cars.length == 0 || K < 0) {
    return 0;
  }

  cars = cars.sort((c, d) => c - d);
  let shortestDistance = Number.MAX_VALUE;

  for (let i = 0; i <=cars.length-K; i++) {
      shortestDistance = Math.min(shortestDistance,cars[i+K-1]-cars[i])
  }

  return shortestDistance + 1;
};


console.log(carParkingRoof([6,2,12,7],3));
console.log(carParkingRoof([2,10,8,17],3));
console.log(carParkingRoof([1,2,3,10],4));
