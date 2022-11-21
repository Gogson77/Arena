// Only change code below this line
function myMutation(arr) {
    var stringOne = arr[0].toLowerCase();
    var stringTwo = arr[1].toLowerCase();

    for (let i = 0; i < stringTwo.length; i++) {
        for (let j = 0; j < stringOne.length; j++) {
            if (stringTwo[i] === stringOne[j]) {
                break;
            }
            else if (j === stringOne.length - 1) {
                return false;
            }
        }
    }
    return true;
}
// Only change code above this line
console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["wodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));
module.exports = myMutation;