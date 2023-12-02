from typing import List


class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        res = 0
        left = 0
        sum = 0

        for right in range(len(arr)):
            # pop the left
            if right - left + 1 > k:
                sum -= arr[left]
                left += 1

            # update the sum
            sum += arr[right]

            # check the avg
            windowSize = right - left + 1
            avg = int(sum / windowSize)
            if windowSize == k and avg >= threshold:
                res += 1

        return res

    # neater way
    def numOfSubarrays2(self, arr: List[int], k: int, threshold: int) -> int:
        res = 0
        currSum = sum(arr[: k - 1])

        for left in range(k, len(arr)):
            currSum += arr[left]

            if currSum / k > threshold:
                res += 1

            currSum -= arr[left]
        return res


print(Solution().numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4))  # 3
print(Solution().numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5))  # 6
