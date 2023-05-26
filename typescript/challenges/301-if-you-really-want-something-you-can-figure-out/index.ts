type TScoreItem = {
  score: number;
  letters: string[];
};
const WIDTH = 15;
const HEIGHT = 15;

const SCORES: TScoreItem[] = [
  { score: 1, letters: ["E", "A", "I", "O", "N", "R", "T", "L", "S", "U"] },
  { score: 2, letters: ["D", "G"] },
  { score: 3, letters: ["B", "C", "M", "P"] },
  { score: 4, letters: ["F", "H", "V", "W", "Y"] },
  { score: 5, letters: ["K"] },
  { score: 8, letters: ["J", "X"] },
  { score: 10, letters: ["Q", "Z"] },
];

const TRIPLE_WORD_INDEXES = [0, 7, 14, 105, 119, 210, 217, 224];
const DOUBLE_WORD_INDEXES = [
  16, 28, 32, 42, 48, 56, 64, 70, 154, 160, 168, 176, 182, 192, 196, 208,
];
const TRIPLE_LETTER_INDEXES = [
  20, 24, 76, 80, 84, 88, 136, 140, 144, 148, 200, 204,
];
const DOUBLE_LETTER_INDEXES = [
  3, 11, 36, 38, 45, 52, 59, 92, 96, 98, 102, 108, 116, 122, 126, 128, 132, 165,
  172, 179, 186, 188, 213, 221,
];

function wordOutOfBoundsException(): never {
  throw new Error("The word exceeds the limit of the board.");
}

function invalidCharException(): never {
  throw new Error("The word contains invalid chars.");
}

function validateWord(word: string): void {
  if (!/^[a-z]+$/i.test(word)) invalidCharException();
}

function validateWordPosition(
  wordLength: number,
  startIndex: number,
  vertical: boolean
): void {
  if (vertical && startIndex + wordLength * WIDTH >= WIDTH * HEIGHT) {
    wordOutOfBoundsException();
  }

  if (
    !vertical &&
    startIndex + wordLength >= WIDTH * (Math.floor(startIndex / 15) + 1)
  ) {
    wordOutOfBoundsException();
  }
}

function getWordLettersIndexes(
  wordLength: number,
  startIndex: number,
  vertical: boolean
): number[] {
  if (vertical) {
    return Array.from({ length: wordLength }, (_, i) => startIndex + WIDTH * i);
  }

  return Array.from({ length: wordLength }, (_, i) => startIndex + i);
}

function findScore(char: string): number {
  const score = SCORES.find((scoreItem) => {
    return scoreItem.letters.includes(char.toUpperCase());
  }) as TScoreItem;

  return score.score;
}

function calculateLettersScores(word: string, indexes: number[]): number {
  return indexes.reduce<number>(
    (acc: number, current: number, currentIndex: number) => {
      const score = findScore(word.charAt(currentIndex));

      if (DOUBLE_LETTER_INDEXES.includes(current)) {
        return acc + score * 2;
      }

      if (TRIPLE_LETTER_INDEXES.includes(current)) {
        return acc + score * 3;
      }

      return acc + score;
    },
    0
  );
}

function calculateWordExtraScore(score: number, indexes: number[]): number {
  return indexes.reduce((acc, current) => {
    if (DOUBLE_WORD_INDEXES.includes(current)) {
      return acc * 2;
    }

    if (TRIPLE_WORD_INDEXES.includes(current)) {
      return acc * 3;
    }

    return acc;
  }, score);
}

export function scrabbleScore(
  word: string,
  startIndex: number,
  vertical = false
): number {
  const wordLength = word.length;

  validateWord(word);
  validateWordPosition(wordLength, startIndex, vertical);

  const letterIndexes = getWordLettersIndexes(wordLength, startIndex, vertical);

  return calculateWordExtraScore(
    calculateLettersScores(word, letterIndexes),
    letterIndexes
  );
}
