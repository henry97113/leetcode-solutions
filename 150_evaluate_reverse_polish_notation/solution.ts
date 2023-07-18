function evalRPN(tokens: string[]): number {
  const stack: number[] = []

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === '+') {
      const num2 = +stack.pop()!
      const num1 = +stack.pop()!
      stack.push(num1 + num2)
    } else if (tokens[i] === '-') {
      const num2 = +stack.pop()!
      const num1 = +stack.pop()!
      stack.push(num1 - num2)
    } else if (tokens[i] === '*') {
      const num2 = +stack.pop()!
      const num1 = +stack.pop()!
      stack.push(num1 * num2)
    } else if (tokens[i] === '/') {
      const num2 = +stack.pop()!
      const num1 = +stack.pop()!
      stack.push(Math.trunc(num1 / num2))
    } else {
      stack.push(+tokens[i])
    }
  }
  return stack[0]
}
