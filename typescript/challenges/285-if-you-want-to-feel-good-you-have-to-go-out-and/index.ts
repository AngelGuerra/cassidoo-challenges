const newArrayFrom1To = (length: number): number[] => {
  return Array.from({ length }, (_, idx) => idx + 1);
};

export const generateArrays = (length: number): number[][] => {
  if (length <= 0) {
    throw new Error("Length must be a positive number.");
  }

  return newArrayFrom1To(length).map((innerLength) =>
    newArrayFrom1To(innerLength)
  );
};
