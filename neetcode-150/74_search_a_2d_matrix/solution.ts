function searchMatrix(matrix: number[][], target: number): boolean {
  const numOfCol = matrix[0].length
  function findIndex(idx: number) {
    const row = Math.floor(idx / numOfCol)
    const idxInRow = idx % numOfCol
    return [row, idxInRow]
  }

  const numOfDigits = matrix.length * numOfCol

  let start = 0
  let end = numOfDigits - 1

  while (start <= end) {
    const pos = Math.floor((start + end) / 2)
    const [row, idxInRow] = findIndex(pos)
    const cur = matrix[row][idxInRow]

    if (cur === target) return true

    if (cur < target) start = pos + 1
    else end = pos - 1
  }

  return false
}
