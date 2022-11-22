// Only change code below this line
var myArr = [2, 5, 9, 8, 1];
function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
// Only change code above this line
console.log(bubbleSort(myArr));
module.exports = bubbleSort;