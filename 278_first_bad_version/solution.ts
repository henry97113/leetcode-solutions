/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let start = 1
    let end = n

    while (start <= end) {
      const mid = Math.floor((start + end) / 2)
      const isMatch = isBadVersion(mid)
      if (isMatch) {
        if (!isBadVersion(Math.max(mid - 1, 0))) return mid
        end = mid - 1
      } else {
        start = mid + 1
      }
    }

    return -1
  }
}
