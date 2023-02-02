// only change the code below this line
class Car {
    constructor(manufacturer, model, production) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.production = production;
    }
}
// only change the code above this line
const bmw = new Car("BMW", "BMW X3", 2003);
console.log(bmw.manufacturer);
console.log(bmw.model);
console.log(bmw.production);
module.exports = Car;