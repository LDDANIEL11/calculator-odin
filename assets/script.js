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

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    const value = num.textContent;
    addNumbers(value);
  });
});

function addNumbers(number) {
  if (container.textContent == "0") container.textContent = number;
  //code for when u activate the operator to appear on the digit field but wont let the equal sign to be there (doesn't make sens if it does!)
  //else if (number == "=") return null;
  else if (container.textContent !== "0") container.textContent += number;
}

//an eventlistner for when we want the operators to appear on the digit fieald as well as the numbers
/*
const operators = document.querySelectorAll(".operator");

operators.forEach((op) => {
  op.addEventListener("click", () => {
    const value = op.textContent;
    addNumbers(value);
  });
});
*/
/*
if (container.textContent.includes(".")) {
    let arr = container.textContent.split(".");
    let dotsNum = arr.length - 1;
    alert(
      `ERROR! \nyou cant put more than one dot!\n you have entered ${dotsNum} Dots!`
    );
  }

*/
