from typing import List


class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        left = right = 0
        window = set()

        while right < len(nums):
            # check if we find any duplicate
            if nums[right] in window:
                return True

            # add the num to window
            window.add(nums[right])
            right += 1

            # pop the left num
            if right - left > k:
                window.remove(nums[left])
                left += 1

        return False


print(Solution().containsNearbyDuplicate([1, 2, 3, 1], 3))  # true
print(Solution().containsNearbyDuplicate([1, 0, 1, 1], 1))  # true
print(Solution().containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))  # false
