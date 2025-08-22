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
