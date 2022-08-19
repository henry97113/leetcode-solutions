/**
 * LeetCode 49
 * https://leetcode.com/problems/group-anagrams/
 */

function groupAnagrams(strs: string[]): string[][] {
  const record: Record<string, string[]> = Object.create(null);

  for (let i = 0; i < strs.length; i++) {
    const count = Array(26).fill(0);
    const cur = strs[i];

    for (let j = 0; j < cur.length; j++) {
      const letter = cur[j];
      const index = letter.charCodeAt(0) - 'a'.charCodeAt(0);

      count[index]++;
    }

    const str = count.toString();

    if (str in record) {
      record[str].push(cur);
    } else {
      record[str] = [cur];
    }
  }

  const result = Object.values(record);

  return result;
}
