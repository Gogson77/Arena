// only change the code below this line
const milili = [10, 25, 40];

function myArr(mili) {
  "use strict";
  milili[0] = 4;
  milili[1] = 10;
  milili[2] = 25;
  return milili;
}
// Using mili = [4, 10, 25] would be invalid
console.log(myArr(milili));
// only change the code above this line
module.exports = myArr;