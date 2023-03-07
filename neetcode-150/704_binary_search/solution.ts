function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const index = Math.ceil((right + left) / 2)
    const cur = nums[index]

    if (cur === target) return index

    if (cur < target) left = index + 1
    else right = index - 1
  }
  return -1
}
