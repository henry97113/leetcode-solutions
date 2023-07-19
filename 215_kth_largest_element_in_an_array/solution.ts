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
