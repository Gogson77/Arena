// Only change code below this line
var myNestedArray = [
    ["Toblerone", 5]
];
function myNestedFunction(arr){
    nestedArray = ["Milka", 3];
    arr.push(nestedArray);
    return myNestedArray;
}
// Only change code above this line
console.log(myNestedFunction(myNestedArray));
module.exports = myNestedFunction;