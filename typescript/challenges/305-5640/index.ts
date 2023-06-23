// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function depthJSON(data: any[]): number {
  return typeof data !== "object" && data !== null
    ? 0
    : 1 + Math.max(0, ...Object.values(data).map((v) => depthJSON(v)));
}
