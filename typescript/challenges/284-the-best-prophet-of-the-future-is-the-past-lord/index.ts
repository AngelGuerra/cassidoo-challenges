const RANGE_FILL: string = "...";

type TResult = (typeof RANGE_FILL | number)[];

const toString = (bits: TResult): string => {
  return `[${bits.join(", ")}]`;
};

const reducer = (acc: TResult, current: number, gap: number): TResult => {
  // If it is the first iteration, it is undefined.
  const prev = acc.at(-1) as number | undefined;

  if (prev === undefined || current - prev === 1) {
    return [...acc, current];
  }

  if (current - prev > gap) {
    return [...acc, RANGE_FILL, current];
  }

  // ...What if tomorrow someone wanted to change the gap? :-)
  const fill: number[] = [];
  for (let index = gap - 1; index >= 1; index--) {
    fill.push(current - index);
  }

  return [...acc, ...fill, current];
};

export const missingBits = (bits: number[], gap: number = 2): string => {
  const sortedBits: number[] = Array.from(
    new Int32Array([...new Set(bits)]).sort()
  );

  return toString(
    sortedBits.reduce<TResult>((acc: TResult, current: number): TResult => {
      return reducer(acc, current, gap);
    }, [])
  );
};
