"use strict";

function operate(str, a, b) {
  if (str == "+") {
    sum(a, b);
  } else if (str == "-") {
    subtract(a, b);
  } else if (str == "*") {
    multiply(a, b);
  } else if ((str = "/")) {
    divide(a, b);
  }
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

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    const value = num.textContent;
    addNumbers(value);
  });
});

function addNumbers(number) {
  if (container.textContent == "0") container.textContent = number;
  else if (container.textContent !== "0") container.textContent += number;
}

const operators = document.querySelectorAll(".operator");
firstNumber = "";
currentOperator = "";
operators.forEach((op) => {
  op.addEventListener("click", () => {});
});
