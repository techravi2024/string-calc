# String Calculator

This is a simple string calculator application with basic arithmetic operations implemented in JavaScript. It supports addition, subtraction, multiplication, division, modulus, exponentiation, and calculating averages.

## Project Structure

- **src/**: Contains the core logic for the calculator and UI components.
  - `calculator_ui.js`: Handles the UI interactions (not detailed in this readme).
  - `stringCalculator.js`: Implements the string calculator functions.
  
- **index.html**: Basic HTML file with a `<div>` and CSS for UI rendering.

- **package.json**: Includes necessary packages and dependencies.

- **style.scss**: Stylesheet file for styling the calculator UI.

- **test/**: Contains unit tests for the string calculator functions.
  - `calculator.test.js`: Includes test cases for addition, subtraction, multiplication, division, modulus, exponentiation, and average operations.

## Functionality and Tests

### Addition
- Handles basic addition and multiple numbers separated by commas or new lines.
- Throws an error on negative numbers.

### Subtraction
- Supports basic subtraction and multiple numbers.

### Multiplication
- Performs basic multiplication and handles multiple numbers.

### Division
- Handles basic division and multiple numbers.
- Throws an error when dividing by zero.

### Modulus
- Computes the modulus of two numbers.

### Exponentiation
- Computes the power of two numbers.

### Average
- Calculates the average of numbers separated by commas.

## Usage

To use the string calculator:

1. Ensure Node.js is installed.
2. Install dependencies using `npm install`.
3. Run tests using `npm test`.

## Example

```javascript
const { add, subtract, multiply, divide, modulus, exponentiate, average } = require('./src/stringCalculator');

console.log(add("2,3")); // Output: 5
console.log(subtract("10,5")); // Output: 5
console.log(multiply("3,7")); // Output: 21
console.log(divide("10,2")); // Output: 5
console.log(modulus("10,3")); // Output: 1
console.log(exponentiate("2,3")); // Output: 8
console.log(average("2,4")); // Output: 3


This `README.md` file provides an overview of the project structure, functionality, tests, usage instructions, and example usage of the string calculator.
