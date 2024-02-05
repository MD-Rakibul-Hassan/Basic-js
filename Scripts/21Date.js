// ********** Date Object *********** //

// console.log(date.toDateString());
// console.log(date.toUTCString());
// console.log(date.toISOString());

// // Date Get method //
// console.log(date.getMilliseconds());
// console.log(date.getFullYear());
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let month = months[date.getMonth()];
// console.log(month)
const time = document.getElementById("demo")
setInterval ( function () {
      const date = new Date();
      time.innerHTML = date.toLocaleTimeString()
},1000)


// console.log(new Date() === new Date())