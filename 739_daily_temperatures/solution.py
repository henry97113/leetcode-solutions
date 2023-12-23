from typing import List, Tuple


class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0] * len(temperatures)
        stack = []  # temp, index

        for i, temp in enumerate(temperatures):
            while len(stack) > 0 and (temp > stack[-1][0]):
                stackTemp, stackIdx = stack.pop()
                res[stackIdx] = i - stackIdx

            stack.append([temp, i])

        return res


print(
    Solution().dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
)  # [1,1,4,2,1,1,0,0]
print(Solution().dailyTemperatures([30, 40, 50, 60]))  # [1,1,1,0]
print(Solution().dailyTemperatures([30, 60, 90]))  # [1,1,0]
