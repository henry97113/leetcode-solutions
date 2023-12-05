from typing import List


class NumMatrix:
    def __init__(self, matrix: List[List[int]]):
        ROWS, COLS = len(matrix), len(matrix[0])
        self.sumMatrix = [[0] * (COLS + 1) for _ in range(ROWS + 1)]
        for row in range(ROWS):
            prev = 0
            for col in range(COLS):
                prev += matrix[row][col]
                above = self.sumMatrix[row][col + 1]
                self.sumMatrix[row + 1][col + 1] = prev + above

    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        row1, col1, row2, col2 = row1 + 1, col1 + 1, row2 + 1, col2 + 1

        bottomRight = self.sumMatrix[row2][col2]
        above = self.sumMatrix[row1 - 1][col2]
        left = self.sumMatrix[row2][col1 - 1]
        topLeft = self.sumMatrix[row1 - 1][col1 - 1]

        return bottomRight - above - left + topLeft


numMatrix = NumMatrix(
    [
        [3, 0, 1, 4, 2],
        [5, 6, 3, 2, 1],
        [1, 2, 0, 1, 5],
        [4, 1, 0, 1, 7],
        [1, 0, 3, 0, 5],
    ]
)

print(numMatrix.sumRegion(2, 1, 4, 3))  # return 8 (i.e sum of the red rectangle)
print(numMatrix.sumRegion(1, 1, 2, 2))  # return 11 (i.e sum of the green rectangle)
print(numMatrix.sumRegion(1, 2, 2, 4))  # return 12 (i.e sum of the blue rectangle)
