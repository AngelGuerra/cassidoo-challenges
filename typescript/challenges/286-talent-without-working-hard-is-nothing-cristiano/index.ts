const ALPHABET_LENGTH = 26;
const CHAR_CODE_DIFF = 64;

const getCharValue = (char: string, loop = 0): number => {
  return (char.charCodeAt(0) - CHAR_CODE_DIFF) * ALPHABET_LENGTH ** loop;
};

export const getColumnNumber = (columnName: string): number => {
  columnName = columnName.toUpperCase();
  if (!new RegExp("^[A-Z]+$", "g").test(columnName)) {
    throw new Error("Column can only contain chars from A to Z.");
  }

  return [...columnName]
    .reverse()
    .reduce<number>((acc: number, current: string, idx: number) => {
      return acc + getCharValue(current, idx);
    }, 0);
};
