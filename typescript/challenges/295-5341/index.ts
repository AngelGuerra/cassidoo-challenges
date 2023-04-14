// Shout out to the video of blackpenredpen -> https://www.youtube.com/watch?v=aV6XTBQ0dmM

interface TAngles {
  [key: string]: number;
}

function createRange(from: number, to: number): number[] {
  return Array.from({ length: to - from + 1 }, (_, index) => from + index);
}

function round(n: number): number {
  return Math.round((n + Number.EPSILON) * 1000) / 1000;
}

function sumAngles(p: number, q: number): number {
  return 180 * (p - 2 * q);
}

/**
 * @see https://en.wikipedia.org/wiki/Schl%C3%A4fli_symbol
 * @example For a 7-pointed star: {7/2}, {7/3}
 */
function getQs(p: number): number[] {
  const start = 2;

  // if even: q = (n - 4) / 2;
  // if odd: q = (n - 3) / 2;
  return p % 2 === 0
    ? createRange(start, Math.floor(p / 2) - 1)
    : createRange(start, Math.floor(p / 2));
}

export function calculateStarAngle(p: number): TAngles {
  if (p < 4) {
    throw new Error("A star has to have at least 3 points.");
  }

  return getQs(p).reduce(
    (acc: TAngles, q: number) => ({
      ...acc,
      [`{${p}/${q}}`]: round(sumAngles(p, q) / p),
    }),
    {}
  );
}
