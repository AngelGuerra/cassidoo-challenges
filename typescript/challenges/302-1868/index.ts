type TKeyboardLayouts = {
  qwerty: string[];
  dvorak: string[];
  colemak: string[];
};

const KEYBOARD_LAYOUTS: TKeyboardLayouts = {
  qwerty: ["qwertyuiop", "asdfghjkl", "zxcvbnm"],
  dvorak: ["pyfgcrl", "aoeuidhtns", "qjkxbmwvz"],
  colemak: ["qwfpgjluy", "arstdhneio", "zxcvbkm"],
};

function checkRow(word: string, permittedChars: string): boolean {
  const regex = new RegExp(`^[${permittedChars}]*$`, "i");

  return regex.test(word);
}

export function oneRow(
  words: string[],
  layout: keyof TKeyboardLayouts = "qwerty"
): string[] {
  return words.filter((word) =>
    KEYBOARD_LAYOUTS[layout].some((row) => checkRow(word, row))
  );
}
