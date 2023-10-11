// let myName = "Howard     "
// let myChannel = "chai     "
// we want to make custom method
// console.log(myName.trueLength);

let myHeroes = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.howard = function () {
  console.log(`howard is present in all objects`);
};

Array.prototype.heyHoward = function () {
  console.log(`Howard says hello`);
};

// heroPower.howard()
// myHeroes.howard();
// myHeroes.heyHoward();
// heroPower.heyHoward()

// Inheritence

const User = {
  name: "chai",
  email: "chai@example.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode          "
String.prototype.trueLength = function () {
  console.log(`${this}`);
  // console.log(`${this.name}`); // obsolete property
  console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"howard".trueLength()
"iceTea".trueLength()