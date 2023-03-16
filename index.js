// Name checker. Aleast two must be present to mark as true.
const test = (targetName,compareName) => {
 
  let compareTree = targetName.toLowerCase().trim().split(" ").reduce((acc, currentValue) => {
    acc[currentValue] = 0;
    return acc;
  }, {});

  compareTree.sum = 0

  compareTree = compareName.toLowerCase().trim().split(" ").reduce((acc, currentValue) => {
    if (currentValue in acc) {
      acc[currentValue] += 1;

      acc.sum += acc[currentValue];
    }

    return acc;
  }, compareTree);

  console.log(JSON.stringify(compareTree));

  return compareTree.sum - 1 >= 1


};

console.log(test("Chesvic michel john hillary"," Hillary Chesvic"));
