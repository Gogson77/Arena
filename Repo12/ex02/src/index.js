// Only chance code below this line
function myCounter(n) {
    if(n < 1){
        return [];
    } else {
        const countArray = myCounter(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}
// Only chance code above this line
console.log(myCounter(-1));
console.log(myCounter(10));
console.log(myCounter(5));
module.exports = myCounter;