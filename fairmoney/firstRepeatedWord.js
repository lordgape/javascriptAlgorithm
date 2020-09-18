function firstRepeatedWord(str){
    
    
   let arrayOfWord = str.match(/\w+/g);

   let accumulator = {};

   

   for(let i=0; i < arrayOfWord.length; i++) {

    if(accumulator[arrayOfWord[i]])
    {
       accumulator[arrayOfWord[i]]++

       if(accumulator[arrayOfWord[i]] == 2) {
        return arrayOfWord[i];
        
       }
    }
    else {
      accumulator[arrayOfWord[i]] = 1
    }
   }
    
    return "";
}

console.log(`Most repeating word is ${firstRepeatedWord("do what Do  had   Had  I hadly; to do had; had do")}`);