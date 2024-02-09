//******** Typeof oparator **********//
// Find data type of nay varivales
console.log(typeof "Hello world");
console.log(typeof 20);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});
// console.log(typeof typeof 5)
// The consturctor property 
console.log("xy".constructor)
console.log([].constructor)
console.log({}.constructor)
console.log(function(){}.constructor);
// Findign data type using constructor property 
console.log("x".constructor.toString().indexOf("String") > - 1)
const num = 5;
console.log(num.constructor.toString().indexOf("Number") > - 1)
// Simple way //
console.log([].constructor === Array)
console.log({}.constructor === Object)
console.log(new Date().constructor === Date)

// instanceof operator 
console.log({} instanceof Object);
console.log([] instanceof Array);
