//* ***************Array************** *//
// Array //
const person = ["Rakib","Hassan","Shehab"];
// Access array first element \\
let firstElement = person[0];
console.log(firstElement);
// Access array lest element //
let lestElement = person[person.length - 1];
console.log(lestElement);
// How to Access full array 
document.getElementById("demo").innerHTML = person;
// Looping into array //
for(let i = 0; i <= person.length - 1; i++) {
      console.log(person[i])
}

// Posing element in array last element //
const number = [1,2,3,4,];
number.push(5);
number[number.length] = 6;
number[number.length + 2] = 9 
console.log(number);

// How to find array //
console.log(Array.isArray([]));
console.log(Array.isArray({}));
console.log(number instanceof Array);
console.log(number instanceof Object);
console.log(number instanceof String);

// Converting an array to stirng //
// Most Popular tow way 
const numbers = [10,20,30,40,50];
console.log(numbers);
let arrayToStringWithToStirng = numbers.toString();
console.log(arrayToStringWithToStirng);