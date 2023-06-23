# Challenge

**Given some JSON data, calculate the maximum depth reached**. Both arrays and dictionaries increase the depth! If the input is invalid data, the response should be undefined (you decide how you want that to return).

## Example

```js
depthJSON([]); // 1
depthJSON([1, 2, 3, 4, 5]); // 1
depthJSON([{ a: [] }, ["abc"]]); // 3
```
