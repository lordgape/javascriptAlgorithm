function findShortestSequence(number) {
    let org = number;
    if(number<=0)number=-number; // work with absolute values when input is not positive
    else number--;               // work with one less, if input is positive
    let left = 0;
    let right = 1;
    let moves = [];

    const moveLeft = () => {
        moves.push('L');
        left = 2 * left - right;
    }

    const moveRight = () => {
        moves.push('R');
        right = 2 * right - left;
    }

    if(org<=0)
        while(number!=0){
          if(number&1)moveLeft();
          else moveRight();
          number>>=1;
        }
    else
        while(number!=0){
          if(number&1)moveRight();
          else moveLeft();
          number>>=1;
        }

    console.log(org, left, right, moves.join(''), (org==left)||(org==right));
}

for(var i=-20;i<=20;i++)
    findShortestSequence(i);