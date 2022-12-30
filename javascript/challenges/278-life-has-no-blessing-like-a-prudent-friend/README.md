# Challenge

Given a 2D array n of integers, and an array m of four (4) coordinates that represent corners of a rectangle in n, return the sum of all of the numbers in the rectangle.

## Example

```js
// prettier-ignore
let n = [
    6, 9, -7, 3,
    8, -1, -6, -4,
    2, -7, 7, -7,
    -1, 4, 7, 9
];
let m = [-1, 8, -7, 2];

rectangleSum(n, m);
// 2
rectangleSum(n, [6, 3, 2, -7]);
// 3
```
