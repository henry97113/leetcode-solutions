/**
 * LeetCode 238
 * https://leetcode.com/problems/product-of-array-except-self/
 */

function productExceptSelf(nums: number[]): number[] {
  const result: number[] = Array.from({ length: nums.length }, () => 1);

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] *= prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}
