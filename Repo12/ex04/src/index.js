// Only chance code below this line
function sumFibonacci(num) {
    sum = 0;
    if (num === 1) {
        return num;
    } else {
        for (var fibArray = [0, 1], i = 0, j = 1, k = 0; k < num; i = j, j = x, k++) {
            x = i + j;
            fibArray.push(x);
        }
        for (var j = 0; j < fibArray.length; j++) {
            if ((fibArray[j] < num) && (fibArray[j] % 2 != 0)) {
                sum += fibArray[j];
            }
        }
        return sum;
    }
}
// Only chance code above this line
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;
