// Brute force
function minEatingSpeed(piles: number[], h: number): number {
  let k = 1
  let max = Math.max(...piles)
  let res = max

  while (k <= max) {
    let count = 0
    for (const pile of piles) {
      const c = Math.ceil(pile / k)
      count += c
    }
    if (count <= h) {
      res = Math.min(res, k)
    }
    k += 1
  }
  return piles.length + 1
}

// Optimized with binary search
function minEatingSpeed(piles: number[], h: number): number {
  let left = 1
  let right = Math.max(...piles)
  let res = right

  while (left <= right) {
    const k = Math.floor(left + (right - left) / 2)
    let hours = 0

    for (const pile of piles) {
      hours += Math.ceil(pile / k)
    }

    if (hours <= h) {
      res = Math.min(res, k)
      right = k - 1
    } else {
      left = k + 1
    }
  }

  return res
}
