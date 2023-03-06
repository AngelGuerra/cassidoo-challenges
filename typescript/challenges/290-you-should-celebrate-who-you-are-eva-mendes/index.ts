export function scramble(input: string): string {
  return input
    .split(/\b/g)
    .map((word: string) => {
      if (word.length <= 3) {
        return word;
      }

      if (/^\d+(st|nd|rd|th)?$/.test(word)) {
        return word;
      }

      const wordAsArray = [...word];
      const first = wordAsArray.shift();
      const last = wordAsArray.pop();

      return [first, ...shuffle(wordAsArray), last].join("");
    })
    .join("");
}

/**
 * @see https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 */
function shuffle(wordAsArray: string[]): string[] {
  let counter: number = wordAsArray.length;
  let char: string;
  let idx: number;

  while (counter) {
    idx = Math.floor(Math.random() * counter--);
    char = wordAsArray[counter];
    wordAsArray[counter] = wordAsArray[idx];
    wordAsArray[idx] = char;
  }

  return wordAsArray;
}
