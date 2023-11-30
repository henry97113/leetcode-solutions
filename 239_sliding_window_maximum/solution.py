from collections import deque
from typing import List


class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        if len(nums) < k:
            return []

        queue: deque[int] = deque()  # indicies of nums
        res: List[int] = []

        l = r = 0

        while r < len(nums):
            # remove the smaller numbers from the right
            while queue and nums[queue[-1]] < nums[r]:
                queue.pop()

            # insert the new number
            queue.append(r)

            # check if the largest num is out of bound
            if queue and queue[0] < l:
                queue.popleft()

            # append it to the res
            if r - l + 1 >= k:
                res.append(nums[queue[0]])
                l += 1

            r += 1

        return res


print(Solution().maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))  # [3,3,5,5,6,7]
print(Solution().maxSlidingWindow([1], 2))  # []
