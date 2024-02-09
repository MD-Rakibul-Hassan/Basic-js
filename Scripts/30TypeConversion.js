/************** Type conversion  ******************/
// Converting String to Number //
const stringNumber = "10.50";
console.log(Number(stringNumber))
console.log(Number(""));
if (Number("1") === 0) {
      console.log("Zero")
};
console.log(Number("Johan"));
console.log(typeof Math.PI);
console.log(parseFloat("50.21"))
console.log(parseInt("50.21"))
console.log(+ "20");
console.log(isNaN("10"));
// Converting Number to String //
console.log(String(10));
const x = 20;
console.log(x.toString());
console.log(String(20 + 30));
console.log(x.toExponential());
const y = 1.20345;
console.log(y.toFixed(2))
console.log(y.toFixed(1));
// Converting Date to Number //
const date = new Date();
console.log(typeof date)
console.log(Number(date));
// Converting Date to String //
console.log(typeof String(date));
// Converting Boolean to Number //
console.log(Number(true))
console.log(Number(false))
console.log(false.toString())

console.log(Number([10,30]))