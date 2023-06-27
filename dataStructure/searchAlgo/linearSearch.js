function linearSearch(haystack = [], needle = "") {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return true;
    }
  }
  return false;
}
module.exports = linearSearch;

// console.log("linear search", linearSearch([1, 2, 3, 4], 4)); // true

// console.log("linear search", linearSearch([1, 2, 3, 4], 8)); // false
// console.log("linear search", linearSearch([1, 2, 3, 4], "")); // false

// console.log("linear search", linearSearch([], 8)); // false
