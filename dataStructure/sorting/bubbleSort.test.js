const bubbleSort = require("./bubbleSort");

test("should return sorted arr", () => {
  expect(bubbleSort([2, 3, 35, 4, 52, 35])).toEqual([2, 3, 4, 35, 35, 52]);
});

test("should return empty arr", () => {
  expect(bubbleSort([])).toEqual([]);
});
