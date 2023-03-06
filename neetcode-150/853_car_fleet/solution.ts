function carFleet(target: number, position: number[], speed: number[]): number {
  const arr = position
    .map((pos, i) => ({ position: pos, speed: speed[i] }))
    .sort((a, b) => a.position - b.position)

  const stack: number[] = []

  for (let i = arr.length - 1; i >= 0; i--) {
    const position = arr[i].position
    const speed = arr[i].speed
    const timeToTarget = (target - position) / speed

    stack.push(timeToTarget)

    // compare the last two items in the stack
    if (stack.length <= 1) continue

    if (stack.at(-2)! >= stack.at(-1)!) {
      stack.pop()
    }
  }

  return stack.length
}
