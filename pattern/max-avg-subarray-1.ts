/* 
643. Maximum average subarray I
https://leetcode.com/problems/maximum-average-subarray-i/description/

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000

Constraints:

n == nums.length
1 <= k <= n <= 10^5
-10^4 <= nums[i] <= 10^4
*/

function maxAvarageNaive(nums: number[], k: number): number {
  let maxAvg = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0.1;
    for (let j = 0; j < k; j++) {
      if (i + k <= nums.length) {
        if (j === 0) sum = 0;
        sum += nums[i + j];
      } else {
        i = nums.length;
        j = k;
      }
    }
    if (sum !== 0.1) {
      maxAvg = Math.max(sum / k, maxAvg);
    }
  }
  return maxAvg;
}

function maxAvarageSlidingWindow(nums: number[], k: number): number {
  let start = 0;
  let windowSum = 0;
  let maxAvg = Number.NEGATIVE_INFINITY;

  for (let end = 0; end < nums.length; end++) {
    windowSum += nums[end];
    if (end - start + 1 === k) {
      if (windowSum / k > maxAvg) maxAvg = windowSum / k;
      windowSum -= nums[start];
      start++;
    }
  }
  return maxAvg;
}

const nums = [1, 12, -5, -6, 50, 3];
const k = 4;
// console.log(maxAvarageNaive(nums, k));
console.log(maxAvarageSlidingWindow(nums, k));
