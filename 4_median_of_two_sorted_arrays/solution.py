from typing import List


class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        A, B = nums1, nums2
        total = len(A) + len(B)
        half = total // 2

        if len(A) > len(B):
            A, B = B, A

        l, r = 0, len(A) - 1

        while True:
            i = l + (r - l) // 2
            j = half - i - 2

            ALeft = A[i] if i >= 0 else float("-inf")
            ARight = A[i + 1] if (i + 1) < len(A) else float("inf")
            BLeft = B[j] if j >= 0 else float("-inf")
            BRight = B[j + 1] if (j + 1) < len(B) else float("inf")

            # found the correct partition
            if ALeft <= BRight and BLeft <= ARight:
                if total % 2 == 1:
                    return min(ARight, BRight)
                else:
                    leftMax = max(ALeft, BLeft)
                    rightMin = min(ARight, BRight)
                    return (leftMax + rightMin) / 2
            elif ALeft > BRight:
                r = i - 1
            else:
                l = i + 1
