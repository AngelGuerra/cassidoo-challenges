interface IPoint {
  readonly col: number;
  readonly row: number;
}

type TPointGroupedByCol = Map<number, number[]>;

type TRectangle = IPoint[];

/**
 * @function
 * @name getSideSize
 * @returns Returns the size of the side if the array would be 2D instead of 1D. That is, if it were converted to
 * a square.
 * @param {number[]} arr to be checked.
 * @returns {number} With the size of the side.
 * @throws {Error} If ir is not a square.
 * @example -
 * ```js
 * const arr = [1,2,3,4,5,6,7,8,9];
 * getSideSize(arr); // 3
 * // [
 * //   [1, 2, 3],
 * //   [4, 5, 6],
 * //   [7, 8, 9],
 * // ]
 * ```
 */
const getSideSize = (arr: number[]): number => {
  const size = Math.sqrt(arr.length);
  if (!Number.isInteger(size)) {
    throw new Error("The array must have length in order to become a square.");
  }

  return size;
};

/**
 * @function
 * @name getAllIndexesOf
 * @description Returns all indexes of an item in an array.
 * @param {number[]} arr Array to search in.
 * @param {number} needle Item to check.
 * @returns {number[]} With a new array containing the indexes.
 */
const getAllIndexesOf = (arr: number[], needle: number): number[] => {
  return arr.reduce<number[]>((acc, current, idx) => {
    return current === needle ? [...acc, idx] : acc;
  }, []);
};

/**
 * @function
 * @name index1Dto2D
 * @description Calculates the index from a 1D array to a 2D array.
 * @param {number} index Index of the element in the 1D array.
 * @param {number} size 2D reference array size.
 * @see getSideSize
 * @returns
 */
const index1Dto2D = (index: number, size: number): IPoint => {
  return { col: index % size, row: Math.floor(index / size) };
};

/**
 * @function
 * @name index2Dto1D
 * @description Calculates the index from a 2D array to a 1D array.
 * @param {IPoint} index Index of the element in the 2D array.
 * @param {number} size 2D reference array size.
 * @see getSideSize
 * @returns
 */
const index2Dto1D = (index: IPoint, size: number): number => {
  return index.col + size * index.row;
};

/**
 * @function
 * @name getAllCoordsOf
 * @description Returns the positions of the searched items transformed into coordinates of a Cartesian axis. The
 * coordinate 0,0 is the first index, that is the upper left corner of the axis.
 * - 2D to 1D -> `i = x + (width * y);`
 * - 1D to 2D -> `x = i % width; y =  i / width;`
 * @param {number[]} arr Array to search in.
 * @param {number} needle Item to check.
 * @param {number} size Size of the Cartesian axis.
 * @see getSideSize
 * @see getAllIndexesOf
 * @returns {IPoint[]} Coordinates of the items found.
 * @example -
 * ```js
 * const arr = [1,2,3,4,5,6,3,2,1];
 * const size = getSideSize(arr); // 3
 * getAllIndexesOf(arr, 2, size);
 * // [{col: 1, row: 0}, {col: 1, row: 2}]
 * ```
 */
const getAllCoordsOf = (
  arr: number[],
  needle: number,
  size: number
): IPoint[] => {
  return getAllIndexesOf(arr, needle).map((idx: number) => {
    return index1Dto2D(idx, size);
  });
};

/**
 * @function
 * @name getRectangle
 * @description Returns the first rectangle found from a set of coordinates.
 * @param map Possible coordinates.
 * @returns {TRectangle} With the four corners of the rectangle or empty if it hasn't been able to determine them.
 */
const getRectangle = (map: TPointGroupedByCol): TRectangle => {
  let rectangle: TRectangle = [];

  if (map.size < 2) {
    return rectangle;
  }

  // Extract the first element of the Map because this function is recursive and needs to reduce the elements in each
  // iteration.
  const [firstCol, firstRows]: [number, number[]] = map.entries().next().value;
  map.delete(firstCol);

  for (const [col, rows] of map.entries()) {
    const intersection = firstRows.filter((row) => rows.includes(row));

    // To make a rectangle it needs two columns and at least two matching rows. That is, four possible points, one for
    // each of its corners.
    if (intersection.length < 2) {
      continue;
    }

    rectangle = [
      { col: firstCol, row: intersection[0] },
      { col: firstCol, row: intersection[1] },
      { col: col, row: intersection[0] },
      { col: col, row: intersection[1] },
    ];

    break;
  }

  if (rectangle.length > 0) {
    return rectangle;
  }

  return getRectangle(map);
};

/**
 * @function
 * @name getFinalIndexes
 * @description Returns all indexes that are contained by the rectangle in the reference array.
 * @param {TRectangle} rectangle Rectangle corners.
 * @param {number} size 2D reference array size.
 * @returns {number[]} With the indexes.
 */
const getFinalIndexes = (rectangle: TRectangle, size: number): number[] => {
  const indexes: number[] = [];
  const [cols, rows]: Set<number>[] = rectangle.reduce<Set<number>[]>(
    (acc, corner) => {
      return [acc[0].add(corner.col), acc[1].add(corner.row)];
    },
    [new Set(), new Set()]
  );

  for (let row = Math.min(...rows); row <= Math.max(...rows); row++) {
    for (let col = Math.min(...cols); col <= Math.max(...cols); col++) {
      indexes.push(index2Dto1D({ col, row }, size));
    }
  }

  return indexes;
};

/**
 * @function
 * @name rectangleSum
 * @description Given a 2D array n of integers, and an array m of four (4) coordinates that represent corners of a
 * rectangle in n, return the sum of all of the numbers in the rectangle.
 * @param {number[]} n Reference array.
 * @param {number[]} m Coordinates of the corners of the rectangle.
 * @returns {number} With the sum of the numbers in the rectangle.
 * @throws {Error} If any validation fails.
 */
export const rectangleSum = (n: number[], m: number[]) => {
  const size = getSideSize(n);

  // A rectangle has only 4 corners.
  if (m.length !== 4) {
    throw new Error("A rectangle has only 4 corners.");
  }

  // All corners must be inside the reference array.
  if (!m.every((item) => n.includes(item))) {
    throw new Error("All corners must be inside the reference array.");
  }

  const possibleCorners: TPointGroupedByCol = [
    getAllCoordsOf(n, m[0], size),
    getAllCoordsOf(n, m[1], size),
    getAllCoordsOf(n, m[2], size),
    getAllCoordsOf(n, m[3], size),
  ]
    .flat()
    .sort((a, b) => a.col - b.col)
    .reduce<TPointGroupedByCol>(
      (entryMap, current) =>
        entryMap.set(current.col, [
          ...new Set(
            [...(entryMap.get(current.col) || []), current.row].sort()
          ),
        ]),
      new Map()
    );

  for (const [col, values] of possibleCorners.entries()) {
    if (values.length < 2) {
      possibleCorners.delete(col);
    }
  }

  // Only rectangles parallel to the X and Y axes are sought.
  if (possibleCorners.size < 2) {
    throw new Error(
      "Not enough coordinates have been found to create the rectangle."
    );
  }

  const rectangle: TRectangle = getRectangle(possibleCorners);
  if (!rectangle.length) {
    throw new Error("No rectangle has been found with the given coordinates.");
  }

  return getFinalIndexes(rectangle, size).reduce((acc, current) => {
    return acc + n[current];
  }, 0);
};
