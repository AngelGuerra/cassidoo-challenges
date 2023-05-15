function numberToBinary(n: number): string {
  return (n).toString(2);
}

function reverseString(s: string): string {
  return s.split("").reverse().join("");
}

export function binaryPal(n: number): boolean {
  if (n < 0) throw new Error("Number must be Natural.");
  if (!Number.isInteger(n)) throw new Error("Number must be Integer.");

  const binary = numberToBinary(n);

  return binary === reverseString(binary);
}
