// #Primitive : these are Call By Value.when you copy them from somewhere.Their memory reference is not given,only a copy given.changes are made only in copy

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100 //You dont need to tell variable type in JS.It will automically assume datatype
// const score = false
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 343343463537635853437573; // Number
// const bigNumber = 343343463537635853437573n; // bigInt

// console.log(typeof bigNumber);

// #Reference (Non Primitive) : Memory reference can be allocated

// Arrays, Objects, Functions

const heroes = ["superman", "batman", "flash"];
// console.log(typeof heroes);

let myObj = {
  name: "howard",
  age: 20,
};

const myFunction = function () {
  console.log("Hello World");
};

console.log(typeof outsideTemp);

// https://262.ecma-international.org/5.1/#sec-11.4.3
