from typing import List


class Solution:
    # Time: O(n), Space: O(n)
    def trap(self, height: List[int]) -> int:
        maxL, maxR = [0] * len(height), [0] * len(height)
        water = [0] * len(height)

        # max left
        for i in range(1, len(height)):
            maxL[i] = max(maxL[i - 1], height[i - 1])

        # max right
        for i in range(len(height) - 2, -1, -1):
            maxR[i] = max(maxR[i + 1], height[i + 1])

        # # calculate the water in each position
        for i in range(len(height)):
            w = min(maxL[i], maxR[i]) - height[i]
            if w > 0:
                water[i] = w

        return sum(water)

    # Time: O(n), Space: O(1)
    def trap2(self, height: List[int]) -> int:
        water = 0
        l, r = 0, len(height) - 1
        maxL, maxR = height[l], height[r]

        while l < r:
            if maxL <= maxR:
                l += 1
                sum = maxL - height[l]
                if sum > 0:
                    water += sum
                maxL = max(maxL, height[l])

            else:
                r -= 1
                sum = maxR - height[r]
                if sum > 0:
                    water += sum
                maxR = max(maxR, height[r])

        return water
