// Scope

// var c = 300
let a = 300

{ } // It is called scope within functions and if else

if (true) {
  let a = 10;
  const b = 20;
  // console.log("Inner:", a);
  
}


// console.log(a);
// console.log(b);
// console.log(c);


function one() {
  const username = "howard"

  function two() {
    const website = "youtube"
    // console.log(username);
  }
  // console.log(website);
  two()
}

// one()

if (true) {
  const username = "howard"
  if (username === "howard") {
    const website = "youtube"
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);


// +++++++++++++++++  Interesting  ++++++++++++++++++


console.log(addone(5))
function addone(num) {
  return num + 1
}


console.log(addTwo(5)); //  Cannot access 'addTwo' before initialization
const addTwo = function (num) {
  return num + 2
}
