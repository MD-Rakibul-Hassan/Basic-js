// ********** Error ********* //
const num = 10;
try {
      if (num > 20) throw "The number is to long";
      if (num < 20 && num >= 10) console.log("Perfect number");
      if (num < 10) throw "The number is to short"
}
catch(error) {
      console.log(error)
}