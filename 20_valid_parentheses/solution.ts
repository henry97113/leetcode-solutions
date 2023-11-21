function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false;

  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  let arr: string[] = [];

  for (const cur of s) {
    if (map[cur] !== undefined) {
      arr.push(map[cur]);
    } else {
      // closing brackets
      if (arr.at(-1) !== cur) return false;
      arr.pop();
    }
  }

  return arr.length === 0;
}
