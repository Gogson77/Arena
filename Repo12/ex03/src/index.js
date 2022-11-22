// Only chance code below this line
function rangeOfNumbers(startN, endN) {
    if (startN > endN) {
        errorMsg = "The starting number will always be less than or equal to the ending number";
        //return errorMsg;
        return []; 
    } else {
        var arrayOfIntegers = rangeOfNumbers(startN + 1, endN);
        arrayOfIntegers.unshift(startN);
        return arrayOfIntegers;
    }
}
// Only chance code above this line
console.log(rangeOfNumbers(1, 7));
console.log(rangeOfNumbers(3, 10));
console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(7, 5));
module.exports = rangeOfNumbers;