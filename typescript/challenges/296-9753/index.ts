function greatestCommonDivisor(x: number, y: number): number {
  return y === 0 ? x : greatestCommonDivisor(y, x % y);
}

function areOverlapped(pointA: number[], pointB: number[]): boolean {
  return pointA[0] === pointB[0] && pointA[1] === pointB[1];
}

function areVertical(pointA: number[], pointB: number[]): boolean {
  return pointA[0] === pointB[0];
}

function getDiff(pointA: number[], pointB: number[]): { y: number; x: number } {
  const yDiff = pointB[1] - pointA[1];
  const xDiff = pointB[0] - pointA[0];
  const g = greatestCommonDivisor(xDiff, yDiff);

  return { y: Math.floor(yDiff / g), x: Math.floor(xDiff / g) };
}

export function maxPointsOnLine(points: number[][]): number {
  const pointsLength = points.length;
  if (pointsLength < 2) return pointsLength;

  let maxPoint = 0;
  let curMax: number;
  let overlapPoints: number;
  let verticalPoints: number;
  const slopeMap = new Map<string, number>();

  for (let i = 0; i < pointsLength; i++) {
    curMax = 0;
    overlapPoints = 0;
    verticalPoints = 0;

    for (let j = i + 1; j < pointsLength; j++) {
      if (areOverlapped(points[i], points[j])) {
        overlapPoints++;
      } else if (areVertical(points[i], points[j])) {
        verticalPoints++;
      } else {
        const { y: yDiff, x: xDiff } = getDiff(points[i], points[j]);
        const slopeKey = [yDiff, xDiff].join("");
        const slopeValue: number = (slopeMap.get(slopeKey) ?? 0) + 1;
        slopeMap.set(slopeKey, slopeValue);
        curMax = Math.max(curMax, slopeValue);
      }

      curMax = Math.max(curMax, verticalPoints);
    }

    maxPoint = Math.max(maxPoint, curMax + overlapPoints + 1);

    slopeMap.clear();
  }

  return maxPoint;
}
