const operand = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const display = document.querySelector("#display");
const acbtn = document.querySelector("#on");
const clearbtn = document.querySelector("#clear");
const percent = document.querySelector("#percentage");
const plusMinus = document.querySelector("#plus-minus");
const equalbtn = document.querySelector("#equals");
const decimalbtn = document.querySelector("#decimal");

let operand1 = 0;
let operand2 = 0;
let opera = "";
let result = 0;

operand.forEach((item) => {
  item.addEventListener("click", () => {
    display.textContent += item.innerHTML;
  });
});

operator.forEach((item) => {
  item.addEventListener("click", () => {
    operand1 = Number(display.textContent);
    opera = item.innerHTML;
    display.textContent = "";
  });
});

equalbtn.addEventListener("click", () => {
  operand2 = Number(display.textContent);

  if (opera === "+") {
    result = operand1 + operand2;
  } else if (opera === "-") {
    result = operand1 - operand2;
  } else if (opera === "x") {
    result = operand1 * operand2;
  } else if (opera === "/") {
    result = operand1 / operand2;
  }

  display.textContent = result;
});

acbtn.addEventListener("click", () => {
  display.textContent = "";
});

clearbtn.addEventListener("click", () => {
  display.textContent = display.textContent.slice(0, -1);
});

percent.addEventListener("click", () => {
  display.textContent = display.textContent / 100;
});

plusMinus.addEventListener("click", () => {
  display.textContent *= -1;
});

decimalbtn.addEventListener("click", () => {
  if (display.textContent === "") {
    display.textContent = "0.";
  } else if (!display.textContent.includes(".")) {
    display.textContent += ".";
  }
});
