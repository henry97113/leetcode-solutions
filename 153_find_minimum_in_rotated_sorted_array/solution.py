from typing import List


class Solution:
    def findMin(self, nums: List[int]) -> int:
        res = nums[0]

        left, right = 0, len(nums) - 1

        while left <= right:
            mid = left + (right - left) // 2
            res = min(res, nums[mid])

            if nums[left] <= nums[mid]:
                res = min(res, nums[left])
                left = mid + 1
            else:
                right = mid - 1

        return res
