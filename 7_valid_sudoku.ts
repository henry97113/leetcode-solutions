/**
 * LeetCode 36
 * https://leetcode.com/problems/valid-sudoku/
 */

function isValidSudoku(board: string[][]): boolean {
  const verticalSets: Set<string>[] = Array.from(
    { length: 9 },
    () => new Set()
  );
  const boxSets: Set<string>[] = Array.from({ length: 9 }, () => new Set());
  // check horizontally
  for (let i = 0; i < board.length; i++) {
    const horizontalSet: Set<string> = new Set();
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      const cur = row[j];
      if (cur === '.') continue;

      if (horizontalSet.has(cur)) return false;
      horizontalSet.add(cur);

      // check vertically
      if (verticalSets[j].has(cur)) return false;
      // Add the digit to the verticalSets
      verticalSets[j].add(cur);

      // check 3 x 3
      const boxRow = Math.floor(i / 3);
      const boxCol = Math.floor(j / 3);
      const boxIndex = boxRow * 3 + boxCol;
      if (boxSets[boxIndex].has(cur)) return false;
      //Add the digit to the boxSets
      boxSets[boxIndex].add(cur);
    }
  }
  return true;
}
