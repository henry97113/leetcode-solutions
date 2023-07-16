function subsets(nums: number[]): number[][] {
  const result: number[][] = []
  const subset: number[] = []

  function dfs(index: number) {
    if (index >= nums.length) {
      result.push([...subset])
      return
    }

    // decision to include nums[index]
    subset.push(nums[index])
    dfs(index + 1)

    // decision NOT to include nums[index]
    subset.pop()
    dfs(index + 1)
  }

  dfs(0)

  return result
}
