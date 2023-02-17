export const printNumbersWithCharCodeAt = (): number[] => {
  return [...Array("e".charCodeAt(0)).keys()];
};

export const printNumbersWithStringLength = (): number[] => {
  return [
    ..."Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ornare dolor, et gravida augue.",
  ].map((_, idx) => idx);
};

export const printNumbersWithMathPow = (): number[] => {
  const one = Math.pow(0, 0);

  return [...Array(+`${one}0${one}`).keys()];
};

export const printNumbersWithHex = (): number[] => {
  return [[0], Array.from({ length: 0xa * 0xa }, (_, idx) => ++idx)].flat();
};

export const printNumbersWithDoWhile = () => {
  const array: number[] = [0];
  let loop = 0;

  do {
    array.push(++loop);
  } while (loop.toString().length < "wtf".length);

  return array;
};
