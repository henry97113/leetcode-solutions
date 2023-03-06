function largestRectangleArea(heights: number[]): number {
  let largestArea = 0
  const stack: { index: number; height: number }[] = []

  for (let i = 0; i < heights.length; i++) {
    let start = i

    while (stack.length > 0 && stack[stack.length - 1].height > heights[i]) {
      const { index: lastIndex, height } = stack.pop()!
      start = lastIndex
      const area = (i - lastIndex) * height
      largestArea = Math.max(largestArea, area)
    }

    stack.push({ index: start, height: heights[i] })
  }

  for (const { index, height } of stack) {
    const area = (heights.length - index) * height
    largestArea = Math.max(largestArea, area)
  }

  return largestArea
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
console.log(largestRectangleArea([1, 1, 3, 1, 2]))
