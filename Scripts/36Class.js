/************ Classes *************/
// syntax 
import myMap from "./Scripts/28Map.js"
console.log(myMap)
class Template {
      constructor (name,age) {
            this.name = name;
            this.age = age;
      }
      definition ()  {
            console.log(this.name)
      }
}
const person = new Template ("Rakibul", 21);
const person2 = new Template ("Hassan", 20);
// console.log(person)
// console.log(person2)
person.definition.call(person2)
person2.definition()

// const person3 = {
//       name : "Rakib",
//       age : 50,
//       prentPerson : function () {
//             console.log(this)
//       }
// }
// person3.prentPerson()