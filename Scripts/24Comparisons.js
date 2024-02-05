/************ Comparisons *************/

// The Nullish Calescing Operator ?? //

const result = undefined ?? "The value is null"
if (result) {
      console.log(result)
}
const person = {
      age : 20
}
console.log(person?.name)