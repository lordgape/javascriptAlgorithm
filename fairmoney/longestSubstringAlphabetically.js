var lastSubstring = function(str) {
    // when all the characters are same
    if(new Set(str).size === 1 || str.length === 1) return str
    let indexes = findMaxIndexes(str)
    
    // when largest character appear once only
    if(indexes.length === 1){
      return str.slice(indexes[0])
    }
    
    // when largest character appears more than once
    let max = ''
    for(let i=0; i<indexes.length; i++){
      let temp = str.slice(indexes[i])
      if(temp > max){
        max = temp
      }
    }
    return max
  };
  
  function findMaxIndexes(str){
    let max = ''
    let indexes = []
    for(let i=0; i<str.length; i++){
      let char = str[i]
      if(char === max){
        indexes.push(i)
      }else if(char > max){
        max = char
        indexes = [i]
      }
    }
    return indexes
  }

console.log("Longest",lastSubstring("baca"));