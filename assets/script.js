"use strict";
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

const numbers = document.querySelectorAll(".num");
const container = document.querySelector(".container");
let firstNumber = "";
let currentOperator = "";
let secondNumber = "";
//setting a flag
let resetNext = false;

//each number button eventlistener
numbers.forEach((num) => {
  num.addEventListener("click", () => {
    const value = num.textContent;
    addNumbers(value);
    if (currentOperator == "") {
      String(value);
      firstNumber += value;
    } else {
      secondNumber += value;
    }
    console.log(firstNumber, secondNumber);
  });
});
//function to change the container field number !!!
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
/*
let result = operate(firstNumber, currentOperator, secondNumber);
alert(result);*/

//each operator button eventlistner

const operators = document.querySelectorAll(".operator");

operators.forEach((op) => {
  op.addEventListener("click", () => {
    currentOperator = String(op.textContent);
    resetNext = true;
  });
});

//equal button

const equal = document.querySelector(".equal");

equal.addEventListener("click", () => {
  let result = operate(firstNumber, currentOperator, secondNumber);
  container.textContent = result;
  alert(result);
});

//clear button

const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
  container.textContent = "0";
  firstNumber = "";
  currentOperator = "";
  secondNumber = "";
});

//backspace button

const bckSpce = document.querySelector(".backspace");

bckSpce.addEventListener("click", () => {
  if (container.textContent.length > 1) {
    if (currentOperator == "") {
      container.textContent = container.textContent.slice(0, -1);
      firstNumber = container.textContent;
    } else {
      container.textContent = container.textContent.slice(0, -1);
      secondNumber = container.textContent;
    }
  } else {
    container.textContent = "0";
  }
});

//

//EXTRA CODES DOWN HERE !!!

//

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
