import { expect, describe, it } from "vitest";
import { divisibleIntegers } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check results", () => {
  it("throws an error when invalid input is provided", async () => {
    expect(() => divisibleIntegers(10, [2])).toThrowError(
      "Divisor must be between 1 and 9."
    );
  });

  it("throws an error when invalid input is provided", async () => {
    expect(() => divisibleIntegers(2, [])).toThrowError(
      "You must specify at least one number."
    );
  });

  it("1: gets true because any number is divisible by one", () => {
    expect(divisibleIntegers(1, [40, 50, 90])).toBe(true);
  });

  it("2: gets true because there is at least one even number", () => {
    expect(divisibleIntegers(2, [40, 50, 90])).toBe(true);
  });

  it("2: gets false because there is no even number", () => {
    expect(divisibleIntegers(2, [97, 53])).toBe(false);
  });

  it("3: gets true because the sum of the digits is divisible by three", () => {
    expect(divisibleIntegers(3, [40, 50, 90])).toBe(true);
  });

  it("3: gets false because the sum of the digits is not divisible by three", () => {
    expect(divisibleIntegers(3, [40, 50, 91])).toBe(false);
  });

  it("4: gets true because there is any combination that the last two digits are divisible by four", () => {
    expect(divisibleIntegers(4, [1, 28])).toBe(true);
  });

  it("4: gets false because there is any combination that the last two digits are not divisible by four", () => {
    expect(divisibleIntegers(4, [4, 29])).toBe(false);
  });

  it("5: gets true because there is at least a zero or a five", () => {
    expect(divisibleIntegers(5, [1, 28, 18, 59])).toBe(true);
  });

  it("5: gets false because there is no zero or five", () => {
    expect(divisibleIntegers(5, [4, 29, 76, 13])).toBe(false);
  });

  it("6: gets true because there is any combination that is even and is divisible by three", () => {
    expect(divisibleIntegers(6, [4, 1, 43])).toBe(true);
  });

  it("6: gets false because there is no combination that is even and is divisible by three", () => {
    expect(divisibleIntegers(6, [1, 28, 18, 59])).toBe(false);
  });

  it("7: gets true because there is any combination that is divisible by seven", () => {
    expect(divisibleIntegers(7, [51, 0])).toBe(true);
  });

  it("7: gets false because there is no combination that is divisible by seven", () => {
    expect(divisibleIntegers(7, [50, 9])).toBe(false);
  });

  it("8: gets true because there is any combination that the last three digits are divisible by eight", () => {
    expect(divisibleIntegers(8, [109, 81, 6])).toBe(true);
  });

  it("8: gets false because there is no combination that the last three digits are divisible by eight", () => {
    expect(divisibleIntegers(8, [5, 87, 1])).toBe(false);
  });

  it("9: gets true because the sum of the digits is divisible by nine", () => {
    expect(divisibleIntegers(9, [26, 91])).toBe(true);
  });

  it("9: gets false because the sum of the digits is not divisible by nine", () => {
    expect(divisibleIntegers(9, [5, 87, 1])).toBe(false);
  });
});
