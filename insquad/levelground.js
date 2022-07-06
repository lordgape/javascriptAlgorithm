/*
To build a house, the construction team level a squared plot of land. You are given the array ground where ground[i] is a square i height in meters.

Per one operation constructors lower or raise the square i by one meter. Determine the minimum number of operations to completely level the entire land plot.

Input:
- ground - integer array, 0<length(ground)<20,0<ground[i]<200

Output
- Integer - number of operations to completely level the entire land plot, that is to make an entire array same values.


Example:
ground = [1,3,2,2]

answer = 2

In two operations it is possible to make the array completely equal

Question - [1,3,2,2]
Operation one - [*2*,3,2,2]
Operation two - [2,*2*,2,2]

*/

const levelGround = (nums) => {
    const hash = {}
    let maxSquare = 0
    for(const num of nums) {
        hash[num] = ++hash[num] || 1;
        if(hash[num] > maxSquare) {
            maxSquare = num;
        }
    }

    const difference = []
    for(num of nums) {
        difference.push(Math.abs(maxSquare - num))
    }

    return difference.reduce((acc,cur) => acc + cur,0)
}

// const ground = [1,3,2,2]; 
const ground = [-1,1,1,1]; 
 
 console.log(`Operations: ${levelGround(ground)}`);

