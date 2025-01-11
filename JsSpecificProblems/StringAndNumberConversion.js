let arr1 = [1, '2', 'three', 4, '5x'];
let sum1 = 0;

console.log(isNaN('23')); // false // first string is converted to number then check it's number or not
console.log(isNaN('three')); // true
console.log(isNaN(23)); // false

// ---------------------------------------------------------

console.log(typeof Infinity); // number

console.log(typeof isNaN); // function
console.log(typeof isNaN('a')); // boolean
console.log(typeof isNaN(1)); // boolean
console.log(typeof isNaN('1')); // boolean

console.log(typeof NaN); // number

// ----------------------------------------------

arr1.forEach((elm) => {
    if (typeof elm === 'number' || !isNaN(elm)) {
        sum += elm;
    }
});

console.log(sum); // Expected output is 7

// -------------------------------------------------

// another way
let arr = [10, 'hello', 20, '30', 'demo'];
let sum = 0;
arr.map((elm) => {
    if (typeof elm == "number") {
        sum += elm;
    } else if (typeof elm == 'string' && !isNaN(elm)) {
        sum += Number(elm);
    }
})

console.log(sum); // 60
