/*
*   Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
*   each taken only once - coming from s1 or s2.
* @param a - String
* @param b - String
*/
function longest(a,b) {

    let combineString =  a + b ;

   return combineString.split('').reduce((accumulate,currentVale) => {

        if(accumulate.indexOf(currentVale) === -1 )
            accumulate.push(currentVale);

        return accumulate;    


    },[]).sort().join('');

}

/*
*
*   Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
*   which is the number of times you must multiply the digits in num until you reach a single digit.
*/
function persistence(num)
{
    // Base Case.
    if(num < 10)
        return 0;

    numString = num+ "";

    let testResult = 1;

    for(i=0;i <numString.length;i++)
    {
        testResult *= parseInt(numString[i]);
    }

    // Recursive 
    return 1 + persistence(testResult);
}

String.prototype.toJadenString = function () {

    return this.split(' ').map((element) => {
        return element.charAt(0).toUpperCase() + element.substring(1) ;
    }).join(' ');
}

function divisors(integer)
{
    let possibleDivisors = [] ;
    for(i = 2; i < integer; i++)
    {
        if((integer % i) == 0)
        {
            possibleDivisors.push(i);
        }
    }

    if(possibleDivisors.length == 0)        
        return "(Integer) is prime"    
    else
        return possibleDivisors;
    

}


function multipy (a,b)
{
    return a*b;
}


function sumOfLowestPositiveInteger(numbers){

    if(numbers.length > 4)
    {
        return;
    }

   numbers.sort((a,b) => {
       return a > b ;
   });


    return numbers[0] + numbers[1] ;
}

function shortestWord(s)
{
    //Convert a sentence into individual words by using a space delimiter
    wordsArray = s.split(" ");

    let sizeOfEachWordsArray = []

    wordsArray.forEach(element => {
        
        if(element.length > 0)
            sizeOfEachWordsArray.push(element.length);
    });
    

    return Math.min(...sizeOfEachWordsArray);


}






