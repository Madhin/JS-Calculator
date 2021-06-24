"use strict";

var output = document.querySelector(".calc__output");
var allClear = document.querySelector(".ac");
var plusMinus = document.querySelector(".plusminus");
var percentage = document.querySelector(".percentage");
var divide = document.querySelector(".divide");
var seven = document.querySelector(".seven");
var eight = document.querySelector(".eight");
var nine = document.querySelector(".nine");
var multiply = document.querySelector(".multiply");
var four = document.querySelector(".four");
var five = document.querySelector(".five");
var six = document.querySelector(".six");
var minus = document.querySelector(".minus");
var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var plus = document.querySelector(".plus");
var zero = document.querySelector(".zero");
var dot = document.querySelector(".dot");
var equals = document.querySelector(".equals");
var numbers = document.querySelectorAll(".numbers");
console.log(numbers);
allClear.addEventListener("click", function () {
  output.innerHTML = 0;
});
numbers.forEach(function (button) {
  button.addEventListener("click", function (e) {
    clickEventListener(e);
  });
});

var clickEventListener = function clickEventListener(e) {
  var buttonPressed = e.target.innerHTML;
  var currentOutput = output.innerHTML;

  if (output.innerHTML === "0") {
    output.innerHTML = buttonPressed;
  } else {
    output.innerHTML = currentOutput + buttonPressed;
  }
};