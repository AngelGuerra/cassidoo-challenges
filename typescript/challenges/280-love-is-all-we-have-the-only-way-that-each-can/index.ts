export const replaceZeros = (str: string): number => {
  if (!/^\d+$/.test(str)) {
    throw new Error("Input must contain only digits.");
  }

  return +str.replace(/0+/g, (match: string) => match.length.toString());
};
