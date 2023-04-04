import { promises } from "node:fs";

const LESS_THAN_TWENTY = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const TENTHS_LESS_THAN_HUNDRED = [
  "zero",
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

function generateWords(size: number, words: string[] = []): string {
  if (size === 0) {
    return words.join(" ");
  }

  if (size < 20) {
    words.push(LESS_THAN_TWENTY[size]);
    return generateWords(0, words);
  }

  if (size < 100) {
    words.push(TENTHS_LESS_THAN_HUNDRED[Math.floor(size / 10)]);
    return generateWords(size % 10, words);
  }

  if (size < 1000) {
    words.push(`${Math.floor(size / 100)} hundred`);
    return generateWords(size % 100, words);
  }

  // size < 10000
  words.push(`${Math.floor(size / 1000)} thousand`);
  return generateWords(size % 1000, words);
}

export async function howManyCharactersDoYouHave(): Promise<string> {
  const data = await promises.readFile(`${__dirname}/index.ts`, "utf-8");

  return generateWords(data.length);
}
