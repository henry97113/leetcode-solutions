from typing import List


class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        res = float("inf")  # or `len(nums) + 1`
        left = 0
        currSum = 0

        for right in range(len(nums)):
            currSum += nums[right]

            while currSum >= target:
                res = min(res, right - left + 1)
                currSum -= nums[left]
                left += 1

        # use `int(res)` to make linter silent
        return 0 if res == float("inf") else int(res)


print(Solution().minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))  # 2
print(Solution().minSubArrayLen(4, [1, 4, 4]))  # 1
print(Solution().minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]))  # 0
