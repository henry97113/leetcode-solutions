/**
 * LeetCode 1
 * https://leetcode.com/problems/two-sum/
 */

function twoSum(nums: number[], target: number): number[] {
  const record: Record<string, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const matchNum = target - nums[i];

    if (record[matchNum] !== undefined) {
      return [record[matchNum], i];
    }

    record[nums[i]] = i;
  }

  return [0, 1];
}
