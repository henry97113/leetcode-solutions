from typing import List


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxSum = nums[0]
        currSum = 0

        for num in nums:
            currSum = max(currSum, 0)
            currSum += num
            maxSum = max(maxSum, currSum)

        return maxSum


print(Solution().maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))  # 6
print(Solution().maxSubArray([1]))  # 1
print(Solution().maxSubArray([5, 4, -1, 7, 8]))  # 23
print(Solution().maxSubArray([-3, -4, -1, -2]))  # -1
