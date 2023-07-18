/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Time: O(n) | Space: O(1)
 */

function maxProfit(prices: number[]): number {
  if (prices.length <= 1) return 0;

  let [l, r] = [0, 1];
  let maxP = 0;

  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      const profit = prices[r] - prices[l];
      maxP = Math.max(maxP, profit);
    } else {
      l = r;
    }
    r++;
  }

  return maxP;
}
