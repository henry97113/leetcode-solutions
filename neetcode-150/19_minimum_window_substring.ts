/**
 * https://leetcode.com/problems/minimum-window-substring/
 * Time: O(S + T) | Space: O(S + T)
 */

function minWindow(s: string, t: string): string {
  if (s.length < t.length) return '';

  let l = 0;
  let r = 0;
  let str = '';
  let tMap = new Map<string, number>();
  let frequencyMap = new Map<string, number>();

  for (let letter of t) {
    tMap.set(letter, (tMap.get(letter) ?? 0) + 1);
  }

  let need = tMap.size;
  let matched = 0;

  while (r <= s.length) {
    // if matched equals need, set the str
    const allMatched = need === matched;
    if (allMatched) {
      const matchedStr = s.slice(l, r);
      if (str === '') {
        str = matchedStr;
      } else if (matchedStr.length < str.length) {
        str = matchedStr;
      }

      // move l
      const lLetter = s[l];
      frequencyMap.set(lLetter, (frequencyMap.get(lLetter) as number) - 1);

      if (
        tMap.get(lLetter) &&
        (frequencyMap.get(lLetter) as number) < (tMap.get(lLetter) as number)
      ) {
        matched--;
      }

      l++;
      continue;
    }

    const curLetter = s[r];
    // add to the list
    frequencyMap.set(curLetter, (frequencyMap.get(curLetter) ?? 0) + 1);

    // check if the matched equals need. If it is, update matched count
    const isMatched = frequencyMap.get(curLetter) === tMap.get(curLetter);
    if (isMatched) {
      matched++;
    }

    r++;
  }

  return str;
}
