function switchCaseSequential(num){
    // Only change code below this line
    var answer;
    switch(num){
        case 1 :
        case 2:
        case 3:   
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
        default :
            answer = "";
            break;
    }
    // Only change code above this line
    return answer;
}
console.log(switchCaseSequential(1)); // Change this line
console.log(switchCaseSequential(2)); // Change this line
console.log(switchCaseSequential(3)); // Change this line
console.log(switchCaseSequential(4)); // Change this line
console.log(switchCaseSequential(5)); // Change this line
console.log(switchCaseSequential(6)); // Change this line
console.log(switchCaseSequential(7)); // Change this line
console.log(switchCaseSequential(8)); // Change this line
console.log(switchCaseSequential(9)); // Change this line
module.exports = switchCaseSequential;