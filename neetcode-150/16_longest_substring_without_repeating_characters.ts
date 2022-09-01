/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Time: O(n) | Space: O(n)
 */

function lengthOfLongestSubstring(s: string): number {
  let maxLen = 0;
  let l = 0;
  let charSet: Set<string> = new Set();

  for (let r = 0; r < s.length; r++) {
    while (charSet.has(s[r])) {
      charSet.delete(s[l]);
      l++;
    }
    charSet.add(s[r]);
    maxLen = Math.max(maxLen, charSet.size);
  }

  return maxLen;
}
