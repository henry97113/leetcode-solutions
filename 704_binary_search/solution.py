from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums) - 1

        while l <= r:
            mid = l + (r - l) // 2
            num = nums[mid]

            if num < target:
                l = mid + 1
            elif num > target:
                r = mid - 1
            else:
                return mid

        return -1


print(Solution().search([-1, 0, 3, 5, 9, 12], 9))  # 4
print(Solution().search([-1, 0, 3, 5, 9, 12], 2))  # -1
print(Solution().search([-1, 0, 3, 5, 9], 9))  # 4
print(Solution().search([1], 2))  # -1
print(Solution().search([2], 2))  # 0
print(Solution().search([1, 2], 2))  # 1
print(Solution().search([1, 2], 1))  # 0
print(Solution().search([1, 2], 3))  # -1
print(Solution().search([1, 2], 0))  # -1
