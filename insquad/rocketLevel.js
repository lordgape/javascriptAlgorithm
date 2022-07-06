/*

Elon Musk presented a new space project - he launched a large number of rockers into the sky. There is an array rocket_pos, where 
rocker_pos[i] - the height of i-th rocket and rocket_speed array, where 
rocket_speed[i]- the speed of i-th rocket (the value of movement per time unit).

When the rocket reach the same height at some step, they unite into one rocket and their speed adds up.

Determine how many rockets will remain in the end.

Input: 

- rocket_pos - the initial position of each rocket (Integer[]), 0<length(rocket_pos)<=10,0<=rocket_pos[i]<=1000
- rocket_speed - the speed of each rocket[Integer[]), 0<length(rocket_speed)<=10,0<=rocket_speed[i]<15

Output:
- Integer - the number of rockets that will remain in the end


Example 1:

rocket_pos = [3,11]
rocket_speed = [5,1]
answer = 1

After 2 "steps" the both rockets will be at the heiht of 13 and will able to unite

Example 2

rocket_pos = [2,3]
rocket_speed = [1,2]
answer =  2

The rocket will never unite
*/

const test = (pos, speed) => {
   
    let numberOfRocket = pos.length;
    let size = numberOfRocket
  const hash = {};
  
  for(let i=0;i<size;i++) {

      pos[i] = pos[i] + (speed[i] * size);      
      
      if(pos[i] in hash) {
        numberOfRocket -= 1;
      }

      hash[pos[i]] = 1
      
  }
  return numberOfRocket;

}

console.log(test([3,11,1000],[5,1,15]));
console.log(test([2,3],[1,2]));
console.log(test([2,2],[2,2]));
console.log(test([],[]));
console.log(test([2,3],[0,1]));