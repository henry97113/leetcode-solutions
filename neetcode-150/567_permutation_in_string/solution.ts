function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false

  const s1Count = Array(26).fill(0)
  const s2Count = Array(26).fill(0)
  let matches = 0

  for (let i = 0; i < s1.length; i++) {
    s1Count[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
    s2Count[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
  }

  for (let i = 0; i < 26; i++) {
    if (s1Count[i] === s2Count[i]) matches++
  }

  let l = 0
  for (let r = s1.length; r < s2.length; r++) {
    // check if the matches is 26 (match all letter count)
    if (matches === 26) return true

    // pop the prev letter and update the matches
    const prevIndex = s2[l].charCodeAt(0) - 'a'.charCodeAt(0)
    s2Count[prevIndex]--

    if (s1Count[prevIndex] === s2Count[prevIndex]) {
      matches++
    } else if (s1Count[prevIndex] - 1 === s2Count[prevIndex]) {
      // only decrement the matches when the s2Count[prevIndex] is only
      // larger than s1Count[prevIndex] by 1, or the matches can be incorrect
      // e.g. s2Count[prevIndex] = 2 & s1Count[prevIndex] = 1
      // in this case we shouldn't decrement the matches
      matches--
    }
    l++

    // push the new value and update the matches
    const nextIndex = s2[r].charCodeAt(0) - 'a'.charCodeAt(0)
    s2Count[nextIndex]++

    if (s1Count[nextIndex] === s2Count[nextIndex]) {
      // same logic as removing the prev letter
      matches++
    } else if (s1Count[nextIndex] + 1 === s2Count[nextIndex]) {
      matches--
    }
  }

  return matches === 26
}

const result = checkInclusion('ab', 'a')
console.log(result)
