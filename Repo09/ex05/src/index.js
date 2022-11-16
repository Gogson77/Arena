// Only change code below this line
function compareStrictValues(m){
    if(m != 55){
        return "Not equal";
    } else {
        return "Equal";
    }
}
console.log(compareStrictValues(55));
console.log(compareStrictValues("55"));
console.log(compareStrictValues("21"));
console.log(compareStrictValues(12));
console.log(compareStrictValues("Doe"));
// Only change code above this line
module.exports = compareStrictValues;