/**************Array Searching***************/
const subjects = ["Bangla","English","Math","Relegin","English"];
// indexOf method
const english = subjects.indexOf("English");
console.log(subjects);
console.log(subjects[english]);
console.log(english)
// lastIndexOf method 
const lastEnglish = subjects.lastIndexOf("English");
console.log(lastEnglish);
// includes method 
let reslut = subjects.includes("Bangla");
console.log(reslut);

let reslut_2 = subjects.find(function (value) {
     return value === "Bangla"
});
console.log(reslut_2);

const numbers = [1,2,3,4,5,6];
let reslut_3 = numbers.find((value) => value > 3);
console.log(reslut_3);
const indexOfEnglish = subjects.findIndex((ind) => ind === "Bangla");
console.log(indexOfEnglish)
