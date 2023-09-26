// Functions

// console.log("H")
// console.log("O")
// console.log("W")
// console.log("A")
// console.log("R")
// console.log("D")

function sayMyName() {
  console.log("H");
  console.log("O");
  console.log("W");
  console.log("A");
  console.log("R");
  console.log("D");
}

// sayMyName // Reference Call
// sayMyName() // Execution Call
// (para1,para2) Defining function definitions are called Parameters
// function(arg1,arg2) Calling Function via passing arguments/values

// function addTwoNumbers(number1, number2) {

//   console.log(number1 + number2);

// }

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2

  // return result

  // console.log("Howard"); // never print,unreachable code

  return number1 + number2; // use retrun to store in a variable
}

addTwoNumbers(3, 4); // Argument Call
addTwoNumbers(3, "4"); // 34 JS assumes 3 is also a string
addTwoNumbers(3, "a");
addTwoNumbers(3, null);

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);


function loginUserMessage(username = "Jon") {
  if (!username) {
    console.log("Please enter a username");
    return
  }

  return `${username} just logged in`

}
loginUserMessage("Howard") // did not print
console.log(loginUserMessage("Howard"))
console.log(loginUserMessage())