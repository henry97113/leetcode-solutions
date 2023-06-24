function sortColors(nums: number[]): void {
  const buckets = [0, 0, 0]

  for (let i = 0; i < nums.length; i++) {
    buckets[nums[i]]++
  }

  let pointer = 0
  for (let n = 0; n < buckets.length; n++) {
    for (let j = 0; j < buckets[n]; j++) {
      nums[pointer] = n
      pointer++
    }
  }
}
