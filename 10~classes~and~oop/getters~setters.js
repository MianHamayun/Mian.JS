class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}howard`;
    // return this._password.toUpperCase();
  }

  set password(value) {
    this._password = value;
  }
}

const howard = new User("howard@example.xyz", "abc");
console.log(howard.email);
console.log(howard.password);
