export const sumEveryOther = (n: number): number => {
  return [
    ...n
      .toString()
      .replace(/\D/, "")
      .matchAll(/\d(\d)/g),
  ].reduce((acc, current) => acc + parseInt(current[1], 10), 0);
};
