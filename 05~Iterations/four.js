// For Objects Use forin loop


const myObject = {
  js: "Javascript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift by Apple",
};

// for (const key in myObject) {
//   console.log(key);
// }
// for (const key in myObject) {
//   console.log(myObject[key]);
// }
for (const key in myObject) {
  // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["cpp", "js", "rb", "py"];

for (const key in programming) {
  // console.log(key);
  // console.log(programming[key]);
}


const map = new Map();
map.set("IN", "India");
map.set("US", "United States of America");
map.set("FR", "France");
map.set("IN", "India");

for (const key in map) {
  console.log(key);
}