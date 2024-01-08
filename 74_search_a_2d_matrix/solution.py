from typing import List


class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        ROWS, COLUMNS = len(matrix), len(matrix[0])

        # First binary search to find the row
        top, bottom = 0, ROWS - 1
        while top <= bottom:
            row = top + (bottom - top) // 2
            if matrix[row][0] > target:
                bottom = row - 1
            elif matrix[row][-1] < target:
                top = row + 1
            else:
                break

        if not (top <= bottom):
            return False

        # Second binary search to find the target
        row = top + (bottom - top) // 2
        l, r = 0, COLUMNS - 1
        while l <= r:
            mid = l + (r - l) // 2

            if matrix[row][mid] > target:
                r = mid - 1
            elif target > matrix[row][mid]:
                l = mid + 1
            else:
                return True

        return False
