// Create a monitorsListArray array here
var monitorsListArray = ["Apple", "Peach", "Berry"];
// End of monitorsListArray array
// Create a function below this line
function myMonitorsFunction(array) {
    var monitorsList = [];
    var monitorName = '';
    var monitorNumber = 0;
    var arrayPair = [];
    for (let i = 0; i < array.length; i++) {
        monitorName = array[i];
        monitorNumber = i + 1;
        arrayPair = [monitorName, monitorNumber];
        monitorsList.push(arrayPair);
    }
    return monitorsList;
}
console.log(myMonitorsFunction(monitorsListArray));
// End of creating a function
module.exports = myMonitorsFunction;