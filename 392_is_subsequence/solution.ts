function isSubsequence(s: string, t: string): boolean {
  let pointer = 0
  for (let i = 0; i < t.length; i++) {
    if (s[pointer] === t[i]) pointer++
    if (pointer >= s.length) break
  }
  return pointer === s.length
}
