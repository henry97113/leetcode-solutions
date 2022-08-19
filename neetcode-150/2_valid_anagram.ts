/**
 * LeetCode 242
 * https://leetcode.com/problems/valid-anagram/
 */

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const record: Record<string, number> = Object.create(null);

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (record[letter]) {
      record[letter]++;
    } else {
      record[letter] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    const letter = t[i];

    if (record[letter] === undefined) return false;
    if (record[letter] === 0) return false;

    record[letter]--;
    if (record[letter] === 0) {
      delete record[letter];
    }
  }

  const entries = Object.entries(record);

  if (entries.length > 0) return false;

  return true;
}
