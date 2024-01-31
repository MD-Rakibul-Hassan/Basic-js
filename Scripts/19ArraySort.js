//****************/ Array sorting **************/ //
// Task 1 : Reverse an array by asignding to descnding order 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
function reverseingArray  (array) {
      const newArray = [...array].sort();
      newArray.reverse()
      return newArray;
};
let reversedArray = reverseingArray(fruits);
console.log(reversedArray);

// toSort Method () 
// toSorted method create a new array, toSorted method can't change the original array 
let sortedAray = fruits.toSorted();
console.log(sortedAray)
// toReversed Method () 
// toReversed method create a new array, toReversed method can't change the original array 
let toReversedArray = fruits.toReversed();
console.log(toReversedArray);

// Task 2 : Sort a number small to bigger 
const number = [10,20,50,30,70,40,60,90];
function numberSorting (number) {
      const newNumber = number.slice();
      newNumber.sort( (a,b) => a - b)
      return newNumber;
}
const newSortedNumber = numberSorting(number);
console.log(newSortedNumber)


// Find the Lowest nad highest value in array 
let x = [1,2,3,5]
console.log(Math.max(...x))
console.log(Math.min(...x))
