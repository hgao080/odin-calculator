const operands = document.querySelectorAll(".numbers > .digit");
const operators = document.querySelectorAll(".operations > button");
const equals = document.querySelector(".equals")
const clear = document.querySelector(".clear");
const screen = document.querySelector(".screen");

let num1 = "";
let num2 = "";
let operation = "";
let display = "";
let operated = false;

screen.textContent = display;

operands.forEach((button) => {
  button.addEventListener("click", () => {
    if (operated == true) {
      display = "";
      num1 = "";
      operated = false;
    }

    if (operation == "") {
      num1 = num1 + button.textContent;
    } else {
      num2 = num2 + button.textContent;
    }

    console.log(num1);
    console.log(num2);
    display = display + button.textContent;
    screen.textContent = display;
  })
})

operators.forEach((button) => {
  button.addEventListener("click", () => {
    if (operation != "") {
      display = operate(parseInt(num1), parseInt(num2), operation);
      num1 = display;
      num2 = "";
      display = display + " " + button.textContent + " ";
      operation = button.textContent;
    } else {
      operation = button.textContent;
      display = display + " " + button.textContent + " ";
    }
    
    screen.textContent = display;
  })
})

equals.addEventListener("click", () => {
  if (num2 != "") {
    display = operate(parseInt(num1), parseInt(num2), operation);
    screen.textContent = display;
    num1 = display;
    num2 = "";
    operation = "";
    operated = true;
  }
});

clear.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  operation = "";
  display = "";
  screen.textContent = display;
})

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      if (num2 == 0) {
        return("Can't divide by 0")
      }

      return divide(num1, num2);
  }
}