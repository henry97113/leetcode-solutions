function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums2.length < nums1.length) {
    ;[nums1, nums2] = [nums2, nums1]
  }

  let [left, right] = [0, nums1.length - 1]
  const totalLength = nums1.length + nums2.length
  const half = Math.floor(totalLength / 2)

  while (true) {
    const mid1 = Math.floor(left + (right - left) / 2)
    const mid2 = half - mid1 - 2

    // Handle the edge cases
    const getLeft = (arr: number[], index: number) =>
      index >= 0 ? arr[index] : -Infinity
    const getRight = (arr: number[], index: number) =>
      index + 1 < arr.length ? arr[index + 1] : Infinity

    const [leftA, leftB] = [getLeft(nums1, mid1), getLeft(nums2, mid2)]
    const [rightA, rightB] = [getRight(nums1, mid1), getRight(nums2, mid2)]

    if (leftA <= rightB && leftB <= rightA) {
      return totalLength % 2 === 0
        ? (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2
        : Math.min(rightA, rightB)
    } else if (rightB < leftA) {
      right = mid1 - 1
      // when rightA < leftB
    } else {
      left = mid1 + 1
    }
  }
}
