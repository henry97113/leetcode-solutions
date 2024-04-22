from typing import List


# Time: O(len(nums1) * len(nums2))
# Space: O(len(nums1) + len(nums2))
class Solution1:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        res = [-1] * len(nums1)
        for i, num in enumerate(nums1):
            idx = nums2.index(num)
            for j in range(idx, len(nums2)):
                if nums2[j] > num:
                    res[i] = nums2[j]
                    break

        return res


# Time: O(len(nums1) + len(nums2))
# Space: O(len(nums1) + len(nums2))
class Solution2:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        seen = {}  # {num: index}
        for i in range(len(nums1)):
            seen[nums1[i]] = i

        stack = []  # monotonic decreasing stack
        res = [-1] * len(nums1)
        for j in range(len(nums2)):
            while stack and stack[-1] < nums2[j]:
                num = stack.pop()
                if num in seen:
                    idx = seen[num]
                    res[idx] = nums2[j]
            stack.append(nums2[j])

        return res
