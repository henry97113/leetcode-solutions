/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

function guessNumber(n: number): number {
  let start = 1
  let end = n

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    const result = guess(mid)

    if (result === 1) start = mid + 1
    else if (result === -1) end = mid - 1
    else return mid
  }

  return -1
}
