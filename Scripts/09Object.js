/**********Object***********/

// Object literals //
const person = {
      name : "Mr.x",
      age  : 25,
      liveIn : "Uganda",
      profession : "Farmer",
      //Object method :
      workAt : function () {
            console.log(this.name + " Is work at 10pm")
      }
};
// Accessing object propertis and methods //
person["workAt"]()
console.log(person.liveIn)

// What is this //
function parent () {
      console.log("I am calling from parent function");
      return () => {
            console.log(this , "I am calling from child function")
      }
      
}
let result = parent();
console.log(result())