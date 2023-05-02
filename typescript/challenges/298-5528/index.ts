export function removeZeroes(arr: number[]): number[] {
  if (arr.length === 0) throw new Error("List cannot be empty.");

  return arr
    .join("")
    .replace(/^0+|0+$/g, "")
    .split("")
    .map(Number);
}
