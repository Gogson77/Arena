// Only change code below this line
var myClothes = {
    hat : "Fedora",
    shirt : "Nike",
    shoes : "Converse"
};
function myFunction(myObj){
    var hatValue = myClothes.hat;
    var shirtValue = myClothes.shirt;
    var shoesValue = myClothes.shoes;
    return { hatValue, shirtValue, shoesValue };
}
// Only change code above this line
console.log(myFunction(myClothes)); // Change this line
module.exports = myFunction(myClothes);
