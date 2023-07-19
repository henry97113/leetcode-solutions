// Max Heap
function findKthLargest(nums: number[], k: number): number {
  const mpq = new MaxPriorityQueue()

  for (const num of nums) {
    mpq.enqueue(num)
  }

  while (k > 1) {
    mpq.dequeue()
    k--
  }

  return mpq.front().element
}

// Quick Select
function findKthLargest(nums: number[], k: number): number {
  k = nums.length - k

  function quickSelect(l: number, r: number) {
    const pivot = nums[r]
    let p = l

    for (let i = l; i < r; i++) {
      if (nums[i] <= pivot) {
        ;[nums[i], nums[p]] = [nums[p], nums[i]]
        p++
      }
    }

    ;[nums[p], nums[r]] = [nums[r], nums[p]]

    if (k < p) return quickSelect(l, p - 1)
    else if (k > p) return quickSelect(p + 1, r)
    else return nums[p]
  }

  return quickSelect(0, nums.length - 1)
}
