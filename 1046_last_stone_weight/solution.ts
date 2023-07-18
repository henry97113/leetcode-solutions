function lastStoneWeight(stones: number[]): number {
  let maxHeap: number[] = []

  function heapify(arr: number[]) {
    arr.push(arr[0])
    maxHeap = arr

    let cur = Math.trunc((maxHeap.length - 1) / 2)
    while (cur > 0) {
      let i = cur

      while (2 * i < maxHeap.length) {
        if (
          2 * i < maxHeap.length &&
          maxHeap[2 * i + 1] > maxHeap[2 * i] &&
          maxHeap[2 * i + 1] > maxHeap[i]
        ) {
          const temp = maxHeap[2 * i + 1]
          maxHeap[2 * i + 1] = maxHeap[i]
          maxHeap[i] = temp
          i = 2 * i + 1
        } else if (maxHeap[2 * i] > maxHeap[i]) {
          const temp = maxHeap[2 * i]
          maxHeap[2 * i] = maxHeap[i]
          maxHeap[i] = temp
          i = 2 * i
        } else {
          break
        }
      }
      cur--
    }
  }

  function push(val: number) {
    maxHeap.push(val)
    let i = maxHeap.length - 1

    while (i > 1 && maxHeap[i] > maxHeap[Math.trunc(i / 2)]) {
      const temp = maxHeap[Math.trunc(i / 2)]
      maxHeap[Math.trunc(i / 2)] = maxHeap[i]
      maxHeap[i] = temp
      i = Math.trunc(i / 2)
    }
  }

  function pop() {
    if (maxHeap.length === 1) {
      return -1
    }
    if (maxHeap.length === 2) {
      return maxHeap.pop()
    }

    let res = maxHeap[1]
    maxHeap[1] = maxHeap.pop() as number

    let i = 1

    while (2 * i < maxHeap.length) {
      if (
        2 * i + 1 < maxHeap.length &&
        maxHeap[2 * i + 1] > maxHeap[2 * i] &&
        maxHeap[2 * i + 1] > maxHeap[i]
      ) {
        const temp = maxHeap[2 * i + 1]
        maxHeap[2 * i + 1] = maxHeap[i]
        maxHeap[i] = temp
        i = 2 * i + 1
      } else if (maxHeap[2 * i] > maxHeap[i]) {
        const temp = maxHeap[2 * i]
        maxHeap[2 * i] = maxHeap[i]
        maxHeap[i] = temp
        i = 2 * i
      } else {
        break
      }
    }
    return res
  }

  heapify(stones)

  if (maxHeap.length === 2) {
    return maxHeap[1]
  }

  while (maxHeap.length > 2) {
    const firstStone = pop() as number
    const secondStone = pop() as number

    if (firstStone > secondStone) {
      push(firstStone - secondStone)
    } else if (secondStone > firstStone) {
      push(secondStone - firstStone)
    } else {
      // Do nothing
    }
  }

  return maxHeap[1] ?? 0
}

console.log(lastStoneWeight([4, 3, 4, 3, 2]))
