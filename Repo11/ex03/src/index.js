// Create a myPetsArray array here
var myPetsArray = ["Dog", "Cat"];
// End of myPetsArray array
// Create a function below this line
function myArrayFunction(myPets) {
    myNewPets = myPets;
    myNewPets.push("Bird");
    myNewPets.push("Fish");
    firstPet = myNewPets.shift();
    lastPet = myNewPets.pop();
    myNewPets.unshift("Lion");
    return {myNewPets, firstPet, lastPet};
}
// End of creating a function
console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;