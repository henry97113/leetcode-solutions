/**
 * LeetCode 167
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */

function twoSum(numbers: number[], target: number): number[] {
  let p1 = 0;
  let p2 = numbers.length - 1;

  while (p1 < p2) {
    const sum = numbers[p1] + numbers[p2];
    if (sum === target) {
      return [p1 + 1, p2 + 1];
    } else if (sum > target) {
      p2--;
    } else {
      p1++;
    }
  }

  return [];
}
