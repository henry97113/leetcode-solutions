from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) == 1:
            return 0

        l, r = 0, 1
        maxPrice = 0

        while r < len(prices):
            if prices[l] < prices[r]:
                profit = prices[r] - prices[l]
                maxPrice = max(maxPrice, profit)
            else:
                l = r
            r += 1

        return maxPrice
