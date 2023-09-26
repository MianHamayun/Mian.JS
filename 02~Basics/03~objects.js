// Singleton
// Object.create

// object literals


const mySym = Symbol("key1")

// to add symbol in object,you have to wrap it in square brackets
const JsUser = {
  name: "Howard",
  "full name": "Howard King",
  [mySym]: "mykey1",
  age: 28,
  location: "London",
  email: "howard@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Sunday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "howard@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "howard@microsoft.com";
// console.log(JsUser);



JsUser.greeting = function () {
  console.log("Hello JsUser");
}

JsUser.greetingTwo = function () {
  console.log(`Hello JsUser, ${this.name}`);
};

console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());


// Objects can be accessed via Dot Notation and Bracket Notation