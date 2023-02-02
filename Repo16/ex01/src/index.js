class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}
const john = new User("John", 35, "john@example.com");

console.log(john.name);
console.log(john.age);
console.log(john.email);
