const accountId = 144553; // const cannot be changed.
let accountEmail = "john@google.com"; // let can be changed.
var accountPassword = "123456"; // old way of assigning a variable.
accountCity = "London"; // You can reserve memory for a variable without mentioning let or const before it. but it is not a good practice.
let accountState; // JavaScript considers a variable undefined which was not defined during assignment

// accountId = 2; *****not allowed*****

{
        /* This is called scope. eg; function scope,block scope.
        we use if else statement,for loops,functions and many more within it.
        :):):)
        
         */
}

accountEmail = "h1c@gg.com";

accountPassword = "2121212121";

accountCity = "Berlin";

console.log(accountId);

/* 
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);