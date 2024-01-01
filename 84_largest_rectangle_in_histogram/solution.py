from typing import List


class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        maxArea = 0
        stack = []  # (index, height)

        for index, height in enumerate(heights):
            startIndex = index
            while stack and stack[-1][1] > height:
                i, h = stack.pop()
                maxArea = max(maxArea, h * (index - i))
                startIndex = i

            stack.append((startIndex, height))

        for index, height in stack:
            maxArea = max(maxArea, height * (len(heights) - index))

        return maxArea


print(Solution().largestRectangleArea(heights=[2, 1, 5, 6, 2, 3]))  # 10
print(Solution().largestRectangleArea(heights=[2, 4]))  # 4
print(Solution().largestRectangleArea(heights=[6, 6, 6]))  # 18
print(Solution().largestRectangleArea(heights=[0, 1, 0]))  # 1
print(Solution().largestRectangleArea(heights=[2, 1, 1]))  # 3
