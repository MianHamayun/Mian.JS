class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }

  // createId() {
  //   return `123`;
  // }
  static createId() {
    return `123`;
  }
}

const howard = new User("Howard");
// console.log(howard.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@example.com");
console.log(iphone.logMe());
console.log(iphone.createId()); // undefined
