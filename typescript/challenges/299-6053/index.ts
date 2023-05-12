function maxNumber(n: number): number {
  return Math.floor(Math.sqrt(n));
}

function isOdd(n: number): boolean {
  return n % 2 !== 0;
}

function square(n: number): number {
  return Math.pow(n, 2);
}

export function oddSquareSum(n: number): number {
  if (n <= 1) return 0;

  return Array.from({ length: maxNumber(n) }, (_, i) => i + 1)
    .filter(isOdd)
    .map(square)
    .filter((square) => square < n)
    .reduce((acc, curr) => acc + curr, 0);
}
