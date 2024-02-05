/*********** Set data structor *************/
// Syntax : 
const mySet = new Set("a");
mySet.add("b");
mySet.add("z");
mySet.delete("z");
console.log(mySet.has("z"))
console.log(mySet);
console.log(mySet.size)
let values = mySet.values();
console.log(values);
for (x of values) {
      console.log(x)
}

// Problem : Find unique values form an array using set data structor 
const mixtValues = [1,3,4,5,2,1,2,3,5,4,6];
function findOutUniqeValues (array) {
      const uniqueValues = new Set(array);
      return [...uniqueValues];
}
const uniqueValues = findOutUniqeValues(mixtValues);
console.log(uniqueValues)