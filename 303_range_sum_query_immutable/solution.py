from typing import List


class NumArray:
    def __init__(self, nums: List[int]):
        prefixes = []
        total = 0

        for i in range(len(nums)):
            prefixes.append(nums[i] + total)
            total += nums[i]

        self.prefixes = prefixes

    def sumRange(self, left: int, right: int) -> int:
        preLeft = self.prefixes[left - 1] if left > 0 else 0
        preRight = self.prefixes[right]

        return preRight - preLeft


numArr = NumArray([-2, 0, 3, -5, 2, -1])
print(numArr.sumRange(0, 2))  # 1
print(numArr.sumRange(2, 5))  # -1
print(numArr.sumRange(0, 5))  # -3
