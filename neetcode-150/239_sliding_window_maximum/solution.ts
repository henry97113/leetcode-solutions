function maxSlidingWindow(nums: number[], k: number): number[] {
  const result: number[] = []
  const q: number[] = []

  for (let i = 0; i < nums.length; i++) {
    while (q.length > 0 && q.at(-1)! < nums[i]) {
      q.pop()
    }
    q.push(nums[i])

    const j = i + 1 - k

    if (j >= 0) {
      result.push(q[0])
      if (nums[j] === q[0]) q.shift()
    }
  }
  return result
}
