from typing import List


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        nums_set = set(nums)
        max_len = 0
        for num in nums:
            if (num - 1) not in nums_set:
                cur_len = 1
                while num + 1 in nums_set:
                    cur_len += 1
                    num += 1
                max_len = max(cur_len, max_len)
        return max_len
