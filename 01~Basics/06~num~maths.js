const score = 400

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //100.00
// console.log(balance.toFixed(1)); //100.0

// const otherNumber = 25.8977; //25.9
const otherNumber = 125.8977; //126

// console.log(otherNumber.toPrecision(3));

const hundreds = 10000000000;
// console.log(hundreds.toLocaleString()); //10,000,000,000



// *************************  Maths  ****************************


// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); round off at highest value e.g; =>5
// console.log(Math.floor(4.9)); round off at lowest value e.g; =>4
// console.log(Math.min(4,6,8,9,12));
// console.log(Math.max(4,6,8,9,12));



console.log(Math.random()); //it comes between 0 and 1
console.log(Math.random()*10); 
console.log((Math.random()*10) + 1); // to avoid value below 1
console.log(Math.floor((Math.random()*10)) + 1); // to avoid value below 1


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min))