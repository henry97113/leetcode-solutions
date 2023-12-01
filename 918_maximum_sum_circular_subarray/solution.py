from typing import List


class Solution:
    def maxSubarraySumCircular(self, nums: List[int]) -> int:
        sum = 0
        currMax, maxSum = 0, nums[0]
        currMin, minSum = 0, nums[0]

        for num in nums:
            currMax = max(currMax + num, num)
            maxSum = max(maxSum, currMax)
            currMin = min(currMin + num, num)
            minSum = min(minSum, currMin)

            sum += num

        return max(maxSum, sum - minSum) if maxSum > 0 else maxSum


print(Solution().maxSubarraySumCircular([1, -2, 3, -2]))  # 3
print(Solution().maxSubarraySumCircular([5, -3, 5]))  # 10
print(Solution().maxSubarraySumCircular([1, 5, 3]))  # 9
print(Solution().maxSubarraySumCircular([1, 2, -1, 3]))  # 6
print(Solution().maxSubarraySumCircular([-1, -2, -3]))  # -1
