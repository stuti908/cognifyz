const button = document.getElementById("myButton");

button.addEventListener("click", function() {
  button.style.backgroundColor = "red";
});
const currentTime = new Date().getHours();

if (currentTime < 12) {
  alert("Good morning!");
} else if (currentTime < 18) {
  alert("Good afternoon!");
} else {
  alert("Good evening!");
}
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const add = document.getElementById("add");
const result = document.getElementById("result");

add.addEventListener("click", function() {
  result.textContent = "Result: " + (Number(num1.value) + Number(num2.value));
});