// const userEmail = "howard.ai"; // We assumed it is true value
const userEmail = []; // We assumed it is true value

// if (userEmail) {
//   console.log("Got user Email");
// } else {
//   console.log("Don't have user Email");
// }

// Falsy Values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN (Not a Number)

// Truthy Values

// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//   console.log("Array is Empty");
// }

const emptyObj = {};

// if (Object.keys(emptyObj).length === 0) {
//   console.log("Object is Empty");
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);


// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");