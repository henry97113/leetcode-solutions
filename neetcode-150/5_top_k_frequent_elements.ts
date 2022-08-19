/**
 * LeetCode 347
 * https://leetcode.com/problems/top-k-frequent-elements/
 */

function topKFrequent(nums: number[], k: number): number[] {
  const occurrences: Record<string, number> = Object.create(null);
  const buckets = Array.from<unknown, number[]>(
    { length: nums.length + 1 },
    () => []
  );

  for (const num of nums) {
    if (occurrences[num]) {
      occurrences[num]++;
    } else {
      occurrences[num] = 1;
    }
  }

  // populate the number into buckets
  for (const [num, occ] of Object.entries(occurrences)) {
    buckets[occ].push(+num);
  }

  const result: number[] = [];

  for (let i = buckets.length - 1; i >= 0; i--) {
    if (result.length >= k) break;
    const nums = buckets[i];
    if (nums === undefined) continue;
    result.push(...nums);
  }

  return result;
}
