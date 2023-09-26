const marvelHeroes = ["Thor", "Ironman", "Spiderman"]

const dcHeroes = ["Superman", "Flash", "Batman"]

// marvelHeroes.push(dcHeroes)

// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);

// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes);


const allNewHeroes = [...marvelHeroes, ...dcHeroes] // Spread Operator
// console.log(allNewHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArray = anotherArray.flat(Infinity) // takes depth min 1 upto infinity
console.log(realAnotherArray);



console.log(Array.isArray("Howard"))
console.log(Array.from("Howard"))
console.log(Array.from({ name: "Howard" })) // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));