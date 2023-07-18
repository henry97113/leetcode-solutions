function dailyTemperatures(temperatures: number[]): number[] {
  const res: number[] = Array(temperatures.length).fill(0)
  const stack: [number, number][] = [] // [temperature, index]

  for (let i = 0; i < temperatures.length; i++) {
    const temperature = temperatures[i]

    while (stack.length > 0 && temperature > stack[stack.length - 1][0]) {
      const [temp, idx] = stack.pop()!
      res[idx] = i - idx
    }

    stack.push([temperature, i])
  }

  return res
}

console.log(dailyTemperatures([1, 1, 1, 1, 1, 2]))
