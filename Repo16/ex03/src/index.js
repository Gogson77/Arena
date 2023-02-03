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
}
// only change the code above this line
var message = new Person;
message.show();
module.exports = Person;