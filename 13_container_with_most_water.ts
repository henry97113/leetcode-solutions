/**
 * https://leetcode.com/problems/container-with-most-water/
 * Time: O(n) | Space: O(1)
 */

function maxArea(height: number[]): number {
  let l = 0;
  let r = height.length - 1;
  let max = 0;

  while (l < r) {
    const _height = Math.min(height[l], height[r]);
    const width = r - l;
    const area = width * _height;

    max = Math.max(area, max);

    if (height[l] <= height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return max;
}
