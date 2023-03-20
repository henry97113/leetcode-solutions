function search(nums: number[], target: number): number {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    const m = Math.floor(l + (r - l) / 2)
    if (nums[m] === target) return m

    // if it's in the left part
    if (nums[l] <= nums[m]) {
      // console.log({ target, mid: nums[m] })
      if (nums[l] <= target && target <= nums[m]) {
        r = m - 1
      } else {
        l = m + 1
      }
      //else
    } else {
      if (nums[m] <= target && target <= nums[r]) {
        l = m + 1
      } else {
        r = m - 1
      }
    }
  }
  return -1
}

console.log(search([5, 1, 2, 3, 4], 1))
// console.log(search([0, 1, 2], 0))
