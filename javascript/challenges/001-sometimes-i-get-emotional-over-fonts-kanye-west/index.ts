// # See ./README.md

const BASE_VALUES = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const generateRoman = (number: number, result: string = "") => {
  if (number === 0) {
    return result;
  }

  const [current_key, current_value]: [string, number] = Object.entries(
    BASE_VALUES
  ).find(([, value]) => {
    return value <= number;
  })!;

  return generateRoman(number - current_value, `${result}${current_key}`);
};

export const integerToRoman = (number: number) => {
  if (number <= 0 || number >= 4000) {
    throw new Error("The number must be between 0 and 3,999.");
  }

  return generateRoman(number);
};
