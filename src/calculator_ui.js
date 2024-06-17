import {
  add,
  subtract,
  multiply,
  divide,
  modulus,
  exponentiate,
  average,
} from "./stringCalculator.js";

const operations = {
  add: handleAdd,
  subtract: handleSubtract,
  multiply: handleMultiply,
  divide: handleDivide,
  modulus: handleModulus,
  exponentiate: handleExponentiate,
  average: handleAverage,
};

export function performOperation(operationName) {
  const numbers = document.getElementById("numbers").value;
  try {
    const result = operations[operationName](numbers);
    document.getElementById("result").innerText = `Result: ${result}`;
  } catch (error) {
    document.getElementById("result").innerText = error.message;
  }
}

function handleAdd(numbers) {
  return add(numbers);
}

function handleSubtract(numbers) {
  return subtract(numbers);
}

function handleMultiply(numbers) {
  return multiply(numbers);
}

function handleDivide(numbers) {
  return divide(numbers);
}

function handleModulus(numbers) {
  return modulus(numbers);
}

function handleExponentiate(numbers) {
  return exponentiate(numbers);
}

function handleAverage(numbers) {
  return average(numbers);
}

window.performOperation = performOperation;
