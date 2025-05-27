const containsDuplicate = require("./containsDuplicate");

test("should return true if any duplicate value", () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBeTruthy();
});

test("should return false if any duplicate value", () => {
  expect(containsDuplicate([1, 2, 3, 4])).toBeFalsy();
});

test("should return true if any duplicate value", () => {
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBeTruthy();
});
