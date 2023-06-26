function validateSortedData(data: string[]): void | never {
  for (let i = 1; i < data.length; i++) {
    if (data[i] <= data[i - 1]) {
      throw new Error("Data must be sorted in ascending order.");
    }
  }
}

function validateAtoZ(data: string[]): void | never {
  if (!data.every((char) => /^[a-z]$/.test(char))) {
    throw new Error('Data must contain only characters between "a" and "z".');
  }
}

function allChars(start: number, end: number) {
  return Array.from({ length: end - start - 1 }, (_, index) =>
    String.fromCharCode(start + index + 1)
  );
}

export function missingLetters(data: string[]): string[] {
  validateAtoZ(data);
  validateSortedData(data);

  const start = data[0].charCodeAt(0);
  const end = data[data.length - 1].charCodeAt(0);
  const set = new Set(data);

  return allChars(start, end).filter((item) => !set.has(item));
}
