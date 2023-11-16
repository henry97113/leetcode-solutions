from typing import List


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        res: List[List[int]] = []

        for index, num in enumerate(nums):
            if num > 0:
                break

            if index > 0 and num == nums[index - 1]:
                continue

            l, r = index + 1, len(nums) - 1

            while l < r:
                total = num + nums[l] + nums[r]
                if total < 0:
                    l += 1
                elif total > 0:
                    r -= 1
                else:
                    res.append([num, nums[l], nums[r]])
                    l += 1
                    r -= 1
                    while (nums[l] == nums[l - 1]) and l < r:
                        l += 1
        return res


print(Solution().threeSum([-1, -1, 0, 0, 1, 1]))
