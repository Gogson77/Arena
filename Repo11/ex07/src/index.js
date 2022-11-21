// Only change code below this line
function multiplyArrayFunction(myArray){  
    var product = 1;
    var sum = 0;
    for ( i=0; i < myArray.length; i++){
        for( j=0; j < myArray[i].length; j++ ){
            product *= myArray[i][j];
            sum += myArray[i][j];
        }
    }
    var myArray = [product, sum]; 
    return myArray;
}
// Only change code above this line
console.log(multiplyArrayFunction([ [2], [5,6,7], [8,9] ]));
console.log(multiplyArrayFunction([ [2.5, 2], [0.5, 0.2], [8] ]));
module.exports = multiplyArrayFunction;