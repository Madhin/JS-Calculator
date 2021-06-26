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
var operators = document.querySelectorAll(".operators");
var outputString = "";
var reset = allClear.addEventListener("click", function () {
  outputString = "";
  handleUpdateOutput();
});
var equalsClick = equals.addEventListener("click", function (e) {
  handleEqualsEvent(e);
});
numbers.forEach(function (button) {
  button.addEventListener("click", function (e) {
    handleClickEventListener(e);
  });
});
operators.forEach(function (button) {
  button.addEventListener("click", function (e) {
    handleOperatorEvent(e);
  });
});
dot.addEventListener("click", function () {
  var splitOutput = output.innerHTML.split("");

  if (splitOutput[splitOutput.length - 2] == ".") {
    alert("Invalid Input");
  } else {
    "".concat(displayVal, " + ").concat(dot);
  }
});

var handleClickEventListener = function handleClickEventListener(e) {
  var buttonPressed = e.target.innerHTML;

  if (outputString === "0") {
    outputString = buttonPressed;
  } else {
    outputString = "".concat(outputString).concat(buttonPressed);
  }

  handleUpdateOutput();
};

var handleOperatorEvent = function handleOperatorEvent(e) {
  var buttonPressed = e.target.innerHTML;
  output.innerHTML = outputString;
  outputString = "".concat(outputString, " ").concat(buttonPressed, " ");
  console.log(outputString);
};

var handleUpdateOutput = function handleUpdateOutput() {
  if (outputString == "") {
    output.innerHTML = "";
  } else {
    output.innerHTML = outputString;
  }
};

var handleEqualsEvent = function handleEqualsEvent(e) {
  output.innerHTML = eval(outputString);
  console.log(outputString);
};