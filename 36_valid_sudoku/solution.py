from typing import List


class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        vertical_sets = [set[str]() for i in range(9)]
        box_sets = [set[str]() for i in range(9)]

        for i, l in enumerate(board):
            horizontal_sets = set[str]()

            for j, cur in enumerate(l):
                if cur == '.':
                    continue
                if cur in horizontal_sets:
                    return False
                horizontal_sets.add(cur)

                # check columns
                if cur in vertical_sets[j]:
                    return False
                vertical_sets[j].add(cur)

                # check 3 x 3 boxes
                box_col = j // 3
                box_row = i // 3
                box_index = 3 * box_row + box_col

                if cur in box_sets[box_index]:
                    return False
                box_sets[box_index].add(cur)

        return True


solution = Solution()

print(
    solution.isValidSudoku(
        board=[
            ["1", ".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", ".", "1"],
            [".", ".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", ".", "."],
        ]
    )
)
