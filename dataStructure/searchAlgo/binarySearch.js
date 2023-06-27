function binarySearch(haystack = [], needle) {
  let lo = 0,
    hi = haystack.length;
  do {
    let m = Math.floor(lo + (hi - lo) / 2);
    let v = haystack[m];
    if (v === needle) {
      return true;
    } else if (v > needle) {
      hi = m;
    } else {
      lo = m + 1;
    }
  } while (lo < hi);
  return false;
}

module.exports = binarySearch;

console.log("binary", binarySearch([2, 3, 4, 5, 6, 7, 8], 6));
