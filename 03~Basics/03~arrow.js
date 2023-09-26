const user = {
  username: "howard",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , Welcome to Website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "jon" // we changed context
// user.welcomeMessage()

// console.log(this);

// this not worked in function
// function chai() {
//   let username = "howard"
//   console.log(this.username);
// }
// chai()

// this not worked in function
// const chai = function() {
//   let username = "howard"
//   console.log(this.username);
// }
// chai()

const chai = () => {
  let username = "howard";
  console.log(this);
};
// chai()

// Declaring Arrow Function
// Explicit Method
// const addTwo = (num1,num2) => {
//   return num1 + num2
// }

// Implicit Method

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username: "howard"});
console.log(addTwo(3, 4));


// const myArr = [2, 5, 7, 9, 11]

// myArr.forEach(()=>{})