// Only change code below this line
myPetsArray = [
    {
        animalType: "Dog",
        name : "Pujdo"
    },
    {
        animalType: "Cat",
        name : "Maca"
    },
    {
        animalType: "Bird",
        name : "Tweety"
    }
];
function myPetsFunction(pets){
    return pets.name;
}
// Only change code above this line
console.log(myPetsFunction(myPetsArray[1]));
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;