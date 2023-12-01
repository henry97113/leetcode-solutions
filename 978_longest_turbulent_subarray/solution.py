from typing import List


class Solution:
    def maxTurbulenceSize(self, arr: List[int]) -> int:
        maxSize = 1
        left = 0
        prev = ""  # "<" or ">"

        for right in range(1, len(arr)):
            if arr[right - 1] == arr[right]:
                left = right
                continue

            curr = ""
            if arr[right - 1] < arr[right]:
                curr = "<"
            else:
                curr = ">"

            if curr == prev:
                left = right - 1

            prev = curr
            maxSize = max(maxSize, right - left + 1)

        return maxSize

    def maxTurbulenceSize2(self, arr: List[int]) -> int:
        maxSize = 1
        left, right = 0, 1
        prev = ""  # "<" or ">"

        while right < len(arr):
            if arr[right - 1] > arr[right] and prev != ">":
                maxSize = max(maxSize, right - left + 1)
                prev = ">"
                right += 1
            elif arr[right - 1] < arr[right] and prev != "<":
                maxSize = max(maxSize, right - left + 1)
                prev = "<"
                right += 1
            else:
                right = right + 1 if arr[right - 1] == arr[right] else right
                left = right - 1
                prev = ""

        return maxSize


print(Solution().maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9]))  # 5
print(Solution().maxTurbulenceSize([4, 8, 12, 16]))  # 2
print(Solution().maxTurbulenceSize([100]))  # 1
print(Solution().maxTurbulenceSize([1, 2, 3, 2, 1]))  # 3
print(Solution().maxTurbulenceSize([1, 2, 2, 1]))  # 2
print(Solution().maxTurbulenceSize([1, 2, 3, 4, 5]))  # 1
print(Solution().maxTurbulenceSize([1, 1, 2]))  # 2
