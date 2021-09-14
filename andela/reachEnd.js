/*
A 2-D grid consisting of some blocked (represented as '#) and some unblocked (represented as '?) cells is given. 
The starting position of a pointer is in the top-left corner of the grid. 
It is guaranteed that the starting position is in an unblocked cell. 
It is also guaranteed that the bottom-right cell is unblocked. Each cell of the grid is connected with its right, left, top, 
and bottom cells (if those cells exist). It takes 1 second for a pointer to move from a cell to its adjacent cell. 
If the pointer can reach the bottom-right corner of the grid within k seconds, return the string Yes. Otherwise, return the string 'No
*/


const reachTheEnd = (grid,maxTime) => {
    const possibleMove = grid[0].length -1 + grid.length -1;
    const canReach = possibleMove == maxTime || maxTime > possibleMove

    return canReach ? notPalidrome(grid) : "No"
}

const notPalidrome = (grid) => {
    
    for(let i=0; i<grid.length-1;i++) {
        // console.log(grid[i]);
        const reverseBlockA = grid[i].split("").reverse().join("")
        const isPalidrome = reverseBlockA == grid[i+1]
        if(isPalidrome &&  !/^(.)\1+$/.test(reverseBlockA)) return "No"
    }

    return "Yes"
}


console.log(reachTheEnd(["..##","#.##","#..."],5))
console.log(reachTheEnd(["..","..",],7))
console.log(reachTheEnd([".#","#.",],2))

// ..##
// ..##
// ##..