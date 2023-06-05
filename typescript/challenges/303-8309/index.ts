type TPersonWithPiePieces = {
  name: string;
  num: number;
};

function throwPiecesError(person: TPersonWithPiePieces): never {
  throw new Error(
    `${person.name} cannot want a negative number of pieces (${person.num}).`
  );
}

function getNeededTotalPieces(
  currentTotal: number,
  currentPerson: TPersonWithPiePieces
): number {
  if (currentPerson.num < 0) {
    throwPiecesError(currentPerson);
  }

  return currentTotal + currentPerson.num;
}

export function mmmPie(
  people: TPersonWithPiePieces[],
  maxPiePieces: number
): number {
  return Math.ceil(people.reduce(getNeededTotalPieces, 0) / maxPiePieces);
}
