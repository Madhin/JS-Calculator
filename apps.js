const output = document.querySelector(".calc__output");
const allClear = document.querySelector(".ac");
const plusMinus = document.querySelector(".plusminus");
const percentage = document.querySelector(".percentage");
const divide = document.querySelector(".divide");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const multiply = document.querySelector(".multiply");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const minus = document.querySelector(".minus");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const plus = document.querySelector(".plus");
const zero = document.querySelector(".zero");
const dot = document.querySelector(".dot");
const equals = document.querySelector(".equals");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");

let outputString = "";

const reset = allClear.addEventListener("click", () => {
  outputString = "";
  handleUpdateOutput();
});

const equalsClick = equals.addEventListener("click", () => {
  handleEqualsEvent();
});

numbers.forEach((button) => {
  button.addEventListener("click", (e) => {
    handleClickEventListener(e);
  });
});

operators.forEach((button) => {
  button.addEventListener("click", (e) => {
    handleOperatorEvent(e);
  });
});

dot.addEventListener("click", () => {
  const splitOutput = output.innerHTML.split("");
  if (splitOutput[splitOutput.length - 2] == ".") {
    alert("Invalid Input");
  } else {
    `${displayVal} + ${dot}`;
  }
});

const handleClickEventListener = (e) => {
  const buttonPressed = e.target.innerHTML;
  if (outputString === "0") {
    outputString = buttonPressed;
  } else {
    outputString = `${outputString}${buttonPressed}`;
  }
  handleUpdateOutput();
};

const handleOperatorEvent = (e) => {
  const buttonPressed = e.target.innerHTML;
  output.innerHTML = outputString;
  outputString = `${outputString} ${buttonPressed} `;
  console.log(outputString);
};

const handleUpdateOutput = () => {
  if (outputString == "") {
    output.innerHTML = "";
  } else {
    output.innerHTML = outputString;
  }
};

const handleEqualsEvent = (e) => {
  const currentOutput = output.innerHTML;
  console.log(outputString);
  const calculate = eval(outputString);
  output.innerHTML = outputString;
  console.log(outputString);
};
