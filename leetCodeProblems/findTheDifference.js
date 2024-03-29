// You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Return the letter that was added to t.

// Example 1:

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
// Example 2:

// Input: s = "", t = "y"
// Output: "y"

function findTheDifference(s, t) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = (obj[s[i]] || 0) + 1;
  }
  for (let i = 0; i < t.length; i++) {
    if (obj[t[i]] !== undefined && obj[t[i]] > 0) {
      obj[t[i]]--;
    } else {
      return t[i];
    }
  }
}

console.log("findTheDifference 1", findTheDifference("abcd", "abcde"));

console.log("findTheDifference 1", findTheDifference("", "y"));

console.log("findTheDifference 1", findTheDifference("a", "aa"));
