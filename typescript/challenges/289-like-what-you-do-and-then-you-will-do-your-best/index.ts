export const repeatedGroups = (numbers: number[]): number[][] => {
  return numbers
    .reduce<number[][]>(reducer, [])
    .filter((group) => group.length > 1);
};

const reducer = (acc: number[][], current: number): number[][] => {
  const prev = acc.at(-1) as number[] | undefined;

  if (prev === undefined) {
    return [[current]];
  }

  if (prev[0] === current) {
    acc.splice(-1, 1, [...prev, current]);

    return acc;
  }

  return [...acc, [current]];
};
