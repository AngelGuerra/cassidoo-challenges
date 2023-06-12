function validateNonNegativeArguments(n: number, m: number): never | void {
  if (n < 0 || m < 0) {
    throw new Error("n and m must be non-negative.");
  }
}

function validateLength(arr: number[], n: number, m: number): never | void {
  if (n + m > arr.length) {
    throw new Error("n + m exceeds the length of the array.");
  }
}

export function trimArray(arr: number[], n: number, m: number): number[] {
  validateNonNegativeArguments(n, m);
  validateLength(arr, n, m);

  return arr.slice(n, arr.length - m);
}
