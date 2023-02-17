const cleanIndexOfWord = (word: string, idx: number): string => {
  return `${word.substring(0, idx)} ${word.substring(idx + 1)}`;
};

export const wordleGuess = (input: string, word: string): string => {
  if (input.length !== 5 || word.length !== 5) {
    throw new Error("Each guess must be a valid 5-letter word.");
  }

  if (input === word) {
    return "🟩🟩🟩🟩🟩";
  }

  let cleanedWord: string = word;

  return [...input]
    .map((char, idx) => {
      if (cleanedWord.charAt(idx) === char) {
        cleanedWord = cleanIndexOfWord(cleanedWord, idx);
        return "🟩";
      }

      return char;
    })
    .reduce((result: string, char: string) => {
      if (char === "🟩") {
        return `${result}${char}`;
      }

      if (cleanedWord.includes(char)) {
        cleanedWord = cleanIndexOfWord(cleanedWord, cleanedWord.indexOf(char));
        return `${result}🟨`;
      }

      return `${result}⬛`;
    }, "");
};
