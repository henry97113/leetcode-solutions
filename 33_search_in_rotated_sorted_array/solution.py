from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums) - 1

        while l <= r:
            # find the mid
            m = l + (r - l) // 2
            if nums[m] == target:
                return m
            # mid belongs to left side
            if nums[l] <= nums[m]:
                if target > nums[m]:
                    l = m + 1
                elif target < nums[l]:
                    l = m + 1
                else:
                    r = m - 1
            # mid belongs to right side
            else:
                if target > nums[r]:
                    r = m - 1
                elif target < nums[m]:
                    r = m - 1
                else:
                    l = m + 1

        return -1
