import {
  add,
  subtract,
  multiply,
  divide,
  modulus,
  exponentiate,
  average,
} from "../src/stringCalculator";

describe("stringCalculator functions", () => {
  describe("addition", () => {
    test("basic addition", () => {
      expect(add("2,3")).toBe(5);
      expect(add("1")).toBe(1);
    });

    test("negative number handling", () => {
      expect(() => add("-1,1")).toThrow("Negative numbers not allowed: -1");
    });

    test("addition with multiple numbers", () => {
      expect(add("2,3,5")).toBe(10);
      expect(add("1,2,3,4,5")).toBe(15);
      expect(add("0,0,0,0")).toBe(0);
    });

    test("addition with new line as delimiter", () => {
      expect(add("1\n2,3")).toBe(6);
      expect(add("1\n2\n3")).toBe(6);
    });
  });

  describe("subtraction", () => {
    test("basic subtraction", () => {
      expect(subtract("10,5")).toBe(5);
      expect(subtract("-1,1")).toBe(-2);
      expect(subtract("-1,-1")).toBe(0);
    });

    test("subtraction with multiple numbers", () => {
      expect(subtract("10,2,3")).toBe(5);
      expect(subtract("20,5,5")).toBe(10);
      expect(subtract("10,1,2")).toBe(7);
    });
  });

  describe("multiplication", () => {
    test("basic multiplication", () => {
      expect(multiply("3,7")).toBe(21);
      expect(multiply("-1,1")).toBe(-1);
      expect(multiply("-1,-1")).toBe(1);
    });

    test("multiplication with multiple numbers", () => {
      expect(multiply("2,3,4")).toBe(24);
      expect(multiply("1,2,3,4")).toBe(24);
      expect(multiply("0,2,3")).toBe(0);
    });
  });

  describe("division", () => {
    test("basic division", () => {
      expect(divide("10,2")).toBe(5);
      expect(divide("-1,1")).toBe(-1);
      expect(divide("-1,-1")).toBe(1);
    });

    test("division by zero", () => {
      expect(() => divide("10,0")).toThrow("Cannot divide by zero");
    });

    test("division with multiple numbers", () => {
      expect(divide("100,2,5")).toBe(10);
      expect(divide("20,2,2")).toBe(5);
    });
  });

  describe("modulus", () => {
    test("basic modulus", () => {
      expect(modulus("10,3")).toBe(1);
      expect(modulus("9,3")).toBe(0);
      expect(modulus("14,5")).toBe(4);
    });
  });

  describe("exponentiation", () => {
    test("basic exponentiation", () => {
      expect(exponentiate("2,3")).toBe(8);
      expect(exponentiate("3,3")).toBe(27);
      expect(exponentiate("5,2")).toBe(25);
    });
  });

  describe("average", () => {
    test("basic average", () => {
      expect(average("2,4")).toBe(3);
      expect(average("1,2,3,4,5")).toBe(3);
      expect(average("10,20")).toBe(15);
    });

    test("average with multiple numbers", () => {
      expect(average("2,4,6")).toBe(4);
      expect(average("1,2,3,4,5,6,7")).toBe(4);
      expect(average("10,20,30")).toBe(20);
    });
  });
});
