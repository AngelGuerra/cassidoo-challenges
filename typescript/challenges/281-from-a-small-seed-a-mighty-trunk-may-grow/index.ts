/**
 * @description Generator. I do it this way just for the pleasure of using `yield` xD.
 * Based on https://apidock.com/ruby/Enumerable/each_cons
 * It iterates the given block for each array of consecutive <n> elements.
 * @param {number[]} arr Array to iterate.
 * @param {number} length Element of each block.
 */
function* eachCons(arr: number[], length: number): IterableIterator<number[]> {
  for (let idx = 0; idx <= arr.length - length; idx++)
    yield arr.slice(idx, idx + length);
}

export const maxSubarray = (arr: number[], length: number) => {
  if (length > arr.length) {
    throw new Error("The given length exceeds the length of the array.");
  }

  /* [Result, sum] */
  let result: [number[], number] = [[], Number.MIN_VALUE];

  for (const block of eachCons(arr, length)) {
    const packSum = block.reduce((sum, current) => sum + current, 0);

    if (packSum <= result[1]) {
      continue;
    }

    result = [block, packSum];
  }

  return result[0];
};
