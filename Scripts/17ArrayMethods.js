//* ***********Array Methods*********** *//
// Converting Array to String 
const num = [10,20,30];
console.log(num)
const arrStr1 = num.toString();
console.log(arrStr1);
const arrStr2 = num.join(" ");
console.log(arrStr2);
console.log(num);
// at()
console.log(num.at(1));
// Popping and pushing
const person = ["first","second"];
person.push("Third");
person.pop();
person.shift();
person.unshift("first")
console.log(person);
// Concatenating Array 
const boys = ["first-boy",];
const girls = ["second-girl"];
const boyGirls = boys.concat(girls);
console.log(boyGirls);

// Flattening an Array //
const mul_dimen_arr = [1,[2],[3,[4,[5]]],6];
console.log(mul_dimen_arr);
const floatArray = mul_dimen_arr.flat(Infinity);
console.log(floatArray);

// Splicing and Slicing Array //
const frouts = ["Banna","Lemon","Jackfrout"];
frouts.splice(1,1,"Painapple");
console.log(frouts)
// toSplice Method 
// The toSplice method create a new array don't change the original array 
const newToSplice = frouts.toSpliced(1,1,"new mehtod");
console.log(newToSplice);

// Slice method 
const slicedArray = frouts.slice(1,2);
console.log(slicedArray);