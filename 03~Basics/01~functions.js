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
  /*  if user did not give name.
      You can check it with condition that,
      if this doesnt happen.do this
      We will simply write (username === undefined)
      You can write (!username) which is simple.
  */
  if (!username) {
    console.log("Please enter a username");
    return;
  }

  return `${username} just logged in`;
}
loginUserMessage("Howard"); // did not print
console.log(loginUserMessage("Howard"));
console.log(loginUserMessage());

// function calculateCartPrice(...num1)
// val1,val2 will take first 2 values and rest will print in the form of Array.
function calculateCartPrice(val1,val2,...num1) {
  return num1;
}


// console.log(calculateCartPrice(200, 400, 500, 2000)); // 200 printed. To solve this use `Rest Operator` e.g; (...num1)


const user = {
  username: "howard",
  price: "299"
}

// To pass and then use Object in the Function
function handleObject(anyobject) {
  console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
  username: "John",
  price: "399"
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
  return getArray
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300,4000]));

