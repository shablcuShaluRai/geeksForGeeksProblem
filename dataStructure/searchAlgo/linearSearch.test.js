const linearSearch = require("./linearSearch");

test("should return true if any match value", () => {
  expect(linearSearch([1, 2, 3, 1], 3)).toBeTruthy();
});

test("should return false if any doesn't match value", () => {
  expect(linearSearch([1, 2, 3, 4], 8)).toBeFalsy();
});

test("should return false if no  value", () => {
  expect(linearSearch([2, , 3, 4, 5])).toBeFalsy();
});

test("should return false if no  value", () => {
  expect(linearSearch([], 9)).toBeFalsy();
});
