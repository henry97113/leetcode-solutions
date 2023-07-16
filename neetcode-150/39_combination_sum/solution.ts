function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = []

  function dfs(index: number, curr: number[], total: number) {
    if (total === target) {
      result.push([...curr])
      return
    }
    if (index >= candidates.length || total > target) {
      return
    }

    curr.push(candidates[index])
    dfs(index, curr, total + candidates[index])

    curr.pop()
    dfs(index + 1, curr, total)
  }

  dfs(0, [], 0)

  return result
}
