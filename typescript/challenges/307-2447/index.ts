function isPerfectSquare(num: number): boolean {
  const sqrt = Math.sqrt(num);

  return sqrt === Math.floor(sqrt);
}

function reverseNumber(num: number): number {
  return Number(String(num).split("").reverse().join(""));
}

export function reversedSquares(n: number): boolean {
  if (n < 0) return false;

  return isPerfectSquare(n) && isPerfectSquare(reverseNumber(n));
}
