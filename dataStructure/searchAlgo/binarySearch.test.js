const binarySearch = require("./binarySearch");

test("should return true if any match value", () => {
  expect(binarySearch([2, 3, 4, 5, 6, 7, 8], 3)).toBeTruthy();
});

test("should return false if any doesn't match value", () => {
  expect(binarySearch([1, 2, 3, 4], 8)).toBeFalsy();
});

test("should return false if no  value", () => {
  expect(binarySearch([2, 3, 4, 5, 6, 7, 8])).toBeFalsy();
});

test("should return false if no  value", () => {
  expect(binarySearch([], 9)).toBeFalsy();
});
