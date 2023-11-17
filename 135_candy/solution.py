from typing import List


class Solution:
    def candy(self, ratings: List[int]) -> int:
        candies = [1] * len(ratings)

        # first pass
        for i in range(1, len(ratings)):
            if ratings[i - 1] < ratings[i]:
                candies[i] = candies[i - 1] + 1

        # second pass
        for i in range(len(ratings) - 2, -1, -1):
            if ratings[i] > ratings[i + 1] and candies[i] <= candies[i + 1]:
                candies[i] = candies[i + 1] + 1

        return sum(candies)
