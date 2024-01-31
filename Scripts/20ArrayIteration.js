// Itaraging into an array //
const person = ["mr.x","mr.y","mr.z"];

// forEach method 
// The forEach method can't return anything 
person.forEach((value,index,array) => console.log("hi i am " + value));
// Map method 
// The map method can return anything 
const mapedValue = person.map(value => "hi i am " + value);
console.log(mapedValue)

const mul_dimen_arr = ['a',['b'],'c','d',['e',['f',['g']]]];
let flatMapping = mul_dimen_arr.flatMap(item => item);
console.log(flatMapping);

// Filtering an array 
const marks = [30,10,40,50,20,30];
const filteredMarks = marks.filter((mark) => {
      if (mark > 30) {
            return mark;
      }
});
console.log(filteredMarks);
// Reduceing an array 
const reducedArray = marks.reduce ( (prev,curren) => prev + curren);
console.log(reducedArray);

let newMarks = Array.from(marks);
newMarks.push("Copyed")
console.log(newMarks);
console.log(marks);

// Array with() Method 
// The with () Method update element without alterign the original array 
const months = ["Jan","Feb","Mar"];
const newMonth = months.with (2,"March");
console.log(months);
console.log(newMonth)