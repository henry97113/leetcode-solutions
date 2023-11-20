function init() {
  const arr = Array.from({ length: 26 }).map<[string, number]>((cur, index) => {
    const aCode = 'A'.charCodeAt(0);
    return [String.fromCharCode(aCode + index), 0];
  });
  const map = new Map<string, number>(arr);
  return map;
}

function characterReplacement(s: string, k: number): number {
  let [l, r, max] = [0, 0, 0];
  const frequencyMap = init();

  while (r < s.length) {
    const currentLetter = s[r];
    frequencyMap.set(
      currentLetter,
      (frequencyMap.get(currentLetter) as number) + 1
    );

    let currentLength = r - l + 1 - Math.max(...frequencyMap.values());
    const canSlide = currentLength > k;

    if (canSlide) {
      frequencyMap.set(s[l], (frequencyMap.get(s[l]) as number) - 1);
      l++;
    }

    max = Math.max(max, r - l + 1);
    r++;
  }

  return max;
}
