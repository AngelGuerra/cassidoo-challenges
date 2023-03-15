type TOperation = "add" | "subtract" | "multiply" | "divide";

interface IFraction {
  numerator: number;
  denominator: number;
}

function cleanWhitespaces(input: string): string {
  return input.replace(/\s/g, "");
}

/** @example - "1/4" --> { numerator: 1, denominator: 4 } */
function stringToFraction(fraction: string): IFraction {
  const [numerator, denominator] = cleanWhitespaces(fraction).split("/");

  return { numerator: +numerator, denominator: +(denominator ?? 1) };
}

/** @example - { numerator: 1, denominator: 4 } --> "1/4" */
function fractionToString(fraction: IFraction): string {
  if (fraction.denominator === 1) {
    return fraction.numerator.toFixed();
  }

  if (fraction.numerator < 0 && fraction.denominator < 0) {
    return `${fraction.numerator * -1}/${fraction.denominator * -1}`;
  }

  return `${fraction.numerator}/${fraction.denominator}`;
}

function validateDenominators(
  fractionA: IFraction,
  fractionB: IFraction
): void {
  if (fractionA.denominator !== 0 && fractionB.denominator !== 0) {
    return;
  }

  throw new Error("Denominator can't be 0.");
}

function validateInputs(fractionA: string, fractionB: string): void {
  const regex = /^-?\d+(\/-?\d+)?$/;

  if (
    regex.test(cleanWhitespaces(fractionA)) &&
    regex.test(cleanWhitespaces(fractionB))
  ) {
    return;
  }

  throw new Error("At least one of the inputs is invalid.");
}

function leastCommonMultiple(x: number, y: number): number {
  return Math.abs((x * y) / greatestCommonDivisor(x, y));
}

function greatestCommonDivisor(x: number, y: number): number {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }

  return x;
}

/** @example - { numerator: 3, denominator: 12 } --> { numerator: 1, denominator: 4 } */
function reduce(fraction: IFraction): IFraction {
  const gcd = greatestCommonDivisor(fraction.numerator, fraction.denominator);

  return {
    numerator: fraction.numerator / gcd,
    denominator: fraction.denominator / gcd,
  };
}

function addOrSubtracOperation(
  fractionA: IFraction,
  operator: "+" | "-",
  fractionB: IFraction
) {
  const denominator = leastCommonMultiple(
    fractionA.denominator,
    fractionB.denominator
  );
  const numeratorA =
    fractionA.numerator * (denominator / fractionA.denominator);
  const numeratorB =
    fractionB.numerator * (denominator / fractionB.denominator);

  return {
    numerator:
      operator === "+" ? numeratorA + numeratorB : numeratorA - numeratorB,
    denominator,
  };
}

function add(fractionA: IFraction, fractionB: IFraction): IFraction {
  return addOrSubtracOperation(fractionA, "+", fractionB);
}

function substract(fractionA: IFraction, fractionB: IFraction): IFraction {
  return addOrSubtracOperation(fractionA, "-", fractionB);
}

function multiply(fractionA: IFraction, fractionB: IFraction): IFraction {
  return {
    numerator: fractionA.numerator * fractionB.numerator,
    denominator: fractionA.denominator * fractionB.denominator,
  };
}

function divide(fractionA: IFraction, fractionB: IFraction): IFraction {
  return {
    numerator: fractionA.numerator * fractionB.denominator,
    denominator: fractionA.denominator * fractionB.numerator,
  };
}

function runOperation(
  operation: TOperation,
  fractionA: IFraction,
  fractionB: IFraction
) {
  switch (operation) {
    case "add":
      return add(fractionA, fractionB);
    case "subtract":
      return substract(fractionA, fractionB);
    case "multiply":
      return multiply(fractionA, fractionB);
    default:
      return divide(fractionA, fractionB);
  }
}

export function fractionMath(
  fractionA: string,
  operation: TOperation,
  fractionB: string
): string {
  validateInputs(fractionA, fractionB);

  const fractionAInterface = stringToFraction(fractionA);
  const fractionBInterface = stringToFraction(fractionB);

  validateDenominators(fractionAInterface, fractionBInterface);

  return fractionToString(
    reduce(runOperation(operation, fractionAInterface, fractionBInterface))
  );
}
