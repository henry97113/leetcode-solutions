from typing import List


class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        res = 0
        currSum = 0
        prefixSums = {0: 1}

        for num in nums:
            currSum += num
            diff = currSum - k
            res += prefixSums.get(diff, 0)
            prefixSums[currSum] = 1 + prefixSums.get(currSum, 0)

        return res


print(Solution().subarraySum([1, 1, 1], 2))  # 2
print(Solution().subarraySum([1, 2, 3], 3))  # 2
print(Solution().subarraySum([1, -1, 1, 1, 1, 1], 3))  # 4
