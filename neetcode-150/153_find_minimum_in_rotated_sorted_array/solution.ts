function findMin(nums: number[]): number {
  let res = nums[0]
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    if (nums[l] < nums[r]) {
      res = Math.min(res, nums[l])
      break
    }
    const mid = Math.floor(l + (r - l) / 2)
    res = Math.min(res, nums[mid])

    if (nums[l] <= nums[mid]) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  return res
}

console.log(findMin([3, 4, 5, 1, 2]))
