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
const reset = allClear.addEventListener("click", () => {
  output.innerHTML = 0;
});

numbers.forEach((button) => {
  button.addEventListener("click", (e) => {
    handleClickEventListener(e);
  });
});

operators.forEach((button) => {
  button.addEventListener("click", () => {
    let stringToNum = parseFloat(output.innerHTML);
    console.log(typeof stringToNum);
  });
});

dot.addEventListener("click", () => {
  const splitOutput = output.innerHTML.split("");
  if (splitOutput[splitOutput.length - 2] == ".") {
    alert("Invalid Input");
  } else {
    `output.innerHTML + ${dot}`;
  }
});

plus.addEventListener("click", () => {
  if (!output.innerHTML.includes(plus)) {
    `output.innerHTML + ${plus}`;
  }
});

minus.addEventListener("click", () => {
  if (!output.innerHTML.includes(minus)) {
    `output.innerHTML + ${minus}`;
  }
});

multiply.addEventListener("click", () => {
  if (!output.innerHTML.includes(multiply)) {
    `output.innerHTML + ${multiply}`;
  }
});

divide.addEventListener("click", () => {
  if (!output.innerHTML.includes(divide)) {
    `output.innerHTML + ${divide}`;
  }
});

const handleClickEventListener = (e) => {
  const buttonPressed = e.target.innerHTML;
  const currentOutput = output.innerHTML;
  if (output.innerHTML === "0") {
    output.innerHTML = buttonPressed;
  } else {
    output.innerHTML = currentOutput + buttonPressed;
  }
};
