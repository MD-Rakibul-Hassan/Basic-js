// ********* Scope ********* //
// Bock Scope 
{
      let x = "blocked";
      // You can use x here becouse x is accessibile inside of this block 
}
// Can't use x here becouse x is block scope
{
      var y = "Global and function scope";
      // You can use y here becouse y is accessibile inside of this block 
}
//You can use y here becouse y is global and function scope
console.log(y);
// Function Scope 
function local () {
      var local1 = "The var keyword can't use outside of this function becouse var is funciton scope";
      let local2 = "The let keyword is can't use outside of this function becouse let is blocked scope";
}
local()
// console.log(local1)
// console.log(local2)
// Global Scope 
const myName = "Rakib";
{
      console.log(myName)
}
function accessMyName () {
      console.log(myName)
}
accessMyName();


var globalName = "mr.x"