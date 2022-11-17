function myFunction(myObj, checkProp){
    // Only change code below this line
        if(myObj.hasOwnProperty(checkProp)){
            return myObj[checkProp];
        } else { return "Not Found"}
    // Only change code above this line
}
console.log(myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "title"));
console.log(myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "song"));
console.log(myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "genre"));
console.log(myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "actor"));
module.exports = myFunction;