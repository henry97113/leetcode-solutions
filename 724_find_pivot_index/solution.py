from typing import List


class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        prefixes = []
        total = 0

        for num in nums:
            total += num
            prefixes.append(total)

        for i in range(len(nums)):
            left = 0 if i == 0 else prefixes[i - 1]
            right = prefixes[-1] - prefixes[i]
            if left == right:
                return i

        return -1


solution = Solution()

print(solution.pivotIndex([1, 7, 3, 6, 5, 6]))  # 3
print(solution.pivotIndex([1, 2, 3]))  # -1
print(solution.pivotIndex([2, 1, -1]))  # 0  [2, 3, 2]
print(solution.pivotIndex([1]))  # 0
print(solution.pivotIndex([1, -1]))  # -1
