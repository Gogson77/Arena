// only change the code below this line
let myName;
let message;
// only change the code above this line

myName = "Padawans";
function myMsg(name) {
    "use strict";
    message = "Hello, " + name + "!";

    return message;
}
console.log(myMsg(myName));
module.exports = myMsg;