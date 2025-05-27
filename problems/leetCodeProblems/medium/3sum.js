// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let closest = Infinity;
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === target) {
        return sum;
      }
      if (sum < target) {
        left++;
      } else {
        right--;
      }
      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }
    }
  }
  return closest;
}

const nums = [-1, 2, 1, -4],
  target = 1;
console.log("threeSumClosest", threeSumClosest(nums, target));
