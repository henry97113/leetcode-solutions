function kClosest(points: number[][], k: number): number[][] {
  const mpq = new MinPriorityQueue()

  points.forEach(([x, y], i) => {
    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    mpq.enqueue(i, distance)
  })

  const res: typeof points = []

  for (let i = 0; i < k; i++) {
    const index = mpq.dequeue().element
    res.push(points[index])
  }

  return res
}
