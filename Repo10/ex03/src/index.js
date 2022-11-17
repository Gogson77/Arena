// Only change code below this line
var myFood = {
    vegetables : "carrot",
    fruit : "orange",
    drink : "water"
};
function myFunction(myObj){
    var vegetablesValue = myFood["vegetables"];
    var fruitValue = myFood["fruit"];
    var drinkValue = myFood["drink"];
    return { vegetablesValue, fruitValue, drinkValue };
}
// Only change code above this line
console.log(myFunction(myFood)); // Change this line
module.exports = myFunction(myFood);