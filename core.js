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

/**
 * Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). 
 * Jaden is also known for some of his philosophy that he delivers via Twitter. 
 * When writing on Twitter, he is known for almost always capitalizing every word.
 * Your task is to convert strings to how they would be written by Jaden Smith. 
 * The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
 */

String.prototype.toJadenString = function () {

    return this.split(' ').map((element) => {
        return element.charAt(0).toUpperCase() + element.substring(1) ;
    }).join(' ');
}
/**
 *  Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), 
 *  from smallest to largest. 
 *  If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
 */
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

/**
 * Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
 * For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
 * [10, 343445353, 3453445, 3453545353453] should return 3453455.
 * 
 * @param {integer} numbers 
 */

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

/**
 * Simple, given a string of words, return the length of the shortest word(s).
 * String will never be empty and you do not need to account for different data types.
 * 
 * @param {String} s 
 */

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






