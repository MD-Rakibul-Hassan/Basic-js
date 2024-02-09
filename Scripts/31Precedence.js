// ************ Precedence **************** //
// As in traditionl mathematice multiplication is done first :
const multiply = 10 + 20 * 2;
console.log(multiply)
// When using parentheses operations inside the parentheses are cmputed first 
const multiply2 = (10 + 20) * 2;
console.log(multiply2);
// Operation with the same precedence (like * and /) are computed left to right 
const leftToRight = 10 * 2 / 2;
console.log(leftToRight)