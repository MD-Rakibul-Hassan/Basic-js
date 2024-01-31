/*******Function********/

// Normal Function Syntax //
function smile (name,smileing) {
      console.log(name + " Is " + smileing)
} //Function defination or funciton body 
smile("Rakib",'😁'); //Function invoking or calling
smile("Hassan",'😁'); //Function invoking or calling

// Function Invocation :
// The code inside the function will execute when "something" invokes (calls) the function:

// When an event occurs (when a user clicks a button)
// When it is invoked (called) from JavaScript code
// Automatically (self invoked)


// ======= Return statment =======  //
// When the function reach return statement the funcition stop executed

function myFunc (a , b) {
      console.log("This line of code will executed after return the a * b values")
      return a * b;
      console.log("This line of code will not executed after return the a * b values")
}
const result = myFunc(10,20);
console.log(result);