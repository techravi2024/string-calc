function add(numbers) {
  if (!numbers || numbers === "") {
    return 0;
  }

  // Handling custom delimiter
  if (numbers.startsWith("//")) {
    const delimiter = numbers[2];
    numbers = numbers.substring(4);
    numbers = numbers.replace(new RegExp(delimiter, "g"), ",");
  } else {
    numbers = numbers.replace(/\n/g, ",");
  }

  // Splitting and mapping to integers
  const nums = numbers
    .split(",")
    .map((num) => num.trim())
    .filter((num) => num !== "")
    .map((num) => {
      const parsedNum = parseInt(num);
      if (isNaN(parsedNum)) {
        throw new Error(`Invalid number found: ${num}`);
      }
      return parsedNum;
    });

  // Handling negative numbers
  const negatives = nums.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(",")}`);
  }

  // Calculating sum
  const sum = nums.reduce((acc, curr) => acc + curr, 0);

  return sum;
}

function subtract(numbers) {
  if (!numbers || numbers === "") {
    return 0;
  }

  // Handling custom delimiter
  if (numbers.startsWith("//")) {
    const delimiter = numbers[2];
    numbers = numbers.substring(4);
    numbers = numbers.replace(new RegExp(delimiter, "g"), ",");
  } else {
    numbers = numbers.replace(/\n/g, ",");
  }

  // Splitting and mapping to integers
  const nums = numbers
    .split(",")
    .map((num) => num.trim())
    .filter((num) => num !== "")
    .map((num) => {
      const parsedNum = parseInt(num);
      if (isNaN(parsedNum)) {
        throw new Error(`Invalid number found: ${num}`);
      }
      return parsedNum;
    });

  // Calculating subtraction
  if (nums.length === 1) {
    return parseInt(nums[0]);
  } else {
    return nums.reduce((acc, curr) => acc - curr);
  }
}

function multiply(numbers) {
  if (!numbers || numbers === "") {
    return 0;
  }

  // Splitting and mapping to integers
  const nums = numbers
    .split(",")
    .map((num) => num.trim())
    .filter((num) => num !== "")
    .map((num) => {
      const parsedNum = parseInt(num);
      if (isNaN(parsedNum)) {
        throw new Error(`Invalid number found: ${num}`);
      }
      return parsedNum;
    });

  // Calculating multiplication
  if (nums.length === 1) {
    return parseInt(nums[0]);
  } else {
    return nums.reduce((acc, curr) => acc * curr, 1);
  }
}

function divide(numbers) {
  if (!numbers || numbers === "") {
    return 0;
  }

  // Splitting and mapping to integers
  const nums = numbers
    .split(",")
    .map((num) => num.trim())
    .filter((num) => num !== "")
    .map((num) => {
      const parsedNum = parseInt(num);
      if (isNaN(parsedNum)) {
        throw new Error(`Invalid number found: ${num}`);
      }
      return parsedNum;
    });

  // Calculating division
  if (nums.length === 1) {
    return parseInt(nums[0]);
  } else {
    return nums.reduce((acc, curr) => {
      const num = parseInt(curr);
      if (num === 0) {
        throw new Error("Cannot divide by zero");
      }
      return acc / num;
    });
  }
}

function modulus(numbers) {
  if (!numbers || numbers === "") {
    return 0;
  }

  // Splitting and mapping to integers
  const nums = numbers
    .split(",")
    .map((num) => num.trim())
    .filter((num) => num !== "")
    .map((num) => {
      const parsedNum = parseInt(num);
      if (isNaN(parsedNum)) {
        throw new Error(`Invalid number found: ${num}`);
      }
      return parsedNum;
    });

  // Calculating modulus
  if (nums.length === 1) {
    return parseInt(nums[0]);
  } else {
    const initialValue = nums.shift();
    return nums.reduce((acc, curr) => acc % curr, initialValue);
  }
}

function exponentiate(numbers) {
  if (!numbers || numbers === "") {
    return 0;
  }

  // Splitting and mapping to integers
  const nums = numbers
    .split(",")
    .map((num) => num.trim())
    .filter((num) => num !== "")
    .map((num) => {
      const parsedNum = parseInt(num);
      if (isNaN(parsedNum)) {
        throw new Error(`Invalid number found: ${num}`);
      }
      return parsedNum;
    });

  // Calculating exponentiation
  if (nums.length === 1) {
    return parseInt(nums[0]);
  } else {
    const initialValue = nums.shift();
    return nums.reduce((acc, curr) => Math.pow(acc, curr), initialValue);
  }
}

function average(numbers) {
  if (!numbers || numbers === "") {
    return 0;
  }

  // Splitting and mapping to integers
  const nums = numbers
    .split(",")
    .map((num) => num.trim())
    .filter((num) => num !== "")
    .map((num) => {
      const parsedNum = parseInt(num);
      if (isNaN(parsedNum)) {
        throw new Error(`Invalid number found: ${num}`);
      }
      return parsedNum;
    });

  // Calculating average
  const sum = nums.reduce((acc, curr) => acc + curr, 0);
  return sum / nums.length;
}

export { add, subtract, multiply, divide, modulus, exponentiate, average };
