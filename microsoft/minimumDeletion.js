function minimumDeletion(S)
{
    // Utility function call
    //return utilityDel(S, 0, S.length - 1);\

    let delCount = 0;    
    let j = 1;    

    let higherChar = '';
    for(let i =0; i < S.length-1;i++)
    {

        console.log(`Is S[i] > S[j] ${S[i] > S[j]} ${S[i]} - ${S[j]}`);

        if(S[i] > S[j])
        {
            delCount++;
            higherChar = S[i]
        }
        
        if(delCount == 0 && S[i] == "B" && i==0)
        {
            delCount++
        }
        

        j++;
    }

    return delCount;
}

function utilityDel(Str, i, j){

    if (i >= j)
        return 0
 
    // Condition to compare charecters
    if (Str[i] == Str[j]){

        //Recursive function call
        return utilityDel(Str, i + 1, j - 1)
    }   
 
    // Return value, increamenting by 1
    // return minimum Element between two values    
    return (1 + Math.min(utilityDel(Str, i + 1, j), utilityDel(Str, i, j - 1)))
 
 }


 console.log(`Minium del is ${minimumDeletion("BAAABAB")}`);