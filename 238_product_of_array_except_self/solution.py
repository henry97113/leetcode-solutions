from typing import List


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = [1] * len(nums)

        # first pass
        for i in range(1, len(nums)):
            res[i] = (res[i - 1]) * nums[i - 1]

        postfix = 1
        # second pass
        for i in range(len(nums) - 1, -1, -1):
            res[i] = res[i] * postfix
            postfix = postfix * nums[i]

        return res


solution = Solution()


print(solution.productExceptSelf([1, 2, 3, 4]))
