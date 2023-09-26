// **************** Singleton Object **************

// const threadsUser = new Object()



// ****************** Non Singleton Object *******************

const threadsUser = {};


threadsUser.id = "5589jon"
threadsUser.name = "Johnny"
threadsUser.isLoggedIn = false


// console.log(threadsUser);



const regularUser = {
  email: "john@email.com",
  fullname: {
    userfullname: {
      firstname: "John",
      lastname: "Doe"
    }
  }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = { obj1, obj2 }


// Object Assign works at {target, source}
// it is good practice to target empty object {} and the other objects are source obviously.

// const obj3 = Object.assign({},obj1,obj2)

// will use Spread the most

const obj3 = {...obj1, ...obj2}

// console.log(obj3);




const users = [
  {
    id: 1,
    email: "h@gmail.com"
  },
  {

  },
  {

  }
]

users[1].email;
// console.log(threadsUser);


// console.log(Object.keys(threadsUser));
// console.log(Object.values(threadsUser));
// console.log(Object.entries(threadsUser));



// console.log(threadsUser.hasOwnProperty('isLoggedIn'));




// Destrucuring

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "Hitesh"
}

// course.courseInstructor

// const { courseInstructor } = course
const { courseInstructor: instructor } = course
// console.log(courseInstructor);
console.log(instructor);




// ReactJS Example

// const navbar = ({company}) => {

// }

// navbar(company = "Howard")




// JSON Example /API Example


// {
//   "name": "Howard",
//     "coursename": "JS in Hindi",
//       "price": "Free"
// }

// Another Example
// [
// { },
// { },
// { }
// ]


