const test = (T, R) => {
    let groupName = T[0].split("1")[0];
  
    let testMap = T.reduce((accumulator, currentValue, currentIndex) => {
      let groupMembers = currentValue.split(groupName)[1].charAt(0);
  
      let testFamilyName = groupName + groupMembers;
  
      if (accumulator[testFamilyName])
        accumulator[testFamilyName].push({
          answer: R[currentIndex],
        });
      else accumulator[testFamilyName] = [{ answer: R[currentIndex] }];
  
      return accumulator;
    }, {});
  
    let sumTestPassed = 0;
  
    console.log(testMap);
    for (const key in testMap) {
      let allPass = testMap[key].some((test) => test.answer != "OK");
  
      console.log(key,testMap[key],allPass);
      if (!allPass) {
        sumTestPassed++
      }
    }
  
    return Math.floor((sumTestPassed * 100) / Object.keys(testMap).length);
  };