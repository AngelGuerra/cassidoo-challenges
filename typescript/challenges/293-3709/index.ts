type TOperator = "+" | "-" | "*" | "/";
type TDiceGroup = {
  dices: string;
  sides: string;
};
type TOperatorGroup = {
  operator: TOperator;
};

function getRandomBetweenOneAnd(n: number) {
  return Math.floor(Math.random() * n + 1);
}

function getNotationParts(
  notation: string
): IterableIterator<RegExpMatchArray> {
  return notation.matchAll(/(?<dices>\d*)[dD](?<sides>\d+)/g);
}

function matchOperators(notation: string): IterableIterator<RegExpMatchArray> {
  return notation.matchAll(/\d*[dD]\d+(?<operator>[+\-*/])/g);
}

function getOperators(notation: string): TOperator[] {
  const operators: TOperator[] = ["+"];

  for (const match of matchOperators(notation)) {
    const groups = match.groups as TOperatorGroup;
    operators.push(groups.operator);
  }

  return operators;
}

function calculateResult(
  total: number,
  operator: TOperator,
  current: number
): number {
  switch (operator) {
    case "-":
      return total - current;
    case "*":
      return total * current;
    case "/":
      return total / current;
    case "+":
    default:
      return total + current;
  }
}

export function rollDice(notation: string): number {
  const operators = getOperators(notation);
  const notationParts = getNotationParts(notation);

  let total = 0,
    index = 0;
  for (const match of notationParts) {
    const groups = match.groups as TDiceGroup;
    const dices: number = groups.dices === "" ? 1 : +groups.dices;
    const sides: number = +groups.sides;
    const sum = Array(dices)
      .fill(0)
      .map(() => getRandomBetweenOneAnd(sides))
      .reduce((acc, current) => acc + current, 0);

    total = calculateResult(total, operators[index++], sum);
  }

  return total;
}
