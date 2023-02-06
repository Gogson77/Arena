// example
/* class Student {
    constructor(name) {
        this._name = name;
    }
    static showName() {
        console.log("Static Function");
    }
}
Student.showName(); */

//task
// only change the code below this line
class Person {
    static display() {
        console.log("Static method is invoked from Person class");
    }
    show() {
      Person.display();
    }
// another example
    static displayMessage(){
        let message = "This is a message";
        console.log(message);
    }
    showMessage() {
        Person.displayMessage();
    }
// another example
    static displayMessage2(){
        console.log();
    }
}
// only change the code above this line
var message = new Person;
message.show();
message.showMessage();
module.exports = Person;