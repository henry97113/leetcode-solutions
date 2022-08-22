/**
 * LeetCode 271
 * https://leetcode.com/problems/encode-and-decode-strings/ (LeetCode Premium)
 * https://www.lintcode.com/problem/659/
 */

// str.length + "#" + str
// e.g. ['apple', 'orange'] => "5#apple6#orange"

function encode(strs: string[]): string {
  const encoded = strs
    .map((str) => {
      return `${str.length}#${str}`;
    })
    .join('');

  return encoded;
}

function decode(str: string): string[] {
  const decoded: string[] = [];

  let pointer = 0;
  let index = 0;
  while (index < str.length) {
    if (str[pointer] !== '#') {
      pointer++;
      continue;
    }

    const strLength = +str.slice(index, pointer);
    const curStr = str.slice(pointer + 1, pointer + strLength + 1);

    decoded.push(curStr);

    index = pointer + strLength + 1;
    pointer = index + 1;
  }

  return decoded;
}
