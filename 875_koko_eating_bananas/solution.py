from math import ceil
from typing import List


class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        max_value = max(piles)
        res = max_value

        left, right = 1, max_value

        while left <= right:
            mid = left + (right - left) // 2
            hours = 0

            for pile in piles:
                hours += ceil(pile / mid)

            if hours <= h:
                res = min(res, mid)
                right = mid - 1
            else:
                left = mid + 1

        return res


print(Solution().minEatingSpeed(piles=[3, 6, 7, 11], h=8))  # 4
print(Solution().minEatingSpeed(piles=[30, 11, 23, 4, 20], h=5))  # 30
print(Solution().minEatingSpeed(piles=[30, 11, 23, 4, 20], h=6))  # 23
print(Solution().minEatingSpeed(piles=[312884470], h=312884469))  # 2
