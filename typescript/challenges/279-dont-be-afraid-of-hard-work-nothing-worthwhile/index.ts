const isVowel = (char: string): boolean => {
  return ["a", "e", "i", "o", "u"].includes(char);
};

export const capitalAfterVowelWithRegex = (str: string): string => {
  return str.replace(/(?<=[aeiou])(!?\s?)([^aeiou]{1})/gi, (match) => {
    return match.toUpperCase();
  });
};

export const capitalAfterVowelWithoutRegex = (str: string): string => {
  let uppercaseIt = false;

  return [...str]
    .map((char: string) => {
      if (char.trim().length === 0) {
        return " ";
      }

      if (isVowel(char)) {
        uppercaseIt = true;

        return char;
      }

      if (!uppercaseIt) {
        return char;
      }

      uppercaseIt = false;

      return char.toUpperCase();
    })
    .join("");
};
