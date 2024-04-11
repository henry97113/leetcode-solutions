from typing import List


class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        pattern = None
        for i in range(len(nums) - 1):
            if nums[i] == nums[i + 1]:
                continue

            cur_pattern = "increasing" if nums[i] < nums[i + 1] else "decreasing"
            if pattern:
                if cur_pattern != pattern:
                    return False
            else:
                pattern = cur_pattern

        return True


print(Solution().isMonotonic([1, 2, 2, 3]))  # True
print(Solution().isMonotonic([6, 5, 4, 4]))  # True
print(Solution().isMonotonic([1, 3, 2]))  # False
print(Solution().isMonotonic([1, 1, 1]))  # True
print(Solution().isMonotonic([1]))  # True
