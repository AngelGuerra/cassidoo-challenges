export const numBalanced = (parenthesis: string): number => {
  return Math.abs(
    [...parenthesis].reduce((acc, char) => acc + (char === ")" ? 1 : -1), 0)
  );
};
