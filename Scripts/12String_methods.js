/**********String Methods***********/
// String length //
const text = "ABCDEFHIGKLMNOPQRST";
let textLength = text.length;
// String charactor searching //
// console.log(text.charAt(10));
// console.log(text[5]);
// console.log(text.charCodeAt(11));
// console.log(text.at(11));
// console.log(text.at(-1));

// Sliceing method //
const fruts = "apple banna mango";
const banna = fruts.slice(6,11);
const mango = fruts.slice(-12,-6);
// console.log(banna);
// console.log(mango);

// UpperCase && LoearCase //
const txt = "I love bangladesh!";
console.log(txt.toUpperCase());
console.log(txt.toLowerCase());

// Concatination //
let firstName = "Rakibul";
let lastName = "Hassan";
console.log(firstName.concat(" ",lastName));

// Triming //
let animals = "     Snake Bear Dear      Elefent     ";
let allAnimals = animals.trim();
console.log(allAnimals)
console.log(animals)

// Repting //
let fullName = "Rakibul Hassan";
console.log(fullName.repeat(3));

// Replacing //
let game = "I love freefire & freefire & Freefire";
console.log(game.replace("freefire","nothing"))
console.log(game.replace(/freefire/g,"nothing"))
console.log(game.replace(/freefire/gi,"nothing"));

// Converting string to an array  //

let string = "this is a string";
console.log(string.split())
console.log(string.split(""))
console.log(string.split(" "))