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

function numberOfRockets (rocket_pos_arr, rocket_speed_arr) {
  
  if (!rocket_pos_arr || rocket_pos_arr.length === 0) {
    return 0;
  }
   
  let topHeight = -Infinity;  
  
  
  while (topHeight < 1000) {
		 // Updating heights
    rocket_pos_arr = rocket_pos_arr.map((position, index) => {
      const updatedHeight = position + rocket_speed_arr[index];
     
      topHeight = Math.max(updatedHeight, topHeight);

      return updatedHeight;
    });
    
   
    const tracker = {};


    rocket_pos_arr.forEach((position, index) => {
      if (tracker[position]) {
        tracker[position].push(index); 
      } else {
        tracker[position] = [index];
      } 
    });


    for (const position in tracker) {
      if (tracker[position].length === 1) continue;


      // Get the combined Speed
      const combinedSpeed = rocket_speed_arr.reduce((accumulated, speed, index) => {
        let value = 0;

        if (tracker[position].includes(index)) {
          value += speed;
        }

        return accumulated + value;
      },0);


      // Clear the siblings from both arrays
      rocket_pos_arr = rocket_pos_arr.filter((_, index) => !tracker[position].includes(index));
      rocket_speed_arr = rocket_speed_arr.filter((_, index) => !tracker[position].includes(index));

      rocket_pos_arr.push(Number(position));
      rocket_speed_arr.push(combinedSpeed);
 
    }

  }
 
  return rocket_pos_arr.length;

}

console.log(numberOfRockets([3,11,1000],[5,1,15]));
console.log(numberOfRockets([2,3],[1,2]));
console.log(numberOfRockets([2,2],[2,2]));
console.log(numberOfRockets([],[]));
console.log(numberOfRockets([2,3],[0,1]));