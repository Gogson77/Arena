// only change the code below this line
const product = (...args) => {
    for (i = 0; i < args.length; i++) {
        args.push[i];
    }
    // only change the code above this line
    return args.reduce((a, b) => a * b, 1);
}
console.log(product(1, 2));
console.log(product(4, 3, 10, 2));
console.log(product(7));
console.log(product());
module.exports = product;

