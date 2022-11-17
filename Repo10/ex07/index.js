function myFunction(propName) { // Change this line
// Only change code below this line
    var lion = {
        name : "Simba",
        legs : 4,
        tails : 1,
        roar : "roar-roar"
    };
    delete lion[propName];
    return lion;
// Only change code abovethis line
}
console.log(myFunction("roar")); // Change this line
module.exports = myFunction;