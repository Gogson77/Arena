// Only change code below this line
var sum = 0;
function addThree() {
    sum += 3;
    console.log("addThree:", sum);
}
function addFive() {
    sum += 5;
    console.log("addFive:", sum);
}
addThree();
addFive();
// Only change code above this line
module.exports = {
    addThree,
    addFive
};