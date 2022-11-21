// Create a temps array here
var temps = [ 
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];
// End of temps array
// Create a function below this line
function myArrayFunction(temps){
    var averageDayTemp = [];
    for(i=0; i<temps.length; i++){
        var subArrTotal = 0;
        for(j=0; j<temps[i].length; j++){
            subArrTotal += temps[i][j];
        }
        var subArrLength = temps[i].length;
        var average = subArrTotal / subArrLength;
        averageDayTemp.push(average);

    }
    return averageDayTemp;
}
// End of creating a function
console.log(myArrayFunction(temps));
module.exports = myArrayFunction;
