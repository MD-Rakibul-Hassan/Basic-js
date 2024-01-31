/***********Events*************/

const demo = document.getElementById("demo");
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");

btn.addEventListener("click", function () {
      demo.innerHTML = "btn was clicked!"
})
btn2.addEventListener("click", function () {
      this.innerHTML = "the btn2 was clicked!"
})