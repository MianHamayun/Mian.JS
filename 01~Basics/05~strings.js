const name = "SpiderMan"
const superPower = 50

// console.log(name + " " + superPower + " Value");

//String Interpolation,,modern way to use 

console.log(`Hello my name is ${name} and my superpower is ${superPower}`); 

const gameName = new String("SpiderMan-Venom")

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());


// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newStringOne = "     howard    "
// console.log(newStringOne);
// console.log(newStringOne.trim());
// console.log(newStringOne.trimStart());
// console.log(newStringOne.trimEnd());


const url = "https://spiderman.com/spiderweb%20venom"

// console.log(url.replace('%20','-'));

console.log(url.includes('howard'));

console.log(url.includes('denim'));


console.log(gameName.split('-'));