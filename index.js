'use strict';



function missingInteger(A)
{

    let MapPositiveInteger = A.reduce((accumulator,currentElement) => {
        if(currentElement > 0)
             accumulator[currentElement] = true
 
         return accumulator;
     },{});
 
     let sizeOfMappedinteger = Object.keys(MapPositiveInteger).length;
 
     if(sizeOfMappedinteger == 0)
         return 1;
 
     for(let i = 1 ; i <= sizeOfMappedinteger; i++)
     {
         if(!MapPositiveInteger[i]) return i;
     }
 
     return Math.max(...A) + 1;
}

//console.log("Mising integer is",missingInteger([1, 3, 6, 4, 1, 2]));






