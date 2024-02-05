/************* Map Data Structor **************/

// Syntax : 
const myMap = new Map ([
      [10,"Ten"]
]);
myMap.set(20,"b");
console.log(myMap)
console.log(myMap.size)
console.log(myMap.entries())
for (x of myMap) {
      console.log(x)
}
console.log(myMap.get(10))