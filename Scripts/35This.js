// ******* This keyword ******* //
/*
const person = {
      firstName : "Rakibul",
      lastName : " Hassan",
      id : 5550,
      fullName : function () {
            console.log(this.firstName + this.lastName)
            console.log("person => ",this)
            return   () => {
                  console.log(this)
                  return () => {
                        console.log("Inner funciton",this)
                  }
            }
      }
}
const result = person.fullName();
result()()
*/
// const person1 = {
//       firstName : "Rakibul ",
//       lastName : "Hassan"
// };
// const parent = {
//       person2 : {
//             name : "Rakib",
//             fullName :  () => {
//                   // console.log(this.firstName , this.lastName)
//                   console.log(this.name)
//             }
//       }
// }
// parent.person2.fullName()

// const person = {
//       name : "Rakib",
//       skills : ["HTML", "CSS","JavaScript"],
//       showSkills : function () {
//             this.skills.forEach(function (skill)  {
//                   console.log(this.name,skill)
//             })
//       }
// }
// person.showSkills()

// Situation 1
// console.log("Global This Value => ", this)
// Situtaion 2
// function f1() {
//       console.log("Normal Function This Value => ",this)
// }
// f1()
// Situtation 3 
// const person = {
//       firstName : "Rakib",
//       lastName : "Hassan",
//       fullName : function () {
//             console.log("This Value inside object method => ",this)
//       }
// }
// person.fullName()
// // Situtation 4 
// function Person (fn,ln) {
//       console.log("This value inside of constructor function",this)
// }
// const person = new Person()
//  Situtation 5 
const person = {
      firstName : "Rakib",
      lastName : "Hassan",
      fullName : function () {
            console.log(this)
      },
      callFullName :  () => {
          this.fullName()
      }
}
person.callFullName();
