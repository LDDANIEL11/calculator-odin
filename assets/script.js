"use strict";

function operate(a, str, b) {
  if (str == "+") {
    sum(a, b);
  } else if (str == "-") {
    subtract(a, b);
  } else if (str == "*") {
    multiply(a, b);
  } else if ((str = "÷")) {
    divide(a, b);
  } else return null;
}

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let numStored = "";
let opStored = "";

const numbers = document.querySelectorAll(".num");
const container = document.querySelector(".container");
let firstNumber = null;
let currentOperator = null;
let secondNumber = null;
//setting a flag
let resetNext = false;

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    const value = num.textContent;
    addNumbers(value);
    if (currentOperator == null) {
      firstNumber = value;
    } else {
      secondNumber = value;
    }
  });
});

function addNumbers(number) {
  //using the flag for when we set an operator
  if (resetNext) {
    container.textContent = number;
    //reseting the flag
    resetNext = false;
  } else {
    if (container.textContent == "0") container.textContent = number;
    else container.textContent += number;
  }
}

const operators = document.querySelectorAll(".operator");

operators.forEach((op) => {
  op.addEventListener("click", () => {
    currentOperator = op.textContent;
    resetNext = true;
    operate(firstNumber, currentOperator, secondNumber);
  });
});

//an eventlistner for when we want the operators to appear on the digit fieald as well as the numbers
/*
operators.forEach((op) => {
  op.addEventListener("click", () => {
    const value = op.textContent;
    addNumbers(value);
  });
});
*/
//code for when we dont want to allow users add more than one dot ... doesnt suit my project but i coded this idea out eventually for myself
/*
if (container.textContent.includes(".")) {
    let arr = container.textContent.split(".");
    let dotsNum = arr.length - 1;
    alert(
      `ERROR! \nyou cant put more than one dot!\n you have entered ${dotsNum} Dots!`
    );
  }

*/

//first idea of reseting the container or changing it with pressing each digit
/*
if (currentOperator == null) {
  if (container.textContent == "0") container.textContent = number;
  //code for when u activate the operator to appear on the digit field but wont let the equal sign to be there (doesn't make sens if it does!)
  //else if (number == "=") return null;
  else if (container.textContent !== "0") container.textContent += number;
} else {
  container.textContent = number;
}
*/
