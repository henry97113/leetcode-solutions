/**
 * LeetCode 217
 * https://leetcode.com/problems/contains-duplicate/
 */

function containsDuplicate(nums: number[]): boolean {
  const records = {};

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (records[cur] !== undefined) {
      return true;
    }
    records[cur] = 1;
  }
  return false;
}
