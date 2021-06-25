"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
var operators = document.querySelectorAll(".operators");
var reset = allClear.addEventListener("click", function () {
  output.innerHTML = 0;
});
numbers.forEach(function (button) {
  button.addEventListener("click", function (e) {
    handleClickEventListener(e);
  });
});
operators.forEach(function (button) {
  button.addEventListener("click", function () {
    var stringToNum = parseFloat(output.innerHTML);
    console.log(_typeof(stringToNum));
  });
});
dot.addEventListener("click", function () {
  var splitOutput = output.innerHTML.split("");

  if (splitOutput[splitOutput.length - 2] == ".") {
    alert("Invalid Input");
  } else {
    "output.innerHTML + ".concat(dot);
  }
});
plus.addEventListener("click", function () {
  if (!output.innerHTML.includes(plus)) {
    "output.innerHTML + ".concat(plus);
  }
});
minus.addEventListener("click", function () {
  if (!output.innerHTML.includes(minus)) {
    "output.innerHTML + ".concat(minus);
  }
});
multiply.addEventListener("click", function () {
  if (!output.innerHTML.includes(multiply)) {
    "output.innerHTML + ".concat(multiply);
  }
});
divide.addEventListener("click", function () {
  if (!output.innerHTML.includes(divide)) {
    "output.innerHTML + ".concat(divide);
  }
});

var handleClickEventListener = function handleClickEventListener(e) {
  var buttonPressed = e.target.innerHTML;
  var currentOutput = output.innerHTML;

  if (output.innerHTML === "0") {
    output.innerHTML = buttonPressed;
  } else {
    output.innerHTML = currentOutput + buttonPressed;
  }
};