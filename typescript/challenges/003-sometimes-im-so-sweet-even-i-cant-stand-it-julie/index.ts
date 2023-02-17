const cleanStringAndCastToArray = (str: string): Array<string> => {
  return [...str.toLowerCase().replace(/[^a-z]/g, "")]
    .sort()
    .filter((char) => char.trim().length !== 0);
};

export const areAnagrams = (strA: string, strB: string): boolean => {
  const strAAsArray = cleanStringAndCastToArray(strA);
  const strBAsArray = cleanStringAndCastToArray(strB);

  return (
    strAAsArray.length === strBAsArray.length &&
    strAAsArray.every(
      (char: string, index: number) => char === strBAsArray[index]
    )
  );
};
