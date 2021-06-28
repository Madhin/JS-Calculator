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
const operatorsDm = document.querySelectorAll(".operatorsDm");

let outputString = "";

const reset = allClear.addEventListener("click", () => {
  outputString = "0";
  console.clear();
  handleUpdateOutput();
});

const equalsClick = equals.addEventListener("click", (e) => {
  handleEqualsEvent(e);
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

operatorsDm.forEach((button) => {
  button.addEventListener("click", (e) => {
    handleOperatorsDmEvent(e);
  });
});

dot.addEventListener("click", () => {
  const splitOutput = output.innerHTML.split("");
  if (splitOutput[splitOutput.length - 2] == ".") {
    alert("Invalid Input");
  } else {
    `${outputString} + ${dot}`;
  }
});

const handleClickEventListener = (e) => {
  const buttonPressed = e.target.innerHTML;
  if (outputString === "0") {
    outputString = buttonPressed;
  } else {
    outputString = `${outputString}${buttonPressed}`;
  }
  console.log(outputString);
  handleUpdateOutput();
};

const handleOperatorEvent = (e) => {
  const buttonPressed = e.target.innerHTML;
  outputString = `${outputString} ${buttonPressed} `;
  console.log(outputString);
};

const handleUpdateOutput = () => {
  output.innerHTML = outputString;
};

const handleEqualsEvent = (e) => {
  let result = new Function("return " + outputString)();
  output.innerHTML = result;
  console.log(result);
};

const handleOperatorsDmEvent = (e) => {
  const buttonPressed = e.target.innerHTML;
  const newMultiply = "*";
  const newDivide = "/";

  if (buttonPressed === "x") {
    outputString = `${outputString} ${newMultiply} `;
  } else if (buttonPressed === "÷") {
    outputString = `${outputString} ${newDivide} `;
  }
};

//if (outputString.includes(`${operators}` || `${operatorsDm}`)) {
//output.innerHTML = ;
//}
