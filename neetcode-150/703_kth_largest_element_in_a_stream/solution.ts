class KthLargest {
  private minHeap: number[]
  private k: number

  constructor(k: number, nums: number[]) {
    this.k = k
    // Min heap with K largest integers
    this.minHeap = [0]
    for (const num of nums) {
      this.add(num)
    }
  }

  add(val: number): number {
    if (this.minHeap.length === this.k + 1) {
      if (val < this.minHeap[1]) {
        return this.minHeap[1]
      }
      this.pop()
    }

    this.minHeap.push(val)
    let i = this.minHeap.length - 1
    // Percolate up
    while (i > 1 && this.minHeap[Math.floor(i / 2)] > this.minHeap[i]) {
      const temp = this.minHeap[Math.floor(i / 2)]
      this.minHeap[Math.floor(i / 2)] = this.minHeap[i]
      this.minHeap[i] = temp
      i = Math.floor(i / 2)
    }
    return Math.min(this.minHeap[1])
  }
  pop() {
    if (this.minHeap.length === 1) {
      return null
    }
    if (this.minHeap.length === 2) {
      return this.minHeap.pop()
    }

    let res = this.minHeap[1]
    // Move last value to root
    this.minHeap[1] = this.minHeap.pop() as number
    let i = 1

    // Percolate down
    while (2 * i < this.minHeap.length) {
      if (
        2 * i + 1 < this.minHeap.length &&
        this.minHeap[2 * i + 1] < this.minHeap[2 * i] &&
        this.minHeap[2 * i + 1] < this.minHeap[i]
      ) {
        // Swap right child
        const temp = this.minHeap[2 * i + 1]
        this.minHeap[2 * i + 1] = this.minHeap[i]
        this.minHeap[i] = temp
        i = 2 * i + 1
      } else if (this.minHeap[2 * i] < this.minHeap[i]) {
        // Swap left child
        const temp = this.minHeap[2 * i]
        this.minHeap[2 * i] = this.minHeap[i]
        this.minHeap[i] = temp
        i = 2 * i
      } else {
        // Already in the right position
        break
      }
    }
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
