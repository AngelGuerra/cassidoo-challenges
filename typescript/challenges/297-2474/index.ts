function getAllDigits(arr: number[]): number[] {
  return arr.join("").split("").map(Number);
}

function sumAllDigits(arr: number[]): number {
  return getAllDigits(arr).reduce((acc, current) => acc + current, 0);
}

function generateDigitGroups(arr: number[], groupSize: 2 | 3): number[] {
  const groups: Set<number> = new Set();
  const digits: string = arr.join("");

  function generateCombinations(index: number, combination: string): void {
    if (combination.length === groupSize) {
      groups.add(Number(combination));
      return;
    }

    for (let i = index; i <= digits.length - 1; i++) {
      generateCombinations(i + 1, combination + digits[i]);
    }
  }

  generateCombinations(0, "");

  return Array.from(groups);
}

function permuteDigits(arr: number[]): number[] {
  const digits = arr.join("").split("");

  function generatePermutations(
    remaining: string[],
    permutation: string,
    permutations: Set<string>
  ) {
    if (permutation.length === digits.length) {
      permutations.add(permutation);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const digit = remaining[i];
      const newPermutation = permutation + digit;
      const newRemaining = [
        ...remaining.slice(0, i),
        ...remaining.slice(i + 1),
      ];
      generatePermutations(newRemaining, newPermutation, permutations);
    }
  }

  const permutations: Set<string> = new Set();
  generatePermutations(digits, "", permutations);

  return Array.from(permutations).map((perm) => parseInt(perm, 10));
}

function rule2(arr: number[]): boolean {
  return getAllDigits(arr).some((digit) => digit % 2 === 0);
}

function rule3(arr: number[]): boolean {
  return sumAllDigits(arr) % 3 === 0;
}

function rule4(arr: number[]): boolean {
  return generateDigitGroups(arr, 2).some((digit) => digit % 4 === 0);
}

function rule5(arr: number[]): boolean {
  return getAllDigits(arr).some((digit) => [0, 5].includes(digit));
}

function rule6(arr: number[]): boolean {
  return rule2(arr) && rule3(arr);
}

function rule7(arr: number[]): boolean {
  return permuteDigits(arr).some((number) => number % 7 === 0);
}

function rule8(arr: number[]): boolean {
  return generateDigitGroups(arr, 3).some((digit) => digit % 8 === 0);
}

function rule9(arr: number[]): boolean {
  return sumAllDigits(arr) % 9 === 0;
}

export function divisibleIntegers(n: number, arr: number[]): boolean {
  if (n < 1 || n > 9) throw new Error("Divisor must be between 1 and 9.");

  if (arr.length === 0)
    throw new Error("You must specify at least one number.");

  // Any integer is divisible by 1.
  if (n === 1) return true;
  // Divisible by 2 if: any digit is even, it can be in the last position.
  if (n === 2) return rule2(arr);
  // Divisible by 3 if: the sum of the digits is divisible by 3.
  if (n === 3) return rule3(arr);
  // Divisible by 4 if: the last 2 digits are divisible by 4.
  if (n === 4) return rule4(arr);
  // Divisible by 5 if: the last digit is 0 or 5
  if (n === 5) return rule5(arr);
  // Divisible by 6 if: is even and is divisible by 3 (it passes both the 2 rule and 3 rule above).
  if (n === 6) return rule6(arr);
  // Divisible by 7 if: double the last digit and subtract it from a number made by the other digits. The result must be divisible by 7.
  // BUT: As I will have to permute the digits anyway I will not apply this rule and simply check if n % 7 === 0.
  if (n === 7) return rule7(arr);
  // Divisible by 8 if: the last three digits are divisible by 8.
  if (n === 8) return rule8(arr);

  // Divisible by 9 if: the sum of the digits is divisible by 9
  return rule9(arr);
}
