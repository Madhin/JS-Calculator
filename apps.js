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

console.log(numbers);

allClear.addEventListener("click", () => {
  output.innerHTML = 0;
});

numbers.forEach((button) => {
  button.addEventListener("click", (e) => {
    clickEventListener(e);
  });
});

const clickEventListener = (e) => {
  const buttonPressed = e.target.innerHTML;
  output.innerHTML = buttonPressed;
};
