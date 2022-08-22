/**
 * LeetCode 128
 * https://leetcode.com/problems/longest-consecutive-sequence/
 */

function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let longestSequence: number = 0;
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];

    // check if the current number is the start of a sequence
    if (set.has(cur - 1)) continue;

    let maxSequence = 1;
    let nextNum = cur + 1;

    while (set.has(nextNum)) {
      maxSequence++;
      nextNum++;
    }

    longestSequence = Math.max(longestSequence, maxSequence);
  }

  return longestSequence;
}
