function main(numOne, numTwo){
    // only change code below this line 
    remainder = numOne % numTwo;
    // only change code above this line
    return remainder;
}

console.log(main(5, 2));
console.log(main(15, 4));
console.log(main(102, 25));
module.exports = main;