class Solution:
    # Time: O(26 * n), Space: O(n)
    def characterReplacement(self, s: str, k: int) -> int:
        res = 0
        l = 0
        count = {}

        for r in range(len(s)):
            count[s[r]] = 1 + count.get(s[r], 0)

            # Instead of seeking the longest combination, look for how many chars can be replaced.
            # With this, we don't need to track the indices of the char replaced.
            while (r - l + 1) - max(count.values()) > k:
                count[s[l]] -= 1
                l += 1

            res = max(res, r - l + 1)

        return res

    # Time: O(n), Space: O(n)
    def characterReplacement2(self, s: str, k: int) -> int:
        res = 0
        l = 0
        count = {}
        maxF = 0

        for r in range(len(s)):
            count[s[r]] = 1 + count.get(s[r], 0)
            maxF = max(maxF, count.get(s[r], 0))

            while (r - l + 1) - maxF > k:
                count[s[l]] -= 1
                l += 1

            res = max(res, r - l + 1)

        return res
