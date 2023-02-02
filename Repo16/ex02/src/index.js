//example
class Person {
    constructor(name) {
        this._name = name;
    }
    // getter 
    get name() {
        return this._name;
    }
    // setter
    set name(newName) {
        this._name = newName;
    }
}
const tesla = new Person("Tesla");
console.log(tesla.name);

//task
// only change the code below this line
class Book {
    constructor(title) {
        this._title = title;
    }
    get title() {
        return this._title;
    }
    set title(newTitle) {
        this._title = newTitle;
    }
}
// only change the code above this line
const littlePrince = new Book("The Little Prince"); //Change this line
console.log(littlePrince.title); // The Little Prince
littlePrince.title = "Le Petit Prince"; // Change this line
console.log(littlePrince.title); // Le Petit Prince

module.exports = Book;