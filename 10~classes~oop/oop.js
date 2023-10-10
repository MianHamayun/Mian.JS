const user = {
  username: "Howard",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got User details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  }
  // return this; // implicity defined not need to write
}

// const userOne = User("Howard", 12, true); // Construnctor function: "new" keyword is used to make new instances.
const userOne = new User("Howard", 12, true);

// const userTwo = User("Chai aur Code", 11, false); new keyword required to make a new instance
const userTwo = new User("Chai aur Code", 11, false);

console.log(userOne.constructor);
// console.log(userTwo);
